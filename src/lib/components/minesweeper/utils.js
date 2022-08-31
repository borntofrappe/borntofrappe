const shuffle = (array) => {
	const a = [...array];
	let counter = a.length;

	while (counter > 0) {
		let index = Math.floor(Math.random() * counter);

		counter--;

		let temp = a[counter];

		a[counter] = a[index];
		a[index] = temp;
	}

	return a;
};

export class Puzzle {
	constructor({ columns = 10, rows = 10, mines = 10 }) {
		const offsetsNeighbors = [
			{ row: -1, column: 0 },
			{ row: -1, column: 1 },
			{ row: 0, column: 1 },
			{ row: 1, column: 1 },
			{ row: 1, column: 0 },
			{ row: 1, column: -1 },
			{ row: 0, column: -1 },
			{ row: -1, column: -1 }
		];

		const targets = shuffle(
			Array(columns * rows)
				.fill()
				.map((_, i) => i)
		)
			.slice(0, mines)
			.map((i) => ({
				row: Math.floor(i / columns),
				column: i % columns
			}));

		const grid = Array(rows)
			.fill()
			.map((_, row) =>
				Array(columns)
					.fill()
					.map((_, column) => {
						const isRevealed = true;
						const state = targets.find((target) => target.column === column && target.row === row)
							? 'mine'
							: 0;

						return {
							row,
							column,
							isRevealed,
							state
						};
					})
			);

		for (const { row: targetRow, column: targetColumn } of targets) {
			for (const { row: offsetRow, column: offsetColumn } of offsetsNeighbors) {
				const row = targetRow + offsetRow;
				const column = targetColumn + offsetColumn;

				if (grid[row] && grid[row][column] && grid[row][column].state !== 'mine') {
					grid[row][column].state++;
				}
			}
		}

		this.columns = columns;
		this.rows = rows;
		this.grid = grid;
	}
}
