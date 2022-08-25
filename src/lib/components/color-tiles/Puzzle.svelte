<script>
	export let size = 3;
	export let colors = ['hsl(0, 68%, 67%)', 'hsl(54, 99%, 72%)', 'hsl(197, 87%, 73%)'];

	const grid = Array(size ** 2)
		.fill()
		.map((_, i) => {
			const column = i % size;
			const row = Math.floor(i / size);

			return {
				column,
				row,
				color: colors[colors.length - 1]
			};
		});

	grid[0].color = colors[0];
	grid[grid.length - 2].color = colors[1];
</script>

<svg viewBox="0 0 {size} {size}">
	{#each grid as { column, row, color: fill }}
		<g transform="translate({column} {row})">
			<g>
				<rect width="1" height="1" {fill} />
			</g>
		</g>
	{/each}
</svg>

<style>
	svg {
		display: block;
	}
</style>
