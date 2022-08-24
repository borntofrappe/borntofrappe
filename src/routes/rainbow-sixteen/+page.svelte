<script>
	import Puzzle from '$lib/components/rainbow-sixteen/Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Rainbow Sixteen</title>
	<meta name="description" content="Slide tiles to complete the colors of the rainbow." />
	<link rel="icon" href="/icons/rainbow-sixteen.svg" type="image/svg+xml" />
</svelte:head>

<article>
	<Puzzle size={6} />
</article>

<style>
	article {
		color: hsl(203, 23%, 18%);
		background: hsl(218, 100%, 98%);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	article > :global(svg) {
		display: block;
		width: 90vmin;
		max-width: 52rem;
	}
</style>
