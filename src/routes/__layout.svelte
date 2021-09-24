<script>
	import Starter from '$lib/components/Starter.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';
</script>

<div>
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

	div :global(footer) {
		margin-top: auto;
	}
</style>
