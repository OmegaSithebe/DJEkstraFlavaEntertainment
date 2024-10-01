document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting us. We will get back to you soon.');
      form.reset();
    });
  });
  
  // Scroll darkness affect
  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    
    // Add event listener for scroll
    window.addEventListener('scroll', function () {
      const scrollThreshold = 100;  // Scroll threshold for the effect
      
      if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  });