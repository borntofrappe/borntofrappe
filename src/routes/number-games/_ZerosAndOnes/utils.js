const binaryBoards = {
	2: [
		[
			[0, 0, 1, 1],
			[0, 1, 0, 1],
			[1, 0, 1, 0],
			[1, 1, 0, 0]
		],
		[
			[1, 1, 0, 0],
			[1, 0, 1, 0],
			[0, 1, 0, 1],
			[0, 0, 1, 1]
		],
		[
			[0, 1, 1, 0],
			[0, 0, 1, 1],
			[1, 0, 0, 1],
			[1, 1, 0, 0]
		],
		[
			[1, 0, 1, 0],
			[0, 1, 0, 1],
			[0, 1, 1, 0],
			[1, 0, 0, 1]
		],
		[
			[1, 1, 0, 0],
			[1, 0, 1, 0],
			[0, 0, 1, 1],
			[0, 1, 0, 1]
		]
	],
	3: [
		[
			[0, 0, 1, 0, 1, 1],
			[0, 0, 1, 1, 0, 1],
			[1, 1, 0, 1, 0, 0],
			[1, 0, 1, 0, 1, 0],
			[0, 1, 0, 1, 0, 1],
			[1, 1, 0, 0, 1, 0]
		],
		[
			[0, 1, 0, 1, 0, 1],
			[1, 0, 1, 1, 0, 0],
			[1, 1, 0, 0, 1, 0],
			[0, 0, 1, 1, 0, 1],
			[1, 0, 1, 0, 1, 0],
			[0, 1, 0, 0, 1, 1]
		],
		[
			[1, 1, 0, 1, 0, 0],
			[1, 0, 1, 0, 0, 1],
			[0, 1, 0, 1, 1, 0],
			[0, 1, 1, 0, 1, 0],
			[1, 0, 0, 1, 0, 1],
			[0, 0, 1, 0, 1, 1]
		],
		[
			[1, 0, 0, 1, 1, 0],
			[1, 0, 1, 0, 0, 1],
			[0, 1, 0, 0, 1, 1],
			[0, 1, 0, 1, 1, 0],
			[1, 0, 1, 1, 0, 0],
			[0, 1, 1, 0, 0, 1]
		],
		[
			[1, 0, 1, 0, 1, 0],
			[0, 1, 0, 0, 1, 1],
			[1, 0, 0, 1, 0, 1],
			[0, 1, 1, 0, 1, 0],
			[1, 1, 0, 1, 0, 0],
			[0, 0, 1, 1, 0, 1]
		]
	],
	4: [
		[
			[1, 1, 0, 0, 1, 1, 0, 0],
			[0, 1, 0, 0, 1, 1, 0, 1],
			[0, 0, 1, 1, 0, 0, 1, 1],
			[1, 0, 0, 1, 1, 0, 1, 0],
			[0, 1, 1, 0, 0, 1, 0, 1],
			[0, 1, 1, 0, 1, 0, 0, 1],
			[1, 0, 0, 1, 0, 1, 1, 0],
			[1, 0, 1, 1, 0, 0, 1, 0]
		],
		[
			[0, 1, 1, 0, 0, 1, 0, 1],
			[1, 0, 1, 0, 0, 1, 0, 1],
			[1, 0, 0, 1, 1, 0, 1, 0],
			[0, 1, 0, 1, 1, 0, 0, 1],
			[1, 0, 1, 0, 0, 1, 1, 0],
			[0, 1, 0, 1, 0, 0, 1, 1],
			[1, 0, 1, 0, 1, 1, 0, 0],
			[0, 1, 0, 1, 1, 0, 1, 0]
		],
		[
			[1, 0, 1, 0, 1, 0, 0, 1],
			[0, 0, 1, 1, 0, 1, 1, 0],
			[0, 1, 0, 1, 0, 1, 1, 0],
			[1, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 1, 0, 0, 1, 1, 0],
			[0, 1, 0, 1, 0, 1, 0, 1],
			[0, 1, 1, 0, 1, 0, 0, 1],
			[1, 0, 0, 1, 1, 0, 1, 0]
		],
		[
			[1, 0, 0, 1, 0, 1, 1, 0],
			[1, 0, 0, 1, 1, 0, 0, 1],
			[0, 1, 1, 0, 0, 1, 0, 1],
			[1, 1, 0, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 1, 1, 0, 1],
			[0, 0, 1, 1, 0, 1, 1, 0],
			[1, 1, 0, 0, 1, 0, 0, 1],
			[0, 1, 1, 0, 1, 0, 1, 0]
		],
		[
			[1, 0, 1, 0, 1, 0, 0, 1],
			[1, 1, 0, 1, 0, 1, 0, 0],
			[0, 1, 1, 0, 1, 0, 1, 0],
			[0, 0, 1, 1, 0, 1, 0, 1],
			[1, 0, 0, 1, 0, 0, 1, 1],
			[1, 1, 0, 0, 1, 0, 1, 0],
			[0, 0, 1, 0, 1, 1, 0, 1],
			[0, 1, 0, 1, 0, 1, 1, 0]
		]
	]
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
	constructor({ n = 3, reveal = 8 } = {}) {
		if (!binaryBoards[n])
			throw new Error(
				`\`n\` not supported. Value must be one of the following: ${Object.keys(binaryBoards).join(
					', '
				)}.`
			);

		const size = n * 2;

		const values = Array(size)
			.fill()
			.map((_, i) => (i % 2 === 0 ? 0 : 1));

		const triplicates = new RegExp(/(.)\1{2}/);
		const sequence = `(.\{${size}\})\\1`;
		const duplicates = new RegExp(sequence);

		let board = [];
		let counter = 0;
		let tries = 5;
		const threshold = 500;
		while (board.length < size) {
			counter++;
			if (counter > threshold) {
				counter = 0;
				board = [];

				tries--;
				if (tries === 0) {
					board = binaryBoards[n][Math.floor(Math.random() * binaryBoards[n].length)];
					break;
				}
			}

			const row = shuffle(values);
			const sequence = row.join('');
			if (triplicates.test(sequence)) continue;
			if (board.length > 0 && board.find((d) => d.join('') === sequence)) continue;

			if (
				board.length >= 2 &&
				Array(size)
					.fill()
					.map((_, i) =>
						Array(3)
							.fill()
							.map((_, j) => [...board, row][board.length - j][i])
							.join('')
					)
					.find((d) => {
						return triplicates.test(d);
					})
			) {
				continue;
			}

			if (
				board.length > n &&
				Array(size)
					.fill()
					.map((_, i) =>
						Array(board.length + 1)
							.fill()
							.map((_, j) => [...board, row][board.length - j][i])
							.join('')
					)
					.find((d) => {
						return (
							(d.match(/0/g) && d.match(/0/g).length > n) ||
							(d.match(/1/g) && d.match(/1/g).length > n)
						);
					})
			) {
				continue;
			}

			if (
				board.length === size - 1 &&
				duplicates.test(
					Array(size)
						.fill()
						.map((_, i) =>
							Array(size)
								.fill()
								.map((_, j) => [...board, row][board.length - j][i])
								.join('')
						)
						.join('')
				)
			) {
				continue;
			}

			board.push(row);
		}

		let locks = [];

		if (reveal > 0) {
			locks = shuffle(
				Array(size ** 2)
					.fill()
					.map((_, i) => i)
			).slice(0, reveal);
		}

		const grid = board.reduce(
			(acc, curr, r) => [
				...acc,
				curr.map((d, c) => {
					const i = r * size + c;
					const locked = locks.includes(i);
					return {
						d,
						n: locked ? d : null,
						locked
					};
				})
			],
			[]
		);

		this.size = size;
		this.grid = grid;
		this.counter = counter;
	}
}
