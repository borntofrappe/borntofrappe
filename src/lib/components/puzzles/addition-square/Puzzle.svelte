<script>
	import { cubicInOut as easing } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 3;
	export let reveal = size;

	const scale = tweened(1, { easing });
	let puzzle = getPuzzle({ size, reveal });

	let focus;

	let isSolved = false;

	let columns = [];
	let rows = [];
	let issues = [];

	$: buttons = puzzle.numbers
		.reduce((acc, curr) => [...acc, ...curr], [])
		.filter((number) => !puzzle.hints.includes(number))
		.sort((a, b) => a - b);

	$: numbers = puzzle.numbers.map((row) =>
		row.map((number) => {
			const isLocked = puzzle.hints.includes(number);
			return {
				number,
				value: isLocked ? number : 0,
				isLocked
			};
		})
	);

	$: if (numbers) {
		columns = numbers.reduce((acc, curr) => {
			for (let i = 0; i < curr.length; i++) {
				const { value } = curr[i];
				acc[i] = acc[i] ? acc[i] + value : value;
			}

			return acc;
		}, []);

		rows = numbers.reduce((acc, curr) => [...acc, curr.reduce((a, { value }) => a + value, 0)], []);

		const values = numbers.reduce((acc, curr) => [...acc, ...curr.map(({ value }) => value)], []);
		issues = values.filter(
			(d, i, array) => puzzle.hints.includes(d) || array.slice(i + 1).includes(d)
		);

		let totalsMatch = true;
		for (let i = 0; i < columns.length; i++) {
			if (columns[i] !== puzzle.columns[i]) {
				totalsMatch = false;
				break;
			}
		}

		if (totalsMatch) {
			for (let i = 0; i < rows.length; i++) {
				if (rows[i] !== puzzle.rows[i]) {
					totalsMatch = false;
					break;
				}
			}
		}

		if (totalsMatch) {
			isSolved = puzzle.numbers
				.reduce((acc, curr) => [...acc, ...curr], [])
				.every((d) => values.includes(d));

			if (isSolved) {
				handleBlur();
			}
		}
	}

	const handleFocus = ({ row, column }) => {
		focus = { row, column };
	};

	const handleBlur = () => {
		focus = null;
	};

	const handleKeydown = (e) => {
		if (!focus) return;

		const { key } = e;
		if (key === 'Backspace' || key === 'Delete') {
			e.preventDefault();
			handleClear();
		} else if (key === 'Escape') {
			e.preventDefault();
			handleBlur();
		} else {
			const number = parseInt(key, 10);
			if (number) {
				e.preventDefault();
				handleNumber({ number });
			}
		}
	};

	const handleClear = () => {
		const { row, column } = focus;
		numbers[row][column].value = 0;
	};

	const handleNumber = ({ number }) => {
		const { row, column } = focus;
		numbers[row][column].value = number;
	};

	const handleReset = async () => {
		await scale.set(0);
		puzzle = getPuzzle({ size, reveal });

		await scale.set(1);
		isSolved = false;
	};
</script>

<div>
	<svg
		viewBox="-0.5 -0.5 {size + 2} {size + 2}"
		on:click={() => {
			if (!isSolved) handleBlur();
		}}
		tabindex="0"
		aria-label={isSolved
			? 'Play a new round of Addition Square. Press enter to start from scratch.'
			: 'Complete the grid so that the numbers add up together to the values described in the columns and rows. Focus on a cell and press a number key to include the corresponding value. Press delete to remove the existing number.'}
		style:outline="none"
		class="focusable"
		on:focus={() => {
			if (!isSolved) handleBlur();
		}}
		on:keydown={(e) => {
			if (isSolved) {
				const { key } = e;
				if (key === 'Enter') {
					e.preventDefault();
					handleReset();
				}
			} else {
				handleKeydown(e);
			}
		}}
	>
		<g class="focus" transform="translate(0.5 0.5)" opacity="0">
			<rect width={size} height={size} rx="0.2" fill="#f2eeef" opacity="0.2" />
		</g>

		<g style:color="#f2eeef">
			<g transform="translate(1 {size + 1})">
				{#each puzzle.columns as number, column}
					<g transform="translate({column} 0)">
						<circle r="0.35" fill="none" stroke="currentColor" stroke-width="0.02" />
						<g transform="scale({$scale})">
							<text
								text-anchor="middle"
								dominant-baseline="central"
								font-size="0.3"
								fill="currentColor">{number}</text
							>
						</g>
					</g>
				{/each}
			</g>

			<g transform="translate({size + 1} 1)">
				{#each puzzle.rows as number, row}
					<g transform="translate(0 {row})">
						<circle r="0.35" fill="none" stroke="currentColor" stroke-width="0.02" />
						<g transform="scale({$scale})">
							<text
								text-anchor="middle"
								dominant-baseline="central"
								font-size="0.3"
								fill="currentColor">{number}</text
							>
						</g>
					</g>
				{/each}
			</g>

			<g transform="translate(1 0)">
				{#each columns as number, column}
					<g transform="translate({column} 0)">
						<g
							opacity={number === puzzle.columns[column] ? 1 : 0.5}
							style="transition: opacity 0.15s cubic-bezier(0.37, 0, 0.63, 1);"
						>
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
									text-anchor="middle"
									dominant-baseline="central"
									font-size="0.3"
									fill="currentColor">{number}</text
								>
							</g>
						</g>
					</g>
				{/each}
			</g>

			<g transform="translate(0 1)">
				{#each rows as number, row}
					<g transform="translate(0 {row})">
						<g
							opacity={number === puzzle.rows[row] ? 1 : 0.5}
							style="transition: opacity 0.15s cubic-bezier(0.37, 0, 0.63, 1);"
						>
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
									text-anchor="middle"
									dominant-baseline="central"
									font-size="0.3"
									fill="currentColor">{number}</text
								>
							</g>
						</g>
					</g>
				{/each}
			</g>
		</g>

		<g transform="translate(1 1)">
			{#if focus}
				<g transform="translate({focus.column} {focus.row})">
					<circle r="0.5" fill="#f2eeef" opacity="0.4" />
				</g>
			{/if}

			{#each numbers as array, row}
				{#each array as { value, isLocked }, column}
					<g transform="translate({column} {row})">
						<g transform="scale({$scale})">
							<g
								class:solved={isSolved}
								style="animation-duration: 0.6s; animation-delay: {(row + column) % 2 ? 0 : 0.18}s"
								opacity="0"
							>
								<circle r="0.5" fill="#f2eeef" opacity="0.4" />
							</g>
							{#if isLocked}
								<g transform="translate(-0.35 -0.35)">
									<Tile width={0.7} height={0.7} char={value.toString()} />
								</g>
							{:else}
								<g
									style:cursor={isSolved ? 'initial' : 'pointer'}
									on:click|stopPropagation={() => {
										if (!isSolved) handleFocus({ column, row });
									}}
									role="button"
									tabindex={isSolved ? '-1' : '0'}
									aria-label="Add number on row {row + 1} and column {column + 1}.{value !== 0
										? ` Or, delete number ${value}.`
										: ''}"
									style:outline="none"
									on:focus={() => {
										if (!isSolved) handleFocus({ column, row });
									}}
								>
									<g transform="translate(-0.35 -0.35)">
										<Tile
											width={0.7}
											height={0.7}
											tile="#f2eeef"
											outline={issues.includes(value) ? '#d91650' : '#07093a'}
											char={value === 0 ? '' : value.toString()}
										/>
									</g>
								</g>
							{/if}
						</g>
					</g>
				{/each}
			{/each}
		</g>
	</svg>

	<section>
		{#each buttons as number}
			<button
				disabled={isSolved}
				style:cursor={isSolved ? 'initial' : 'pointer'}
				on:click={() => {
					if (!focus) return;

					handleNumber({ number });
				}}
			>
				<span class="visually-hidden">Add the number {number} on the focused cell.</span>
				<Tile char={number.toString()} />
			</button>
		{/each}
		<button
			style:cursor="pointer"
			on:click={() => {
				if (isSolved) {
					handleReset();
				} else if (focus) {
					handleClear();
				}
			}}
		>
			<span class="visually-hidden"
				>{isSolved
					? 'Play a new round of Addition Square.'
					: 'Remove the value from the focused cell.'}</span
			>
			<Tile char="" tile="#f2eeef" />
		</button>
	</section>
</div>

<style>
	div {
		max-width: 30rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div > * + * {
		margin-top: 0.5em;
	}

	div > svg {
		display: block;
	}

	div > .focusable:focus > .focus {
		opacity: 1;
	}

	div > .focusable:focus:not(:focus-visible) > .focus {
		opacity: 0;
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
