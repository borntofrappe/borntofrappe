<script>
	import { onMount } from 'svelte';
	import Vehicle from './Vehicle';

	export let points = [];
	export let width = 0;
	export let height = 0;

	const scale = 12;
	width *= scale;
	height *= scale;

	let top;
	let left;
	let canvas;
	let context;
	let animationID;

	const r = scale / 3;
	const startAngle = 0;
	const endAngle = Math.PI * 2;

	$: vehicles = points.map(
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
		context.fillStyle = 'hsl(330, 79%, 56%)';
		draw();

		return () => cancelAnimationFrame(animationID);
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
