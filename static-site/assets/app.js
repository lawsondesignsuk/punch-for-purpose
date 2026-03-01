document.querySelectorAll("form[data-static-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isTicketsPage = document.body.classList.contains("tickets-page");
    const message = isTicketsPage
      ? "Thanks — your ticket request has been received. Secure checkout is enabled on the live site."
      : "Thanks — your form has been received. Submission processing is enabled on the live site.";
    alert(message);
  });
});

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (header && navToggle && navLinks) {
  const closeMenu = () => {
    header.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    document.body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target === navLinks) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 880) {
      closeMenu();
    }
  });
}

const timer = document.querySelector("[data-countdown]");
if (timer) {
  const target = new Date(timer.getAttribute("data-countdown")).getTime();
  const update = () => {
    const diff = Math.max(0, target - Date.now());
    const values = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
    Object.entries(values).forEach(([k, v]) => {
      const el = document.querySelector(`[data-time="${k}"]`);
      if (el) el.textContent = String(v).padStart(2, "0");
    });
  };
  update();
  setInterval(update, 1000);
}
