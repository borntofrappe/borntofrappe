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

<div class="[ visually-hidden ]">
	<h1>Color tiles</h1>
	<p>Compete to place your tiles in a colorful line. To each player its turn!</p>
</div>

<main
	class="[ box centered ]"
	style="
		--box-color: hsl(210, 16%, 82%); 
		--box-background: hsl(210, 24%, 16%); 
		--selection-color: hsl(210, 16%, 82%); 
		--selection-background: hsl(209, 34%, 30%);
	"
>
	<div style="inline-size: 90vmin; max-inline-size: 52rem;">
		<Puzzle size={6} />
	</div>
</main>
