<script>
	import { tweened } from 'svelte/motion';
	import { circInOut as easing } from 'svelte/easing';

	export let size = 3;
	export let colors = ['hsl(0, 68%, 67%)', 'hsl(54, 99%, 72%)', 'hsl(197, 87%, 73%)'];

	const h = 10;
	const w = h * 2;
	const d = 4;
	const strokeWidth = 0;

	const whitespaceX = w;
	const whitespaceY = 0;

	const gridWidth = w * 2 * size;
	const gridHeight = h * 2 * size;

	const viewBoxWidth = gridWidth + strokeWidth + whitespaceX * 2;
	const viewBoxHeight = gridHeight + strokeWidth + d + whitespaceY * 2;
	const viewBoxX = (viewBoxWidth / 2) * -1;
	const viewBoxY = ((strokeWidth + whitespaceY * 2) / 2) * -1;

	const defaultColor = colors[colors.length - 1];
	const deckColors = Math.random() > 0.5 ? [colors[0], colors[1]] : [colors[1], colors[0]];

	const grid = Array(size)
		.fill()
		.map((_, row) =>
			Array(size)
				.fill()
				.map((_, column) => {
					const x = w * row * -1 + w * column;
					const y = h - d + h * row + h * column;
					return {
						x,
						y,
						column,
						row,
						color: null
					};
				})
		);

	const decks = Array(2)
		.fill()
		.map((_, i) => {
			const deckColor = i === 0 ? deckColors[0] : deckColors[1];
			return Array(size % 2 === 0 ? size ** 2 : size ** 2 + 1)
				.fill()
				.map((_, j) => {
					let color;
					if (j % 2 === 0) {
						color = deckColor;
					} else {
						color = deckColor === colors[0] ? colors[1] : colors[0];
					}

					const x =
						i === 0
							? (gridWidth / 2) * -1 + w / 2 - whitespaceX
							: gridWidth / 2 - w / 2 + whitespaceX;
					const y = gridHeight - (j * d) / 2 - h / 2;

					return {
						x,
						y,
						color
					};
				});
		});

	let iDeck = Math.floor(Math.random() * decks.length);
	let deck = [...decks[iDeck]];

	const tile = deck[deck.length - 1];
	const { x, y } = tile;
	let color = tile.color;

	deck = deck.slice(0, -1);

	const duration = 200;

	const extraTile = tweened(
		{
			x,
			y
		},
		{ duration, easing }
	);

	const updateGrid = ({ row, column }) => {
		grid[row][column].color = color;

		const tile = deck[deck.length - 1];

		if (tile) {
			const { x, y } = tile;
			extraTile.set({ x, y }, { duration: 0 });
			color = color === colors[0] ? colors[1] : colors[0];
			deck = deck.slice(0, -1);
		}
	};

	const updateTile = async ({ x, y, row, column }) => {
		await extraTile.set({ x, y });
		updateGrid({ row, column });
	};
</script>

<svg
	viewBox="{viewBoxX} {viewBoxY} {viewBoxWidth} {viewBoxHeight}"
	class="focusable"
	style:outline="none"
	tabindex="0"
	aria-label="Position tiles in the grid to create a line with the same color. Focus on a tile and press enter to position the piece."
>
	<defs>
		<g id="color-tiles-grid-tile">
			<g transform="translate(0 {h * -1 + d})">
				<path stroke="none" d="M 0 0 l {w} {h} 0 {d} {w * -1} {h} {w * -1} {h * -1} 0 {d * -1}z" />
				<path
					fill="black"
					stroke="none"
					opacity="0.3"
					d="M {w * -1} {h} l {w} {h} {w} {h * -1} 0 {d} {w * -1} {h} {w * -1} {h * -1}z"
				/>
				<path
					fill="none"
					d="M {w * -1} {h} l {w} {h} {w} {h * -1} 0 {d} {w * -1} {h} {w * -1} {h * -1} 0 {d *
						-1} {w} {h * -1} {w} {h}"
				/>
			</g>
		</g>
		<use id="color-tiles-color-tile" href="#color-tiles-grid-tile" transform="scale(0.5)" />
	</defs>
	<g
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linejoin="round"
		stroke-linecap="round"
	>
		{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { x, y, column, row, color }}
			<g transform="translate({x} {y})">
				<use href="#color-tiles-grid-tile" fill={defaultColor} />
				<g>
					{#if color}
						<use href="#color-tiles-color-tile" fill={color} />
					{:else}
						<g
							class="tile"
							on:click={() => {
								updateTile({ x, y, column, row });
							}}
							style:outline="none"
							tabindex="0"
							aria-label="Row {row} and column {column}. Color {color}"
							role="button"
							on:keydown={(e) => {
								const { key } = e;
								if (key === 'Enter') {
									e.preventDefault();
									updateTile({ x, y, column, row });
								}
							}}
						>
							<use href="#color-tiles-grid-tile" fill={defaultColor} />
						</g>
					{/if}
				</g>
			</g>
		{/each}
	</g>

	<g style:pointer-events="none" class="focus" opacity="0">
		<path
			fill={defaultColor}
			d="M {(gridWidth / 2) * -1} {gridHeight / 2} l 0 {d} {gridWidth / 2} {gridHeight /
				2} {gridWidth / 2} {(gridHeight / 2) * -1} 0 {d * -1} {(gridWidth / 2) * -1} {gridHeight /
				2}z"
		/>
	</g>

	<g stroke="currentColor" stroke-width={strokeWidth}>
		{#each deck as { x, y, color: fill }}
			<g transform="translate({x} {y})">
				<use href="#color-tiles-color-tile" {fill} />
			</g>
		{/each}
	</g>

	<g stroke="currentColor" stroke-width={strokeWidth}>
		<g transform="translate({$extraTile.x} {$extraTile.y})">
			<use href="#color-tiles-color-tile" fill={color} />
		</g>
	</g>
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
