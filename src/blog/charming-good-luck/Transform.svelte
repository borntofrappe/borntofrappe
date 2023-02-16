<script>
	let cx = 10;
</script>

<div>
	<form on:submit|preventDefault>
		<label>
			Drag the handle to update the horizontal offset.
			<input type="range" min="-40" max="40" bind:value={cx} />
		</label>
	</form>

	<svg viewBox="-65 -18 130 36">
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
</div>

<style>
	div * {
		padding: 0;
		margin: 0;
	}

	div > * + * {
		margin-block-start: 0.75rem;
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
