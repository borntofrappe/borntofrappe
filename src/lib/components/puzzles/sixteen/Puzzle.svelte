<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut as easing, backOut } from 'svelte/easing';

	import { getPuzzle } from './utils.js';
	import Tile from '../Tile.svelte';

	const size = 4;
	const index = 15;
	const moves = 50;

	let { grid, hiddenTile, numbers } = getPuzzle({ size, index, moves });

	let isSliding = false;
	let isSolved = false;

	const durations = {
		slide: 125,
		scale: 500,
		hide: 300
	};

	const slide = tweened(0, { duration: durations.slide, easing });
	const scale = tweened(1, { duration: durations.scale, easing });
	const hiddenScale = tweened(0, { duration: durations.scale, easing });

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

		let hasSolved = true;
		for (let row = 0; row < grid.length; row++) {
			if (!hasSolved) break;
			for (let column = 0; column < grid[row].length; column++) {
				if (grid[row][column].number !== numbers[row][column]) {
					hasSolved = false;
					break;
				}
			}
		}

		if (hasSolved) {
			await hiddenScale.set(1, { easing: backOut });

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

		hiddenScale.set(0, { duration: durations.hide });
		await scale.set(0);

		const index = row * size + column;
		const puzzle = getPuzzle({ size, index, moves: moves + Math.floor(Math.random() * 10) });

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
	viewBox="-0.5 -0.5 {size} {size}"
	tabindex="0"
	aria-labelledby="title-sixteen desc-sixteen"
	style:outline="none"
	class="focusable"
>
	<title id="title-sixteen">Sixteen</title>
	<desc id="desc-sixteen"
		>{isSolved
			? "Congrats! You sure had a lot of patience. If you'd like to, you can keep sliding tiles with a new puzzle. Focus on a tile and press enter to hide the matching number and start fresh."
			: 'Slide the tiles so that the puzzle shows the numbers in ascending order. Focus on a tile and press enter or one of the possible arrow keys to change the change its position.'}</desc
	>
	<g class="focus" opacity="0">
		<rect
			x="-0.5"
			y="-0.5"
			width={size}
			height={size}
			rx="0.2"
			fill="var(--color-focus, hsl(345, 13%, 94%))"
			opacity="0.25"
		/>
	</g>

	<g>
		{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { column, row, number, hidden }}
			<g transform="translate({column} {row})">
				{#if hidden}
					<g transform="scale({$hiddenScale})">
						<g transform="translate(-0.38 -0.38)">
							<Tile
								tile="var(--color-tile, hsl(8, 92%, 90%))"
								shadow="var(--color-shadow, hsl(6, 98%, 80%))"
								text="var(--color-focus, hsl(345, 13%, 94%))"
								outline="var(--color-text, hsl(19, 56%, 12%))"
								width="0.76"
								height="0.76"
								char={number.toString()}
							/>
						</g>
					</g>
				{:else}
					<g transform="scale({$scale})">
						<g
							style:cursor={!isSliding && hasHiddenNeighbor({ row, column })
								? 'pointer'
								: 'initial'}
							on:click={() => {
								if (!isSliding && hasHiddenNeighbor({ row, column })) {
									updatePuzzle({ row, column });
								}
							}}
							role="button"
							tabindex={!isSliding && hasHiddenNeighbor({ row, column }) ? '0' : '-1'}
							aria-label="Slide the tile number {number} from row {row + 1} and column {column +
								1}."
							style:outline="none"
							class="focusable"
							on:keydown={(event) => {
								if (!isSliding && hasHiddenNeighbor({ row, column })) {
									handleKeydown({ event, row, column });
								}
							}}
						>
							<g class="focus" opacity="0">
								<circle r="0.5" fill="var(--color-focus, hsl(345, 13%, 94%))" opacity="0.25" />
							</g>

							<g transform="translate(-0.38 -0.38)">
								<Tile
									tile="var(--color-tile, hsl(8, 92%, 90%))"
									shadow="var(--color-shadow, hsl(6, 98%, 80%))"
									text="var(--color-focus, hsl(345, 13%, 94%))"
									outline="var(--color-text, hsl(19, 56%, 12%))"
									width="0.76"
									height="0.76"
									char={number.toString()}
								/>
							</g>
						</g>
					</g>
				{/if}
			</g>
		{/each}
	</g>

	{#if isSolved}
		<g>
			{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { column, row, number }}
				<g transform="translate({column} {row})">
					<g
						style:cursor="pointer"
						on:click={() => {
							resetPuzzle({ row, column });
						}}
						role="button"
						tabindex="0"
						aria-label="Hide the tile number {number} on row {row + 1} and column {column + 1}."
						style:outline="none"
						class="focusable"
						on:keydown={(event) => {
							const { key } = event;
							if (key === 'Enter') {
								event.preventDefault();
								resetPuzzle({ row, column });
							}
						}}
					>
						<g class="focus" opacity="0">
							<circle r="0.5" fill="var(--color-focus, hsl(345, 13%, 94%))" opacity="0.25" />
						</g>
						<g transform="translate(-0.38 -0.38)">
							<Tile
								tile="var(--color-tile, hsl(8, 92%, 90%))"
								shadow="var(--color-shadow, hsl(6, 98%, 80%))"
								text="var(--color-focus, hsl(345, 13%, 94%))"
								outline="var(--color-text, hsl(19, 56%, 12%))"
								width="0.76"
								height="0.76"
								char={number.toString()}
							/>
						</g>
					</g>
				</g>
			{/each}
		</g>
	{/if}
</svg>

<style>
	svg {
		display: block;
	}

	.focusable:focus > .focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) > .focus {
		opacity: 0;
	}
</style>
