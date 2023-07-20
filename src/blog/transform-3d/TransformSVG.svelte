<script>
	let a = 75;
</script>

<label>
	<span>Rotate around the center</span>
	<input type="range" min="0" max="360" bind:value={a} />
</label>

<svg style="display: block; color: hsl(0 0% 19%)" viewBox="-175 -175 350 350">
	<defs>
		<marker
			id="transform-svg-marker"
			viewBox="-1 -1 2 2"
			refX="0.5"
			orient="auto"
			markerWidth="5"
			markerHeight="5"
		>
			<path
				fill="currentColor"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M -0.5 -0.5 L 0.5 0 -0.5 0.5 Z"
			/>
		</marker>
	</defs>
	<path
		fill="hsl(0 0% 97%)"
		d="M -175 -135 A 40 40 0 0 1 -135 -175 L 135 -175 A 40 40 0 0 1 175 -135 L 175 135 A 40 40 0 0 1 135 175 L -135 175 A 40 40 0 0 1 -175 135 Z"
	/>

	<g fill="none" stroke="currentColor">
		<path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M -130 0 130 0" />
		<circle stroke-width="0.2" r="130" />
	</g>

	<g transform="rotate({a})">
		<path
			transform="translate(25 -20) scale(0.5)"
			fill="none"
			stroke="currentColor"
			stroke-width="9"
			d="M -17.5 -15 L -10 -15 A 10 10 0 0 1 0 -5 L 0 0 L -10 0 A 10 10 0 0 0 -20 10 A 10 10 0 0 0 -10 20 A 10 10 0 0 0 0 10 L 0 0 L 0 10 A 10 10 0 0 0 10 20"
		/>
		<path
			marker-end="url(#transform-svg-marker)"
			fill="none"
			stroke="currentColor"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M 0 0 L 112.5 0"
		/>
		<circle transform="translate(130 0)" fill="hsl(42 96% 50%)" r="8" />
	</g>

	<g stroke-linecap="round" stroke-linejoin="round" />
	<circle fill="currentColor" r="4" />
</svg>

<style>
	label {
		display: block;
	}

	label > * + * {
		margin-block-start: 0.5rem;
	}

	input {
		display: block;
		inline-size: 100%;
		accent-color: hsl(42 96% 50%);
	}

	svg {
		display: block;
	}
</style>
