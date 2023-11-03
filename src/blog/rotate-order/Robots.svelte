<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape } from 'zdog';

	import { degreesToRadians } from './utils';

	let element = null;

	const robots = [
		{
			title: 'z10 y-20 x-15',
			rotations: [{ z: 10 }, { y: -20 }, { x: -15 }]
		},
		{
			title: 'y10 z-10 x20',
			rotations: [{ y: 10 }, { z: -10 }, { x: 20 }]
		}
	];

	onMount(() => {
		const colors = ['hsl(210 10% 23%)', 'hsl(210 11% 71%)', 'hsl(210 14% 89%)'];
		const zOffsets = [1, 4];

		const root = new Anchor();

		const a1 = new Anchor({ addTo: root });
		const a2 = new Anchor({ addTo: a1 });

		const origin = new Anchor({
			addTo: a2
		});

		const squircleSmall = new Shape({
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					bezier: [
						{ x: 0.7, y: 0 },
						{ x: 0.8, y: 0.1 },
						{ x: 0.8, y: 1.6 }
					]
				},
				{
					bezier: [
						{ x: 0.8, y: 3.1 },
						{ x: 0.7, y: 3.2 },
						{ x: 0, y: 3.2 }
					]
				},
				{
					bezier: [
						{ x: -0.7, y: 3.2 },
						{ x: -0.8, y: 3.1 },
						{ x: -0.8, y: 1.6 }
					]
				},
				{
					bezier: [
						{ x: -0.8, y: 0.1 },
						{ x: -0.7, y: 0 },
						{ x: 0, y: 0 }
					]
				}
			]
		});

		const squircleLarge = new Shape({
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					bezier: [
						{ x: 7, y: 0 },
						{ x: 7.5, y: 0.5 },
						{ x: 7.5, y: 5 }
					]
				},
				{
					bezier: [
						{ x: 7.5, y: 9.5 },
						{ x: 7, y: 10 },
						{ x: 0, y: 10 }
					]
				},
				{
					bezier: [
						{ x: -7, y: 10 },
						{ x: -7.5, y: 9.5 },
						{ x: -7.5, y: 5 }
					]
				},
				{
					bezier: [
						{ x: -7.5, y: 0.5 },
						{ x: -7, y: 0 },
						{ x: 0, y: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: origin,
			color: colors[2],
			stroke: 3.2
		});

		new Shape({
			addTo: origin,
			color: colors[0],
			stroke: 1,
			path: [{ y: 1.5 }, { y: 3 }]
		});

		const head = new Anchor({
			addTo: origin,
			translate: { y: 3 }
		});

		[-1, 1].forEach((direction) => {
			squircleSmall.copy({
				addTo: head,
				color: colors[0],
				translate: {
					x: 8 * direction,
					y: 3.4,
					z: zOffsets[0] * -1
				}
			});
		});

		squircleLarge.copy({
			addTo: head,
			color: colors[1]
		});

		squircleLarge.copy({
			addTo: head,
			color: colors[0],
			translate: {
				y: 1.25,
				z: zOffsets[0]
			},
			scale: {
				x: 0.825,
				y: 0.725
			}
		});

		new Shape({
			addTo: head,
			color: colors[2],
			fill: true,
			path: [
				{ x: 3, y: 0 },
				{ x: -3, y: 0 },
				{
					arc: [
						{ x: -3, y: 3 },
						{ x: 0, y: 3 }
					]
				},
				{
					arc: [
						{ x: 3, y: 3 },
						{ x: 3, y: 0 }
					]
				}
			],
			translate: {
				y: 9.25,
				z: zOffsets[0] * -1
			}
		});

		const face = new Anchor({
			addTo: head,
			translate: {
				y: 6.75,
				z: zOffsets[1]
			}
		});

		new Shape({
			addTo: face,
			color: colors[2],
			stroke: 0.5,
			fill: true,
			path: [
				{ x: 1, y: 0 },
				{ x: -1, y: 0 },
				{
					arc: [
						{ x: -1, y: 1 },
						{ x: 0, y: 1 }
					]
				},
				{
					arc: [
						{ x: 1, y: 1 },
						{ x: 1, y: 0 }
					]
				}
			]
		});

		[-1, 1].forEach((direction) => {
			squircleSmall.copy({
				addTo: face,
				color: colors[2],
				stroke: 0.5,
				translate: {
					x: 3.5 * direction,
					y: -4
				}
			});
		});

		origin.translate.y = -7.5;

		const elements = element.querySelectorAll('canvas');
		const anchors = [root, a1, a2];

		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];

			const context = element.getContext('2d');
			const { width, height } = element;
			const zoom = 15;

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

			const { rotations } = robots[i];

			for (let j = 0; j < anchors.length; j++) {
				if (j < rotations.length) {
					const { x = 0, y = 0, z = 0 } = rotations[j];
					anchors[j].rotate = {
						x: degreesToRadians(x),
						y: degreesToRadians(y),
						z: degreesToRadians(z)
					};
				} else {
					anchors[j].rotate = { x: 0, y: 0, z: 0 };
				}
			}

			root.updateGraph();
			render();
		}
	});
</script>

<div bind:this={element}>
	{#each robots as { title }}
		<figure>
			<canvas style="display: block;" width="300" height="300" />
			<figcaption>{title}</figcaption>
		</figure>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}

	figure {
		margin: 0;
		text-align: center;
	}

	figure > * + * {
		margin-block-start: 0.5rem;
	}
</style>
