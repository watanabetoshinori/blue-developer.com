// Cycles through the children of each [data-rotator], one visible at a time.
// Without JavaScript, or with reduced motion, only the first item is shown.
(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll("[data-rotator]").forEach((rotator) => {
    const items = Array.from(rotator.children);
    if (items.length < 2) return;

    const interval = Number(rotator.dataset.rotatorInterval) || 4000;
    let index = 0;

    setInterval(() => {
      items[index].classList.remove("is-active");
      items[index].setAttribute("aria-hidden", "true");
      index = (index + 1) % items.length;
      items[index].classList.add("is-active");
      items[index].removeAttribute("aria-hidden");
    }, interval);
  });
})();
