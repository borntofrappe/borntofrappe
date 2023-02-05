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

<article
	class="box centered"
	style:--color="hsl(203, 23%, 18%)"
	style:--background="hsl(218, 100%, 98%)"
>
	<div style:inline-size="90vmin" style:max-inline-size="52rem">
		<Puzzle {size} {moves} />
	</div>
</article>
