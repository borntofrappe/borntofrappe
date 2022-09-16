<script>
	import Defs from '$lib/components/smil/helpers/Defs.svelte';
	import PokeTheLadybug from '$lib/components/smil/PokeTheLadybug.svelte';
	import PopTheBalloon from '$lib/components/smil/PopTheBalloon.svelte';
</script>

<svelte:head>
	<title>borntofrappe | SMIL</title>
	<meta name="description" content="A showcase of animated scalable vector graphics." />
	<link rel="icon" href="/icons/smil.svg" type="image/svg+xml" />
</svelte:head>

<Defs />

<div>
	<!-- <article style:background-color="hsl(356, 89%, 71%)" style:--border-color="hsl(153, 24%, 77%)">
		<PokeTheLadybug />
	</article> -->
	<article>
		<PopTheBalloon />
	</article>
</div>

<style>
	div {
		color: hsl(209, 61%, 16%);
		background: hsl(210, 36%, 96%);
	}

	article {
		min-height: 100vh;
		display: grid;
		place-items: center;
		--_border-color: var(--border-color, currentColor);
	}

	article > :global(svg) {
		display: block;
		width: 90vmin;
		width: calc(100vmin - 3rem);
		max-width: 34rem;
		height: auto;
		border-radius: 0.25rem;
		box-shadow: 0 -1em 1em hsla(209, 61%, 16%, 0.1), 0 0 0 0.05em hsl(209, 61%, 16%),
			0 0 0 0.95em var(--_border-color), 0 0 0 1em hsl(209, 61%, 16%);
	}
</style>
