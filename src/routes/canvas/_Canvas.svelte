<script>
	import { onMount } from 'svelte';

	export let width = 300;
	export let height = 300;
	export let color = '#333';
	export let background = '#fff';

	let canvas;
	let context;
	let isDrawing;
	let start;

	let l, t;

	onMount(() => {
		context = canvas.getContext('2d');
		context.lineWidth = 3;

		handleSize();
	});

	const handleSize = () => {
		const { left, top } = canvas.getBoundingClientRect();
		l = left;
		t = top;
	};

	$: if (context) {
		context.strokeStyle = color;
	}

	const handleStart = ({ offsetX: x, offsetY: y }) => {
		if (color === background) {
			context.clearRect(0, 0, width, height);
		} else {
			isDrawing = true;
			start = { x, y };
		}
	};

	const handleEnd = () => {
		isDrawing = false;
	};

	const handleMove = ({ offsetX: x1, offsetY: y1 }) => {
		if (!isDrawing) return;

		const { x, y } = start;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x1, y1);
		context.closePath();
		context.stroke();

		start = { x: x1, y: y1 };
	};
</script>

<svelte:window on:resize={handleSize} />

<canvas
	{width}
	{height}
	style:background
	bind:this={canvas}
	on:mousedown={handleStart}
	on:touchstart|preventDefault={(e) => {
		const { pageX: x, pageY: y } = e.touches[0];
		handleStart({
			offsetX: x - l,
			offsetY: y - t
		});
	}}
	on:mouseup={handleEnd}
	on:touchend|preventDefault={handleEnd}
	on:mouseleave={handleEnd}
	on:mousemove={handleMove}
	on:touchmove|preventDefault={(e) => {
		const { pageX: x, pageY: y } = e.touches[0];
		handleMove({
			offsetX: x - l,
			offsetY: y - t
		});
	}}
/>
