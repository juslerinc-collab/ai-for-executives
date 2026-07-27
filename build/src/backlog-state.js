// Pure, DOM-free state module for the use-case backlog + Impact/Aufwand matrix.
// Ports the working logic from
// .scratch/exec-learning-page/prototypes/PROTOTYPE-backlog-matrix-v3.html
// (mkItem, useItem, numberedCards, fanOffsets, setSlider/setLens/toggleRepeat,
// the export payload shape) into a DOM-free module per spec.md's testing section.

export const CATEGORIES = [
  { key: "erklaren", label: "Erklären" },
  { key: "aufsetzen", label: "Aufsetzen" },
  { key: "aufbereiten", label: "Aufbereiten" },
  { key: "hinterfragen", label: "Hinterfragen" },
];

export function catLabel(cat) {
  return CATEGORIES.find((c) => c.key === cat).label;
}

let uidCounter = 0;
function nextId() {
  uidCounter += 1;
  return `c${uidCounter}`;
}

function mkItem(title, cat, source, extra = {}) {
  return {
    id: nextId(),
    title,
    cat,
    source,
    lens: "personal",
    impact: 3,
    effort: 3,
    repeat: false,
    ...extra,
  };
}

// Ideen-Menü: authored here — not sourced from a ticket (issues/06 requires
// 20-25 supplied use cases grouped by the four steps, but never enumerates
// them). Grounded in Doris's seed context: Beraterin, berufliche
// Vorsorge/Pensionskassen, Publikum Stiftungsrat/Vorstand, Seeds Consulting.
const IDEEN_MENU = [
  // Erklären
  "Einer Kundin einen neuen BVG-Begriff in einem Satz erklären",
  "Sich vor einem Mandat schnell in eine unbekannte Pensionskassen-Regelung einarbeiten",
  "Einem Stiftungsrat den Unterschied zwischen zwei Anlagestrategien erklären",
  "Eine neue regulatorische Änderung so zusammenfassen, dass sie in einem Kundengespräch sitzt",
  "Sich eine Analogie für einen komplizierten Sachverhalt vor dem Kundentermin geben lassen",
  "Ein Fachwort aus einem Gutachten so erklären lassen, dass man es selbst weitergeben kann",
  // Aufsetzen
  "Eine Auftragsbestätigung für ein neues Mandat aufsetzen",
  "Eine erste Agenda für eine Stiftungsratssitzung entwerfen",
  "Ein Angebot für ein neues Beratungsmandat strukturieren",
  "Eine Einladung zu einem internen Workshop schreiben",
  "Einen ersten Entwurf für eine Präsentation vor dem Vorstand gliedern",
  "Ein Absage-Schreiben an einen Bewerber oder Anbieter aufsetzen",
  // Aufbereiten
  "Ein Sitzungsprotokoll auf die fünf wichtigsten Entscheidungen verdichten",
  "Denselben Sachverhalt für drei unterschiedliche Empfängerkreise umschreiben",
  "Einen langen Fachbericht für den Vorstand auf eine Seite bringen",
  "Zwei Offerten nebeneinanderlegen und nach demselben Raster vergleichen",
  "Ein Gutachten so umformulieren, dass es Versicherte ohne Fachbegriffe verstehen",
  "Eine E-Mail-Kette vor einem Termin zu einer Kurzübersicht verdichten",
  // Hinterfragen
  "Die eigene Argumentation vor einer schwierigen Vorstandssitzung auf Einwände prüfen",
  "Einen Business Case, der einem vorgelegt wird, auf Lücken abklopfen",
  "Die Annahmen in einer Finanzierungsplanung hinterfragen, bevor sie präsentiert wird",
  "Einen fremden Entwurf als Zielgruppe lesen und sagen lassen, was fehlt",
  "Eine Kommunikationsvorlage prüfen, bevor sie an Versicherte rausgeht",
  "Den eigenen Vorschlag gegenlesen lassen, bevor er in die Runde geht",
];

function seedStaging() {
  return IDEEN_MENU.map((title, i) => mkItem(title, CATEGORIES[Math.floor(i / 6)].key, "menu"));
}

export function createBacklogState() {
  return { staging: seedStaging(), cards: [] };
}

export function addInventoryItem(state, title, cat, source) {
  return { ...state, staging: [...state.staging, mkItem(title, cat, source)] };
}

export function useItem(state, id) {
  const item = state.staging.find((i) => i.id === id);
  if (!item) return state;
  return {
    staging: state.staging.filter((i) => i.id !== id),
    cards: [...state.cards, item],
  };
}

function updateCard(state, id, fn) {
  return { ...state, cards: state.cards.map((c) => (c.id === id ? fn(c) : c)) };
}

export function setSlider(state, id, field, value) {
  if (field !== "impact" && field !== "effort") {
    throw new Error(`Unknown slider field: ${field}`);
  }
  return updateCard(state, id, (c) => ({ ...c, [field]: +value }));
}

export function setLens(state, id, lens) {
  return updateCard(state, id, (c) => ({ ...c, lens }));
}

export function toggleRepeat(state, id) {
  return updateCard(state, id, (c) => ({ ...c, repeat: !c.repeat }));
}

export function removeCard(state, id) {
  return { ...state, cards: state.cards.filter((c) => c.id !== id) };
}

// Sort order shared by the backlog list and the matrix's numbering.
export function numberedCards(cards) {
  return cards.slice().sort((a, b) => b.impact - a.impact || a.effort - b.effort);
}

// Cards sharing the same impact/effort cell get nudged apart in a small ring
// so they stay visible side by side instead of stacking on top of each other.
// Deterministic by input array order, so the same state always fans out the
// same way (locked in by the "reproducible fan-out" test).
export function fanOffsets(cards) {
  const groups = new Map();
  for (const c of cards) {
    const key = `${c.impact}-${c.effort}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(c);
  }
  const offsets = new Map();
  for (const group of groups.values()) {
    if (group.length === 1) {
      offsets.set(group[0].id, { dx: 0, dy: 0 });
      continue;
    }
    const radius = 3.2;
    group.forEach((c, idx) => {
      const angle = (idx / group.length) * 2 * Math.PI;
      offsets.set(c.id, { dx: Math.cos(angle) * radius, dy: Math.sin(angle) * radius });
    });
  }
  return offsets;
}

// Numbered, colour-free export: same number identifies a use case in the
// list and in the matrix, so a printed/PDF copy stays legible.
export function exportBacklog(state) {
  const cards = numberedCards(state.cards);
  const offsets = fanOffsets(cards);
  return {
    savedAt: new Date().toISOString(),
    rows: cards.map((c, i) => ({
      number: i + 1,
      id: c.id,
      title: c.title,
      category: catLabel(c.cat),
      lens: c.lens,
      impact: c.impact,
      effort: c.effort,
      repeat: c.repeat,
      offset: offsets.get(c.id),
    })),
  };
}
