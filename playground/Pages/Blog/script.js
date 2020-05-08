const articles = [
  {
    title: 'From markdown to HTML',
    date: '2020-4-24',
    brief:
      'A rambling explanation behind a script that could have used a few more packages.',
    slug: 'from-markdown-to-html',
  },
  {
    title: 'Syntax Highlighting',
    date: '2020-4-1',
    brief: 'Adding syntax highlighting with shiki and async syntax.',
    slug: 'syntax-highlighting',
  },
  {
    title: 'Up and Running',
    date: '2020-3-20',
    brief:
      'The first article of this very website, and hopefully not the last.',
    slug: 'up-and-running',
  },

];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const main = document.querySelector('main#content');
main.innerHTML = articles
  .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
  .map((article, index) => {
    const { title, date, brief, slug } = article;

    const [year, month, day] = date.split('-');

    return `
    <article>
      <h2>
        <a href="/${slug}">
          ${title}
          ${
            index === 0
              ? `
            <svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em">
              <g fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" />
              <path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/>
              <path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/>
              <path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/>
              <path d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/>
            </g>
          </svg>
          `
              : ''
          }
        </a>
      </h2>

      <time datetime="${date}">
        ${months[month - 1]} ${day}, ${year}
      </time>

      <p>
        ${brief}
      </p>
    </article>
  `;
  })
  .join('');
