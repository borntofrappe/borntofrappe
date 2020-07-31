const articles = [
  {
    title: 'From markdown to HTML',
    date: '2020-5-10',
    brief:
      'A rambling explanation behind a script that could have used a few more packages.',
    slug: 'from-markdown-to-html',
  },
  {
    title: 'Syntax Highlighting',
    date: '2020-5-11',
    brief: 'Adding syntax highlighting with shiki and async syntax.',
    slug: 'syntax-highlighting',
  },
  {
    title: 'Up and Running',
    date: '2020-5-10',
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

const main = document.querySelector('main');
main.innerHTML = articles
  .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
  .map((article, index) => {
    const { title, date, brief, slug } = article;

    const [year, month, day] = date.split('-');

    return `
    <article>
      <h2>
        <a href="/blog/${slug}">
          ${title}
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

function setPreference(preference) {
  document.body.setAttribute('data-preference', preference);
  window.localStorage.setItem('color-scheme', preference);
}

if (window.CSS && CSS.supports('--primary-6: hotpink')) {
  const button = document.querySelector('button');
  button.removeAttribute('disabled');

  const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const colorScheme = window.localStorage.getItem('color-scheme');

  if (colorScheme) {
    setPreference(colorScheme);
  } else {
    setPreference(prefersColorScheme.matches ? 'dark' : 'light');
  }

  button.addEventListener('click', () =>
    setPreference(
      window.localStorage.getItem('color-scheme') === 'dark' ? 'light' : 'dark'
    )
  );
  prefersColorScheme.addListener(({ matches }) =>
    setPreference(matches ? 'dark' : 'light')
  );

  const timeout = setTimeout(() => {
    document.body.setAttribute('data-transition', 'true');
    clearTimeout(timeout);
  }, 0);
}
