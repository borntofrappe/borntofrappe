<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 3;

	const puzzle = getPuzzle({ size, reveal: 3 });

	let columns = [];
	let rows = [];
	let focus;

	let numbers = puzzle.numbers.map((row) =>
		row.map((number) => {
			const locked = puzzle.hints.includes(number);
			return {
				number,
				value: locked ? number : 0,
				locked
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
			const { row, column } = focus;
			numbers[row][column].value = 0;
		} else if (key === 'Escape') {
			e.preventDefault();
			handleBlur();
		} else {
			const value = parseInt(key, 10);
			if (value) {
				e.preventDefault();
				const { row, column } = focus;
				numbers[row][column].value = value;
			}
		}
	};
</script>

<svg
	viewBox="-0.5 -0.5 {size + 2} {size + 2}"
	on:click={handleBlur}
	tabindex="0"
	aria-label="Fill the grid with the correct numbers."
	on:focus={handleBlur}
	class="focusable"
	style:outline="none"
	on:keydown={handleKeydown}
>
	<g class="focus" transform="translate(0.5 0.5)" opacity="0">
		<rect width={size} height={size} rx="0.2" fill="#f2eeef" opacity="0.2" />
	</g>
	<g style:color="#f2eeef">
		<g transform="translate(1 {size + 1})">
			{#each puzzle.columns as number, column}
				<g transform="translate({column} 0)">
					<circle r="0.35" fill="none" stroke="currentColor" stroke-width="0.02" />
					<text text-anchor="middle" dominant-baseline="central" font-size="0.3" fill="currentColor"
						>{number}</text
					>
				</g>
			{/each}
		</g>

		<g transform="translate({size + 1} 1)">
			{#each puzzle.rows as number, row}
				<g transform="translate(0 {row})">
					<circle r="0.35" fill="none" stroke="currentColor" stroke-width="0.02" />
					<text text-anchor="middle" dominant-baseline="central" font-size="0.3" fill="currentColor"
						>{number}</text
					>
				</g>
			{/each}
		</g>

		<g transform="translate(1 0)">
			{#each columns as number, column}
				<g transform="translate({column} 0)">
					<g opacity={number === puzzle.columns[column] ? 1 : 0.5}>
						<path
							opacity="0.25"
							fill="none"
							stroke="currentColor"
							stroke-width="0.05"
							d="M 0 1 v {rows.length - 1}"
						/>

						<circle r="0.35" fill="none" stroke="currentColor" stroke-width="0.02" />
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

		<g transform="translate(0 1)">
			{#each rows as number, row}
				<g transform="translate(0 {row})">
					<g opacity={number === puzzle.rows[row] ? 1 : 0.5}>
						<path
							opacity="0.25"
							fill="none"
							stroke="currentColor"
							stroke-width="0.05"
							d="M 1 0 h {columns.length - 1}"
						/>

						<circle r="0.35" fill="none" stroke="currentColor" stroke-width="0.02" />
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
	</g>

	<g transform="translate(1 1)">
		{#if focus}
			<g transform="translate({focus.column} {focus.row})">
				<circle r="0.45" fill="#f2eeef" opacity="0.3" />
			</g>
		{/if}

		<g transform="translate(-0.35 -0.35)">
			{#each numbers as array, row}
				{#each array as { value, locked }, column}
					<g transform="translate({column} {row})">
						{#if locked}
							<Tile width={0.7} height={0.7} char={value.toString()} />
						{:else}
							<g
								style:cursor="pointer"
								on:click|stopPropagation={() => {
									handleFocus({ column, row });
								}}
								role="button"
								tabindex="0"
								aria-label="Row {row + 1} and column {column + 1}."
								on:focus={() => {
									handleFocus({ column, row });
								}}
								style:outline="none"
							>
								<Tile
									width={0.7}
									height={0.7}
									tile="#f2eeef"
									char={value === 0 ? '' : value.toString()}
								/>
							</g>
						{/if}
					</g>
				{/each}
			{/each}
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
		max-width: 30rem;
	}

	.focusable:focus > .focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) > .focus {
		opacity: 0;
	}
</style>
