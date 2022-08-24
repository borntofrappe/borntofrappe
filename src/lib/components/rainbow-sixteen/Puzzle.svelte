<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	import { getColorHsv as getColor } from './utils.js';

	export let size = 4;
	export let index = size ** 2 - 1;
	export let moves = 4;

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
						hidden: false,
						initial: {
							row,
							column
						}
					};
				});
		});

	const hiddenRow = Math.floor(index / size);
	const hiddenColumn = index % size;
	puzzle[hiddenRow][hiddenColumn].hidden = true;

	const neighbors = [
		{ row: -1, column: 0 },
		{ row: 0, column: 1 },
		{ row: 1, column: 0 },
		{ row: 0, column: -1 }
	];

	let nextNeighbors = neighbors.map((neighbor) => ({ ...neighbor }));

	const hiddenNeighbor = {
		row: hiddenRow,
		column: hiddenColumn
	};

	for (let i = 0; i < moves; i++) {
		const { row: hiddenRow, column: hiddenColumn } = hiddenNeighbor;

		const availableNeighbors = nextNeighbors.filter(
			({ row, column }) => puzzle[hiddenRow + row] && puzzle[hiddenRow + row][hiddenColumn + column]
		);
		const { row: neighborRow, column: neighborColumn } =
			availableNeighbors[Math.floor(Math.random() * availableNeighbors.length)];

		const row = hiddenRow + neighborRow;
		const column = hiddenColumn + neighborColumn;

		puzzle[row][column].row = hiddenRow;
		puzzle[row][column].column = hiddenColumn;
		puzzle[hiddenRow][hiddenColumn].row = row;
		puzzle[hiddenRow][hiddenColumn].column = column;

		[puzzle[row][column], puzzle[hiddenRow][hiddenColumn]] = [
			puzzle[hiddenRow][hiddenColumn],
			puzzle[row][column]
		];

		hiddenNeighbor.row = row;
		hiddenNeighbor.column = column;

		nextNeighbors = neighbors.filter(
			({ row, column }) => row !== neighborRow * -1 || column !== neighborColumn * -1
		);
	}

	const slideDuration = 125;
	const slide = tweened(0, { duration: slideDuration, easing: cubicInOut });

	const revealDuration = 400;
	const reveal = tweened(0, { duration: revealDuration, easing: cubicInOut });

	let isSliding = false;

	const hasHiddenNeighbor = ({ row, column }) => {
		const { row: hiddenRow, column: hiddenColumn } = hiddenNeighbor;
		return (
			(Math.abs(row - hiddenRow) === 1 && column === hiddenColumn) ||
			(Math.abs(column - hiddenColumn) === 1 && row === hiddenRow)
		);
	};

	const updatePuzzle = async ({ row, column }) => {
		if (isSliding) return;

		if (!hasHiddenNeighbor({ row, column })) return;

		isSliding = true;

		const { row: hiddenRow, column: hiddenColumn } = hiddenNeighbor;
		const offsetRow = hiddenRow - row;
		const offsetColumn = hiddenColumn - column;

		await slide.set(1, {
			interpolate: (from, to) => (t) => {
				const value = t * (to - from);
				puzzle[row][column].row = row + offsetRow * value;
				puzzle[row][column].column = column + offsetColumn * value;
				return value;
			}
		});

		puzzle[row][column].row = hiddenRow;
		puzzle[row][column].column = hiddenColumn;
		puzzle[hiddenRow][hiddenColumn].row = row;
		puzzle[hiddenRow][hiddenColumn].column = column;

		[puzzle[row][column], puzzle[hiddenRow][hiddenColumn]] = [
			puzzle[hiddenRow][hiddenColumn],
			puzzle[row][column]
		];

		hiddenNeighbor.row = row;
		hiddenNeighbor.column = column;

		const hasWon = puzzle
			.reduce((acc, curr) => [...acc, ...curr], [])
			.every(({ row, column, initial }) => row === initial.row && column === initial.column);

		if (hasWon) {
			reveal.set(1);
		} else {
			slide.set(0, { duration: 0 });
			isSliding = false;
		}
	};
</script>

<svg viewBox="-0.5 -0.5 {size} {size}">
	{#each puzzle.reduce((acc, curr) => [...acc, ...curr], []) as { row, column, color: fill, hidden }}
		<g transform="translate({column} {row})">
			{#if hidden}
				<g transform="scale({$reveal})">
					<rect x="-0.45" y="-0.45" width="0.9" height="0.9" {fill} rx="0.15" />
				</g>
			{:else}
				<g
					style:cursor={!isSliding && hasHiddenNeighbor({ row, column }) ? 'pointer' : 'initial'}
					on:click={() => {
						if (!isSliding && hasHiddenNeighbor({ row, column })) {
							updatePuzzle({ row, column });
						}
					}}
				>
					<rect x="-0.45" y="-0.45" width="0.9" height="0.9" {fill} rx="0.15" />
				</g>
			{/if}
		</g>
	{/each}
</svg>

<style>
	svg {
		display: block;
	}
</style>
