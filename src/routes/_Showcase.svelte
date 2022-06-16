<script>
	import RainbowSixteen from './games/rainbow-sixteen/_Puzzle.svelte';
	import ColorTiles from './games/color-tiles/_Puzzle.svelte';
</script>

<article>
	<RainbowSixteen />
</article>

<article style="--color: #f1f7fa; --background: #233038">
	<ColorTiles />
</article>

<style>
	article {
		--color: #243139;
		--background: #f7faff;
		color: #243139;
		color: var(--color, #243139);
		background: #f7faff;
		background: var(--background, #f7faff);
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	article > :global(svg) {
		display: block;
		width: 100vmin;
		max-width: 20rem;
	}

	article:nth-of-type(2) > :global(svg) {
		max-width: 32rem;
	}
</style>
