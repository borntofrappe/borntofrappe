<script>
	import site from '$lib/utils/site.js';
	const { title } = site;

	import Puzzle from './Puzzle.svelte';

	const size = 5;
	const moves = 100;
</script>

<svelte:head>
	<title>Rainbow sixteen | {title}</title>
	<meta name="description" content="Slide the tiles to complete the colors of the rainbow." />
	<link rel="icon" href="/icons/rainbow-sixteen.svg" type="image/svg+xml" />
</svelte:head>

<header class="visually-hidden">
	<h1>Rainbow sixteen</h1>
	<p>Slide the tiles to complete the colors of the rainbow.</p>
</header>

<main
	class="box centered"
	style:--color="hsl(209, 61%, 16%)"
	style:--background="hsl(210, 42%, 96%)"
	style:--selection-color="hsl(211, 39%, 23%)"
	style:--selection-background="hsl(210, 31%, 80%)"
>
	<div style:inline-size="90vmin" style:max-inline-size="52rem">
		<Puzzle {size} {moves} />
	</div>
</main>
