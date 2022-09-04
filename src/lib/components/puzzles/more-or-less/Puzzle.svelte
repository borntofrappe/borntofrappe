<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 4;
	const puzzle = getPuzzle({ size });
</script>

<svg viewBox="-0.5 -0.5 {size} {size}">
	{#each puzzle.grid as section, row}
		{#each section as value, column}
			<g transform="translate({column} {row})">
				<g transform="translate(-0.3 -0.3)">
					<Tile width={0.6} height={0.6} char={value.toString()} />
				</g>
			</g>
		{/each}
	{/each}
</svg>
