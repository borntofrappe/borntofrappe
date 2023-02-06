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

<main
	class="box centered"
	style:--color="hsl(0, 0%, 2%)"
	style:--background="hsl(0, 0%, 75%)"
	style:--selection-color="hsl(0, 0%, 2%)"
	style:--selection-background="hsl(0, 0%, 81%)"
>
	<div style:inline-size="90vmin" style:max-inline-size="52rem">
		<Puzzle columns={20} rows={12} mines={20} />
	</div>
</main>
