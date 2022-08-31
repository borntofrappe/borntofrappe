import { writable } from 'svelte/store';

export const createTimer = () => {
	const { subscribe, set } = writable(0);

	let interval;

	return {
		subscribe,
		start: () => {
			set(0);
			const date = new Date();
			interval = setInterval(() => {
				set(Math.floor((new Date().valueOf() - date.valueOf()) / 1000));
			}, 1000);
		},
		stop: () => {
			clearInterval(interval);
		},
		reset: () => {
			clearInterval(interval);
			set(0);
		}
	};
};

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
	constructor({ columns = 10, rows = 10, mines = 10, empty = null }) {
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

		let targets = [];

		if (empty) {
			const { row: emptyRow, column: emptyColumn } = empty;

			let indexes = shuffle(
				Array(columns * rows)
					.fill()
					.map((_, i) => i)
			);

			while (targets.length < mines) {
				const i = indexes.pop();
				const row = Math.floor(i / columns);
				const column = i % columns;

				if (row === emptyRow && column === emptyColumn) continue;

				let wouldHaveNumber = false;

				for (const { row: offsetRow, column: offsetColumn } of offsetsNeighbors) {
					const neighborRow = row + offsetRow;
					const neighborColumn = column + offsetColumn;
					if (neighborRow === emptyRow && neighborColumn === emptyColumn) {
						wouldHaveNumber = true;
						break;
					}
				}

				if (wouldHaveNumber) continue;

				targets.push({ row, column });
			}
		} else {
			targets = shuffle(
				Array(columns * rows)
					.fill()
					.map((_, i) => i)
			)
				.slice(0, mines)
				.map((i) => ({
					row: Math.floor(i / columns),
					column: i % columns
				}));
		}

		const grid = Array(rows)
			.fill()
			.map((_, row) =>
				Array(columns)
					.fill()
					.map((_, column) => {
						const isRevealed = false;
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
		this.offsetsNeighbors = offsetsNeighbors;
	}
}
