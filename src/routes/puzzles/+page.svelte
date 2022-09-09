<script>
	import SlidingTiles from '$lib/components/puzzles/sliding-tiles/Puzzle.svelte';
	import AdditionSquare from '$lib/components/puzzles/addition-square/Puzzle.svelte';
	import FindThePattern from '$lib/components/puzzles/find-the-pattern/Puzzle.svelte';
	import MoreOrLess from '$lib/components/puzzles/more-or-less/Puzzle.svelte';
	import ZerosAndOnes from '$lib/components/puzzles/zeros-and-ones/Puzzle.svelte';
	import TwoToThePower from '$lib/components/puzzles/two-to-the-power/Puzzle.svelte';

	const options = [
		{
			name: 'Sliding Tiles',
			component: SlidingTiles
		},
		{
			name: 'Addition Square',
			component: AdditionSquare
		},
		{
			name: 'Find the Pattern',
			component: FindThePattern
		},
		{
			name: 'More or Less',
			component: MoreOrLess
		},
		{
			name: 'Zeros and Ones',
			component: ZerosAndOnes
		},
		{
			name: 'Two to the Power',
			component: TwoToThePower
		}
	];

	let selected = options[0];
</script>

<svelte:head>
	<title>borntofrappe | Puzzles</title>
	<meta
		name="description"
		content="Enjoy a few interactive, infinitely replayable, inconsistently merciful puzzles."
	/>
	<link rel="icon" href="/icons/puzzles.svg" type="image/svg+xml" />
</svelte:head>

<div>
	<select bind:value={selected}>
		{#each options as option}
			<option value={option}>{option.name}</option>
		{/each}
	</select>

	<article>
		<svelte:component this={selected.component} />
	</article>
</div>

<style>
	div {
		--color-tile: hsl(8, 92%, 90%);
		--color-shadow: hsl(6, 98%, 80%);
		--color-focus: hsl(345, 13%, 94%);
		--color-text: hsl(19, 56%, 12%);
		--color-background: hsl(8, 83%, 54%);
		--color-issue: hsl(342, 82%, 47%);
		color: var(--color-text);
		background: var(--color-background);
		font-family: Source Code Pro, Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
			monospace;
	}

	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
	}

	div > :global(* + *) {
		margin-top: 1em;
	}

	select {
		background: var(--color-tile);
		border: none;
		border-bottom: 0.25rem solid var(--color-shadow);
		border-radius: 0.5rem;
		padding: 0.5rem;
	}

	article {
		max-width: 32rem;
	}
</style>
