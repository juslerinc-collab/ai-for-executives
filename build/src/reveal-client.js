/* ============================================================
   Slide reveal engine: tags each beat's content elements with data-r plus
   a stagger delay, then toggles .revealed on the beat as it scrolls into
   view. All the actual motion lives in motion.css.

   Nothing is hidden unless this script sets html.anim, so a reduced-motion
   preference — or this script failing outright — leaves the deck fully
   visible rather than blank.
   ============================================================ */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Containers whose children should stagger individually instead of the
  // container arriving as one block. Anything not listed here animates as a
  // unit — notably .stepper, whose cards are shown/hidden by shell-client.js
  // and must not have a competing opacity applied to them.
  const DESCEND = [
    ".hero-copy",
    ".head-split",
    ".head-split-copy",
    ".stairflow",
    ".principle-grid",
    ".pbody",
    ".pcol",
    ".steptable",
    ".next-steps",
    ".bullets",
    ".logo-row",
    ".nest-grid",
    ".nest-legend",
    ".showcase-body",
    ".term-grid",
    ".compare",
    ".mythrow",
    ".levers",
  ].join(",");

  const STEP_MS = 55;
  const MAX_STEPS = 10; // cap the stagger so a long list still lands promptly

  function collect(root, depth, out) {
    for (const el of Array.from(root.children)) {
      if (depth > 0 && el.matches(DESCEND)) collect(el, depth - 1, out);
      else out.push(el);
    }
    return out;
  }

  const beats = Array.from(document.querySelectorAll(".beat"));
  for (const beat of beats) {
    const inner = beat.querySelector(".beat-inner");
    if (!inner) continue;
    collect(inner, 2, []).forEach((el, i) => {
      el.setAttribute("data-r", "");
      el.style.setProperty("--d", Math.min(i, MAX_STEPS) * STEP_MS + "ms");
    });
  }

  // A hidden document freezes CSS transitions at time 0, so arming the
  // reveal in a backgrounded tab would leave every slide stuck at opacity 0
  // with no frames to animate it back. Wait for the document to actually be
  // visible before hiding anything — same defensive stance as
  // rail-position.js's backgrounded-tab guard.
  let armed = false;
  let io = null;

  // Last line of defence: if the reveal is armed but the content never
  // actually paints — a frozen document, a compositor that never runs the
  // transition — give up on the animation rather than leave the deck blank.
  // The content is the point; the entrance is not.
  function failOpenIfInvisible() {
    const revealed = beats.find((b) => b.classList.contains("revealed"));
    const probe = revealed && revealed.querySelector("[data-r]");
    if (probe && Number(getComputedStyle(probe).opacity) >= 0.9) return;
    document.documentElement.classList.remove("anim");
    if (io) io.disconnect();
  }

  function arm() {
    if (armed) return;
    armed = true;
    document.documentElement.classList.add("anim");

    // Reveal is tied to visibility rather than to the shell's active-beat
    // index so it also plays for a partially scrolled slide, and un-reveals
    // on the way out so stepping back through the deck replays the entrance.
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) e.target.classList.toggle("revealed", e.intersectionRatio >= 0.3);
      },
      { threshold: [0, 0.3, 0.6] },
    );
    beats.forEach((b) => io.observe(b));

    setTimeout(failOpenIfInvisible, 1600);
  }

  if (document.visibilityState === "visible") {
    arm();
  } else {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") arm();
    });
    // Some embedded viewers (preview panes, kiosk frames) report the document
    // as permanently hidden even while it is on screen. A trusted input event
    // is equally good proof that someone is watching — and a genuinely frozen
    // document cannot produce one. `scroll` deliberately isn't in this list:
    // it also fires for programmatic scrolling, which proves nothing.
    const onInput = (e) => {
      if (e.isTrusted) arm();
    };
    for (const evt of ["pointerdown", "keydown", "wheel"]) {
      document.addEventListener(evt, onInput, { passive: true });
    }
  }

  // The front-door gate covers the first slide at load, so its entrance
  // would otherwise play behind the password card. shell-client.js calls
  // this once the gate is dismissed.
  window.replayReveal = function (beat) {
    const target = beat || beats[0];
    if (!target) return;
    target.classList.remove("revealed");
    void target.offsetWidth; // force reflow so the transition restarts
    target.classList.add("revealed");
  };
})();
