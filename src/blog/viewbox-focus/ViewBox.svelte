<script>
	import { tweened } from 'svelte/motion';
	import { quadInOut as easing } from 'svelte/easing';

	export let n = 20;

	const r = 1;
	const s = 50;

	const getX = () => Math.floor(Math.random() * (s - r)) + r;
	const getY = () => Math.floor(Math.random() * (s - r)) + r;

	const points = Array(n)
		.fill()
		.map(() => {
			const cx = getX();
			const cy = getY();
			return { cx, cy };
		});

	points[0].cx = points[1].cx + r > s / 2 ? points[1].cx - r : points[1].cx + r;
	points[0].cy = points[1].cy + r > s / 2 ? points[1].cy - r : points[1].cy + r;

	const viewBoxes = [
		{ label: 'Default', viewBox: [0, 0, s, s] },
		{ label: '1st Quadrant', viewBox: [0, 0, s / 2, s / 2] },
		{ label: '2nd Quadrant', viewBox: [s / 2, 0, s / 2, s / 2] },
		{ label: '3rd Quadrant', viewBox: [0, s / 2, s / 2, s / 2] },
		{ label: '4tht Quadrant', viewBox: [s / 2, s / 2, s / 2, s / 2] }
	];

	let { label } = viewBoxes[0];

	const viewBox = tweened(viewBoxes.find((d) => d.label === label).viewBox, {
		easing
	});

	$: viewBox.set(viewBoxes.find((d) => d.label === label).viewBox);
</script>

<div>
	<fieldset>
		<legend>Focus</legend>
		{#each viewBoxes as { label: value }}
			<label>
				<input type="radio" bind:group={label} {value} />
				{value}
			</label>
		{/each}
	</fieldset>

	<svg viewBox={$viewBox}>
		<defs>
			<pattern id="view-box-pattern-grid" viewBox="0 0 1 1" width="0.05" height="0.05">
				<g fill="none" stroke="currentColor" stroke-width="0.0025">
					<rect width="1" height="1" />
				</g>
			</pattern>
			<marker
				id="view-box-marker-line"
				orient="auto"
				viewBox="0 0 0.6 1"
				refX="0.5"
				refY="0.5"
				markerWidth="10"
				markerHeight="10"
			>
				<g fill="currentColor">
					<path d="M 0 0 l 0.6 0.5 -0.6 0.5z" />
				</g>
			</marker>
		</defs>
		<rect fill="url(#view-box-pattern-grid)" width={s} height={s} />

		<g fill="none" stroke="currentColor" stroke-width="0.2" marker-end="url(#view-box-marker-line)">
			<line x1={s / 2} y1={s} x2={s / 2} y2="0" />
			<line x1="0" y1={s / 2} x2={s} y2={s / 2} />
		</g>

		<g fill="var(--accent, currentColor)">
			{#each points as { cx, cy }}
				<circle {r} {cx} {cy} />
			{/each}
		</g>
	</svg>
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		gap: 1rem;
	}

	svg {
		display: block;
		max-inline-size: 30rem;
		--accent: hsl(42 87% 55%);
	}

	legend {
		font-weight: 700;
		padding-inline: 0.5rem;
	}
</style>
