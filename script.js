// Hamburger menu
const menuBtn = document.querySelector(".menu-btn");
const sidePanel = document.querySelector(".side-panel");
const closePanel = document.querySelector(".close-panel");
const navLinks = document.querySelectorAll(".side-panel a");

menuBtn.addEventListener("click", () => {
  sidePanel.classList.add("open");
});

closePanel.addEventListener("click", () => {
  sidePanel.classList.remove("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidePanel.classList.remove("open");
  });
});

// Smooth scroll already handled via CSS 'scroll-behavior: smooth'
