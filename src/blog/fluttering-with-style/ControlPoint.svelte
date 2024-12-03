<script>
  /** @type {{ accentColor: string }} */
  let { accentColor = "gold" } = $props();

  let cx = $state(20);
  let cy = $state(24);
</script>

<div>
  <p>Drag the handles to move the control point.</p>

  <fieldset>
    <label>
      x
      <input type="range" min="-10" max="50" bind:value={cx} step="1" />
    </label>
    <label>
      y
      <input type="range" min="0" max="30" bind:value={cy} step="1" />
    </label>
  </fieldset>

  <p>
    <code
      >d="M x0 y0
      <span style:border-block-end="0.2rem solid {accentColor}"
        >q {cx} {cy}</span
      >
      x1 x2"
    </code>
  </p>

  <svg viewBox="-12 -2 64 34">
    <g fill="none" stroke="currentColor">
      <g stroke-dasharray="1" stroke-width="0.25">
        <path d="M 0 0 {cx} {cy}" />
        <path d="M 40 0 {cx} {cy}" />
      </g>
      <path stroke-width="0.5" d="M 0 0 q {cx} {cy} 40 0" />
    </g>

    <g fill="currentColor">
      <circle r="1" />
      <circle r="1" cx="40" />
    </g>

    <g fill={accentColor}>
      <circle r="1" {cx} {cy} />
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  fieldset {
    padding: 0;
    margin: 0;
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  fieldset > * {
    flex-grow: 1;
  }

  fieldset {
    border-radius: 0.25rem;
    border: 0.15rem solid currentColor;
    padding: 0.5rem 1rem;
  }

  label input {
    margin-block-start: 0.5rem;
    display: block;
    inline-size: 100%;
  }

  svg {
    display: block;
  }
</style>
