export default {
	circles: `<svg style="display: block" viewBox="-50 -50 100 100">
	<defs>
	  <circle id="circles-c" r="11" />
	</defs>
	<g fill="#ebf3f5">
	  <use href="#circles-c" />
	  <use href="#circles-c" transform="translate(-12.5 -5)" />
	  <use href="#circles-c" transform="translate(12.5 -5)" />
	  <use href="#circles-c" transform="translate(0 -10)" />
	  <use href="#circles-c" transform="translate(-20 0)" />
	  <use href="#circles-c" transform="translate(20 0)" />
	  <use href="#circles-c" transform="translate(-15 10)" />
	  <use href="#circles-c" transform="translate(15 10)" />
	  <use href="#circles-c" transform="translate(0 15)" />
	</g>
  </svg>`,
	mask: `<svg style="display: block; outline: 1px solid currentColor" viewBox="-25 -25 50 50">
  <defs>
    <circle id="mask-c" r="11" />
    <mask id="mask-mask">
      <use href="#mask-c" fill="black" />
    </mask>
  </defs>
  <g fill="#ebf3f5">
    <use href="#mask-c" mask="url(#mask-mask)" />
  </g>
  </svg>`,
	masked: `<svg style="display: block" viewBox="-25 -25 50 50">
	<defs>
	  <circle id="masked-c" r="11" />
	  <mask id="masked-mask">
		<use href="#masked-c" fill="white" />
		<use href="#masked-c" y="-2" fill="black" />
	  </mask>
	  <g id="masked-cc">
		<use href="#masked-c" />
		<use
		  href="#masked-c"
		  mask="url(#masked-mask)"
		  fill="black"
		  opacity="0.1"
		/>
	  </g>
	</defs>
	<g fill="#ebf3f5">
	  <use href="#masked-cc" />
	</g>
  </svg>`,
	shapes: `<svg style="display: block" viewBox="-55 -20 110 50">
	<defs>
	  <circle id="shapes-c" r="11" />
	  <mask id="shapes-mask">
		<use href="#shapes-c" fill="white" />
		<use href="#shapes-c" y="-2" fill="black" />
	  </mask>
	  <g id="shapes-cc">
		<use href="#shapes-c" />
		<use
		  href="#shapes-c"
		  mask="url(#shapes-mask)"
		  fill="black"
		  opacity="0.1"
		/>
	  </g>
	</defs>
	<g fill="#ebf3f5">
	  <use href="#shapes-c" x="-28" />
	  <use href="#shapes-cc" x="28" />
	</g>
	<g
	  fill="currentColor"
	  font-family="monospace"
	  font-size="5"
	  font-weight="700"
	  text-anchor="middle"
	  dominant-baseline="hanging"
	>
	  <g transform="translate(0 20)">
		<text x="-28">&lt;use href="#c"/&gt;</text>
		<text x="28">&lt;use href="#cc"/&gt;</text>
	  </g>
	</g>
  </svg>`,
	cloud: `<svg style="display: block" viewBox="-50 -50 100 100">
	<defs>
	  <circle id="cloud-c" r="11" />
	  <mask id="cloud-mask">
		<use href="#cloud-c" fill="white" />
		<use href="#cloud-c" fill="black" y="-2" />
	  </mask>
	  <g id="cloud-cc">
		<use href="#cloud-c" />
		<use href="#cloud-c" mask="url(#cloud-mask)" fill="black" opacity="0.1" />
	  </g>
	</defs>
	<g fill="#ebf3f5">
	  <use href="#cloud-c" />
	  <use href="#cloud-c" transform="translate(-12.5 -5)" />
	  <use href="#cloud-c" transform="translate(12.5 -5)" />
	  <use href="#cloud-c" transform="translate(0 -10)" />
	  <use href="#cloud-cc" transform="translate(-20 0)" />
	  <use href="#cloud-cc" transform="translate(20 0)" />
	  <use href="#cloud-cc" transform="translate(-15 10)" />
	  <use href="#cloud-cc" transform="translate(15 10)" />
	  <use href="#cloud-cc" transform="translate(0 15)" />
	</g>
  </svg>`
};
