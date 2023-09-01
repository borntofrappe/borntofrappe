<script>
	let x = 0;
	let y = 0;
	let z = 10;
</script>

<fieldset>
	<legend>fePointLight</legend>
	<p>Update the position of the light source</p>
	<label>
		<span>x: <output>{x}</output></span>
		<input type="range" min="0" max="80" bind:value={x} />
	</label>
	<label>
		<span>y: <output>{y}</output></span>
		<input type="range" min="0" max="80" bind:value={y} />
	</label>

	<label>
		<span>z: <output>{z}</output></span>
		<input type="range" min="0" max="80" bind:value={z} />
	</label>
</fieldset>

<svg style="display: block;" viewBox="-7 -7 204 94">
	<title>Light source based on x, y and z coordinates</title>
	<rect fill="hsl(2 100% 72%)" width="80" height="80" rx="10" />
	<circle fill="hsl(48 96% 66%)" transform="translate({x} {y})" r="7" />
	<g transform="translate(110 80)">
		<rect fill="hsl(2 100% 72%)" width="80" y="-1" height="2" />
		<circle fill="hsl(48 96% 66%)" transform="scale(1 -1) translate({x} {z})" r="7" />
	</g>
</svg>

<style>
	svg {
		display: block;
		max-inline-size: 26rem;
		margin-inline: auto;
	}

	fieldset {
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0rem 0.5rem;
		border: none;
	}

	fieldset > legend {
		opacity: 0;
		visibility: hidden;
	}

	fieldset > p {
		flex-basis: 100%;
	}

	fieldset > label {
		flex-basis: 10rem;
		flex-grow: 1;
	}

	label > span,
	label > input {
		display: block;
	}

	label > * + * {
		margin-block-start: 0.5rem;
	}

	span {
		font-family: monospace;
		font-size: 1rem;
	}

	span > output {
		font-weight: 700;
	}

	input {
		inline-size: 100%;
	}
</style>
