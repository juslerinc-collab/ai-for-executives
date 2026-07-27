// Minimal static file server for the HTML prototypes.
// Serves the repo root so /.scratch/... paths resolve, and — unlike file:// —
// preserves query strings, which every prototype's variant switcher depends on.
// Root is derived from this file's own URL: process.cwd() is blocked in the sandbox.

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join, extname, normalize } from "node:path";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const PORT = process.env.PORT || 4173;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

async function listing(dir, urlPath) {
  const { readdir } = await import("node:fs/promises");
  const entries = await readdir(dir, { withFileTypes: true });
  const rows = entries
    .filter((e) => !e.name.startsWith(".") || e.name === ".scratch")
    .sort((a, b) => Number(b.isDirectory()) - Number(a.isDirectory()) || a.name.localeCompare(b.name))
    .map((e) => {
      const href = join(urlPath, e.name) + (e.isDirectory() ? "/" : "");
      return `<li><a href="${href}">${e.name}${e.isDirectory() ? "/" : ""}</a></li>`;
    })
    .join("");
  return `<!doctype html><meta charset="utf-8"><title>${urlPath}</title>
<style>body{font:15px/1.7 -apple-system,system-ui,sans-serif;padding:40px;max-width:760px}
a{color:#1E2FDB;text-decoration:none}a:hover{text-decoration:underline}
li{list-style:none}ul{padding:0}h1{font-size:17px;font-weight:600;margin-bottom:18px}</style>
<h1>${urlPath}</h1><ul>${rows}</ul>`;
}

createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (normalize(urlPath).includes("..")) {
      res.writeHead(403).end("Forbidden");
      return;
    }
    const target = join(ROOT, urlPath);
    const info = await stat(target);

    if (info.isDirectory()) {
      try {
        const index = await readFile(join(target, "index.html"));
        res.writeHead(200, { "content-type": TYPES[".html"] }).end(index);
      } catch {
        res.writeHead(200, { "content-type": TYPES[".html"] }).end(await listing(target, urlPath));
      }
      return;
    }

    const body = await readFile(target);
    res.writeHead(200, {
      "content-type": TYPES[extname(target).toLowerCase()] ?? "application/octet-stream",
      "cache-control": "no-store",
    }).end(body);
  } catch {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" }).end("404");
  }
}).listen(PORT, () => {
  console.log(`prototypes served from ${ROOT} on http://localhost:${PORT}`);
});
