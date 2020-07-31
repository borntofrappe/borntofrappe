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