<script>
	export let accentColor = 'hotpink';

	let cx = 20;
	let cy = 24;
</script>

<p>Drag the handles to move the control point.</p>

<div>
	<label>
		x
		<input type="range" min="-10" max="50" bind:value={cx} step="1" />
	</label>
	<label>
		y
		<input type="range" min="0" max="30" bind:value={cy} step="1" />
	</label>
</div>

<p>
	<code
		>d="M x0 y0
		<span style:border-block-end="0.2rem solid {accentColor}">q {cx} {cy}</span>
		x1 x2"
	</code>
</p>

<svg viewBox="-12 -2 64 34">
	<g fill="none" stroke="currentColor">
		<g stroke-dasharray="1" stroke-width="0.25">
			<path d="M 0 0 l {cx} {cy}" />
			<path d="M 40 0 {cx} {cy}" />
		</g>
		<path stroke-width="0.5" d="M 0 0 q {cx} {cy} 40 0" />
	</g>

	<g fill="currentColor">
		<circle r="1" />
		<circle r="1" cx="40" />
	</g>

	<g fill={accentColor}>
		<circle r="1" {cx} {cy} />
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
	}

	div {
		border-radius: 0.25rem;
		border: 0.15rem solid currentColor;
		padding: 0.25rem 0.75rem;
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
