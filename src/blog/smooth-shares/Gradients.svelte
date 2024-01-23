<script>
	const gradients = [
		{
			label: 'Yellow highlight',
			stops: ['hsl(58 100% 61%)', 'hsl(44 99% 59%)']
		},
		{
			label: 'Orange fancy',
			stops: ['hsl(39 93% 63%)', 'hsl(7 78% 68%)', 'hsl(303 56% 53%)']
		},
		{
			label: 'Green reflection',
			stops: ['hsl(160 80% 68%)', 'hsl(152 57% 53%)', 'hsl(160 80% 68%)']
		},
		{
			label: 'Blue wonder',
			stops: ['hsl(149 83% 77%)', 'hsl(182 72% 59%)', 'hsl(193 98% 52%)']
		}
	];

	let [gradient] = gradients;
</script>

<article>
	<svg style="display: block;" viewBox="0 0 34 34">
		<defs>
			<linearGradient id="reference-game-gradient">
				{#each gradient.stops as stop, i}
					<stop stop-color={stop} offset={(1 / (gradient.stops.length - 1)) * i} />
				{/each}
			</linearGradient>
			<linearGradient
				id="reference-game-gradient-rotate"
				href="#reference-game-gradient"
				gradientTransform="rotate(90)"
			/>
			<radialGradient
				id="reference-game-gradient-radial"
				href="#reference-game-gradient"
				cx="0.3"
				cy="0.3"
				r="0.7"
			/>
		</defs>
		<rect fill="url(#reference-game-gradient)" x="4" width="30" height="2" />
		<rect fill="url(#reference-game-gradient-rotate)" y="4" width="2" height="30" />
		<circle fill="url(#reference-game-gradient-radial)" cx="20" cy="20" r="14" />
	</svg>

	<div>
		<p>Gradients</p>
		<fieldset>
			{#each gradients as value}
				<label>
					<input type="radio" bind:group={gradient} {value} />
					<span style="background: linear-gradient(to right, {value.stops.join(', ')})" />
					<span>{value.label}</span>
				</label>
			{/each}
		</fieldset>
	</div>
</article>

<style>
	article {
		--threshold: 30rem;
		display: flex;
		flex-wrap: wrap;
		max-inline-size: 40rem;
		margin-inline: auto;
		color: hsl(0 0% 10%);
		background: hsl(0 0% 100%);
	}

	article > * {
		flex-grow: 1;
		flex-basis: calc((var(--threshold, 30rem) - 100%) * 999);
		padding: 2rem;
	}

	article > svg {
		inline-size: 100%;
		max-inline-size: var(--threshold, 30rem);
		background: hsl(0 0% 90%);
	}

	div > * + *,
	fieldset > * + * {
		margin-block-start: 1rem;
	}

	p {
		text-transform: uppercase;
		font-size: 0.9em;
		font-weight: 400;
	}

	fieldset {
		border: 0;
		padding: 0;
	}

	label {
		--input-size: 1.5rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}

	label > input {
		inline-size: var(--input-size, 1.5rem);
		block-size: var(--input-size, 1.5rem);
		opacity: 0;
	}

	label > span:first-of-type {
		display: inline-block;
		position: absolute;
		inline-size: var(--input-size, 1.5rem);
		block-size: var(--input-size, 1.5rem);
		border-radius: 1e5px;
		background: hsl(0 0% 90%);
	}

	input:checked ~ span {
		font-weight: 700;
	}

	input:focus ~ span:first-of-type {
		outline: 1px solid;
		outline-offset: 2px;
	}

	input:focus:not(:focus-visible) ~ span:first-of-type {
		outline: none;
	}
</style>
