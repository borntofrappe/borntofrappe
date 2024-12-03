<script>
  /** @type {{ size: number }}*/
  let { size = 5 } = $props();

  let grid = $derived(
    Array(size)
      .fill("")
      .map((_, row) =>
        Array(size)
          .fill("")
          .map((_, column) => {
            return {
              row,
              column,
            };
          })
      )
      .flat()
  );
</script>

<svg viewBox="0 0 {size} {size}">
  {#each grid as { row, column }}
    <g transform="translate({column} {row})">
      <rect width="1" height="1" />
    </g>
  {/each}
</svg>

<style>
  svg {
    display: block;
  }
</style>
