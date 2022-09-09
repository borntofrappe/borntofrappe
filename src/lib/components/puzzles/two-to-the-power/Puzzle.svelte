<script>
	import Tile from '../Tile.svelte';
	import { scale } from './utils.js';

	export let size = 5;

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
</script>

<button on:click={addCell}>Add</button>

<svg viewBox="-0.5 -0.5 {size} {size}">
	<g>
		{#each tiles as { column, row }}
			<g transform="translate({column} {row})">
				<g transform="translate(-0.35 -0.35)">
					<Tile
						tile="var(--color-focus, hsl(345, 13%, 94%))"
						shadow="var(--color-shadow, hsl(6, 98%, 80%))"
						text="var(--color-focus, hsl(345, 13%, 94%))"
						outline="var(--color-text, hsl(19, 56%, 12%))"
						width={0.7}
						height={0.7}
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
					<g transform="translate(-0.35 -0.35)">
						<Tile
							tile="var(--color-tile, hsl(8, 92%, 90%))"
							shadow="var(--color-shadow, hsl(6, 98%, 80%))"
							text="var(--color-focus, hsl(345, 13%, 94%))"
							outline="var(--color-text, hsl(19, 56%, 12%))"
							width={0.7}
							height={0.7}
							char={value.toString()}
						/>
					</g>
				</g>
			</g>
		{/each}
	</g>
</svg>
