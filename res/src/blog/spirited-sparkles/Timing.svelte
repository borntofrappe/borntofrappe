<script>
	const offset = 400;
	const steps = Math.floor(offset / 100);
	const jump = offset / steps;

	let value = 0;
	$: linear = value * offset * -1;
	$: step = Math.floor(value * steps) * jump * -1;
</script>

<div>
	<svg style="display: block;" viewBox="0 0 5.03 2.635">
		<defs>
			<pattern
				id="translate-pattern"
				patternUnits="userSpaceOnUse"
				width="100"
				height="100"
				viewBox="-50 -50 100 100"
			>
				<circle fill="currentColor" r="10" />
			</pattern>
			<filter
				id="translate-filter"
				filterUnits="userSpaceOnUse"
				x="100"
				y="0"
				width="400"
				height="100"
			>
				<feTurbulence baseFrequency="0.2 0.4" numOctaves="3" />
				<feDisplacementMap in="SourceGraphic" scale="10" />
			</filter>
		</defs>
		<svg width="5.03" height="1.285" viewBox="-2.5 -26 503 128.5">
			<svg width="100" height="100" viewBox="0 0 100 100">
				<g id="translate-region-linear" transform="translate({linear} 0)">
					<rect fill="url(#translate-pattern)" x="100" width="400" height="100" />
					<g fill="currentColor" font-size="14" font-family="monospace" text-anchor="end">
						<text x="92.5" y="92.5">#0</text>
						<text x="192.5" y="92.5">#1</text>
						<text x="292.5" y="92.5">#2</text>
						<text x="392.5" y="92.5">#3</text>
						<text x="492.5" y="92.5">#4</text>
					</g>
				</g>
			</svg>
			<use filter="url(#translate-filter)" opacity="0.5" href="#translate-region-linear" />
			<rect
				fill="currentColor"
				fill-opacity="0.1"
				stroke="currentColor"
				stroke-width="5"
				width="100"
				height="100"
			/>
			<text fill="currentColor" font-size="18" font-family="monospace" y="-8">continuous</text>
		</svg>
		<svg y="1.35" width="5.03" height="1.285" viewBox="-2.5 -26 503 128.5">
			<svg width="100" height="100" viewBox="0 0 100 100">
				<g id="translate-region-steps" transform="translate({step} 0)">
					<rect fill="url(#translate-pattern)" x="100" width="400" height="100" />
					<g fill="currentColor" font-size="14" font-family="monospace" text-anchor="end">
						<text x="92.5" y="92.5">#0</text>
						<text x="192.5" y="92.5">#1</text>
						<text x="292.5" y="92.5">#2</text>
						<text x="392.5" y="92.5">#3</text>
						<text x="492.5" y="92.5">#4</text>
					</g>
				</g>
			</svg>
			<use filter="url(#translate-filter)" opacity="0.5" href="#translate-region-steps" />
			<rect
				fill="currentColor"
				fill-opacity="0.1"
				stroke="currentColor"
				stroke-width="5"
				width="100"
				height="100"
			/>
			<text fill="currentColor" font-size="18" font-family="monospace" y="-8">discrete</text>
		</svg>
	</svg>

	<label>
		<span>Translate shapes</span>
		<input type="range" list="translate-steps" min="0" max="1" step="0.01" bind:value />
		<datalist id="translate-steps">
			{#each { length: steps + 1 } as _, i}
				<option value={(1 / steps) * i} />
			{/each}
		</datalist>
	</label>
</div>

<style>
	div {
		max-inline-size: 36rem;
		margin-inline: auto;
	}

	div > * + * {
		margin-block-start: 0.5rem;
	}

	label {
		display: block;
	}

	label > * + * {
		margin-block-start: 0.5rem;
	}

	span {
		font-weight: 700;
	}

	input {
		display: block;
		color: inherit;
		accent-color: currentcolor;
		inline-size: 100%;
	}
</style>
