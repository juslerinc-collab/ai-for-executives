// Pure, DOM-free state module for Session 0 ("Ihr Profil") capture.
// See .scratch/exec-learning-page/issues/18-session-zero-whiteboard.md for the
// resolved copy this module encodes.

export const REIFEGRAD_LEVELS = [
  {
    n: 1,
    name: "Installiert, nicht im Alltag",
    desc: "Sie haben es vielleicht kurz ausprobiert, aber kein wiederkehrender Einsatz. Kein Vertrauen, was es eigentlich kann.",
  },
  {
    n: 2,
    name: "Ad-hoc-Nutzung",
    desc: "Sie setzen es gelegentlich für einzelne Aufgaben ein — spontan, ohne festes Vorgehen, jedes Mal bei null.",
  },
  {
    n: 3,
    name: "Regelmäßig, aber ohne Methode",
    desc: "Sie nutzen es im Alltag für wiederkehrende Aufgaben, intuitiv — keine wiederverwendbare Instruktion, keine bewusste Unterscheidung der vier Schritte.",
  },
  {
    n: 4,
    name: "Bereits mit System",
    desc: "Sie arbeiten schon mit eigenem Kontext (Firmenwissen, Notizen wie Obsidian, „Company Brain“), eigenen Skills/Projects — Sie haben sich ein Setup gebaut.",
  },
  {
    n: 5,
    name: "Power-User",
    desc: "Sie orchestrieren mehrere Tools und Agents, denken in Workflows statt Einzel-Prompts, und könnten anderen im Haus das Thema beibringen.",
  },
];

export const ARBEITSALLTAG_QUESTIONS = [
  "Welche Aufgabe kostet Sie am meisten Zeit, ohne dass es das wert wäre?",
];

export const ZIEL_QUESTIONS = ["Was soll sich für Sie verändern?"];

const PERSON_FIELDS = ["vorname", "rolle", "unternehmen", "webseite", "kurzbeschreibung"];

function emptyAnswers(questions) {
  return questions.map((question) => ({ question, answer: "" }));
}

export function createSession0State() {
  return {
    person: Object.fromEntries(PERSON_FIELDS.map((f) => [f, ""])),
    reifegrad: null,
    alltag: emptyAnswers(ARBEITSALLTAG_QUESTIONS),
    ziel: emptyAnswers(ZIEL_QUESTIONS),
  };
}

export function setPersonField(state, field, value) {
  if (!PERSON_FIELDS.includes(field)) {
    throw new Error(`Unknown person field: ${field}`);
  }
  return { ...state, person: { ...state.person, [field]: value } };
}

export function selectReifegrad(state, n) {
  const level = REIFEGRAD_LEVELS.find((l) => l.n === n);
  if (!level) {
    throw new Error(`Reifegrad level out of range: ${n}`);
  }
  return { ...state, reifegrad: level };
}

export function setAnswer(state, group, index, answer) {
  if (group !== "alltag" && group !== "ziel") {
    throw new Error(`Unknown answer group: ${group}`);
  }
  const list = state[group];
  if (index < 0 || index >= list.length) {
    throw new Error(`Answer index out of range: ${index}`);
  }
  const nextList = list.map((entry, i) => (i === index ? { ...entry, answer } : entry));
  return { ...state, [group]: nextList };
}

export function exportSession0(state) {
  return {
    exportedAt: new Date().toISOString(),
    person: { ...state.person },
    reifegrad: state.reifegrad ? { ...state.reifegrad } : null,
    alltag: state.alltag.map((entry) => ({ ...entry })),
    ziel: state.ziel.map((entry) => ({ ...entry })),
  };
}
