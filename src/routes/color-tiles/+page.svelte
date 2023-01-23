<script>
	import Puzzle from './Puzzle.svelte';
</script>

<svelte:head>
	<title>Color tiles | borntofrappe</title>
	<meta name="description" content="Line tiles of the same color." />
</svelte:head>

<header class="visually-hidden">
	<h1>Color tiles</h1>
	<p>Line tiles of the same color.</p>
</header>

<article>
	<div>
		<Puzzle size={6} />
	</div>
</article>

<style>
	article {
		color: hsl(200, 47%, 96%);
		background: hsl(203, 23%, 18%);
		min-height: 100vh;
		display: flex;
	}

	article div {
		margin: auto;
		width: 90vmin;
		max-width: 52rem;
	}
</style>
