const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const revealItems = document.querySelectorAll(".reveal");
const faqItems = document.querySelectorAll(".faq-item");
const ticker = document.querySelector(".campaign-ticker");
const tickerTrack = document.querySelector(".campaign-ticker__track");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (header && navToggle) {
  const closeMenu = () => {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "メニューを開く");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!header.classList.contains("is-open")) return;
    if (header.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      closeMenu();
      navToggle.focus();
    }
  });
}

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

if (ticker && tickerTrack && !reducedMotion) {
  const sourceGroup = tickerTrack.querySelector(".campaign-ticker__group");

  const setupTicker = () => {
    if (!sourceGroup) return;

    tickerTrack.querySelectorAll(".campaign-ticker__group[aria-hidden='true']").forEach((clone) => {
      clone.remove();
    });

    const baseWidth = sourceGroup.getBoundingClientRect().width;
    const tickerWidth = ticker.getBoundingClientRect().width;

    if (!baseWidth || !tickerWidth) return;

    const cloneCount = Math.max(1, Math.ceil((tickerWidth * 2) / baseWidth));

    for (let index = 0; index < cloneCount; index += 1) {
      const clone = sourceGroup.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      tickerTrack.append(clone);
    }

    tickerTrack.style.setProperty("--ticker-distance", `${baseWidth}px`);
    tickerTrack.style.setProperty("--ticker-duration", `${Math.max(16, baseWidth / 45)}s`);
  };

  setupTicker();

  let resizeFrame = 0;
  window.addEventListener("resize", () => {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(setupTicker);
  });
}

if (revealItems.length) {
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  }
}
