<script>
  import SkipToContent from '$lib/components/SkipToContent.svelte';
  import Starter from '$lib/components/Starter.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '../app.css';
</script>

<div>
  <SkipToContent />
  <Starter />

  <slot />

  <Footer />
</div>

<style>
  div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  div > :global(footer) {
    margin-top: auto;
  }
</style>
