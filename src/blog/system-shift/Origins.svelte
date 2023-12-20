<script>
	const size = 8;

	const coordinates = Array(size + 1)
		.fill()
		.map((_, i, { length }) => i - Math.floor(length / 2));
</script>

<article>
	<h2>viewBox origins</h2>
	<div>
		<figure>
			<figcaption>0 0 {size} {size}</figcaption>
			<svg viewBox="-0.75 -0.75 {size + 1.5} {size + 1.5}">
				<g fill="none" stroke="currentColor">
					<g stroke-width="0.01">
						{#each { length: size + 1 } as _, i}
							<path d="M {i} 0 V {size}" />
							<path d="M 0 {i} H {size}" />
						{/each}
					</g>
				</g>
				<g fill="currentColor" font-family="monospace" font-size="0.5">
					{#each { length: size + 1 } as _, i}
						<text text-anchor="middle" x={i} y="-0.3">{i}</text>
						<text text-anchor="end" y={i + 0.15} x="-0.3">{i}</text>
					{/each}
				</g>
				<circle fill="currentColor" r="0.15" />
			</svg>
		</figure>

		<figure>
			<figcaption>{(size / 2) * -1} {(size / 2) * -1} {size} {size}</figcaption>
			<svg viewBox="{(size / 2 + 0.75) * -1} {(size / 2 + 0.75) * -1} {size + 1.5} {size + 1.5}">
				<g fill="none" stroke="currentColor">
					<g stroke-width="0.01">
						{#each coordinates as i}
							<path d="M {i} {(size / 2) * -1} v {size}" />
							<path d="M {(size / 2) * -1} {i} h {size}" />
						{/each}
					</g>
				</g>
				<g fill="currentColor" font-family="monospace" font-size="0.5">
					{#each coordinates as i}
						<text text-anchor="middle" x={i} y={(size / 2 + 0.3) * -1}>
							{i}
						</text>
						<text text-anchor="end" y={i + 0.15} x={(size / 2 + 0.3) * -1}>
							{i}
						</text>
					{/each}
				</g>
				<circle fill="currentColor" r="0.15" />
			</svg>
		</figure>
	</div>
</article>

<style>
	article {
		text-align: center;
	}

	article > * + * {
		margin-block-start: 0.5rem;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	figure {
		text-align: center;
		margin: 0;
		inline-size: 100%;
		max-inline-size: 20rem;
	}

	figure > * + * {
		margin-block-start: 0.5rem;
	}

	figure > svg {
		inline-size: 100%;
		block-size: auto;
	}

	figcaption {
		font-family: monospace;
		font-weight: 700;
		font-size: 1.25rem;
	}
</style>
