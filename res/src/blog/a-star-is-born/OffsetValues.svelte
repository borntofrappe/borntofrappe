<script>
	export let rotate = false;
	const n = 10;
	const points = Array(n)
		.fill()
		.map((_, i, { length }) => {
			const angle = rotate ? (360 / length) * i + 90 : (360 / length) * i;
			const radians = (angle / 180) * Math.PI;

			const offset = i % 2 === 0 ? 15 : 35;
			const x = Math.floor(Math.cos(radians) * offset);
			const y = Math.floor(Math.sin(radians) * offset);

			return [x, y];
		});
</script>

<svg viewBox="-50 -50 100 100">
	<g fill="currentColor">
		<path d="M {points}" />
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
