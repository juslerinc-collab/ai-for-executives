// Assembles build/content + build/styles + build/src + build/assets into the
// single self-contained dist/index.html deliverable.
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(here);

function readAll(dir, exts) {
  const dirPath = path.join(here, dir);
  if (!existsSync(dirPath)) return "";
  return readdirSync(dirPath)
    .filter((f) => exts.some((e) => f.endsWith(e)) && !f.endsWith(".test.js"))
    .sort()
    .map((f) => readFileSync(path.join(dirPath, f), "utf8"))
    .join("\n\n");
}

function stripExports(code) {
  return code.replace(/^export (function|const|class)\b/gm, "$1");
}

const css = readAll("styles", [".css"]);
const content = readAll("content", [".html"]);

const jsFileOrder = [
  "seed-config.js",
  "download-helper.js",
  "session0-state.js",
  "backlog-state.js",
  "rail-position.js",
  "shell-client.js",
  "session0-client.js",
  "lab-client.js",
  "backlog-client.js",
  "handout-client.js",
];
const js = jsFileOrder
  .map((f) => {
    const code = stripExports(readFileSync(path.join(here, "src", f), "utf8"));
    // Client scripts are independent DOM wiring modules concatenated into one
    // <script> tag. Without isolation, one module throwing (e.g. a selector
    // miss) silently halts every script after it in the same tag — wrap each
    // in try/catch so a bug in one beat can't take down the rest of the page.
    if (f.endsWith("-client.js")) {
      return `try {\n${code}\n} catch (err) { console.error("[${f}]", err); }`;
    }
    return code;
  })
  .join("\n\n");

function assetsDataUri() {
  const dir = path.join(here, "assets");
  if (!existsSync(dir)) return {};
  const map = {};
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".png") && !f.endsWith(".svg")) continue;
    const ext = f.endsWith(".svg") ? "svg+xml" : "png";
    const buf = readFileSync(path.join(dir, f));
    map[f.replace(/\.(png|svg)$/, "")] = `data:image/${ext};base64,${buf.toString("base64")}`;
  }
  return map;
}
const assets = assetsDataUri();
let contentWithAssets = content;
for (const [name, dataUri] of Object.entries(assets)) {
  contentWithAssets = contentWithAssets.replaceAll(`{{ASSET:${name}}}`, dataUri);
}

// Per-client seed block (spec.md's {{Rolle}}/{{Branche}}/{{Publikum}}/{{Firma}}
// mechanism): substitute at build time from build/src/seed-config.js so a new
// client only ever means editing that one file, never the lesson content.
const seedSrc = readFileSync(path.join(here, "src/seed-config.js"), "utf8");
const SEED = new Function(`${seedSrc}\nreturn SEED;`)();
for (const key of ["Rolle", "Branche", "Publikum", "Firma"]) {
  contentWithAssets = contentWithAssets.replaceAll(`{{${key}}}`, SEED[key]);
}

const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AI for Executives — Session 0 &amp; 1</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Archivo:wdth,wght@75..125,400..900&display=swap" rel="stylesheet">
<style>
${css}
</style>
</head>
<body class="paper-bg">

<div id="frontGate" class="gate navy-bg deep">
  <div class="glass gate-card">
    <h2 style="color:#fff">Willkommen.</h2>
    <p style="color:rgba(255,255,255,.7)">Ein Passwort, nur zum Anklopfen.</p>
    <input type="text" id="frontGateInput" placeholder="Passwort" autofocus>
    <div class="err" id="frontGateErr"></div>
    <button class="btn" id="frontGateGo">Eintreten</button>
  </div>
</div>

<div id="nav">
  <div id="rail"></div>
  <div id="menu"></div>
</div>
<div id="mark"></div>

<div id="slides">
${contentWithAssets}
</div>

<script>
${js}
</script>
</body>
</html>
`;

const distDir = path.join(root, "dist");
if (!existsSync(distDir)) mkdirSync(distDir);
writeFileSync(path.join(distDir, "index.html"), html, "utf8");
console.log(`Built dist/index.html (${(html.length / 1024).toFixed(0)} KB)`);
