<script>
  let time = $state(0);
  let scale = $derived(1 + time);
  let transformScale = $derived(1 - time / 2);
  let size = $derived(scale * transformScale);
</script>

<div>
  <label>
    <span>Time: <output>{time.toFixed(2)}</output></span>
    <input type="range" min="0" max="1" step="0.05" bind:value={time} />
  </label>

  <svg style="display: block;" viewBox="-0.2 -0.2 2.75 2.5">
    <g fill="none" stroke="currentColor">
      <path stroke-width="0.02" d="M 0 0 0 2 2 2" />
      <path
        stroke-width="0.005"
        opacity="0.3"
        d="M 0 0 2 0 M 0 0.5 2 0.5 M 0 1 2 1 M 0 1.5 2 1.5 M 0.5 0 0.5 2 M 1 0 1 2 M 1.5 0 1.5 2 M 2 0 2 2"
      />
    </g>
    <g
      fill="currentColor"
      font-size="0.11"
      font-family="monospace"
      style="text-transform: uppercase;"
    >
      <text x="0.125" y="2.15">Time</text>
      <text x="-0.125" y="2.15">0</text>
      <text x="2" y="2.15">1</text>
      <text transform="translate(-0.075 1.875) rotate(-90)">Size</text>
      <text transform="translate(-0.125 1.03)">1</text>
      <text transform="translate(-0.125 0.03)">2</text>
      <text
        font-size="0.125"
        font-weight="700"
        transform="translate(2.1 1.035)"
        y={1 - size}
      >
        {size.toFixed(3)}
      </text>
    </g>

    <g transform="translate(0 2) scale(1 -1)">
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="0.01"
        d="M {time * 2} {size} H 2"
      />
      <g transform="translate({time * 2} 0)">
        <circle fill="currentColor" opacity="0.2" cy="1" r="0.05" />
        <g fill="none" stroke="currentColor" stroke-width="0.01">
          <circle cy={scale} r="0.04" />
          <circle cy={transformScale} r="0.04" />
        </g>
        <circle fill="currentColor" cy={size} r="0.05" />
      </g>
    </g>
  </svg>
</div>

<style>
  div {
    max-inline-size: 26rem;
    padding: 1rem;
    margin-inline: auto;
  }

  div > * + * {
    margin-block-start: 0.5rem;
  }

  label {
    display: block;
    max-inline-size: 16rem;
    margin-inline: auto;
  }

  label > span {
    display: flex;
    gap: 0.5rem;
  }

  label > span > output {
    margin-inline-start: auto;
  }

  label > input {
    margin-block-start: 0.5rem;
  }

  output {
    font-weight: 700;
  }

  input {
    display: block;
    inline-size: 100%;
    color: inherit;
    accent-color: currentColor;
  }
</style>
