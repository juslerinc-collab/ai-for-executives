/* ============================================================
   Session 0 client: tabs, header echo, staircase, auto-bullet
   question fields, JSON export, closing popup -> Session 1.
   Wires the DOM to the pure functions in session0-state.js
   (concatenated into the same script scope by build.mjs).
   ============================================================ */
(function () {
  const root = document.getElementById("session0");
  if (!root) return;

  let state = createSession0State();

  /* ---------------- tabs ---------------- */
  root.querySelectorAll(".tab").forEach((tabBtn) => {
    tabBtn.onclick = () => {
      root.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
      root.querySelectorAll(".pane").forEach((p) => p.classList.remove("active"));
      tabBtn.classList.add("active");
      root.querySelector(`.pane[data-pane="${tabBtn.dataset.tab}"]`).classList.add("active");
    };
  });

  /* ---------------- Über Sie: person fields + header echo ---------------- */
  const echo = root.querySelector(".echo");
  root.querySelectorAll("[data-person]").forEach((input) => {
    input.addEventListener("input", () => {
      state = setPersonField(state, input.dataset.person, input.value);
      refreshEcho();
    });
  });
  function refreshEcho() {
    const parts = [state.person.vorname, state.person.rolle, state.person.unternehmen].filter(Boolean);
    echo.textContent = parts.length ? " — " + parts.join(", ") : "";
  }

  /* ---------------- AI Reifegrad staircase ---------------- */
  const staircase = root.querySelector(".staircase");
  const descBox = root.querySelector(".step-desc");
  const heights = [80, 108, 136, 164, 192];
  REIFEGRAD_LEVELS.forEach((level, i) => {
    const btn = document.createElement("button");
    btn.className = "step";
    btn.style.height = heights[i] + "px";
    btn.textContent = level.name;
    btn.onclick = () => {
      state = selectReifegrad(state, level.n);
      staircase.querySelectorAll(".step").forEach((s) => s.classList.remove("active"));
      btn.classList.add("active");
      descBox.textContent = level.desc;
      descBox.style.animation = "none";
      void descBox.offsetWidth;
      descBox.style.animation = "";
    };
    staircase.appendChild(btn);
  });

  /* ---------------- Arbeitsalltag / Ziel: auto-bullet question fields ---------------- */
  const BULLET = "• ";
  function attachBullets(ta) {
    ta.addEventListener("focus", () => {
      if (!ta.value) ta.value = BULLET;
    });
    ta.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const start = ta.selectionStart,
          end = ta.selectionEnd;
        const insert = "\n" + BULLET;
        ta.value = ta.value.slice(0, start) + insert + ta.value.slice(end);
        const pos = start + insert.length;
        ta.selectionStart = ta.selectionEnd = pos;
        ta.dispatchEvent(new Event("input", { bubbles: true }));
      }
    });
  }
  function buildQuestions(containerSel, group, questions) {
    const container = root.querySelector(containerSel);
    questions.forEach((question, i) => {
      const wrap = document.createElement("div");
      wrap.className = "qfield";
      wrap.innerHTML = `<label>${question}</label><textarea placeholder="• Antwort …"></textarea>`;
      const ta = wrap.querySelector("textarea");
      ta.addEventListener("input", () => {
        state = setAnswer(state, group, i, ta.value);
      });
      attachBullets(ta);
      container.appendChild(wrap);
    });
  }
  buildQuestions('.pane[data-pane="alltag"] .qwrap', "alltag", ARBEITSALLTAG_QUESTIONS);
  buildQuestions('.pane[data-pane="ziel"] .qwrap', "ziel", ZIEL_QUESTIONS);

  /* ---------------- export JSON ---------------- */
  document.querySelector(".export-btn").onclick = () => {
    const payload = exportSession0(state);
    const slug = (state.person.vorname || "session0").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    downloadFile(
      JSON.stringify(payload, null, 2),
      `${slug}-session0-${new Date().toISOString().slice(0, 10)}.json`,
      "application/json",
    );
  };

  /* ---------------- closer popup -> Session 1 ---------------- */
  root.querySelector(".open-closer").onclick = () => window.showCloser();
  document.getElementById("closerBack").onclick = () => window.hideCloser();
  document.getElementById("closerGo").onclick = () => {
    window.hideCloser();
    const firstSession1 = document.querySelector('.beat[data-session="Session 1"]');
    if (firstSession1) firstSession1.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  window.__session0State = () => state;
})();
