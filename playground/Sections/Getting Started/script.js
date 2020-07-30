const article = document.querySelector('article');

if (window.IntersectionObserver) {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('observed');
      } else {
        entry.target.classList.remove('observed');
      }
    });
  });

  if (!prefersReducedMotion.matches) {
    observer.observe(article);
  }
  prefersReducedMotion.addListener(({ matches }) => {
    if (matches) {
      observer.unobserve(article);
    } else {
      observer.observe(article);
    }
  });
}
