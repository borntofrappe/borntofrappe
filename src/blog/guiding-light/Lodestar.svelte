<script>
	import { onMount } from 'svelte';
	import { Anchor, Group, Shape, Ellipse, Hemisphere, RoundedRect, easeInOut, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const colors = {
			sun: {
				body: 'hsl(49, 96%, 54%)',
				rays: 'hsl(49, 100%, 56%)',
				eyes: 'hsl(39, 74%, 15%)',
				mouth: 'hsl(39, 74%, 15%)'
			},
			sunflower: {
				body: 'hsl(36, 78%, 19%)',
				crown: 'hsl(49, 83%, 48%)',
				stem: 'hsl(69, 87%, 18%)',
				leafs: ['hsl(69, 87%, 18%)', 'hsl(91, 35%, 49%)'],
				seeds: 'hsl(41, 70%, 9%)',
				soil: 'hsl(61, 98%, 16%)'
			},
			ground: 'hsl(66, 66%, 35%)'
		};

		const strokes = [2, 5, 10];
		const [stroke] = strokes;
		const offsets = [stroke, stroke * 2];

		const root = new Anchor();

		const ground = new RoundedRect({
			addTo: root,
			color: colors.ground,
			stroke: strokes[2],
			fill: true,
			cornerRadius: 80,
			width: 300,
			height: 250,
			translate: {
				y: 80 + 50 + 15
			},
			rotate: {
				x: TAU / 4
			}
		});

		const sunflower = new Anchor();

		const crown = new Shape({
			addTo: sunflower,
			color: colors.sunflower.crown,
			stroke,
			fill: true,
			path: [
				{ x: 0, y: 24 },
				{
					bezier: [
						{ x: -9.28, y: 28.53 },
						{ x: -9.28, y: 28.53 },
						{ x: -14.11, y: 19.41 }
					]
				},
				{
					bezier: [
						{ x: -24.28, y: 17.63 },
						{ x: -24.28, y: 17.63 },
						{ x: -22.83, y: 7.41 }
					]
				},
				{
					bezier: [
						{ x: -30, y: 0 },
						{ x: -30, y: 0 },
						{ x: -22.83, y: -7.41 }
					]
				},
				{
					bezier: [
						{ x: -24.28, y: -17.63 },
						{ x: -24.28, y: -17.63 },
						{ x: -14.11, y: -19.41 }
					]
				},
				{
					bezier: [
						{ x: -9.28, y: -28.53 },
						{ x: -9.28, y: -28.53 },
						{ x: 0, y: -24 }
					]
				},
				{
					bezier: [
						{ x: 9.28, y: -28.53 },
						{ x: 9.28, y: -28.53 },
						{ x: 14.11, y: -19.41 }
					]
				},
				{
					bezier: [
						{ x: 24.28, y: -17.63 },
						{ x: 24.28, y: -17.63 },
						{ x: 22.83, y: -7.41 }
					]
				},
				{
					bezier: [
						{ x: 30, y: 0 },
						{ x: 30, y: 0 },
						{ x: 22.83, y: 7.41 }
					]
				},
				{
					bezier: [
						{ x: 24.28, y: 17.63 },
						{ x: 24.28, y: 17.63 },
						{ x: 14.11, y: 19.41 }
					]
				},
				{
					bezier: [
						{ x: 9.28, y: 28.53 },
						{ x: 9.28, y: 28.53 },
						{ x: 0, y: 24 }
					]
				}
			],
			translate: {
				y: -42
			}
		});

		new Ellipse({
			addTo: crown,
			color: colors.sunflower.body,
			stroke,
			fill: true,
			diameter: 40,
			translate: {
				z: offsets[0]
			}
		});

		const seeds = new Group({
			addTo: crown,
			translate: {
				z: offsets[1]
			}
		});

		const seed = new Shape({
			color: colors.sunflower.seeds,
			stroke,
			path: [
				{ x: 1, y: -1 },
				{ x: -1, y: 1 }
			]
		});

		for (const { x, y, scale } of [
			{ x: 0, y: 0, scale: 1 },
			{ x: 4, y: 6.92, scale: 0.8 },
			{ x: -6.93, y: 3.99, scale: 0.8 },
			{ x: -4.01, y: -6.93, scale: 0.8 },
			{ x: 6.92, y: -4.01, scale: 0.8 },
			{ x: 14, y: 0, scale: 0.6 },
			{ x: 9.89, y: 9.89, scale: 0.6 },
			{ x: 0, y: 14, scale: 0.6 },
			{ x: -9.9, y: 9.89, scale: 0.6 },
			{ x: -14, y: 0, scale: 0.6 },
			{ x: -9.9, y: -9.9, scale: 0.6 },
			{ x: -0.01, y: -14, scale: 0.6 },
			{ x: 9.89, y: -9.9, scale: 0.6 }
		]) {
			seed.copy({
				addTo: seeds,
				stroke: stroke * scale,
				translate: {
					x,
					y
				},
				scale
			});
		}

		const leaf = new Shape({
			color: colors.sunflower.leafs[0],
			stroke,
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					bezier: [
						{ x: 0, y: -5 },
						{ x: 3, y: -14 },
						{ x: 18, y: -13 }
					]
				},
				{
					bezier: [
						{ x: 18, y: -4 },
						{ x: 8, y: 2 },
						{ x: 0, y: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: leaf,
			color: colors.sunflower.leafs[1],
			stroke,
			path: [
				{ x: 4, y: -3 },
				{
					bezier: [
						{ x: 8, y: -7 },
						{ x: 9, y: -8 },
						{ x: 15, y: -10 }
					]
				}
			],
			translate: {
				z: offsets[0]
			}
		});

		for (const { offset, scale } of [
			{
				offset: 0,
				scale: 1
			},
			{
				offset: 10,
				scale: -1
			},
			{
				offset: 20,
				scale: 1
			},
			{
				offset: 30,
				scale: -1
			},
			{
				offset: 40,
				scale: 1
			}
		]) {
			leaf.copyGraph({
				addTo: sunflower,
				translate: {
					y: offset
				},
				scale: {
					x: scale
				}
			});
		}

		new Shape({
			addTo: sunflower,
			color: colors.sunflower.stem,
			stroke: strokes[1],
			path: [{ y: 50 }, { y: -42 }]
		});

		new Hemisphere({
			addTo: sunflower,
			color: colors.sunflower.soil,
			diameter: 30,
			stroke,
			rotate: {
				x: TAU / 4
			},
			translate: {
				y: 50 + 15
			}
		});

		const sunflowers = new Anchor({
			addTo: root,
			translate: {
				y: 80
			}
		});

		for (const { x, z } of [
			{ x: -80, z: -40 },
			{ x: 0, z: -40 },
			{ x: 80, z: -40 },
			{ x: -80, z: 40 },
			{ x: 0, z: 40 },
			{ x: 80, z: 40 }
		]) {
			sunflower.copyGraph({
				addTo: sunflowers,
				translate: {
					x,
					z
				}
			});
		}

		const sun = new Shape({
			addTo: root,
			color: colors.sun.body,
			stroke: 80,
			translate: {
				y: -110
			}
		});

		const ray = new Shape({
			color: colors.sun.rays,
			stroke: strokes[2],
			path: [{ x: 50 }, { x: 55 }]
		});

		for (const z of Array(12)
			.fill()
			.map((_, i, { length }) => (TAU / length) * i)) {
			ray.copy({
				addTo: sun,
				rotate: {
					z
				}
			});
		}

		const face = new Group({
			addTo: sun,
			translate: {
				z: 30
			}
		});

		const eye = new Shape({
			color: colors.sun.eyes,
			stroke: 10
		});

		for (const x of [-11, 11]) {
			eye.copy({
				addTo: face,
				translate: {
					x,
					y: -10
				}
			});
		}

		new Shape({
			addTo: face,
			color: colors.sun.mouth,
			stroke: 6,
			fill: true,
			path: [
				{ x: -6, y: 0 },
				{
					bezier: [
						{ x: -4, y: 7.5 },
						{ x: 4, y: 7.5 },
						{ x: 6, y: 0 }
					]
				}
			],
			translate: {
				y: 5
			}
		});

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 1.5;

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

		const update = (t) => {
			root.rotate.x = -0.1 - 0.1 * t;
			sun.translate.x = -200 + 400 * t;
			sun.translate.y = -110 + 60 * (1 - Math.sin(t * Math.PI));
			sun.rotate.y = -0.75 + 0.75 * t;
			for (const child of sunflowers.children) {
				child.children[0].rotate.x = 0.5 + 0.5 * t;
				child.children[0].rotate.y = -0.1 - 0.75 * t;
			}
		};

		root.rotate.y = 0.5;
		ground.translate.z = -100;
		ground.translate.x = -50;
		ground.translate.y += 20;
		sun.rotate.x = -0.4;
		update(1);

		root.updateGraph();
		render();

		let direction = 1;
		let frame = null;
		let ticker = 1000;
		const cycle = 1000;

		const animate = () => {
			ticker = ticker + direction;
			if (ticker >= cycle) {
				direction = -1;
				ticker = cycle;
			} else if (ticker <= 0) {
				direction = 1;
				ticker = 0;
			}

			update(easeInOut(ticker / cycle, 3));

			root.updateGraph();
			render();

			frame = requestAnimationFrame(animate);
		};

		const observation = (entries) => {
			if (entries[0].isIntersecting) {
				frame = requestAnimationFrame(animate);
			} else {
				cancelAnimationFrame(frame);
			}
		};

		const observer = new IntersectionObserver(observation);
		observer.observe(element);

		return () => {
			cancelAnimationFrame(frame);
			observer.unobserve(element);
		};
	});
</script>

<canvas
	bind:this={element}
	style="display: block; inline-size: 100%; max-inline-size: 700px;"
	width="700"
	height="550"
/>
