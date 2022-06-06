<script>
	import Puzzle from './_Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Coroplets</title>
	<meta name="description" content="Line up tiles of the same color." />
	<link rel="icon" href="/icons/coroplets.svg" type="image/svg+xml" />
</svelte:head>

<article>
	<Puzzle />
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
