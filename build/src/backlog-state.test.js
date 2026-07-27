import { test } from "node:test";
import assert from "node:assert/strict";
import {
  createBacklogState,
  addInventoryItem,
  useItem,
  setSlider,
  setLens,
  toggleRepeat,
  removeCard,
  numberedCards,
  fanOffsets,
  exportBacklog,
} from "./backlog-state.js";

test("createBacklogState starts with staging seeds and no cards", () => {
  const state = createBacklogState();
  assert.ok(state.staging.length > 0);
  assert.equal(state.cards.length, 0);
});

test("addInventoryItem appends a free-entry item to staging", () => {
  let state = createBacklogState();
  const before = state.staging.length;
  state = addInventoryItem(state, "Eigener Use Case eintragen", "erklaren", "free");
  assert.equal(state.staging.length, before + 1);
  const added = state.staging[state.staging.length - 1];
  assert.equal(added.title, "Eigener Use Case eintragen");
  assert.equal(added.source, "free");
  assert.equal(added.lens, "personal");
  assert.equal(added.impact, 3);
  assert.equal(added.effort, 3);
  assert.equal(added.repeat, false);
});

test("useItem moves an item from staging to cards, from any of the three doors", () => {
  let state = createBacklogState();
  state = addInventoryItem(state, "Aus dem Labor: Debrief 1", "erklaren", "lab");
  const item = state.staging[state.staging.length - 1];

  state = useItem(state, item.id);

  assert.equal(state.staging.some((i) => i.id === item.id), false);
  assert.equal(state.cards.some((c) => c.id === item.id), true);
});

test("setSlider updates impact/effort independently and clamps nothing it doesn't need to", () => {
  let state = createBacklogState();
  state = addInventoryItem(state, "X", "aufsetzen", "menu");
  const item = state.staging[state.staging.length - 1];
  state = useItem(state, item.id);

  state = setSlider(state, item.id, "impact", 5);
  state = setSlider(state, item.id, "effort", 1);

  const card = state.cards.find((c) => c.id === item.id);
  assert.equal(card.impact, 5);
  assert.equal(card.effort, 1);
});

test("setLens and toggleRepeat flip the per-card tag and flag", () => {
  let state = createBacklogState();
  state = addInventoryItem(state, "X", "aufsetzen", "menu");
  const item = state.staging[state.staging.length - 1];
  state = useItem(state, item.id);

  state = setLens(state, item.id, "organizational");
  state = toggleRepeat(state, item.id);

  const card = state.cards.find((c) => c.id === item.id);
  assert.equal(card.lens, "organizational");
  assert.equal(card.repeat, true);

  state = toggleRepeat(state, item.id);
  assert.equal(state.cards.find((c) => c.id === item.id).repeat, false);
});

test("removeCard drops a card from the backlog entirely", () => {
  let state = createBacklogState();
  state = addInventoryItem(state, "X", "aufsetzen", "menu");
  const item = state.staging[state.staging.length - 1];
  state = useItem(state, item.id);
  state = removeCard(state, item.id);
  assert.equal(state.cards.some((c) => c.id === item.id), false);
});

test("numberedCards sorts by impact desc, then effort asc — deterministic", () => {
  let state = createBacklogState();
  state = addInventoryItem(state, "A", "erklaren", "free");
  state = addInventoryItem(state, "B", "erklaren", "free");
  state = addInventoryItem(state, "C", "erklaren", "free");
  const [a, b, c] = state.staging.slice(-3);
  state = useItem(state, a.id);
  state = useItem(state, b.id);
  state = useItem(state, c.id);

  state = setSlider(state, a.id, "impact", 2);
  state = setSlider(state, b.id, "impact", 5);
  state = setSlider(state, c.id, "impact", 5);
  state = setSlider(state, b.id, "effort", 4);
  state = setSlider(state, c.id, "effort", 1);

  const ordered = numberedCards(state.cards);
  assert.deepEqual(
    ordered.map((x) => x.id),
    [c.id, b.id, a.id],
  );
});

test("fanOffsets gives a single card zero offset, and is deterministic across repeated calls", () => {
  const cards = [{ id: "only", impact: 3, effort: 3 }];
  const offsets1 = fanOffsets(cards);
  const offsets2 = fanOffsets(cards);
  assert.deepEqual(offsets1.get("only"), { dx: 0, dy: 0 });
  assert.deepEqual(offsets1.get("only"), offsets2.get("only"));
});

test("fanOffsets spreads cards sharing the same impact/effort cell into a reproducible ring", () => {
  const cards = [
    { id: "a", impact: 3, effort: 3 },
    { id: "b", impact: 3, effort: 3 },
    { id: "c", impact: 3, effort: 3 },
  ];
  const offsets = fanOffsets(cards);
  const a = offsets.get("a");
  const b = offsets.get("b");
  const c = offsets.get("c");

  // all three must differ from each other (fanned, not stacked)
  assert.notDeepEqual(a, b);
  assert.notDeepEqual(b, c);
  assert.notDeepEqual(a, c);

  // and the same input always produces the same fan-out (reproducible from state)
  const offsetsAgain = fanOffsets(cards);
  assert.deepEqual(offsetsAgain.get("a"), a);
  assert.deepEqual(offsetsAgain.get("b"), b);
  assert.deepEqual(offsetsAgain.get("c"), c);
});

test("exportBacklog numbering is stable across re-renders and matches numberedCards order", () => {
  let state = createBacklogState();
  state = addInventoryItem(state, "A", "erklaren", "free");
  state = addInventoryItem(state, "B", "erklaren", "free");
  const [a, b] = state.staging.slice(-2);
  state = useItem(state, a.id);
  state = useItem(state, b.id);
  state = setSlider(state, a.id, "impact", 5);
  state = setSlider(state, b.id, "impact", 2);

  const exp1 = exportBacklog(state);
  const exp2 = exportBacklog(state);
  assert.deepEqual(exp1.rows, exp2.rows);
  assert.equal(exp1.rows[0].number, 1);
  assert.equal(exp1.rows[0].id, a.id);
  assert.equal(exp1.rows[1].number, 2);
  assert.equal(exp1.rows[1].id, b.id);
});
