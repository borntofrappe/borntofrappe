<script>
  const start = [5, 25];
  const end = [45, 25];

  let control = $state([25, 5]);

  let { accentColor = "gold" } = $props();
</script>

<div>
  <p>Drag the handles to update the coordinates of the control point.</p>

  <fieldset>
    <label>
      x
      <input type="range" min="5" max="45" bind:value={control[0]} step="1" />
    </label>
    <label>
      y
      <input type="range" min="5" max="45" bind:value={control[1]} step="1" />
    </label>
  </fieldset>

  <p>
    <code
      >d="M {start[0]}
      {start[1]}
      <span style:border-block-end="0.2rem solid {accentColor}"
        >Q {control[0]} {control[1]}</span
      >
      {end[0]}
      {end[1]}"</code
    >
  </p>

  <svg viewBox="0 0 50 50">
    <g fill="none" stroke="currentColor">
      <g stroke-dasharray="1" stroke-width="0.25">
        <path d="M {start[0]} {start[1]} {control[0]} {control[1]}" />
        <path d="M {end[0]} {end[1]} {control[0]} {control[1]}" />
      </g>
      <path
        stroke-width="0.5"
        d="M {start[0]} {start[1]} Q {control[0]} {control[1]} {end[0]} {end[1]}"
      />
    </g>

    <g fill="currentColor">
      <circle r="1" cx={start[0]} cy={start[1]} />
      <circle r="1" cx={end[0]} cy={end[1]} />
    </g>

    <g fill={accentColor}>
      <circle r="1" cx={control[0]} cy={control[1]} />
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  fieldset > * {
    flex-grow: 1;
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
