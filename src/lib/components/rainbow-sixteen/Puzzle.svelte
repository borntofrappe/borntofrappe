<script>
	import { getColorHsv as getColor } from './utils.js';

	export let size = 4;
	export let index = size ** 2 - 1;
	export let moves = 20;

	const n = size * 2 - 1;
	const puzzle = Array(size)
		.fill()
		.map((_, row) => {
			return Array(size)
				.fill()
				.map((_, column) => {
					const color = getColor({ h: (360 * (column + row)) / n });

					return {
						row,
						column,
						color,
						hidden: false
					};
				});
		});

	const hiddenCoords = [Math.floor(index / size), index % size];
	let [hr, hc] = hiddenCoords;
	puzzle[hr][hc].hidden = true;

	const neighbors = [
		[0, -1],
		[1, 0],
		[0, 1],
		[-1, 0]
	];

	let nextNeighbors = neighbors.map(([r, c]) => [r, c]);
	for (let i = 0; i < moves; i++) {
		const availableNeighbors = nextNeighbors.filter(
			([nr, nc]) => puzzle[hr + nr] && puzzle[hr + nr][hc + nc]
		);
		const [nr, nc] = availableNeighbors[Math.floor(Math.random() * availableNeighbors.length)];

		const gr = hr + nr;
		const gc = hc + nc;

		puzzle[gr][gc].row = hr;
		puzzle[gr][gc].column = hc;
		puzzle[hr][hc].row = gr;
		puzzle[hr][hc].column = gc;

		[puzzle[gr][gc], puzzle[hr][hc]] = [puzzle[hr][hc], puzzle[gr][gc]];

		hr = gr;
		hc = gc;
		nextNeighbors = neighbors.filter(([nnr, nnc]) => nnr !== nr * -1 || nnc !== nc * -1);
	}
</script>

<svg viewBox="0 0 {size} {size}">
	{#each puzzle.reduce((acc, curr) => [...acc, ...curr], []) as { row, column, color: fill, hidden }}
		<g transform="translate({column} {row})">
			{#if !hidden}
				<rect x="0.05" y="0.05" width="0.9" height="0.9" {fill} rx="0.15" />
			{/if}
		</g>
	{/each}
</svg>

<style>
	svg {
		display: block;
	}
</style>
