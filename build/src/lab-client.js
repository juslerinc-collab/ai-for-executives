/* ============================================================
   Lab client: prompt copy buttons, collapsible Beispiele/Hebel
   drawers, debrief capture that seeds the backlog's "Aus dem
   Labor" door. Shared by Lab 1 and Lab 2 beats.
   ============================================================ */
(function () {
  document.querySelectorAll(".drawerbtn").forEach((btn) => {
    btn.onclick = () => {
      const drawer = document.getElementById(btn.dataset.drawer);
      const open = drawer.classList.toggle("open");
      btn.classList.toggle("open", open);
    };
  });

  document.querySelectorAll(".prompt .copybtn").forEach((btn) => {
    btn.onclick = () => {
      const text = btn.closest(".prompt").querySelector(".prompt-text").textContent;
      navigator.clipboard?.writeText(text).catch(() => {});
      const original = btn.textContent;
      btn.textContent = "Kopiert";
      setTimeout(() => (btn.textContent = original), 1400);
    };
  });

  document.querySelectorAll(".debrief").forEach((debrief) => {
    const input = debrief.querySelector("input");
    const saved = debrief.querySelector(".saved");
    const cat = debrief.dataset.cat;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && input.value.trim()) {
        window.__addLabDebrief?.(input.value.trim(), cat);
        saved.textContent = "Im Backlog erfasst.";
        input.value = "";
        setTimeout(() => (saved.textContent = ""), 2400);
      }
    });
  });
})();
