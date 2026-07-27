"""Throwaway: key the flat grey ground out of the editorial spot so the
transparency claim can actually be tested on both surfaces.

Flood-fills inward from the border, so only ground CONNECTED to the edge
goes transparent. Anything enclosed by the artwork stays. Deliberately
does not touch the cast shadow — the point is to see what a real cutout
leaves behind."""

import sys
from collections import deque
from PIL import Image

SRC, DST, SIZE, TOL = sys.argv[1], sys.argv[2], 900, 26

im = Image.open(SRC).convert("RGBA")
im.thumbnail((SIZE, SIZE), Image.LANCZOS)
w, h = im.size
px = im.load()

# ground colour = median-ish of the four corners
corners = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
gr = tuple(sum(c[i] for c in corners) // 4 for i in range(3))
print(f"ground {gr}  size {w}x{h}")

def near(p):
    return abs(p[0] - gr[0]) <= TOL and abs(p[1] - gr[1]) <= TOL and abs(p[2] - gr[2]) <= TOL

seen = bytearray(w * h)
q = deque()
for x in range(w):
    for y in (0, h - 1):
        if near(px[x, y]):
            q.append((x, y)); seen[y * w + x] = 1
for y in range(h):
    for x in (0, w - 1):
        if near(px[x, y]):
            q.append((x, y)); seen[y * w + x] = 1

cut = 0
while q:
    x, y = q.popleft()
    px[x, y] = (gr[0], gr[1], gr[2], 0)
    cut += 1
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nx, ny = x + dx, y + dy
        if 0 <= nx < w and 0 <= ny < h and not seen[ny * w + nx] and near(px[nx, ny]):
            seen[ny * w + nx] = 1
            q.append((nx, ny))

im.save(DST)
print(f"cut {cut} px ({cut / (w * h):.1%} of frame) -> {DST}")
