<script>
	import Puzzle from '$lib/components/color-tiles/Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Color Tiles</title>
	<meta name="description" content="Line tiles of the same color." />
	<link rel="icon" href="/icons/color-tiles.svg" type="image/svg+xml" />
</svelte:head>

<article>
	<Puzzle size={6} />
</article>

<style>
	article {
		color: hsl(200, 47%, 96%);
		background: hsl(203, 23%, 18%);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	article > :global(svg) {
		display: block;
		width: 100vmin;
		max-width: 52rem;
		height: auto;
	}
</style>
