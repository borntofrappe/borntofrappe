<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, Cone, TAU } from 'zdog';

	import { degreesToRadians } from './utils.js';

	let element = null;

	const rotations = [{ x: 30 }, { y: 30 }, { z: 30 }];

	onMount(() => {
		const colors = ['hsl(0 0% 95%)', 'hsl(0 0% 20%)'];
		const root = new Anchor();

		new Shape({
			addTo: root,
			color: colors[0],
			stroke: 0,
			fill: true,
			path: [
				{ x: -13.5, y: 0 },
				{
					bezier: [
						{ x: -13.5, y: -13.5 },
						{ x: -13.5, y: -13.5 },
						{ x: 0, y: -13.5 }
					]
				},
				{
					bezier: [
						{ x: 13.5, y: -13.5 },
						{ x: 13.5, y: -13.5 },
						{ x: 13.5, y: 0 }
					]
				},
				{
					bezier: [
						{ x: 13.5, y: 13.5 },
						{ x: 13.5, y: 13.5 },
						{ x: 0, y: 13.5 }
					]
				},
				{
					bezier: [
						{ x: -13.5, y: 13.5 },
						{ x: -13.5, y: 13.5 },
						{ x: -13.5, y: 0 }
					]
				}
			],
			translate: {
				z: -50
			}
		});

		const distance = 10;
		const gaps = 6;
		const segment = distance / gaps;
		const dash = segment / 5;

		const axes = new Anchor({
			addTo: root
		});

		['x', 'y', 'z'].forEach((axis) => {
			for (let i = 0; i < gaps; i++) {
				const axis1 = i * segment;
				const axis2 = axis1 + dash;
				new Shape({
					addTo: axes,
					color: colors[1],
					stroke: 0.3,
					path: [{ [axis]: axis1 * -1 }, { [axis]: axis2 * -1 }]
				});
			}

			new Shape({
				addTo: axes,
				color: colors[1],
				stroke: 0.3,
				path: [{ [axis]: 0 }, { [axis]: distance }]
			});
		});

		const marker = new Cone({
			color: colors[1],
			stroke: 0.3,
			diameter: 1,
			length: 0.8
		});

		marker.copy({
			addTo: axes,
			translate: {
				x: distance
			},
			rotate: {
				y: (TAU / 4) * -1
			}
		});

		const x = new Shape({
			addTo: axes,
			color: colors[1],
			stroke: 0.5,
			path: [
				{ x: -0.6, y: -0.6 },
				{ x: 0.6, y: 0.6 }
			],
			translate: {
				x: distance,
				y: -2.5
			}
		});

		x.copy({
			rotate: {
				z: TAU / 4
			}
		});

		marker.copy({
			addTo: axes,
			translate: {
				y: distance
			},
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		const y = new Shape({
			addTo: axes,
			color: colors[1],
			stroke: 0.5,
			path: [
				{ x: -0.4, y: -0.8 },
				{ x: -0.1, y: -0.1 }
			],
			translate: {
				x: 2.5,
				y: distance
			}
		});

		new Shape({
			addTo: y,
			color: colors[1],
			stroke: 0.4,
			closed: false,
			path: [
				{ x: 0.4, y: -0.8 },
				{ x: 0, y: 0 },
				{
					bezier: [
						{ x: 0, y: 0.1 },
						{ x: -0.25, y: 0.5 },
						{ x: -0.4, y: 0.6 }
					]
				}
			]
		});

		marker.copy({
			addTo: axes,
			translate: {
				z: distance
			}
		});

		new Shape({
			addTo: axes,
			color: colors[1],
			stroke: 0.5,
			closed: false,
			path: [
				{ x: -0.6, y: -0.6 },
				{ x: 0.6, y: -0.6 },
				{ x: -0.6, y: 0.6 },
				{ x: 0.6, y: 0.6 }
			],
			translate: {
				x: -2.5,
				y: -2.5,
				z: distance
			}
		});

		const elements = element.querySelectorAll('canvas');

		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			const context = element.getContext('2d');
			const { width, height } = element;
			const zoom = 8;

			context.lineJoin = 'round';
			context.lineCap = 'round';

			const render = () => {
				context.clearRect(0, 0, width, height);
				context.save();
				context.translate(width / 2, height / 2);
				context.scale(zoom, zoom);
				root.renderGraphCanvas(context);
				context.restore();
			};

			const { x = 0, y = 0, z = 0 } = rotations[i];

			axes.rotate = {
				x: degreesToRadians(x),
				y: degreesToRadians(y),
				z: degreesToRadians(z)
			};

			root.updateGraph();
			render();
		}
	});
</script>

<figure bind:this={element}>
	<div>
		{#each rotations as _}
			<canvas style="display: block;" width="220" height="220" />
		{/each}
	</div>
	<figcaption>One axis rotations</figcaption>
</figure>

<style>
	figure {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
