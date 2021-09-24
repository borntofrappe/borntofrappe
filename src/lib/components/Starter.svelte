<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ColorSchemeToggle from '$lib/components/ColorSchemeToggle.svelte';
</script>

<div>
	<Breadcrumbs />
	<ColorSchemeToggle />
</div>

<style>
	div {
		width: 90vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0.5rem 0;
		display: flex;
		align-items: center;
	}

	div > :global(:last-child) {
		margin-left: auto;
		flex-shrink: 0;
	}
</style>
