export const getNumber = () => (Math.random() > 0.5 ? 2 : 4);

export const getEmptyCell = (grid) => {
	const emptyCells = grid
		.reduce((acc, curr) => [...acc, ...curr], [])
		.filter(({ value }) => value === 0);

	if (emptyCells.length === 0) return false;

	return shuffle(emptyCells)[0];
};

export const checkGameWon = (grid, winCondition) =>
	grid.reduce((acc, curr) => [...acc, ...curr], []).some(({ value }) => value === winCondition);

export const checkGameLost = (grid) => {
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[r].length; c++) {
			if (grid[r][c].value === 0) {
				return false;
			}

			if (r < grid.length - 1 && grid[r][c].value === grid[r + 1][c].value) {
				return false;
			}

			if (c < grid[r].length - 1 && grid[r][c].value === grid[r][c + 1].value) {
				return false;
			}
		}
	}

	return true;
};

export const shuffle = (array) => {
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
	constructor() {
		const size = 4;
		const grid = Array(size)
			.fill()
			.map((_, row) =>
				Array(size)
					.fill()
					.map((_, column) => ({
						row,
						column,
						value: 0
					}))
			);

		const { column: c1, row: r1 } = getEmptyCell(grid);
		let c2, r2;
		do {
			const { column, row } = getEmptyCell(grid);
			c2 = column;
			r2 = row;
		} while (c1 === c2 && r1 === r2);

		for (const [r, c] of [
			[r1, c1],
			[r2, c2]
		]) {
			grid[r][c].value = getNumber();
		}

		this.grid = grid;
		this.score = 0;
		this.size = size;
	}
}
