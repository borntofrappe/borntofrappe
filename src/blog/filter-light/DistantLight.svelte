<script>
  const distance = 40;

  let azimuth = $state(0);
  let elevation = $state(20);

  let x = $derived(
    distance *
      Math.cos((azimuth / 180) * Math.PI) *
      Math.cos((elevation / 180) * Math.PI)
  );
  let y = $derived(
    distance *
      Math.sin((azimuth / 180) * Math.PI) *
      Math.cos((elevation / 180) * Math.PI)
  );
  let z = $derived(distance * Math.sin((elevation / 180) * Math.PI));
</script>

<div>
  <fieldset>
    <legend>feDiffuseLight</legend>
    <p>Update the position of the light source</p>
    <label>
      <span>azimuth: <output>{azimuth}</output></span>
      <input type="range" min="0" max="360" bind:value={azimuth} />
    </label>
    <label>
      <span>elevation: <output>{elevation}</output></span>
      <input type="range" min="0" max="180" bind:value={elevation} />
    </label>
  </fieldset>

  <svg style="display: block;" viewBox="-7 -7 204 94">
    <title>Light source based on azimuth and elevation</title>
    <rect fill="hsl(279 34% 63%)" width="80" height="80" rx="10" />
    <g transform="translate(40 40)">
      <circle fill="hsl(48 96% 66%)" transform="translate({x} {y})" r="7" />
    </g>
    <g transform="translate(110 80)">
      <rect fill="hsl(279 34% 63%)" width="80" y="-1" height="2" />
      <g transform="translate(40 0)">
        <circle
          fill="hsl(48 96% 66%)"
          transform="scale(1 -1) translate({x} {z})"
          r="7"
        />
      </g>
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  svg {
    display: block;
    max-inline-size: 26rem;
    margin-inline: auto;
  }

  fieldset {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0rem 0.5rem;
    border: none;
  }

  fieldset > p {
    flex-basis: 100%;
  }

  fieldset > label {
    flex-basis: 10rem;
    flex-grow: 1;
  }

  legend {
    visibility: hidden;
    block-size: 0;
  }

  label > span,
  label > input {
    display: block;
  }

  label > * + * {
    margin-block-start: 0.5rem;
  }

  span {
    font-family: monospace;
    font-size: 1rem;
  }

  span > output {
    font-weight: 700;
  }

  input {
    inline-size: 100%;
  }
</style>
