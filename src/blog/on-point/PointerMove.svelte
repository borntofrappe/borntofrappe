<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let svg = null;
	let w, h;

	const position = spring({
		x: 0,
		y: 0
	});

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { width, height } = svg.getBoundingClientRect();
		w = width;
		h = height;
	};

	const handleMove = (e) => {
		const { offsetX, offsetY } = e;
		const x = offsetX / w;
		const y = offsetY / h;

		position.set({
			x,
			y
		});
	};
</script>

<svelte:window on:resize={handleSize} />

<svg bind:this={svg} viewBox="0 0 1 1" on:pointermove|preventDefault={handleMove}>
	<g fill="currentColor">
		<g transform="translate({$position.x} {$position.y})">
			<circle r="0.05" />
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
