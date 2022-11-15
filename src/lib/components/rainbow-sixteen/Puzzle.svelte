<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut as easing, backOut } from 'svelte/easing';

	import { getPuzzle } from './utils.js';

	export let size = 4;
	export let index = size ** 2 - 1;
	export let moves = 42;

	let { grid, hiddenTile, colors } = getPuzzle({ size, index, moves });
	let isSliding = false;
	let isSolved = false;
	let isAnimated = false;

	const durations = {
		slide: 125,
		scale: 500,
		show: 500,
		hide: 300
	};

	const slide = tweened(0, { duration: durations.slide, easing });

	const scale = tweened(1, { duration: durations.scale, easing });
	const hiddenScale = tweened(0, { duration: durations.show, easing });

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
				if (grid[row][column].color !== colors[row][column]) {
					hasSolved = false;
					break;
				}
			}
		}

		if (hasSolved) {
			isSolved = true;
			const { matches } = matchMedia('(prefers-reduced-motion: reduce)');
			if (matches) {
				await hiddenScale.set(1, { easing: backOut });
				isAnimated = true;
			}
		} else {
			slide.set(0, { duration: 0 });
			isSliding = false;
		}
	};

	const resetPuzzle = async ({ row, column }) => {
		isAnimated = false;
		isSolved = false;

		const { row: hiddenRow, column: hiddenColumn } = hiddenTile;
		grid[hiddenRow][hiddenColumn].hidden = false;
		grid[row][column].hidden = true;

		hiddenScale.set(0, { duration: durations.hide });
		await scale.set(0);

		const index = row * size + column;
		const puzzle = getPuzzle({ size, index, moves });
		grid = puzzle.grid;
		hiddenTile = puzzle.hiddenTile;
		// colors = puzzle.colors;

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

	const handleAnimationend = async () => {
		if (isAnimated) return;
		isAnimated = true;

		const duration = (grid[0][0].animation.duration * 1000) / 2;
		await hiddenScale.set(1, { easing: backOut, duration, delay: duration });
	};
</script>

<svg
	viewBox="-0.55 -0.55 {size + 0.1} {size + 0.1}"
	class="focusable"
	role="menu"
	tabindex="0"
	aria-label={isAnimated
		? 'Play a new round of rainbow sixteen. Focus on a tile and press enter to hide the matching color.'
		: 'Slide the tiles so that the colors are in the correct order. Focus on a tile and press enter or one of the possible arrow keys to change its position.'}
>
	<defs>
		<symbol id="rainbow-sixteen-tile" viewbox="0 0 1 1">
			<path d="M 0 0.5 C 0 0 0 0 0.5 0 S 1 0 1 0.5 1 1 0.5 1 0 1 0 0.5" />
		</symbol>
	</defs>
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

	<g class:solved={isSolved} on:animationend={handleAnimationend}>
		{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { row, column, color: fill, hidden, animation }}
			<g transform="translate({column} {row})">
				<g
					class="scale"
					style:animation-duration="{animation.duration}s"
					style:animation-delay="{animation.delay}s"
				>
					{#if hidden}
						<g transform="scale({$hiddenScale})">
							<use
								href="#rainbow-sixteen-tile"
								x="-0.45"
								y="-0.45"
								width="0.9"
								height="0.9"
								{fill}
							/>
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
								<use
									href="#rainbow-sixteen-tile"
									x="-0.45"
									y="-0.45"
									width="0.9"
									height="0.9"
									{fill}
								/>
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
					{/if}
				</g>
			</g>
		{/each}
	</g>

	{#if isAnimated}
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
					<use
						href="#rainbow-sixteen-tile"
						opacity="0"
						x="-0.45"
						y="-0.45"
						width="0.9"
						height="0.9"
					/>
					<g class="focus" opacity="0">
						<use
							href="#rainbow-sixteen-tile"
							x="-0.45"
							y="-0.45"
							width="0.9"
							height="0.9"
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

	.solved .scale {
		animation: pulse 5 cubic-bezier(0.37, 0, 0.63, 1);
	}

	@media (prefers-reduced-motion: reduce) {
		.solved .scale {
			animation: none;
		}
	}

	@keyframes pulse {
		50% {
			transform: scale(0.8);
		}
	}
</style>
