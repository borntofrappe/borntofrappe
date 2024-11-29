<script>
	const level = `xxxxoox
xxxoxxx
xooooox
ooooooo
ooooooo
ooooooo
xooooox
xxoooxx`;

	const grid = level.split('\n').map((row) => row.split(''));
	const width = grid[0].length;
	const height = grid.length;

	const coordinates = grid.reduce((acc, curr, y) => {
		return [
			...acc,
			...curr.reduce((a, c, x) => {
				return c === 'o' ? [...a, { x, y }] : a;
			}, [])
		];
	}, []);
</script>

<svg role="img" viewBox="0 0 {width} {height}">
	<title>A savory apple</title>
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
