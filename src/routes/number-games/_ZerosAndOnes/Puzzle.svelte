<script>
	import { Puzzle } from './utils.js';
	import { cubicInOut as easing } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let n = 2;
	export let reveal = Math.floor((n * 2) ** 2 / 2.2);

	const scale = tweened(1, { easing });

	let puzzle = new Puzzle({ n, reveal });

	const colors = ['#fafafa', '#fcb22d'];

	let solved;
	let issues = [];
	let animated;

	$: if (puzzle) {
		const { size, grid } = puzzle;

		const currentIssues = [];
		const placeholder = '-';
		const rPlaceholder = new RegExp(placeholder);
		const rRepeats = new RegExp(/(.)\1{2,}/);

		const rows = grid.reduce(
			(acc, curr) => [...acc, curr.map((d) => (d.n !== null ? d.n : placeholder)).join('')],
			[]
		);
		const columns = Array(size)
			.fill()
			.map((_, i) =>
				Array(size)
					.fill()
					.map((_, j) => (grid[j][i].n !== null ? grid[j][i].n : placeholder))
					.join('')
			);

		for (let r = 0; r < rows.length; r++) {
			if (
				!rPlaceholder.test(rows[r]) &&
				[...rows.slice(0, r), ...rows.slice(r + 1)].find((d) => d === rows[r])
			) {
				currentIssues.push(
					...Array(size)
						.fill()
						.map((_, c) => r * size + c)
				);
			}

			let match = rRepeats.exec(rows[r]);
			let index = 0;
			while (match) {
				const [sequence, value] = match;
				if (value !== placeholder) {
					index += match.index;
					const { length } = sequence;
					currentIssues.push(
						...Array(length)
							.fill()
							.map((_, c) => r * size + c + index)
					);
				}

				match = rRepeats.exec(rows[r].slice(index + 1));
				index++;
			}

			const gIndeces = {};
			for (let c = 0; c < rows[r].length; c++) {
				const value = rows[r][c];
				if (value !== placeholder) {
					const i = r * size + c;
					gIndeces[value] = gIndeces[value] ? [...gIndeces[value], i] : [i];
				}
			}
			for (const sIndeces of Object.values(gIndeces)) {
				if (sIndeces.length > size / 2) {
					currentIssues.push(...sIndeces);
				}
			}
		}

		for (let c = 0; c < columns.length; c++) {
			if (
				!rPlaceholder.test(columns[c]) &&
				[...columns.slice(0, c), ...columns.slice(c + 1)].find((d) => d === columns[c])
			) {
				currentIssues.push(
					...Array(size)
						.fill()
						.map((_, r) => r * size + c)
				);
			}

			let match = rRepeats.exec(columns[c]);
			let index = 0;
			while (match) {
				const [sequence, value] = match;
				if (value !== placeholder) {
					index += match.index;
					const { length } = sequence;
					currentIssues.push(
						...Array(length)
							.fill()
							.map((_, r) => (r + index) * size + c)
					);
				}

				match = rRepeats.exec(columns[c].slice(index + 1));
				index++;
			}

			const gIndeces = {};
			for (let r = 0; r < columns[c].length; r++) {
				const value = columns[c][r];
				if (value !== placeholder) {
					const i = r * size + c;
					gIndeces[value] = gIndeces[value] ? [...gIndeces[value], i] : [i];
				}
			}
			for (const sIndeces of Object.values(gIndeces)) {
				if (sIndeces.length > size / 2) {
					currentIssues.push(...sIndeces);
				}
			}
		}

		issues = currentIssues.reduce(
			(acc, curr) => (acc.includes(curr) ? [...acc] : [...acc, curr]),
			[]
		);

		solved =
			issues.length === 0 &&
			grid.reduce((acc, curr) => [...acc, ...curr], []).every((d) => d.n !== null);
	}

	const updateGrid = ({ r, c }) => {
		let { n } = puzzle.grid[r][c];
		switch (n) {
			case 1:
				n = null;
				break;
			case 0:
				n = 1;
				break;
			default:
				n = 0;
				break;
		}

		puzzle.grid[r][c].n = n;
	};

	const handleAnimation = () => {
		if (animated) return;

		animated = true;
	};

	const handleReset = async () => {
		animated = false;

		await scale.set(0);
		puzzle = new Puzzle({ n, reveal });

		await scale.set(1);
		solved = false;
	};
</script>

<svg
	viewBox="-0.5 -0.5 {puzzle.size} {puzzle.size}"
	style="user-select: none;"
	tabindex="0"
	aria-label="Cycle through the available options to guarantee that each row, each column contains a unique sequence of value. Ensure that no value is repeated thrice. Ensure that each row and column contains an equal number of copies."
>
	{#each puzzle.grid as row, r}
		{#each row as { n, locked }, c}
			<g transform="translate({c} {r})">
				<g
					on:animationend={handleAnimation}
					class:solved
					style="animation-duration: 0.6s; animation-delay: {(r + c) % 2 ? 0 : 0.18}s"
					opacity="0"
				>
					<rect
						fill="none"
						stroke={colors[(n + 1) % colors.length]}
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
						opacity="0.15"
						fill="#fafafa"
						x="-0.38"
						y="-0.38"
						width="0.76"
						height="0.76"
						rx="0.15"
					/>

					{#if n !== null}
						<g>
							<rect fill={colors[n]} x="-0.38" y="-0.38" width="0.76" height="0.76" rx="0.15" />

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
						</g>

						{#if !locked && !solved}
							<rect
								fill="#ffffff"
								opacity="0.3"
								x="-0.38"
								y="-0.38"
								width="0.76"
								height="0.76"
								rx="0.15"
							/>
						{/if}
					{/if}
				</g>

				{#if !locked && !solved}
					<g
						style:cursor="pointer"
						on:click={() => {
							updateGrid({ r, c });
						}}
						fill="transparent"
						stroke={n === null ? colors[0] : colors[(n + 1) % colors.length]}
						stroke-width="0"
						class="focusable"
						tabindex="0"
						aria-label="Row {r + 1} and column {c + 1}, with the current value of {n}."
						on:keydown={(e) => {
							const { key, target } = e;
							if (key === 'Enter') {
								e.preventDefault();
								updateGrid({ r, c });
							} else if (key === 'Escape') {
								target.blur();
							}
						}}
					>
						<rect x="-0.38" y="-0.38" width="0.76" height="0.76" rx="0.15" />
					</g>
				{/if}
			</g>
		{/each}
	{/each}

	{#if animated}
		<g
			style:cursor="pointer"
			on:click|once={() => {
				handleReset();
			}}
			fill="transparent"
			stroke="currentColor"
			stroke-width="0"
			class="focusable"
			tabindex="0"
			aria-label="Reset puzzle to start a new round."
			on:keydown={(e) => {
				const { key } = e;
				if (key === 'Enter') {
					e.preventDefault();
					handleReset();
				}
			}}
		>
			<rect x="-0.5" y="-0.5" width={puzzle.size} height={puzzle.size} />
		</g>
	{/if}
</svg>

<style>
	svg {
		display: block;
		user-select: none;
		max-width: 24rem;
	}

	svg:focus:not(:focus-visible) {
		outline: none;
	}

	.solved {
		animation: flash 5 cubic-bezier(0.37, 0, 0.63, 1);
	}

	.focusable:focus {
		outline: none;
		stroke-width: 0.05px;
	}

	.focusable:focus:not(:focus-visible) {
		stroke: none;
	}

	@keyframes flash {
		50% {
			opacity: 1;
		}
	}
</style>
