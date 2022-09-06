<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let copies = 3;
	export let reveal = 12;

	const { grid, size } = getPuzzle({ copies, reveal });

	let isSolved = false;
	let issues = [];

	const getIssues = (grid) => {
		const issues = [];

		const duplicateIndexes = [];

		for (let index = 0; index < grid.length - 1; index++) {
			if (grid[index].every(({ value }) => value !== null)) {
				const duplicateIndex = grid
					.slice(index + 1)
					.findIndex(
						(section) =>
							section.every(({ value }) => value !== null) &&
							section.map(({ value }) => value).join('') ===
								grid[index].map(({ value }) => value).join('')
					);

				if (duplicateIndex !== -1) {
					[index, index + duplicateIndex + 1].forEach((duplicateIndex) => {
						if (!duplicateIndexes.includes(duplicateIndex)) duplicateIndexes.push(duplicateIndex);
					});
				}
			}
		}

		duplicateIndexes.forEach((duplicateIndex) => {
			Array(size)
				.fill()
				.map((_, nestedIndex) => nestedIndex)
				.forEach((nestedIndex) => {
					const { row, column } = grid[duplicateIndex][nestedIndex];
					issues.push({ row, column });
				});
		});

		for (const section of grid.filter((d, i) => !duplicateIndexes.includes(i))) {
			const zeros = section.filter(({ value }) => value === 0);
			const ones = section.filter(({ value }) => value === 1);
			if (zeros.length > grid.length / 2) {
				zeros.forEach(({ row, column }) => {
					if (!issues.some((issue) => issue.row === row && issue.column === column)) {
						issues.push({ row, column });
					}
				});
			} else if (ones.length > grid.length / 2) {
				ones.forEach(({ row, column }) => {
					if (!issues.some((issue) => issue.row === row && issue.column === column)) {
						issues.push({ row, column });
					}
				});
			}

			[...section, { column: -1, row: -1, value: -1 }]
				.reduce(
					(acc, curr) => {
						const { column, row, value } = curr;
						if (value === acc.value) {
							acc.counter++;
							acc.cells = [...acc.cells, { column, row }];
						} else {
							if (acc.value !== null && acc.counter >= 3) {
								// cells and issues
								acc.issues = [...acc.issues, ...acc.cells];
							}
							acc.value = value;
							acc.counter = 1;
							acc.cells = [{ column, row }];
						}
						return acc;
					},
					{ issues: [], cells: [], counter: 0, value: -1 }
				)
				.issues.forEach(({ row, column }) => {
					if (!issues.some((issue) => issue.row === row && issue.column === column)) {
						issues.push({ row, column });
					}
				});
		}

		return issues;
	};

	$: if (grid) {
		const currentIssues = [
			...getIssues(grid),
			...getIssues(
				Array(size)
					.fill()
					.map((_, i) =>
						Array(size)
							.fill()
							.map((_, j) => grid[j][i])
					)
			)
		];

		issues = currentIssues;
		isSolved =
			currentIssues.length === 0 &&
			grid
				.reduce((acc, curr) => [...acc, ...curr.reduce((a, c) => [...a, c.value], [])], [])
				.every((value) => value !== null);
	}

	const handleCell = ({ row, column }) => {
		let { value } = grid[row][column];
		switch (value) {
			case 1:
				value = null;
				break;
			case 0:
				value = 1;
				break;
			default:
				value = 0;
				break;
		}

		grid[row][column].value = value;
	};
</script>

<svg
	viewBox="-0.5 -0.5 {size} {size}"
	tabindex="0"
	aria-labelledby="title-zeros-and-ones desc-zeros-and-ones"
	style:outline="none"
	class="focusable"
>
	<title id="title-zeros-and-ones">Zeros and Ones</title>
	<desc id="desc-zeros-and-ones"
		>Fill the grid with zeros and ones while respecting a few constraints. Each row, each column
		must contain a unique sequence of values. Moreover, no value should be repeated thrice. Finally,
		each row and column should include an equal number of copies. Focus on a cell and press enter to
		cycle through the available options.</desc
	>
	<g class="focus" opacity="0">
		<rect
			x="-0.5"
			y="-0.5"
			width={size}
			height={size}
			rx="0.2"
			fill="var(--color-focus, hsl(345, 13%, 94%))"
			opacity="0.25"
		/>
	</g>

	<g>
		{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { row, column, isLocked, value }}
			<g transform="translate({column} {row})">
				<g
					class:solved={isSolved}
					style="animation-duration: 0.6s; animation-delay: {(row + column) % 2 ? 0 : 0.18}s"
					opacity="0"
				>
					<circle r="0.5" fill="var(--color-focus, hsl(345, 13%, 94%))" opacity="0.25" />
				</g>

				<g>
					{#if isLocked}
						<g transform="translate(-0.35 -0.35)">
							<Tile
								tile="var(--color-tile, hsl(8, 92%, 90%))"
								shadow="var(--color-shadow, hsl(6, 98%, 80%))"
								text="var(--color-focus, hsl(345, 13%, 94%))"
								outline="var(--color-text, hsl(19, 56%, 12%))"
								width={0.7}
								height={0.7}
								char={value.toString()}
							/>
						</g>
					{:else}
						<g
							style:cursor="pointer"
							on:click={() => {
								if (isSolved) return;

								handleCell({ column, row });
							}}
							role="button"
							tabindex={isSolved ? '-1' : '0'}
							aria-label="Update tile on row {row + 1} and column {column + 1}."
							style:outline="none"
							class="focusable"
							on:keydown={(event) => {
								if (isSolved) return;

								const { key } = event;
								if (key === 'Enter') {
									event.preventDefault();
									handleCell({ column, row });
								} else if (key === 'Escape') {
									event.target.blur();
								}
							}}
						>
							<g class="focus" opacity="0">
								<circle r="0.5" fill="var(--color-focus, hsl(345, 13%, 94%))" opacity="0.25" />
							</g>

							<g transform="translate(-0.35 -0.35)">
								<Tile
									tile="var(--color-focus, hsl(345, 13%, 94%))"
									shadow="var(--color-shadow, hsl(6, 98%, 80%))"
									text="var(--color-focus, hsl(345, 13%, 94%))"
									outline={issues.some((issue) => issue.column === column && issue.row === row)
										? 'var(--color-issue, hsl(342, 82%, 47%))'
										: 'var(--color-text, hsl(19, 56%, 12%))'}
									width={0.7}
									height={0.7}
									char={value === null ? '' : value.toString()}
								/>
							</g>
						</g>
					{/if}
				</g>
			</g>
		{/each}
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

	.solved {
		animation: flash 5 cubic-bezier(0.37, 0, 0.63, 1);
	}

	@keyframes flash {
		50% {
			opacity: 1;
		}
	}
</style>
