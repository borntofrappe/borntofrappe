<script context="module">
	export const hydrate = false;
</script>

<script>
	import Defs from './_helpers/_Defs.svelte';
	import PokeTheLadybug from './_PokeTheLadybug.svelte';
	import PopTheBalloon from './_PopTheBalloon.svelte';
	import FindTheButterflies from './_FindTheButterflies.svelte';
	import CrackTheEgg from './_CrackTheEgg.svelte';
	import BattleTheEnemy from './_BattleTheEnemy.svelte';
	import SmashTheRabbits from './_SmashTheRabbits.svelte';
	import FightTheEnemy from './_FightTheEnemy.svelte';
	import TakeAPicture from './_TakeAPicture.svelte';
</script>

<svelte:head>
	<title>borntofrappe | SMIL</title>
	<meta name="description" content="A showcase of animated, scalable vector graphics." />
	<link rel="icon" href="/icons/touch.svg" type="image/svg+xml" />
</svelte:head>

<Defs />

<div>
	<article style="--background-color: #f7717b; --outline-color: #b5d2c5;">
		<PokeTheLadybug />
	</article>
	<article style="--background-color: #f7c629; --outline-color: #eea200;">
		<PopTheBalloon />
	</article>
	<article style="--background-color: #2979ce; --outline-color: #19baa4;">
		<FindTheButterflies />
	</article>
	<article style="--background-color: #f7f75a; --outline-color: #11b69c;">
		<CrackTheEgg />
	</article>
	<article style="--background-color: #59a258; --outline-color: #37d4cd;">
		<BattleTheEnemy />
	</article>
	<article style="--background-color: #f5ab26; --outline-color: #01a33e;">
		<SmashTheRabbits />
	</article>
	<article style="--background-color: #455f58; --outline-color: #1f2a26;">
		<FightTheEnemy />
	</article>
	<article style="--background-color: #d6d7d6; --outline-color: #42414a;">
		<TakeAPicture />
	</article>
</div>

<style>
	div {
		color: hsl(0, 0%, 23%);
		background: hsl(41, 100%, 97%);
		max-height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		--outline-color: hsl(6, 100%, 74%);
		--background-color: hsl(41, 100%, 97%);
	}

	div :global(::selection) {
		background: hsl(41, 100%, 97%, 0.3);
	}

	article {
		scroll-snap-align: start;
		height: 100vh;
		display: grid;
		place-items: center;
		background: inherit;
		background: var(--background-color, inherit);
	}

	article > :global(svg) {
		width: 85vmin;
		max-width: 32rem;
		height: auto;
		border-radius: 0.25rem;
		box-shadow: 0 -1rem 1rem hsla(0, 0%, 0%, 0.1), 0 0 0 0.05rem currentColor,
			0 0 0 0.95rem hsl(6, 100%, 74%), 0 0 0 1rem currentColor;
		box-shadow: 0 -1rem 1rem hsla(0, 0%, 0%, 0.1), 0 0 0 0.05rem currentColor,
			0 0 0 0.95rem var(--outline-color), 0 0 0 1rem currentColor;
	}
</style>
