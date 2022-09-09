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

export const getPuzzle = ({ copies = 3, reveal = 7 }) => {
	if (!binaryBoards[copies])
		throw new Error(
			`\`copies\` argument not supported. Value must be one of the following: ${Object.keys(
				binaryBoards
			).join(', ')}.`
		);

	const size = copies * 2;

	const values = Array(size)
		.fill()
		.map((_, i) => (i % 2 === 0 ? 0 : 1));

	const triplicates = new RegExp(/(.)\1{2}/);
	const duplicates = new RegExp(`(.\{${size}\})\\1`);

	let binaryBoard = [];
	let counter = 0;
	let attemps = 3;
	const threshold = 500;

	while (binaryBoard.length < size) {
		counter++;
		if (counter >= threshold) {
			counter = 0;
			binaryBoard = [];
			attemps--;
			if (attemps === 0) {
				binaryBoard = binaryBoards[copies][Math.floor(Math.random() * binaryBoards[copies].length)];
				break;
			}
		}

		const row = shuffle(values);
		const sequence = row.join('');

		if (triplicates.test(sequence)) continue;

		if (binaryBoard.length > 0 && binaryBoard.find((d) => d.join('') === sequence)) continue;

		if (
			binaryBoard.length >= 2 &&
			Array(size)
				.fill()
				.map((_, i) =>
					Array(3)
						.fill()
						.map((_, j) => [...binaryBoard, row][binaryBoard.length - j][i])
						.join('')
				)
				.find((d) => {
					return triplicates.test(d);
				})
		) {
			continue;
		}

		if (
			binaryBoard.length > copies &&
			Array(size)
				.fill()
				.map((_, i) =>
					Array(binaryBoard.length + 1)
						.fill()
						.map((_, j) => [...binaryBoard, row][binaryBoard.length - j][i])
						.join('')
				)
				.find((d) => {
					return (
						(d.match(/0/g) && d.match(/0/g).length > copies) ||
						(d.match(/1/g) && d.match(/1/g).length > copies)
					);
				})
		) {
			continue;
		}

		if (
			binaryBoard.length === size - 1 &&
			duplicates.test(
				Array(size)
					.fill()
					.map((_, i) =>
						Array(size)
							.fill()
							.map((_, j) => [...binaryBoard, row][binaryBoard.length - j][i])
							.join('')
					)
					.join('')
			)
		) {
			continue;
		}

		binaryBoard.push(row);
	}

	const hints =
		reveal > 0
			? shuffle(
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
					})
			: [];

	const grid = binaryBoard.map((section, row) =>
		section.map((number, column) => {
			const isLocked = hints.some((hint) => hint.row === row && hint.column === column);

			return {
				row,
				column,
				number,
				value: isLocked ? number : null,
				isLocked
			};
		})
	);

	return { grid, size };
};
