<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut as easing } from 'svelte/easing';

	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 5;
	export let reveal = 8;
	export let relate = 12;

	let { grid, numbers } = getPuzzle({ size, reveal, relate });

	const scale = tweened(1, { easing });

	let focus = null;
	let isSolved = false;
	let issues = [];

	$: if (grid) {
		const currentIssues = [];

		const gridColumns = Array(size)
			.fill()
			.map((_, i) =>
				Array(size)
					.fill()
					.map((_, j) => grid[j][i])
			);

		for (const gridColumn of gridColumns) {
			for (const cell of gridColumn) {
				const { value, row } = cell;
				if (value !== 0) {
					const duplicates = gridColumn.slice(row + 1).filter((d) => d.value === value);
					if (duplicates.length > 0) {
						for (const { row, column, isLocked } of [cell, ...duplicates]) {
							if (
								!isLocked &&
								!currentIssues.some(
									(currentIssue) => currentIssue.row === row && currentIssue.column === column
								)
							) {
								currentIssues.push({ row, column });
							}
						}
					}
				}
			}
		}

		for (const gridRow of grid) {
			for (const cell of gridRow) {
				const { value, column } = cell;
				if (value !== 0) {
					const duplicates = gridRow.slice(column + 1).filter((d) => d.value === value);
					if (duplicates.length > 0) {
						for (const { row, column, isLocked } of [cell, ...duplicates]) {
							if (
								!isLocked &&
								!currentIssues.some(
									(currentIssue) => currentIssue.row === row && currentIssue.column === column
								)
							) {
								currentIssues.push({ row, column });
							}
						}
					}

					for (const { neighbor, sign } of cell.relations) {
						const { row, column } = neighbor;
						const neighborCell = grid[row][column];
						const { value: neighborValue } = neighborCell;
						if (
							neighborValue !== 0 &&
							((sign === 1 && value < neighborValue) || (sign === -1 && value > neighborValue))
						) {
							for (const { row, column, isLocked } of [cell, neighborCell]) {
								if (
									!isLocked &&
									!currentIssues.some(
										(currentIssue) => currentIssue.row === row && currentIssue.column === column
									)
								) {
									currentIssues.push({ row, column });
								}
							}
						}
					}
				}
			}
		}

		issues = currentIssues;
		isSolved =
			currentIssues.length === 0 &&
			grid
				.reduce((acc, curr) => [...acc, ...curr.reduce((a, c) => [...a, c.value], [])], [])
				.every((value) => value !== 0);

		if (isSolved) {
			focus = null;
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
			if (number && numbers.includes(number)) {
				e.preventDefault();
				handleNumber({ number });
			}
		}
	};

	const handleClear = () => {
		const { row, column } = focus;
		grid[row][column].value = 0;
	};

	const handleNumber = ({ number }) => {
		const { row, column } = focus;
		grid[row][column].value = number;
	};

	const handleReset = async () => {
		await scale.set(0);

		grid = getPuzzle({ size, reveal, relate }).grid;
		// issues = []

		await scale.set(1);

		isSolved = false;
	};
</script>

<div>
	<svg
		viewBox="-0.5 -0.5 {size} {size}"
		on:click={() => {
			if (!isSolved) handleBlur();
		}}
		role="menu"
		tabindex="0"
		aria-labelledby="title-more-or-less desc-more-or-less"
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
		<title id="title-more-or-less">More or Less</title>
		<desc id="desc-more-or-less"
			>{isSolved
				? `The grid is filled, every rule is respected. Nicely done. Press enter to clear the grid and start with a new set of values.${
						relate > 0 ? ' And a new set of comparisons signs.' : ''
				  }`
				: `Fill the grid with numbers. Be sure to respect a few rules, however. Each row, each column must contain only one copy of the available numbers: ${numbers.join(
						', '
				  )}.${
						relate > 0
							? "What's more, the numbers should respect the order set with the comparison signs."
							: ''
				  }. Focus on a cell and press a number key to include the corresponding value. Press delete to remove the existing number.`}</desc
		>

		<g class="focus" transform="translate(-0.5 -0.5)" opacity="0">
			<rect
				width={size}
				height={size}
				rx="0.2"
				fill="var(--color-focus, hsl(345, 13%, 94%))"
				opacity="0.25"
			/>
		</g>

		<g>
			{#if focus}
				<g transform="translate({focus.column} {focus.row})">
					<circle r="0.4" fill="var(--color-focus, hsl(345, 13%, 94%))" opacity="0.25" />
				</g>
			{/if}

			{#each grid.reduce( (acc, curr) => [...acc, ...curr] ) as { column, row, value, isLocked, relations }}
				<g transform="translate({column} {row})">
					<g
						class:solved={isSolved}
						style="animation-duration: 0.6s; animation-delay: {(row + column) % 2 ? 0 : 0.18}s"
						opacity="0"
					>
						<circle r="0.4" fill="var(--color-focus, hsl(345, 13%, 94%))" opacity="0.25" />
					</g>

					<g transform="scale({$scale})">
						{#if isLocked}
							<g transform="translate(-0.3 -0.3)">
								<Tile
									tile="var(--color-tile, hsl(8, 92%, 90%))"
									shadow="var(--color-shadow, hsl(6, 98%, 80%))"
									text="var(--color-focus, hsl(345, 13%, 94%))"
									outline="var(--color-text, hsl(19, 56%, 12%))"
									width={0.6}
									height={0.6}
									char={value.toString()}
								/>
							</g>
						{:else}
							<g
								style:cursor={isSolved ? 'initial' : 'pointer'}
								on:click|stopPropagation={() => {
									if (!isSolved) handleFocus({ row, column });
								}}
								role="button"
								tabindex={isSolved ? '-1' : '0'}
								aria-label="Add a number on row {row + 1} and column {column + 1}.{value !== 0
									? ` Or, delete number ${value}.`
									: ''}"
								style:outline="none"
								on:focus={() => {
									if (!isSolved) handleFocus({ row, column });
								}}
								on:keydown
							>
								<g transform="translate(-0.3 -0.3)">
									<Tile
										tile="var(--color-focus, hsl(345, 13%, 94%))"
										shadow="var(--color-shadow, hsl(6, 98%, 80%))"
										text="var(--color-focus, hsl(345, 13%, 94%))"
										outline={issues.some((issue) => issue.column === column && issue.row === row)
											? 'var(--color-issue, hsl(342, 82%, 47%))'
											: 'var(--color-text, hsl(19, 56%, 12%))'}
										width={0.6}
										height={0.6}
										char={value === 0 ? '' : value.toString()}
									/>
								</g>
							</g>
						{/if}
					</g>

					{#each relations as { direction, sign }}
						<g transform="rotate({direction * 90})">
							<g transform="translate(0 -0.5)">
								<g transform="scale(1 {sign * 1})">
									<g transform="scale({$scale})">
										<path
											d="M -0.07 0.035 l 0.07 -0.07 0.07 0.07"
											fill="none"
											stroke="var(--color-focus, hsl(345, 13%, 94%))"
											stroke-width="0.07"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
								</g>
							</g>
						</g>
					{/each}
				</g>
			{/each}
		</g>
	</svg>

	<section>
		{#each numbers as number}
			<button
				disabled={isSolved}
				style:cursor={isSolved ? 'initial' : 'pointer'}
				on:click={() => {
					if (!focus) return;

					handleNumber({ number });
				}}
			>
				<span class="visually-hidden">Add the number {number} on the focused cell.</span>
				<Tile
					tile="var(--color-tile, hsl(8, 92%, 90%))"
					shadow="var(--color-shadow, hsl(6, 98%, 80%))"
					text="var(--color-focus, hsl(345, 13%, 94%))"
					outline="var(--color-text, hsl(19, 56%, 12%))"
					char={number.toString()}
				/>
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
					? 'Clear the grid and start with a new set of values.'
					: 'Remove the value from the focused cell.'}</span
			>
			<Tile
				tile="var(--color-focus, hsl(345, 13%, 94%))"
				shadow="var(--color-shadow, hsl(6, 98%, 80%))"
				text="var(--color-focus, hsl(345, 13%, 94%))"
				outline="var(--color-text, hsl(19, 56%, 12%))"
				char=""
			/>
		</button>
	</section>
</div>

<style>
	div {
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
		background: var(--color-shadow, hsl(6, 98%, 80%));
		border-radius: 0.25rem;
	}

	section::-webkit-scrollbar-thumb {
		background: var(--color-tile, hsl(8, 92%, 90%));
		border-radius: 0.25rem;
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
		background: var(--color-focus, hsl(345, 13%, 94%));
		transform: translate(-50%, -50%) scale(1.25);
		border-radius: 50%;
		opacity: 0;
		z-index: -1;
	}

	button:focus {
		outline: none;
	}

	button:focus::before {
		opacity: 0.25;
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
