document.addEventListener('DOMContentLoaded', () => {
  // Código existente de observación
  const sections = document.querySelectorAll('section');
  const socialIcons = document.querySelector('.social-icons');
  const header = document.querySelector('header');
  
  const options = {
      threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
              observer.unobserve(entry.target);
          }
      });
  }, options);

  header.style.animationPlayState = 'running';
  observer.observe(header);
  sections.forEach(section => {
      observer.observe(section);
  });
  observer.observe(socialIcons);

  // Nuevo código para smooth scroll
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          targetSection.scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});