<script>
	export let size = 5;
	$: grid = Array(size)
		.fill()
		.map((_, row) =>
			Array(size)
				.fill()
				.map((_, column) => ({ row, column }))
		)
		.flat();
</script>

<svg viewBox="0 0 {size} {size}">
	{#each grid as { row, column }}
		<rect x={column} y={row} width="1" height="1" />
	{/each}
</svg>

<style>
	svg {
		display: block;
	}
</style>
