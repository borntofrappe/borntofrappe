<script>
	import site from '$lib/utils/site.js';
	const { title } = site;

	import Puzzle from './Puzzle.svelte';
</script>

<svelte:head>
	<title>Color tiles | {title}</title>
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

<article
	class="box centered"
	style:--color="hsl(200, 47%, 96%)"
	style:--background="hsl(203, 23%, 18%)"
>
	<div style:inline-size="90vmin" style:max-inline-size="52rem">
		<Puzzle size={6} />
	</div>
</article>
