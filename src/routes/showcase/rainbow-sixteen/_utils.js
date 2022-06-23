const getColor = ({ h = 0, s = 0.55, v = 0.92 } = {}) => {
	const l = v * (1 - s / 2);
	const sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
	return `hsl(${h}, ${sl * 100}%, ${l * 100}%)`;
};

export class Puzzle {
	constructor({ size = 4, moves = 20, index } = {}) {
		let i = index === null ? size ** 2 - 1 : index;

		const n = size * 2 - 1;

		const hiddenCoords = [Math.floor(i / size), i % size];
		let [hr, hc] = hiddenCoords;

		const dr = Math.max(size - hr - 1, hr);
		const dc = Math.max(size - hc - 1, hc);
		const dn = dr + dc;

		const animationDuration = 0.75;

		const colors = [];
		const grid = Array(size)
			.fill()
			.map((_, r) => {
				colors.push([]);
				return Array(size)
					.fill()
					.map((_, c) => {
						const color = getColor({ h: (360 * (c + r)) / n });
						colors[colors.length - 1].push(color);

						const animationDelay =
							animationDuration - (animationDuration * (Math.abs(r - hr) + Math.abs(c - hc))) / dn;

						return {
							r,
							c,
							color,
							animationDelay
						};
					});
			});

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
		this.colors = colors;
		this.grid = grid;
		this.neighbors = neighbors;
		this.animationDuration = animationDuration;

		if (this.doColorsMatch()) {
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

	doColorsMatch() {
		const { colors, grid } = this;

		let colorsMatch = true;
		for (let i = 0; i < colors.length; i++) {
			for (let j = 0; j < colors[i].length; j++) {
				if (colors[i][j] !== grid[i][j].color) {
					colorsMatch = false;
					break;
				}
			}
			if (!colorsMatch) {
				break;
			}
		}

		return colorsMatch;
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
