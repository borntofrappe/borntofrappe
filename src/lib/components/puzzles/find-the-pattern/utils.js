export const getPuzzle = ({ size = 5, pattern, values, minimum = 1 }) => {
	const arrayValues =
		values ||
		Array(4)
			.fill()
			.map((_, i) => i + 1);

	const { length: lengthValues } = arrayValues;

	let arrayPattern = pattern;
	if (!arrayPattern) {
		do {
			arrayPattern = Array(3)
				.fill()
				.map((_) => arrayValues[Math.floor(Math.random() * lengthValues)]);
		} while (arrayPattern.join('') === [...arrayPattern].reverse().join(''));
	}

	const { length: lengthPattern } = arrayPattern;

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
		Array(lengthPattern - 1)
			.fill()
			.map((_, i) => {
				const offset = i + 1;
				return { row: row * offset, column: column * offset };
			})
	);

	let solutions;
	let candidates;
	let grid = [];
	const [firstValuePattern] = arrayPattern;

	do {
		solutions = [];
		candidates = [];

		grid = Array(size)
			.fill()
			.map((_, row) =>
				Array(size)
					.fill()
					.map((_, column) => {
						const value = arrayValues[Math.floor(Math.random() * lengthValues)];

						if (value === firstValuePattern) {
							candidates.push({ row, column });
						}

						return {
							row,
							column,
							value
						};
					})
			);

		for (const { row: candidateRow, column: candidateColumn } of candidates) {
			for (const offsets of directions) {
				let hasPattern = true;
				const coordinates = [{ row: candidateRow, column: candidateColumn }];

				for (let i = 0; i < offsets.length; i++) {
					const { row: offsetRow, column: offsetColumn } = offsets[i];
					const row = candidateRow + offsetRow;
					const column = candidateColumn + offsetColumn;

					coordinates.push({ row, column });

					if (
						row < 0 ||
						row >= size ||
						column < 0 ||
						column >= size ||
						grid[row][column].value !== arrayPattern[i + 1]
					) {
						hasPattern = false;
						break;
					}
				}

				if (hasPattern) {
					const { row: startRow, column: startColumn } = coordinates[0];
					const { row: endRow, column: endColumn } = coordinates[coordinates.length - 1];
					solutions.push({ startRow, startColumn, endRow, endColumn });
				}
			}
		}
	} while (solutions.length < minimum);

	return { pattern: arrayPattern, grid, solutions };
};
