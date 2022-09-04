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

export const getPuzzle = ({ size = 4 }) => {
	const values = Array(size)
		.fill()
		.map((_, i) => i + 1);

	const { length: valuesLength } = values;

	const grid = Array(size)
		.fill()
		.map((_, row) =>
			Array(size)
				.fill()
				.map((_, column) => values[Math.floor(Math.random() * valuesLength)])
		);

	return { grid };
};
