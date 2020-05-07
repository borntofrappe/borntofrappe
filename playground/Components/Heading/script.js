const main = document.querySelector('main');

main.innerHTML = Array(3)
  .fill()
  .map((value, index) => index + 2)
  .map(
    level => `
  <h${level} class="permalink" id="heading-${level}">
    h${level} heading
    <a href="#heading-${level}">
      <span class="visually-hidden">permalink</span>
      <svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em">
        <g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round">
          <path stroke-dasharray="140 26" stroke-dashoffset="-18" d="M -24 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" />
          <path transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-18" d="M -24 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" />
        </g>
      </svg>
    </a>
  </h${level}>
`
  )
  .join('');
