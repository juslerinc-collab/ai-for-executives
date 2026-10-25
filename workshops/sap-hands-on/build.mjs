// Builds the SAP hands-on deck into workshops/sap-hands-on/dist/index.html.
// Reuses the main deck's styles, assets and shell scripts so the look stays
// identical; only the content and the brand mark are this deck's own.
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const main = path.resolve(here, "../../build");
const BRAND = "Hands-on Session";

function readDir(dir, ext) {
  if (!existsSync(dir)) return "";
  return readdirSync(dir)
    .filter((f) => f.endsWith(ext))
    .sort()
    .map((f) => readFileSync(path.join(dir, f), "utf8"))
    .join("\n\n");
}

const css = readDir(path.join(main, "styles"), ".css") + "\n\n" + readDir(here, ".css");
let content = readDir(path.join(here, "content"), ".html");

// No session gate, no labs here — just the navigation shell and the reveals.
const jsFiles = ["rail-position.js", "shell-client.js", "reveal-client.js"];
const js =
  `const SEED = { gatePassword: "" };\n\n` +
  jsFiles
    .map((f) => {
      const code = readFileSync(path.join(main, "src", f), "utf8")
        .replace(/^export (function|const|class)\b/gm, "$1")
        .replaceAll("AI for Executives", BRAND);
      return f.endsWith("-client.js") ? `try {\n${code}\n} catch (err) { console.error("[${f}]", err); }` : code;
    })
    .join("\n\n");

const assetDir = path.join(main, "assets");
for (const f of readdirSync(assetDir)) {
  const m = f.match(/^(.*)\.(png|svg)$/);
  if (!m) continue;
  const mime = m[2] === "svg" ? "svg+xml" : "png";
  const uri = `data:image/${mime};base64,${readFileSync(path.join(assetDir, f)).toString("base64")}`;
  content = content.replaceAll(`{{ASSET:${m[1]}}}`, uri);
}

const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${BRAND} — Claude Code</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Archivo:wdth,wght@75..125,400..900&display=swap" rel="stylesheet">
<style>
${css}
</style>
</head>
<body class="paper-bg">

<!-- shell-client.js expects the gate elements; it stays hidden in this deck. -->
<div id="frontGate" class="gate hidden"><input id="frontGateInput"><div id="frontGateErr"></div><button id="frontGateGo"></button></div>

<nav id="navtop" aria-label="Folien"></nav>
<div id="mark"></div>

<div id="slides">
${content}
</div>

<script>
${js}
</script>
</body>
</html>
`;

const dist = path.join(here, "dist");
if (!existsSync(dist)) mkdirSync(dist);
writeFileSync(path.join(dist, "index.html"), html, "utf8");
console.log(`Built workshops/sap-hands-on/dist/index.html (${(html.length / 1024).toFixed(0)} KB)`);
