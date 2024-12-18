<div>
  <input id="offset-x" type="checkbox" />
  <label for="offset-x">Offset shape</label>

  <svg style="display: block;" viewBox="0 0 14 11.1">
    <defs>
      <rect id="offset-x-view-box" width="9" height="6.1" />
      <clipPath id="offset-x-clip">
        <use href="#offset-x-view-box" />
      </clipPath>
      <pattern
        id="offset-x-pattern"
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
    <rect fill="url(#offset-x-pattern)" width="20" height="14" />
    <g transform="translate(2.5 2.5)">
      <g clip-path="url(#offset-x-clip)">
        <use
          fill="var(--color-surface-1, hsl(210 17% 98%))"
          href="#offset-x-view-box"
        />
        <circle
          class="translate"
          fill="var(--color-text-1, hsl(210 11% 15%))"
          cx="0"
          cy="2.2"
          r="0.15"
        />
      </g>
      <g class="translate">
        <g transform="translate(0 2.2)">
          <path
            stroke-dasharray="0.15 0.3"
            fill="none"
            stroke="var(--color-text-2, hsl(210 10% 23%))"
            stroke-width="0.04"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M 0 0 0 3.9"
          />
          <text
            fill="var(--color-text-1, hsl(210 11% 15%))"
            text-anchor="middle"
            font-family="monospace"
            font-weight="700"
            font-size="0.7"
            y="4.6"
            ><tspan>(<tspan class="from">0</tspan></tspan><tspan
              class="to"
              fill-opacity="0"
              dx="-0.5">.5</tspan
            ><tspan>, 2.2)</tspan></text
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
    transform: translate(0.5px, 0px);
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
