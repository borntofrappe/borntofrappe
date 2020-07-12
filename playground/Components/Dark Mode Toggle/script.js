const button = document.querySelector('button');
button.removeAttribute('disabled');

function setColorMode(colorMode) {
  document.body.setAttribute('color-mode', colorMode);
  window.localStorage.setItem('color-mode', colorMode);
}

const colorMode = window.localStorage.getItem('color-mode');

if (colorMode) {
  setColorMode(colorMode);
}

button.addEventListener('click', () => {
  let currentColorMode = window.localStorage.getItem('color-mode');
  if (!currentColorMode) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    currentColorMode = mediaQuery.matches ? 'dark' : 'light';
  }
  const colorMode = currentColorMode === 'light' ? 'dark' : 'light';

  setColorMode(colorMode);
});

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addListener(({ matches }) => {
  const colorMode = matches ? 'dark' : 'light';

  setColorMode(colorMode);
});
