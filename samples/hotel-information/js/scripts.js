const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("[data-slider]").forEach((slider) => {
  const slides = Array.from(slider.querySelectorAll(":scope > .hero-slide, :scope .gallery-track > .gallery-card"));
  if (slides.length < 2) return;

  let index = slides.findIndex((slide) => slide.classList.contains("is-active"));
  index = index >= 0 ? index : 0;

  const dotsContainer = slider.querySelector(".slider-dots");
  const prevButton = slider.querySelector('[data-action="prev"]');
  const nextButton = slider.querySelector('[data-action="next"]');
  const autoplay = slider.dataset.autoplay === "true" && !prefersReducedMotion;
  let timer = null;

  const update = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
    if (dotsContainer) {
      dotsContainer.querySelectorAll(".slider-dot").forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
        dot.setAttribute("aria-current", String(dotIndex === index));
      });
    }
  };

  if (dotsContainer) {
    slides.forEach((_, dotIndex) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider-dot";
      dot.setAttribute("aria-label", `${dotIndex + 1}枚目を表示`);
      dot.addEventListener("click", () => {
        update(dotIndex);
        restart();
      });
      dotsContainer.appendChild(dot);
    });
  }

  const restart = () => {
    if (!autoplay) return;
    window.clearInterval(timer);
    timer = window.setInterval(() => update(index + 1), 6000);
  };

  prevButton?.addEventListener("click", () => {
    update(index - 1);
    restart();
  });

  nextButton?.addEventListener("click", () => {
    update(index + 1);
    restart();
  });

  slider.addEventListener("mouseenter", () => window.clearInterval(timer));
  slider.addEventListener("mouseleave", restart);
  slider.addEventListener("focusin", () => window.clearInterval(timer));
  slider.addEventListener("focusout", restart);

  update(index);
  restart();
});
