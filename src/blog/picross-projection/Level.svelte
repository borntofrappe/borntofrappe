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

<svg viewBox="0 0 {width} {height}">
	<g fill="currentColor">
		{#each coordinates as { x, y }}
			<use {x} {y} href="#cube" />
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
