<script>
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import ColorSchemeToggle from '$lib/components/ColorSchemeToggle.svelte';
</script>

<div>
  <Breadcrumbs />
  <ColorSchemeToggle />
</div>

<style>
  div {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
  }

  div > :global(button) {
    margin-left: auto;
    flex-shrink: 0;
  }
</style>
