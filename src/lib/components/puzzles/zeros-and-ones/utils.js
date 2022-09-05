export const getPuzzle = ({ size = 3 }) => {
	const grid = Array(size ** 2)
		.fill()
		.map((_, i) => {
			const value = Math.random() > 0.5 ? 1 : 0;
			const row = Math.floor(i / size);
			const column = i % size;

			return {
				row,
				column,
				value
			};
		});

	return { grid };
};
