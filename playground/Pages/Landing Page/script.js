// markup
const icons = {
  blog: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M -26 -19 h -20 v -6 a 12 12 0 0 1 24 0 v 50 a 12 12 0 0 0 24 0 v -5 h 44 v 5 a 12 12 0 0 1 -12 12 h -44 a 12 12 0 0 1 -12 -12" /><path d="M -34 -37 h 44 a 12 12 0 0 1 12 12 v 45 h -20 v 5 a 12 12 0 0 1 -24 0 v -50 a 12 12 0 0 0 -12 -12" /></g><g stroke-width="6"><path d="M -10 -20 h 20" /><path d="M -10 -8 h 10" /><path d="M -10 4 h 15" /><path d="M -10 16 h 5" /></g></g></svg>`,
  codepen: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M 0 -40 l -46 25 46 25 46 -25 z" /><path d="M 0 -40 v 30" /><path transform="translate(0 50)" d="M 0 -40 v 30" /><path transform="translate(46 25)" d="M 0 -40 v 30" /><path transform="translate(-46 25)" d="M 0 -40 v 30" /><path transform="translate(0 30)" d="M 0 -40 l -46 25 46 25 46 -25 z" /></g></svg>`,
  freecodecamp: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"><path d="M 30 -35 c 21 20 21 50 0 70" /><path transform="scale(-1 1)" d="M 30 -35 c 21 20 21 50 0 70" /><g transform="translate(0 30)" stroke-linejoin="round"><path d="M 20 -20 a 20 20 0 0 1 -40 0 q 0 -10 10 -20 t 0 -20 q 15 17 12.5 35 q 10 0 12.5 -15 q 5 11.25 5 20" /></g></g></svg>`,
  github: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="8" d="M 0 11 h -17 a 18 18 0 0 1 -18 -18 q 0 -8 5 -16 q -6 -10 0 -18 q 12 0 18 6 a 24 24 0 0 1 24 0 q 6 -6 18 -6 q 6 8 0 18 q 5 8 5 16 a 18 18 0 0 1 -18 18 h -17" /><path stroke-width="6" d="M -12 11 q -10 0 -10 14 q 0 8 -8 14 q 20 0 20 -16 v 4 q 0 10 -6 16 q 16 0 16 -15 v -4 v 4 q 0 15 16 15 q -6 0 -6 -16 v -4 q 0 16 20 16 q -8 0 -8 -14 q 0 -14 -10 -14" /></g></svg>`,
  twitter: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="8" d="M -39 30.5 c 40 20 75 0 75 -48 l 8 -8 -12 -2 a 10 10 0 0 0 -32.5 12 q -20 5 -40 -15" /><path stroke-width="7" d="M -40.5 -30.5 q -5 20 14 26 -9 0 -18 -5 0 20 23 18 -10 4 -22 0 0 12 28 14 -10 6 -23.5 8" /></g></svg>`,
  world: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="12" stroke-linejoin="round" stroke-linecap="round"><circle r="44" /></g><g fill="currentColor" stroke="none"><path d="M -2 4 h 9 a 8 8 0 0 1 8 8 v 6 a 4 4 0 0 1 4 4 8 8 0 0 1 -8 8 v 6 a 9 9 0 0 1 -18 0 v -6 a 8 8 0 0 0 -4 -4 11 11 0 0 1 0 -22" /><path d="M -18 -26 a 3 3 0 0 1 3 3 v 4 a 3 3 0 0 1 -3 3 h -2 a 3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3 v -1 a 3 3 0 0 1 3 -3" /><path d="M 1 -28 a 4 4 0 0 1 -4 4 a 8 8 0 0 0 -8 8 v 3 a 4 4 0 0 0 -4 4 a 6 6 0 0 0 12 0 a 2 2 0 0 1 4 0 v 5 a 5 5 0 0 0 10 0 v -5 a 2 2 0 0 1 4 0 a 4 4 0 0 0 4 4 v 4 a 10 10 0 0 0 20 0 c 0 -38 -38 -38 -38 -38 a 4 4 0 0 0 -4 4 4 4 0 0 0 -4 4 4 4 0 0 0 4 4 h 4" /></g></svg>`,
	editor: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><path fill="currentColor" stroke="none" d="M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"/><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M-45-37.5h90v75h-90z" stroke-width="10"/><g stroke-width="8"><path d="M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8"/></g></g></svg>`,
	running: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8"  stroke-linejoin="round" stroke-linecap="round"><g transform="scale(-1 1) translate(-7 0) rotate(-35)"><path d="M 46 13.5 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 v -4 q 0 -8 16 -16 l 34 -15 a 20 20 0 0 0 34 0 8 8 0 0 1 8 8 v 27" /><g stroke-width="6"><path d="M 46 12.5 h -92" /><path d="M -20.5 -5.5 l 10 10" /><path d="M -10.5 -11.5 l 10 10" /></g></g></g></svg>`,
	tea: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g transform="scale(0.9)"><g fill="currentColor" stroke="none"><path d="M-22.023-45.028a2 2 0 00-.284.027h.614a2 2 0 00-.33-.027zm5 0a2 2 0 00-.284.027h.642a2 2 0 00-.358-.027zM-42-45.001a8 8 0 00-7.998 8.003v46a20 20 0 0020 20.001H7.005a20 20 0 0020-20V-1.995h2c11.526 0 21-9.474 21-21 0-11.527-9.474-21-21-21H22.87a8 8 0 00-3.864-1h-34.001v16.173l9.417 9.412a2 2 0 01.586 1.414V.007a2 2 0 01-2 2h-25a2 2 0 01-2-2v-18.003a2 2 0 01.586-1.414l9.412-9.412v-16.174h-18.003zm69.002 13.003h2c5.04 0 9.002 3.957 9.002 8.998 0 5.04-3.962 8.998-9.003 8.998h-2V-32z"/></g><g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="square"><path d="M-45 40h67"/></g></g></svg>`,
  gaming: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-27.916-32.012a5 5 0 00-.526.028 5 5 0 00-2.05.614c-5.334 1.568-9.465 6.062-11.282 11.877a5 5 0 00-.111.427l-6.998 32.001c-1.464 5.929-1.671 11.25 1.223 15.593 2.876 4.315 8.265 5.798 13.774 5.46 5.703-.052 9.108-3.662 12.086-6.143 3-2.5 5.576-3.84 5.8-3.84h32c.223 0 2.8 1.34 5.801 3.84 2.979 2.48 6.383 6.09 12.086 6.143 5.51.34 10.898-1.146 13.774-5.46 2.895-4.343 2.688-9.664 1.223-15.593l-.032-.144-6.967-31.858a5 5 0 00-.065-.27c-.983-3.538-2.434-6.595-4.786-8.947-2.351-2.352-5.714-3.717-9.036-3.717h-55.692a5 5 0 00-.213-.014zm7.914 15.013h5c.554 0 1 .445 1 1v8.5h8.5c.554 0 1 .445 1 1v5c0 .554-.446 1-1 1h-8.5V8c0 .554-.446 1-1 1h-5c-.554 0-1-.446-1-1V-.5h-8.5c-.554 0-1-.446-1-1v-5c0-.555.446-1 1-1h8.5V-16c0-.555.446-1 1-1zM17-17a5 5 0 015 5.005 5 5 0 01-5 5 5 5 0 01-5.005-5A5 5 0 0117-17zM24.997-.997a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z"/></g></svg>`,
};

const getIcon = (icon, size = 42) =>
  icons[icon].replace(
    /width="[^\"]+"\s+height="[^\"]+"/,
    `width="${size}" height="${size}"`
  );


const links = [
  {
    name: 'blog',
    href: '/blog',
    desc:
      'Take a look at the articles I wrote wrote on my way to become a full-fledged web developer.',
  },
  {
    name: 'codepen',
    href: 'https://codepen.io/borntofrappe',
    desc:
      'Pick and choose from one of the innumerable demos I created to master HTML, CSS, JS, SVG, React and much more.',
  },
  {
    name: 'freecodecamp',
    href: 'https://www.freecodecamp.org/borntofrappe',
    desc: 'Admire the certifications I earned in the freeCodeCamp curriculum.',
  },
  {
    name: 'github',
    href: 'https://github.com/borntofrappe',
    desc: 'Review, fork and improve all the code I open-source on Github.',
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/borntofrappe',
    desc: 'Remember to follow me @borntofrappe.',
  },
];

const size = 450;
const iconSize = 100;

const hero = document.querySelector('header');

hero.innerHTML = `
<div>
  <h1 class="visually-hidden">
    borntofrappe
  </h1>
  <p>Welcome to my small corner on the web.<br/>This is where I save my journey as a:</p>
  <ul>
    <li>hopeful developer</li>
    <li>fledging designer</li>
    <li>long-distance runner</li>
  </ul>
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="-${size / 2} -${size /
  2} ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <path id="path" d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" />
    <path id="path-c" d="M 0 39 a 39 39 0 0 1 0 -78 39 39 0 0 1 0 78" />
    <path id="path-cc" d="M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94" />

    <mask id="mask-text">
      <rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
      <use href="#path" fill="hsl(0, 0%, 0%)" />
    </mask>
  </defs>

  <g class="borntofrappe">
    <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <circle r="46" />
      <path d="M -10 -13 q 0 -8 -8 -10" stroke-dasharray="14.01 18.5" stroke-dashoffset="-4.5" />
      <path d="M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36" stroke-dasharray="114.2 146.28" stroke-dashoffset="-9.145" />
    </g>
    <circle r="50" opacity="0" />
  </g>

  ${links
    .map(
      ({ name, desc, href }, index) => `
    <g transform="rotate(${(360 / links.length) *
      index}) translate(0 -${Math.floor(size / 3)}) rotate(${(360 /
        links.length) *
        index *
        -1})">
      <a href="${href}" aria-labelledby="title-${name}" aria-describedby="desc-${name}">
        <title id="title-${name}">${name}</title>
        <desc id="desc-${name}">${desc}</desc>
        <g transform="translate(-${size / 6} -${size / 6})">
          <svg viewBox="-${iconSize / 2} -${iconSize /
        2} ${iconSize} ${iconSize}" width="${size / 3}" height="${size / 3}">
              <use href="#path" stroke="currentColor" stroke-width="6" fill="none" />
              <g transform="rotate(${(360 / links.length) *
                index})" mask="url(#mask-text)">
                <g class="text">
                  <text fill="currentColor" font-weight="bold" letter-spacing="1" text-anchor="middle" font-size="12" font-family="monospace">
                    <textPath href="${
                      (360 / links.length) * index > 90 &&
                      (360 / links.length) * index < 270
                        ? '#path-cc'
                        : '#path-c'
                    }" startOffset="50%">
                      ${name}
                    </textPath>
                  </text>
                </g>
              </g>

              <g transform="translate(-${iconSize / 6} -${iconSize / 6})">
                ${getIcon(name, iconSize / 3)}
              </g>

              <circle r="50" opacity="0" />
          </svg>
        </g>
      </a>
    </g>
  `
    )
    .join('')}
</svg>
`;

const satellites = ['world', 'editor', 'running', 'tea', 'gaming'];

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

const about = document.querySelector('article#about');

about.innerHTML = `
<h2>Almost forgot</h2>
<p>Name's <mark>Gabriele</mark>.</p>
<p>Born and raised in Italy, I enjoyed a year in Germany, where I developed a lasting appreciation of the French language. </p>
<p>Outside of VsCode, you'll find me running, nursing a cup of tea, or enjoying a dated video game.<br/>Depends on the season.</p>

<svg viewBox="-50 -50 100 50" width="200" height="100">
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
        index * -1}) translate(0 -42) rotate(${(360 / length) * index})">
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

const articles = document.querySelectorAll('article');
if (window.IntersectionObserver) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('observed')
      } else {
        entry.target.classList.remove('observed')
      }
    });
  });

  articles.forEach(article => {
    observer.observe(article);
  })
}


// toggle
function setPreference(preference) {
  document.body.setAttribute('data-preference', preference);
  window.localStorage.setItem('color-scheme', preference);
}

if (window.CSS && CSS.supports('--primary-6: hotpink')) {
  const button = document.querySelector('button');
  button.removeAttribute('disabled');

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const colorScheme = window.localStorage.getItem('color-scheme');

  if (colorScheme) {
    setPreference(colorScheme);
  } else {
    setPreference(mediaQuery.matches ? 'dark' : 'light');
  }

  button.addEventListener('click', () =>
    setPreference(
      window.localStorage.getItem('color-scheme') === 'dark' ? 'light' : 'dark'
    )
  );
  mediaQuery.addListener(({ matches }) =>
    setPreference(matches ? 'dark' : 'light')
  );

  const timeout = setTimeout(() => {
    document.body.setAttribute('data-transition', 'true');
    clearTimeout(timeout);
  }, 0);
}