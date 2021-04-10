<script>
	import '../app.css';

	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div>
	<Breadcrumb />
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