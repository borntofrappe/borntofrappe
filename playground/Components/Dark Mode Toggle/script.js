const button = document.querySelector('button');
button.removeAttribute('disabled');

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const preference = window.localStorage.getItem('color-preference');

function setColorPreference(colorPreference) {
  document.body.setAttribute('color-preference', colorPreference);
  window.localStorage.setItem('color-preference', colorPreference);
}

if (preference) {
  setColorPreference(preference);
} else {
  setColorPreference(mediaQuery.matches ? 'dark' : 'light');
}

button.addEventListener('click', () => setColorPreference(window.localStorage.getItem('color-preference') === 'dark' ? 'light' : 'dark'));
mediaQuery.addListener(({ matches }) => setColorPreference(matches ? 'dark' : 'light'));