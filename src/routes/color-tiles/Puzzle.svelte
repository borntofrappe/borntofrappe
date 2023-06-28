<script>
	import { tweened } from 'svelte/motion';
	import { circInOut as easing } from 'svelte/easing';

	export let size = 3;
	export let colors = ['hsl(5 79% 71%)', 'hsl(50 85% 76%)', 'hsl(185 62% 45%)'];

	const durations = {
		position: 200,
		reset: 100
	};

	const thickness = 0.1;
	const strokeWidth = 0;
	const scale = 0.5;

	const width = size;
	const height = width / 2 + thickness * 2;

	const hGrid = width / 2;
	const vGrid = hGrid / 2;

	const deckWidth = 1 * scale;
	const deckHeight = (1 / 2) * scale + thickness * scale * size ** 2;
	const viewBoxWidth = deckWidth + width + deckWidth;
	const viewBoxHeight = height;

	const defaultColor = colors[colors.length - 1];
	const deckStartColors = Math.random() > 0.5 ? [colors[0], colors[1]] : [colors[1], colors[0]];

	const deckSize = size % 2 === 0 ? size ** 2 : size ** 2 + 1;

	const decks = Array(2)
		.fill()
		.map((_, i) => {
			const deckStartColor = i === 0 ? deckStartColors[0] : deckStartColors[1];
			const deckOtherColor = deckStartColor === colors[0] ? colors[1] : colors[0];
			return Array(deckSize)
				.fill()
				.map((_, j) => {
					const color = j % 2 === 0 ? deckStartColor : deckOtherColor;

					const x = i === 0 ? deckWidth / 2 : viewBoxWidth - deckWidth / 2;
					const y = height - j * thickness * scale - 0.25 * scale;

					return {
						x,
						y,
						color
					};
				});
		});

	const grid = Array(size)
		.fill()
		.map((_, row) => {
			return Array(size)
				.fill()
				.map((_, column) => {
					const x = column * 0.5 - row * 0.5 + (-0.5 + width / 2) + 0.5 + deckWidth;
					const y = column * 0.25 + row * 0.25 + thickness + 0.25;

					return {
						x,
						y,
						column,
						row,
						color: null
					};
				});
		});

	let deckIndex = Math.floor(Math.random() * decks.length);
	let deck = [...decks[deckIndex]];

	const latestTile = deck[deck.length - 1];

	let color = latestTile.color;
	const { x, y } = latestTile;

	const tile = tweened(
		{
			x,
			y
		},
		{ duration: durations.position, easing }
	);

	deck = deck.slice(0, -1);

	let isGameOver = false;
	const gameOverCount = Math.min(4, size);
	let gameOverTiles = [];

	const getWinningTiles = (tiles) => {
		if (tiles.length < gameOverCount) return [];

		let winningColor;
		let winningCount = 0;
		const winningTiles = [];

		for (let i = 0; i < tiles.length; i++) {
			const { color } = tiles[i];
			if (color && color === winningColor) {
				winningCount++;
			} else {
				if (winningCount >= gameOverCount) {
					winningTiles.push(
						...Array(winningCount)
							.fill()
							.map((_, j) => tiles[i - j - 1])
					);
				} else if (tiles.length - i < gameOverCount) {
					return [];
				}

				winningColor = color;
				winningCount = 1;
			}
		}

		if (winningCount >= gameOverCount) {
			winningTiles.push(
				...Array(winningCount)
					.fill()
					.map((_, j) => tiles[tiles.length - j - 1])
			);
		}

		return winningTiles;
	};

	const updateGrid = ({ row, column }) => {
		grid[row][column].color = color;

		const latestTile = deck[deck.length - 1];
		if (latestTile) {
			const { x, y } = latestTile;
			tile.set({ x, y }, { duration: 0 });
			color = color === colors[0] ? colors[1] : colors[0];
			deck = deck.slice(0, -1);

			const winningTiles = [];

			const rowStart = Math.max(0, row - gameOverCount + 1);
			const rowEnd = Math.min(size - 1, row + gameOverCount - 1);
			const columnStart = Math.max(0, column - gameOverCount + 1);
			const columnEnd = Math.min(size - 1, column + gameOverCount - 1);

			winningTiles.push(
				...getWinningTiles(
					Array(rowEnd - rowStart + 1)
						.fill()
						.map((_, i) => grid[rowStart + i][column])
				)
			);

			winningTiles.push(
				...getWinningTiles(
					Array(columnEnd - columnStart + 1)
						.fill()
						.map((_, i) => grid[row][columnStart + i])
				)
			);

			const diagonalOffsetStart = Math.min(column - columnStart, row - rowStart);
			const diagonalOffsetEnd = Math.min(columnEnd - column, rowEnd - row);

			winningTiles.push(
				...getWinningTiles(
					Array(diagonalOffsetStart + diagonalOffsetEnd + 1)
						.fill()
						.map((_, i) => {
							const offset = i - diagonalOffsetStart;
							return grid[row + offset][column + offset];
						})
				)
			);

			const antiDiagonalOffsetStart = Math.min(column - columnStart, rowEnd - row);
			const antiDiagonalOffsetEnd = Math.min(columnEnd - column, row - rowStart);

			winningTiles.push(
				...getWinningTiles(
					Array(antiDiagonalOffsetStart + antiDiagonalOffsetEnd + 1)
						.fill()
						.map(
							(_, i) =>
								grid[row + antiDiagonalOffsetStart - i][column - antiDiagonalOffsetStart + i]
						)
				)
			);

			if (winningTiles.length > 0) {
				isGameOver = true;
				gameOverTiles = [...winningTiles];
			} else {
				const isGameTied = grid
					.reduce((acc, curr) => [...acc, ...curr], [])
					.every(({ color }) => color !== null);
				if (isGameTied) {
					isGameOver = true;
				}
			}
		} else {
			const isGameTied = grid
				.reduce((acc, curr) => [...acc, ...curr], [])
				.every(({ color }) => color !== null);
			if (isGameTied) {
				isGameOver = true;
			}
		}
	};

	const animateTile = async ({ x, y, row, column }) => {
		await tile.set({ x, y });
		updateGrid({ row, column });
	};

	const animateDeck = async (n = 0) => {
		const tileIndex = size % 2 === 0 ? size ** 2 - n - 1 : size ** 2 - n;
		if (tileIndex >= 0) {
			const deckTile = decks[deckIndex][n];
			const latestTile = deck[tileIndex];

			const { x: latestTileX, y: latestTileY, color: latestTileColor } = latestTile;
			tile.set({ x: latestTileX, y: latestTileY }, { duration: 0 });

			deck = [...deck.slice(0, tileIndex), ...deck.slice(tileIndex + 1)];

			color = latestTileColor;

			const { x, y } = deckTile;
			await tile.set({ x, y }, { duration: durations.reset });

			deck = [...deck, { x, y, color }];

			animateDeck(n + 1);
		} else {
			deck = deck.slice(0, -1);
			isGameOver = false;
		}
	};

	const animateGrid = async (n = 0) => {
		const deckTile = decks[deckIndex][n];

		const gridTile =
			deckTile &&
			grid
				.reduce((acc, curr) => [...acc, ...curr], [])
				.find(({ color }) => color === deckTile.color);
		if (gridTile) {
			const { x: gridTileX, y: gridTileY, row, column, color: gridTileColor } = gridTile;

			tile.set({ x: gridTileX, y: gridTileY }, { duration: 0 });
			grid[row][column].color = null;

			color = gridTileColor;

			const { x, y } = deckTile;
			await tile.set({ x, y }, { duration: durations.reset });

			deck = [...deck, { x, y, color }];

			animateGrid(n + 1);
		} else {
			animateDeck(n);
		}
	};

	const handleReset = () => {
		const isOnDeck = $tile.x === decks[deckIndex][0].x;
		if (isOnDeck) {
			const { x, y } = $tile;
			deck = [...deck, { x, y, color }];
		}
		deckIndex = deckIndex === 0 ? 1 : 0;
		gameOverTiles = [];
		animateGrid();
	};
</script>

<svg
	viewBox="{(strokeWidth / 2) * -1} {(strokeWidth / 2) * -1} {viewBoxWidth +
		strokeWidth} {viewBoxHeight + strokeWidth}"
	class="focusable"
	role="menu"
	tabindex="0"
	aria-label={isGameOver
		? 'The game is over, but you can both play a new round. Focus on the grid and press enter to start with a new deck.'
		: 'Place your tiles in a colorful line. Focus on a spot and press enter to position the tile on the specific column and row.'}
>
	<defs>
		<g id="color-tiles-tile-grid">
			<g transform="translate(-0.5 -0.25)">
				<path
					stroke="none"
					d="M 0.5 0 l 0.5 0.25 0 {thickness} -0.5 0.25 -0.5 -0.25 0 {thickness * -1}z"
				/>
				<path
					fill="black"
					stroke="none"
					opacity="0.3"
					d="M 1 0.25 l 0 {thickness} -0.5 0.25 -0.5 -0.25 0 {thickness * -1} 0.5 0.25z"
				/>
				<path
					fill="none"
					d="M 0 0.25 l 0 {thickness} 0.5 0.25 0.5 -0.25 0 {thickness *
						-1} -0.5 0.25 -0.5 -0.25 0.5 -0.25 0.5 0.25 m -0.5 0.25 0 {thickness}"
				/>
			</g>
		</g>
		<use
			id="color-tiles-tile-color"
			href="#color-tiles-tile-grid"
			transform="translate(0 {thickness * scale * -1}) scale({scale})"
		/>
	</defs>
	<g stroke="currentColor" stroke-width={strokeWidth} stroke-linejoin="round">
		<g role="group">
			{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { x, y, column, row, color }}
				<g transform="translate({x} {y})">
					<g
						style:animation-delay="{(row + column) % 2 === 0 ? 0 : 0.1}s"
						class:blink={gameOverTiles.some((tile) => tile.column === column && tile.row === row)}
					>
						<use fill={defaultColor} href="#color-tiles-tile-grid" />
					</g>
					{#if color}
						<use fill={color} href="#color-tiles-tile-color" />
					{:else}
						<g
							class="tile"
							on:click={() => {
								if (isGameOver) return;

								animateTile({ x, y, column, row });
							}}
							tabindex={isGameOver ? '-1' : '0'}
							aria-label="Position tile color {color} on row {row} and column {column}."
							role="menuitem"
							on:keydown={(e) => {
								if (isGameOver) return;

								const { key } = e;
								if (key === 'Enter') {
									e.preventDefault();
									animateTile({ x, y, column, row });
								}
							}}
						>
							<use fill={defaultColor} href="#color-tiles-tile-grid" />
						</g>
					{/if}
				</g>
			{/each}
		</g>

		<g>
			{#each deck as { x, y, color }}
				<use {x} {y} fill={color} href="#color-tiles-tile-color" />
			{/each}
		</g>

		<g>
			<g transform="translate({$tile.x} {$tile.y})">
				<use fill={color} href="#color-tiles-tile-color" />
			</g>
		</g>
	</g>

	<g style="pointer-events: none;" class="focus" opacity="0">
		<path
			fill={defaultColor}
			d="M {deckWidth} {vGrid + thickness} l 0 {thickness} {hGrid} {vGrid} {hGrid} {vGrid *
				-1} 0 {thickness * -1} {hGrid * -1} {vGrid}z"
		/>
	</g>

	{#if isGameOver}
		<g
			on:click|once={() => {
				handleReset();
			}}
			class="focusable"
			tabindex="0"
			aria-label="Press enter to clear the board and play a new round."
			role="menuitem"
			on:keydown|once={(e) => {
				const { key } = e;
				if (key === 'Enter') {
					e.preventDefault();
					handleReset();
				}
			}}
		>
			<path
				opacity="0"
				style="cursor: pointer;"
				d="M {deckWidth + width / 2} {thickness} l {hGrid} {vGrid} 0 {thickness} {hGrid *
					-1} {vGrid} {hGrid * -1} {vGrid * -1} 0 {thickness * -1}z"
			/>

			<g style="pointer-events: none;" class="focus" opacity="0">
				<path
					fill={defaultColor}
					d="M {deckWidth} {vGrid + thickness} l 0 {thickness} {hGrid} {vGrid} {hGrid} {vGrid *
						-1} 0 {thickness * -1} {hGrid * -1} {vGrid}z"
				/>
			</g>
		</g>
	{/if}
</svg>

<style>
	svg {
		display: block;
	}

	.focusable:focus {
		outline: none;
	}

	.focusable:focus > .focus {
		opacity: 1;
		filter: brightness(1.25);
	}

	.focusable:not(:focus-visible):focus > .focus {
		opacity: 0;
	}

	.tile {
		cursor: pointer;
	}

	.tile:focus {
		outline: none;
	}

	.tile:hover,
	.tile:focus {
		filter: brightness(1.25);
	}

	.blink {
		animation: blink 0.25s 8 steps(2);
		filter: brightness(1.25);
	}

	@keyframes blink {
		100% {
			filter: brightness(1);
		}
	}
</style>
