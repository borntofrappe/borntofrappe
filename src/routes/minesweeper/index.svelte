<script>
	import Puzzle from './_Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Minesweeper</title>
	<meta name="description" content="Play a nostalgia-filled version of a classic puzzle game." />
	<link rel="icon" href="/icons/minesweeper.svg" type="image/svg+xml" />
</svelte:head>

<article>
	<Puzzle columns={20} rows={12} mines={20} />
</article>

<style>
	article {
		color: #040404;
		background: #c0c0c0;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	article > :global(svg) {
		display: block;
		width: 95vmin;
		max-width: 52rem;
	}
</style>
