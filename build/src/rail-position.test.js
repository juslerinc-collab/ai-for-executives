import { test } from "node:test";
import assert from "node:assert/strict";
import { computeActiveBeatIndex, railStates } from "./rail-position.js";

// Four beats, each a full 800px-tall viewport stacked vertically:
// beat 0: [0, 800), beat 1: [800, 1600), beat 2: [1600, 2400), beat 3: [2400, 3200)
const BEATS = [
  { offsetTop: 0, offsetHeight: 800 },
  { offsetTop: 800, offsetHeight: 800 },
  { offsetTop: 1600, offsetHeight: 800 },
  { offsetTop: 2400, offsetHeight: 800 },
];
const H = 800;

test("computeActiveBeatIndex picks the beat whose midpoint the viewport center sits in", () => {
  assert.equal(computeActiveBeatIndex(BEATS, 0, H, 0), 0);
  assert.equal(computeActiveBeatIndex(BEATS, 800, H, 0), 1);
  assert.equal(computeActiveBeatIndex(BEATS, 1600, H, 1), 2);
  assert.equal(computeActiveBeatIndex(BEATS, 2400, H, 2), 3);
});

test("computeActiveBeatIndex tracks a monotonically increasing scroll offset correctly", () => {
  let cur = 0;
  const scrollPositions = [0, 100, 400, 799, 800, 1200, 1600, 2000, 2400, 3199];
  const expected = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3];
  scrollPositions.forEach((scrollTop, i) => {
    cur = computeActiveBeatIndex(BEATS, scrollTop, H, cur);
    assert.equal(cur, expected[i], `at scrollTop=${scrollTop}`);
  });
});

test("computeActiveBeatIndex returns the previous index unchanged on a zero-height viewport", () => {
  // this is the exact backgrounded-tab bug: a resize/scroll event fires while
  // the tab has no real layout (innerHeight/offsetHeight momentarily 0), and
  // the rail must not resync to a wrong beat when that happens.
  const result = computeActiveBeatIndex(BEATS, 1600, 0, 2);
  assert.equal(result, 2);
});

test("computeActiveBeatIndex returns the previous index unchanged when the first beat has no layout yet", () => {
  const beatsWithoutLayout = [
    { offsetTop: 0, offsetHeight: 0 },
    { offsetTop: 0, offsetHeight: 0 },
  ];
  const result = computeActiveBeatIndex(beatsWithoutLayout, 500, 800, 1);
  assert.equal(result, 1);
});

test("computeActiveBeatIndex clamps to the last beat whose top is at or before the midpoint", () => {
  // scrolled past the end of all beats
  const result = computeActiveBeatIndex(BEATS, 5000, H, 0);
  assert.equal(result, 3);
});

test("railStates marks beats before the active index done, the active one current, the rest upcoming", () => {
  const states = railStates(BEATS, 2);
  assert.deepEqual(states, ["done", "done", "current", "upcoming"]);
});

test("railStates handles the first beat being active (nothing done yet)", () => {
  assert.deepEqual(railStates(BEATS, 0), ["current", "upcoming", "upcoming", "upcoming"]);
});

test("railStates handles the last beat being active (nothing upcoming)", () => {
  assert.deepEqual(railStates(BEATS, 3), ["done", "done", "done", "current"]);
});
