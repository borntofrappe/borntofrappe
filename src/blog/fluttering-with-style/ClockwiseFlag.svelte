<script>
  /** @type {{ accentColor: string }} */
  let { accentColor = "gold" } = $props();
  let clockwise = $state(false);
</script>

<div>
  <label>
    <input type="checkbox" bind:checked={clockwise} />
    <span>Toggle clockwise flag</span>
  </label>

  <p>
    <code
      >d="... a 20 20 0 0
      <span style:border-block-end="0.2rem solid {accentColor}"
        >{clockwise ? 1 : 0}</span
      >
      -40 0"
    </code>
  </p>

  <svg viewBox="-35 -35 70 70">
    <g fill="currentColor">
      <path
        d="M -20 0 c -18 24 58 24 40 0 a 20 20 0 0 {clockwise ? 1 : 0} -40 0"
      />
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
    inline-size: 1em;
    block-size: 1em;
  }

  svg {
    display: block;
  }
</style>
