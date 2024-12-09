// Initialisation de AOS (Animations au Scroll)

  // Initialisation de Swiper.js pour le carrousel de témoignages
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  });
  
//   // Gestion du menu responsive
//   const menuToggle = document.querySelector('.menu-toggle');
//   const navLinks = document.querySelector('.nav-links');
  
//   menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//   });
  