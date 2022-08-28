<script>
	import { tweened } from 'svelte/motion';
	import { circInOut as easing } from 'svelte/easing';

	export let size = 3;
	export let colors = ['hsl(0, 68%, 67%)', 'hsl(54, 99%, 72%)', 'hsl(197, 87%, 73%)'];

	const thickness = 0.1;
	const strokeWidth = 0;
	const scale = 0.5;

	const width = size;
	const height = width / 2 + thickness + thickness;

	const hGrid = width / 2;
	const vGrid = hGrid / 2;

	const deckWidth = 1 * scale;
	const deckHeight = (1 / 2) * scale + thickness * scale * size ** 2;
	const viewBoxWidth = deckWidth + width + deckWidth;
	const viewBoxHeight = height;

	const defaultColor = colors[colors.length - 1];
	const deckStartColors = Math.random() > 0.5 ? [colors[0], colors[1]] : [colors[1], colors[0]];

	const decks = Array(2)
		.fill()
		.map((_, i) => {
			const deckStartColor = i === 0 ? deckStartColors[0] : deckStartColors[1];
			return Array(size % 2 === 0 ? size ** 2 : size ** 2 + 1)
				.fill()
				.map((_, j) => {
					let color;
					if (j % 2 === 0) {
						color = deckStartColor;
					} else {
						color = deckStartColor === colors[0] ? colors[1] : colors[0];
					}

					const x = i === 0 ? deckWidth / 2 : viewBoxWidth - deckWidth / 2;
					//   const y = height - j * thickness * scale;
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

	const tile = deck[deck.length - 1];
	const { x, y } = tile;

	let color = tile.color;
	deck = deck.slice(0, -1);

	const durations = {
		position: 200,
		reset: 100
	};

	const extraTile = tweened(
		{
			x,
			y
		},
		{ duration: durations.position, easing }
	);

	let isGameover = false;

	const updateGrid = ({ row, column }) => {
		grid[row][column].color = color;

		const tile = deck[deck.length - 1];
		if (tile) {
			const { x, y } = tile;
			extraTile.set({ x, y }, { duration: 0 });
			color = color === colors[0] ? colors[1] : colors[0];
			deck = deck.slice(0, -1);

			// TODO check if the game is first won

			const isFull = grid
				.reduce((acc, curr) => [...acc, ...curr], [])
				.every(({ color }) => color !== null);
			if (isFull) {
				isGameover = true;
			}
		}
	};

	const animateTile = async ({ x, y, row, column }) => {
		await extraTile.set({ x, y });
		updateGrid({ row, column });
	};

	const animateDeck = async (n = 0) => {
		const tileIndex = size % 2 === 0 ? size ** 2 - n - 1 : size ** 2 - n;
		if (tileIndex >= 0) {
			const deckTile = decks[deckIndex][n];
			const tile = deck[tileIndex];

			const { x: tileX, y: tileY, color: tileColor } = tile;
			extraTile.set({ x: tileX, y: tileY }, { duration: 0 });

			deck = [...deck.slice(0, tileIndex), ...deck.slice(tileIndex + 1)];

			color = tileColor;

			const { x, y } = deckTile;
			await extraTile.set({ x, y }, { duration: durations.reset });

			deck = [...deck, { x, y, color }];

			animateDeck(n + 1);
		} else {
			deck = deck.slice(0, -1);
			isGameover = false;
		}
	};

	const animateGrid = async (n = 0) => {
		const deckTile = decks[deckIndex][n];

		const tile =
			deckTile &&
			grid
				.reduce((acc, curr) => [...acc, ...curr], [])
				.find(({ color }) => color === deckTile.color);
		if (tile) {
			const { x: tileX, y: tileY, row, column, color: tileColor } = tile;

			extraTile.set({ x: tileX, y: tileY }, { duration: 0 });
			grid[row][column].color = null;

			color = tileColor;

			const { x, y } = deckTile;
			await extraTile.set({ x, y }, { duration: durations.reset });

			deck = [...deck, { x, y, color }];

			animateGrid(n + 1);
		} else {
			animateDeck(n);
		}
	};

	const handleReset = () => {
		const isOnDeck = $extraTile.x === decks[deckIndex][0].x;
		if (isOnDeck) {
			const { x, y } = $extraTile;
			deck = [...deck, { x, y, color }];
		}
		deckIndex = deckIndex === 0 ? 1 : 0;
		animateGrid();
	};
</script>

<svg
	viewBox="{(strokeWidth / 2) * -1} {(strokeWidth / 2) * -1} {viewBoxWidth +
		strokeWidth} {viewBoxHeight + strokeWidth}"
	class="focusable"
	style:outline="none"
	tabindex="0"
	aria-label={isGameover
		? 'The game is over, but you can both play a new round. Focus on the grid and press enter to clear the board.'
		: 'Position tiles in the grid to create a line with the same color. Focus on a tile and press enter to position the piece.'}
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
		<g>
			{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { x, y, column, row, color }}
				<g transform="translate({x} {y})">
					<use fill={defaultColor} href="#color-tiles-tile-grid" />
					{#if color}
						<use fill={color} href="#color-tiles-tile-color" />
					{:else}
						<g
							class="tile"
							on:click={() => {
								if (isGameover) return;

								animateTile({ x, y, column, row });
							}}
							style:outline="none"
							tabindex={isGameover ? -1 : 0}
							aria-label="Row {row} and column {column}. Color {color}"
							role="button"
							on:keydown={(e) => {
								if (isGameover) return;

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
				<g transform="translate({x} {y})">
					<use fill={color} href="#color-tiles-tile-color" />
				</g>
			{/each}
		</g>

		<g>
			<g transform="translate({$extraTile.x} {$extraTile.y})">
				<use fill={color} href="#color-tiles-tile-color" />
			</g>
		</g>
	</g>

	<g style:pointer-events="none" class="focus" opacity="0">
		<path
			fill={defaultColor}
			d="M {deckWidth} {vGrid + thickness} l 0 {thickness} {hGrid} {vGrid} {hGrid} {vGrid *
				-1} 0 {thickness * -1} {hGrid * -1} {vGrid}z"
		/>
	</g>

	{#if isGameover}
		<g
			on:click={() => {
				handleReset();
			}}
			style:outline="none"
			class="focusable"
			tabindex="0"
			aria-label="Reset game."
			role="button"
			on:keydown={(e) => {
				const { key } = e;
				if (key === 'Enter') {
					e.preventDefault();
					handleReset();
				}
			}}
		>
			<path
				opacity="0"
				style:cursor="pointer"
				d="M {deckWidth + width / 2} {thickness} l {hGrid} {vGrid} 0 {thickness} {hGrid *
					-1} {vGrid} {hGrid * -1} {vGrid * -1} 0 {thickness * -1}z"
			/>

			<g style:pointer-events="none" class="focus" opacity="0">
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

	.focusable:focus > .focus {
		opacity: 1;
	}
	.focusable:not(:focus-visible):focus > .focus {
		opacity: 0;
	}

	.tile {
		cursor: pointer;
	}

	.focus,
	.tile:hover,
	.tile:focus {
		filter: brightness(1.25);
	}
</style>
