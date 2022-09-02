export const getPuzzle = ({ size = 5, values = 4 }) => {
	const grid = Array(size)
		.fill()
		.map((_, row) =>
			Array(size)
				.fill()
				.map((_, column) => ({
					row,
					column,
					value: Math.floor(Math.random() * values) + 1
				}))
		);

	return { grid };
};
