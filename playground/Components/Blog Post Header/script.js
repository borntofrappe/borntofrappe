const articles = [
  {
    title: 'Sans extra',
  },
  {
    title: 'CSS Animation Paused',
    icons: ['css'],
  },
  {
    title: 'Syntax Highlighting',
    icons: ['html', 'svg', 'node'],
  },
  {
    title: 'Up and Running',
    icons: [
      'html',
      'css',
      'js',
      'svg',
      'node',
      'html',
      'css',
      'js',
      'svg',
      'node',
    ],
  },
];

const icons = {
  html: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.004 85L.001 50.001l34.998-15.003L40.003-50h-80.007zm14.003 17.5h52l-.65 11.049h-39.649l.651 11.054H24.7L22.751 22.75 0 32.503l-22.75-9.752-.65-11.05h11.049l.325 5.525 12.026 5.2 12.026-5.2.977-16.574H-24.05L-25.998-32.5z"/></g></svg>`,
  css: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z"/></g></svg>`,
  js: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-50-50V50.8h38.4c-8.88 0-16.08-7.2-16.08-16.08v-5.04h10.08v5.04c0 3.36 2.64 6 6 6s6-2.64 6-6V.88H4.48v33.84c0 8.88-7.2 16.08-16.08 16.08H9.52V40.72H24.64c2.88 0 5.04-2.208 5.04-5.04s-2.184-5.04-5.04-5.04c-8.4 0-15.12-6.72-15.12-15.12S16.24.4 24.64.4h13.2v10.08h-13.2c-2.88 0-5.04 2.208-5.04 5.04s2.184 5.04 5.04 5.04c8.4 0 15.12 6.72 15.12 15.12S33.04 50.8 24.64 50.8h24V-50h-100.8z"/></g></svg>`,
  svg: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="currentColor" stroke-width="8"><path d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(45)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(90)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(135)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /></g></svg>`,
  node: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"><path d="M -25 33 l -18 -9 v -48 l 44 -22 44 22 v 48 l -44 22 -7 -3.5" /><path d="M -14 -19 v 42.5 a 10 10 0 0 1 -10 10" /><path d="M 24 -9 a 10 10 0 0 0 -20 0 10 10 0 0 0 10 10 10 10 0 0 1 10 10 10 10 0 0 1 -20 0" /></g></svg>`,
};

const { body } = document;

body.innerHTML = articles
  .map(
    article => `
  <header>
    <h1>${article.title}</h1>
    ${
      article.icons
        ? `
      <h2 class="visually-hidden">Tags</h2>
      <ul>
      ${article.icons
        .map(
          icon => `
        <li>
          <span class="visually-hidden">${icon}</span>
          ${icons[icon]}
        </li>

      `
        )
        .join('')}
      </ul>
    `
        : ''
    }
  </header>
`
  )
  .join('');
