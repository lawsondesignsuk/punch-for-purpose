const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (header && navToggle && navLinks) {
  const setMenuState = (isOpen) => {
    const currentlyOpen = header.classList.contains("menu-open");
    if (currentlyOpen === isOpen) {
      return;
    }

    header.classList.toggle("menu-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  };

  const closeMenu = () => {
    setMenuState(false);
  };

  navToggle.addEventListener("click", () => {
    setMenuState(!header.classList.contains("menu-open"));
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

  const desktopQuery = window.matchMedia("(min-width: 881px)");
  const handleDesktopChange = (event) => {
    if (event.matches) {
      closeMenu();
    }
  };

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", handleDesktopChange);
  } else if (typeof desktopQuery.addListener === "function") {
    desktopQuery.addListener(handleDesktopChange);
  }
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
