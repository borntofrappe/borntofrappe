<script>
	import '../app.css';

	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div>
  <Navigation />
  <slot />
  <Footer />
</div>


<style>
	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	div :global(footer) {
		margin-top: auto;
	}
</style>