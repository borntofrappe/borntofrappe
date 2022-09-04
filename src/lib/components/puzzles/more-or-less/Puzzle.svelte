<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 4;
	export let reveal = size;
	export let relate = size * 2;
	const puzzle = getPuzzle({ size, reveal, relate });
</script>

<svg viewBox="-0.5 -0.5 {size} {size}">
	{#each puzzle.grid as section, row}
		{#each section as { value, isLocked, relations }, column}
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

				{#each relations as { direction, sign }}
					<g transform="rotate({direction * 90})">
						<g transform="translate(0 -0.5)">
							<g transform="scale(1 {sign * 1})">
								<path
									d="M -0.07 0.035 l 0.07 -0.07 0.07 0.07"
									fill="none"
									stroke="var(--color-focus, hsl(345, 13%, 94%))"
									stroke-width="0.07"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
						</g>
					</g>
				{/each}
			</g>
		{/each}
	{/each}
</svg>
