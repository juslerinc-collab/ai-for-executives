/* ============================================================
   Board client: renders the backlog/matrix DOM from backlog-state.js's
   pure functions. Ported render logic from
   PROTOTYPE-backlog-matrix-v3.html, adapted to call the immutable
   state functions instead of mutating a shared object directly.
   ============================================================ */
(function () {
  const root = document.getElementById("board");
  if (!root) return;

  let state = createBacklogState();
  let openRow = null;

  const SRC_LABEL = { lab: "Aus dem Labor", menu: "Ideen-Menü", free: "Eigener Use Case" };

  function render() {
    renderInventory();
    renderBacklog();
    renderMatrix();
  }

  function renderInventory() {
    const inv = root.querySelector("#inv");
    inv.innerHTML = "";
    ["lab", "menu", "free"].forEach((src) => {
      const label = document.createElement("div");
      label.className = "inv-group-label";
      label.textContent = SRC_LABEL[src];
      inv.appendChild(label);
      const items = state.staging.filter((i) => i.source === src);
      if (items.length === 0) {
        const e = document.createElement("div");
        e.className = "inv-empty";
        e.textContent = src === "free" ? "Noch nichts eingetragen." : src === "lab" ? "Noch nichts aus dem Labor." : "Nichts Offenes mehr.";
        inv.appendChild(e);
      }
      items.forEach((item) => inv.appendChild(srcRow(item)));
      if (src === "free") {
        const add = document.createElement("div");
        add.className = "inv-add";
        add.innerHTML = `<input id="freeInput" placeholder="Use Case eintippen …"><button class="btn ghost" type="button">+</button>`;
        add.querySelector("button").onclick = addFree;
        add.querySelector("input").addEventListener("keydown", (e) => {
          if (e.key === "Enter") addFree();
        });
        inv.appendChild(add);
      }
    });
  }

  function srcRow(item) {
    const row = document.createElement("div");
    row.className = "srcrow";
    row.draggable = true;
    row.innerHTML = `<span class="catdot cat-${item.cat}"></span><span>${item.title}</span><button class="use-btn" type="button">Nutzen</button>`;
    row.querySelector(".use-btn").onclick = () => useCard(item.id);
    row.ondragstart = (e) => {
      row.classList.add("dragging");
      e.dataTransfer.setData("text/plain", item.id);
    };
    row.ondragend = () => row.classList.remove("dragging");
    return row;
  }

  function addFree() {
    const inp = root.querySelector("#freeInput");
    if (!inp || !inp.value.trim()) return;
    state = addInventoryItem(state, inp.value.trim(), "erklaren", "free");
    render();
  }

  function useCard(id) {
    state = useItem(state, id);
    render();
  }

  window.__addLabDebrief = function (title, cat) {
    state = addInventoryItem(state, title, cat, "lab");
    const item = state.staging[state.staging.length - 1];
    useCard(item.id);
  };

  function renderBacklog() {
    const backlog = root.querySelector("#backlog");
    backlog.ondragover = (e) => {
      e.preventDefault();
      backlog.classList.add("dropready");
    };
    backlog.ondragleave = () => backlog.classList.remove("dropready");
    backlog.ondrop = (e) => {
      e.preventDefault();
      backlog.classList.remove("dropready");
      const id = e.dataTransfer.getData("text/plain");
      if (id) useCard(id);
    };
    backlog.innerHTML = "";
    const cards = numberedCards(state.cards);
    if (cards.length === 0) {
      const e = document.createElement("div");
      e.className = "backlog-empty";
      e.textContent = "Noch keine Use Cases im Backlog — eine Zeile oben hierher ziehen oder anklicken.";
      backlog.appendChild(e);
      return;
    }
    cards.forEach((c, i) => {
      const row = document.createElement("div");
      row.className = "row" + (openRow === c.id ? " open" : "");
      row.innerHTML = `
        <div class="rowhead">
          <div class="rt"><span class="rownum">${i + 1}</span><span class="lenstag ${c.lens}">${c.lens === "organizational" ? "Organisational" : "Persönlich"}</span><span class="ttl">${c.title}${c.repeat ? " 🔁" : ""}</span></div>
          <div class="rowscore">${c.impact}/${c.effort}</div>
        </div>
        <div class="detail">
          <div class="sliderline"><span>Impact</span><input type="range" min="1" max="5" value="${c.impact}"><b>${c.impact}</b></div>
          <div class="sliderline"><span>Aufwand</span><input type="range" min="1" max="5" value="${c.effort}"><b>${c.effort}</b></div>
          <div class="flagrow">
            <button class="flagbtn ${c.lens === "personal" ? "active" : ""}" type="button" data-lens="personal">Tag: Persönlich</button>
            <button class="flagbtn ${c.lens === "organizational" ? "active" : ""}" type="button" data-lens="organizational">Tag: Organisational</button>
            <button class="repbtn ${c.repeat ? "active" : ""}" type="button">🔁 wiederkehrend</button>
            <button class="delbtn" type="button">Entfernen</button>
          </div>
        </div>`;
      row.querySelector(".rowhead").onclick = () => {
        openRow = openRow === c.id ? null : c.id;
        render();
      };
      const [impactInput, effortInput] = row.querySelectorAll('input[type="range"]');
      impactInput.oninput = (e) => {
        e.stopPropagation();
        state = setSlider(state, c.id, "impact", e.target.value);
        render();
      };
      effortInput.oninput = (e) => {
        e.stopPropagation();
        state = setSlider(state, c.id, "effort", e.target.value);
        render();
      };
      row.querySelectorAll(".flagbtn").forEach((b) => {
        b.onclick = (e) => {
          e.stopPropagation();
          state = setLens(state, c.id, b.dataset.lens);
          render();
        };
      });
      row.querySelector(".repbtn").onclick = (e) => {
        e.stopPropagation();
        state = toggleRepeat(state, c.id);
        render();
      };
      row.querySelector(".delbtn").onclick = (e) => {
        e.stopPropagation();
        state = removeCard(state, c.id);
        render();
      };
      backlog.appendChild(row);
    });
  }

  function renderMatrix() {
    const plot = root.querySelector("#plot");
    plot.querySelectorAll(".dot").forEach((d) => d.remove());
    const cards = numberedCards(state.cards);
    const offsets = fanOffsets(cards);
    cards.forEach((c, i) => {
      const dot = document.createElement("div");
      dot.className = "dot" + (openRow === c.id ? " highlight" : "");
      const size = c.repeat ? 26 : 20;
      dot.style.width = size + "px";
      dot.style.height = size + "px";
      const off = offsets.get(c.id);
      const x = Math.max(0, Math.min(100, ((c.effort - 1) / 4) * 94 + 3 + off.dx));
      const y = Math.max(0, Math.min(100, ((c.impact - 1) / 4) * 94 + 3 + off.dy));
      dot.style.left = x + "%";
      dot.style.bottom = y + "%";
      dot.style.background = catColor(c.cat);
      dot.innerHTML = `<span class="dotnum">${i + 1}</span><span class="tip">${c.title}${c.repeat ? " · wiederkehrend" : ""}</span>`;
      makeDraggable(dot, c, plot);
      plot.appendChild(dot);
    });
  }

  function makeDraggable(dot, card, plot) {
    dot.onpointerdown = (e) => {
      e.preventDefault();
      const startX = e.clientX,
        startY = e.clientY;
      let moved = false;
      dot.classList.add("dragging");
      const move = (ev) => {
        if (Math.abs(ev.clientX - startX) > 3 || Math.abs(ev.clientY - startY) > 3) moved = true;
        const r = plot.getBoundingClientRect();
        let x = ((ev.clientX - r.left) / r.width) * 100;
        let y = (1 - (ev.clientY - r.top) / r.height) * 100;
        x = Math.max(0, Math.min(100, x));
        y = Math.max(0, Math.min(100, y));
        const effort = Math.round(((x - 3) / 94) * 4) + 1;
        const impact = Math.round(((y - 3) / 94) * 4) + 1;
        state = setSlider(state, card.id, "effort", Math.max(1, Math.min(5, effort)));
        state = setSlider(state, card.id, "impact", Math.max(1, Math.min(5, impact)));
        dot.style.left = ((Math.max(1, Math.min(5, effort)) - 1) / 4) * 94 + 3 + "%";
        dot.style.bottom = ((Math.max(1, Math.min(5, impact)) - 1) / 4) * 94 + 3 + "%";
      };
      const up = () => {
        dot.classList.remove("dragging");
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
        if (moved) render();
        else {
          openRow = card.id;
          render();
        }
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
    };
  }

  /* ---------------- export preview + JSON download ---------------- */
  root.querySelector("#openExport").onclick = () => {
    const payload = exportBacklog(state);
    const rows = payload.rows
      .map(
        (r) => `<tr><td class="num">${r.number}</td><td>${r.title}</td><td>${r.category}</td>
      <td>${r.lens === "organizational" ? "Organisational" : "Persönlich"}</td>
      <td>${r.impact}/${r.effort}</td><td>${r.repeat ? "wiederkehrend" : "—"}</td></tr>`,
      )
      .join("");
    const dots = payload.rows
      .map((r) => {
        const x = Math.max(0, Math.min(100, ((r.effort - 1) / 4) * 80 + 10 + r.offset.dx));
        const y = Math.max(0, Math.min(100, ((r.impact - 1) / 4) * 78 + 12 + r.offset.dy));
        return `<div class="em-num" style="left:${x}%;bottom:${y}%">${r.number}</div>`;
      })
      .join("");
    root.querySelector("#sheetContent").innerHTML = `
      <button class="btn ghost sheet-close" type="button" id="closeExport">Schließen</button>
      <h2>Ihr Use-Case-Backlog</h2>
      <div class="subtle">Export-Vorschau · Druckversion · ${payload.rows.length} Use Cases · Nummer verbindet Liste und Matrix</div>
      <div class="exp-split">
        <table>
          <tr><th>#</th><th>Use Case</th><th>Kategorie</th><th>Tag</th><th>Impact/Aufwand</th><th>Flag</th></tr>
          ${rows || '<tr><td colspan="6">Noch keine Use Cases.</td></tr>'}
        </table>
        <div class="exp-matrix">${dots}</div>
      </div>`;
    root.querySelector("#sheetContent").querySelector("#closeExport").onclick = () =>
      root.querySelector("#exportOverlay").classList.remove("show");
    root.querySelector("#exportOverlay").classList.add("show");
  };

  root.querySelector("#downloadJSON").onclick = () => {
    const payload = exportBacklog(state);
    downloadFile(
      JSON.stringify(payload, null, 2),
      `use-case-backlog-${new Date().toISOString().slice(0, 10)}.json`,
      "application/json",
    );
  };

  render();
})();
