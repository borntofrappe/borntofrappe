<script>
	const level = `xooxoox
oooxooo
oooxooo
xxxoxxx
oooxooo
oooxooo
xooxoox`;

	const grid = level.split('\n').map((row) => row.split(''));
	const width = grid[0].length;
	const height = grid.length;

	const coordinates = [];
	for (let y = 0; y < grid.length; y++) {
		for (let x = 0; x < grid[0].length; x++) {
			if (grid[y][x] === 'o') {
				coordinates.push({ x, y });
			}
		}
	}
</script>

<svg role="img" viewBox="0 0 {width} {height}">
	<title>A good luck clover</title>
	<g fill="currentColor">
		{#each coordinates as { x, y }}
			<rect {x} {y} width="1" height="1" />
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
