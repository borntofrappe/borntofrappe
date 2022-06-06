<script>
	import RainbowSlidingPuzzle from './rainbow-sliding-puzzle/_Puzzle.svelte';
	import Coroplets from './coroplets/_Puzzle.svelte';
</script>

<article>
	<RainbowSlidingPuzzle moves={25} />
</article>

<article style="--color: #f1f7fa; --background: #233038">
	<Coroplets />
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
