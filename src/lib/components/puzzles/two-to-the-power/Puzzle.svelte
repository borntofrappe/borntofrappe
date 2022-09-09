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

	const handleSlide = async (direction = 'left') => {
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
		}
	};
</script>

{#each ['up', 'right', 'down', 'left'] as direction}
	<button
		on:click={() => {
			handleSlide(direction);
		}}>{direction}</button
	>
{/each}

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
