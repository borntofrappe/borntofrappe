export class Puzzle {
	constructor({ columns = 10, rows = 10 }) {
		const grid = Array(rows)
			.fill()
			.map((_, row) =>
				Array(columns)
					.fill()
					.map((_, column) => {
						const isRevealed = Math.random() > 0.5;
						const state = Math.random() > 0.8 ? 'mine' : Math.floor(Math.random() * 9);

						return {
							row,
							column,
							isRevealed,
							state
						};
					})
			);

		this.columns = columns;
		this.rows = rows;
		this.grid = grid;
	}
}
