export class Puzzle {
	constructor({ size = 5, n = 4, p = 3, s = 1 } = {}) {
		const nLength = Math.min(size, n);
		const pLength = Math.min(size, p);
		const sLength = Math.max(1, s);

		const numbers = Array(nLength)
			.fill()
			.map((_, i) => i + 1);

		let pattern;
		do {
			pattern = Array(pLength)
				.fill()
				.map((_) => numbers[Math.floor(Math.random() * nLength)]);
		} while (pattern.join('') === [...pattern.reverse()].join(''));

		const directions = [
			[0, -1],
			[1, -1],
			[1, 0],
			[1, 1],
			[0, 1],
			[-1, 1],
			[-1, 0],
			[-1, -1]
		].map(([cd, rd]) =>
			Array(pLength - 1)
				.fill()
				.map((_, i) => {
					const o = i + 1;
					return [cd * o, rd * o];
				})
		);

		let solutions;
		let candidates;
		let grid = [];

		do {
			solutions = [];
			candidates = [];

			grid = Array(size)
				.fill()
				.map((_, r) =>
					Array(size)
						.fill()
						.map((_, c) => {
							const n = numbers[Math.floor(Math.random() * nLength)];

							if (n === pattern[0]) {
								candidates.push({ r, c });
							}

							return {
								r,
								c,
								n
							};
						})
				);

			for (const { r, c } of candidates) {
				for (const offsets of directions) {
					let hasPattern = true;
					const coordinates = [{ r, c }];

					for (let i = 0; i < offsets.length; i++) {
						const [r1, c1] = offsets[i];
						const rf = r + r1;
						const cf = c + c1;

						coordinates.push({ r: rf, c: cf });

						if (!grid[rf] || !grid[rf][cf] || grid[rf][cf].n !== pattern[i + 1]) {
							hasPattern = false;
							break;
						}
					}

					if (hasPattern) {
						const { r: r1, c: c1 } = coordinates[0];
						const { r: r2, c: c2 } = coordinates[coordinates.length - 1];
						solutions.push({
							r1,
							c1,
							r2,
							c2,
							indexes: coordinates.map(({ r, c }) => r * size + c)
						});
					}
				}
			}
		} while (solutions.length < sLength);

		this.grid = grid;
		this.pattern = pattern;
		this.solutions = solutions;
		this.size = size;
	}
}
