export const getPuzzle = ({ size = 5, pattern, values }) => {
	const pValues =
		values ||
		Array(4)
			.fill()
			.map((_, i) => i + 1);

	const { length } = pValues;

	console.log(pValues);

	let pPattern = pattern;
	if (!pPattern) {
		do {
			pPattern = Array(3)
				.fill()
				.map((_) => pValues[Math.floor(Math.random() * length)]);
		} while (pPattern.join('') === [...pPattern].reverse().join(''));
	}

	console.log(pPattern);
	const grid = Array(size)
		.fill()
		.map((_, row) =>
			Array(size)
				.fill()
				.map((_, column) => ({
					row,
					column,
					value: pValues[Math.floor(Math.random() * length)]
				}))
		);

	return { grid, pattern: pPattern };
};
