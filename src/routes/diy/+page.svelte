<script>
	import site from '$lib/utils/site.js';
	import svg from './svg.js';
	import PokeTheLadybug from './PokeTheLadybug.svelte';
	import PopTheBalloon from './PopTheBalloon.svelte';
	import FindTheButterflies from './FindTheButterflies.svelte';
	import CrackTheEgg from './CrackTheEgg.svelte';
	import BattleTheEnemy from './BattleTheEnemy.svelte';
	import SmashTheRabbits from './SmashTheRabbits.svelte';
	import FightTheEnemy from './FightTheEnemy.svelte';
	import TakeAPicture from './TakeAPicture.svelte';
	import PickASide from './PickASide.svelte';
	import MatchInPairs from './MatchInPairs.svelte';
	import PickUpProduce from './PickUpProduce.svelte';

	const { title } = site;

	const collection = [
		{
			component: PokeTheLadybug,
			backgroundColor: 'hsl(356 89% 71%)',
			borderColor: 'hsl(153 24% 77%)'
		},
		{
			component: PopTheBalloon,
			backgroundColor: 'hsl(46 93% 56%)',
			borderColor: 'hsl(41 100% 47%)'
		},
		{
			component: FindTheButterflies,
			backgroundColor: 'hsl(211 67% 48%)',
			borderColor: 'hsl(172 76% 41%)'
		},
		{
			component: CrackTheEgg,
			backgroundColor: 'hsl(60 91% 66%)',
			borderColor: 'hsl(171 83% 39%)'
		},
		{
			component: BattleTheEnemy,
			backgroundColor: 'hsl(119 30% 49%)',
			borderColor: 'hsl(177 65% 52%)'
		},
		{
			component: SmashTheRabbits,
			backgroundColor: 'hsl(39 91% 55%)',
			borderColor: 'hsl(143 99% 32%)'
		},
		{
			component: FightTheEnemy,
			backgroundColor: 'hsl(164 16% 32%)',
			borderColor: 'hsl(158 15% 14%)'
		},
		{
			component: TakeAPicture,
			backgroundColor: 'hsl(120 1% 84%)',
			borderColor: 'hsl(247 6% 27%)'
		},
		{
			component: PickASide,
			backgroundColor: 'hsl(36 93% 56%)',
			borderColor: 'hsl(23 100% 37%)'
		},
		{
			component: MatchInPairs,
			backgroundColor: 'hsl(27 79% 47%)',
			borderColor: 'hsl(142 100% 31%)'
		},
		{
			component: PickUpProduce,
			backgroundColor: 'hsl(38 100% 79%)',
			borderColor: 'hsl(176 67% 53%)'
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

<div class="[ visually-hidden ]">
	<h1>Do it yourself!</h1>
	<p>
		Play a collection of touch-based games, crafted with care and animated, scalable vector
		graphics.
	</p>
</div>

{@html svg['defs']}

<div class="collection">
	{#each collection as { component, backgroundColor, borderColor }}
		<article style:background-color={backgroundColor} style:--border-color={borderColor}>
			<svelte:component this={component} />
		</article>
	{/each}
</div>

<style>
	.collection {
		color: hsl(209 61% 16%);
		background: hsl(206 33% 96%);
		block-size: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}

	.collection article {
		scroll-snap-align: start;
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
		box-shadow: 0 -1rem 1rem hsla(209, 61%, 16%, 0.15), 0 0 0 0.1rem currentColor,
			0 0 0 0.9rem var(--_border-color), 0 0 0 1.1rem currentColor;
	}
</style>
