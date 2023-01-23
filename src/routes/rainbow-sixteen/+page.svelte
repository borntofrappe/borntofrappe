<script>
	import Puzzle from './Puzzle.svelte';

	const size = 5;
	const moves = 100;
</script>

<svelte:head>
	<title>Rainbow sixteen | borntofrappe</title>
	<meta name="description" content="Slide the tiles to complete the colors of the rainbow." />
</svelte:head>

<header class="visually-hidden">
	<h1>Rainbow sixteen</h1>
	<p>Slide the tiles to complete the colors of the rainbow</p>
</header>

<article>
	<div>
		<Puzzle {size} {moves} />
	</div>
</article>

<style>
	article {
		color: hsl(203, 23%, 18%);
		background: hsl(218, 100%, 98%);
		min-height: 100vh;
		display: flex;
	}

	article div {
		margin: auto;
		width: 90vmin;
		max-width: 52rem;
	}
</style>
