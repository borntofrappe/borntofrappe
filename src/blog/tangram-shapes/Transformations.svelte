<script>
  /** @type {{ reverse: boolean,accentColor: string  }}*/
  let { reverse = false, accentColor = "gold" } = $props();

  const transformations = ["translate(1 1)", "rotate(-90)"];
  let operations = $state(
    reverse ? [...transformations].reverse() : transformations
  );
  let index = $state(0);
</script>

<div>
  <label>
    Drag the handle to apply the transformations.
    <input type="range" min="0" max={operations.length} bind:value={index} />
  </label>

  <p>
    <code
      >transform="<span style:border-block-end="0.2rem solid {accentColor}"
        >{operations.slice(0, index).join(" ")}</span
      >"</code
    >
  </p>

  <svg viewBox="-2 -2 8 8">
    <g transform="translate(1 1)">
      <path d="M 0 0 l 2 2 2 -2" fill="hsl(0, 78%, 68%)" />
    </g>
    <g transform={operations.slice(0, index).join(" ")}>
      <path d="M 0 0 l 2 2 -2 2" fill="hsl(51, 78%, 68%)" />
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

  label input {
    margin-block-start: 0.5rem;
    display: block;
    inline-size: 100%;
  }

  svg {
    display: block;
  }
</style>
