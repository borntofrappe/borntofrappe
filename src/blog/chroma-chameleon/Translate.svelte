<script>
	let x = 0;
</script>

<label>
	<span>Drag the handle to translate the shapes.</span>
	<input type="range" min="0" max="100" bind:value={x} />
</label>

<svg viewBox="0 0 100 100">
	<defs>
		<linearGradient id="translate-gradient" x1="0" x2="0.5" y1="0" y2="0" spreadMethod="reflect">
			<stop offset="0" stop-color="hsl(0, 85%, 72%)" />
			<stop offset="0.2" stop-color="hsl(60, 85%, 72%)" />
			<stop offset="0.4" stop-color="hsl(120, 85%, 72%)" />
			<stop offset="0.6" stop-color="hsl(180, 85%, 72%)" />
			<stop offset="0.8" stop-color="hsl(240, 85%, 72%)" />
			<stop offset="1" stop-color="hsl(300, 85%, 72%)" />
		</linearGradient>
	</defs>
	<g transform="translate({x} 0)">
		<g fill="url(#translate-gradient)">
			<rect x="-100" width="100" height="100" />
			<rect width="100" height="100" />
		</g>
	</g>
</svg>

<style>
	label {
		display: block;
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
