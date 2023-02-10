<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let size = 5;

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

	$: dispatch('change', { size });
</script>

<div>
	<form on:submit|preventDefault>
		<label>
			Resize grid
			<input type="range" min={2} max={15} bind:value={size} />
		</label>
	</form>

	<svg viewBox="0 0 {size} {size}">
		{#each grid as { row, column, color }}
			<g transform="translate({column} {row})">
				<rect fill={color} width="1" height="1" />
			</g>
		{/each}
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

	label input {
		margin-block-start: 0.5em;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
