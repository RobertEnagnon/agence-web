
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000, // Durée des animations (ms)
    once: true,     // Animation uniquement lors du premier scroll
  });
  
  // Gestion du menu responsive
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});