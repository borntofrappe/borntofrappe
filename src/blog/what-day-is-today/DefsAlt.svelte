<script>
  const marks = [0, 1, 2];
</script>

<svg viewBox="0 0 5 5">
  <defs>
    <path id="defs-alt-mark-0" d="M 1 1 v 3" />
    <path id="defs-alt-mark-1" d="M 2 1 v 3" />
    <path id="defs-alt-mark-2" d="M 3 1 v 3" />
    <path id="defs-alt-mark-3" d="M 4 1 v 3" />
    <path id="defs-alt-mark-4" d="M 0.5 3.4 l 4 -1.8" />
  </defs>
  <g stroke="currentColor" stroke-width="0.5">
    {#each marks as number}
      <use href="#defs-alt-mark-{number}" />
    {/each}
  </g>
</svg>

<style>
  svg {
    display: block;
  }
</style>
