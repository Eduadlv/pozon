
function revealOnScroll() {
  const sections = document.querySelectorAll('.fade-in');
  for (let sec of sections) {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
