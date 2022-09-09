<script>
	import { circInOut as easing } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	import Tile from '../Tile.svelte';
	import { scale } from './utils.js';

	export let size = 5;

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

	const handleShift = async () => {
		const rows = grid.reduce((acc, curr, i) => {
			const { row } = curr;
			if (!acc[row]) acc[row] = [];

			acc[row] = [...acc[row], { ...curr, i }].sort((a, b) => a.column - b.column);

			return acc;
		}, {});

		const { cells, remove, add } = Object.values(rows).reduce(
			(acc, curr) => {
				let v = 0;
				const row = [];
				const cells = [];
				for (const cell of curr) {
					const { value } = cell;

					if (value === v) {
						const { columnEnd, id } = row[row.length - 1];

						cells.push({ ...cell, columnEnd });
						acc.remove.push(cell.id, id);
						acc.add.push({
							...cell,
							column: columnEnd,
							value: value + v
						});
						v = 0;
					} else {
						const columnEnd = row.length;
						row.push({ ...cell, columnEnd });
						cells.push({ ...cell, columnEnd });
						v = value;
					}
				}

				acc.cells.push(...cells);

				return acc;
			},
			{
				cells: [],
				add: [],
				remove: []
			}
		);

		if (cells.some(({ column, columnEnd }) => column !== columnEnd)) {
			await tween.set(1, {
				interpolate: (from, to) => (t) => {
					const value = (to - from) * t;
					cells.forEach(({ column, columnEnd, i }) => {
						grid[i].column = columnEnd + (column - columnEnd) * (1 - value);
					});
					return value;
				}
			});

			cells.forEach(({ columnEnd, i }) => {
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
		}
	};
</script>

<button on:click={handleShift}>Slide (to the left)</button>

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
