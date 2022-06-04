<script>
	import Puzzle from './rainbow-sliding-puzzle/_Puzzle.svelte';
</script>

<article>
	<Puzzle moves={20} />
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
