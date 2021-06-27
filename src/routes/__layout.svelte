<script>
  import Introduction from '$lib/components/Introduction.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '../app.css';
</script>

<div>
  <Introduction />

  <slot />

  <Footer />
</div>

<style>
  div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  div > :global(div),
  div > :global(main) {
    max-width: 42rem;
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }

  div > :global(footer) {
    margin-top: auto;
  }
</style>
