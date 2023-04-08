<script>
	import site from '$lib/utils/site.js';
	import svg from './svg.js';
	import PokeTheLadybug from './PokeTheLadybug.svelte';
	import PopTheBalloon from './PopTheBalloon.svelte';
	import FindTheButterflies from './FindTheButterflies.svelte';
	import CrackTheEgg from './CrackTheEgg.svelte';
	import BattleTheEnemy from './BattleTheEnemy.svelte';

	const { title } = site;

	const collection = [
		{
			component: PokeTheLadybug,
			backgroundColor: 'hsl(356, 89%, 71%)',
			borderColor: 'hsl(153, 24%, 77%)'
		},
		{
			component: PopTheBalloon,
			backgroundColor: 'hsl(46, 93%, 56%)',
			borderColor: 'hsl(41, 100%, 47%)'
		},
		{
			component: FindTheButterflies,
			backgroundColor: 'hsl(211, 67%, 48%)',
			borderColor: 'hsl(172, 76%, 41%)'
		},
		{
			component: CrackTheEgg,
			backgroundColor: 'hsl(60, 91%, 66%)',
			borderColor: 'hsl(171, 83%, 39%)'
		},
		{
			component: BattleTheEnemy,
			backgroundColor: 'hsl(119, 30%, 49%)',
			borderColor: 'hsl(177, 65%, 52%)'
		}
	];
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
	{#each collection as { component, backgroundColor, borderColor }}
		<article style:background-color={backgroundColor} style:--border-color={borderColor}>
			<svelte:component this={component} />
		</article>
	{/each}
</div>

<style>
	div {
		color: hsl(209, 61%, 16%);
		background: hsl(206, 33%, 96%);
		block-size: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}

	article {
		scroll-snap-align: start;
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
