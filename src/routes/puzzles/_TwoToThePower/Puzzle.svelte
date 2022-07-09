<script>
	import Tile from '../_Tile.svelte';

	import { Puzzle, getNumber, getEmptyCell, checkGameWon, checkGameLost } from './utils.js';
	import { fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicInOut as easing } from 'svelte/easing';

	export let exponent = 9;
	$: winCondition = 2 ** exponent;

	const scale = tweened(1, { easing });

	let puzzle = new Puzzle();

	const directions = [
		{ dir: 'up', code: 'ArrowUp' },
		{ dir: 'right', code: 'ArrowRight' },
		{ dir: 'down', code: 'ArrowDown' },
		{ dir: 'left', code: 'ArrowLeft' }
	];

	let gamewon, gamelost;

	const addNumber = () => {
		const emptyCell = getEmptyCell(puzzle.grid);

		if (!emptyCell) return false;

		const { column, row } = emptyCell;
		puzzle.grid[row][column].value = getNumber();
	};

	const slide = ({ dir }) => {
		if (gamewon || gamelost) return;

		let flipped;
		let rotated;

		const { size } = puzzle;

		if (dir === 'up') {
			let rotation = [];
			for (let r = 0; r < size; r++) {
				rotation[r] = [];
				for (let c = 0; c < size; c++) {
					rotation[r][c] = {
						row: r,
						column: c,
						value: puzzle.grid[size - c - 1][r].value
					};
				}
			}
			puzzle.grid = rotation;
			rotated = true;

			for (let r = 0; r < size; r++) {
				puzzle.grid[r] = [...puzzle.grid[r]].reverse();
			}
			flipped = true;
		} else if (dir === 'right') {
			for (let r = 0; r < size; r++) {
				puzzle.grid[r] = [...puzzle.grid[r]].reverse();
			}
			flipped = true;
		} else if (dir === 'down') {
			let rotation = [];
			for (let r = 0; r < size; r++) {
				rotation[r] = [];
				for (let c = 0; c < size; c++) {
					rotation[r][c] = {
						row: r,
						column: c,
						value: puzzle.grid[size - c - 1][r].value
					};
				}
			}
			puzzle.grid = rotation;
			rotated = true;
		}

		let hasMoved;

		for (let r = 0; r < size; r++) {
			let c1 = 0;
			let v1 = puzzle.grid[r][c1].value;
			for (let c = 1; c < size; c++) {
				const { value } = puzzle.grid[r][c];
				if (value === 0) {
					continue;
				} else if (value === v1) {
					puzzle.score += value * 2;

					puzzle.grid[r][c1].value = value * 2;
					puzzle.grid[r][c].value = 0;

					c1++;
					v1 = 0;
					hasMoved = true;
				} else {
					const c0 = puzzle.grid[r].slice(0, c).findIndex((d) => d.value === 0);
					if (c0 !== -1) {
						puzzle.grid[r][c0].value = value;
						puzzle.grid[r][c].value = 0;

						c1 = c0;
						v1 = value;
						hasMoved = true;
					} else {
						c1 = c;
						v1 = value;
					}
				}
			}
		}

		if (flipped) {
			for (let r = 0; r < size; r++) {
				puzzle.grid[r] = [...puzzle.grid[r]].reverse();
			}
		}

		if (rotated) {
			let rotation = [];
			for (let r = 0; r < size; r++) {
				rotation[r] = [];
				for (let c = 0; c < size; c++) {
					rotation[r][c] = {
						row: r,
						column: c,
						value: puzzle.grid[c][size - r - 1].value
					};
				}
			}
			puzzle.grid = rotation;
		}

		if (hasMoved) {
			addNumber();
			gamewon = checkGameWon(puzzle.grid, winCondition);
			gamelost = checkGameLost(puzzle.grid);
		}
	};

	const handleKey = (e) => {
		const { code } = e;
		const direction = directions.find((d) => d.code === code);
		if (direction) {
			e.preventDefault();
			slide(direction);
		}
	};

	const handleReset = async () => {
		await scale.set(0);

		puzzle = new Puzzle();
		gamewon = false;
		gamelost = false;

		await scale.set(1);
	};
</script>

<svg
	viewBox="-1 -1.75 {puzzle.size + 1} {puzzle.size + 1.75}"
	tabindex="0"
	aria-label="Slide the numbers up, right, down or to the left to add the same values together and reach {winCondition}."
	on:keydown={handleKey}
>
	<g style:color="#f2eeef">
		<g transform="translate(-0.42 -0.75)">
			<text font-size="0.35" fill="currentColor">
				{puzzle.score}
			</text>
		</g>
	</g>

	{#each puzzle.grid as row}
		{#each row as { column, row, value }}
			<g transform="translate({column} {row})">
				<g transform="scale({$scale})">
					<g transform="translate(-0.4 -0.4)">
						{#if value === 0}
							<Tile char="" width={0.8} height={0.8} fill="#f2eeef" />
						{:else}
							<Tile
								char={value.toString()}
								width={0.8}
								height={0.8}
								stroke={gamelost ? '#d91650' : '#07093a'}
							/>
						{/if}
					</g>
				</g>
			</g>
		{/each}
	{/each}

	{#if gamewon || gamelost}
		<g style:color="#f2eeef">
			<g transform="translate({puzzle.size - 0.5 - 0.08} -0.75)">
				<g transform="translate(-0.8 -0.8)">
					<g transition:fly={{ duration: 275, x: puzzle.size }}>
						<g
							style:cursor="pointer"
							on:click={handleReset}
							aria-label="Reset grid to start a new round."
							tabindex="0"
							style:outline="none"
							class="focusable"
							opacity="0"
							on:keydown|stopPropagation={(e) => {
								const { key, target } = e;
								if (key === 'Enter') {
									e.preventDefault();
									handleReset();
									target.blur();
								}
							}}
						>
							<rect
								opacity="0.2"
								fill="currentColor"
								x="-0.1"
								y="-0.1"
								width="1"
								height="1"
								rx="0.1"
							/>
						</g>
						<g pointer-events="none">
							<Tile char={winCondition.toString()} width={0.8} height={0.8} />
						</g>
					</g>
				</g>
			</g>
		</g>
	{:else}
		<g style:color="#f2eeef">
			<g transform="translate({puzzle.size / 2 - 0.5} {puzzle.size / 2 - 0.5})">
				{#each directions as direction, i}
					<g transform="rotate({(360 / directions.length) * i})">
						<g
							aria-label="Slide the numbers {direction.dir}."
							tabindex="0"
							style:outline="none"
							class="focusable"
							opacity="0"
							on:keydown|stopPropagation={(e) => {
								const { code } = e;
								if (code === 'Enter') {
									e.preventDefault();
									slide(direction);
								}
							}}
						>
							<g transform="translate(0 {(puzzle.size / 2) * -1})">
								<circle opacity="0.2" fill="currentColor" r="0.45" />
							</g>
						</g>
						<g
							opacity="0"
							style:cursor="pointer"
							class="hoverable"
							on:click={() => {
								slide(direction);
							}}
						>
							<path
								opacity="0"
								d="M 0 0 l {((puzzle.size + 1) / 2) * -1} {((puzzle.size + 1) / 2) *
									-1} h {puzzle.size + 1}"
							/>
							<g>
								<g transform="translate(0 {(puzzle.size / 2) * -1})">
									<circle opacity="0.2" fill="currentColor" r="0.45" />
								</g>
							</g>
						</g>
					</g>
				{/each}
			</g>
		</g>
	{/if}
</svg>

<style>
	svg {
		display: block;
		max-width: 30rem;
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

	.hoverable {
		transition: opacity 0.2s ease-in-out;
	}

	.hoverable:hover {
		opacity: 1;
	}

	.focusable:focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) {
		opacity: 0;
	}
</style>
