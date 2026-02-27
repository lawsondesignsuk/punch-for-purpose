document.querySelectorAll("form[data-static-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form captured in static mode. Connect backend or Stripe when deploying.");
  });
});

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
