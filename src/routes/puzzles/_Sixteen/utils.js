export class Puzzle {
	constructor({ moves = 12, index } = {}) {
		const size = 4;
		let i = index === undefined ? size ** 2 - 1 : index;

		const numbers = [];
		const grid = Array(size)
			.fill()
			.map((_, r) => {
				numbers.push([]);
				return Array(size)
					.fill()
					.map((_, c) => {
						const n = r * size + c + 1;
						numbers[numbers.length - 1].push(n);

						return {
							r,
							c,
							n
						};
					});
			});

		const hiddenCoords = [Math.floor(i / size), i % size];
		let [hr, hc] = hiddenCoords;
		grid[hr][hc].hidden = true;

		const neighbors = [
			[0, -1],
			[1, 0],
			[0, 1],
			[-1, 0]
		];

		let nextNeighbors = neighbors.map(([r, c]) => [r, c]);

		for (let i = 0; i < moves; i++) {
			const availableNeighbors = nextNeighbors.filter(
				([nr, nc]) => grid[hr + nr] && grid[hr + nr][hc + nc]
			);
			const [nr, nc] = availableNeighbors[Math.floor(Math.random() * availableNeighbors.length)];

			const gr = hr + nr;
			const gc = hc + nc;

			grid[gr][gc].r = hr;
			grid[gr][gc].c = hc;
			grid[hr][hc].r = gr;
			grid[hr][hc].c = gc;
			const temp = grid[gr][gc];
			grid[gr][gc] = grid[hr][hc];
			grid[hr][hc] = temp;

			hr = gr;
			hc = gc;
			nextNeighbors = neighbors.filter(([nnr, nnc]) => nnr !== nr * -1 || nnc !== nc * -1);
		}

		while (hr !== hiddenCoords[0]) {
			const dr = hiddenCoords[0] - hr > 0 ? 1 : -1;
			const gr = hr + dr;
			const gc = hc;

			grid[gr][gc].r = hr;
			grid[gr][gc].c = hc;
			grid[hr][hc].r = gr;
			grid[hr][hc].c = gc;
			const temp = grid[gr][gc];
			grid[gr][gc] = grid[hr][hc];
			grid[hr][hc] = temp;

			hr = gr;
		}

		while (hc !== hiddenCoords[1]) {
			const dc = hiddenCoords[1] - hc > 0 ? 1 : -1;
			const gr = hr;
			const gc = hc + dc;

			grid[gr][gc].r = hr;
			grid[gr][gc].c = hc;
			grid[hr][hc].r = gr;
			grid[hr][hc].c = gc;
			const temp = grid[gr][gc];
			grid[gr][gc] = grid[hr][hc];
			grid[hr][hc] = temp;

			hc = gc;
		}

		this.size = size;
		this.numbers = numbers;
		this.grid = grid;
		this.neighbors = neighbors;

		if (this.doNumbersMatch()) {
			const availableNeighbors = neighbors
				.map(([nr, nc]) => [hr + nr, hc + nc])
				.filter(([nr, nc]) => grid[nr] && grid[nr][nc]);

			const [gr, gc] = availableNeighbors[Math.floor(Math.random() * availableNeighbors.length)];

			grid[gr][gc].r = hr;
			grid[gr][gc].c = hc;
			grid[hr][hc].r = gr;
			grid[hr][hc].c = gc;
			const temp = grid[gr][gc];
			grid[gr][gc] = grid[hr][hc];
			grid[hr][hc] = temp;
		}
	}

	doNumbersMatch() {
		const { numbers, grid } = this;

		let numbersMatch = true;
		for (let i = 0; i < numbers.length; i++) {
			for (let j = 0; j < numbers[i].length; j++) {
				if (numbers[i][j] !== grid[i][j].n) {
					numbersMatch = false;
					break;
				}
			}
			if (!numbersMatch) {
				break;
			}
		}

		return numbersMatch;
	}

	getHiddenNeighbor(coords) {
		const { grid } = this;

		if (coords) {
			const { r, c } = coords;
			const { neighbors } = this;
			return neighbors
				.map(([nr, nc]) => [nr + r, nc + c])
				.find(([nr, nc]) => grid[nr] && grid[nr][nc] && grid[nr][nc].hidden);
		} else {
			const { r, c } = grid.reduce((acc, curr) => [...acc, ...curr], []).find((d) => d.hidden);
			return [r, c];
		}
	}
}
