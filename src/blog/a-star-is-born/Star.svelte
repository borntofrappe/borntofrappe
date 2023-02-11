<script>
	const n = 10;
	const points = Array(n)
		.fill()
		.map((_, i, { length }) => {
			const angle = (360 / length) * i + 90;
			const radians = (angle / 180) * Math.PI;

			const offset = i % 2 === 0 ? 15 : 35;
			const x = Math.floor(Math.cos(radians) * offset);
			const y = Math.floor(Math.sin(radians) * offset);

			return [x, y];
		});

	let d = `M ${points[0][0]} ${points[0][1]}`;

	for (let i = 1; i < points.length; i++) {
		const [x, y] = points[i];

		if (i % 2 !== 0) {
			d += ` Q ${x} ${y}`;
		} else {
			d += ` ${x} ${y}`;
		}
	}

	d += ` ${points[0][0]} ${points[0][1]}`;
</script>

<svg viewBox="-50 -50 100 100">
	<g fill="currentColor">
		<path {d} />
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
