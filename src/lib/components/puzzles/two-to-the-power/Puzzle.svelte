<script>
	import { circInOut as easing } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	import Tile from '../Tile.svelte';
	import { scale } from './utils.js';

	export let size = 5;
	export let power = 9;

	let state = 'play';
	const maxValue = 2 ** power;

	const tween = tweened(0, { easing });

	let id = 0;
	const tiles = Array(size ** 2)
		.fill()
		.map((_, i) => ({
			row: Math.floor(i / size),
			column: i % size
		}));

	const getCell = (grid) => {
		const availableTiles = tiles.filter(({ column, row }) =>
			grid.every((cell) => cell.column !== column || cell.row !== row)
		);

		const { row, column } = availableTiles[Math.floor(Math.random() * availableTiles.length)];
		const value = Math.random() > 0.5 ? 2 : 4;

		return {
			row,
			column,
			value,
			id: id++
		};
	};

	let grid = [];
	for (let i = 0; i < 2; i++) {
		grid = [...grid, getCell(grid)];
	}

	const addCell = () => {
		grid = [...grid, getCell(grid)];
	};

	const handleSlide = async (direction = 'left') => {
		if (state !== 'play') return;

		state = 'slide';

		const dimension = direction === 'up' || direction === 'down' ? 'column' : 'row';
		const oppositeDimension = dimension === 'row' ? 'column' : 'row';
		const dimensionEnd = `${dimension}End`;
		const oppositeDimensionEnd = `${oppositeDimension}End`;

		const ascendingOrder = direction === 'down' || direction === 'right';

		const sections = grid.reduce((acc, curr, i) => {
			const section = curr[dimension];
			if (!acc[section]) acc[section] = [];

			acc[section].push({ ...curr, i });

			return acc;
		}, {});

		const { cells, remove, add } = Object.values(sections).reduce(
			(acc, curr) => {
				let v = 0;
				const section = [];
				const cells = [];

				const currCells = ascendingOrder
					? [...curr].sort((a, b) => b[oppositeDimension] - a[oppositeDimension])
					: [...curr].sort((a, b) => a[oppositeDimension] - b[oppositeDimension]);

				for (const cell of currCells) {
					const { value } = cell;

					if (value === v) {
						const { id } = section[section.length - 1];
						const sectionEnd = section[section.length - 1][oppositeDimensionEnd];

						const sectionCell = { ...cell };
						sectionCell[oppositeDimensionEnd] = sectionEnd;
						cells.push(sectionCell);

						acc.remove.push(cell.id, id);

						const addCell = { ...cell, value: value + v };
						addCell[oppositeDimension] = sectionEnd;
						acc.add.push(addCell);
						v = 0;
					} else {
						const sectionEnd = ascendingOrder ? size - section.length - 1 : section.length;
						const sectionCell = { ...cell };
						sectionCell[oppositeDimensionEnd] = sectionEnd;
						section.push(sectionCell);
						cells.push(sectionCell);
						v = value;
					}
				}

				acc.cells.push(
					...cells.map((cell) => {
						const accCell = { ...cell };
						accCell[dimensionEnd] = cell[dimension];
						return accCell;
					})
				);

				return acc;
			},
			{
				cells: [],
				add: [],
				remove: []
			}
		);

		if (
			cells.some(({ row, rowEnd, column, columnEnd }) => row !== rowEnd || column !== columnEnd)
		) {
			await tween.set(1, {
				interpolate: (from, to) => (t) => {
					const value = (to - from) * t;
					cells.forEach(({ row, rowEnd, column, columnEnd, i }) => {
						grid[i].row = rowEnd + (row - rowEnd) * (1 - value);
						grid[i].column = columnEnd + (column - columnEnd) * (1 - value);
					});
					return value;
				}
			});

			cells.forEach(({ rowEnd, columnEnd, i }) => {
				grid[i].row = rowEnd;
				grid[i].column = columnEnd;
			});

			tween.set(0, { duration: 0 });

			remove.forEach((id) => {
				const i = grid.findIndex((cell) => cell.id === id);
				grid = [...grid.slice(0, i), ...grid.slice(i + 1)];
			});

			add.forEach(({ column, row, value }) => {
				grid = [
					...grid,
					{
						column,
						row,
						value,
						id: id++
					}
				];
			});
			addCell();

			if (add.some(({ value }) => value === maxValue)) {
				state = 'win';
			} else if (grid.length === size ** 2) {
				const nestedGrid = Array(size)
					.fill()
					.map((_, row) =>
						Array(size)
							.fill()
							.map((_, column) => 0)
					);

				grid.forEach(({ column, row, value }) => {
					nestedGrid[row][column] = value;
				});

				let canMove = false;
				const offsets = [
					{ row: -1, column: 0 },
					{ row: 0, column: 1 },
					{ row: 1, column: 0 },
					{ row: 0, column: -1 }
				];

				for (let row = 0; row < nestedGrid.length; row++) {
					if (canMove) break;
					for (let column = 0; column < nestedGrid[row].length; column++) {
						const value = nestedGrid[row][column];
						if (
							offsets.some(({ row: rowOffset, column: columnOffset }) => {
								const rowEnd = row + rowOffset;
								const columnEnd = column + columnOffset;
								return (
									nestedGrid[rowEnd] &&
									nestedGrid[rowEnd][columnEnd] &&
									nestedGrid[rowEnd][columnEnd] === value
								);
							})
						) {
							canMove = true;
							break;
						}
					}
				}

				if (canMove) {
					state = 'play';
				} else {
					state = 'loss';
				}
			} else {
				//
				state = 'play';
			}
		} else {
			state = 'play';
		}
	};

	const moves = [
		{
			direction: 'up',
			char: '↑',
			quadrant: 0,
			key: 'ArrowUp'
		},
		{
			direction: 'left',
			char: '←',
			quadrant: 3,
			key: 'ArrowLeft'
		},
		{
			direction: 'down',
			char: '↓',
			quadrant: 2,
			key: 'ArrowDown'
		},
		{
			direction: 'right',
			char: '→',
			quadrant: 1,
			key: 'ArrowRight'
		}
	];

	const descriptions = {
		win: `Congrats, you reached the grand value of ${maxValue}!`,
		loss: 'Unfortunately, there are no moves left...'
	};

	const handleReset = () => {
		const smallestId = Math.min(...grid.map(({ id }) => id));
		if (smallestId > 0) {
			id = 0;
		}

		state = 'play';

		grid = [];
		for (let i = 0; i < 2; i++) {
			grid = [...grid, getCell(grid)];
		}
	};
</script>

<div>
	<svg
		viewBox="-0.5 -0.5 {size} {size + 1}"
		tabindex="0"
		aria-labelledby="title-two-to-the-power desc-two-to-the-power"
		style:outline="none"
		class="focusable"
		on:keydown={(e) => {
			const { key } = e;
			if (key === 'r' || key === 'R') {
				e.preventDefault();
				handleReset();
			} else {
				const move = moves.find((move) => move.key === key);
				if (move) {
					e.preventDefault();
					handleSlide(move.direction);
				}
			}
		}}
	>
		<title id="title-two-to-the-power">Two to the Power</title>
		<desc id="desc-two-to-the-power"
			>{descriptions[state] ||
				`Slide the tiles and combine them together to reach ${maxValue}. Press one of the arrow keys to
			move the tiles in the matching direction.`} Press the "r" key to reset the puzzle and start anew.</desc
		>

		<g class="focus" opacity="0" transform="translate(-0.5 0.5)">
			<rect
				width={size}
				height={size}
				rx="0.2"
				fill="var(--color-focus, hsl(345, 13%, 94%))"
				opacity="0.25"
			/>
		</g>

		<g>
			<g transform="translate(-0.34 -0.34)">
				<Tile
					tile="var(--color-tile, hsl(8, 92%, 90%))"
					shadow="var(--color-shadow, hsl(6, 98%, 80%))"
					text="var(--color-focus, hsl(345, 13%, 94%))"
					outline="var(--color-text, hsl(19, 56%, 12%))"
					width={0.68}
					height={0.68}
					char={2}
				/>
			</g>
			<g transform="translate(1 0)">
				<g transform="translate(-0.34 -0.34)">
					<Tile
						tile="var(--color-tile, hsl(8, 92%, 90%))"
						shadow="var(--color-shadow, hsl(6, 98%, 80%))"
						text="var(--color-focus, hsl(345, 13%, 94%))"
						outline="var(--color-text, hsl(19, 56%, 12%))"
						width={0.5}
						height={0.5}
						char={power}
					/>
				</g>
			</g>

			{#if state === 'win'}
				<g transform="translate({size - 0.5} 0)">
					<g in:scale>
						<g transform="translate(-0.34 -0.34)">
							<Tile
								tile="var(--color-tile, hsl(8, 92%, 90%))"
								shadow="var(--color-shadow, hsl(6, 98%, 80%))"
								text="var(--color-focus, hsl(345, 13%, 94%))"
								outline="var(--color-text, hsl(19, 56%, 12%))"
								width={0.68}
								height={0.68}
								char={maxValue}
							/>
						</g>
					</g>
				</g>
			{/if}
		</g>

		<g transform="translate(0 1)">
			<g>
				{#each tiles as { column, row }}
					<g transform="translate({column} {row})">
						<g
							class:solved={state === 'win'}
							style="animation-duration: 0.6s; animation-delay: {(row + column) % 2 ? 0 : 0.18}s"
							opacity="0"
						>
							<circle r="0.5" fill="var(--color-focus, hsl(345, 13%, 94%))" opacity="0.25" />
						</g>
						<g transform="translate(-0.34 -0.34)">
							<Tile
								tile="var(--color-focus, hsl(345, 13%, 94%))"
								shadow="var(--color-shadow, hsl(6, 98%, 80%))"
								text="var(--color-focus, hsl(345, 13%, 94%))"
								outline="var(--color-text, hsl(19, 56%, 12%))"
								width={0.68}
								height={0.68}
								char=""
							/>
						</g>
					</g>
				{/each}
			</g>

			<g>
				{#each grid as { row, column, value, id } (id)}
					<g transform="translate({column} {row})">
						<g in:scale>
							<g transform="translate(-0.34 -0.34)">
								<Tile
									tile="var(--color-tile, hsl(8, 92%, 90%))"
									shadow="var(--color-shadow, hsl(6, 98%, 80%))"
									text="var(--color-focus, hsl(345, 13%, 94%))"
									outline={state === 'loss'
										? 'var(--color-issue, hsl(342, 82%, 47%))'
										: 'var(--color-text, hsl(19, 56%, 12%))'}
									width={0.68}
									height={0.68}
									char={value.toString()}
								/>
							</g>
						</g>
					</g>
				{/each}
			</g>
		</g>

		<g transform="translate({size / 2} {size / 2})">
			{#each moves as { direction, quadrant }}
				<g transform="rotate({quadrant * 90})">
					<g
						style:cursor="pointer"
						on:click={() => {
							handleSlide(direction);
						}}
					>
						<path opacity="0" d="M 0 0 l {(size / 2) * -1} {(size / 2) * -1} h {size}z" />
					</g>
				</g>
			{/each}
		</g>
	</svg>

	<section>
		{#each moves as { direction, char }}
			<button
				disabled={state === 'win' || state === 'loss'}
				style:cursor={state === 'win' || state === 'loss' ? 'initial' : 'pointer'}
				on:click={() => {
					handleSlide(direction);
				}}
			>
				<span class="visually-hidden">Slide the tiles {direction}.</span>
				<Tile
					tile="var(--color-tile, hsl(8, 92%, 90%))"
					shadow="var(--color-shadow, hsl(6, 98%, 80%))"
					text="var(--color-focus, hsl(345, 13%, 94%))"
					outline="var(--color-text, hsl(19, 56%, 12%))"
					{char}
				/>
			</button>
		{/each}

		<button
			style:cursor="pointer"
			on:click={() => {
				handleReset();
			}}
		>
			<span class="visually-hidden">Reset the puzzle to start from scratch.</span>
			<Tile
				tile="var(--color-focus, hsl(345, 13%, 94%))"
				shadow="var(--color-shadow, hsl(6, 98%, 80%))"
				text="var(--color-focus, hsl(345, 13%, 94%))"
				outline="var(--color-text, hsl(19, 56%, 12%))"
				char=""
			/>
		</button>
	</section>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div > * + * {
		margin-top: 0.5em;
	}

	div > svg {
		display: block;
	}

	.focusable:focus > .focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) > .focus {
		opacity: 0;
	}

	section {
		max-width: 100%;
		display: flex;
		gap: 0 1rem;
		overflow-x: auto;
		padding: 0.5rem 1rem;
	}

	section button {
		flex-shrink: 0;
	}

	section::-webkit-scrollbar {
		height: 0.25rem;
	}

	section::-webkit-scrollbar-track {
		background: var(--color-shadow, hsl(6, 98%, 80%));
		border-radius: 0.25rem;
	}

	section::-webkit-scrollbar-thumb {
		background: var(--color-tile, hsl(8, 92%, 90%));
		border-radius: 0.25rem;
	}

	button {
		width: 3rem;
		height: 3rem;
		display: block;
		border: none;
		background: none;
		padding: 0;
		margin: 0;
	}

	button > :global(svg) {
		width: 100%;
		height: auto;
		display: block;
	}

	button {
		position: relative;
		z-index: 0;
	}

	button::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		background: var(--color-focus, hsl(345, 13%, 94%));
		transform: translate(-50%, -50%) scale(1.25);
		border-radius: 50%;
		opacity: 0;
		z-index: -1;
	}

	button:focus {
		outline: none;
	}

	button:focus::before {
		opacity: 0.25;
	}

	button:focus:not(:focus-visible)::before {
		opacity: 0;
	}

	.solved {
		animation: flash 5 cubic-bezier(0.37, 0, 0.63, 1);
	}

	@keyframes flash {
		50% {
			opacity: 1;
		}
	}
</style>
