// scroll.js
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('[data-scroll-target]');
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('data-scroll-target');
        const offset = parseInt(link.getAttribute('data-scroll-offset')) || 0;
        const target = document.getElementById(targetId);
        if (target) {
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });