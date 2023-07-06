<script>
	const n = 60;
	const r = 40;

	let gap = 4;
	let showCircles = true;

	const points = Array(n)
		.fill()
		.map((_, i, { length }) => {
			const angle = (((360 / length) * i) / 180) * Math.PI;
			const x = Math.cos(angle) * r;
			const y = Math.sin(angle) * r;
			return {
				x,
				y
			};
		});

	$: lines = Array(Math.floor(points.length / gap))
		.fill()
		.map((_, i) => {
			const i1 = i * gap;
			const i2 = i * gap + 1;
			const { x: x1, y: y1 } = points[i1];
			const { x: x2, y: y2 } = points[i2];
			return {
				x1,
				y1,
				x2,
				y2
			};
		});
</script>

<label>
	<input type="checkbox" bind:checked={showCircles} />
	<span> Show dots </span>
</label>

<label>
	<span> Skip a different number of points. </span>
	<input type="range" min="2" max="6" bind:value={gap} />
</label>

<svg style="display: block;" viewBox="-50 -50 100 100">
	<g
		fill="currentColor"
		font-family="monospace"
		font-size="8"
		font-weight="700"
		text-anchor="middle"
	>
		<g transform="translate(0 -2)">
			<text>Line 1</text>
			<text y="10">Gap {gap}</text>
		</g>
	</g>
	{#if showCircles}
		<g fill="currentColor">
			{#each points as { x: cx, y: cy }}
				<circle r="1" {cx} {cy} />
			{/each}
		</g>
	{/if}
	<g fill="none" stroke="currentColor" stroke-width="0.5">
		{#each lines as { x1, y1, x2, y2 }}
			<line {x1} {y1} {x2} {y2} />
		{/each}
	</g>
</svg>

<style>
	label {
		display: block;
	}

	input[type='checkbox'] {
		inline-size: 1em;
		block-size: 1em;
	}

	input[type='range'] {
		margin-block-start: 0.5rem;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
