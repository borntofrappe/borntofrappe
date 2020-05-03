const icons = {
  html: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.004 85L.001 50.001l34.998-15.003L40.003-50h-80.007zm14.003 17.5h52l-.65 11.049h-39.649l.651 11.054H24.7L22.751 22.75 0 32.503l-22.75-9.752-.65-11.05h11.049l.325 5.525 12.026 5.2 12.026-5.2.977-16.574H-24.05L-25.998-32.5z"/></g></svg>`,
	css: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z"/></g></svg>`,
	js: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-50-50V50.8h38.4c-8.88 0-16.08-7.2-16.08-16.08v-5.04h10.08v5.04c0 3.36 2.64 6 6 6s6-2.64 6-6V.88H4.48v33.84c0 8.88-7.2 16.08-16.08 16.08H9.52V40.72H24.64c2.88 0 5.04-2.208 5.04-5.04s-2.184-5.04-5.04-5.04c-8.4 0-15.12-6.72-15.12-15.12S16.24.4 24.64.4h13.2v10.08h-13.2c-2.88 0-5.04 2.208-5.04 5.04s2.184 5.04 5.04 5.04c8.4 0 15.12 6.72 15.12 15.12S33.04 50.8 24.64 50.8h24V-50h-100.8z"/></g></svg>`,
	svg: `<svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="currentColor" stroke-width="8"><path d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(45)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(90)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /><path transform="rotate(135)" d="M 0 0 v 36 a 5 5 0 0 1 0 10 5 5 0 0 1 0 -10 v -72 a 5 5 0 0 1 0 -10 5 5 0 0 1 0 10" /></g></svg>`,
};

// necessary to update the default size
const getIcon = (icon, size = 42) => icons[icon].replace(
        /width=".+"\s+height=".+"/,
        `width="${size}" height="${size}"`
      );

const size = 450;
const iconSize = 100;

const section = document.querySelector('section');
section.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="100" height="100">
  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <g fill="none" stroke-width="4">
      <path stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" />
      <path d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" />
      <g transform="translate(0 -10)">
        <g transform="scale(1 -1)">
          <g class="rotate" transform="rotate(22)">
            <g transform="scale(1 -1)">
              <path stroke-dasharray="9 33" d="M 0 8 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" />
            </g>
          </g>
        </g>
      </g>
    </g>
    <g fill="none">
      <g transform="translate(0 -17)">
        <g transform="scale(1 -1)">
          <g class="rotate" transform="rotate(22)">
            <g transform="translate(26 0)">
              <path stroke-width="7" transform="translate(-65 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" />
              <path stroke-width="6" transform="translate(-52 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" />
              <path stroke-width="5" transform="translate(-38 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" />
              <path stroke-width="4.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" />
              <g stroke-width="4">
                <path d="M 0 -13 l -20 1 v 24 l 20 1" />
                <path d="M 12 -14 a 16.5 16.5 0 0 1 0 28" />
                <rect y="-17" width="12" height="34" rx="6" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
  </svg>

<h2>
  Getting started
</h2>
<p>
  This website in its infancy, but I hope you'll find something of value still. If you haven't checked it out already, might I suggest you visit the blog?
</p>
<a href="/blog">
  Explore articles
  <svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em">
    <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round">
      <g transform="rotate(90)">
        <path stroke-width="0" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />
        <g stroke-width="7">
          <path d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" />
          <path transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" />
          <path d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" />
          <circle r="9" cy="-11" />
        </g>
        <path fill="none" stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />
      </g>
    </g>
  </svg>
</a>
`;
