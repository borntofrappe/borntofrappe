<script>
	import Puzzle from './Puzzle.svelte';
</script>

<svelte:head>
	<title>Color tiles | borntofrappe</title>
	<meta
		name="description"
		content="Compete to place your tiles in a colorful line. To each player its turn!"
	/>
	<link rel="icon" href="/icons/color-tiles.svg" type="image/svg+xml" />
</svelte:head>

<header class="visually-hidden">
	<h1>Color tiles</h1>
	<p>Compete to place your tiles in a colorful line. To each player its turn!</p>
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
