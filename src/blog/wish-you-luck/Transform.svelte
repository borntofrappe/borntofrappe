<script>
	let cx = 10;
</script>

<p>Update the horizontal offset to highlight the transformation of the SVG coordinate system.</p>

<form on:submit|preventDefault>
	<label>
		cx
		<input type="range" min="-40" max="40" bind:value={cx} />
	</label>
</form>

<svg viewBox="-65 -15 130 30">
	<g fill="none" stroke="currentColor" stroke-width="0.2" stroke-dasharray="1">
		<path d="M 0 -15 v 30" />
	</g>

	<g fill="currentColor">
		<circle id="playground-c" {cx} r="2" />
		<use transform="scale(-1 1)" href="#playground-c" />
	</g>

	<g fill="currentColor" font-size="3" font-family="monospace" text-anchor="middle">
		<text x={cx} y="-7">&lt;circle cx="{cx}"&gt;</text>
		<text x={cx * -1} y="10">&lt;use transform="scale(-1 1)"&gt;</text>
	</g>
</svg>

<style>
	form * {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	input {
		accent-color: currentColor;
	}

	svg {
		display: block;
	}
</style>
