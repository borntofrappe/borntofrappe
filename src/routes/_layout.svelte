<script>
  import Navigation from '../components/Navigation.svelte';

  export let segment;
</script>
<style>
  main {
    max-width: 40em;
    width: 90vw;
    margin: 0 auto;
    padding: 1rem 0;
  }
</style>


<main>
  <Navigation {segment} />
  <slot></slot>
</main>
