<script>
	export let padding = 4;
	export let offset = false;
	export let reverse = false;

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

	const coordinates = offset
		? grid.reduce((acc, curr, i) => {
				return [
					...acc,
					...curr.reduce((a, c, j) => {
						const x = j / 2;
						const y = i / 2 - x / 2;
						return c === 'o' ? [...a, { x, y }] : a;
					}, [])
				];
		  }, [])
		: grid.reduce((acc, curr, y) => {
				return [
					...acc,
					...curr.reduce((a, c, x) => {
						return c === 'o' ? [...a, { x, y }] : a;
					}, [])
				];
		  }, []);
</script>

<svg viewBox="{(padding / 2) * -1} {(padding / 2) * -1} {width + padding} {height + padding}">
	<g fill="currentColor">
		{#each reverse ? [...coordinates].reverse() : coordinates as { x, y }}
			<use {x} {y} href="#cube" />
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
