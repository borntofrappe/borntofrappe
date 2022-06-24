<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut, backOut } from 'svelte/easing';
	import { Puzzle } from './_utils.js';

	export let size = 4;
	export let moves = 20;
	export let index = size ** 2 - 1;

	let puzzle = new Puzzle({ size, moves, index });

	const sDuration = 125;
	const slide = tweened(0, { duration: sDuration, easing: cubicInOut });

	const tDuration = 400;
	const tDelay = 50;
	const reveal = tweened(0, { duration: tDuration, easing: cubicInOut });
	const scale = tweened(1, { duration: tDuration, easing: cubicInOut });

	let slid;
	let sliding;
	let animated;

	const updateGrid = async ({ r, c }) => {
		if (sliding) return;

		const hiddenNeighbor = puzzle.getHiddenNeighbor({ r, c });

		if (hiddenNeighbor) {
			const [hr, hc] = hiddenNeighbor;
			const dr = hr - r;
			const dc = hc - c;

			sliding = true;

			await slide.set(1, {
				interpolate: (from, to) => (t) => {
					const value = t * (to - from);
					puzzle.grid[r][c].r = r + dr * value;
					puzzle.grid[r][c].c = c + dc * value;
					return value;
				}
			});

			puzzle.grid[r][c].r = hr;
			puzzle.grid[r][c].c = hc;
			puzzle.grid[hr][hc].r = r;
			puzzle.grid[hr][hc].c = c;
			const temp = puzzle.grid[r][c];
			puzzle.grid[r][c] = puzzle.grid[hr][hc];
			puzzle.grid[hr][hc] = temp;

			slide.set(0, { duration: 0 });
			sliding = false;

			if (puzzle.doColorsMatch()) {
				slid = true;
			}
		}
	};

	const getNewPuzzle = async ({ r, c }) => {
		const [hr, hc] = puzzle.getHiddenNeighbor();
		puzzle.grid[hr][hc].hidden = false;
		puzzle.grid[r][c].hidden = true;
		reveal.set(0);

		await scale.set(0, { delay: tDelay });

		const index = r * puzzle.size + c;
		puzzle = new Puzzle({ size, moves, index });
		slid = false;
		animated = false;

		scale.set(1);
	};

	const handleAnimation = async () => {
		if (animated) return;

		animated = true;

		const { animationDuration: duration } = puzzle;

		reveal.set(1, {
			easing: backOut,
			delay: (duration * 1000) / 2,
			duration: (duration * 1000) / 2
		});
	};

	const handleKeydown = ({ event, r, c }) => {
		const { key, target } = event;
		if (key === 'Enter') {
			event.preventDefault();
			const hiddenNeighbor = puzzle.getHiddenNeighbor({ r, c });

			if (hiddenNeighbor) {
				updateGrid({ r, c });
				target.blur();
			}
		} else {
			const neighbors = {
				ArrowUp: [-1, 0],
				ArrowRight: [0, 1],
				ArrowDown: [1, 0],
				ArrowLeft: [0, -1]
			};

			const neighbor = neighbors[key];
			const hiddenNeighbor = puzzle.getHiddenNeighbor({ r, c });

			if (neighbor && hiddenNeighbor) {
				event.preventDefault();
				const [dr, dc] = neighbor;
				const [hr, hc] = hiddenNeighbor;
				if (dr === hr - r && dc === hc - c) {
					updateGrid({ r, c });
					target.blur();
				}
			}
		}
	};
</script>

<svg class:slid viewBox="-0.5 -0.5 {puzzle.size} {puzzle.size}">
	{#each puzzle.grid as row}
		{#each row as { r, c, color: fill, hidden, animationDelay }}
			<g transform="translate({c} {r})">
				<g
					style:cursor={hidden || slid || !puzzle.getHiddenNeighbor({ r, c })
						? 'initial'
						: 'pointer'}
					on:click={() => {
						if (hidden || slid) return;
						updateGrid({ r, c });
					}}
					class="focusable"
					aria-label="Tile on row {r + 1} and column {c + 1}, with the color {fill}."
					tabindex={hidden || slid || !puzzle.getHiddenNeighbor({ r, c }) ? '-1' : '0'}
					on:keydown={(event) => {
						if (hidden || slid) return;
						handleKeydown({ event, r, c });
					}}
				>
					<g transform="scale({$scale})">
						<g transform="scale({hidden ? $reveal : 1})">
							<g on:animationend={handleAnimation}>
								<rect
									style="animation-duration: {puzzle.animationDuration}s; animation-delay: {animationDelay}s;"
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
			</g>
		{/each}
	{/each}

	{#if animated}
		{#each puzzle.grid as row}
			{#each row as { r, c, color: fill }}
				<g
					style:cursor="pointer"
					aria-label="Start a new puzzle hiding the tile on row {r + 1} and column {c +
						1}, with the color {fill}."
					class="focusable"
					tabindex="0"
					on:keydown={(e) => {
						const { key, target } = e;
						if (key === 'Enter') {
							e.preventDefault();
							getNewPuzzle({ r, c });
							target.blur();
						}
					}}
					on:click|once={getNewPuzzle({ r, c })}
					fill="transparent"
				>
					<g transform="translate({c} {r})">
						<rect x="-0.45" y="-0.45" width="0.9" height="0.9" rx="0.15" />
					</g>
				</g>
			{/each}
		{/each}
	{/if}
</svg>

<style>
	svg {
		display: block;
	}

	.focusable {
		stroke-width: 0.05px;
	}

	.focusable:focus {
		outline: none;
		stroke: currentColor;
	}

	.focusable:focus:not(:focus-visible) {
		stroke: none;
	}

	.slid rect {
		animation: pulse 5 cubic-bezier(0.37, 0, 0.63, 1);
	}

	@keyframes pulse {
		50% {
			transform: scale(0.8);
		}
	}
</style>
