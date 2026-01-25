document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".observeThisJS"); // use a class for multiple

  if (!sections.length) return; // safety check

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showMe");
      } else {
        entry.target.classList.remove("showMe");
      }
    });
  }, {
    threshold: 0.5, // 0.5 triggers when 50% of element is visible. Try 1.0 or tweak it.
  });

  sections.forEach((section) => observer.observe(section));
});
