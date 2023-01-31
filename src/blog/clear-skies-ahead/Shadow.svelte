<script>
	let x = 0;
	let y = -2;
</script>

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

<style>
	form {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	form > * {
		flex-grow: 1;
	}

	label {
		font-weight: 700;
	}

	input {
		width: 100%;
	}

	svg {
		display: block;
	}
</style>
