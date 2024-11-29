<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, TAU, Ellipse } from 'zdog';

	let element = null;

	onMount(() => {
		const colors = {
			wood: {
				base: 'hsl(13 62% 47%)',
				dark: 'hsl(4 57% 37%)',
				light: 'hsl(18 59% 53%)'
			},
			flower: {
				body: 'hsl(37 11% 28%)',
				petal: 'hsl(35 100% 47%)'
			},
			clock: {
				body: 'hsl(40 23% 97%)',
				dot: 'hsl(40 15% 80%)',
				hand: 'hsl(42 15% 13%)'
			}
		};
		const zOffsets = [-1, 1, 2];

		const root = new Anchor({
			translate: {
				y: -4
			},
			rotate: {
				x: -0.1,
				y: 0.225
			}
		});

		const shapes = [];

		shapes.push(
			new Shape({
				addTo: root,
				color: colors.wood.base,
				fill: true,
				path: [
					{ x: 0, y: -17 },
					{ x: 7, y: -10 },
					{ x: -7, y: -10 }
				]
			})
		);

		shapes.push(
			new Shape({
				addTo: root,
				color: colors.wood.base,
				fill: true,
				path: [
					{ x: 8, y: -9 },
					{ x: 10, y: -7 },
					{ x: 10, y: -4 },
					{ x: -10, y: -4 },
					{ x: -10, y: -7 },
					{ x: -8, y: -9 }
				]
			})
		);

		shapes.push(
			new Shape({
				addTo: root,
				color: colors.wood.base,
				fill: true,
				path: [
					{ x: -10, y: -3 },
					{ x: 10, y: -3 },
					{ x: 10, y: 3 },
					{ x: -10, y: 3 }
				]
			})
		);

		shapes.push(
			new Shape({
				addTo: root,
				color: colors.wood.base,
				fill: true,
				path: [
					{ x: -10, y: 4 },
					{ x: 10, y: 4 },
					{ x: 10, y: 8 },
					{ x: -10, y: 8 }
				]
			})
		);

		shapes.push(
			new Shape({
				addTo: root,
				color: colors.wood.base,
				fill: true,
				path: [
					{ x: -10, y: 10 },
					{ x: 10, y: 10 },
					{ x: 10, y: 12 },
					{ x: -10, y: 12 }
				]
			})
		);

		const lines = new Anchor({
			addTo: root,
			translate: {
				z: zOffsets[1]
			}
		});

		new Shape({
			addTo: lines,
			color: colors.wood.dark,
			path: [
				{ x: -7.5, y: -9.5 },
				{ x: 7.5, y: -9.5 }
			]
		});

		new Shape({
			addTo: lines,
			color: colors.wood.dark,
			path: [
				{ x: -10, y: -3.5 },
				{ x: 10, y: -3.5 }
			]
		});

		new Shape({
			addTo: lines,
			color: colors.wood.dark,
			path: [
				{ x: -10, y: 3.5 },
				{ x: 10, y: 3.5 }
			]
		});

		const overlay = new Anchor({
			addTo: root,
			translate: {
				z: zOffsets[2]
			}
		});

		shapes.push(
			new Shape({
				addTo: overlay,
				color: colors.wood.light,
				fill: true,
				path: [
					{ x: -12, y: 8 },
					{ x: 12, y: 8 },
					{ x: 12, y: 10 },
					{ x: -12, y: 10 }
				]
			})
		);

		shapes.push(
			new Shape({
				addTo: overlay,
				color: colors.wood.light,
				fill: true,
				path: [
					{ x: 0, y: -17 },
					{ x: 12, y: -5 },
					{ x: 13.5, y: -6.5 },
					{ x: 1.5, y: -18.5 },
					{ x: 3, y: -20 },
					{ x: 1.5, y: -21.5 },
					{ x: 0, y: -20 },
					{ x: -1.5, y: -21.5 },
					{ x: -3, y: -20 },
					{ x: -1.5, y: -18.5 },
					{ x: -13.5, y: -6.5 },
					{ x: -12, y: -5 },
					{ x: 0, y: -17 }
				]
			})
		);

		const pendulum = new Anchor({
			addTo: root,
			translate: {
				y: 12
			}
		});

		shapes.push(
			new Shape({
				addTo: pendulum,
				color: colors.wood.base,
				fill: true,
				path: [
					{ x: -1.75, y: 0 },
					{ x: 1.75, y: 0 },
					{ x: 1.75, y: 8 },
					{ x: -1.75, y: 8 }
				]
			})
		);

		shapes.push(
			new Shape({
				addTo: pendulum,
				color: colors.wood.base,
				fill: true,
				path: [
					{ x: 1.5, y: 12 },
					{ x: 3.5, y: 16 },
					{ x: 0, y: 19.5 },
					{ x: -3.5, y: 16 },
					{ x: -1.5, y: 12 }
				]
			})
		);

		shapes.push(
			new Shape({
				addTo: pendulum,
				color: colors.wood.light,
				fill: true,
				path: [
					{ x: -3, y: 9 },
					{ x: 3, y: 9 },
					{ x: 3, y: 11 },
					{ x: -3, y: 11 }
				]
			})
		);

		const flower = new Ellipse({
			addTo: pendulum,
			color: colors.flower.body,
			diameter: 1.5,
			fill: true,
			translate: {
				y: 16,
				z: zOffsets[2]
			}
		});

		const petal = new Shape({
			color: colors.flower.petal,
			path: [
				{ x: 0, y: 0 },
				{ x: -0.5, y: -1 },
				{ x: 0, y: -2 },
				{ x: 0.5, y: -1 }
			],
			translate: {
				z: zOffsets[0]
			}
		});

		Array(8)
			.fill()
			.forEach((_, i, { length }) => {
				const z = (TAU / length) * i;
				petal.copy({
					addTo: flower,
					rotate: {
						z
					}
				});
			});

		const perch = new Shape({
			addTo: root,
			color: colors.wood.light,
			fill: true,
			path: [
				{ x: -2.5, y: 0 },
				{ x: -2.5, y: -2 },
				{
					arc: [
						{ x: -2.5, y: -4.5 },
						{ x: 0, y: -4.5 }
					]
				},
				{
					arc: [
						{ x: 2.5, y: -4.5 },
						{ x: 2.5, y: -2 }
					]
				},
				{ x: 2.5, y: 0 }
			],
			translate: {
				y: -8,
				z: zOffsets[2]
			}
		});

		new Shape({
			addTo: perch,
			color: colors.wood.light,
			path: [
				{ x: -3.5, y: 0 },
				{ x: 3.5, y: 0 },
				{ x: 3.5, y: 0.75 },
				{ x: -3.5, y: 0.75 }
			]
		});

		const clock = new Ellipse({
			addTo: root,
			color: colors.clock.body,
			fill: true,
			diameter: 10,
			translate: {
				z: zOffsets[2]
			}
		});

		const dot = new Ellipse({
			color: colors.clock.dot,
			fill: true,
			diameter: 1
		});

		[
			{ x: 0, y: -4 },
			{ x: 4, y: 0 },
			{ x: 0, y: 4 },
			{ x: -4, y: 0 }
		].forEach(({ x, y }) => {
			dot.copy({
				addTo: clock,
				translate: {
					x,
					y,
					z: zOffsets[1]
				}
			});
		});

		const clockHands = new Ellipse({
			addTo: clock,
			color: colors.clock.hand,
			fill: true,
			diameter: 1.4,
			translate: {
				z: zOffsets[2]
			}
		});

		const handHours = new Shape({
			addTo: clockHands,
			color: colors.clock.hand,
			stroke: 1,
			path: [{ y: 0 }, { y: -2 }]
		});

		const handMinutes = new Shape({
			addTo: clockHands,
			color: colors.clock.hand,
			stroke: 0.6,
			path: [{ y: 0 }, { y: -3.5 }]
		});

		const depth = 10;
		const z = depth * -1;

		for (const line of lines.children) {
			const { color, path } = line;
			const [h, s, l] = color.match(/\d+/g);
			const shadow = `hsl(${h}, ${s}%, ${l * 0.9}%)`;

			const { x: x2, y: y2 } = path[1];

			new Shape({
				addTo: line,
				color: shadow,
				path: [
					{ x: x2, y: y2, z: 0 },
					{ x: x2, y: y2, z }
				]
			});
		}

		for (const shape of shapes) {
			const { addTo, color, fill, path } = shape;
			const { length } = path;

			const [h, s, l] = color.match(/\d+/g);
			const shadow = `hsl(${h}, ${s}%, ${l * 0.9}%)`;

			shape.copy({
				color,
				translate: {
					color: shadow,
					z
				}
			});

			for (let i = 0; i < length; i++) {
				const { x: x1, y: y1 } = path[i];
				const { x: x2, y: y2 } = path[(i + 1) % length];
				new Shape({
					addTo,
					color: shadow,
					fill,
					path: [
						{ x: x1, y: y1, z: 0 },
						{ x: x1, y: y1, z: z },
						{ x: x2, y: y2, z: z },
						{ x: x2, y: y2, z: 0 }
					]
				});
			}
		}

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 7;

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

		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();

		handMinutes.rotate.z = (minutes * TAU) / 60;
		handHours.rotate.z = ((hours % 12) * TAU) / 12 + handMinutes.rotate.z / 12;

		root.updateGraph();
		render();
	});
</script>

<canvas
	bind:this={element}
	style="display: block; inline-size: 100%; max-inline-size: 250px;"
	width="250"
	height="400"
/>
