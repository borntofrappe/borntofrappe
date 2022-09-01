export const getPuzzle = ({ size, index, moves }) => {
	const values = [];
	let value = 0;

	const grid = Array(size)
		.fill()
		.map((_, row) => {
			values[row] = [];
			return Array(size)
				.fill()
				.map((_, column) => {
					values[row][column] = ++value;

					return {
						row,
						column,
						value,
						hidden: false
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

	const hiddenRow = Math.floor(index / size);
	const hiddenColumn = index % size;

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
			if (grid[row][column].value !== values[row][column]) {
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

	return { grid, hiddenTile, values };
};
