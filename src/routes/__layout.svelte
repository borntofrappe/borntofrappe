<script>
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '../app.css';
</script>

<div>
  <Breadcrumbs />

  <slot />

  <Footer />
</div>

<style>
  div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  div :global(nav),
  div :global(main) {
    max-width: 700px;
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }

  div :global(footer) {
    margin-top: auto;
  }
</style>
