<script>
	import Sixteen from '$lib/components/puzzles/sixteen/Puzzle.svelte';
	import AdditionSquare from '$lib/components/puzzles/addition-square/Puzzle.svelte';

	const options = [
		{
			name: 'Sixteen',
			component: Sixteen
		},
		{
			name: 'Addition square',
			component: AdditionSquare
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
		color: hsl(238, 78%, 13%);
		background: hsl(8, 83%, 54%);
		font-family: Source Code Pro, Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
			monospace;
	}

	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	div > * + * {
		margin-top: 1em;
	}
</style>
