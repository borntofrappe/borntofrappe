<script>
	import Defs from '$lib/components/smil/helpers/Defs.svelte';

	import PokeTheLadybug from '$lib/components/smil/PokeTheLadybug.svelte';
	import PopTheBalloon from '$lib/components/smil/PopTheBalloon.svelte';
	import FindTheButterflies from '$lib/components/smil/FindTheButterflies.svelte';
	import CrackTheEgg from '$lib/components/smil/CrackTheEgg.svelte';
	import BattleTheEnemy from '$lib/components/smil/BattleTheEnemy.svelte';
	import SmashTheRabbits from '$lib/components/smil/SmashTheRabbits.svelte';
	import FightTheEnemy from '$lib/components/smil/FightTheEnemy.svelte';
	import TakeAPicture from '$lib/components/smil/TakeAPicture.svelte';

	const showcase = [
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
		},
		{
			component: SmashTheRabbits,
			backgroundColor: 'hsl(39, 91%, 55%)',
			borderColor: 'hsl(143, 99%, 32%)'
		},
		{
			component: FightTheEnemy,
			backgroundColor: 'hsl(164, 16%, 32%)',
			borderColor: 'hsl(158, 15%, 14%)'
		},
		{
			component: TakeAPicture,
			backgroundColor: 'hsl(120, 1%, 84%)',
			borderColor: 'hsl(247, 6%, 27%)'
		}
	];
</script>

<svelte:head>
	<title>borntofrappe | SMIL</title>
	<meta name="description" content="A showcase of animated scalable vector graphics." />
	<link rel="icon" href="/icons/smil.svg" type="image/svg+xml" />
</svelte:head>

<Defs />

<div>
	{#each showcase as { component, backgroundColor, borderColor }}
		<article style:background-color={backgroundColor} style:--border-color={borderColor}>
			<svelte:component this={component} />
		</article>
	{/each}
</div>

<style>
	div {
		color: hsl(209, 61%, 16%);
		background: hsl(210, 36%, 96%);
		max-height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}

	article {
		scroll-snap-align: start;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
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
