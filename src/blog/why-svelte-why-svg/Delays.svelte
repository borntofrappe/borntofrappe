<script>
  /** @type {{ size: number }}*/
  let { size = 7 } = $props();

  let max = $derived((size - 1) * 2 + 1);

  const duration = 2;

  let grid = $derived(
    Array(size)
      .fill("")
      .map((_, row) =>
        Array(size)
          .fill("")
          .map((_, column) => {
            const sum = row + column;

            const hue = (sum / max) * 360;
            const color = `hsl(${hue}, 78%, 68%)`;

            const delay = (sum / max) * duration;

            return {
              row,
              column,
              color,
              delay,
            };
          })
      )
      .flat()
  );

  let scale = $state(false);
</script>

<div>
  <label>
    <input type="checkbox" bind:checked={scale} />
    Toggle animation
  </label>

  <svg viewBox="-0.5 -0.5 {size} {size}">
    {#each grid as { row, column, color, delay }}
      <g transform="translate({column} {row})">
        <circle
          style:animation-duration="{duration}s"
          style:animation-delay="{delay}s"
          class:scale
          fill={color}
          r="0.45"
        />
      </g>
    {/each}
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

  circle {
    animation: scale 1s ease-in-out infinite;
    animation-play-state: paused;
  }

  circle.scale {
    animation-play-state: running;
  }

  @keyframes scale {
    50% {
      transform: scale(0.5);
    }
  }
</style>
