<script>
	export let transition = false;
	let tangram = false;
</script>

<div>
	<form on:submit|preventDefault>
		<label>
			<input type="checkbox" bind:checked={tangram} />
			<span>{tangram ? 'Remove' : 'Add'} the <code>.tangram</code> class.</span>
		</label>
	</form>

	<svg class:tangram class:transition viewBox="-2 -2 8 8">
		<g transform="translate(1 1)">
			<path d="M 0 0 l 2 2 2 -2" fill="hsl(0, 78%, 68%)" />
		</g>
		<g transform="translate(1 1) rotate(-90)">
			<path d="M 0 0 l 2 2 -2 2" fill="hsl(51, 78%, 68%)" />
		</g>
		<g transform="translate(1 -1) rotate(90)">
			<path d="M 0 0 l 1 -1 0 2" fill="hsl(102, 78%, 68%)" />
		</g>
		<g transform="translate(1 1) rotate(90)">
			<path d="M 0 0 l 1 -1 1 1" fill="hsl(152, 78%, 68%)" />
		</g>

		<g transform="translate(1 3) rotate(-90)">
			<path d="M 0 0 l 2 -2 0 2" fill="hsl(202, 78%, 68%)" />
		</g>
		<g transform="translate(1 3)">
			<path d="M 0 0 l 1 -1 1 1 -1 1" fill="hsl(254, 78%, 68%)" />
		</g>
		<g transform="translate(-1 1)">
			<path d="M 0 0 l 1 -1 2 0 -1 1" fill="hsl(308, 78%, 68%)" />
		</g>
	</svg>
</div>

<style>
	div * {
		padding: 0;
		margin: 0;
	}

	div > * + * {
		margin-block-start: 1em;
	}

	svg {
		display: block;
	}

	svg.transition > g {
		transition: transform 0.75s ease-in-out;
	}

	svg.tangram > g:nth-of-type(1) {
		transform: translate(0px, 0px);
	}

	svg.tangram > g:nth-of-type(2) {
		transform: translate(0px, 0px);
	}

	svg.tangram > g:nth-of-type(3) {
		transform: translate(3px, 1px);
	}

	svg.tangram > g:nth-of-type(4) {
		transform: translate(1px, 3px);
	}

	svg.tangram > g:nth-of-type(5) {
		transform: translate(2px, 4px);
	}

	svg.tangram > g:nth-of-type(6) {
		transform: translate(2px, 2px);
	}

	svg.tangram > g:nth-of-type(7) {
		transform: translate(0px, 4px);
	}
</style>
