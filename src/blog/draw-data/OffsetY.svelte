<div>
  <input id="offset-y" type="checkbox" />
  <label for="offset-y">Offset shape</label>

  <svg style="display: block;" viewBox="0 0 14 11.1">
    <defs>
      <marker
        id="offset-y-marker"
        orient="auto"
        markerWidth="10"
        markerHeight="10"
        viewBox="-1 -1 2 2"
      >
        <path
          fill="var(--color-text-2, hsl(210 10% 23%))"
          d="M -0.8 -0.8 0.8 0 -0.8 0.8"
        />
      </marker>
      <pattern
        id="offset-y-pattern"
        width="2"
        height="2"
        patternUnits="userSpaceOnUse"
        viewBox="0 0 2 2"
      >
        <rect
          fill="var(--color-surface-2, hsl(210 16% 93%))"
          width="2"
          height="2"
        />
        <g fill="var(--color-surface-3, hsl(210 14% 89%))">
          <rect width="1" height="1" />
          <rect x="1" y="1" width="1" height="1" />
        </g>
      </pattern>
    </defs>
    <rect fill="url(#offset-y-pattern)" width="20" height="14" />
    <g transform="translate(2.5 2.5)">
      <rect
        fill="var(--color-surface-1, hsl(210 17% 98%))"
        width="9"
        height="6.1"
      />
      <g
        stroke="var(--color-text-2, hsl(210 10% 23%))"
        stroke-width="0.04"
        marker-end="url(#offset-y-marker)"
      >
        <line x2="1.5" />
        <line y2="1.5" />
      </g>
      <circle fill="var(--color-text-2, hsl(210 10% 23%))" r="0.15" />
      <g
        fill="var(--color-text-2, hsl(210 10% 23%))"
        transform="translate(-0.6 0)"
        text-anchor="end"
        font-family="monospace"
        font-weight="700"
        font-size="0.75"
      >
        <text>0</text>
        <text y="6.1">6.1</text>
      </g>
      <g class="translate">
        <text
          fill="var(--color-text-1, hsl(210 11% 15%))"
          text-anchor="middle"
          font-family="monospace"
          font-weight="700"
          font-size="0.7"
          x="4.5"
          y="4">4.4</text
        >
        <circle
          fill="var(--color-text-1, hsl(210 11% 15%))"
          cx="4.5"
          cy="4.4"
          r="0.15"
        />
      </g>
      <g class="translate">
        <g transform="translate(0 4.4)">
          <path
            stroke-dasharray="0.15 0.3"
            fill="none"
            stroke="var(--color-text-2, hsl(210 10% 23%))"
            stroke-width="0.04"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M 0 0 4.5 0"
          />
          <text
            fill="var(--color-text-1, hsl(210 11% 15%))"
            font-family="monospace"
            text-anchor="end"
            font-weight="700"
            font-size="0.8"
            x="-0.6"
            y="0.2"
            ><tspan class="from">4.4</tspan><tspan
              class="to"
              fill-opacity="0"
              dx="-1.3">1.7</tspan
            ></text
          >
        </g>
      </g>
    </g>
  </svg>
</div>

<style>
  div {
    --color-text: hsl(210 11% 15%);
    --color-surface: hsl(210 17% 95%);

    max-inline-size: 36rem;
    margin-inline: auto;
    display: grid;
    grid-template-areas: "svg svg" "input label";
    gap: 1rem 0.25rem;
    padding: 2.5rem 4rem;
    color: var(--color-text);
    background: var(--color-surface);
    accent-color: currentColor;
  }

  div > svg {
    grid-area: svg;
    --color-surface-1: hsl(210 17% 98%);
    --color-surface-2: hsl(210 16% 93%);
    --color-surface-3: hsl(210 14% 89%);
    --color-text-1: hsl(210 11% 15%);
    --color-text-2: hsl(210 10% 23%);
  }

  div > input {
    justify-self: end;
    inline-size: 1em;
    block-size: 1em;
    align-self: center;
  }

  div > label {
    justify-self: start;
  }

  .translate {
    transition: transform 0.7s ease-in-out;
  }

  input:checked ~ svg .translate {
    transform: translate(0px, -1.7px);
  }

  .to,
  .from {
    transition: 0.2s 0.2s ease-in-out;
    transition-property: fill-opacity, visibility;
  }

  .to {
    fill-opacity: 0;
    visibility: hidden;
  }

  input:checked ~ svg .to {
    fill-opacity: 1;
    visibility: visible;
  }

  input:checked ~ svg .from {
    fill-opacity: 0;
    visibility: hidden;
  }
</style>
