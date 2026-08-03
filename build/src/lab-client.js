/* ============================================================
   Lab client: prompt copy buttons, collapsible Beispiele/Hebel
   drawers. Shared by Lab 1 and Lab 2 beats.
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
})();
