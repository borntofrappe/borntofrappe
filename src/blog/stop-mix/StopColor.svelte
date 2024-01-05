<script>
	const stops = [
		['yellow', 'orange'],
		['honeydew', 'palegreen'],
		['lightblue', 'azure'],
		['linen', 'lightcoral']
	];
	let [stop] = stops;
</script>

<div>
	<svg
		style="display: block;"
		style:--color-start={stop[0]}
		style:--color-end={stop[1]}
		viewBox="-19.5 -14.5 39 33"
	>
		<defs>
			<linearGradient id="stop-color-gradient">
				<stop style="stop-color: var(--color-start, yellow)" stop-color="yellow" offset="0.5" />
				<stop style="stop-color: var(--color-end, orange)" stop-color="orange" offset="0" />
			</linearGradient>
		</defs>
		<g stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
			<path
				fill="url(#stop-color-gradient)"
				d="M 0 18 L 13 18 Q 12 10 13 -2 Q 15 -1 17 -1 Q 19 -4 19 -9 Q 14 -13 6 -14 Q 3 -11 0 -10 Q -3 -11 -6 -14 Q -14 -13 -19 -9 Q -19 -4 -17 -1 Q -15 -1 -13 -2 Q -12 10 -13 18 Z"
			/>
			<path fill="none" d="M 0 -10 0 18" />
		</g>
	</svg>

	<fieldset>
		<legend>Jersey colors</legend>
		{#each stops as value}
			<label>
				<input type="radio" name="stop-color-pair" {value} bind:group={stop} />
				<span>{value.join(' ')}</span>
			</label>
		{/each}
	</fieldset>
</div>

<style>
	div {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
		align-items: end;
	}

	div > svg {
		max-inline-size: 24rem;
	}

	fieldset {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border: none;
	}

	legend {
		padding: 0;
		font-weight: 700;
	}

	label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	input {
		inline-size: 1.25em;
		block-size: 1.25em;
		color: inherit;
		accent-color: currentColor;
	}
</style>
