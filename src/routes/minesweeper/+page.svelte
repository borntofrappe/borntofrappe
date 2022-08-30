<script>
	import Puzzle from '$lib/components/minesweeper/Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Minesweeper</title>
	<meta name="description" content="Play a nostalgia-filled version of a classic puzzle game." />
	<link rel="icon" href="/icons/minesweeper.svg" type="image/svg+xml" />
</svelte:head>

<article>
	<Puzzle />
</article>

<style>
	article {
		color: hsl(0, 0%, 2%);
		background: hsl(0, 0%, 75%);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	article > :global(svg) {
		display: block;
		width: 90vmin;
		max-width: 36rem;
	}
</style>
