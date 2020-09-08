const icons = {
	world: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="12" stroke-linejoin="round" stroke-linecap="round"><circle r="44" /></g><g fill="currentColor" stroke="none"><path d="M -2 4 h 9 a 8 8 0 0 1 8 8 v 6 a 4 4 0 0 1 4 4 8 8 0 0 1 -8 8 v 6 a 9 9 0 0 1 -18 0 v -6 a 8 8 0 0 0 -4 -4 11 11 0 0 1 0 -22" /><path d="M -18 -26 a 3 3 0 0 1 3 3 v 4 a 3 3 0 0 1 -3 3 h -2 a 3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3 v -1 a 3 3 0 0 1 3 -3" /><path d="M 1 -28 a 4 4 0 0 1 -4 4 a 8 8 0 0 0 -8 8 v 3 a 4 4 0 0 0 -4 4 a 6 6 0 0 0 12 0 a 2 2 0 0 1 4 0 v 5 a 5 5 0 0 0 10 0 v -5 a 2 2 0 0 1 4 0 a 4 4 0 0 0 4 4 v 4 a 10 10 0 0 0 20 0 c 0 -38 -38 -38 -38 -38 a 4 4 0 0 0 -4 4 4 4 0 0 0 -4 4 4 4 0 0 0 4 4 h 4" /></g></svg>`,
	editor: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><path fill="currentColor" stroke="none" d="M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"/><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M-45-37.5h90v75h-90z" stroke-width="10"/><g stroke-width="8"><path d="M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8"/></g></g></svg>`,
	running: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8"  stroke-linejoin="round" stroke-linecap="round"><g transform="scale(-1 1) translate(-7 0) rotate(-35)"><path d="M 46 13.5 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 v -4 q 0 -8 16 -16 l 34 -15 a 20 20 0 0 0 34 0 8 8 0 0 1 8 8 v 27" /><g stroke-width="6"><path d="M 46 12.5 h -92" /><path d="M -20.5 -5.5 l 10 10" /><path d="M -10.5 -11.5 l 10 10" /></g></g></g></svg>`,
	flag: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-8 -90 100 100" width="1em" height="1em"><g transform="rotate(10)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g><path d="M 0 0 v -80" stroke-width="8"/><path d="M 0 -80.5 h 70 v 52 h -70" stroke-width="7"/></g></g><g fill="currentColor"><rect x="19" y="-77.5" width="16" height="16" rx="1" /><rect x="51" y="-77.5" width="16" height="16" rx="1" /><rect x="3" y="-61.5" width="16" height="16" rx="1" /><rect x="35" y="-61.5" width="16" height="16" rx="1" /><rect x="19" y="-45.5" width="16" height="16" rx="1" /><rect x="51" y="-45.5" width="16" height="16" rx="1" /></g></g></svg>`,
	gaming: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-27.916-32.012a5 5 0 00-.526.028 5 5 0 00-2.05.614c-5.334 1.568-9.465 6.062-11.282 11.877a5 5 0 00-.111.427l-6.998 32.001c-1.464 5.929-1.671 11.25 1.223 15.593 2.876 4.315 8.265 5.798 13.774 5.46 5.703-.052 9.108-3.662 12.086-6.143 3-2.5 5.576-3.84 5.8-3.84h32c.223 0 2.8 1.34 5.801 3.84 2.979 2.48 6.383 6.09 12.086 6.143 5.51.34 10.898-1.146 13.774-5.46 2.895-4.343 2.688-9.664 1.223-15.593l-.032-.144-6.967-31.858a5 5 0 00-.065-.27c-.983-3.538-2.434-6.595-4.786-8.947-2.351-2.352-5.714-3.717-9.036-3.717h-55.692a5 5 0 00-.213-.014zm7.914 15.013h5c.554 0 1 .445 1 1v8.5h8.5c.554 0 1 .445 1 1v5c0 .554-.446 1-1 1h-8.5V8c0 .554-.446 1-1 1h-5c-.554 0-1-.446-1-1V-.5h-8.5c-.554 0-1-.446-1-1v-5c0-.555.446-1 1-1h8.5V-16c0-.555.446-1 1-1zM17-17a5 5 0 015 5.005 5 5 0 01-5 5 5 5 0 01-5.005-5A5 5 0 0117-17zM24.997-.997a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z"/></g></svg>`,
};

const getIcon = (icon, size = 42) =>
  icons[icon].replace(
    /width="[^\"]+"\s+height="[^\"]+"/,
    `width="${size}" height="${size}"`
  );

const satellites = ['world', 'editor', 'running', 'flag', 'gaming'];

const colors = [
  'hsl(350, 100%, 8%)',
  'hsl(347, 100%, 19%)',
  'hsl(345, 95%, 27%)',
  'hsl(345, 96%, 33%)',
  'hsl(342, 92%, 39%)',
  'hsl(340, 85%, 46%)',
  'hsl(340, 90%, 55%)',
  'hsl(339, 90%, 67%)',
  'hsl(336, 93%, 77%)',
  'hsl(335, 100%, 86%)',
  'hsl(330, 100%, 92%)',
];

const article = document.querySelector('article');

article.innerHTML = `
<h2>Almost forgot</h2>
<p>I'm <mark>Gabriele Corti</mark>, coming to you from Europe, and a couple of hours after Greenwich time.</p>
<p>Outside of VsCode, you'll find me running, watching an F1 race, or enjoying a dated video game. Depends on the season.</p>

<svg viewBox="-50 -50 100 100" width="200" height="200">
  <defs>
    <clipPath id="clip-planet">
      <circle r="30" />
    </clipPath>

    <mask id="mask-satellites">
      <rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
      <g fill="hsl(0, 0%, 0%)">
        <g class="rotate">
          ${satellites
            .map(
              (satellite, index, { length }) => `
            <g transform="rotate(${(360 / length) * index}) translate(0 -42)">
              <circle r="7.5" />
            </g>
          `
            )
            .join('')}
        </g>
      </g>
    </mask>
  </defs>

  <g clip-path="url(#clip-planet)">
    <g transform="translate(0 -70)">
      ${colors
        .map(
          (color, index, { length }) => `
      <ellipse style="color: ${color}; color: var(--primary-${index});" fill="currentColor" stroke="none" cx="0" cy="70" rx="${35 +
            (15 / length) * index}" ry="33" transform="scale(${1 -
            (0.65 / length) * index})" />
      `
        )
        .join('')}
    </g>
  </g>
  <circle r="30" style="color: ${colors[colors.length - 1]}; color: var(--grey-10);" fill="none" stroke="currentColor" stroke-width="0.2" />

  <g mask="url(#mask-satellites)">
    <circle class="rotate" r="42" stroke-dasharray="1 2" stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="0.5" />
  </g>

  <g class="rotate">
    ${satellites
      .map(
        (satellite, index, { length }) => `
      <g transform="rotate(${(360 / length) *
        index}) translate(0 -42) rotate(${(360 / length) * index * -1})">
        <g transform="scale(-1 1)">
          <g class="rotate">
            <g transform="scale(-1 1)">
              <circle fill="none" stroke="currentColor" stroke-width="1" r="7.5" />
              <g transform="translate(-4 -4)">
                ${getIcon(satellite, 8)}
              </g>
            </g>
          </g>
        </g>
      </g>
    `
      )
      .join('')}
  </g>
</svg>
`;


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
  prefersReducedMotion.addEventListener('change', ({ matches }) => {
    if (matches) {
      observer.unobserve(article);
    } else {
      observer.observe(article);
    }
  });
}
