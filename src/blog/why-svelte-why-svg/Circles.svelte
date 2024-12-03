<script>
  /** @type {{ size: number, offset: number }}*/
  let { size = 5, offset = 0 } = $props();

  let max = $derived((size - 1) * 2 + 1);

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

            return {
              row,
              column,
              color,
            };
          })
      )
      .flat()
  );
</script>

<svg viewBox="{offset * -1} {offset * -1} {size} {size}">
  {#each grid as { row, column, color }}
    <g transform="translate({column} {row})">
      <circle fill={color} r="0.45" />
    </g>
  {/each}
</svg>

<style>
  svg {
    display: block;
  }
</style>
