<script>
	import { getPuzzle } from './utils.js';
	import Tile from '../Tile.svelte';

	const size = 4;
	let { grid } = getPuzzle({ size, index: 15, moves: 100 });

	console.log(grid);
</script>

<svg viewBox="-0.25 -0.25 {size + 0.5} {size + 0.5}">
	<g>
		{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { column, row, value, hidden }}
			<g transform="translate({column} {row})">
				{#if !hidden}
					<g transform="translate(0.1 0.1)">
						<Tile width="0.8" height="0.8" char={value.toString()} />
					</g>
				{/if}
			</g>
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
		max-width: 30rem;
	}
</style>
