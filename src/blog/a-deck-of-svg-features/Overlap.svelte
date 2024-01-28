<script>
	let x = 0.5;
</script>

<div>
	<label>
		<span>Drag the handle to move the second card horizontally.</span>
		<input type="range" min="0" max="1" step="0.05" bind:value={x} />
	</label>

	<svg viewBox="0 0 2 1.5">
		<g transform="translate(0 0.5)">
			<g transform="translate(0.5 0)">
				<g
					fill="hsl(80, 100%, 98%)"
					stroke="hsl(182, 30%, 17%)"
					stroke-width="0.05"
					stroke-linecap="round"
					stroke-linejoin="round"
					paint-order="stroke"
					font-family="monospace"
					font-size="0.2"
				>
					<text {x} y="-0.2" text-anchor="middle">x="<tspan font-weight="700">{x}</tspan>"</text>
				</g>
			</g>
			<use href="#deck-card-back" width="1" height="1" />
			<use {x} href="#deck-card-back" width="1" height="1" />
		</g>
	</svg>
</div>

<style>
	div > * + * {
		margin-block-start: 0.5rem;
	}

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
