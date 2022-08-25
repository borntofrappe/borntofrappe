<script>
	export let size = 3;
	export let colors = ['hsl(0, 68%, 67%)', 'hsl(54, 99%, 72%)', 'hsl(197, 87%, 73%)'];

	const h = 10;
	const w = h * 2;
	const d = 4;
	const strokeWidth = 0;

	const width = w * size * 2 + strokeWidth;
	const height = h * size * 2 + d + strokeWidth;

	const grid = Array(size)
		.fill()
		.map((_, row) =>
			Array(size)
				.fill()
				.map((_, column) => {
					const x = w * row * -1 + w * column;
					const y = h * row + h * column;
					return {
						x,
						y,
						column,
						row,
						color: null
					};
				})
		);

	let color = colors[0];
	const defaultColor = colors[colors.length - 1];

	const updateGrid = ({ row, column }) => {
		grid[row][column].color = color;
		color = color === colors[0] ? colors[1] : colors[0];
	};
</script>

<svg
	viewBox="{(width / 2) * -1} {(strokeWidth / 2) * -1} {width} {height}"
	tabindex="0"
	aria-label="Position tiles in the grid to create a line with the same color. Focus on a tile and press enter to position the piece."
>
	<defs>
		<g id="color-tiles-tile">
			<path d="M 0 0 l {w} {h} 0 {d} {w * -1} {h} {w * -1} {h * -1} 0 {d * -1}z" />
			<path
				fill="black"
				opacity="0.3"
				d="M {w * -1} {h} l {w} {h} {w} {h * -1} 0 {d} {w * -1} {h} {w * -1} {h * -1}z"
			/>
			<path
				fill="none"
				stroke="black"
				d="M {w * -1} {h} l {w} {h} {w} {h * -1} 0 {d} {w * -1} {h} {w * -1} {h * -1} 0 {d *
					-1} {w} {h * -1} {w} {h * 1}"
			/>
		</g>
	</defs>
	<g stroke="currentColor" stroke-width={strokeWidth}>
		{#each grid.reduce((acc, curr) => [...acc, ...curr], []) as { x, y, column, row, color }}
			<g transform="translate({x} {y})">
				<g>
					{#if color}
						<use href="#color-tiles-tile" fill={color} />
					{:else}
						<g
							class="tile"
							on:click={() => {
								updateGrid({ column, row });
							}}
							style:outline="none"
							tabindex="0"
							aria-label="Row {row} and column {column}. Color {color}"
							role="button"
							on:keydown={(e) => {
								const { key } = e;
								if (key === 'Enter') {
									e.preventDefault();
									updateGrid({ column, row });
								}
							}}
						>
							<use href="#color-tiles-tile" fill={defaultColor} />
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

	svg:focus:not(:focus-visible) {
		outline: none;
	}

	.tile {
		cursor: pointer;
	}

	.tile:hover,
	.tile:focus {
		filter: brightness(1.25);
	}
</style>
