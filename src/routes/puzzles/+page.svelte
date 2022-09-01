<script>
	import TextTile from '$lib/components/puzzles/TextTile.svelte';
	import Sixteen from '$lib/components/puzzles/sixteen/Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Puzzles</title>
	<meta
		name="description"
		content="Enjoy a few interactive, infinitely replayable, inconsistently merciful puzzles."
	/>
	<link rel="icon" href="/icons/puzzles.svg" type="image/svg+xml" />
</svelte:head>

<div>
	<header>
		<TextTile element="h1" text="Sixteen" />
	</header>

	<Sixteen />
</div>

<style>
	div {
		color: hsl(238, 78%, 13%);
		background: hsl(8, 83%, 54%);
		font-family: Source Code Pro, Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
			monospace;
	}

	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	header {
		max-width: 52rem;
	}
</style>
