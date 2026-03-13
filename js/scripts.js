const revealItems = document.querySelectorAll(
  ".portfolio-showcase__intro, .portfolio-showcase__toolbar, .portfolio-card"
);

if (revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.16
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 320)}ms`;
    revealObserver.observe(item);
  });
}

const cards = document.querySelectorAll(".portfolio-card");

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const bounds = card.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left;
    const offsetY = event.clientY - bounds.top;
    const rotateY = ((offsetX / bounds.width) - 0.5) * 5;
    const rotateX = (0.5 - (offsetY / bounds.height)) * 4;

    card.querySelector(".portfolio-card__link").style.transform =
      `translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.querySelector(".portfolio-card__link").style.transform = "";
  });
});
