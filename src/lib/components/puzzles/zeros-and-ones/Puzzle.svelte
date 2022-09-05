<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 4;
	const { grid } = getPuzzle({ size });
</script>

<svg viewBox="-0.5 -0.5 {size} {size}">
	{#each grid as { row, column, value }}
		<g transform="translate({column} {row})">
			<g transform="translate(-0.35 -0.35)">
				<Tile
					tile="var(--color-tile, hsl(8, 92%, 90%))"
					shadow="var(--color-shadow, hsl(6, 98%, 80%))"
					text="var(--color-focus, hsl(345, 13%, 94%))"
					outline="var(--color-text, hsl(19, 56%, 12%))"
					width={0.7}
					height={0.7}
					char={value.toString()}
				/>
			</g>
		</g>
	{/each}
</svg>
