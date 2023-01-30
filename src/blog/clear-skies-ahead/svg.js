export default {
	circles: `<svg viewBox="-50 -50 100 100">
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
	mask: `<svg style="outline: 1px solid currentColor" viewBox="-25 -25 50 50">
  <defs>
    <circle id="mask-c" r="11" />
    <mask id="mask-mask">
      <use fill="black" href="#mask-c" />
    </mask>
  </defs>

  <g fill="#ebf3f5">
    <use mask="url(#mask-mask)" href="#mask-c" />
  </g>
</svg>
`,
	masked: `<svg viewBox="-25 -25 50 50">
	<defs>
	  <circle id="masked-c" r="11" />
	  <mask id="masked-mask">
		<use fill="white" href="#masked-c" />
		<use fill="black" y="-2" href="#masked-c" />
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
  </svg>
  `,
	shapes: `<svg viewBox="-55 -15 110 45">
	<defs>
	  <circle id="shapes-c" r="11" />
	  <mask id="shapes-mask">
		<use fill="white" href="#shapes-c" />
		<use fill="black" y="-2" href="#shapes-c" />
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
	  <use x="-28" href="#shapes-c" />
	  <use x="28" href="#shapes-cc" />
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
  </svg>
  `,
	cloud: `<svg viewBox="-50 -50 100 100">
	<defs>
	  <circle id="cloud-c" r="11" />
	  <mask id="cloud-mask">
		<use fill="white" href="#cloud-c" />
		<use fill="black" y="-2" href="#cloud-c" />
	  </mask>
	  <g id="cloud-cc">
		<use href="#cloud-c" />
		<use href="#cloud-c" mask="url(#cloud-mask)" fill="black" opacity="0.1" />
	  </g>
	</defs>
  
	<g fill="#ebf3f5">
	  <use href="#cloud-c" />
	  <use transform="translate(-12.5 -5)" href="#cloud-c" />
	  <use transform="translate(12.5 -5)" href="#cloud-c" />
	  <use transform="translate(0 -10)" href="#cloud-c" />
	  <use transform="translate(-20 0)" href="#cloud-cc" />
	  <use transform="translate(20 0)" href="#cloud-cc" />
	  <use transform="translate(-15 10)" href="#cloud-cc" />
	  <use transform="translate(15 10)" href="#cloud-cc" />
	  <use transform="translate(0 15)" href="#cloud-cc" />
	</g>
  </svg>
  `
};
