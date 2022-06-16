<script>
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
</script>

<svg class:slid viewBox="-0.5 -0.5 {puzzle.size} {puzzle.size}">
	{#each puzzle.grid as row}
		{#each row as { r, c, n, hidden }}
			<g transform="translate({c} {r})">
				<g
					style:cursor={hidden || slid ? 'initial' : 'pointer'}
					on:click={() => {
						if (hidden || slid) return;
						updateGrid({ r, c });
					}}
				>
					<g transform="scale({$scale})">
						<g transform="scale({hidden ? $reveal : 1})">
							<rect x="-0.45" y="-0.45" width="0.9" height="0.9" fill="#fcb22d" rx="0.15" />
							<text
								font-size="0.35"
								font-weight="700"
								text-anchor="middle"
								dominant-baseline="central"
								fill="#fafafa"
								stroke="#1a1a1a"
								stroke-width="0.07"
								stroke-linecap="round"
								stroke-linejoin="round"
								paint-order="stroke"
							>
								{n}
							</text>
						</g>
					</g>
				</g>
			</g>
		{/each}
	{/each}

	{#if slid}
		{#each puzzle.grid as row}
			{#each row as { r, c }}
				<g style:cursor="pointer" on:click|once={getNewPuzzle({ r, c })} opacity="0">
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
		user-select: none;
		max-width: 20rem;
		height: auto;
	}
</style>
