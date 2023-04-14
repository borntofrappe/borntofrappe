<script>
	export let accentColor = 'gold';

	let c1 = [-18, 24];
	let c2 = [58, 24];
</script>

<p>Drag the handles to move the control points.</p>

<div>
	<fieldset>
		<legend>c1</legend>

		<label>
			x
			<input type="range" min="-20" max="60" bind:value={c1[0]} step="1" />
		</label>
		<label>
			y
			<input type="range" min="0" max="30" bind:value={c1[1]} step="1" />
		</label>
	</fieldset>
	<fieldset>
		<legend>c2</legend>
		<label>
			x
			<input type="range" min="-20" max="60" bind:value={c2[0]} step="1" />
		</label>
		<label>
			y
			<input type="range" min="0" max="30" bind:value={c2[1]} step="1" />
		</label>
	</fieldset>
</div>

<p>
	<code
		>d="M x0 y0
		<span style:border-block-end="0.2rem solid {accentColor}"
			>c {c1[0]} {c1[1]} {c2[0]} {c2[1]}</span
		>
		x1 y1"</code
	>
</p>

<svg viewBox="-21 -2 82 34">
	<g fill="none" stroke="currentColor">
		<g stroke-dasharray="1" stroke-width="0.25">
			<path d="M 0 0 {c1[0]} {c1[1]}" />
			<path d="M 40 0 {c2[0]} {c2[1]}" />
		</g>
		<path stroke-width="0.5" d="M 0 0 c {c1[0]} {c1[1]} {c2[0]} {c2[1]} 40 0" />
	</g>

	<g fill="currentColor">
		<circle r="1" />
		<circle r="1" cx="40" />
	</g>

	<g fill={accentColor}>
		{#each [c1, c2] as [cx, cy]}
			<circle r="1" {cx} {cy} />
		{/each}
	</g>
</svg>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	div > * {
		flex-grow: 1;
		flex-basis: calc((25rem - 100%) * 999);
	}

	fieldset {
		display: flex;
		gap: 0.5em;
	}

	fieldset > * {
		flex-grow: 1;
	}

	fieldset {
		border-radius: 0.25rem;
		border: 0.15rem solid currentColor;
		padding: 0.5rem 1rem;
	}

	legend {
		padding-inline: 0.5rem;
	}

	label input {
		margin-block-start: 0.5rem;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
