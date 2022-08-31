<script>
	import Display from './Display.svelte';
	import { Puzzle } from './utils.js';

	export let rows = 10;
	export let columns = 10;
	export let mines = 10;

	let puzzle = new Puzzle({ columns, rows, mines });
	let state = 'play';
	let flags = [];

	const handleReset = () => {
		puzzle = new Puzzle({ columns, rows, mines });
		flags = [];

		state = 'play';
	};

	const handleReveal = ({ row, column, firstContact = true }) => {
		if (puzzle.grid[row][column].isRevealed) return;

		if (firstContact) {
			if (state === 'lose' || state === 'win') return;

			if (flags.some((flag) => flag.row === row && flag.column === column)) return;
		}

		puzzle.grid[row][column].isRevealed = true;

		if (
			puzzle.grid
				.reduce((acc, curr) => [...acc, ...curr], [])
				.every(
					({ isRevealed, state }) =>
						(state !== 'mine' && isRevealed) || (state === 'mine' && !isRevealed)
				)
		) {
			state = 'win';
		} else if (firstContact && puzzle.grid[row][column].state === 'mine') {
			state = 'lose';

			for (let row = 0; row < puzzle.grid.length; row++) {
				for (let column = 0; column < puzzle.grid[row].length; column++) {
					if (
						!puzzle.grid[row][column].isRevealed &&
						!flags.some((flag) => flag.row === row && flag.column === column)
					) {
						puzzle.grid[row][column].isRevealed = true;
					}
				}
			}
		} else if (puzzle.grid[row][column].state === 0) {
			const neighbors = puzzle.offsetsNeighbors
				.map(({ row: offsetRow, column: offsetColumn }) => ({
					row: row + offsetRow,
					column: column + offsetColumn
				}))
				.filter(({ row: neighborRow, column: neighborColumn }) => {
					if (!puzzle.grid[neighborRow] || !puzzle.grid[neighborRow][neighborColumn]) return false;

					const cell = puzzle.grid[neighborRow][neighborColumn];
					return (
						cell.state !== 'mine' &&
						!cell.isRevealed &&
						!flags.some((flag) => flag.row === neighborRow && flag.column === neighborColumn)
					);
				});

			neighbors.forEach(({ row, column }) => {
				handleReveal({ row, column });
			});
		}
	};

	const handleFlag = ({ row, column }) => {
		if (state === 'lose' || state === 'win') return;

		const i = flags.findIndex((flag) => flag.row === row && flag.column === column);
		if (i === -1) {
			if (flags.length < mines) flags = [...flags, { row, column }];
		} else {
			flags = [...flags.slice(0, i), ...flags.slice(i + 1)];
		}
	};
</script>

<svg
	viewBox="-0.1 -0.1 {columns + 0.2 + 1} {rows + 0.2 + 3}"
	class="focusable"
	style:outline="none"
	tabindex="0"
	aria-label="Avoid mines and clear the grid. Focus on a cell and press enter to reveal the content. Press f to toggle a flag and mark the cell as locked."
>
	<defs>
		<linearGradient id="minesweeper-linear-gradient-stroke-se" x1="0" x2="1" y1="0" y2="1">
			<stop stop-color="#ffffff" offset="0.5" />
			<stop stop-color="#767676" offset="0.5" />
		</linearGradient>

		<linearGradient id="minesweeper-linear-gradient-stroke-nw" x1="1" x2="0" y1="1" y2="0">
			<stop stop-color="#ffffff" offset="0.5" />
			<stop stop-color="#767676" offset="0.5" />
		</linearGradient>

		<symbol viewBox="-0.45 -0.45 0.9 0.9" id="minesweeper-puzzle-play">
			<circle r="0.42" fill="#f7e700" stroke="#040404" stroke-width="0.05" />
			<g>
				<g fill="#040404" transform="translate(0 -0.11)">
					<circle r="0.06" cx="-0.13" />
					<circle r="0.06" cx="0.13" />
				</g>
				<g fill="none" stroke="#040404" stroke-width="0.05">
					<path d="M -0.19 0.1 a 0.21 0.21 0 0 0 0.38 0" />
				</g>
			</g>
		</symbol>

		<symbol viewBox="-0.45 -0.45 0.9 0.9" id="minesweeper-puzzle-win">
			<circle r="0.42" fill="#f7e700" stroke="#040404" stroke-width="0.05" />
			<g fill="#040404">
				<g transform="translate(0 -0.11)">
					<circle r="0.06" cx="-0.13" />
					<circle r="0.06" cx="0.13" />
				</g>
				<g stroke="#040404" stroke-width="0.05">
					<path
						d="M -0.42 0 l 0.19 -0.15 v 0.05 a 0.1 0.1 0 0 0 0.2 0 v -0.05 h 0.06 v 0.05 a 0.1 0.1 0 0 0 0.2 0 v -0.05 l 0.19 0.15 -0.19 -0.15 h -0.46z"
						stroke-linejoin="round"
					/>
				</g>
			</g>
			<g fill="none" stroke="#040404" stroke-width="0.05">
				<path d="M -0.19 0.1 a 0.21 0.21 0 0 0 0.38 0" />
			</g>
		</symbol>

		<symbol viewBox="-0.45 -0.45 0.9 0.9" id="minesweeper-puzzle-lose">
			<circle r="0.42" fill="#f7e700" stroke="#040404" stroke-width="0.05" />
			<g fill="none" stroke="#040404" stroke-width="0.05">
				<g transform="translate(-0.13 -0.11)">
					<path transform="rotate(45)" d="M -0.11 0 h 0.22 m -0.11 -0.11 v 0.22" />
				</g>
				<g transform="translate(0.13 -0.11)">
					<path transform="rotate(45)" d="M -0.11 0 h 0.22 m -0.11 -0.11 v 0.22" />
				</g>
				<path d="M -0.19 0.2 a 0.24 0.24 0 0 1 0.38 0" />
			</g>
		</symbol>

		<symbol viewBox="0 0 10 10" id="minesweeper-cell-mine">
			<g fill="#040404" transform="translate(0 0)">
				<path
					d="M 4.5 0 l 1 0 0 1 1.5 0 0 1 1 0 0 -1 1 0 0 1 -1 0 0 1 1 0 0 1.5 1 0 0 1 -1 0 0 1.5 -1 0 0 1 1 0 0 1 -1 0 0 -1 -1 0 0 1 -1.5 0 0 1 -1 0 0 -1 -1.5 0 0 -1 -1 0 0 1 -1 0 0 -1 1 0 0 -1 -1 0 0 -1.5 -1 0 0 -1 1 0 0 -1.5 1 0 0 -1 -1 0 0 -1 1 0 0 1 1 0 0 -1 1.5 0"
				/>
			</g>
			<g fill="#ffffff">
				<rect x="3" y="3" width="1.5" height="1.5" />
			</g>
		</symbol>

		<symbol viewBox="0 0 10 10" id="minesweeper-cell-0" />

		<symbol viewBox="0 0 10 10" id="minesweeper-cell-1" fill="#0000f8">
			<path d="M 4 0.5 l 2 0 0 7.5 2 0 0 1.5 -6 0 0 -1.5 2 0 0 -4.5 -2 0 0 -1 1 0 0 -1 1 0" />
		</symbol>

		<symbol viewBox="0 0 10 10" id="minesweeper-cell-2" fill="#017e00">
			<path
				d="M 1.5 0.5 l 7 0 0 1 1 0 0 2 -1 0 0 1 -1.25 0 0 1 -1.25 0 0 1 -1.25 0 0 1 4.75 0 0 2 -9 0 0 -2 1 0 0 -1 1.25 0 0 -1 1.25 0 0 -1 1.25 0 0 -1 1.25 0 0 -1 -3 0 0 1 -3 0 0 -2 1 0"
			/>
		</symbol>

		<symbol viewBox="0 0 10 10" id="minesweeper-cell-3" fill="#fa0202">
			<path
				d="M 0.5 0.5 l 8 0 0 1 1 0 0 2.5 -1 0 0 2 1 0 0 2.5 -1 0 0 1 -8 0 0 -2 6 0
							 0 -1.5 -3 0 0 -2 3 0 0 -1.5 -6 0"
			/>
		</symbol>

		<symbol viewBox="0 0 10 10" id="minesweeper-cell-4" fill="#01017d">
			<path
				d="M 2.5 0.5 l 3 0 0 1.75 -1 0 0 1.75 2 0 0 -3.5 2 0 0 3.5 1 0 0 2 -1 0 0 3.5 -2 0 0 -3.5 -6 0 0 -2 1 0 0 -1.75 1 0"
			/>
		</symbol>

		<symbol viewBox="0 0 10 10" id="minesweeper-cell-5" fill="#7d0002">
			<path
				d="M 0.5 0.5 l 9 0 0 2 -6 0 0 1.5 5 0 0 2 1 0 0 2.5 -1 0 0 1 -8 0 0 -2 6 0 0 -1.5 -6 0"
			/>
		</symbol>

		<symbol viewBox="0 0 10 10" id="minesweeper-cell-6" fill="#037f7f">
			<path
				d="M 1.5 0.5 l 7 0 0 2 -5 0 0 1.5 5 0 0 2 1 0 0 2.5 -1 0 0 1 -7 0 0 -1 -1 0 0 -1 6 0 0 -1.5 -3 0 0 1.5 -3 0 0 -6 1 0"
			/>
		</symbol>

		<symbol viewBox="0 0 10 10" id="minesweeper-cell-7" fill="#000000">
			<path
				d="M 0.5 0.5 l 9 0 0 3.75 -1 0 0 1.75 -1 0 0 1.75 -1 0 0 1.75 -3 0 0 -1.75 1 0 0 -1.75 1 0 0 -1.75 1 0 0 -1.75 -6 0"
			/>
		</symbol>

		<symbol viewBox="0 0 10 10" id="minesweeper-cell-8" fill="#7f7f7f">
			<path
				d="M 1.5 0.5 l 7 0 0 1 1 0 0 2.5 -1 0 0 2 1 0 0 2.5 -1 0 0 1 -7 0 0 -1 -1 0 0 -1 6 0 0 -1.5 -3 0 0 1.5 -3 0 0 -1.5 1 0 0 -2 5 0 0 -1.5 -3 0 0 1.5 -2 0 -1 0 0 -2.5 1 0"
			/>
		</symbol>

		<symbol viewBox="0 0 10 10" id="minesweeper-flag">
			<g fill="#fa0202">
				<path d="M 4 0.5 l 2 0 0 5 -2 0 0 -1 -2 0 0 -1 -1 0 0 -1 1 0 0 -1 2 0" />
			</g>

			<g fill="#040404">
				<path d="M 5 5.5 l 1 0 0 1.5 1 0 0 1 1 0 0 1.5 -6 0 0 -1.5 1 0 0 -1 2 0" />
			</g>
		</symbol>
	</defs>

	<rect
		fill="#bbbbbb"
		stroke="url(#minesweeper-linear-gradient-stroke-se)"
		stroke-width="0.2"
		width={columns + 1}
		height={rows + 3}
	/>

	<g class="focus" opacity="0">
		<rect
			fill="none"
			stroke="url(#minesweeper-linear-gradient-stroke-nw)"
			stroke-width="0.2"
			width={columns + 1}
			height={rows + 3}
		/>
	</g>

	<g
		fill="#bbbbbb"
		stroke="url(#minesweeper-linear-gradient-stroke-nw)"
		stroke-width="0.12"
		transform="translate(-0.06 -0.06)"
	>
		<g transform="translate(0.5 0.5)">
			<rect width={columns + 0.12} height={1.62} />
		</g>

		<g transform="translate(0.5 2.5)">
			<rect width={columns + 0.12} height={rows + 0.12} />
		</g>
	</g>

	<g transform="translate(0.5 0.5)">
		<g>
			<rect fill="#040404" width="3" height="1.5" />
			<g transform="translate(1.5 0.75)">
				<g transform="translate(-1.25 -0.6)">
					<Display value="000" color="#fa0202" width={2.5} height={1.2} gap={25} />
				</g>
			</g>
		</g>

		<g transform="translate({columns - 3} 0)">
			<rect fill="#040404" width="3" height="1.5" />

			<g transform="translate(1.5 0.75)">
				<g transform="translate(-1.25 -0.6)">
					<Display
						value={(mines - flags.length).toString().padStart(3, '0')}
						color="#fa0202"
						width={2.5}
						height={1.2}
						gap={25}
					/>
				</g>
			</g>
		</g>

		<g transform="translate({columns / 2} 0)">
			<g transform="translate(0 0.06)">
				<g
					style:cursor="pointer"
					on:click={handleReset}
					class="focusable"
					style:outline="none"
					role="button"
					tabindex="0"
					aria-label="Press enter to start a new puzzle."
					on:keydown={(e) => {
						const { key } = e;
						if (key === 'Enter') {
							e.preventDefault();
							handleReset();
						}
					}}
				>
					<rect
						fill="#bbbbbb"
						stroke="url(#minesweeper-linear-gradient-stroke-se)"
						stroke-width="0.12"
						x="-0.69"
						width="1.38"
						height="1.38"
					/>

					<g class="focus" opacity="0">
						<rect
							fill="none"
							stroke="url(#minesweeper-linear-gradient-stroke-nw)"
							stroke-width="0.12"
							x="-0.69"
							width="1.38"
							height="1.38"
						/>
					</g>

					<g transform="translate(0 0.69)">
						<svg x="-0.45" y="-0.45" width="0.9" height="0.9">
							<use href="#minesweeper-puzzle-{state}" />
						</svg>
					</g>
				</g>
			</g>
		</g>
	</g>

	<g transform="translate(0.5 2.5)">
		<g on:contextmenu|preventDefault>
			{#each puzzle.grid.reduce((acc, curr) => [...acc, ...curr], []) as { column, row, isRevealed, state }}
				<g transform="translate({column} {row})">
					{#if isRevealed}
						<rect
							fill="#bcbcbc"
							stroke="#767676"
							stroke-width="0.05"
							x="0.025"
							y="0.025"
							width="0.95"
							height="0.95"
						/>

						<svg x="0.2" y="0.2" width="0.6" height="0.6">
							<use href="#minesweeper-cell-{state}" />
						</svg>
					{:else}
						<g
							style:cursor="pointer"
							on:touchstart={() => {
								handleReveal({ column, row });
							}}
							on:mousedown={({ button }) => {
								if (button === 0) {
									handleReveal({ column, row });
								} else if (button === 2) {
									handleFlag({ column, row });
								}
							}}
							class="focusable"
							style:outline="none"
							role="button"
							tabindex="0"
							aria-label="Cell on row {row + 1} and column {column + 1}."
							on:keydown={(e) => {
								const { key } = e;
								if (key === 'Enter') {
									e.preventDefault();
									handleReveal({ column, row });
								} else if (key === 'f' || key === 'F') {
									handleFlag({ column, row });
								}
							}}
						>
							<rect
								fill="#c3c3c3"
								stroke="url(#minesweeper-linear-gradient-stroke-se)"
								stroke-width="0.1"
								x="0.05"
								y="0.05"
								width="0.9"
								height="0.9"
							/>
							<g class="focus" opacity="0">
								<rect
									fill="none"
									stroke="url(#minesweeper-linear-gradient-stroke-nw)"
									stroke-width="0.1"
									x="0.05"
									y="0.05"
									width="0.9"
									height="0.9"
								/>
							</g>
						</g>
					{/if}
				</g>
			{/each}
		</g>

		<g style:pointer-events="none">
			{#each flags as { column, row }}
				<g transform="translate({column} {row})">
					<svg x="0.2" y="0.2" width="0.6" height="0.6">
						<use href="#minesweeper-flag" />
					</svg>
				</g>
			{/each}
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	.focusable:focus > .focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) > .focus {
		opacity: 0;
	}
</style>
