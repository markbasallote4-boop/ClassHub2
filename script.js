/* =========================
   CLASSHUB JS (PREMIUM SIMPLE EFFECTS)
========================= */

document.addEventListener("DOMContentLoaded", () => {

  // 1. Smooth page load effect
  document.body.style.opacity = "0";
  document.body.style.transform = "translateY(10px)";

  setTimeout(() => {
    document.body.style.transition = "0.6s ease";
    document.body.style.opacity = "1";
    document.body.style.transform = "translateY(0)";
  }, 100);

  // 2. Active page highlight (navigation)
  const links = document.querySelectorAll("nav a");
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.background = "white";
      link.style.color = "#4f46e5";
    }
  });

  // 3. Smooth hover sound-like effect (visual only)
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.08)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });

  // 4. Card animation on scroll
  const cards = document.querySelectorAll("p");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";
    card.style.transition = "0.5s ease";
    observer.observe(card);
  });

});