// Keep the footer year current without hardcoding.
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the active menu link as you scroll through sections.
const navLinks = [...document.querySelectorAll('.menu a[href^="#"]')];
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = "#" + entry.target.id;
      navLinks.forEach((a) =>
        a.style.setProperty(
          "text-decoration",
          a.getAttribute("href") === id ? "underline" : "none"
        )
      );
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((s) => observer.observe(s));
