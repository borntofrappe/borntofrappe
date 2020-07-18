const palette = [
  {
    name: 'frappe',
    colors: [
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
    ],
  },
  {
    name: 'frappe-grey',
    colors: [
      'hsl(215, 22%, 5%)',
      'hsl(210, 20%, 12%)',
      'hsl(210, 18%, 25%)',
      'hsl(210, 16%, 32%)',
      'hsl(208, 14%, 39%)',
      'hsl(212, 12%, 45%)',
      'hsl(212, 10%, 54%)',
      'hsl(212, 15%, 65%)',
      'hsl(213, 16%, 79%)',
      'hsl(214, 15%, 88%)',
      'hsl(215, 10%, 97%)',
    ],
  },
  {
    name: 'twilight',
    colors: [
      'hsl(220, 100%, 8%)',
      'hsl(218, 100%, 15%)',
      'hsl(215, 97%, 25%)',
      'hsl(215, 96%, 32%)',
      'hsl(213, 95%, 38%)',
      'hsl(212, 92%, 45%)',
      'hsl(210, 85%, 55%)',
      'hsl(210, 90%, 62%)',
      'hsl(208, 95%, 75%)',
      'hsl(205, 100%, 85%)',
      ' hsl(205, 100%, 92%)',
    ],
  },
  {
    name: 'twilight-grey',
    colors: [
      'hsl(220, 60%, 7%)',
      'hsl(218, 50%, 20%)',
      'hsl(218, 40%, 25%)',
      'hsl(215, 35%, 32%)',
      'hsl(215, 22%, 39%)',
      'hsl(212, 25%, 45%)',
      'hsl(212, 28%, 54%)',
      'hsl(212, 25%, 65%)',
      'hsl(213, 30%, 79%)',
      'hsl(214, 32%, 88%)',
      'hsl(215, 30%, 97%)',
    ],
  },
];

const main = document.querySelector('main');

main.innerHTML = palette
  .map(
    ({ name, colors }) => `
  <article>
    <h2>${name}</h2>
    ${colors
      .map(
        (color, index) => `
      <div title="${name}-${index}" style="background: ${color}"></div>
    `
      )
      .join('')}
  </article>
`
  )
  .join('');
