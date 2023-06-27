<script>
	let x = 0;
	let y = -2;
</script>

<p>Drag the handles to update the horizontal and vertical offset.</p>

<div>
	<label>
		x
		<input bind:value={x} type="range" min="-10" max="10" />
	</label>
	<label>
		y
		<input bind:value={y} type="range" min="-10" max="10" />
	</label>
</div>

<svg viewBox="-25 -25 50 50">
	<defs>
		<circle id="shadow-c" r="11" />
		<mask id="shadow-mask">
			<use href="#shadow-c" fill="white" />
			<use href="#shadow-c" {x} {y} fill="black" />
		</mask>
	</defs>

	<g fill="currentColor">
		<use href="#shadow-c" mask="url(#shadow-mask)" />
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

	label input {
		margin-block-start: 0.5rem;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
