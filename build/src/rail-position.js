// Pure, DOM-free port of PROTOTYPE-nav-rail.html's syncToScroll() midpoint
// hit-test, including its zero-height-viewport guard (the fix that
// PROTOTYPE-lesson-types.html's copy of the same function regressed —
// see .scratch/exec-learning-page/issues/15-visual-design-standard.md).
//
// Deliberately computed from scroll offset rather than IntersectionObserver:
// the observer doesn't fire reliably while the tab is backgrounded, which is
// exactly the bug this guard exists to prevent from corrupting the rail.

export function computeActiveBeatIndex(beats, scrollTop, viewportHeight, previousIndex) {
  if (!viewportHeight || !beats[0] || !beats[0].offsetHeight) {
    return previousIndex;
  }
  const mid = scrollTop + viewportHeight / 2;
  let active = 0;
  for (let i = 0; i < beats.length; i++) {
    const b = beats[i];
    if (b.offsetTop <= mid && b.offsetTop + b.offsetHeight > mid) {
      return i;
    }
    if (b.offsetTop <= mid) active = i;
  }
  return active;
}

export function railStates(beats, activeIndex) {
  return beats.map((_, i) => {
    if (i < activeIndex) return "done";
    if (i === activeIndex) return "current";
    return "upcoming";
  });
}
