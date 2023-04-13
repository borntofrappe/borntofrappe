<script>
	export let accentColor = 'hotpink';
	export let showPath = true;
	export let useCurves = true;

	const n = 12;
	const offset = 40;

	const points = Array(n)
		.fill()
		.map((_, i, { length }) => {
			const angle = (((360 / length) * i - 90) / 180) * Math.PI;
			const x = Math.floor(Math.cos(angle) * offset);
			const y = Math.floor(Math.sin(angle) * offset);
			return [x, y];
		});

	let d = '';

	if (showPath) {
		if (useCurves) {
			const [x0, y0] = points[0];
			const [x1, y1] = points[1];
			const xm = (x0 + x1) / 2;
			const ym = (y0 + y1) / 2;

			d = `M ${x0} ${y0} Q ${xm} ${ym} ${x1} ${y1} T`;
			for (let i = 2; i < points.length; i++) {
				const [x, y] = points[i];
				d += `${x} ${y} `;
			}
			d += `${x0} ${y0}z`;
		} else {
			const [x0, y0] = points[0];
			d = `M ${x0} ${y0}`;
			for (let i = 1; i < points.length; i++) {
				const [x, y] = points[i];
				d += ` L ${x} ${y}`;
			}
			d += ` L ${x0} ${y0}z`;
		}
	}
</script>

<svg viewBox="-50 -50 100 100">
	<g fill="currentColor">
		{#each points as [cx, cy]}
			<circle r="2" {cx} {cy} />
		{/each}
	</g>
	{#if showPath}
		<path {d} stroke={accentColor} fill="none" />
	{/if}
</svg>

<style>
	svg {
		display: block;
	}
</style>
