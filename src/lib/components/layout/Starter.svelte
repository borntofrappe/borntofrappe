<script>
	import ColorSchemeToggle from './ColorSchemeToggle.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div>
	<Navigation />
	<ColorSchemeToggle />
</div>

<style>
	div {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 0rem auto;
		padding: 0.5rem 0;
		display: flex;
		align-items: center;
	}

	div > :global(:last-child) {
		margin-left: auto;
		flex-shrink: 0;
	}
</style>
