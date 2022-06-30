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

export class Puzzle {
	constructor({ size = 4, reveal = 0, relate = 0 } = {}) {
		if (!latinSquares[size])
			throw new Error(
				`\`size\` not supported. Value must be one of the following: ${Object.keys(
					latinSquares
				).join(', ')}.`
			);

		const values = Array(size)
			.fill()
			.map((_, i) => i + 1);

		const repeats = new RegExp(/(.)(.+)?\1/);
		const duplicates = new RegExp(/(.)\1/g);

		let latinSquare = [];
		let counter = 0;
		const threshold = 3000;
		while (latinSquare.length < size) {
			counter++;
			if (counter > threshold) {
				latinSquare = latinSquares[size][Math.floor(Math.random() * latinSquares[size].length)];
				break;
			}

			const row = shuffle(values);
			if (latinSquare.length > 0 && latinSquare.find((d) => d.join('') === row.join(''))) {
				latinSquare = [];
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

		let locks = [];
		let connections = [];

		if (reveal > 0) {
			locks = shuffle(
				Array(size ** 2)
					.fill()
					.map((_, i) => i)
			).slice(0, reveal);
		}

		if (relate > 0) {
			let nLinks = relate;
			const maxLinks = Math.max(0, size ** 2 - reveal);
			if (nLinks > maxLinks) {
				console.warn(
					`\`relate\` not respected considering the number of available spots. Value limited to ${maxLinks}`
				);
				nLinks = maxLinks;
			}

			const neighbors = [
				[-1, 0],
				[0, 1],
				[1, 0],
				[0, -1]
			];

			const links = [];

			while (links.length < nLinks) {
				const c = Math.floor(Math.random() * size);
				const r = Math.floor(Math.random() * size);
				const availableNeighbors = neighbors.filter(
					([nr, nc]) => latinSquare[r + nr] && latinSquare[r + nr][c + nc]
				);
				const [dr, dc] = availableNeighbors[Math.floor(Math.random() * availableNeighbors.length)];

				const i = r * size + c;
				const direction = neighbors.findIndex(([nr, nc]) => nr === dr && nc === dc);

				const ni = (r + dr) * size + (c + dc);
				const ndirection = neighbors.findIndex(([nr, nc]) => nr === dr * -1 && nc === dc * -1);

				if (
					!locks.includes(i) &&
					!links.find(
						(link) =>
							(link[0] === i && link[1].direction === direction) ||
							(link[0] === ni && link[1].direction === ndirection)
					)
				) {
					const sense = latinSquare[r][c] > latinSquare[r + dr][c + dc] ? 1 : -1;
					links.push([
						i,
						{
							direction,
							sense,
							neighbor: [dr, dc]
						}
					]);
				}
			}

			connections = links.reduce((acc, [i, link]) => {
				if (acc[i]) {
					acc[i].push(link);
				} else {
					acc[i] = [link];
				}
				return acc;
			}, {});
		}

		const grid = latinSquare.reduce(
			(acc, curr, r) => [
				...acc,
				curr.map((d, c) => {
					const i = r * size + c;
					const locked = locks.includes(i);
					const relations = connections[i] || [];
					return {
						d,
						n: locked ? d : 0,
						locked,
						relations
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
