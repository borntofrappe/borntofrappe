<script>
	export let size = 5;

	$: grid = Array(size)
		.fill()
		.map((_, row) =>
			Array(size)
				.fill()
				.map((_, column) => {
					const sum = row + column;

					return {
						row,
						column,
						sum
					};
				})
		)
		.flat();
</script>

<svg viewBox="-0.5 -0.5 {size} {size}">
	<g
		font-size="0.4"
		font-weight="700"
		font-family="inherit"
		text-anchor="middle"
		dominant-baseline="middle"
		fill="currentColor"
	>
		{#each grid as { row, column, sum }}
			<g transform="translate({column} {row})">
				<text>{sum}</text>
			</g>
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
