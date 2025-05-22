<script>
  /** @type {{ number: number }}*/
  let { number } = $props();
</script>

<svg style="display: block;" viewBox="0 0 1 1">
  {#key number}
    <use href="#rune-{number}" />
  {/key}
</svg>

<style>
  use {
    @media (prefers-reduced-motion: no-preference) {
      transition: opacity 0.5s ease-out;
      @starting-style {
        opacity: 0;
      }
    }
  }
</style>
