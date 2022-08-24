<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut as easing, backOut } from 'svelte/easing';

	import { getPuzzle } from './utils.js';

	export let size = 4;
	export let index = size ** 2 - 1;
	export let moves = 4;

	let { grid, hiddenTile } = getPuzzle({ size, index, moves });
	let isSliding = false;
	let isSolved = false;

	const slideDuration = 125;
	const slide = tweened(0, { duration: slideDuration, easing });

	const sizeDuration = 400;
	const reveal = tweened(0, { duration: sizeDuration, easing });
	const scale = tweened(1, { duration: sizeDuration, easing });

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

		const hasSolved = grid
			.reduce((acc, curr) => [...acc, ...curr], [])
			.every(({ row, column, initial }) => row === initial.row && column === initial.column);

		if (hasSolved) {
			await reveal.set(1, { easing: backOut });
			isSolved = true;
		} else {
			slide.set(0, { duration: 0 });
			isSliding = false;
		}
	};

	const resetPuzzle = async ({ row, column }) => {
		isSolved = false;
		const { row: hiddenRow, column: hiddenColumn } = hiddenTile;
		grid[hiddenRow][hiddenColumn].hidden = false;
		grid[row][column].hidden = true;

		reveal.set(0, { duration: 300 });
		await scale.set(0, { duration: 500 });

		const index = row * size + column;
		const puzzle = getPuzzle({ size, index, moves });
		grid = puzzle.grid;
		hiddenTile = puzzle.hiddenTile;

		await scale.set(1);
		isSliding = false;
		slide.set(0, { duration: 0 });
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
	class:solved={isSolved}
	viewBox="-0.55 -0.55 {size + 0.1} {size + 0.1}"
	class="focusable"
	tabindex="0"
	aria-label={isSolved
		? 'Slide the tiles so that the colors are in the correct order. Focus on a tile and press enter or one of the possible arrow keys to change its position.'
		: 'Play a new round of rainbox sixteen. Focus on a tile and press enter to hide the matching color.'}
>
	<g class="focus" opacity="0">
		<rect
			x="-0.5"
			y="-0.5"
			width={size}
			height={size}
			rx="0.2"
			fill="none"
			stroke="currentColor"
			stroke-width="0.05"
		/>
	</g>

	{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { row, column, color: fill, hidden }}
		<g transform="translate({column} {row})">
			<g transform="scale({$scale})">
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
						class="focusable"
						role="button"
						aria-label="Row {row + 1} and column {column + 1}. Color {fill}."
						tabindex={!isSliding && hasHiddenNeighbor({ row, column }) ? '0' : '-1'}
						on:keydown={(event) => {
							if (!isSliding && hasHiddenNeighbor({ row, column })) {
								handleKeydown({ event, row, column });
							}
						}}
					>
						<rect x="-0.45" y="-0.45" width="0.9" height="0.9" {fill} rx="0.15" />
						<g class="focus" opacity="0">
							<rect
								x="-0.45"
								y="-0.45"
								width="0.9"
								height="0.9"
								rx="0.15"
								fill="none"
								stroke="currentColor"
								stroke-width="0.05"
							/>
						</g>
					</g>
				{/if}
			</g>
		</g>
	{/each}

	{#if isSolved}
		{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { row, column, color: fill }}
			<g transform="translate({column} {row})">
				<g
					style:cursor="pointer"
					on:click={() => {
						resetPuzzle({ row, column });
					}}
					class="focusable"
					role="button"
					aria-label="Row {row + 1} and column {column + 1}. Color {fill}."
					tabindex="0"
					on:keydown={(event) => {
						const { key } = event;
						if (key === 'Enter') {
							event.preventDefault();

							resetPuzzle({ row, column });
						}
					}}
				>
					<rect opacity="0" x="-0.45" y="-0.45" width="0.9" height="0.9" rx="0.15" />
					<g class="focus" opacity="0">
						<rect
							x="-0.45"
							y="-0.45"
							width="0.9"
							height="0.9"
							rx="0.15"
							fill="none"
							stroke="currentColor"
							stroke-width="0.05"
						/>
					</g>
				</g>
			</g>
		{/each}
	{/if}
</svg>

<style>
	svg {
		display: block;
	}

	.focusable {
		outline: none;
	}

	.focusable:focus > .focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) > .focus {
		opacity: 0;
	}
</style>
