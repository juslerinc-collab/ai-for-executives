import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const dist = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), "dist");
createServer((req, res) => {
  try {
    const body = readFileSync(path.join(dist, "index.html"));
    res.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" });
    res.end(body);
  } catch (e) {
    res.writeHead(500); res.end(String(e));
  }
}).listen(4173, () => console.log("deck on 4173"));
