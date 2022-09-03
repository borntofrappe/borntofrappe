<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 5;
	export let pattern;
	export let values;
	export let minimum = 5;

	const puzzle = getPuzzle({ size, pattern, values, minimum });

	let focus = null;

	const handleStart = ({ row, column }) => {
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
		if (!focus || (focus.rowEnd === row && focus.columnEnd === column)) return;

		focus.rowEnd = row;
		focus.columnEnd = column;
		// TODO: highlight the possible match
	};

	const handleTouch = ({ row, column }) => {
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

				// TODO: highlight the possible match
				focus = null;
			}
		}
	};

	const handleFocus = () => {
		focus = null;
	};

	const handleKeydown = ({ event, row, column }) => {
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

					// TODO: highlight the possible match
				}
			}
		}
	};
</script>

<svg on:mouseleave={handleEnd} on:mouseup={handleEnd} viewBox="-0.5 -0.5 {size} {size + 1}">
	<g>
		<g transform="translate(-0.34 -0.34)">
			<Tile
				tile="var(--color-tile, hsl(8, 92%, 90%))"
				shadow="var(--color-shadow, hsl(6, 98%, 80%))"
				text="var(--color-focus, hsl(345, 13%, 94%))"
				outline="var(--color-text, hsl(19, 56%, 12%))"
				width={0.68}
				height={0.68}
				char={puzzle.solutions.length}
			/>
		</g>
	</g>
	<g transform="translate(1 0)">
		{#each puzzle.pattern as value, i}
			<g transform="translate({i} 0)">
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
				{#if i < puzzle.pattern.length - 1}
					<g transform="translate(0.5 0)">
						<path
							d="M -0.035 -0.07 l 0.07 0.07 -0.07 0.07"
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

	<g transform="translate(0 1)">
		{#if focus}
			<path
				fill="none"
				stroke="var(--color-focus, hsl(345, 13%, 94%))"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M {focus.columnStart} {focus.rowStart} {focus.columnEnd} {focus.rowEnd}"
				opacity="0.4"
			/>
		{/if}
		<g>
			{#each puzzle.grid.reduce((acc, curr) => [...acc, ...curr], []) as { column, row, value }}
				<g transform="translate({column} {row})">
					<g
						style:cursor="pointer"
						on:mousedown|preventDefault={() => {
							handleStart({ column, row });
						}}
						on:mouseenter={() => {
							handleIng({ column, row });
						}}
						on:touchstart|preventDefault={() => {
							handleTouch({ column, row });
						}}
						tabindex="0"
						role="button"
						aria-label="Row {row + 1} and column {column + 1}, with a  value of {value}."
						style:outline="none"
						class="focusable"
						on:focus={handleFocus}
						on:keydown={(event) => {
							handleKeydown({ event, column, row });
						}}
					>
						<g class="focus" opacity="0">
							<circle r="0.5" fill="var(--color-focus, hsl(345, 13%, 94%))" opacity="0.4" />
						</g>

						<g transform="translate(-0.34 -0.34)">
							<Tile
								tile="var(--color-focus, hsl(345, 13%, 94%))"
								shadow="var(--color-shadow, hsl(6, 98%, 80%))"
								text="var(--color-focus, hsl(345, 13%, 94%))"
								outline="var(--color-text, hsl(19, 56%, 12%))"
								width={0.68}
								height={0.68}
								char={value.toString()}
							/>
							<!-- <rect width="0.68" height="0.68" opacity="0" /> -->
						</g>
					</g>
				</g>
			{/each}
		</g>
	</g>
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
</style>
