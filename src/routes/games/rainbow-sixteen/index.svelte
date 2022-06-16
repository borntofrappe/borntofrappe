<script>
	import Puzzle from './_Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Rainbow Sliding Puzzle</title>
	<meta name="description" content="Slide tiles to complete the colors of the rainbow." />
	<link rel="icon" href="/icons/games/rainbow-sixteen.svg" type="image/svg+xml" />
</svelte:head>

<article>
	<Puzzle />
</article>

<style>
	article {
		color: #243139;
		background: #f7faff;
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	article > :global(svg) {
		display: block;
		width: 100vmin;
		max-width: 20rem;
	}
</style>
