export const getPuzzle = ({ size = 5, pattern, values, minimum = 1 }) => {
	const valuesArray =
		values ||
		Array(4)
			.fill()
			.map((_, i) => i + 1);

	const { length: valuesLength } = valuesArray;

	let patternArray = pattern;
	if (!patternArray) {
		do {
			patternArray = Array(3)
				.fill()
				.map((_) => valuesArray[Math.floor(Math.random() * valuesLength)]);
		} while (patternArray.join('') === [...patternArray].reverse().join(''));
	}

	const { length: patternLength } = patternArray;

	const directions = [
		{ column: 0, row: -1 },
		{ column: 1, row: -1 },
		{ column: 1, row: 0 },
		{ column: 1, row: 1 },
		{ column: 0, row: 1 },
		{ column: -1, row: 1 },
		{ column: -1, row: 0 },
		{ column: -1, row: -1 }
	].map(({ row, column }) =>
		Array(patternLength - 1)
			.fill()
			.map((_, i) => {
				const offset = i + 1;
				return { row: row * offset, column: column * offset };
			})
	);

	let solutions;
	let candidates;
	let grid = [];
	const [patternFirstValue] = patternArray;

	do {
		solutions = [];
		candidates = [];

		grid = Array(size)
			.fill()
			.map((_, row) =>
				Array(size)
					.fill()
					.map((_, column) => {
						const value = valuesArray[Math.floor(Math.random() * valuesLength)];

						if (value === patternFirstValue) {
							candidates.push({ row, column });
						}

						return {
							row,
							column,
							value
						};
					})
			);

		for (const { row: rowCandidate, column: columnCandidate } of candidates) {
			for (const offsets of directions) {
				let hasPattern = true;
				const coordinates = [{ row: rowCandidate, column: columnCandidate }];

				for (let i = 0; i < offsets.length; i++) {
					const { row: rowOffset, column: columnOffset } = offsets[i];
					const row = rowCandidate + rowOffset;
					const column = columnCandidate + columnOffset;

					coordinates.push({ row, column });

					if (
						row < 0 ||
						row >= size ||
						column < 0 ||
						column >= size ||
						grid[row][column].value !== patternArray[i + 1]
					) {
						hasPattern = false;
						break;
					}
				}

				if (hasPattern) {
					const { row: rowStart, column: columnStart } = coordinates[0];
					const { row: rowEnd, column: columnEnd } = coordinates[coordinates.length - 1];
					solutions.push({ rowStart, columnStart, rowEnd, columnEnd, coordinates });
				}
			}
		}
	} while (solutions.length < minimum);

	return { grid, solutions, pattern: patternArray };
};
