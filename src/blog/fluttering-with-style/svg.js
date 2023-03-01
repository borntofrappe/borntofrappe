export default {
	'mayo-1': `<svg viewBox="-60 -60 120 120">
    <ellipse fill="#f9f5d0" rx="28" ry="25" />
  </svg>`,
	leg: `<svg viewBox="-20 -10 40 40">
  <path fill="#fd971b" d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7z" />
</svg>`,
	'leg-stroke': `<svg viewBox="-20 -10 40 40">
<path fill="#fd971b" stroke="#fd971b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7z" />
</svg>`,
	'mayo-2': `<svg viewBox="-60 -60 120 120">
    <defs>
	<path id="leg-definition-leg" d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7z" />
</defs>
<g transform="translate(0 17)" fill="#fd971b" stroke="#fd971b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
<use href="#leg-definition-leg" x="-12" />
<use href="#leg-definition-leg" x="12" />
</g>
<ellipse fill="#f9f5d0" rx="28" ry="25" />
</svg>`
};
