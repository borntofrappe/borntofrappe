<script>
	let tangram = false;
</script>

<div>
	<form on:submit|preventDefault>
		<label>
			<input type="checkbox" bind:checked={tangram} />
			<span>{tangram ? 'Remove' : 'Add'} the <code>.tangram</code> class</span>
		</label>
	</form>

	<svg class:tangram viewBox="-2 -2 8 8">
		<g style="transform: translate(1px, 1px)">
			<path d="M 0 0 l 2 2 2 -2" fill="hsl(0, 78%, 68%)" />
		</g>
		<g style="transform: translate(1px, 1px) rotate(-90deg)">
			<path d="M 0 0 l 2 2 -2 2" fill="hsl(51, 78%, 68%)" />
		</g>
		<g style="transform: translate(1px, -1px) rotate(90deg)">
			<path d="M 0 0 l 1 -1 0 2" fill="hsl(102, 78%, 68%)" />
		</g>
		<g style="transform: translate(1px, 1px) rotate(90deg)">
			<path d="M 0 0 l 1 -1 1 1" fill="hsl(152, 78%, 68%)" />
		</g>

		<g style="transform: translate(1px, 3px) rotate(-90deg)">
			<path d="M 0 0 l 2 -2 0 2" fill="hsl(202, 78%, 68%)" />
		</g>
		<g style="transform: translate(1px, 3px)">
			<path d="M 0 0 l 1 -1 1 1 -1 1" fill="hsl(254, 78%, 68%)" />
		</g>
		<g style="transform: translate(-1px, 1px)">
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
		margin-block-start: 0.75em;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
	}

	svg {
		display: block;
	}

	svg > g {
		transition: transform 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}

	svg.tangram > g:nth-of-type(1) {
		transform: translate(0px, 0px) !important;
	}

	svg.tangram > g:nth-of-type(2) {
		transform: translate(0px, 0px) !important;
	}

	svg.tangram > g:nth-of-type(3) {
		transform: translate(3px, 1px) !important;
	}

	svg.tangram > g:nth-of-type(4) {
		transform: translate(1px, 3px) !important;
	}

	svg.tangram > g:nth-of-type(5) {
		transform: translate(2px, 4px) !important;
	}

	svg.tangram > g:nth-of-type(6) {
		transform: translate(2px, 2px) !important;
	}

	svg.tangram > g:nth-of-type(7) {
		transform: translate(0px, 4px) !important;
	}
</style>
