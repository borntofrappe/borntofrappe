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

<svg bind:this={svg} viewBox="0 0 1 1" on:pointermove|preventDefault={handleMove}>
	<defs>
		<pattern id="graph-paper-pattern" viewBox="0 0 1 1" width="0.05" height="0.05">
			<g fill="none" stroke="currentColor" stroke-width="0.0025">
				<rect width="1" height="1" />
			</g>
		</pattern>

		<marker
			id="graph-paper-marker"
			viewBox="-0.05 -0.05 0.7 1.1"
			refX="0.5"
			refY="0.5"
			markerWidth="8"
			markerHeight="8"
			orient="auto"
		>
			<g
				fill="currentColor"
				stroke="currentColor"
				stroke-width="0.1"
				stroke-linecap="square"
				stroke-linejoin="square"
			>
				<path d="M 0 0 l 0.6 0.5 -0.6 0.5 0.4 -0.5z" />
			</g>
		</marker>
	</defs>

	<rect fill="url(#graph-paper-pattern)" width="1" height="1" />

	<g fill="none" stroke="currentColor">
		<g stroke-width="0.002" stroke-dasharray="0.01 0.012">
			<path d="M 0.5 0 v 1" />
			<path d="M 0 0.5 h 1" />
		</g>
		<g stroke-width="0.0075" marker-end="url(#graph-paper-marker)">
			<path d="M 0.5 0.5 {x} {y}" />
		</g>
	</g>
	<g fill="currentColor">
		<circle cx="0.5" cy="0.5" r="0.0125" />
	</g>
</svg>

<style>
	svg {
		display: block;
		outline: 1px solid currentColor;
	}
</style>
