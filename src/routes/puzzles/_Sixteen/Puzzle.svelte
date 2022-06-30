<script>
	import Tile from '../_Tile.svelte';

	import { tweened } from 'svelte/motion';
	import { cubicInOut, backOut } from 'svelte/easing';
	import { Puzzle } from './utils.js';

	export let moves = 20;

	let puzzle = new Puzzle({ moves });

	const duration = 125;
	const slide = tweened(0, { duration, easing: cubicInOut });

	const tDuration = 400;
	const tDelay = 50;
	const reveal = tweened(0, { duration: tDuration, easing: cubicInOut });
	const scale = tweened(1, { duration: tDuration, easing: cubicInOut });

	let slid;
	let sliding;

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
			if (puzzle.doNumbersMatch()) {
				slid = true;
				reveal.set(1, { easing: backOut });
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

		puzzle = new Puzzle({ moves, index });
		slid = false;

		scale.set(1);
	};

	const handleKeydown = ({ e, r, c }) => {
		const { key, target } = e;
		if (key === 'Enter') {
			e.preventDefault();
			const hiddenNeighbor = puzzle.getHiddenNeighbor({ r, c });

			if (hiddenNeighbor) {
				updateGrid({ r, c });
				target.blur();
			}
		} else if (key === 'Escape') {
			target.blur();
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
				e.preventDefault();
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

<svg
	class:slid
	viewBox="-0.5 -0.5 {puzzle.size} {puzzle.size}"
	tabindex="0"
	aria-label="Slide the tiles so that the numbers are in the correct, ascending order. Press enter or one of the possible arrow keys to change the position of the focused number."
>
	{#each puzzle.grid as row}
		{#each row as { r, c, n, hidden }}
			<g transform="translate({c} {r})">
				<g
					tabindex={hidden || slid || !puzzle.getHiddenNeighbor({ r, c }) ? -1 : 0}
					aria-label="Row {r + 1} and column {c + 1}, with the number {n}."
					class="focusable"
					opacity="0"
					style:outline="none"
					on:keydown={(e) => {
						if (hidden || slid) return;
						handleKeydown({ e, r, c });
					}}
				>
					<circle r="0.5" fill="#f2eeef" opacity="0.2" />
				</g>

				<g
					style:cursor={hidden || slid || !puzzle.getHiddenNeighbor({ r, c })
						? 'initial'
						: 'pointer'}
					on:click={() => {
						if (hidden || slid) return;
						updateGrid({ r, c });
					}}
				>
					<g transform="scale({$scale})">
						<g transform="scale({hidden ? $reveal : 1})">
							<g transform="translate(-0.4 -0.4)">
								<Tile width={0.8} height={0.8} char={n.toString()} />
								<rect width="0.8" height="0.8" rx="0.1" opacity="0" />
							</g>
						</g>
					</g>
				</g>
			</g>
		{/each}
	{/each}

	{#if slid}
		{#each puzzle.grid as row}
			{#each row as { r, c, n }}
				<g transform="translate({c} {r})">
					<g
						tabindex="0"
						aria-label="Start a new puzzle hiding the tile on row {r + 1} and column {c +
							1}, with the number {n}."
						class="focusable"
						opacity="0"
						style:outline="none"
						on:keydown={(e) => {
							const { key, target } = e;
							if (key === 'Enter') {
								e.preventDefault();
								getNewPuzzle({ r, c });
								target.blur();
							}
						}}
					>
						<circle r="0.5" fill="#f2eeef" opacity="0.2" />
					</g>
					<g
						style:cursor="pointer"
						on:click|once={() => {
							getNewPuzzle({ r, c });
						}}
						opacity="0"
					>
						<rect x="-0.4" y="-0.4" width="0.8" height="0.8" rx="0.1" />
					</g>
				</g>
			{/each}
		{/each}
	{/if}
</svg>

<style>
	svg {
		display: block;
		user-select: none;
		max-width: 20rem;
	}

	.focusable:focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) {
		opacity: 0;
	}
</style>
