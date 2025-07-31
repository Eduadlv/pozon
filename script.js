
document.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    let rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      sec.style.opacity = 1;
      sec.style.transition = 'opacity 1s ease-in';
    }
  });
});
