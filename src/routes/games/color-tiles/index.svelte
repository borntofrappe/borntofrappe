<script>
	import Puzzle from './_Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Color Tiles</title>
	<meta name="description" content="Line up to four tiles of the same color." />
	<link rel="icon" href="/icons/games/color-tiles.svg" type="image/svg+xml" />
</svelte:head>

<article>
	<Puzzle size={5} />
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
		max-width: 28rem;
		height: auto;
	}
</style>
