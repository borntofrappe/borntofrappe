<script>
	import Puzzle from './_Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Color Tiles</title>
	<meta name="description" content="Line up to four tiles of the same color." />
	<link rel="icon" href="/icons/showcase/color-tiles.svg" type="image/svg+xml" />
</svelte:head>

<article>
	<Puzzle size={6} />
</article>

<style>
	article {
		color: #f1f7fa;
		background: #233038;
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	article > :global(svg) {
		display: block;
		width: 100vmin;
		max-width: 52rem;
		height: auto;
	}
</style>
