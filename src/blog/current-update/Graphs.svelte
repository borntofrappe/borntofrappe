<script>
	import { quadInOut } from 'svelte/easing';

	const n = 15;

	const linear = Array(n)
		.fill()
		.map((_, i, { length }) => (1 / (length - 1)) * i);
	const ease = Array(n)
		.fill()
		.map((_, i, { length }) => quadInOut((1 / (length - 1)) * i));
	const sine = Array(n)
		.fill()
		.map((_, i, { length }) => Math.sin((1 / (length - 1)) * i * Math.PI));

	const graphs = [
		{
			label: 'Linear',
			points: linear
		},
		{
			label: 'Ease',
			points: ease
		},
		{
			label: 'Sine',
			points: sine
		}
	].map(({ label, points }) => ({
		label,
		circles: points.map((p, i, { length }) => ({
			cy: p,
			cx: (1 / (length - 1)) * i
		}))
	}));
</script>

<div>
	{#each graphs as { label, circles }}
		<svg style="display: block;" viewBox="-0.1 -0.2 1.2 1.3">
			<g fill="none" stroke="currentColor">
				<path stroke-width="0.01" d="M 0 0 0 1 1 1" />
				<path
					stroke-width="0.0025"
					opacity="0.3"
					d="M 0 0 1 0 M 0 0.25 1 0.25 M 0 0.5 1 0.5 M 0 0.75 1 0.75 M 0.25 0 0.25 1 M 0.5 0 0.5 1 M 0.75 0 0.75 1 M 1 0 1 1"
				/>
			</g>
			<g
				fill="currentColor"
				font-size="0.05"
				font-family="monospace"
				style="text-transform: uppercase;"
			>
				<text font-size="0.06" font-weight="700" x="0.5" y="-0.05" text-anchor="middle">
					{label}
				</text>
				<text x="0.5" y="1.075" text-anchor="middle">Time</text>
				<text x="-0.05" y="1.075">0</text>
				<text x="1.025" y="1.075">1</text>
				<text transform="translate(-0.025 0.5) rotate(-90)" text-anchor="middle">Value</text>
				<text transform="translate(-0.025 -0.03)" text-anchor="end">1</text>
			</g>
			<g transform="translate(0 1) scale(1 -1)" fill="currentColor">
				{#each circles as { cx, cy }}
					<circle {cx} {cy} r="0.02" />
				{/each}
			</g>
		</svg>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}

	div > svg {
		max-inline-size: 18rem;
	}
</style>
