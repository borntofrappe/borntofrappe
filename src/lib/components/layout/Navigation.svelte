<script>
	import icons from '$lib/icons';
</script>

<nav>
	<a href="/">borntofrappe {@html icons.rocket}</a>
</nav>

<style>
	nav {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 0rem auto;
		padding: 0.5rem 0;
	}

	:global(.webfonts) a {
		font-family: JosefinsansBold, sans-serif;
		font-weight: 700;
	}

	a {
		text-decoration: none;
		font-weight: 600;
		padding: 0.25em 0;
		display: flex;
		align-items: center;
		gap: 0 0.3em;
	}

	a > :global(svg) {
		width: 1.5em;
		height: auto;
	}
</style>
