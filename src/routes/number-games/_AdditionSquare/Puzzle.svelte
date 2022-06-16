<script>
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

		const n = parseInt(e.key, 10);
		if (n) {
			nums[focus.r][focus.c].n = n;
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
</script>

<svelte:body on:keydown={handleKey} on:click={handleBlur} />

<article>
	<svg viewBox="-0.5 -0.5 {puzzle.size + 2} {puzzle.size + 2}">
		<g>
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
							opacity={c === puzzle.columns[i] ? 1 : 0.55}
							style="transition: opacity 0.1s ease-in-out;"
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
							opacity={r === puzzle.rows[i] ? 1 : 0.55}
							style="transition: opacity 0.1s ease-in-out;"
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
						<rect
							fill="none"
							stroke="#fcb22d"
							stroke-width="0.15"
							x="-0.38"
							y="-0.38"
							width="0.76"
							height="0.76"
							rx="0.15"
						/>
					</g>
				{/if}

				<g on:animationend={handleAnimation}>
					{#each nums as row, r}
						<g transform="translate(0 {r})">
							{#each row as { n, locked }, c}
								<g transform="translate({c} 0)">
									<g
										class:solved
										style="animation-duration: 0.7s; animation-delay: {(r + c) % 2 ? 0 : 0.2}s"
										opacity="0"
									>
										<rect
											fill="none"
											stroke={locked ? '#fafafa' : '#fcb22d'}
											stroke-width="0.15"
											x="-0.38"
											y="-0.38"
											width="0.76"
											height="0.76"
											rx="0.15"
										/>
									</g>

									<g transform="scale({$scale})">
										<rect
											fill={locked ? '#fcb22d' : '#fafafa'}
											x="-0.38"
											y="-0.38"
											width="0.76"
											height="0.76"
											rx="0.15"
										/>
										{#if n !== 0}
											<text
												font-size="0.3"
												font-weight="700"
												text-anchor="middle"
												dominant-baseline="central"
												fill="#fafafa"
												stroke={issues.includes(r * puzzle.size + c) ? '#d91650' : '#1a1a1a'}
												stroke-width="0.07"
												stroke-linecap="round"
												stroke-linejoin="round"
												paint-order="stroke"
											>
												{n}
											</text>
										{/if}
									</g>
									{#if !locked && !solved}
										<g
											on:click|stopPropagation={() => handleFocus({ c, r })}
											style:cursor="pointer"
											opacity="0"
										>
											<rect x="-0.38" y="-0.38" width="0.76" height="0.76" rx="0.15" />
										</g>
									{/if}
								</g>
							{/each}
						</g>
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
		max-width: 28rem;
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
		font-family: inherit;
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
