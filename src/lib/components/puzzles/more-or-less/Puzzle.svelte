<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 4;
	export let reveal = size;
	const puzzle = getPuzzle({ size, reveal });
</script>

<svg viewBox="-0.5 -0.5 {size} {size}">
	{#each puzzle.grid as section, row}
		{#each section as { value, isLocked }, column}
			<g transform="translate({column} {row})">
				{#if isLocked}
					<g transform="translate(-0.3 -0.3)">
						<Tile
							tile="var(--color-tile, hsl(8, 92%, 90%))"
							shadow="var(--color-shadow, hsl(6, 98%, 80%))"
							text="var(--color-focus, hsl(345, 13%, 94%))"
							outline="var(--color-text, hsl(19, 56%, 12%))"
							width={0.6}
							height={0.6}
							char={value.toString()}
						/>
					</g>
				{:else}
					<g transform="translate(-0.3 -0.3)">
						<Tile
							tile="var(--color-focus, hsl(345, 13%, 94%))"
							shadow="var(--color-shadow, hsl(6, 98%, 80%))"
							text="var(--color-focus, hsl(345, 13%, 94%))"
							outline="var(--color-text, hsl(19, 56%, 12%))"
							width={0.6}
							height={0.6}
							char={value === 0 ? '' : value.toString()}
						/>
					</g>
				{/if}
			</g>
		{/each}
	{/each}
</svg>
