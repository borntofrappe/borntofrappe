<script>
	import Tile from '../_Tile.svelte';

	import { Puzzle } from './utils.js';
	import { tweened } from 'svelte/motion';
	import { cubicInOut as easing } from 'svelte/easing';

	export let size = 5;
	export let n = Math.min(size, 4);
	export let p = Math.min(size, 3);
	export let s = 3;

	const tween = tweened(1, { easing });

	let puzzle = new Puzzle({ size, n, p, s });

	$: w = Math.max(puzzle.size, puzzle.pattern.length + 1);

	let pattern = null;
	let solutions = [];
	let indexes = [];
	let animated;

	$: solved = solutions.length === puzzle.solutions.length;

	const handleStart = ({ r, c }) => {
		if (solved) return;

		pattern = {
			r1: r,
			c1: c,
			r2: r,
			c2: c
		};
	};

	const handleIng = ({ r, c }) => {
		if (!pattern || (pattern.r2 === r && pattern.c2 === c) || solved) return;

		pattern.r2 = r;
		pattern.c2 = c;

		handlePattern();
	};

	const handlePattern = () => {
		const solution = puzzle.solutions.find(
			({ r1, c1, r2, c2 }) =>
				`r${r1}c${c1}r${r2}c${c2}` === `r${pattern.r1}c${pattern.c1}r${pattern.r2}c${pattern.c2}` ||
				`r${r1}c${c1}r${r2}c${c2}` === `r${pattern.r2}c${pattern.c2}r${pattern.r1}c${pattern.c1}`
		);

		if (solution) {
			const previousSolution = solutions.find(
				({ r1, c1, r2, c2 }) =>
					`r${r1}c${c1}r${r2}c${c2}` ===
					`r${solution.r1}c${solution.c1}r${solution.r2}c${solution.c2}`
			);

			if (!previousSolution) {
				pattern = null;
				solutions = [...solutions, { ...solution }];
				indexes = [...indexes, ...solution.indexes].reduce(
					(acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
					[]
				);
			}
		}
	};

	const handleEnd = () => {
		pattern = null;
	};

	const handleAnimation = () => {
		if (animated) return;

		animated = true;
	};

	const handleReset = async () => {
		animated = false;

		await tween.set(0);
		puzzle = new Puzzle({ size, n, p, s });
		solutions = [];
		indexes = [];

		tween.set(1);
	};

	const handleTouch = ({ r, c }) => {
		if (solved) return;

		if (!pattern) {
			pattern = {
				r1: r,
				c1: c,
				r2: r,
				c2: c
			};
		} else {
			const { r2, c2 } = pattern;
			if (r !== r2 || c !== c2) {
				pattern.r2 = r;
				pattern.c2 = c;

				handlePattern();
				pattern = null;
			}
		}
	};

	const handleFocus = () => {
		if (solved) return;

		pattern = null;
	};

	const handleKeydown = ({ e, r, c }) => {
		if (solved) return;

		const { key, target } = e;
		if (key === 'Enter') {
			e.preventDefault();

			pattern = pattern
				? null
				: {
						r1: r,
						c1: c,
						r2: r,
						c2: c
				  };
		} else if (key === 'Escape') {
			pattern = null;
		} else if (pattern) {
			const neighbors = {
				ArrowUp: [-1, 0],
				ArrowRight: [0, 1],
				ArrowDown: [1, 0],
				ArrowLeft: [0, -1]
			};

			const neighbor = neighbors[key];

			if (neighbor) {
				e.preventDefault();

				const [dr, dc] = neighbor;
				const { r2, c2 } = pattern;
				const m = puzzle.size - 1;
				const nr = Math.min(m, Math.max(0, r2 + dr));
				const nc = Math.min(m, Math.max(0, c2 + dc));
				pattern.r2 = nr;
				pattern.c2 = nc;

				handlePattern();
				if (!pattern) {
					target.blur();
				}
			}
		}
	};
</script>

<svg
	on:mouseleave={handleEnd}
	on:mouseup={handleEnd}
	viewBox="-{0.5 + (w - puzzle.size) / 2} -0.5 {w} {puzzle.size + 1.1}"
	tabindex="0"
	aria-label="Find the pattern {puzzle.pattern.join(
		', '
	)} in a grid of values, be it a column, row, or diagonal. Press enter to start a pattern from the focused cell. Press the arrow keys to link neighboring cells."
>
	<g transform="translate({((w - puzzle.size) / 2) * -1} 0)">
		<g transform="scale({$tween})">
			<g transform="translate(-0.34 -0.34)">
				<Tile
					char={(puzzle.solutions.length - solutions.length).toString()}
					width={0.68}
					height={0.68}
				/>
			</g>
		</g>

		{#each puzzle.pattern as p, i}
			<g transform="translate({i + 1} 0)">
				<g transform="scale(0.75)">
					<g transform="scale({$tween})">
						<g transform="translate(-0.34 -0.34)">
							<Tile char={p.toString()} width={0.68} height={0.68} />
						</g>
					</g>
				</g>
				{#if i < puzzle.pattern.length - 1}
					<g transform="translate(0.5 0)">
						<path
							d="M -0.035 -0.08 l 0.07 0.08 -0.07 0.08"
							fill="none"
							stroke="#f2eeef"
							stroke-width="0.07"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				{/if}
			</g>
		{/each}
	</g>

	<g transform="translate(0 1.1)">
		<g opacity={$tween}>
			{#each solutions as { r1, c1, r2, c2 }, i}
				<g
					on:animationend={handleAnimation}
					class:solved
					style="animation-duration: 0.3s; animation-delay: {i % 2 ? 0 : 0.18}s"
				>
					<path
						fill="none"
						stroke="#f2eeef"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M {c1} {r1} {c2} {r2}"
						opacity="0.31"
					/>
				</g>
			{/each}
		</g>

		{#if pattern}
			<path
				fill="none"
				stroke="#f2eeef"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M {pattern.c1} {pattern.r1} {pattern.c2} {pattern.r2}"
				opacity="0.2"
			/>
		{/if}

		{#each puzzle.grid as row}
			{#each row as { r, c, n }}
				<g transform="translate({c} {r})">
					<g
						tabindex={solved ? '-1' : '0'}
						aria-label="Row {r + 1} and column {c + 1}, with a  value of {n}."
						class="focusable"
						opacity="0"
						style:outline="none"
						on:focus={() => {
							handleFocus();
						}}
						on:keydown={(e) => {
							handleKeydown({ e, r, c });
						}}
					>
						<circle r="0.45" fill="#f2eeef" opacity="0.2" />
					</g>

					<g transform="scale({$tween})">
						<g transform="translate(-0.34 -0.34)">
							<Tile
								fill={indexes.includes(r * puzzle.size + c) ? '#fdd4ce' : '#f2eeef'}
								char={n.toString()}
								width={0.68}
								height={0.68}
							/>
						</g>
					</g>

					<g
						style:cursor="pointer"
						on:mousedown={() => {
							handleStart({ r, c });
						}}
						on:touchstart|preventDefault={() => {
							handleTouch({ r, c });
						}}
						on:mouseenter={() => {
							handleIng({ r, c });
						}}
						opacity="0"
					>
						<rect x="-0.34" y="-0.34" width="0.68" height="0.68" />
					</g>
				</g>
			{/each}
		{/each}
	</g>

	{#if animated}
		<g transform="translate({((w - puzzle.size) / 2) * -1} 0)">
			<g
				style:cursor="pointer"
				on:click|once={() => {
					handleReset();
				}}
				tabindex="0"
				aria-label="Reset puzzle to play a new game."
				style:outline="none"
				class="focusable"
				opacity="0"
				on:keydown={(e) => {
					const { key, target } = e;
					if (key === 'Enter') {
						e.preventDefault();
						handleReset();
						target.blur();
					}
				}}
			>
				<rect
					fill="#f2eeef"
					x={(0.5 - 0.05) * -1}
					y={(0.5 - 0.05) * -1}
					width={w - 0.1}
					height={puzzle.size + 1.1 - 0.1}
					rx="0.15"
					opacity="0.2"
				/>
			</g>
		</g>
	{/if}
</svg>

<style>
	svg {
		display: block;
		max-width: 28rem;
		height: auto;
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

	.solved {
		animation: flash 9 cubic-bezier(0.37, 0, 0.63, 1) alternate forwards;
	}

	.focusable:focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) {
		opacity: 0;
	}

	@keyframes flash {
		100% {
			opacity: 0;
		}
	}
</style>
