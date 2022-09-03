<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 5;
	export let pattern;
	export let values;
	export let minimum = 5;

	const puzzle = getPuzzle({ size, pattern, values, minimum });
</script>

<svg viewBox="-0.5 -0.5 {size} {size + 1}">
	<g>
		<g transform="translate(-0.34 -0.34)">
			<Tile
				tile="var(--color-tile, hsl(8, 92%, 90%))"
				shadow="var(--color-shadow, hsl(6, 98%, 80%))"
				text="var(--color-focus, hsl(345, 13%, 94%))"
				outline="var(--color-text, hsl(19, 56%, 12%))"
				width={0.68}
				height={0.68}
				char={puzzle.solutions.length}
			/>
		</g>
	</g>
	<g transform="translate(1 0)">
		{#each puzzle.pattern as value, i}
			<g transform="translate({i} 0)">
				<g transform="translate(-0.25 -0.25)">
					<Tile
						tile="var(--color-tile, hsl(8, 92%, 90%))"
						shadow="var(--color-shadow, hsl(6, 98%, 80%))"
						text="var(--color-focus, hsl(345, 13%, 94%))"
						outline="var(--color-text, hsl(19, 56%, 12%))"
						width={0.5}
						height={0.5}
						char={value.toString()}
					/>
				</g>
				{#if i < puzzle.pattern.length - 1}
					<g transform="translate(0.5 0)">
						<path
							d="M -0.035 -0.07 l 0.07 0.07 -0.07 0.07"
							fill="none"
							stroke="#f2eeef"
							stroke-width="0.07"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				{/if}
			</g>
		{/each}
	</g>

	<g transform="translate(0 1)">
		{#each puzzle.grid.reduce((acc, curr) => [...acc, ...curr], []) as { column, row, value }}
			<g transform="translate({column} {row})">
				<g transform="translate(-0.34 -0.34)">
					<Tile
						tile="var(--color-focus, hsl(345, 13%, 94%))"
						shadow="var(--color-shadow, hsl(6, 98%, 80%))"
						text="var(--color-focus, hsl(345, 13%, 94%))"
						outline="var(--color-text, hsl(19, 56%, 12%))"
						width={0.68}
						height={0.68}
						char={value.toString()}
					/>
				</g>
			</g>
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
