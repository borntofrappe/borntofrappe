<script>
	import Tile from '../_Tile.svelte';

	import { Puzzle } from './utils.js';
	import { cubicInOut as easing } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let n = 2;
	export let reveal = Math.floor((n * 2) ** 2 / 2.2);

	const scale = tweened(1, { easing });

	let puzzle = new Puzzle({ n, reveal });

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
					<circle r="0.45" fill="#f2eeef" opacity="0.31" />
				</g>

				<g transform="scale({$scale})">
					<g transform="translate(-0.35 -0.35)">
						{#if n === null}
							<Tile width={0.7} height={0.7} fill="#f2eeef" char="" />
						{:else}
							<Tile
								width={0.7}
								height={0.7}
								fill={locked ? '#fdd4ce' : '#f2eeef'}
								stroke={issues.includes(r * puzzle.size + c) ? '#d91650' : '#07093a'}
								char={n.toString()}
							/>
						{/if}
					</g>
				</g>

				{#if !locked && !solved}
					<g
						tabindex="0"
						role="button"
						aria-label="Row {r + 1} and column {c + 1}, with the current value of {n}."
						style:outline="none"
						class="focusable"
						opacity="0"
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
						<circle r="0.45" fill="#f2eeef" opacity="0.2" />
					</g>

					<g
						style:cursor="pointer"
						on:click={() => {
							updateGrid({ r, c });
						}}
						opacity="0"
					>
						<rect x="-0.35" y="-0.35" width="0.7" height="0.7" />
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
			tabindex="0"
			role="button"
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
				x="-0.5"
				y="-0.5"
				width={puzzle.size}
				height={puzzle.size}
				rx="0.15"
				opacity="0.2"
			/>
		</g>
	{/if}
</svg>

<style>
	svg {
		display: block;
		user-select: none;
		max-width: 28rem;
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
		animation: flash 5 cubic-bezier(0.37, 0, 0.63, 1);
	}

	.focusable:focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) {
		opacity: 0;
	}

	@keyframes flash {
		50% {
			opacity: 1;
		}
	}
</style>
