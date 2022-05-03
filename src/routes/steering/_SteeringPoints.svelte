<script>
	import { onMount } from 'svelte';
	import { Vehicle } from './_utils.js';

	export let points;
	export let width;
	export let height;

	const scale = 15;
	width *= scale;
	height *= scale;

	let canvas;
	let l, t;
	let context;
	let animationID;

	const r = scale / 2;
	const startAngle = 0;
	const endAngle = Math.PI * 2;

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
			const { x, y } = vehicle.position;
			context.arc(x, y, r, startAngle, endAngle);
			context.fill();

			vehicle.update();
			vehicle.behave();
		}
		animationID = requestAnimationFrame(draw);
	}

	onMount(() => {
		context = canvas.getContext('2d');
		context.fillStyle = '#ff877a';
		draw();
		handleSize();

		return () => {
			cancelAnimationFrame(animationID);
		};
	});

	const handleSize = () => {
		const { left, top } = canvas.getBoundingClientRect();
		l = left;
		t = top;
	};

	const handleMousemove = ({ pageX, pageY }) => {
		for (const vehicle of vehicles) {
			vehicle.mouse = {
				x: pageX - l,
				y: pageY - t
			};
		}
	};

	const handleMouseleave = () => {
		for (const vehicle of vehicles) {
			vehicle.mouse = null;
		}
	};
</script>

<svelte:window on:resize={handleSize} />

<canvas
	bind:this={canvas}
	{width}
	{height}
	on:mousemove={handleMousemove}
	on:mouseleave={handleMouseleave}
/>
