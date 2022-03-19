<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status,
				error
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import SteeringPoints from '$lib/experiments/steering/SteeringPoints.svelte';

	export let status = 500;
	export let error;

	let canvas;
	const width = status.toString().length * 24;
	const height = 24;

	let points = [];

	onMount(() => {
		const context = canvas.getContext('2d');

		context.font = `${height}px monospace`;
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillStyle = 'green';
		context.fillText(status, width / 2, height / 2);

		const pixels = [...context.getImageData(0, 0, width, height).data];
		for (let i = 0; i < pixels.length - 4; i += 4) {
			if (pixels[i] !== 0 || pixels[i + 1] !== 0 || pixels[i + 2] !== 0) {
				const x = (i / 4) % width;
				const y = Math.floor(i / 4 / width);
				points = [...points, { x, y }];
			}
		}
	});
</script>

<svelte:head>
	<title>borntofrappe | {status}</title>
	<meta name="description" content={error.message} />
</svelte:head>

<canvas style:display="none" bind:this={canvas} {width} {height} />
<SteeringPoints {points} {width} {height} />

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		min-height: 100vh;
		display: grid;
		place-items: center;
		color: hsl(216, 33%, 97%);
		background: hsl(210, 24%, 16%);
	}
</style>
