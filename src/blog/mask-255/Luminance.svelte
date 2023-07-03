<script>
	let color = [
		{
			name: 'red',
			label: 'Red',
			value: 255,
			weight: 0.2125
		},
		{
			name: 'lime',
			label: 'Green',
			value: 255,
			weight: 0.7154
		},
		{
			name: 'blue',
			label: 'Blue',
			value: 255,
			weight: 0.0721
		}
	];

	const format = (d) => d.toString().slice(0, 6);

	$: luminance = color.reduce((acc, { value, weight }) => acc + (value / 255) * weight, 0);
</script>

<p>Drag the handles to update the luminance with the tree color channels.</p>

<div>
	{#each color as { name, label, value }}
		<label>
			<span style:--name={name}>{label}</span>
			<output>{value}</output>
			<input type="range" min="0" max="255" bind:value />
		</label>
	{/each}
</div>

<svg style="display: block;" viewBox="-35 -36 70 72.5">
	<defs>
		<circle id="luminance-body" r="30" />
		<ellipse id="luminance-top" cy="-25" rx="26" ry="8" />
		<rect id="luminance-overlay" fill="hsl(0 0% 100%)" x="-30" y="-30" width="60" height="60" />
		<clipPath id="luminance-clip">
			<use href="#luminance-body" />
			<use href="#luminance-top" />
		</clipPath>
	</defs>

	<ellipse fill="hsl(0 0% 70%)" cy="35" rx="26" ry="1.5" />
	<g fill="none" stroke="hsl(0 0% 10%)" stroke-width="8" stroke-linecap="round">
		<path transform="rotate(25) translate(0 30)" d="M -5 0 v 8" />
		<path transform="scale(-1 1) rotate(25) translate(0 30)" d="M -5 0 v 8" />
	</g>

	<use
		fill="hsl(0 0% 10%)"
		stroke="hsl(0 0% 17%)"
		stroke-width="10"
		paint-order="stroke"
		href="#luminance-body"
	/>
	<use fill="hsl(0 0% 100% / 0.15)" href="#luminance-body" />
	<use fill="hsl(0 0% 10%)" href="#luminance-top" />

	<g clip-path="url(#luminance-clip)">
		<g transform="translate(0 {60 * (1 - luminance)})">
			<use href="#luminance-overlay" />
		</g>
	</g>

	<use fill="hsl(0 0% 0% / 0.03)" href="#luminance-top" />
	<use fill="none" stroke="hsl(0 0% 17%)" stroke-width="6" href="#luminance-top" />

	<text
		transform="translate(0 3.5)"
		fill="hsl(0 0% 99%)"
		stroke="hsl(0 0% 10%)"
		stroke-width="3"
		stroke-linejoin="round"
		paint-order="stroke"
		font-family="monospace"
		font-size="11"
		font-weight="700"
		text-anchor="middle"
		y="4"
	>
		{format(luminance)}
	</text>
</svg>

<style>
	div > * + * {
		margin-block-start: 0.75rem;
	}

	label {
		display: block;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	label input {
		flex-grow: 1;
	}

	@supports (display: grid) {
		div > * + * {
			margin-block-start: initial;
		}

		div {
			display: grid;
			grid-template-columns: auto auto 1fr;
			gap: 0.75rem 0.5rem;
		}

		div > label {
			display: contents;
		}
	}

	span {
		position: relative;
		padding-inline-start: 1.5em;
	}

	span::before {
		content: '';
		position: absolute;
		inline-size: 1em;
		block-size: 1em;
		background: var(--name);
		border-radius: 50%;
		inset-inline-start: 0%;
		inset-block-start: 50%;
		transform: translateY(-50%);
	}

	output {
		font-weight: 700;
	}

	input[type='range'] {
		font-size: 1rem;
		appearance: none;
		padding: 0.1rem 0.25rem;
		border: none;
		border-radius: 1rem;
		background: hsl(0 0% 20%);
		accent-color: hsl(0 0% 99%);
	}

	svg {
		max-inline-size: 18rem;
		margin-inline: auto;
	}
</style>
