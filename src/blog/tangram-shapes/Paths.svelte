<script>
  /** @type {{ viewBox: string, ds: Array<string> }}*/
  let {
    viewBox = "0 0 1 1",
    ds = [
      "M 0.5 0.5 0.4 0.4 0.5 0.1 0.6 0.4",
      "M 0.5 0.5 0.6 0.4 0.9 0.5 0.6 0.6",
      "M 0.5 0.5 0.6 0.6 0.5 0.9 0.4 0.6",
      "M 0.5 0.5 0.4 0.6 0.1 0.5 0.4 0.4",
    ],
  } = $props();
</script>

<svg {viewBox}>
  <g fill="currentColor">
    {#each ds as d}
      <path {d} />
    {/each}
  </g>
</svg>

<style>
  svg {
    display: block;
  }

  path:hover {
    filter: brightness(2);
  }
</style>
