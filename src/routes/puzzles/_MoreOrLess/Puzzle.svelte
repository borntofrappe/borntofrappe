<script>
	import Tile from '../_Tile.svelte';

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

		const { key } = e;

		if (key === 'Backspace' || key === 'Delete') {
			puzzle.grid[focus.r][focus.c].n = 0;
		} else if (key === 'Escape') {
			focus = null;
		} else {
			const n = parseInt(e.key, 10);
			if (n && n !== 0 && n <= puzzle.size) {
				puzzle.grid[focus.r][focus.c].n = n;
			}
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

	const handleClear = () => {
		if (!focus) return;

		puzzle.grid[focus.r][focus.c].n = 0;
	};
</script>

<svelte:body on:keydown={handleKey} on:click={handleBlur} />

<div>
	<svg
		viewBox="-0.5 -0.5 {puzzle.size} {puzzle.size}"
		tabindex="0"
		aria-label="Fill a grid so that every column, every row has but one copy of the available numbers. Respect the comparison signs."
		on:focus={() => {
			focus = null;
		}}
	>
		<g>
			{#if focus}
				<g transform="translate({focus.c} {focus.r})">
					<circle r="0.45" fill="#f2eeef" opacity="0.2" />
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
								<circle r="0.45" fill="#f2eeef" opacity="0.31" />
							</g>

							<g transform="scale({$scale})">
								<g transform="translate(-0.32 -0.32)">
									<Tile
										width={0.64}
										height={0.64}
										stroke={issues.includes(r * puzzle.size + c) ? '#d91650' : '#07093a'}
										fill={locked ? '#fdd4ce' : '#f2eeef'}
										char={n === 0 ? '' : n.toString()}
									/>
								</g>
							</g>

							{#each relations as { direction, sense }}
								<g transform="rotate({direction * 90})">
									<g transform="translate(0 -0.5)">
										<g transform="scale(1 {sense * 1})">
											<g transform="scale({$scale})">
												<path
													fill="none"
													stroke="#f2eeef"
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
								<g
									on:click|stopPropagation={() => {
										handleFocus({ r, c });
									}}
									style:cursor="pointer"
									fill="transparent"
									role="button"
									aria-label="Row {r + 1} and column {c + 1}."
									tabindex="0"
									on:focus={() => {
										handleFocus({ c, r });
									}}
									style:outline="none"
								>
									<rect x="-0.32" y="-0.32" width="0.64" height="0.64" />
								</g>
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

	<section>
		{#each buttons as n}
			<button
				on:click|stopPropagation={() => {
					handleSelection({ n });
				}}
			>
				<Tile char={n.toString()} />
			</button>
		{/each}

		<button
			aria-label={animated ? 'Reset grid to play a new round.' : 'Clear focused cell'}
			on:click|stopPropagation={() => {
				animated ? handleReset() : handleClear();
			}}
		>
			<Tile char="" />
		</button>
	</section>
</div>

<style>
	div {
		max-width: 26rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div > * + * {
		margin-top: 0.5em;
	}

	svg {
		display: block;
		user-select: none;
	}

	svg:focus {
		outline: 0.2rem solid #f2eeef28;
		border-radius: 0.5rem;
	}

	svg:focus:not(:focus-visible) {
		outline: none;
	}

	svg:focus:focus-visible {
		outline: none;
		background: #f2eeef28;
	}

	section {
		max-width: 100%;
		display: flex;
		gap: 0 1rem;
		overflow-x: auto;
		padding: 0.5rem 1rem;
	}

	section button {
		flex-shrink: 0;
	}

	section::-webkit-scrollbar {
		height: 0.25rem;
	}

	section::-webkit-scrollbar-track {
		background: #f2eeef55;
	}

	section::-webkit-scrollbar-thumb {
		background: #f2eeef;
	}

	button {
		width: 3rem;
		height: 3rem;
		display: block;
		border: none;
		background: none;
		padding: 0;
		margin: 0;
	}

	button > :global(svg) {
		width: 100%;
		height: auto;
		display: block;
	}

	button {
		position: relative;
		z-index: 0;
	}

	button::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		background: #f2eeef;
		transform: translate(-50%, -50%) scale(1.25);
		border-radius: 50%;
		opacity: 0;
		z-index: -1;
	}

	button:focus {
		outline: none;
	}

	button:focus::before {
		opacity: 0.4;
	}

	button:focus:not(:focus-visible)::before {
		opacity: 0;
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
