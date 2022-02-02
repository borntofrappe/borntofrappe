<script>
	import '../app.css';

	import SkipToContent from '$lib/components/layout/SkipToContent.svelte';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<SkipToContent />

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

	div > :global(footer) {
		margin-top: auto;
	}
</style>
