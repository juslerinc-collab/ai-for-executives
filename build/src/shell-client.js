/* ============================================================
   Shell client: rail rendering, keyboard nav, gates, closer popup.
   DOM-only — not unit tested (see spec.md's testing section: this
   is exactly the "manual verification" category). Uses the pure
   functions from rail-position.js, concatenated into the same
   script scope by build.mjs.
   ============================================================ */
(function () {
  const BEATS = Array.from(document.querySelectorAll(".beat"));
  let cur = 0;
  let raf = null;

  function beatRects() {
    return BEATS.map((b) => ({ offsetTop: b.offsetTop, offsetHeight: b.offsetHeight }));
  }

  function applyNavySection() {
    const active = BEATS[cur];
    document.body.classList.toggle("navy-section", !!(active && active.dataset.surface === "navy"));
  }

  function drawRail() {
    const rail = document.getElementById("rail");
    rail.innerHTML = "";
    const top = 0.12,
      span = 0.76;
    BEATS.forEach((b, i) => {
      const el = document.createElement("div");
      const locked = b.dataset.locked === "true";
      let cls = "railDot";
      if (locked) cls += " locked";
      else if (i < cur) cls += " done";
      else if (i === cur) cls += " now";
      el.className = cls;
      const y = window.innerHeight * top + (BEATS.length > 1 ? (window.innerHeight * span * i) / (BEATS.length - 1) : 0);
      el.style.top = y + "px";
      el.innerHTML = `<span class="dot"></span><span class="lbl">${b.dataset.sub || b.dataset.chapter}</span>`;
      if (!locked) el.onclick = () => jump(i);
      rail.appendChild(el);
    });
  }

  function drawMenu() {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";
    const bySession = [];
    BEATS.forEach((b, i) => {
      const label = b.dataset.session;
      let group = bySession.find((g) => g.label === label);
      if (!group) {
        group = { label, chapter: b.dataset.chapter, locked: b.dataset.locked === "true", items: [] };
        bySession.push(group);
      }
      group.items.push({ index: i, sub: b.dataset.sub });
    });
    bySession.forEach((group) => {
      const chapEl = document.createElement("div");
      chapEl.className = "menuChapter" + (group.locked ? " locked session2" : "");
      chapEl.innerHTML = `<span class="num">${group.label}</span><span class="title">${group.chapter}</span>`;
      menu.appendChild(chapEl);
      const isActiveGroup = group.items.some((it) => it.index === cur);
      if (isActiveGroup && !group.locked) {
        group.items.forEach((it) => {
          if (!it.sub) return;
          const sub = document.createElement("div");
          sub.className = "menuSub" + (it.index === cur ? " active" : "");
          sub.textContent = it.sub;
          sub.onclick = () => jump(it.index);
          menu.appendChild(sub);
        });
      }
    });
  }

  function refreshMark() {
    const mark = document.getElementById("mark");
    const active = BEATS[cur];
    if (mark && active) {
      mark.innerHTML = `<span class="brand">AI for Executives</span><br>${active.dataset.chapter}`;
    }
  }

  function refresh() {
    drawRail();
    drawMenu();
    refreshMark();
    applyNavySection();
  }

  window.jump = function (i) {
    BEATS[i].scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function syncToScroll() {
    raf = null;
    const H = window.innerHeight;
    const se = document.scrollingElement;
    const next = computeActiveBeatIndex(beatRects(), se.scrollTop, H, cur);
    if (next === cur) return;
    cur = next;
    refresh();
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!raf) raf = requestAnimationFrame(syncToScroll);
    },
    { passive: true },
  );
  window.addEventListener("resize", () => {
    drawRail();
    syncToScroll();
  });

  window.addEventListener("keydown", (e) => {
    const t = document.activeElement,
      tag = t && t.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || (t && t.isContentEditable)) return;
    if (["ArrowDown", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
      jump(Math.min(cur + 1, BEATS.length - 1));
    }
    if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
      e.preventDefault();
      jump(Math.max(cur - 1, 0));
    }
  });

  refresh();

  /* ---------------- front-door gate ---------------- */
  const frontGate = document.getElementById("frontGate");
  const frontInput = document.getElementById("frontGateInput");
  const frontErr = document.getElementById("frontGateErr");
  document.getElementById("frontGateGo").onclick = tryFrontGate;
  frontInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") tryFrontGate();
  });
  function tryFrontGate() {
    if (frontInput.value.trim().toLowerCase() === SEED.gatePassword.toLowerCase()) {
      frontGate.classList.add("hidden");
    } else {
      frontErr.textContent = "Nicht ganz. Nochmal?";
      frontInput.value = "";
      frontInput.focus();
    }
  }
  frontInput.focus();

  /* ---------------- session 2 unlock ---------------- */
  const s2unlock = document.getElementById("s2Unlock");
  if (s2unlock) {
    s2unlock.querySelector(".go").onclick = () => {
      const input = s2unlock.querySelector("input");
      const err = s2unlock.querySelector(".err");
      if (input.value.trim().toLowerCase() === "askclaude") {
        document.querySelectorAll(".session2").forEach((el) => el.classList.remove("locked", "session2"));
        document.querySelectorAll(".beat[data-locked='true']").forEach((el) => (el.dataset.locked = "false"));
        s2unlock.querySelector(".prompt-row").innerHTML =
          '<span style="font-size:12px;color:var(--good);font-weight:600">Entsperrt.</span>';
        refresh();
      } else {
        err.textContent = 'Falsch. Ein Tipp: fragen Sie Claude, was Sie tun, wenn Sie etwas nicht wissen.';
      }
    };
  }

  /* ---------------- closer / bridge popup ---------------- */
  window.showCloser = function () {
    document.getElementById("closer").classList.add("show");
  };
  window.hideCloser = function () {
    document.getElementById("closer").classList.remove("show");
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideCloser();
  });
})();
