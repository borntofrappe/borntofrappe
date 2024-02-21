<script>
	const offset = 400;
	const steps = Math.floor(offset / 100);
	const jump = offset / steps;

	let value = 0;
	$: linear = value * offset * -1;
	$: step = Math.floor(value * steps) * jump * -1;
</script>

<div>
	<svg style="display: block;" viewBox="0 0 5.25 2.575">
		<pattern
			id="translate-pattern"
			patternUnits="userSpaceOnUse"
			width="100"
			height="100"
			viewBox="-50 -50 100 100"
		>
			<path
				fill="currentColor"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M 0 -12 A 12 12 0 0 0 12 0 12 12 0 0 0 0 12 12 12 0 0 0 -12 0 12 12 0 0 0 0 -12"
			/>
		</pattern>
		<svg width="5.25" height="1.25" viewBox="-12.5 -24.5 525 125">
			<g transform="translate({linear} 0)">
				<rect fill="url(#translate-pattern)" stroke="currentColor" width="500" height="100" />
				<rect fill="currentColor" fill-opacity="0.1" width="500" height="100" />
				<g fill="currentColor" font-size="16" font-family="monospace" text-anchor="end">
					<text x="95" y="95">#0</text>
					<text x="195" y="95">#1</text>
					<text x="295" y="95">#2</text>
					<text x="395" y="95">#3</text>
					<text x="495" y="95">#4</text>
				</g>
			</g>
			<rect fill="none" stroke="currentColor" stroke-width="5" width="100" height="100" />
			<text fill="currentColor" font-size="18" font-family="monospace" y="-7">linear</text>
		</svg>
		<svg y="1.325" width="5.25" height="1.25" viewBox="-12.5 -24.5 525 125">
			<g transform="translate({step} 0)">
				<rect fill="url(#translate-pattern)" stroke="currentColor" width="500" height="100" />
				<rect fill="currentColor" fill-opacity="0.1" width="500" height="100" />
				<g fill="currentColor" font-size="16" font-family="monospace" text-anchor="end">
					<text x="95" y="95">#0</text>
					<text x="195" y="95">#1</text>
					<text x="295" y="95">#2</text>
					<text x="395" y="95">#3</text>
					<text x="495" y="95">#4</text>
				</g>
			</g>
			<rect fill="none" stroke="currentColor" stroke-width="5" width="100" height="100" />
			<text fill="currentColor" font-size="18" font-family="monospace" y="-7">steps</text>
		</svg>
	</svg>

	<label>
		<span>Translate</span>
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

	label,
	input {
		display: block;
	}

	input {
		margin-block-start: 0.5rem;
		accent-color: currentcolor;
		inline-size: 100%;
	}
</style>
