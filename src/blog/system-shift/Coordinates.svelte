<script>
	const size = 8;
</script>

<article>
	<h2>Coordinate systems</h2>
	<div>
		<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
			<defs>
				<marker
					id="coordinates-axis-marker"
					viewBox="0 -0.5 0.7 1"
					markerUnits="userSpaceOnUse"
					markerWidth="0.28"
					markerHeight="0.4"
					orient="auto"
				>
					<path fill="currentColor" d="M 0 -0.5 0.75 0 0 0.5" />
				</marker>
			</defs>
		</svg>

		<figure>
			<figcaption>Cartesian</figcaption>
			<svg viewBox="-0.5 -0.5 {size + 1} {size + 1}">
				<g fill="none" stroke="currentColor">
					<g stroke-width="0.01">
						{#each { length: size + 1 } as _, i}
							<path d="M {i} 0 V {size}" />
							<path d="M 0 {i} H {size}" />
						{/each}
					</g>
					<g marker-end="url(#coordinates-axis-marker)" stroke-width="0.07">
						<path d="M 0 {size} H {size}" />
						<path d="M 0 {size} V 0" />
					</g>
				</g>
				<circle fill="currentColor" cy={size} r="0.15" />
				<g fill="currentColor" font-family="monospace" font-size="0.55">
					<text x={size - 0.5} y={size - 0.3} text-anchor="middle">
						+<tspan font-style="italic">x</tspan>
					</text>
					<text x="0.2" y="0.7">+<tspan font-style="italic">y</tspan></text>
				</g>
			</svg>
		</figure>

		<figure>
			<figcaption>SVG</figcaption>
			<svg viewBox="-0.5 -0.5 {size + 1} {size + 1}">
				<g fill="none" stroke="currentColor">
					<g stroke-width="0.01">
						{#each { length: size + 1 } as _, i}
							<path d="M {i} 0 V {size}" />
							<path d="M 0 {i} H {size}" />
						{/each}
					</g>
					<g marker-end="url(#coordinates-axis-marker)" stroke-width="0.07">
						<path d="M 0 0 H {size}" />
						<path d="M 0 0 V {size}" />
					</g>
				</g>
				<circle fill="currentColor" r="0.15" />
				<g fill="currentColor" font-family="monospace" font-size="0.55">
					<text x={size - 0.5} y="0.7" text-anchor="middle">
						+<tspan font-style="italic">x</tspan>
					</text>
					<text x="0.2" y={size - 0.3}>+<tspan font-style="italic">y</tspan></text>
				</g>
			</svg>
		</figure>
	</div>
</article>

<style>
	article {
		text-align: center;
	}

	article > * + * {
		margin-block-start: 0.75rem;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	figure {
		margin: 0;
		inline-size: 100%;
		max-inline-size: 20rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}

	figure:last-of-type {
		flex-direction: column-reverse;
	}

	figure > svg {
		inline-size: 100%;
		block-size: auto;
	}

	figcaption {
		font-weight: 700;
		font-size: 1.25rem;
	}
</style>
