<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, Ellipse, Cylinder } from 'zdog';

	let element = null;

	onMount(() => {
		const PI = Math.PI;
		const TAU = PI * 2;

		const iterations = 2;
		const baseNumber = 6;
		const radii = [0.2, 0.35];
		const offsets = [32, 40];

		const spheres = Array(iterations)
			.fill()
			.map((_, i, { length }) => {
				const offset = offsets[0] + ((offsets[1] - offsets[0]) / (length - 1)) * i;
				const number = baseNumber * (i + 1);
				const radius = radii[0] + ((radii[1] - radii[0]) / (length - 1)) * i;
				const points = Array(number)
					.fill()
					.map((_, j, { length }) => {
						const theta = PI * -1 + (TAU / length) * j;
						const points = Array(number)
							.fill()
							.map((_, k, { length }) => {
								const a = PI * -1 + (TAU / length) * k;
								const x = offset * Math.sin(theta) * Math.cos(a);
								const y = offset * Math.sin(theta) * Math.sin(a);
								const z = offset * Math.cos(theta);

								return {
									x,
									y,
									z,
									r: radius
								};
							});
						return [...points];
					})
					.flat();

				return points;
			});

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 4.5;

		const colors = {
			backdrop: 'hsl(210 11% 15%)',
			lights: 'hsl(50 100% 93% / 0.3)',
			coaster: 'hsl(31 100% 45%)',
			candle: 'hsl(48 100% 70%)',
			flame: 'hsl(45 97% 54%)'
		};
		const stroke = 3;

		const root = new Anchor();

		new Ellipse({
			addTo: root,
			color: colors.backdrop,
			stroke: 0,
			fill: true,
			diameter: Math.min(width, height) / zoom,
			translate: {
				z: -50
			}
		});

		const earth = new Anchor({
			addTo: root
		});

		const sphere = new Anchor({
			addTo: earth
		});

		for (const points of spheres) {
			for (const { x, y, z, r } of points) {
				new Shape({
					addTo: sphere,
					color: colors.lights,
					stroke: r * 2,
					translate: { x, y, z }
				});
			}
		}

		const coaster = new Ellipse({
			addTo: earth,
			color: colors.coaster,
			stroke,
			fill: true,
			diameter: 14,
			translate: {
				y: 10
			},
			rotate: {
				x: (TAU / 4) * 1
			}
		});

		const candle = new Cylinder({
			addTo: coaster,
			color: colors.candle,
			stroke,
			diameter: 8,
			length: 15
		});

		const flame = new Shape({
			addTo: candle,
			color: colors.flame,
			stroke,
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					bezier: [
						{ x: -4, z: 2 },
						{ x: -2, z: 5 },
						{ x: 0, z: 7 }
					]
				},
				{
					bezier: [
						{ x: 3, z: 4 },
						{ x: 2, z: 1 },
						{ x: 0, z: 0 }
					]
				}
			]
		});

		coaster.translate.y = 12;
		candle.translate.z = coaster.stroke / 2 + candle.stroke / 2 + candle.length / 2;
		flame.translate.z = flame.stroke / 2 + candle.stroke / 2 + candle.length / 2;

		sphere.rotate.x = TAU / 4;
		earth.rotate.x = (TAU / 24) * -1;
		earth.rotate.y = TAU / 42;

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
	width="400px"
	height="400px"
/>
