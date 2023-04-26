<script>
	import { onMount } from 'svelte';

	let svg = null;
	let w, h;

	let x = 0.1;
	let y = 0.1;

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
		x = offsetX / w;
		y = offsetY / h;
	};
</script>

<svelte:window on:resize={handleSize} />

<svg bind:this={svg} viewBox="0 0 1 1" on:pointermove={handleMove} on:touchmove|preventDefault>
	<g fill="currentColor">
		<circle cx={x} cy={y} r="0.025" />
	</g>
</svg>

<style>
	svg {
		display: block;
		outline: 1px solid currentColor;
	}
</style>
