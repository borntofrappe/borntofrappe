<script>
	import Tile from '../_Tile.svelte';

	import { Puzzle } from './utils.js';
	import { cubicInOut as easing } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const scale = tweened(1, { easing });

	export let size = 3;
	export let reveal = size;

	let puzzle = new Puzzle({ size, reveal });

	$: nums = puzzle.nums.map((row, r) =>
		row.map((d, c) => {
			const n = puzzle.locks.includes(r * puzzle.size + c) ? d : 0;
			return {
				d,
				n,
				locked: n === d
			};
		})
	);

	$: buttons = nums
		.reduce(
			(acc, curr) => [...acc, ...curr.reduce((a, c) => (c.locked ? [...a] : [...a, c.d]), [])],
			[]
		)
		.sort((a, b) => a - b);

	let rows = [];
	let columns = [];
	let issues = [];
	let solved;
	let focus;
	let animated;

	$: if (nums) {
		rows = nums.reduce((acc, curr) => [...acc, curr.reduce((a, c) => a + c.n, 0)], []);

		columns = Array(nums.length)
			.fill()
			.map((_, i) =>
				Array(nums[i].length)
					.fill()
					.map((_, j) => nums[j][i])
					.reduce((acc, curr) => acc + curr.n, 0)
			);

		const values = nums.reduce((acc, curr) => [...acc, ...curr], []);
		issues = values.reduce(
			(acc, curr, i) =>
				!curr.locked &&
				[...values.slice(0, i), ...values.slice(i + 1)].find((d) => d.n && d.n === curr.n)
					? [...acc, i]
					: [...acc],
			[]
		);

		let totalsMatch = true;
		for (let i = 0; i < rows.length; i++) {
			if (rows[i] !== puzzle.rows[i]) {
				totalsMatch = false;
				break;
			}
		}
		if (totalsMatch) {
			for (let i = 0; i < rows.length; i++) {
				if (columns[i] !== puzzle.columns[i]) {
					totalsMatch = false;
					break;
				}
			}
		}

		if (totalsMatch) {
			solved = puzzle.nums
				.reduce((acc, curr) => [...acc, ...curr.reduce((a, c) => [...a, c], [])], [])
				.every((d) =>
					nums
						.reduce((acc, curr) => [...acc, ...curr.reduce((a, c) => [...a, c.n], [])], [])
						.includes(d)
				);

			if (solved) focus = null;
		}
	}

	const handleFocus = ({ c, r }) => {
		focus = { c, r };
	};

	const handleBlur = () => {
		focus = null;
	};

	const handleKey = (e) => {
		if (!focus) return;

		const { key } = e;

		if (key === 'Backspace' || key === 'Delete') {
			nums[focus.r][focus.c].n = 0;
		} else if (key === 'Escape') {
			focus = null;
		} else {
			const n = parseInt(e.key, 10);
			if (n) {
				nums[focus.r][focus.c].n = n;
			}
		}
	};

	const handleSelection = ({ n }) => {
		if (!focus) return;

		nums[focus.r][focus.c].n = n;
	};

	const handleAnimation = () => {
		if (animated) return;

		animated = true;
	};

	const handleReset = async () => {
		animated = false;

		await scale.set(0);
		puzzle = new Puzzle({ size, reveal });

		await scale.set(1);
		solved = false;
	};

	const handleClear = () => {
		if (!focus) return;

		nums[focus.r][focus.c].n = 0;
	};
</script>

<svelte:body on:keydown={handleKey} on:click={handleBlur} />

<div>
	<svg
		viewBox="-0.5 -0.5 {puzzle.size + 2} {puzzle.size + 2}"
		tabindex="0"
		aria-label="Fill the grid with the correct numbers in order to respect the sum in the respective row and column."
		on:focus={() => {
			focus = null;
		}}
	>
		<g style:color="#f2eeef">
			<g>
				<g transform="translate(1 {puzzle.size + 1})">
					{#each puzzle.columns as c, i}
						<g transform="translate({i} 0)">
							<circle r="0.35" fill="none" stroke="currentColor" stroke-width="0.02" />
							<g transform="scale({$scale})">
								<text
									font-size="0.3"
									text-anchor="middle"
									dominant-baseline="central"
									fill="currentColor"
								>
									{c}
								</text>
							</g>
						</g>
					{/each}
				</g>

				<g transform="translate({puzzle.size + 1} 1)">
					{#each puzzle.rows as r, i}
						<g transform="translate(0 {i})">
							<circle r="0.35" fill="none" stroke="currentColor" stroke-width="0.02" />
							<g transform="scale({$scale})">
								<text
									font-size="0.3"
									text-anchor="middle"
									dominant-baseline="central"
									fill="currentColor"
								>
									{r}
								</text>
							</g>
						</g>
					{/each}
				</g>
			</g>

			<g>
				<g transform="translate(1 0)">
					{#each columns as c, i}
						<g
							opacity={c === puzzle.columns[i] ? 1 : 0.7}
							style="transition: opacity 0.15s cubic-bezier(0.37, 0, 0.63, 1);"
						>
							<g transform="translate({i} 0)">
								<path
									opacity="0.25"
									fill="none"
									stroke="currentColor"
									stroke-width="0.05"
									d="M 0 1 v {rows.length - 1}"
								/>
								<circle r="0.35" fill="none" stroke="currentColor" stroke-width="0.02" />
								<g transform="scale({$scale})">
									<text
										font-size="0.3"
										text-anchor="middle"
										dominant-baseline="central"
										fill="currentColor"
									>
										{c}
									</text>
								</g>
							</g>
						</g>
					{/each}
				</g>

				<g transform="translate(0 1)">
					{#each rows as r, i}
						<g
							opacity={r === puzzle.rows[i] ? 1 : 0.7}
							style="transition: opacity 0.15s cubic-bezier(0.37, 0, 0.63, 1);"
						>
							<g transform="translate(0 {i})">
								<path
									opacity="0.25"
									fill="none"
									stroke="currentColor"
									stroke-width="0.05"
									d="M 1 0 h {columns.length - 1}"
								/>
								<circle r="0.35" fill="none" stroke="currentColor" stroke-width="0.02" />
								<g transform="scale({$scale})">
									<text
										font-size="0.3"
										text-anchor="middle"
										dominant-baseline="central"
										fill="currentColor"
									>
										{r}
									</text>
								</g>
							</g>
						</g>
					{/each}
				</g>
			</g>
		</g>

		<g>
			<g transform="translate(1 1)">
				{#if focus}
					<g transform="translate({focus.c} {focus.r})">
						<circle r="0.45" fill="#f2eeef" opacity="0.2" />
					</g>
				{/if}

				<g on:animationend={handleAnimation}>
					{#each nums as row, r}
						{#each row as { n, locked }, c}
							<g transform="translate({c} {r})">
								<g
									class:solved
									style="animation-duration: 0.6s; animation-delay: {(r + c) % 2 ? 0 : 0.18}s"
									opacity="0"
								>
									<circle r="0.45" fill="#f2eeef" opacity="0.31" />
								</g>

								<g transform="scale({$scale})">
									<g transform="translate(-0.35 -0.35)">
										<Tile
											width={0.7}
											height={0.7}
											fill={locked ? '#fdd4ce' : '#f2eeef'}
											stroke={issues.includes(r * puzzle.size + c) ? '#d91650' : '#07093a'}
											char={n === 0 ? '' : n.toString()}
										/>
									</g>
								</g>
								{#if !locked && !solved}
									<g
										on:click|stopPropagation={() => {
											handleFocus({ c, r });
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
										<rect x="-0.35" y="-0.35" width="0.7" height="0.7" />
									</g>
								{/if}
							</g>
						{/each}
					{/each}
				</g>
			</g>
		</g>

		{#if animated}
			<g style:cursor="pointer" on:click|once|stopPropagation={handleReset} opacity="0">
				<rect x="-0.5" y="-0.5" width={puzzle.size + 2} height={puzzle.size + 2} />
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
			aria-label={animated ? 'Reset grid to play a new round.' : 'Clear focused cell.'}
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
		max-width: 28rem;
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
