<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';
	export let size = 5;
	export let values = 4;

	const puzzle = getPuzzle({ size, values });
</script>

<svg viewBox="0 0 {size} {size}">
	{#each puzzle.grid.reduce((acc, curr) => [...acc, ...curr], []) as { value, column, row }}
		<g transform="translate({column} {row})">
			<g transform="translate(0.15 0.15)">
				<Tile width={0.7} height={0.7} char={value.toString()} />
			</g>
		</g>
	{/each}
</svg>

<style>
	svg {
		display: block;
		max-width: 30rem;
	}
</style>
