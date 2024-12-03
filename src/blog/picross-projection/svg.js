export default {
	defs: `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
    <defs>
      <g id="shape-cube">
        <path d="M 0 0.25 l 0.5 -0.25 0.5 0.25 0 0.5 -0.5 0.25 -0.5 -0.25" />
        <g fill="black">
          <path opacity="0.5" d="M 0 0.25 l 0.5 0.25 0 0.5 -0.5 -0.25" />
          <path opacity="0.25" d="M 0.5 0.5 l 0.5 -0.25 0 0.5 -0.5 0.25" />
        </g>
      </g>
    </defs>
  </svg>
  `,
	cube: `<svg viewBox="0 0 1 1">
    <path
      fill="currentColor"
      d="M 0 0.25 l 0.5 -0.25 0.5 0.25 0 0.5 -0.5 0.25 -0.5 -0.25"
    />
  </svg>
  `,
	shadow: `<svg viewBox="0 0 2.5 1">
    <path
      fill="currentColor"
      d="M 0 0.25 l 0.5 -0.25 0.5 0.25 0 0.5 -0.5 0.25 -0.5 -0.25"
    />
    <g fill="black">
      <path opacity="0.5" d="M 0 0.25 l 0.5 0.25 0 0.5 -0.5 -0.25" />
      <path opacity="0.25" d="M 0.5 0.5 l 0.5 -0.25 0 0.5 -0.5 0.25" />
    </g>
    <g style="color: hotpink;" transform="translate(1.5 0)">
      <path
        fill="currentColor"
        d="M 0 0.25 l 0.5 -0.25 0.5 0.25 0 0.5 -0.5 0.25 -0.5 -0.25"
      />
      <g fill="black">
        <path opacity="0.5" d="M 0 0.25 l 0.5 0.25 0 0.5 -0.5 -0.25" />
        <path opacity="0.25" d="M 0.5 0.5 l 0.5 -0.25 0 0.5 -0.5 0.25" />
      </g>
    </g>
  </svg>`,
	'isometric-grid': `<svg viewBox="0 0 6 4">
    <defs>
      <pattern
        id="pattern-tile"
        viewBox="0 0 1 0.5"
        width="1"
        height="0.5"
        patternUnits="userSpaceOnUse"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="0.04"
          d="M 0 0.25 l 0.5 0.25 0.5 -0.25 -0.5 -0.25 -0.5 0.25z"
        />
      </pattern>
    </defs>
    <rect width="6" height="4" fill="url(#pattern-tile)" stroke="currentColor" stroke-width="0.08" />
  </svg>`,
	cubes: `<svg viewBox="0 0 3 1">
    <g fill="currentColor">
      <use x="0" y="0" href="#shape-cube" />
      <use x="1" y="0" href="#shape-cube" />
      <use x="2" y="0" href="#shape-cube" />
    </g>
  </svg>`,
	'offset-x': `<svg viewBox="0 0 2 1">
    <g fill="currentColor">
      <use x="0" y="0" href="#shape-cube" />
      <use x="0.5" y="0" href="#shape-cube" />
      <use x="1" y="0" href="#shape-cube" />
    </g>
  </svg>
  `,
	reverse: `<svg viewBox="0 0 2 1">
    <g fill="currentColor">
      <use x="1" y="0" href="#shape-cube" />
      <use x="0.5" y="0" href="#shape-cube" />
      <use x="0" y="0" href="#shape-cube" />
    </g>
  </svg>
  `,
	'offsets-y': `<svg viewBox="0 -0.5 2 1.5">
    <g fill="currentColor">
      <use x="1" y="-0.5" href="#shape-cube" />
      <use x="0.5" y="-0.25" href="#shape-cube" />
      <use x="0" y="0" href="#shape-cube" />
    </g>
  </svg>`,
	rows: `<svg viewBox="0 -0.5 2 3.5">
    <g fill="currentColor">
      <use x="1" y="-0.5" href="#shape-cube" />
      <use x="0.5" y="-0.25" href="#shape-cube" />
      <use x="0" y="0" href="#shape-cube" />
      <use x="0" y="1" href="#shape-cube" />
      <use x="0" y="2" href="#shape-cube" />
    </g>
  </svg>`,
	offsets: `<svg viewBox="0 -0.5 2 2.5">
    <g fill="currentColor">
      <use x="0" y="1" href="#shape-cube" />
      <use x="0" y="0.5" href="#shape-cube" />
      <use x="1" y="-0.5" href="#shape-cube" />
      <use x="0.5" y="-0.25" href="#shape-cube" />
      <use x="0" y="0" href="#shape-cube" />
    </g>
  </svg>`
};
