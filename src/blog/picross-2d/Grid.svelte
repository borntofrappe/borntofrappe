<script>
	const level = `xxxoo
xxxox
xxxox
xxoox
oooox
oooox
oxxox
oxxox`;

	const grid = level.split('\n').map((row) => row.split(''));
	const height = grid.length;
	const width = grid[0].length;
</script>

<svg role="img" viewBox="0 0 {width} {height}">
	<title>An upstanding giraffe</title>
	<g fill="currentColor">
		{#each grid as row, y}
			{#each row as cell, x}
				{#if cell === 'o'}
					<rect {x} {y} width="1" height="1" />
				{/if}
			{/each}
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
