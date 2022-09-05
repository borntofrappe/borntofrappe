<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let copies = 2;
	export let reveal = copies * 2 + 1;

	const { grid, size } = getPuzzle({ copies, reveal });

	const handleValue = ({ row, column }) => {
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
							handleValue({ column, row });
						}}
						role="button"
						tabindex="0"
						aria-label="Update tile on row {row + 1} and column {column + 1}."
						style:outline="none"
						class="focusable"
						on:keydown={(event) => {
							const { key } = event;
							if (key === 'Enter') {
								event.preventDefault();
								handleValue({ column, row });
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
								outline="var(--color-text, hsl(19, 56%, 12%))"
								width={0.7}
								height={0.7}
								char={value === null ? '' : value.toString()}
							/>
						</g>
					</g>
				{/if}
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
</style>
