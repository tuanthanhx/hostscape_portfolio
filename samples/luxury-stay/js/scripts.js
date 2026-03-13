const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const reveals = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const closeNavigation = () => {
  if (!navToggle || !siteNav) {
    return;
  }

  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "メニューを開く");
  siteNav.classList.remove("is-open");
  document.body.dataset.navOpen = "false";
};

if (navToggle && siteNav) {
  document.body.dataset.navOpen = "false";

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", !isOpen ? "メニューを閉じる" : "メニューを開く");
    siteNav.classList.toggle("is-open", !isOpen);
    document.body.dataset.navOpen = String(!isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeNavigation();
    }
  });
}

if (prefersReducedMotion.matches) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  reveals.forEach((element) => observer.observe(element));
}
