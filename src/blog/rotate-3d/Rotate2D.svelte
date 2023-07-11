<script>
	let angle = 0;
</script>

<label>
	<span>Spin the wheel</span>
	<input type="range" min="0" max="360" bind:value={angle} />
</label>

<svg style="display: block;" viewBox="-30 -30 60 80">
	<defs>
		<g id="rotate-2d-leaf">
			<path fill="currentColor" d="M 0 0 L 0 -30 A 15 15 0 0 1 15 -15 L 15 0Z" />
			<path fill="hsl(0 0% 0% / 0.1)" d="M 0 0 A 15 15 0 0 0 15 -15 L 15 0Z" />
		</g>
	</defs>
	<path fill="none" stroke="hsl(0 0% 75%)" stroke-width="2" stroke-linecap="round" d="M 0 0 V 49" />
	<g transform="rotate({angle})">
		<use style="color: hsl(338 100% 84%);" href="#rotate-2d-leaf" />
		<use style="color: hsl(44 77% 67%);" transform="rotate(90)" href="#rotate-2d-leaf" />
		<use style="color: hsl(170 73% 65%);" transform="rotate(180)" href="#rotate-2d-leaf" />
		<use style="color: hsl(220 100% 84%);" transform="rotate(270)" href="#rotate-2d-leaf" />
	</g>
	<circle fill="hsl(0 0% 30%)" r="4" />
</svg>

<style>
	label {
		display: block;
	}

	span {
		font-style: italic;
	}

	input {
		display: block;
		inline-size: 100%;
		margin-block-start: 0.5rem;
	}

	svg {
		display: block;
	}
</style>
