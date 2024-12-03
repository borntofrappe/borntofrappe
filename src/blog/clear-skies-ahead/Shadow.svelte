<script>
  let x = $state(0);
  let y = $state(-2);
</script>

<div>
  <p>Drag the handles to update the horizontal and vertical offset.</p>

  <fieldset>
    <label>
      x
      <input bind:value={x} type="range" min="-10" max="10" />
    </label>
    <label>
      y
      <input bind:value={y} type="range" min="-10" max="10" />
    </label>
  </fieldset>

  <svg viewBox="-25 -25 50 50">
    <defs>
      <circle id="shadow-c" r="11" />
      <mask id="shadow-mask">
        <use href="#shadow-c" fill="white" />
        <use href="#shadow-c" {x} {y} fill="black" />
      </mask>
    </defs>

    <g fill="currentColor">
      <use href="#shadow-c" mask="url(#shadow-mask)" />
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
