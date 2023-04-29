<script>
	import { tweened } from 'svelte/motion';

	let coords = tweened([0, 4, 1, 3, 2, 3, 3, 1, 4, 4, 5, 3, 6, 3, 7, 2, 8, 0, 9, 1, 10, 1]);
	$: d = `M ${$coords.join(' ')} 10 5 0 5`;

	const getCoords = () =>
		Array(11)
			.fill()
			.reduce((acc, _, i, { length }) => {
				const x = i;
				const min = i === length - 1 ? 1 : 0;

				const y0 = acc.length > 0 ? acc[acc.length - 1] : 4 - Math.floor(Math.random() * 4);
				let dy = Math.random() > 0.5 ? 1 : -1;
				if (Math.random() > 0.75) dy *= 2;
				const y = Math.min(4, Math.max(min, y0 + dy));
				return [...acc, x, y];
			}, []);

	const handleClick = () => {
		coords.set(getCoords());
	};
</script>

<button on:click={handleClick}>Update points</button>

<svg viewBox="0 0 12 7.5">
	<defs>
		<linearGradient id="line-chart-gradient-shadow" x1="0" x2="0" y1="0" y2="1">
			<stop stop-color="hsl(0, 0%, 72%)" stop-opacity="0.3" offset="0" />
			<stop stop-color="hsl(0, 0%, 72%)" stop-opacity="0" offset="1" />
		</linearGradient>
		<pattern id="line-chart-pattern-flag" viewBox="0 0 2 2" x="0.125" width="0.5" height="0.5">
			<rect fill="hsl(0, 0%, 72%)" width="2" height="2" />
			<g fill="hsl(0, 0%, 42%)">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<marker id="line-chart-marker-mid" viewBox="0 0 2 2" refX="1" refY="1">
			<circle fill="hsl(0, 0%, 28%)" cx="1" cy="1" r="1" />
		</marker>
		<marker
			id="line-chart-marker-start"
			viewBox="0 0 2 2"
			refX="1"
			refY="1"
			markerWidth="6"
			markerHeight="6"
		>
			<g transform="translate(1 1)">
				<circle fill="hsl(0, 0%, 28%)" r="1" />
				<path
					fill="hsl(0, 0%, 72%)"
					stroke="hsl(0, 0%, 72%)"
					stroke-width="0.2"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -0.2 -0.375 l 0.55 0.375 -0.55 0.375z"
				/>
			</g>
		</marker>
		<marker
			id="line-chart-marker-end"
			viewBox="0 0 3 3"
			refX="1.5"
			refY="3"
			markerWidth="12"
			markerHeight="12"
		>
			<g transform="translate(1.5 1)">
				<line stroke="hsl(0, 0%, 28%)" stroke-width="0.1" x1="0" y1="0" x2="0" y2="2" />
				<circle fill="hsl(0, 0%, 28%)" r="1" />
				<circle fill="url(#line-chart-pattern-flag)" r="0.75" />
			</g>
		</marker>
	</defs>
	<rect fill="hsl(0, 0%, 99%)" width="12" height="7.5" rx="0.4" />
	<g transform="translate(1 1.25)">
		<path fill="url(#line-chart-gradient-shadow)" {d} />
		<g fill="none" stroke="hsl(0, 0%, 28%)">
			<line stroke-width="0.075" x1="0" y1="5" x2="10" y2="5" />
			<polyline
				marker-mid="url(#line-chart-marker-mid)"
				marker-start="url(#line-chart-marker-start)"
				marker-end="url(#line-chart-marker-end)"
				stroke-width="0.1"
				points={$coords}
			/>
		</g>
	</g>
</svg>

<style>
	button {
		display: block;
		margin-inline: auto;
		color: hsl(0, 0%, 92%);
		background: hsl(0, 0%, 10%);
		border: none;
		border-radius: 2rem;
		font-weight: 700;
		padding: 0.25rem 0.75rem;
		transition: transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button:active {
		transform: scale(0.95);
	}

	svg {
		display: block;
	}
</style>
