<script>
	export let size = 3;
	export let colors = ['hsl(0, 68%, 67%)', 'hsl(54, 99%, 72%)', 'hsl(197, 87%, 73%)'];

	const h = 10;
	const w = h * 2;
	const d = 4;
	const strokeWidth = 1;

	const width = w * size * 2 + strokeWidth;
	const height = h * size * 2 + d + strokeWidth;

	const grid = Array(size ** 2)
		.fill()
		.map((_, i) => {
			const column = i % size;
			const row = Math.floor(i / size);

			const x = w * row * -1 + w * column;
			const y = h * row + h * column;

			return {
				x,
				y,
				color: colors[colors.length - 1]
			};
		});

	console.log(grid);
	grid[0].color = colors[0];
	grid[grid.length - 2].color = colors[1];
</script>

<svg
	style:outline="1px solid"
	viewBox="{(width / 2) * -1} {(strokeWidth / 2) * -1} {width} {height}"
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
		{#each grid as { x, y, color: fill }}
			<g transform="translate({x} {y})">
				<g>
					<use href="#color-tiles-tile" {fill} />
				</g>
			</g>
		{/each}
	</g>
	<circle r="1" fill="white" />
</svg>

<style>
	svg {
		display: block;
	}
</style>
