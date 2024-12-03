export default {
	defs: `<svg aria-hidden="true" width="0" height="0" style="inline-size: 0; block-size: 0; position: absolute;">
  <defs>
    <path transform="rotate(45)" id="console-check" fill-rule="evenodd" d="M 2 0 A 2 2 0 0 0 -2 0 A 2 2 0 0 0 2 0 M 0.65 0.3 0.65 -0.95 A 0.4 0.4 0 0 0 -0.15 -0.95 L -0.15 0.3 -0.65 0.3 A 0.4 0.4 0 0 0 -0.65 1.1 L 0.25 1.1 A 0.4 0.4 0 0 0 0.65 0.7"></path>
    <path id="console-details" fill-rule="evenodd" d="M 2 0 A 2 2 0 0 0 -2 0 A 2 2 0 0 0 2 0 M 0.4 -0.4 0.4 -0.9 A 0.4 0.4 0 0 0 -0.4 -0.9 L -0.4 -0.4 -0.9 -0.4 A 0.4 0.4 0 0 0 -0.9 0.4 L -0.4 0.4 -0.4 0.9 A 0.4 0.4 0 0 0 0.4 0.9 L 0.4 0.4 0.9 0.4 A 0.4 0.4 0 0 0 0.9 -0.4 Z"></path>
    <path id="console-arrow" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M -1 -0.5 1 -0.5 0 0.5 Z" />
    <linearGradient id="console-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="30">
      <stop stop-color="black" stop-opacity="0" offset="0.55" />
      <stop stop-color="black" stop-opacity="0.1" offset="0.55" />
    </linearGradient>
  </defs>
</svg>`,
	'inspector-shadow-defs': `<svg style="display: block;" viewBox="0 0 100 54">
  <rect fill="hsl(249 11% 12%)" width="100" height="54" rx="5" />
  <path fill="hsl(249 8% 17%)" d="M 0 12 0 5 A 5 5 0 0 1 5 0 L 95 0 A 5 5 0 0 1 100 5 L 100 12" />
  <path fill="hsl(249 11% 12%)" d="M 22 12 A 2 2 0 0 0 24 10 L 24 5 A 2 2 0 0 1 26 3 L 62 3 A 2 2 0 0 1 64 5 L 64 10 A 2 2 0 0 0 66 12" />
  <g transform="translate(6 6)">
    <circle fill="hsl(3 100% 68%)" r="1.75" />
    <circle fill="hsl(41 99% 60%)" cx="6" r="1.75" />
    <circle fill="hsl(129 62% 49%)" cx="12" r="1.75" />
  </g>
  <g transform="translate(30 8)" fill="none" stroke="hsl(0 0% 94%)">
    <rect stroke-width="0.75" x="-1.75" y="-1.75" width="3.5" height="3.5" rx="0.5" />
    <path stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" d="M 0 -1.75 0 -2.75 M 1.75 0 2.75 0 M 0 1.75 0 2.75 M -1.75 0 -2.75 0" />
  </g>
  <use fill="hsl(3 100% 68%)" transform="translate(6 44) rotate(45)" href="#console-details"></use>
  <g font-family="monospace" font-weight="700">
    <text fill="hsl(258 97% 74%)" font-size="3.25" x="35" y="9">Inspector</text>
    <g fill="hsl(0 0% 94%)" font-size="3.75">
      <text x="10" y="21"><tspan fill="hsl(195 74% 71%)">#shadow-root</tspan></text>
      <text x="15" y="29">&lt;path id="<tspan >star</tspan>" /&gt;<tspan dx="1" dy="-0.8"></text>
      <text x="15" y="37">...</text>
      <text fill="hsl(3 100% 68%)" x="10" y="45">&lt;use href="#star" /&gt;</text>
    </g>
  </g>
  <rect style="pointer-events: none;" fill="url(#console-gradient)" width="100" height="54" rx="5" />
</svg>`,
	'inspector-shadow-href': `<svg style="display: block;" viewBox="0 0 100 54">
  <rect fill="hsl(249 11% 12%)" width="100" height="54" rx="5" />
  <path fill="hsl(249 8% 17%)" d="M 0 12 0 5 A 5 5 0 0 1 5 0 L 95 0 A 5 5 0 0 1 100 5 L 100 12" />
  <path fill="hsl(249 11% 12%)" d="M 22 12 A 2 2 0 0 0 24 10 L 24 5 A 2 2 0 0 1 26 3 L 62 3 A 2 2 0 0 1 64 5 L 64 10 A 2 2 0 0 0 66 12" />
  <g transform="translate(6 6)">
    <circle fill="hsl(3 100% 68%)" r="1.75" />
    <circle fill="hsl(41 99% 60%)" cx="6" r="1.75" />
    <circle fill="hsl(129 62% 49%)" cx="12" r="1.75" />
  </g>
  <g transform="translate(30 8)" fill="none" stroke="hsl(0 0% 94%)">
    <rect stroke-width="0.75" x="-1.75" y="-1.75" width="3.5" height="3.5" rx="0.5" />
    <path stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" d="M 0 -1.75 0 -2.75 M 1.75 0 2.75 0 M 0 1.75 0 2.75 M -1.75 0 -2.75 0" />
  </g>
  <use fill="hsl(129 62% 49%)" transform="translate(11 36)" href="#console-check"></use>
  <g font-family="monospace" font-weight="700">
    <text fill="hsl(258 97% 74%)" font-size="3.25" x="35" y="9">Inspector</text>
    <g fill="hsl(0 0% 94%)" font-size="3.75">
      <text x="10" y="21"><tspan fill="hsl(195 74% 71%)">#shadow-root</tspan></text>
      <text x="15" y="29">&lt;path id="<tspan >star</tspan>" /&gt;<tspan dx="1" dy="-0.8"></text>
      <text fill="hsl(129 62% 49%)" x="15" y="37">&lt;use href="#star" /&gt;</text>
      <text x="10" y="45">...</text>
    </g>
  </g>
  <rect style="pointer-events: none;" fill="url(#console-gradient)" width="100" height="54" rx="5" />
</svg>`,
	'inspector-light-href': `<svg style="display: block;" viewBox="0 0 100 54">
  <rect fill="hsl(249 11% 12%)" width="100" height="54" rx="5" />
  <path fill="hsl(249 8% 17%)" d="M 0 12 0 5 A 5 5 0 0 1 5 0 L 95 0 A 5 5 0 0 1 100 5 L 100 12" />
  <path fill="hsl(249 11% 12%)" d="M 22 12 A 2 2 0 0 0 24 10 L 24 5 A 2 2 0 0 1 26 3 L 62 3 A 2 2 0 0 1 64 5 L 64 10 A 2 2 0 0 0 66 12" />
  <g transform="translate(6 6)">
    <circle fill="hsl(3 100% 68%)" r="1.75" />
    <circle fill="hsl(41 99% 60%)" cx="6" r="1.75" />
    <circle fill="hsl(129 62% 49%)" cx="12" r="1.75" />
  </g>
  <g transform="translate(30 8)" fill="none" stroke="hsl(0 0% 94%)">
    <rect stroke-width="0.75" x="-1.75" y="-1.75" width="3.5" height="3.5" rx="0.5" />
    <path stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" d="M 0 -1.75 0 -2.75 M 1.75 0 2.75 0 M 0 1.75 0 2.75 M -1.75 0 -2.75 0" />
  </g>
  <use fill="hsl(3 100% 68%)" transform="translate(11 28) rotate(45)" href="#console-details"></use>
  <g font-family="monospace" font-weight="700">
    <text fill="hsl(258 97% 74%)" font-size="3.25" x="35" y="9">Inspector</text>
    <g fill="hsl(0 0% 94%)" font-size="3.75">
      <text x="10" y="21"><tspan fill="hsl(195 74% 71%)">#shadow-root</tspan></text>
      <text fill="hsl(3 100% 68%)" x="15" y="29">&lt;path id="<tspan >star</tspan>" /&gt;<tspan dx="1" dy="-0.8"></text>
      <text x="15" y="37">...</text>
      <text x="10" y="45">&lt;use href="#star" /&gt;</text>
    </g>
  </g>
  <rect style="pointer-events: none;" fill="url(#console-gradient)" width="100" height="54" rx="5" />
</svg>`,
	'inspector-light-defs': `<svg style="display: block;" viewBox="0 0 100 54">
  <rect fill="hsl(249 11% 12%)" width="100" height="54" rx="5" />
  <path fill="hsl(249 8% 17%)" d="M 0 12 0 5 A 5 5 0 0 1 5 0 L 95 0 A 5 5 0 0 1 100 5 L 100 12" />
  <path fill="hsl(249 11% 12%)" d="M 22 12 A 2 2 0 0 0 24 10 L 24 5 A 2 2 0 0 1 26 3 L 62 3 A 2 2 0 0 1 64 5 L 64 10 A 2 2 0 0 0 66 12" />
  <g transform="translate(6 6)">
    <circle fill="hsl(3 100% 68%)" r="1.75" />
    <circle fill="hsl(41 99% 60%)" cx="6" r="1.75" />
    <circle fill="hsl(129 62% 49%)" cx="12" r="1.75" />
  </g>
  <g transform="translate(30 8)" fill="none" stroke="hsl(0 0% 94%)">
    <rect stroke-width="0.75" x="-1.75" y="-1.75" width="3.5" height="3.5" rx="0.5" />
    <path stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" d="M 0 -1.75 0 -2.75 M 1.75 0 2.75 0 M 0 1.75 0 2.75 M -1.75 0 -2.75 0" />
  </g>
  <use fill="hsl(129 62% 49%)" transform="translate(6 36)" href="#console-check"></use>
  <g font-family="monospace" font-weight="700">
    <text fill="hsl(258 97% 74%)" font-size="3.25" x="35" y="9">Inspector</text>
    <g fill="hsl(0 0% 94%)" font-size="3.75">
      <text x="10" y="21"><tspan fill="hsl(195 74% 71%)">#shadow-root</tspan></text>
      <text x="15" y="29">...</text>
      <text fill="hsl(129 62% 49%)" x="10" y="37">&lt;path id="<tspan >star</tspan>" /&gt;<tspan dx="1" dy="-0.8"></text>
      <text x="10" y="45">&lt;use href="#star" /&gt;</text>
    </g>
  </g>
  <rect style="pointer-events: none;" fill="url(#console-gradient)" width="100" height="54" rx="5" />
</svg>`
};
