<script>
  /** @type {{ size: number, updateSize: Function }}*/
  let { size = 5, updateSize } = $props();

  let grid = $derived(
    Array(size)
      .fill("")
      .map((_, row) =>
        Array(size)
          .fill("")
          .map((_, column) => {
            const sum = row + column;

            const hue = (sum / ((size - 1) * 2 + 1)) * 360;
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

<div>
  <label>
    Drag the handle to resize grid.
    <input
      type="range"
      min={2}
      max={15}
      value={size}
      oninput={function () {
        updateSize(parseInt(this.value));
      }}
    />
  </label>

  <svg viewBox="0 0 {size} {size}">
    {#each grid as { row, column, color }}
      <g transform="translate({column} {row})">
        <rect fill={color} width="1" height="1" />
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

  label input {
    margin-block-start: 0.5rem;
    display: block;
    inline-size: 100%;
  }

  svg {
    display: block;
  }
</style>
