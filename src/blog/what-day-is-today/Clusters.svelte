<script>
  const marks = [
    [0, 1, 2, 3, 4],
    [0, 1],
  ];
</script>

<svg viewBox="0 0 {5 * marks.length} 5">
  <defs>
    <path id="clusters-mark-0" d="M 1 1 v 3" />
    <path id="clusters-mark-1" d="M 2 1 v 3" />
    <path id="clusters-mark-2" d="M 3 1 v 3" />
    <path id="clusters-mark-3" d="M 4 1 v 3" />
    <path id="clusters-mark-4" d="M 0.5 3.4 l 4 -1.8" />
  </defs>
  <g stroke="currentColor" stroke-width="0.5">
    {#each marks as cluster, i}
      <g transform="translate({5 * i} 0)">
        {#each cluster as number}
          <use href="#clusters-mark-{number}" />
        {/each}
      </g>
    {/each}
  </g>
</svg>

<style>
  svg {
    display: block;
  }
</style>
