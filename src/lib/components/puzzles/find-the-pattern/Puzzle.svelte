<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut as easing } from 'svelte/easing';

	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 5;
	export let pattern = null;
	export let values = null;
	export let minimum = 5;

	let puzzle = getPuzzle({ size, pattern, values, minimum });

	const tween = tweened(1, { easing });

	let focus = null;
	let solutions = [];
	let tiles = [];

	$: isSolved = solutions.length === puzzle.solutions.length;

	const handleStart = ({ row, column }) => {
		if (isSolved) return;

		focus = {
			rowStart: row,
			columnStart: column,
			rowEnd: row,
			columnEnd: column
		};
	};

	const handleEnd = () => {
		focus = null;
	};

	const handleIng = ({ row, column }) => {
		if (!focus || (focus.rowEnd === row && focus.columnEnd === column) || isSolved) return;

		focus.rowEnd = row;
		focus.columnEnd = column;
		handlePattern();
	};

	const handleTouch = ({ row, column }) => {
		if (isSolved) return;

		if (!focus) {
			focus = {
				rowStart: row,
				columnStart: column,
				rowEnd: row,
				columnEnd: column
			};
		} else {
			const { rowEnd, columnEnd } = focus;
			if (row !== rowEnd || column !== columnEnd) {
				focus.rowEnd = row;
				focus.columnEnd = column;

				handlePattern();
				focus = null;
			}
		}
	};

	const handleFocus = () => {
		if (isSolved) return;

		focus = null;
	};

	const handleKeydown = ({ event, row, column }) => {
		if (isSolved) return;

		const { key } = event;

		if (key === 'Enter') {
			event.preventDefault();

			focus = focus
				? null
				: {
						rowStart: row,
						columnStart: column,
						rowEnd: row,
						columnEnd: column
				  };
		} else if (key === 'Escape') {
			focus = null;
			event.target.blur();
		} else if (focus) {
			const neighbors = {
				ArrowUp: { row: -1, column: 0 },
				ArrowRight: { row: 0, column: 1 },
				ArrowDown: { row: 1, column: 0 },
				ArrowLeft: { row: 0, column: -1 }
			};

			const neighbor = neighbors[key];

			if (neighbor) {
				event.preventDefault();

				const { row: rowNeighbor, column: columnNeighbor } = neighbor;
				const { rowEnd, columnEnd } = focus;
				const row = rowEnd + rowNeighbor;
				const column = columnEnd + columnNeighbor;

				if (row >= 0 && row < size && column >= 0 && column < size) {
					focus.rowEnd = row;
					focus.columnEnd = column;

					handlePattern();
					if (!focus) event.target.blur();
				}
			}
		}
	};

	const handlePattern = () => {
		if (!focus) return;

		const { rowStart, columnStart, rowEnd, columnEnd } = focus;
		const solution = puzzle.solutions.find(
			({
				rowStart: rowStartSolution,
				columnStart: columnStartSolution,
				rowEnd: rowEndSolution,
				columnEnd: columnEndSolution
			}) => {
				return (
					(rowStart === rowStartSolution &&
						columnStart === columnStartSolution &&
						rowEnd === rowEndSolution &&
						columnEnd === columnEndSolution) ||
					(rowEnd === rowStartSolution &&
						columnEnd === columnStartSolution &&
						rowStart === rowEndSolution &&
						columnStart === columnEndSolution)
				);
			}
		);

		if (solution) {
			if (
				solutions.find(
					({
						rowStart: rowStartSolution,
						columnStart: columnStartSolution,
						rowEnd: rowEndSolution,
						columnEnd: columnEndSolution
					}) => {
						return (
							(rowStart === rowStartSolution &&
								columnStart === columnStartSolution &&
								rowEnd === rowEndSolution &&
								columnEnd === columnEndSolution) ||
							(rowEnd === rowStartSolution &&
								columnEnd === columnStartSolution &&
								rowStart === rowEndSolution &&
								columnStart === columnEndSolution)
						);
					}
				)
			)
				return;

			solutions = [...solutions, { rowStart, columnStart, rowEnd, columnEnd }];
			tiles = [...tiles, ...solution.coordinates];
			focus = null;
		}
	};

	const handleReset = async () => {
		await tween.set(0);

		puzzle = getPuzzle({ size, pattern, values, minimum });
		focus = null;
		solutions = [];
		tiles = [];

		await tween.set(1);

		isSolved = false;
	};
</script>

<svg
	viewBox="-0.5 -0.5 {size} {size + 1}"
	on:mouseleave={handleEnd}
	on:mouseup={handleEnd}
	tabindex="0"
	aria-labelledby="title-find-the-pattern desc-find-the-pattern"
	style:outline="none"
	class="focusable"
	on:keydown={(e) => {
		if (isSolved) {
			const { key } = e;
			if (key === 'Enter') {
				e.preventDefault();
				handleReset();
			}
		}
	}}
>
	<title id="title-find-the-pattern">Find the pattern</title>
	<desc id="desc-find-the-pattern"
		>{isSolved
			? 'Continue testing your keen eyes. Press enter to clear the grid and start with a new pattern and a whole set of numbers.'
			: `Link numbers to match the pattern ${puzzle.pattern.join(
					' ,'
			  )}. Focus on a cell and press enter to start a connection. Move with the arrow keys to join neighboring values.`}</desc
	>

	<g class="focus" transform="translate(-0.5 0.5)" opacity="0">
		<rect
			width={size}
			height={size}
			rx="0.2"
			fill="var(--color-focus, hsl(345, 13%, 94%))"
			opacity="0.4"
		/>
	</g>

	<g transform="scale({$tween})">
		<g transform="translate(-0.34 -0.34)">
			<Tile
				tile="var(--color-tile, hsl(8, 92%, 90%))"
				shadow="var(--color-shadow, hsl(6, 98%, 80%))"
				text="var(--color-focus, hsl(345, 13%, 94%))"
				outline="var(--color-text, hsl(19, 56%, 12%))"
				width={0.68}
				height={0.68}
				char={puzzle.solutions.length - solutions.length}
			/>
		</g>
	</g>
	<g transform="translate(1 0)">
		{#each puzzle.pattern as value, i}
			<g transform="translate({i} 0)">
				<g transform="scale({$tween})">
					<g transform="translate(-0.25 -0.25)">
						<Tile
							tile="var(--color-tile, hsl(8, 92%, 90%))"
							shadow="var(--color-shadow, hsl(6, 98%, 80%))"
							text="var(--color-focus, hsl(345, 13%, 94%))"
							outline="var(--color-text, hsl(19, 56%, 12%))"
							width={0.5}
							height={0.5}
							char={value.toString()}
						/>
					</g>
				</g>
				{#if i < puzzle.pattern.length - 1}
					<g transform="translate(0.5 0)">
						<path
							d="M -0.035 -0.07 l 0.07 0.07 -0.07 0.07"
							fill="none"
							stroke="var(--color-focus, hsl(345, 13%, 94%))"
							stroke-width="0.07"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				{/if}
			</g>
		{/each}
	</g>

	<g transform="translate(0 1)">
		<g opacity={$tween}>
			<g
				opacity="0.2"
				fill="none"
				stroke="var(--color-focus, hsl(345, 13%, 94%))"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				{#each solutions as { columnStart, rowStart, columnEnd, rowEnd }, i}
					<g
						class:solved={isSolved}
						style="animation-duration: 0.3s; animation-delay: {i % 2 ? 0 : 0.18}s"
					>
						<path d="M {columnStart} {rowStart} {columnEnd} {rowEnd}" />
					</g>
				{/each}
			</g>
		</g>

		{#if focus}
			<path
				fill="none"
				stroke="var(--color-focus, hsl(345, 13%, 94%))"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M {focus.columnStart} {focus.rowStart} {focus.columnEnd} {focus.rowEnd}"
				opacity="0.2"
			/>
		{/if}
		<g>
			{#each puzzle.grid.reduce((acc, curr) => [...acc, ...curr], []) as { column, row, value }}
				<g transform="translate({column} {row})">
					<g
						style:cursor={isSolved ? 'initial' : 'pointer'}
						on:mousedown|preventDefault={() => {
							handleStart({ column, row });
						}}
						on:mouseenter={() => {
							handleIng({ column, row });
						}}
						on:touchstart|preventDefault={() => {
							handleTouch({ column, row });
						}}
						tabindex={isSolved ? '-1' : '0'}
						role="button"
						aria-label="Add the number {value} to the current pattern."
						style:outline="none"
						class="focusable"
						on:focus={handleFocus}
						on:keydown={(event) => {
							handleKeydown({ event, column, row });
						}}
					>
						<g class="focus" opacity="0">
							<circle r="0.5" fill="var(--color-focus, hsl(345, 13%, 94%))" opacity="0.2" />
						</g>

						<g transform="scale({$tween})">
							<g transform="translate(-0.34 -0.34)">
								<Tile
									tile={tiles.some((tile) => tile.row === row && tile.column === column)
										? 'var(--color-tile, hsl(8, 92%, 90%))'
										: 'var(--color-focus, hsl(345, 13%, 94%))'}
									shadow="var(--color-shadow, hsl(6, 98%, 80%))"
									text="var(--color-focus, hsl(345, 13%, 94%))"
									outline="var(--color-text, hsl(19, 56%, 12%))"
									width={0.68}
									height={0.68}
									char={value.toString()}
								/>
							</g>
						</g>
					</g>
				</g>
			{/each}
		</g>
	</g>

	{#if isSolved}
		<g transform="translate(-0.5 0.5)">
			<g opacity="0" style:cursor="pointer" on:click={handleReset}>
				<rect width={size} height={size} rx="0.2" />
			</g>
		</g>
	{/if}
</svg>

<style>
	svg {
		display: block;
		user-select: none;
	}

	.focusable:focus > .focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) > .focus {
		opacity: 0;
	}

	.solved {
		animation: flash 9 cubic-bezier(0.37, 0, 0.63, 1) alternate forwards;
	}

	@keyframes flash {
		100% {
			opacity: 0;
		}
	}
</style>
