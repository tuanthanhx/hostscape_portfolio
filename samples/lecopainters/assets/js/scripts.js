const header = document.querySelector(".site-header");
const toggleButton = document.querySelector(".site-header__toggle");
const nav = document.querySelector(".site-nav");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (toggleButton && nav) {
  const closeNav = () => {
    nav.classList.remove("is-open");
    toggleButton.setAttribute("aria-expanded", "false");
  };

  toggleButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

const updateHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("site-header--scrolled", window.scrollY > 18);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const revealTargets = document.querySelectorAll(
  [
    ".trust-strip__inner",
    ".section-heading",
    ".feature-card",
    ".service-card",
    ".project-card",
    ".project-showcase__lead",
    ".project-highlight",
    ".service-detail",
    ".case-study",
    ".assurance-panel",
    ".testimonial",
    ".cta-panel__inner",
    ".contact-card",
    ".process__item",
    ".sector-pill",
    ".hero__stat",
    ".page-hero__badge"
  ].join(", ")
);

if (!reduceMotion.matches && "IntersectionObserver" in window) {
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
  });

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
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((element) => {
    revealObserver.observe(element);
  });
}

const interactiveCards = document.querySelectorAll(
  [
    ".hero-card",
    ".feature-card",
    ".service-card",
    ".project-card",
    ".project-showcase__lead",
    ".project-highlight",
    ".service-detail",
    ".case-study",
    ".assurance-panel",
    ".contact-card"
  ].join(", ")
);

interactiveCards.forEach((card) => {
  card.classList.add("interactive-card");

  if (reduceMotion.matches) {
    return;
  }

  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--spotlight-x", `${x}%`);
    card.style.setProperty("--spotlight-y", `${y}%`);
  });
});
