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

  div > :global(*:nth-last-child(2)) {
    margin-bottom: 5rem;
  }

  div > :global(footer) {
    margin-top: auto;
  }
</style>
