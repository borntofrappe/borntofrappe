<script>
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import ColorSchemeToggle from '$lib/ColorSchemeToggle.svelte';
</script>

<div>
	<Breadcrumb />
	<ColorSchemeToggle />
</div>

<style>
	div {
		max-width: 40rem;
		width: 90vw;
		margin: 0 auto;
		padding: 0.5rem 0;
		display: flex;
		align-items: center;
	}

	div > :global(*:last-child) {
		margin-left: auto;
		flex-shrink: 0;
	}
</style>
