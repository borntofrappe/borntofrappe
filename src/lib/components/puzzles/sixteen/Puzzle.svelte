<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut as easing, backOut } from 'svelte/easing';

	import { getPuzzle } from './utils.js';
	import Tile from '../Tile.svelte';

	const size = 4;
	let { grid, hiddenTile } = getPuzzle({ size, index: 15, moves: 100 });

	let isSliding = false;

	const durations = {
		slide: 125
	};

	const slide = tweened(0, { duration: durations.slide, easing });

	const hasHiddenNeighbor = ({ row, column }) => {
		const { row: hiddenRow, column: hiddenColumn } = hiddenTile;
		return (
			(Math.abs(row - hiddenRow) === 1 && column === hiddenColumn) ||
			(Math.abs(column - hiddenColumn) === 1 && row === hiddenRow)
		);
	};

	const updatePuzzle = async ({ row, column }) => {
		if (isSliding) return;

		if (!hasHiddenNeighbor({ row, column })) return;

		isSliding = true;

		const { row: hiddenRow, column: hiddenColumn } = hiddenTile;
		const offsetRow = hiddenRow - row;
		const offsetColumn = hiddenColumn - column;

		await slide.set(1, {
			interpolate: (from, to) => (t) => {
				const value = t * (to - from);
				grid[row][column].row = row + offsetRow * value;
				grid[row][column].column = column + offsetColumn * value;
				return value;
			}
		});

		grid[row][column].row = hiddenRow;
		grid[row][column].column = hiddenColumn;
		grid[hiddenRow][hiddenColumn].row = row;
		grid[hiddenRow][hiddenColumn].column = column;

		[grid[row][column], grid[hiddenRow][hiddenColumn]] = [
			grid[hiddenRow][hiddenColumn],
			grid[row][column]
		];

		hiddenTile = { row, column };

		slide.set(0, { duration: 0 });
		isSliding = false;
	};

	const handleKeydown = ({ event, row, column }) => {
		if (isSliding) return;

		if (!hasHiddenNeighbor({ row, column })) return;

		const { key } = event;

		if (key === 'Enter') {
			event.preventDefault();

			updatePuzzle({ row, column });
		} else {
			const offsets = {
				ArrowUp: { row: -1, column: 0 },
				ArrowRight: { row: 0, column: 1 },
				ArrowDown: { row: 1, column: 0 },
				ArrowLeft: { row: 0, column: -1 }
			};

			const offset = offsets[key];

			if (offset) {
				event.preventDefault();
				const { row: offsetRow, column: offsetColumn } = offset;
				const { row: hiddenRow, column: hiddenColumn } = hiddenTile;
				if (row === hiddenRow - offsetRow && column === hiddenColumn - offsetColumn) {
					updatePuzzle({ row, column });
				}
			}
		}
	};
</script>

<svg
	viewBox="-0.5 -0.5 {size} {size}"
	tabindex="0"
	aria-label="Slide the tiles so that the puzzle shows the number in ascending order."
	style:outline="none"
	class="focusable"
>
	<g class="focus" opacity="0">
		<rect x="-0.5" y="-0.5" width={size} height={size} rx="0.2" fill="#f2eeef" opacity="0.2" />
	</g>

	<g>
		{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { column, row, value, hidden }}
			<g transform="translate({column} {row})">
				{#if !hidden}
					<g
						style:cursor={!isSliding && hasHiddenNeighbor({ row, column }) ? 'pointer' : 'initial'}
						on:click={() => {
							if (!isSliding && hasHiddenNeighbor({ row, column })) {
								updatePuzzle({ row, column });
							}
						}}
						role="button"
						tabindex={!isSliding && hasHiddenNeighbor({ row, column }) ? '0' : '-1'}
						aria-label="Row {row + 1} and column {column + 1}. Tile number {value}."
						style:outline="none"
						class="focusable"
						on:keydown={(event) => {
							if (!isSliding && hasHiddenNeighbor({ row, column })) {
								handleKeydown({ event, row, column });
							}
						}}
					>
						<g class="focus" opacity="0">
							<circle r="0.5" fill="#f2eeef" opacity="0.2" />
						</g>
						<g transform="translate(-0.38 -0.38)">
							<Tile width="0.76" height="0.76" char={value.toString()} />
						</g>
					</g>
				{/if}
			</g>
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
		max-width: 30rem;
	}

	.focusable:focus > .focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) > .focus {
		opacity: 0;
	}
</style>
