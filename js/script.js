document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  document.querySelectorAll('.hobby-section').forEach(section => {
    section.addEventListener('mouseover', () => {
      section.classList.add('hover');
    });
    section.addEventListener('mouseout', () => {
      section.classList.remove('hover');
    });
  });
  