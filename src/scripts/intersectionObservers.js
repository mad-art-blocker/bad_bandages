document.addEventListener("DOMContentLoaded", () => {
  // Use a class for multiple observed sections:
  const observedSections = document.querySelectorAll(".observeThisJS");

  // Safety check:
  if (!observedSections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showMe");
      } else {
        entry.target.classList.remove("showMe");
      }
    });
  }, {
    // 0.5 triggers when 50% of element is visible. Try 1.0 or tweak it:
    threshold: 0.5,
  });

  observedSections.forEach((section) => observer.observe(section));
});
