<script>
	import { onMount } from 'svelte';
	import SteeringPoints from './_SteeringPoints.svelte';

	let canvas;

	const text = 'soon';
	const width = 64;
	const height = 24;

	let points = [];

	onMount(() => {
		const context = canvas.getContext('2d');

		context.font = `${height}px sans-serif`;
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
	<title>borntofrappe</title>
	<meta name="description" content="Personal website of one Gabriele Corti. Launching soon." />
</svelte:head>

<h1 class="visually-hidden">borntofrappe</h1>
<p>Launching...<span class="visually-hidden">soon</span></p>

<canvas style:display="none" bind:this={canvas} {width} {height} />
{#if points.length > 0}
	<SteeringPoints {points} {width} {height} />
{/if}

<style>
	:global(*) {
		padding: 0;
		margin: 0;
	}

	:global(body) {
		display: grid;
		place-items: center;
		min-height: 100vh;
		background: hsl(210, 58%, 9%);
		color: hsl(185, 62%, 45%);
	}

	:global(::selection) {
		background: hsla(185, 62%, 45%, 0.2);
	}

	p {
		font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue,
			helvetica, Ubuntu, roboto, noto, arial, sans-serif;
		font-weight: 700;
		text-align: center;
		font-size: 2.75rem;
	}

	.visually-hidden:not(:focus):not(:active) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		width: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
</style>
