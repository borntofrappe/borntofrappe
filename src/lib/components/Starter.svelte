<script>
	import BreadcrumbNavigation from '$lib/components/BreadcrumbNavigation.svelte';
	import ColorSchemeToggle from '$lib/components/ColorSchemeToggle.svelte';
</script>

<div>
	<BreadcrumbNavigation />
	<ColorSchemeToggle />
</div>

<style>
	div {
		width: 95vw;
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
