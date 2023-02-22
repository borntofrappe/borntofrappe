<script>
	import levels from './levels';

	export let key = 'giraffe';

	const grid = levels[key].split('\n').map((row) => row.split(''));

	const coordinates = grid.reduce((acc, curr, i) => {
		return [
			...acc,
			...curr.reduce((a, c, j) => {
				const x = j / 2;
				const y = i / 2 - x / 2;
				return c === 'o' ? [...a, { x, y }] : a;
			}, [])
		];
	}, []);

	const xs = coordinates.map(({ x }) => x).sort((a, b) => b - a);
	const width = xs[0] + 1;

	const ys = coordinates.map(({ y }) => y).sort((a, b) => a - b);
	const y0 = ys[0];
	const y1 = ys[ys.length - 1];

	const height = y1 + Math.abs(y0) + 1;
</script>

<svg viewBox="0 {y0} {width} {height}">
	<g fill="currentColor">
		{#each [...coordinates].reverse() as { x, y }}
			<use {x} {y} href="#cube" />
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
