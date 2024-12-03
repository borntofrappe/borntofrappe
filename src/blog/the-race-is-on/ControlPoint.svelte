<script>
  /** @type {{ accentColor: string }}*/
  let { accentColor = "gold" } = $props();

  let cy = $state(-10);
</script>

<div>
  <label>
    Drag the handle to update the y coordinate of the control point.
    <input type="range" min="-12" max="12" step="1" bind:value={cy} />
  </label>

  <p>
    <code
      >d="M 0 0 Q 10 <span style:border-block-end="0.2rem solid {accentColor}"
        >{cy}</span
      > 20 0 T 40 0"</code
    >
  </p>

  <svg viewBox="-1 -14 42 28">
    <defs>
      <marker
        id="control-point-marker"
        viewBox="-1 -1 2 2"
        markerWidth="1"
        markerHeight="1"
        markerUnits="userSpaceOnUse"
      >
        <circle r="1" fill="currentColor" />
      </marker>
    </defs>

    <path
      stroke-linecap="round"
      stroke="gold"
      fill="none"
      d="M 0 0 Q 10 {cy} 20 0 T 40 0"
    />

    <g fill="currentColor">
      <g transform="translate(10 {cy})">
        <circle r="0.7" />
        <text
          x="1.5"
          y="0.5"
          font-weight="700"
          font-size="2"
          font-family="monospace">(10, {cy})</text
        >
      </g>
      <circle cx="30" cy={cy * -1} r="0.7" />
    </g>
    <g
      fill="none"
      stroke="currentColor"
      stroke-width="0.2"
      stroke-dasharray="0.5 1"
    >
      <path
        d="M 0 0 L 10 {cy} L 20 0 L 30 {cy * -1} L 40 0"
        marker-start="url(#control-point-marker)"
        marker-mid="url(#control-point-marker)"
        marker-end="url(#control-point-marker)"
      />
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  svg {
    display: block;
  }

  label {
    display: block;
  }

  label input {
    margin-block-start: 0.5rem;
    display: block;
    inline-size: 100%;
  }
</style>
