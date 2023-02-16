<script>
	let x = 0;
	let y = -2;
</script>

<div>
	<p>Drag the handles to update the horizontal and vertical offset.</p>

	<form on:submit|preventDefault>
		<label>
			x
			<input bind:value={x} type="range" min="-10" max="10" />
		</label>
		<label>
			y
			<input bind:value={y} type="range" min="-10" max="10" />
		</label>
	</form>

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
</div>

<style>
	div * {
		padding: 0;
		margin: 0;
	}

	div > * + * {
		margin-block-start: 0.75rem;
	}

	form {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	form > * {
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
