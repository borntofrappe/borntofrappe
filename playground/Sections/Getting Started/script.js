const illustration = document.querySelector('article > svg');
if (window.IntersectionObserver) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('class', 'observed');
      } else {
        entry.target.removeAttribute('class');
      }
    });
  });
  observer.observe(illustration);
}
