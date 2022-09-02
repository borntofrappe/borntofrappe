<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 3;

	const puzzle = getPuzzle({ size, reveal: 3 });

	const numbers = puzzle.numbers.map((row) =>
		row.map((number) => {
			const locked = puzzle.hints.includes(number);
			return {
				number,
				value: locked ? number : 0,
				locked
			};
		})
	);

	const columns = numbers.reduce((acc, curr) => {
		for (let i = 0; i < curr.length; i++) {
			const { value } = curr[i];
			acc[i] = acc[i] ? acc[i] + value : value;
		}

		return acc;
	}, []);

	const rows = numbers.reduce(
		(acc, curr) => [...acc, curr.reduce((a, { value }) => a + value, 0)],
		[]
	);
</script>

<svg viewBox="-0.5 -0.5 {size + 2} {size + 2}">
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
		<g transform="translate(-0.35 -0.35)">
			{#each numbers as array, row}
				{#each array as { value, locked }, column}
					<g transform="translate({column} {row})">
						<Tile
							width={0.7}
							height={0.7}
							tile={locked ? '#fdd4ce' : '#f2eeef'}
							char={value === 0 ? '' : value.toString()}
						/>
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
</style>
