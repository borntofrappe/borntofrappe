<script>
	import site from '$lib/utils/site.js';
	const { title } = site;

	import Puzzle from './Puzzle.svelte';
</script>

<svelte:head>
	<title>Minesweeper | {title}</title>
	<meta name="description" content="Play a nostalgia-filled version of a classic puzzle game." />
	<link rel="icon" href="/icons/minesweeper.svg" type="image/svg+xml" />
</svelte:head>

<header class="visually-hidden">
	<h1>Minesweeper</h1>
	<p>Play a nostalgia-filled version of a classic puzzle game.</p>
</header>

<article>
	<div>
		<Puzzle columns={20} rows={12} mines={20} />
	</div>
</article>

<style>
	article {
		color: hsl(0, 0%, 2%);
		background: hsl(0, 0%, 75%);
		min-height: 100vh;
		display: flex;
	}

	article div {
		margin: auto;
		width: 90vmin;
		max-width: 52rem;
	}
</style>
