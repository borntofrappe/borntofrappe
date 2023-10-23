<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { backIn, backOut } from 'svelte/easing';
	import { Illustration, Shape, Cylinder } from 'zdog';

	let element = null;
	let illustration = null;

	let state = null;
	const TAU = Math.PI * 2;
	const randomAngle = () => (TAU / 32) * Math.floor(Math.random() * (32 / 2));
	const angle = tweened(TAU / 8);
	let duration = 1500;

	onMount(() => {
		element.style.width = `${element.width}px`;

		const stroke = 0;
		const diameter = 30;
		const length = 2;
		const rim = 2;

		const colors = {
			coin: ['hsl(35 100% 47%)', 'hsl(42 96% 50%)', 'hsl(47 100% 62%)'],
			details: 'hsl(210 10% 23%)'
		};

		illustration = new Illustration({
			element,
			zoom: 10
		});

		const base = new Cylinder({
			addTo: illustration,
			color: colors.coin[1],
			stroke,
			diameter,
			length
		});

		const overlay = new Cylinder({
			color: colors.coin[0],
			frontFace: colors.coin[2],
			stroke,
			diameter: base.diameter / 2,
			length: base.length
		});

		new Shape({
			addTo: overlay,
			color: colors.details,
			stroke: 0.4,
			fill: true,
			path: [
				{ x: 0.5, y: -1 },
				{ x: 1.5, y: -1 },
				{ x: 2, y: -1.5 },
				{ x: 0.5, y: -1.5 },
				{ x: 0.5, y: -2.5 },
				{ x: 2.5, y: -2.5 },
				{ x: 3, y: -3 },
				{ x: 0.5, y: -3 },
				{ x: 0.5, y: -4 },
				{ x: -0.5, y: -4 },
				{ x: -0.5, y: -3 },
				{ x: -1.5, y: -3 },
				{ x: -2, y: -2.5 },
				{ x: -0.5, y: -2.5 },
				{ x: -0.5, y: -1.5 },
				{ x: -2.5, y: -1.5 },
				{ x: -3, y: -1 },
				{ x: -0.5, y: -1 },
				{ x: -0.5, y: 1 },
				{ x: -3, y: 1 },
				{ x: -2.5, y: 1.5 },
				{ x: -0.5, y: 1.5 },
				{ x: -0.5, y: 2.5 },
				{ x: -2, y: 2.5 },
				{ x: -1.5, y: 3 },
				{ x: -0.5, y: 3 },
				{ x: -0.5, y: 4 },
				{ x: 0.5, y: 4 },
				{ x: 0.5, y: 3 },
				{ x: 3, y: 3 },
				{ x: 2.5, y: 2.5 },
				{ x: 0.5, y: 2.5 },
				{ x: 0.5, y: 1.5 },
				{ x: 2, y: 1.5 },
				{ x: 1.5, y: 1 },
				{ x: 0.5, y: 1 }
			],
			translate: {
				z: overlay.length / 2 + 0.2
			}
		});

		overlay.copyGraph({
			addTo: base,
			translate: {
				z: overlay.length / 2 + base.length / 2
			}
		});

		overlay.copyGraph({
			addTo: base,
			translate: {
				z: (overlay.length / 2 + base.length / 2) * -1
			},
			rotate: {
				y: TAU / 2
			}
		});

		const r = diameter / 2.1;
		const o = overlay.length + base.length / 2;

		const ring = new Shape({
			addTo: base,
			color: colors.coin[2],
			stroke,
			fill: true,
			path: [
				{ x: 0, y: r * -1 },
				{
					arc: [
						{ x: r, y: r * -1 },
						{ x: r, y: 0 }
					]
				},
				{
					arc: [
						{ x: r, y: r },
						{ x: 0, y: r }
					]
				},
				{
					arc: [
						{ x: r * -1, y: r },
						{ x: r * -1, y: 0 }
					]
				},
				{
					arc: [
						{ x: r * -1, y: r * -1 },
						{ x: 0, y: r * -1 }
					]
				},
				{ x: 0, y: (r + rim) * -1 },
				{
					arc: [
						{ x: (r + rim) * -1, y: (r + rim) * -1 },
						{ x: (r + rim) * -1, y: 0 }
					]
				},
				{
					arc: [
						{ x: (r + rim) * -1, y: r + rim },
						{ x: 0, y: r + rim }
					]
				},
				{
					arc: [
						{ x: r + rim, y: r + rim },
						{ x: r + rim, y: 0 }
					]
				},
				{
					arc: [
						{ x: r + rim, y: (r + rim) * -1 },
						{ x: 0, y: (r + rim) * -1 }
					]
				}
			],
			translate: {
				z: o
			}
		});

		ring.copy({
			translate: {
				z: o * -1
			}
		});

		const path = ring.path.slice(5);
		const depth = overlay.length * 2 + base.length;
		const z = depth * -1;

		for (let i = 0; i < path.length - 1; i++) {
			const p1 = path[i];
			const p2 = path[i + 1];

			const p1Arc = Object.hasOwn(p1, 'arc');
			const p2Arc = Object.hasOwn(p2, 'arc');

			if (p2Arc) {
				const { x: x1, y: y1 } = p1Arc ? p1.arc[1] : p1;
				const { x: xc, y: yc } = p2.arc[0];
				const { x: x2, y: y2 } = p2.arc[1];

				new Shape({
					addTo: ring,
					color: colors.coin[0],
					stroke,
					fill: true,
					path: [
						{ x: x1, y: y1, z: 0 },
						{ x: x1, y: y1, z },
						{
							arc: [
								{ x: xc, y: yc, z },
								{ x: x2, y: y2, z }
							]
						},
						{ x: x2, y: y2, z: 0 },
						{
							arc: [
								{ x: xc, y: yc, z: 0 },
								{ x: x1, y: y1, z: 0 }
							]
						}
					]
				});
			} else {
				const { x: x1, y: y1 } = p1Arc ? p1.arc[1] : p1;
				const { x: x2, y: y2 } = p2;

				new Shape({
					addTo: ring,
					color: colors.coin[1],
					stroke,
					fill: true,
					path: [
						{ x: x1, y: y1, z: 0 },
						{ x: x1, y: y1, z },
						{ x: x2, y: y2, z },
						{ x: x2, y: y2, z: 0 }
					]
				});
			}
		}

		illustration.rotate.y = $angle;
		illustration.updateRenderGraph();
		state = 'wait';
	});

	const handleClick = async () => {
		if (illustration === null || state !== 'wait') return;

		state = 'spin';

		const radians = $angle + randomAngle() + TAU * 3;

		duration = 2000 + Math.floor(Math.random() * 11) * 100;

		await angle.set(radians / 2, { easing: backIn, duration: duration });
		await angle.set(radians, { easing: backOut, duration: duration * 0.7 });
		await angle.set(radians % TAU, { duration: 0 });

		state = 'wait';
	};

	const updateAngle = (angle) => {
		if (illustration === null) return;

		illustration.rotate.y = angle;
		illustration.updateRenderGraph();
	};

	$: updateAngle($angle);
</script>

<div>
	<canvas bind:this={element} style="display: block;" width="400" height="400" />
	{#if state !== 'null'}
		<button data-state={state} style:--_duration={duration} on:click={handleClick}>Spin</button>
	{/if}
</div>

<style>
	div {
		display: inline-block;
		position: relative;
		aspect-ratio: 1/1;
	}

	div > button {
		position: absolute;
		inset-inline-end: 0%;
		inset-block-end: 0%;
	}

	div > canvas {
		display: block;
	}

	button {
		--_color: hsl(210 16% 93%);
		--_background: hsl(210 10% 23%);
		--_duration: 1000;
		font: inherit;
		font-size: 1rem;
		color: var(--_color, hsl(0 0% 90%));
		background: var(--_background, hsl(0 0% 20%));
		border: none;
		padding: 0.2rem 1.4rem;
		clip-path: polygon(1rem 0, 0 100%, calc(100% - 1rem) 100%, 100% 0);
		transition-property: translate, clip-path;
		transition-duration: 250ms;
		transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	button:focus {
		text-decoration: underline double currentColor;
	}

	button:focus:not(:focus-visible) {
		text-decoration: none;
	}

	button[data-state='spin'] {
		transition-duration: calc(var(--_duration) * 1ms);
		transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
		translate: -10% 0%;
		clip-path: polygon(0.5rem 0, 0 100%, calc(100% - 0.5rem) 100%, 100% 0);
	}
</style>
