<script>
	import { Puzzle } from './utils.js';
	import { cubicInOut as easing } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let size = 4;
	export let reveal = size;
	export let relate = size * 2;

	const scale = tweened(1, { easing });

	let puzzle = new Puzzle({ size, reveal, relate });

	const buttons = Array(puzzle.size)
		.fill()
		.map((_, i) => i + 1);

	let focus;
	let solved;
	let issues = [];
	let animated;

	$: if (puzzle) {
		const currentIssues = [];
		const { size, grid } = puzzle;
		const columns = Array(size)
			.fill()
			.map((_, i) =>
				Array(size)
					.fill()
					.map((_, j) => grid[j][i])
			);

		for (let r = 0; r < size; r++) {
			const row = grid[r];
			for (let c = 0; c < size; c++) {
				const { locked, n } = grid[r][c];
				if (!locked && n !== 0) {
					const i = r * size + c;
					const column = columns[c];
					if (
						[
							...row.slice(0, c),
							...row.slice(c + 1),
							...column.slice(0, r),
							...column.slice(r + 1)
						].find((d) => d.n === n)
					) {
						currentIssues.push(i);
					}

					const { relations } = grid[r][c];

					for (const relation of relations) {
						const { sense, neighbor } = relation;
						const [dr, dc] = neighbor;
						const ni = (r + dr) * size + (c + dc);
						const { n: nn, locked: nlocked } = grid[r + dr][c + dc];
						if (nn !== 0 && ((sense === 1 && n < nn) || (sense === -1 && n > nn))) {
							currentIssues.push(i);
							if (!nlocked) {
								currentIssues.push(ni);
							}
						}
					}
				}
			}
		}

		issues = currentIssues.reduce(
			(acc, curr) => (acc.includes(curr) ? [...acc] : [...acc, curr]),
			[]
		);

		solved =
			grid
				.reduce((acc, curr) => [...acc, ...curr.reduce((a, c) => [...a, c.n], [])], [])
				.every((d) => d !== 0) && issues.length === 0;

		if (solved) focus = null;
	}

	const handleFocus = ({ r, c }) => {
		focus = { r, c };
	};

	const handleBlur = () => {
		focus = null;
	};

	const handleKey = (e) => {
		if (!focus) return;

		const n = parseInt(e.key, 10);
		if (n && n !== 0 && n <= puzzle.size) {
			puzzle.grid[focus.r][focus.c].n = n;
		}
	};

	const handleSelection = ({ n }) => {
		if (!focus) return;

		puzzle.grid[focus.r][focus.c].n = n;
	};

	const handleAnimation = () => {
		if (animated) return;

		animated = true;
	};

	const handleReset = async () => {
		animated = false;

		await scale.set(0);
		puzzle = new Puzzle({ size, reveal, relate });

		await scale.set(1);
		solved = false;
	};
</script>

<svelte:body on:keydown={handleKey} on:click={handleBlur} />

<article>
	<svg viewBox="-0.5 -0.5 {puzzle.size} {puzzle.size}">
		<g>
			{#if focus}
				<g transform="translate({focus.c} {focus.r})">
					<rect
						stroke="#fcb22d"
						stroke-width="0.14"
						fill="none"
						x="-0.32"
						y="-0.32"
						width="0.64"
						height="0.64"
						rx="0.15"
					/>
				</g>
			{/if}

			<g on:animationend={handleAnimation}>
				{#each puzzle.grid as row, r}
					{#each row as { n, locked, relations }, c}
						<g transform="translate({c} {r})">
							<g
								class:solved
								style="animation-duration: 0.6s; animation-delay: {(r + c) % 2 ? 0 : 0.18}s"
								opacity="0"
							>
								<rect
									fill="none"
									stroke={locked ? '#fafafa' : '#fcb22d'}
									stroke-width="0.14"
									x="-0.32"
									y="-0.32"
									width="0.64"
									height="0.64"
									rx="0.15"
								/>
							</g>

							<g transform="scale({$scale})">
								<rect
									fill={locked ? '#fcb22d' : '#fafafa'}
									x="-0.32"
									y="-0.32"
									width="0.64"
									height="0.64"
									rx="0.15"
								/>
								{#if n}
									<text
										y="0.03"
										font-size="0.3"
										font-weight="700"
										font-family="monospace"
										text-anchor="middle"
										dominant-baseline="middle"
										fill="#fafafa"
										stroke={issues.includes(r * puzzle.size + c) ? '#d91650' : '#1a1a1a'}
										stroke-width="0.07"
										stroke-linecap="round"
										stroke-linejoin="round"
										paint-order="stroke">{n}</text
									>
								{/if}
							</g>

							{#each relations as { direction, sense }}
								<g transform="rotate({direction * 90})">
									<g transform="translate(0 -0.5)">
										<g transform="scale(1 {sense * 1})">
											<g transform="scale({$scale})">
												<path
													fill="none"
													stroke="#fafafa"
													stroke-width="0.07"
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M -0.1 0.04 l 0.1 -0.08 0.1 0.08"
												/>
											</g>
										</g>
									</g>
								</g>
							{/each}

							{#if !locked && !solved}
								<rect
									on:click|stopPropagation={() => {
										handleFocus({ r, c });
									}}
									style:cursor="pointer"
									opacity="0"
									x="-0.35"
									y="-0.35"
									width="0.7"
									height="0.7"
									rx="0.15"
								/>
							{/if}
						</g>
					{/each}
				{/each}
			</g>
		</g>

		{#if animated}
			<g style:cursor="pointer" on:click|once|stopPropagation={handleReset} opacity="0">
				<rect x="-0.5" y="-0.5" width={puzzle.size} height={puzzle.size} />
			</g>
		{/if}
	</svg>

	<div>
		{#each buttons as n}
			<button on:click|stopPropagation={() => (animated ? handleReset() : handleSelection({ n }))}>
				{n}
			</button>
		{/each}
	</div>
</article>

<style>
	article {
		max-width: 26rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	article > * + * {
		margin-top: 0.5em;
	}

	svg {
		display: block;
		user-select: none;
	}

	div {
		max-width: 100%;
		display: flex;
		gap: 0 1rem;
		overflow-x: auto;
		padding: 0.5rem 1rem;
	}

	div button {
		flex-shrink: 0;
	}

	div::-webkit-scrollbar {
		height: 0.25rem;
	}

	div::-webkit-scrollbar-track {
		background: #fafafa55;
	}

	div::-webkit-scrollbar-thumb {
		background: #fafafa;
	}

	button {
		width: 2.5rem;
		height: 2.5rem;
		color: #1a1a1a;
		background: #fafafa;
		border-radius: 0.5rem;
		border: none;
		font-family: monospace;
		display: block;
		font-size: 1.25rem;
		margin: 0;
	}

	.solved {
		animation: flash 5 cubic-bezier(0.37, 0, 0.63, 1);
	}

	@keyframes flash {
		50% {
			opacity: 1;
		}
	}
</style>
