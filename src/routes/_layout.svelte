<script>
  import Navigation from '../components/Navigation.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>



<Navigation {segment} />
<slot></slot>
<Footer />