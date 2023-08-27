<script>
	let element = null;

	let value = 5;
	let points = [
		{
			cx: 40,
			cy: 0
		},
		{
			cx: 12.319074630737305,
			cy: 38.055755615234375
		},
		{
			cx: -32.36677551269531,
			cy: 23.503015518188477
		},
		{
			cx: -32.366783142089844,
			cy: -23.503005981445312
		},
		{
			cx: 12.319063186645508,
			cy: -38.055755615234375
		}
	];

	const handleValue = (value) => {
		if (element === null) return;

		const gap = element.getTotalLength() / value;
		points = Array(value)
			.fill()
			.map((_, i) => {
				const offset = gap * i;
				const { x, y } = element.getPointAtLength(offset);
				return {
					cx: x,
					cy: y
				};
			});
	};

	$: handleValue(value);

	$: paths = points
		.slice(0, -1)
		.reduce(
			(acc, { cx: x1, cy: y1 }, i) => [
				...acc,
				...points.slice(i + 1).map(({ cx: x2, cy: y2 }) => `M ${x1} ${y1} ${x2} ${y2}`)
			],
			[]
		);
</script>

<label>
	<span>Drag the handle to plot and connect <code>{value}</code> points</span>
	<input type="range" bind:value min="2" max="10" />
</label>

<svg style="display: block;" viewBox="-44 -44 88 88">
	<g
		fill="none"
		stroke="currentColor"
		stroke-width="1"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<circle bind:this={element} r="40" />

		<g stroke-width="0.75">
			{#each paths as d}
				<path {d} />
			{/each}
		</g>
	</g>

	<g fill="currentColor">
		{#each points as { cx, cy }}
			<circle {cx} {cy} r="4" />
		{/each}
	</g>
</svg>

<style>
	label {
		display: block;
	}

	label > * + * {
		margin-block-start: 0.5rem;
	}

	input {
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
		max-inline-size: 20rem;
		margin-inline: auto;
	}
</style>
