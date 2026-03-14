const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("site-nav--open", !isOpen);
  });

  siteNav.querySelectorAll(".site-nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("site-nav--open");
    });
  });
}

const contactForm = document.querySelector("[data-contact-form]");
const contactFormMessage = document.querySelector("[data-contact-form-message]");

if (contactForm && contactFormMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactFormMessage.textContent = "Thank you. Your inquiry has been received and a NEXXTAV consultant will respond shortly.";
    contactForm.reset();
  });
}
