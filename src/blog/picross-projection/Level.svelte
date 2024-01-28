<script>
	import levels from './levels';

	export let key = 'giraffe';
	export let color = 'currentColor';

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

	const xs = coordinates.map(({ x }) => x).sort((a, b) => a - b);
	const x0 = xs[0];
	const x1 = xs[xs.length - 1];
	const width = x1 - x0 + 1;

	const ys = coordinates.map(({ y }) => y).sort((a, b) => a - b);
	const y0 = ys[0];
	const y1 = ys[ys.length - 1];
	const height = y1 - y0 + 1;
</script>

<svg style:color style="display: block;" viewBox="{x0} {y0} {width} {height}">
	<defs>
		<g id="level-cube">
			<path d="M 0 0.25 l 0.5 -0.25 0.5 0.25 0 0.5 -0.5 0.25 -0.5 -0.25" />
			<g fill="black">
				<path opacity="0.5" d="M 0 0.25 l 0.5 0.25 0 0.5 -0.5 -0.25" />
				<path opacity="0.25" d="M 0.5 0.5 l 0.5 -0.25 0 0.5 -0.5 0.25" />
			</g>
		</g>
	</defs>
	<g fill="currentColor">
		{#each [...coordinates].reverse() as { x, y }}
			<use {x} {y} href="#level-cube" />
		{/each}
	</g>
</svg>

<style>
	svg use:hover {
		filter: brightness(2);
	}
</style>
