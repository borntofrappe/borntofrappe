<script>
  let value = $state(0);
  const width = 8;
  const min = -4;
  const max = 4;

  const coordinates = Array(width + max + Math.abs(min) + 1)
    .fill("")
    .map((_, i) => i + min);
  const ticks = Array((width + max + Math.abs(min)) * 10)
    .fill("")
    .map((_, i) => i / 10 + min);
</script>

<div>
  <label>
    Start from <output for="origin">{value}</output>
    <input id="origin" type="range" list="markers" bind:value {min} {max} />
  </label>

  <svg
    style="display: block; outline: 1px solid transparent;"
    viewBox="{value - 0.3} -0.365 {width + 0.6} 2"
  >
    <path
      transform="translate({value} 0)"
      fill="none"
      stroke="currentColor"
      stroke-width="0.03"
      d="M 0 -0.175 0 -0.35 {width} -0.35 {width} -0.175"
    />
    <g fill="none" stroke="currentColor" stroke-width="0.008">
      {#each ticks as i}
        <path d="M {i} 0 V 0.3" />
      {/each}
    </g>

    <g fill="none" stroke="currentColor" stroke-width="0.02">
      {#each coordinates as i}
        <path d="M {i} 0 V 0.5" />
      {/each}
      <path
        d="M {min - 0.29} 0 {max + width + 0.29} 0 {max +
          width +
          0.29} 1.55 {min - 0.29} 1.55 Z"
      />
    </g>

    <g
      fill="currentColor"
      font-family="monospace"
      font-size="0.3"
      text-anchor="middle"
    >
      {#each coordinates as i}
        <text x={i} y="1.4">{i}</text>
      {/each}
    </g>
    <circle fill="currentColor" r="0.07" />
  </svg>

  <datalist id="markers">
    {#each { length: Math.abs(min) + max + 1 } as _, i}
      <option value={i + min}></option>
    {/each}
  </datalist>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  label {
    display: block;
  }

  label > input {
    margin-block-start: 0.5rem;
    display: block;
    inline-size: 100%;
  }
</style>
