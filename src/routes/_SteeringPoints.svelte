<script>
	import { onMount, onDestroy } from 'svelte';
	import Vehicle from './_Vehicle.js';

	export let points = [];
	export let width = 0;
	export let height = 0;

	const scale = 10;
	width *= scale;
	height *= scale;

	let canvas;
	let context;
	let animationID;

	const r = scale / 2;
	const startAngle = 0;
	const endAngle = Math.PI * 2;

	let left, top;

	const vehicles = points.map(
		({ x, y }) =>
			new Vehicle(
				Math.floor(Math.random() * width),
				Math.floor(Math.random() * height),
				x * scale,
				y * scale
			)
	);

	function draw() {
		context.clearRect(0, 0, width, height);
		for (const vehicle of vehicles) {
			context.beginPath();
			const { x, y } = vehicle.pos;
			context.arc(x, y, r, startAngle, endAngle);
			context.fill();

			vehicle.update();
			vehicle.behave();
		}
		animationID = requestAnimationFrame(draw);
	}

	onMount(() => {
		handleResize();
		context = canvas.getContext('2d');
		context.fillStyle = 'hsl(185, 62%, 45%)';

		draw();
	});

	onDestroy(() => {
		cancelAnimationFrame(animationID);
	});

	function handleMousemove({ pageX, pageY }) {
		for (const vehicle of vehicles) {
			vehicle.mouse = { x: pageX - left, y: pageY - top };
		}
	}

	function handleMouseleave() {
		for (const vehicle of vehicles) {
			vehicle.mouse = null;
		}
	}

	function handleResize() {
		const boundingRect = canvas.getBoundingClientRect();
		left = boundingRect.left;
		top = boundingRect.top;
	}
</script>

<svelte:window on:resize={handleResize} />

<canvas
	on:mousemove={handleMousemove}
	on:mouseleave={handleMouseleave}
	bind:this={canvas}
	{width}
	{height}
/>
