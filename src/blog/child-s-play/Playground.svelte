<script>
  import SeeSaw from "./SeeSaw.svelte";
  import SwingSet from "./SwingSet.svelte";
</script>

<div>
  <SeeSaw />
  <SwingSet />
</div>

<style>
  div {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 1rem;
  }

  div > :global(canvas) {
    margin-inline: auto;
  }
</style>
