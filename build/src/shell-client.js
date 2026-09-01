/* ============================================================
   Shell client: top nav bar, keyboard nav, gates, closer popup.
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

  /* Persistent top-centre navigator: one dot per beat, threaded on a single
     line that runs straight through them — no grouping, no session labels.
     Hover or focus a dot for its slide label; click to jump.

     Built once and then only re-styled (updateNav) rather than redrawn on
     every scroll tick: rebuilding the DOM would restart the dot transitions
     and yank the tooltip out from under the pointer mid-hover. Only a change
     in structure — the Session 2 unlock — calls buildNav again. */
  const navBar = document.getElementById("navtop");
  let navNodes = [];
  let navProg = null;

  function buildNav() {
    navBar.innerHTML = '<span class="nav-line"></span>';
    navNodes = [];

    BEATS.forEach((b, i) => {
      const locked = b.dataset.locked === "true";
      const label = b.dataset.topic || b.dataset.sub || b.dataset.chapter;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nav-node" + (locked ? " locked" : "");
      btn.setAttribute("aria-label", `${label}${locked ? " (bald verfügbar)" : ""}`);
      if (locked) btn.disabled = true;
      btn.innerHTML = `<span class="nav-dot"></span><span class="nav-tip">${label}</span>`;
      if (!locked) btn.onclick = () => jump(i);
      navBar.appendChild(btn);
      navNodes[i] = btn;
    });

    navProg = document.createElement("span");
    navProg.className = "nav-prog";
    navBar.appendChild(navProg);
  }

  function updateNav() {
    navNodes.forEach((btn, i) => {
      if (!btn) return;
      btn.classList.toggle("active", i === cur);
      if (i === cur) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    });
    if (navProg) {
      const p = BEATS.length > 1 ? cur / (BEATS.length - 1) : 1;
      navProg.style.transform = `translateY(-50%) scaleX(${p})`;
    }
  }

  function refreshMark() {
    const mark = document.getElementById("mark");
    const active = BEATS[cur];
    if (mark && active) {
      const topic = active.dataset.topic || active.dataset.sub || active.dataset.chapter;
      mark.innerHTML =
        `<span class="mk-brand">AI for Executives</span>` +
        `<span class="mk-topic">${topic}<span class="mk-count">${cur + 1}/${BEATS.length}</span></span>`;
    }
  }

  function refresh() {
    updateNav();
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
  window.addEventListener("resize", syncToScroll);

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

  buildNav();
  refresh();

  /* ---------------- front-door gate ---------------- */
  const frontGate = document.getElementById("frontGate");
  const frontInput = document.getElementById("frontGateInput");
  const frontErr = document.getElementById("frontGateErr");
  const GATE_KEY = "aife_gate_unlocked";
  if (localStorage.getItem(GATE_KEY) === "1") {
    frontGate.classList.add("hidden");
  }
  document.getElementById("frontGateGo").onclick = tryFrontGate;
  frontInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") tryFrontGate();
  });
  function tryFrontGate() {
    if (frontInput.value.trim().toLowerCase() === SEED.gatePassword.toLowerCase()) {
      frontGate.classList.add("hidden");
      localStorage.setItem(GATE_KEY, "1");
      // The title slide's entrance played behind the gate card; run it again
      // now that there is someone to watch it.
      if (window.replayReveal) window.replayReveal(BEATS[cur]);
    } else {
      frontErr.textContent = "Nicht ganz. Nochmal?";
      frontInput.value = "";
      frontInput.focus();
    }
  }
  frontInput.focus();

  /* ---------------- prompt steppers: click through cards one at a time ----------------
     Cards that carry data-step get a labelled tab strip above the stack (you can
     see where you are and jump straight to a step); otherwise they fall back to
     plain dots. Either way a prev/next pair drives the guided walk-through. */
  document.querySelectorAll(".stepper").forEach((stepper) => {
    const cards = Array.from(stepper.querySelectorAll(".out"));
    if (!cards.length) return;
    const stack = cards[0].parentElement;
    const labels = cards.map((c) => c.dataset.step);
    // A stepper can publish which step it is on to an ancestor marked
    // data-step-sync, so siblings outside the card stack can react in CSS —
    // the showcase beat uses it to light up the source line step 4 audits.
    const sync = stepper.closest("[data-step-sync]");
    const useTabs = labels.every(Boolean);

    const nav = document.createElement("div");
    nav.className = useTabs ? "step-tabs" : "step-nav";
    let pick;
    if (useTabs) {
      pick = labels.map((label, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "step-tab";
        b.innerHTML = `<span class="st-num">${i + 1}</span><span class="st-label">${label}</span>`;
        b.onclick = () => show(i);
        nav.appendChild(b);
        return b;
      });
      stack.parentElement.insertBefore(nav, stack);
    } else {
      nav.innerHTML = '<div class="step-dots"></div>';
      pick = labels.map((_, i) => {
        const d = document.createElement("span");
        d.className = "step-dot";
        d.onclick = () => show(i);
        nav.querySelector(".step-dots").appendChild(d);
        return d;
      });
      stepper.appendChild(nav);
    }

    const walk = document.createElement("div");
    walk.className = "step-walk";
    walk.innerHTML =
      '<button type="button" class="step-btn step-prev" aria-label="Zurück">‹</button>' +
      '<span class="step-count"></span>' +
      '<button type="button" class="step-btn step-next" aria-label="Weiter">›</button>';
    stepper.appendChild(walk);
    const countEl = walk.querySelector(".step-count");
    const prevBtn = walk.querySelector(".step-prev");
    const nextBtn = walk.querySelector(".step-next");

    let idx = 0;
    function show(i) {
      idx = Math.max(0, Math.min(cards.length - 1, i));
      cards.forEach((c, j) => c.classList.toggle("active", j === idx));
      pick.forEach((p, j) => p.classList.toggle("active", j === idx));
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === cards.length - 1;
      countEl.textContent = `${idx + 1} / ${cards.length}`;
      if (sync) sync.dataset.at = String(idx + 1);
    }
    prevBtn.onclick = () => show(idx - 1);
    nextBtn.onclick = () => show(idx + 1);
    show(0);
  });

  /* ---------------- click-to-reveal: a result that waits to be asked for ----
     The showcase is walked instruction-first — this is what I said, and only
     then, on a click, this is what came back. A [data-reveal] block is only
     ever covered by this script, so if it never runs the answer is simply
     there: the content is the point, the suspense is not. Same fail-open
     stance as the reveal engine.

     A revealed block stays revealed. Re-covering on the way back would mean
     the presenter has to click twice for something the room has already
     seen, and a reload resets the whole slide anyway. */
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    el.classList.add("covered");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "reveal-btn";
    btn.innerHTML = `<span>${el.dataset.reveal || "Antwort zeigen"}</span><span class="rv-ico"></span>`;
    btn.onclick = () => {
      el.classList.remove("covered");
      btn.remove();
    };
    el.appendChild(btn);
  });

  /* ---------------- agent anatomy: one branch at a time ----------------
     The diagram ships as a plain, fully lit SVG. This script arms it —
     dimming every branch so the presenter can light them one click at a
     time — which means a script failure leaves a complete figure rather
     than a uniformly grey one. Same fail-open stance as [data-reveal].

     A branch stays lit once lit; re-dimming on the way back would make
     the presenter click twice for something the room has already seen. */
  document.querySelectorAll(".agent-arc").forEach((svg) => {
    const nodes = Array.from(svg.querySelectorAll(".arc-node"));
    if (!nodes.length) return;
    svg.classList.add("armed");
    for (const node of nodes) {
      node.setAttribute("tabindex", "0");
      node.setAttribute("role", "button");
      const label = node.dataset.arc;
      if (label) node.setAttribute("aria-label", label + " aufdecken");
      const light = () => node.classList.toggle("active");
      node.addEventListener("click", light);
      node.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          light();
        }
      });
    }
  });

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
