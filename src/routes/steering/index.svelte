<script>
	import { onMount } from 'svelte';
	import SteeringPoints from './_SteeringPoints.svelte';

	let canvas;

	export let text = 'Points'.toUpperCase();

	const width = text.length * 16;
	const height = 24;
	const fontSize = 18;

	let points = [];

	onMount(() => {
		const context = canvas.getContext('2d');

		context.font = `${fontSize}px monospace`;
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillStyle = 'green';
		context.fillText(text, width / 2, height / 2);

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
	<slot>
		<title>borntofrappe | Steering</title>
		<meta
			name="description"
			content="A showcase of a steering behavior, with numerous agents lining up in the shape of a string of text."
		/>
	</slot>
</svelte:head>

<canvas style:display="none" bind:this={canvas} {width} {height} />

{#if points.length > 0}
	<main>
		<SteeringPoints {points} {width} {height} />
	</main>
{/if}

<style>
	main {
		background: #38311e;
		min-height: 100vh;
		display: grid;
		place-items: center;
		overflow-x: auto;
	}
</style>
