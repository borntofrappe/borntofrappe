<script>
  import { fade } from "svelte/transition";
  /** @type {{ number: number }}*/
  let { number } = $props();
</script>

<svg style="display: block;" viewBox="0 0 1 1">
  {#key number}
    <use in:fade href="#rune-{number}" />
  {/key}
</svg>

