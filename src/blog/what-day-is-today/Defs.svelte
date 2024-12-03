<svg viewBox="0 0 5 5">
  <defs>
    <path id="defs-mark-0" d="M 1 1 v 3" />
    <path id="defs-mark-1" d="M 2 1 v 3" />
    <path id="defs-mark-2" d="M 3 1 v 3" />
    <path id="defs-mark-3" d="M 4 1 v 3" />
    <path id="defs-mark-4" d="M 0.5 3.4 l 4 -1.8" />
  </defs>
  <g stroke="currentColor" stroke-width="0.5">
    {#each Array(3) as _, i}
      <use href="#defs-mark-{i}" />
    {/each}
  </g>
</svg>

<style>
  svg {
    display: block;
  }
</style>
