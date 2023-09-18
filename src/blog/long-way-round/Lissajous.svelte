<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { fly } from 'svelte/transition';
	import { backIn, backOut, cubicInOut as easing } from 'svelte/easing';
	import { Anchor, Shape } from 'zdog';

	const TAU = Math.PI * 2;

	const o = 40;
	const n = 100;
	const da = TAU / n;

	const points = Array(n)
		.fill()
		.map((_, i) => {
			const a = i * da - TAU / 4;
			const x = Math.cos(a) * o;
			const y = Math.sin(a) * o;
			const z = Math.sin(a * 2) * o;
			const luminosity = 65 + (20 / (n - 1)) * Math.abs((n - 1) / 2 - i);
			const color = `hsl(220 90% ${luminosity}%)`;

			return {
				color,
				x,
				y,
				z
			};
		});

	let element = null;
	let root = null;
	let context = null;
	let width = 0;
	let height = 0;
	const zoom = 3;

	let canAnimate = false;

	const angle = tweened(0, {
		duration: 4200,
		easing
	});

	const render = () => {
		context.clearRect(0, 0, width, height);
		context.save();
		context.translate(width / 2, height / 2);
		context.scale(zoom, zoom);
		root.renderGraphCanvas(context);
		context.restore();
	};

	const handleRotate = (radians) => {
		if (root === null) return;

		root.rotate.y = radians * -1;
		root.updateGraph();
		render();
	};

	$: handleRotate($angle);

	const handleClick = async () => {
		if (canAnimate === false) return;

		canAnimate = false;

		await angle.set(TAU * 2);

		angle.set(0, {
			duration: 0
		});

		canAnimate = true;
	};

	onMount(() => {
		root = new Anchor();

		for (const { color, x, y, z } of points) {
			new Shape({
				addTo: root,
				color,
				stroke: 20,
				translate: {
					x,
					y,
					z
				}
			});
		}

		context = element.getContext('2d');
		width = element.width;
		height = element.height;

		context.lineJoin = 'round';
		context.lineCap = 'round';

		root.updateGraph();
		render();
		canAnimate = true;

		return;
	});
</script>

<div>
	{#if canAnimate}
		<button
			in:fly={{ y: 10, duration: 300, easing: backOut }}
			out:fly={{ y: 10, duration: 300, easing: backIn }}
			disabled={!canAnimate}
			on:click={handleClick}
		>
			Give it a spin
		</button>
	{/if}
	<canvas bind:this={element} style="display: block;" width="380" height="380" />
</div>

<style>
	div {
		position: relative;
		inline-size: 380px;
	}

	div > button {
		position: absolute;
		inset-inline-start: 50%;
		inset-block-start: 50%;
		translate: -50% -50%;
	}

	button {
		cursor: pointer;
		font-weight: 700;
		border: none;
		padding: 0.5rem 0.75rem;
		color: hsl(210 36% 96%);
		background: hsl(205 87% 29%);
		border-radius: 1e5px;
	}
</style>
