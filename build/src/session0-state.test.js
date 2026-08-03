import { test } from "node:test";
import assert from "node:assert/strict";
import {
  createSession0State,
  setPersonField,
  selectReifegrad,
  setAnswer,
  exportSession0,
  REIFEGRAD_LEVELS,
  ARBEITSALLTAG_QUESTIONS,
  ZIEL_QUESTIONS,
} from "./session0-state.js";

test("createSession0State has the right shape with empty values", () => {
  const state = createSession0State();
  const payload = exportSession0(state);

  assert.equal(payload.person.vorname, "");
  assert.equal(payload.person.rolle, "");
  assert.equal(payload.person.unternehmen, "");
  assert.equal(payload.person.webseite, "");
  assert.equal(payload.person.kurzbeschreibung, "");

  assert.equal(payload.reifegrad, null);

  assert.equal(payload.alltag.length, ARBEITSALLTAG_QUESTIONS.length);
  assert.equal(payload.ziel.length, ZIEL_QUESTIONS.length);
  for (const entry of [...payload.alltag, ...payload.ziel]) {
    assert.equal(entry.answer, "");
  }
  assert.ok(typeof payload.exportedAt === "string");
});

test("setPersonField edits are reflected exactly in the export", () => {
  let state = createSession0State();
  state = setPersonField(state, "vorname", "Doris");
  state = setPersonField(state, "rolle", "Beraterin");
  state = setPersonField(state, "unternehmen", "Seeds Consulting");

  const payload = exportSession0(state);
  assert.equal(payload.person.vorname, "Doris");
  assert.equal(payload.person.rolle, "Beraterin");
  assert.equal(payload.person.unternehmen, "Seeds Consulting");
  assert.equal(payload.person.webseite, "");
});

test("selectReifegrad records the chosen level's n/name/desc", () => {
  let state = createSession0State();
  state = selectReifegrad(state, 4);

  const payload = exportSession0(state);
  const expected = REIFEGRAD_LEVELS.find((l) => l.n === 4);
  assert.deepEqual(payload.reifegrad, {
    n: expected.n,
    name: expected.name,
    desc: expected.desc,
  });
});

test("selectReifegrad rejects an out-of-range level", () => {
  const state = createSession0State();
  assert.throws(() => selectReifegrad(state, 6));
  assert.throws(() => selectReifegrad(state, 0));
});

test("setAnswer updates a single question field by index", () => {
  let state = createSession0State();
  state = setAnswer(state, "alltag", 0, "• Wochenberichte");

  const payload = exportSession0(state);
  assert.equal(payload.alltag[0].answer, "• Wochenberichte");
  assert.equal(payload.alltag[0].question, ARBEITSALLTAG_QUESTIONS[0]);
});

test("setAnswer works for the ziel field group independently of alltag", () => {
  let state = createSession0State();
  state = setAnswer(state, "ziel", 0, "• Weniger Abendarbeit");
  const payload = exportSession0(state);
  assert.equal(payload.ziel[0].answer, "• Weniger Abendarbeit");
  assert.equal(payload.alltag.every((a) => a.answer === ""), true);
});

test("exportSession0 is a pure read — calling it twice does not mutate state", () => {
  let state = createSession0State();
  state = setPersonField(state, "vorname", "Doris");
  const first = exportSession0(state);
  const second = exportSession0(state);
  assert.deepEqual(first.person, second.person);
});
