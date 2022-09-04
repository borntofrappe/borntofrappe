const latinSquares = {
	3: [
		[
			[3, 2, 1],
			[1, 3, 2],
			[2, 1, 3]
		],
		[
			[3, 2, 1],
			[1, 3, 2],
			[2, 1, 3]
		],
		[
			[3, 1, 2],
			[2, 3, 1],
			[1, 2, 3]
		],
		[
			[2, 1, 3],
			[3, 2, 1],
			[1, 3, 2]
		],
		[
			[2, 3, 1],
			[1, 2, 3],
			[3, 1, 2]
		]
	],
	4: [
		[
			[1, 4, 2, 3],
			[4, 3, 1, 2],
			[3, 2, 4, 1],
			[2, 1, 3, 4]
		],
		[
			[4, 1, 2, 3],
			[3, 2, 1, 4],
			[1, 4, 3, 2],
			[2, 3, 4, 1]
		],
		[
			[2, 1, 4, 3],
			[4, 3, 2, 1],
			[1, 2, 3, 4],
			[3, 4, 1, 2]
		],
		[
			[2, 4, 1, 3],
			[1, 3, 2, 4],
			[3, 2, 4, 1],
			[4, 1, 3, 2]
		],
		[
			[4, 2, 1, 3],
			[2, 3, 4, 1],
			[3, 1, 2, 4],
			[1, 4, 3, 2]
		]
	],
	5: [
		[
			[5, 3, 1, 4, 2],
			[1, 5, 2, 3, 4],
			[4, 2, 5, 1, 3],
			[3, 1, 4, 2, 5],
			[2, 4, 3, 5, 1]
		],
		[
			[5, 3, 4, 2, 1],
			[1, 4, 5, 3, 2],
			[2, 5, 1, 4, 3],
			[4, 2, 3, 1, 5],
			[3, 1, 2, 5, 4]
		],
		[
			[2, 5, 3, 1, 4],
			[3, 2, 4, 5, 1],
			[1, 4, 2, 3, 5],
			[4, 1, 5, 2, 3],
			[5, 3, 1, 4, 2]
		],
		[
			[3, 5, 4, 2, 1],
			[5, 3, 2, 1, 4],
			[4, 1, 5, 3, 2],
			[1, 2, 3, 4, 5],
			[2, 4, 1, 5, 3]
		],
		[
			[3, 1, 2, 5, 4],
			[5, 2, 3, 4, 1],
			[1, 3, 4, 2, 5],
			[4, 5, 1, 3, 2],
			[2, 4, 5, 1, 3]
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

export const getPuzzle = ({ size = 4, reveal = 0, relate = 0 }) => {
	if (!latinSquares[size])
		throw new Error(
			`\`size\` not supported. Value must be one of the following: ${Object.keys(latinSquares).join(
				', '
			)}.`
		);

	const numbers = Array(size)
		.fill()
		.map((_, i) => i + 1);

	const repeats = new RegExp(/(.)(.+)?\1/);
	const duplicates = new RegExp(/(.)\1/g);

	let latinSquare = [];
	let counter = 0;
	const threshold = 1000;

	while (latinSquare.length < size) {
		counter++;
		if (counter > threshold) {
			latinSquare = latinSquares[size][Math.floor(Math.random() * latinSquares[size].length)];
			break;
		}

		const row = shuffle(numbers);

		if (latinSquare.length > 0 && latinSquare.find((d) => d.join('') === row.join(''))) {
			continue;
		}

		if (
			latinSquare.length > 0 &&
			Array(size)
				.fill()
				.map((_, i) =>
					Array(latinSquare.length + 1)
						.fill()
						.map((_, j) => [...latinSquare, row][latinSquare.length - j][i])
						.join('')
				)
				.find((d) => repeats.test(d))
		) {
			continue;
		}

		if (
			latinSquare.length === size - 1 &&
			duplicates.test(
				Array(size)
					.fill()
					.map((_, i) =>
						Array(size)
							.fill()
							.map((_, j) => [...latinSquare, row][latinSquare.length - j][i])
							.join('')
					)
					.join('')
			)
		) {
			continue;
		}

		latinSquare.push(row);
	}

	let hints = [];
	if (reveal > 0) {
		hints = shuffle(
			Array(size ** 2)
				.fill()
				.map((_, i) => i)
		)
			.slice(0, reveal)
			.map((i) => {
				const row = Math.floor(i / size);
				const column = i % size;
				return {
					row,
					column
				};
			});
	}

	let connections = [];
	if (relate > 0) {
		let numberConnections = relate;
		const maxNumberConnections = Math.max(0, size ** 2 - reveal);
		if (numberConnections > maxNumberConnections) {
			console.warn(
				`\`relate\` not respected considering the number of available spots. Value limited to ${maxNumberConnections}`
			);
			numberConnections = maxNumberConnections;
		}

		const offsets = [
			{ row: -1, column: 0 },
			{ row: 0, column: 1 },
			{ row: 1, column: 0 },
			{ row: 0, column: -1 }
		];

		while (connections.length < numberConnections) {
			const column = Math.floor(Math.random() * size);
			const row = Math.floor(Math.random() * size);

			const availableOffsets = offsets.filter(
				({ row: rowOffset, column: columnOffset }) =>
					latinSquare[row + rowOffset] && latinSquare[row + rowOffset][column + columnOffset]
			);

			const { row: rowOffset, column: columnOffset } =
				availableOffsets[Math.floor(Math.random() * availableOffsets.length)];

			const direction = offsets.findIndex(
				(offset) => offset.row === rowOffset && offset.column === columnOffset
			);

			const rowNeighbor = row + rowOffset;
			const columnNeighbor = column + columnOffset;

			const areBothRevealed =
				hints.some((hint) => hint.row === row && hint.column === column) &&
				hints.some((hint) => hint.row === rowNeighbor && hint.column === columnNeighbor);
			if (!areBothRevealed) {
				const sign = latinSquare[row][column] > latinSquare[rowNeighbor][columnNeighbor] ? 1 : -1;
				connections.push({
					row,
					column,
					direction,
					sign,
					neighbor: { row: rowNeighbor, column: columnNeighbor }
				});
			}
		}
	}

	const grid = latinSquare.map((section, row) =>
		section.map((number, column) => {
			const isLocked = hints.some((hint) => hint.row === row && hint.column === column);
			const relations = connections.filter(
				(connection) => connection.row === row && connection.column === column
			);
			return {
				number,
				value: isLocked ? number : 0,
				isLocked,
				relations
			};
		})
	);

	return { grid };
};
