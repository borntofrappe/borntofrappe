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

export const getPuzzle = ({ size = 3 }) => {
	/*
      1  2  3  6 
      4  5  6 15
      7  8  9 24
     12 15 18

     [[1, 2, 3, 6]],
     [[4, 5, 6, 15]],
     [[7, 8, 9, 24]],
     [[12, 15, 18]],
    */
	const grid = shuffle(
		Array(size ** 2)
			.fill()
			.map((_, i) => i + 1)
	).reduce((acc, curr, i) => {
		if (i % size === 0) acc.push([]);

		acc[acc.length - 1].push(curr);

		if (acc[acc.length - 1].length % size === 0) {
			acc[acc.length - 1].push(acc[acc.length - 1].reduce((acc, curr) => acc + curr, 0));

			if (acc.length === size) {
				acc.push(
					Array(size)
						.fill()
						.map((_, j) =>
							Array(size)
								.fill()
								.map((_, z) => acc[z][j])
								.reduce((acc, curr) => acc + curr, 0)
						)
				);
			}
		}

		return acc;
	}, []);

	const numbers = grid.slice(0, size).map((d) => d.slice(0, size));
	const columns = [...grid[size]];
	const rows = grid.reduce(
		(acc, curr) => (curr.length === size + 1 ? [...acc, curr[curr.length - 1]] : [...acc]),
		[]
	);

	return { numbers, columns, rows };
};
