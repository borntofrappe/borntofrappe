<script>
	let points = [];

	const width = 100;
	const height = 100;

	const handlePoint = (e) => {
		const bCR = e.target.getBoundingClientRect();
		const { clientX, clientY } = e;
		const x = ((clientX - bCR.x) / bCR.width) * width;
		const y = ((clientY - bCR.y) / bCR.height) * height;
		points = [...points, { cx: x, cy: y }];
	};
</script>

<svg on:pointerdown={handlePoint} style="display: block;" viewBox="0 0 100 100">
	<g style="pointer-events: none" fill="currentColor">
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
