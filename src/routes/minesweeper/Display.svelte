<script>
	const encodings = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];

	const transforms = [
		{ x: 20, y: 15, a: 0 },
		{ x: 100, y: 20, a: 90 },
		{ x: 100, y: 105, a: 90 },
		{ x: 20, y: 185, a: 0 },
		{ x: 15, y: 105, a: 90 },
		{ x: 15, y: 20, a: 90 },
		{ x: 20, y: 100, a: 0 }
	];
</script>

<svg viewBox="0 0 115 200">
	<!--  -->
	<defs>
		<path id="minesweeper-display-segment" d="M 0 0 l 15 15 h 45 l 15 -15 -15 -15 h -45z" />
		{#each transforms as { x, y, a }, i}
			<use
				id="minesweeper-display-segment-{i}"
				transform="translate({x} {y}) rotate({a})"
				href="#minesweeper-display-segment"
			/>
		{/each}
	</defs>

	<g fill="currentColor">
		{#each transforms as _, i}
			<use href="#minesweeper-display-segment-{i}" />
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
