<script>
	import { getColorHsv as getColor } from './_utils.js';
	import { tweened } from 'svelte/motion';
	import { cubicInOut as easing } from 'svelte/easing';

	const duration = 125;
	const tween = tweened(0, { duration, easing });

	export let size = 4;
	export let moves = 12;
	export let index = size ** 2 - 1;

	const n = size * 2 - 1;

	const hiddenCoords = [Math.floor(index / size), index % size];
	let [hr, hc] = hiddenCoords;
	const dr = Math.max(size - hr - 1, hr);
	const dc = Math.max(size - hc - 1, hc);
	const dn = dr + dc;

	const animationDuration = 0.75;
	const animationIterationCount = 5;

	const doColorsMatch = (grid, colors) => {
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
	};

	const colors = [];
	const grid = Array(size)
		.fill()
		.map((_, r) => {
			colors.push([]);
			return Array(size)
				.fill()
				.map((_, c) => {
					const color = getColor({ h: (360 * (c + r)) / n });
					const animationDelay =
						animationDuration - (animationDuration * (Math.abs(r - hr) + Math.abs(c - hc))) / dn;
					colors[colors.length - 1].push(color);

					return {
						r,
						c,
						color,
						animationDelay
					};
				});
		});

	const neighbors = [
		[0, -1],
		[1, 0],
		[0, 1],
		[-1, 0]
	];

	let nextNeighbors = neighbors.map(([r, c]) => [r, c]);

	grid[hr][hc].hidden = true;

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

	if (doColorsMatch(grid, colors)) {
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

	let sliding;
	let slid;
	const updateGrid = ({ r, c }) => {
		if (sliding) return;

		const hiddenNeighbor = neighbors
			.map(([nr, nc]) => [nr + r, nc + c])
			.find(([nr, nc]) => grid[nr] && grid[nr][nc] && grid[nr][nc].hidden);

		if (hiddenNeighbor) {
			const [hr, hc] = hiddenNeighbor;
			const dr = hr - r;
			const dc = hc - c;

			sliding = true;

			tween
				.set(1, {
					interpolate: (from, to) => (t) => {
						const value = t * (to - from);
						grid[r][c].r = r + dr * value;
						grid[r][c].c = c + dc * value;
						return value;
					}
				})
				.then(() => {
					grid[r][c].r = hr;
					grid[r][c].c = hc;
					grid[hr][hc].r = r;
					grid[hr][hc].c = c;
					const temp = grid[r][c];
					grid[r][c] = grid[hr][hc];
					grid[hr][hc] = temp;

					if (doColorsMatch(grid, colors)) {
						slid = true;
					} else {
						tween.set(0, { duration: 0 });
						sliding = false;
					}
				});
		}
	};
</script>

<svg class:slid viewBox="0 0 {size} {size}">
	{#each grid as row}
		{#each row as { r, c, color: fill, hidden, animationDelay }}
			<g transform="translate({c} {r})">
				<g
					style:cursor={hidden || slid ? 'initial' : 'pointer'}
					on:click={() => {
						if (hidden || slid) return;
						updateGrid({ r, c });
					}}
				>
					<g transform="translate(0.5 0.5)">
						<g
							class:hidden
							style={hidden
								? `transform: scale(0); animation-duration: ${
										animationDuration / 2
								  }s; animation-delay: ${
										animationDuration * animationIterationCount + animationDuration / 2
								  }s`
								: ''}
						>
							<rect
								style="animation-duration: {animationDuration}s; animation-delay: {animationDelay}s; animation-iteration-count: {animationIterationCount};"
								x="-0.45"
								y="-0.45"
								width="0.9"
								height="0.9"
								{fill}
								rx="0.15"
							/>
						</g>
					</g>
				</g>
			</g>
		{/each}
	{/each}
</svg>

<style>
	svg {
		display: block;
	}

	.slid rect {
		animation: pulse cubic-bezier(0.37, 0, 0.63, 1);
	}

	.slid .hidden {
		animation: pop cubic-bezier(0.34, 1.56, 0.64, 1) both;
	}

	@keyframes pulse {
		50% {
			transform: scale(0.8);
		}
	}

	@keyframes pop {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
