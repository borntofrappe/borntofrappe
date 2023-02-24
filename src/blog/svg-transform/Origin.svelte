<script>
	export let offset = false;

	let angle = 25;
	let origin = true;

	let transform = '';
	$: {
		transform = offset ? `translate(50 50) rotate(${angle})` : `rotate(${angle})`;
	}
</script>

<label>
	Drag the handle to update the angle
	<input min="0" max="90" step="1" type="range" bind:value={angle} />
</label>

<label>
	<input type="checkbox" bind:checked={origin} />
	Highlight origin
</label>

<svg viewBox="0 0 100 100">
	<g transform="translate(90 25)">
		<g fill="currentColor" font-size="20" font-weight="700" text-anchor="end">
			<text>{angle}°</text>
		</g>
	</g>
	<g>
		<g fill="none" stroke="#632b2a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
			<path d="M 50 50 v 35 h -10 h 20" />
		</g>
		<circle fill="#632b2a" cx="50" cy="50" r="4" />
	</g>

	{#if origin}
		<g {transform}>
			<circle fill="currentColor" r="4" />
			<path stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" d="M -200 0 h 400" />
		</g>
	{/if}

	<g {transform}>
		<path
			fill="none"
			stroke="#db9756"
			stroke-width="4"
			d={offset ? 'M 0 -40 v 60' : 'M 50 10 v 60'}
		/>
	</g>
</svg>

<style>
	label {
		display: block;
	}

	input[type='range'] {
		display: block;
		inline-size: 100%;
		margin-block-start: 0.25rem;
	}

	input[type='checkbox'] {
		inline-size: 1em;
		block-size: 1em;
	}

	svg {
		display: block;
	}
</style>
