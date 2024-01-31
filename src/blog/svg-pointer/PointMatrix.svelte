<script>
	let points = [];

	const handlePoint = (e) => {
		const element = e.target;
		const { clientX, clientY } = e;
		const point = new DOMPoint(clientX, clientY);
		const { x, y } = point.matrixTransform(element.getScreenCTM().inverse());
		points = [...points, { cx: x, cy: y }];
	};
</script>

<svg on:pointerdown={handlePoint} style="display: block;" viewBox="0 0 100 100">
	<g style="pointer-events: none;" fill="currentColor">
		{#each points as { cx, cy }}
			<circle r="2" {cx} {cy} />
		{/each}
	</g>
</svg>

<style>
	svg {
		outline: 0.2rem solid currentColor;
	}
</style>
