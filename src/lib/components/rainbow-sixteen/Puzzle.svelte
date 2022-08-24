<script>
	import { getColorHsv as getColor } from './utils.js';

	export let size = 4;

	const n = size * 2 - 1;
	const puzzle = Array(size)
		.fill()
		.map((_, row) => {
			return Array(size)
				.fill()
				.map((_, column) => {
					const color = getColor({ h: (360 * (column + row)) / n });

					return {
						row,
						column,
						color
					};
				});
		});
</script>

<svg viewBox="0 0 {size} {size}">
	{#each puzzle.reduce((acc, curr) => [...acc, ...curr], []) as { row, column, color: fill }}
		<g transform="translate({column} {row})">
			<rect x="0.05" y="0.05" width="0.9" height="0.9" {fill} rx="0.15" />
		</g>
	{/each}
</svg>

<style>
	svg {
		display: block;
	}
</style>
