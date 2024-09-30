document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting us. We will get back to you soon.');
      form.reset();
    });
  });
  
  // Scroll darkness affect
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollThreshold = 100;  
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const scrollThreshold = 1;