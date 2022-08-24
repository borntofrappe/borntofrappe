const getColorHsl = ({ h = 0, s = 0.9, l = 0.6 } = {}) => `hsl(${h}, ${s * 100}%, ${l * 100}%)`;

const getColorHsv = ({ h = 0, s = 0.55, v = 0.92 } = {}) => {
	const l = v * (1 - s / 2);
	const sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
	return `hsl(${h}, ${sl * 100}%, ${l * 100}%)`;
};

export const getPuzzle = ({ size, index, moves }) => {
	const n = size * 2 - 1;

	const hiddenRow = Math.floor(index / size);
	const hiddenColumn = index % size;

	const dr = Math.max(size - hiddenRow - 1, hiddenRow);
	const dc = Math.max(size - hiddenColumn - 1, hiddenColumn);
	const dn = dr + dc;

	const colors = [];

	const duration = 0.75;

	const grid = Array(size)
		.fill()
		.map((_, row) => {
			colors[row] = [];
			return Array(size)
				.fill()
				.map((_, column) => {
					const color = getColorHsv({ h: (360 * (column + row)) / n });
					colors[row][column] = color;

					const delay =
						duration -
						(duration * (Math.abs(row - hiddenRow) + Math.abs(column - hiddenColumn))) / dn;

					return {
						row,
						column,
						color,
						hidden: false,
						animation: {
							duration,
							delay
						}
					};
				});
		});

	const offsets = [
		{ row: -1, column: 0 },
		{ row: 0, column: 1 },
		{ row: 1, column: 0 },
		{ row: 0, column: -1 }
	];

	let nextOffsets = [...offsets];

	grid[hiddenRow][hiddenColumn].hidden = true;
	const hiddenTile = {
		row: hiddenRow,
		column: hiddenColumn
	};

	for (let i = 0; i < moves; i++) {
		const { row: hiddenRow, column: hiddenColumn } = hiddenTile;

		const availableOffsets = nextOffsets.filter(
			({ row, column }) => grid[hiddenRow + row] && grid[hiddenRow + row][hiddenColumn + column]
		);
		const { row: neighborRow, column: neighborColumn } =
			availableOffsets[Math.floor(Math.random() * availableOffsets.length)];

		const row = hiddenRow + neighborRow;
		const column = hiddenColumn + neighborColumn;

		grid[row][column].row = hiddenRow;
		grid[row][column].column = hiddenColumn;
		grid[hiddenRow][hiddenColumn].row = row;
		grid[hiddenRow][hiddenColumn].column = column;

		[grid[row][column], grid[hiddenRow][hiddenColumn]] = [
			grid[hiddenRow][hiddenColumn],
			grid[row][column]
		];

		hiddenTile.row = row;
		hiddenTile.column = column;

		nextOffsets = [...offsets].filter(
			({ row, column }) => row !== neighborRow * -1 || column !== neighborColumn * -1
		);
	}

	while (hiddenRow !== hiddenTile.row) {
		const { row, column } = hiddenTile;
		const offset = hiddenRow - row > 0 ? 1 : -1;
		const offsetRow = row + offset;

		grid[offsetRow][column].row = row;
		grid[row][column].row = offsetRow;

		[grid[offsetRow][column], grid[row][column]] = [grid[row][column], grid[offsetRow][column]];

		hiddenTile.row = offsetRow;
	}

	while (hiddenColumn !== hiddenTile.column) {
		const { row, column } = hiddenTile;
		const offset = hiddenColumn - column > 0 ? 1 : -1;
		const offsetColumn = column + offset;

		grid[row][offsetColumn].column = column;
		grid[row][column].column = offsetColumn;

		[grid[row][offsetColumn], grid[row][column]] = [grid[row][column], grid[row][offsetColumn]];

		hiddenTile.column = offsetColumn;
	}

	let isSolved = true;
	for (let row = 0; row < grid.length; row++) {
		if (!isSolved) break;
		for (let column = 0; column < grid[row].length; column++) {
			if (grid[row][column].color !== colors[row][column]) {
				isSolved = false;
				break;
			}
		}
	}

	if (isSolved) {
		const { row: hiddenRow, column: hiddenColumn } = hiddenTile;

		const availableOffsets = offsets.filter(
			({ row, column }) => grid[hiddenRow + row] && grid[hiddenRow + row][hiddenColumn + column]
		);
		const { row: neighborRow, column: neighborColumn } =
			availableOffsets[Math.floor(Math.random() * availableOffsets.length)];

		const row = hiddenRow + neighborRow;
		const column = hiddenColumn + neighborColumn;

		grid[row][column].row = hiddenRow;
		grid[row][column].column = hiddenColumn;
		grid[hiddenRow][hiddenColumn].row = row;
		grid[hiddenRow][hiddenColumn].column = column;

		[grid[row][column], grid[hiddenRow][hiddenColumn]] = [
			grid[hiddenRow][hiddenColumn],
			grid[row][column]
		];

		hiddenTile.row = row;
		hiddenTile.column = column;
	}

	return { grid, hiddenTile, colors };
};
