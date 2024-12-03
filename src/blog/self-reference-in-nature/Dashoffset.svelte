<script>
  /** @type {{ offset: number }}*/
  let { offset = 0.1 } = $props();
</script>

<div>
  <label>
    <span>Drag the handle to update the offset.</span>
    <input type="range" min="0" max="1" step="0.05" bind:value={offset} />
  </label>

  <svg viewBox="-5 -25 90 40">
    <g fill="none" stroke="currentColor">
      <path opacity="0.2" d="M 0 0 h 80" />

      <g stroke-width="0.5" stroke-dasharray="0.75 1">
        <path d="M 0 0 v 4" />
        <path d="M 80 0 v 4" />
      </g>

      <path
        d="M 0 0 h 80"
        pathLength="1"
        stroke-dasharray="1"
        stroke-dashoffset={offset}
      />
    </g>

    <g
      transform="translate(0 5.5)"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.5"
      stroke-linejoin="round"
      stroke-linecap="round"
    >
      <path d="M 0 0 l -1 2 2 0z" />
      <path d="M 80 0 l -1 2 2 0z" />
    </g>

    <g fill="currentColor" font-family="monospace">
      <g font-size="4.5">
        <text y="-18">pathLength="1"</text>
        <text y="-11">stroke-dasharray="1"</text>
        <text y="-4"
          >stroke-dashoffset="<tspan font-weight="700">{offset}</tspan>"</text
        >
      </g>
      <g font-size="5" text-anchor="middle">
        <text y="12.5">0</text>
        <text x="80" y="12.5">1</text>
      </g>
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  label {
    display: block;
  }

  input {
    display: block;
    inline-size: 100%;
    margin-block-start: 0.5rem;
  }

  svg {
    display: block;
  }
</style>
