export default {
	defs: `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
    <defs>
      <g id="cube">
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
  </svg>`
};
