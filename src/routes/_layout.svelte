<script>
  import Navigation from '../components/Navigation.svelte';

  export let segment;
</script>

<Navigation {segment} />
<slot></slot>
