<script>
	export let size = 5;
	export let offset = false;
	$: max = offset ? (size - 1) * 2 + 1 : (size - 1) * 2;

	$: grid = Array(size)
		.fill()
		.map((_, row) =>
			Array(size)
				.fill()
				.map((_, column) => {
					const sum = row + column;

					const hue = (sum / max) * 360;
					const color = `hsl(${hue}, 78%, 68%)`;

					return {
						row,
						column,
						color
					};
				})
		)
		.flat();
</script>

<svg viewBox="0 0 {size} {size}">
	{#each grid as { row, column, color }}
		<g transform="translate({column} {row})">
			<rect fill={color} width="1" height="1" />
		</g>
	{/each}
</svg>

<style>
	svg {
		display: block;
	}
</style>
