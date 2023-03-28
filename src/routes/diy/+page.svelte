<script>
	import site from '$lib/utils/site.js';
	import svg from './svg.js';
	import PokeTheLadybug from './PokeTheLadybug.svelte';
	import PopTheBalloon from './PopTheBalloon.svelte';
	import FindTheButterflies from './FindTheButterflies.svelte';

	const { title } = site;
</script>

<svelte:head>
	<title>D.I.Y. | {title}</title>
	<meta
		name="description"
		content="Play a collection of touch-based games, crafted with care and animated, scalable vector graphics."
	/>
	<link rel="icon" href="/icons/diy.svg" type="image/svg+xml" />
</svelte:head>

<header class="visually-hidden">
	<h1>Do it yourself!</h1>
	<p>
		Play a collection of touch-based games, crafted with care and animated, scalable vector
		graphics.
	</p>
</header>

{@html svg['defs']}

<div>
	<article style="background: hsl(356, 89%, 71%); --border-color: hsl(153, 24%, 77%);">
		<PokeTheLadybug />
	</article>

	<article style="background: hsl(46, 93%, 56%); --border-color: hsl(41, 100%, 47%);">
		<PopTheBalloon />
	</article>

	<article style="background: hsl(211, 67%, 48%); --border-color: hsl(172, 76%, 41%);">
		<FindTheButterflies />
	</article>
</div>

<style>
	div {
		color: hsl(209, 61%, 16%);
		background: hsl(206, 33%, 96%);
	}

	article {
		block-size: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		--_border-color: var(--border-color, currentColor);
	}

	article > :global(svg) {
		display: block;
		inline-size: 90vmin;
		max-inline-size: 36rem;
		block-size: auto;
		border-radius: 0.25rem;
		box-shadow: 0 -1rem 1rem hsla(209, 61%, 16%, 0.15), 0 0 0 0.1rem hsl(209, 61%, 16%),
			0 0 0 0.9rem var(--_border-color), 0 0 0 1.1rem hsl(209, 61%, 16%);
	}
</style>
