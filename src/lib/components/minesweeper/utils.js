export class Puzzle {
	constructor({ columns = 10, rows = 10 }) {
		const grid = Array(rows)
			.fill()
			.map((_, row) =>
				Array(columns)
					.fill()
					.map((_, column) => {
						return {
							row,
							column
						};
					})
			);

		this.columns = columns;
		this.rows = rows;
		this.grid = grid;
	}
}
