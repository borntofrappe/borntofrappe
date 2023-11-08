<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, Cone, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const colors = {
			main: 'hsl(0, 0%, 70%)',
			shadow: 'hsl(0, 0%, 60%)'
		};

		const depth = 7.5;
		const z = depth * -1;

		const root = new Anchor({
			translate: {
				x: -3.5,
				y: 2.5
			},
			rotate: {
				x: -0.2,
				y: 0.2
			}
		});

		const shape = new Shape({
			addTo: root,
			color: colors.main,
			fill: true,
			path: [
				{ x: -2, y: -2 },
				{
					arc: [
						{ x: 2, y: -2 },
						{ x: 2, y: 2 }
					]
				},
				{ x: -2, y: 2 }
			]
		});

		shape.copy({
			color: colors.shadow,
			translate: {
				z
			}
		});

		const { addTo, fill, path } = shape;

		for (let i = 0; i < path.length; i++) {
			const p1 = path[i];
			const p2 = path[(i + 1) % path.length];

			const p1Arc = Object.hasOwn(p1, 'arc');
			const p2Arc = Object.hasOwn(p2, 'arc');

			if (p2Arc) {
				const { x: x1, y: y1 } = p1Arc ? p1.arc[1] : p1;
				const { x: xc, y: yc } = p2.arc[0];
				const { x: x2, y: y2 } = p2.arc[1];

				new Shape({
					addTo,
					color: colors.shadow,
					fill,
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
					addTo,
					color: colors.shadow,
					fill,
					path: [
						{ x: x1, y: y1, z: 0 },
						{ x: x1, y: y1, z },
						{ x: x2, y: y2, z },
						{ x: x2, y: y2, z: 0 }
					]
				});
			}
		}

		const distance = 2;
		const gaps = 5;
		const segment = distance / gaps;
		const dash = segment / 4;

		const axes = new Anchor({
			addTo: root,
			translate: {
				x: 7,
				y: -6
			}
		});

		const marker = new Cone({
			color: 'currentColor',
			stroke: 0,
			diameter: 0.4,
			length: 0.6
		});

		new Shape({
			addTo: axes,
			color: 'currentColor',
			stroke: 0.4
		});

		['x', 'y', 'z'].forEach((axis) => {
			for (let i = 0; i < gaps; i++) {
				const axis1 = i * segment;
				const axis2 = axis1 + dash;
				new Shape({
					addTo: axes,
					color: 'currentColor',
					stroke: 0.1,
					path: [{ [axis]: axis1 * -1 }, { [axis]: axis2 * -1 }]
				});
			}

			new Shape({
				addTo: axes,
				color: 'currentColor',
				stroke: 0.1,
				path: [{ [axis]: 0 }, { [axis]: distance }]
			});
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

		marker.copy({
			addTo: axes,
			translate: {
				y: distance
			},
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		marker.copy({
			addTo: axes,
			translate: {
				z: distance
			}
		});

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 30;

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

		root.updateGraph();
		render();
	});
</script>

<canvas
	bind:this={element}
	style="display: block; inline-size: 100%; max-inline-size: 400px;"
	width="400"
	height="320"
/>
