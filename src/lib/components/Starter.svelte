<script>
  import BreadcrumbNavigation from '$lib/components/BreadcrumbNavigation.svelte';
  import ColorSchemeToggle from '$lib/components/ColorSchemeToggle.svelte';
</script>

<div class="max-width-container">
  <BreadcrumbNavigation />
  <ColorSchemeToggle />
</div>

<style>
  div {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
  }

  div > :global(*:last-child) {
    margin-left: auto;
    flex-shrink: 0;
  }
</style>
