<script>
	export let size = 7;
	$: max = (size - 1) * 2 + 1;

	$: grid = Array(size)
		.fill()
		.map((_, row) =>
			Array(size)
				.fill()
				.map((_, column) => {
					const sum = row + column;

					const hue = (sum / max) * 360;
					const color = `hsl(${hue}, 78%, 68%)`;

					return {
						row,
						column,
						color
					};
				})
		)
		.flat();

	let scale = false;
</script>

<label>
	<input type="checkbox" bind:checked={scale} />
	Toggle animation
</label>

<svg viewBox="-0.5 -0.5 {size} {size}">
	{#each grid as { row, column, color }}
		<g transform="translate({column} {row})">
			<circle class:scale fill={color} r="0.45" />
		</g>
	{/each}
</svg>

<style>
	label {
		display: block;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
	}

	svg {
		display: block;
	}

	circle {
		animation: scale 1s ease-in-out infinite;
		animation-play-state: paused;
	}

	circle.scale {
		animation-play-state: running;
	}

	@keyframes scale {
		50% {
			transform: scale(0.5);
		}
	}
</style>
