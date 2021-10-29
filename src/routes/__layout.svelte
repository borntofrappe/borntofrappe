<script>
	import '../app.css';

	import Starter from '$lib/components/layout/Starter.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
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
