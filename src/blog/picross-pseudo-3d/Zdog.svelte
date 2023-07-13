<script>
	import { onMount } from 'svelte';
	import { Anchor, Box, Shape, TAU } from 'zdog';

	const level = `
---FEBI---
--IAAAAF--
-HAGEBHAG-
DAGEDCBHAC
-H-C--D-G-
`;

	const grid = level
		.trim()
		.split('\n')
		.map((row) => row.split(''));

	const rows = grid.length;
	const columns = grid[0].length;

	const copies = grid.reduce((acc, curr, y) => {
		const row = curr.reduce((a, c, x) => {
			return c !== '-'
				? [
						...a,
						{
							x,
							y,
							shape: c.toLowerCase()
						}
				  ]
				: a;
		}, []);
		return [...acc, ...row];
	}, []);

	let canvas = null;

	onMount(() => {
		const a = new Box({
			width: 1,
			height: 1,
			depth: 1,
			color: 'hsl(0 0% 20%)',
			rearFace: 'hsl(0 0% 30%)',
			frontFace: 'hsl(0 0% 30%)',
			stroke: 0
		});

		const b = new Anchor({});

		new Shape({
			color: 'hsl(0 0% 20%)',
			addTo: b,
			path: [
				{
					x: -0.5,
					y: 0.5,
					z: -0.5
				},
				{
					x: 0.5,
					y: 0.5,
					z: -0.5
				},
				{
					x: 0.5,
					y: 0.5,
					z: 0.5
				},
				{
					x: -0.5,
					y: 0.5,
					z: 0.5
				}
			],
			fill: true,
			stroke: 0
		});

		new Shape({
			color: 'hsl(0 0% 20%)',
			addTo: b,
			path: [
				{
					x: -0.5,
					y: 0.5,
					z: -0.5
				},
				{
					x: -0.5,
					y: -0.5,
					z: -0.5
				},
				{
					x: -0.5,
					y: -0.5,
					z: 0.5
				},
				{
					x: -0.5,
					y: 0.5,
					z: 0.5
				}
			],
			fill: true,
			stroke: 0
		});

		const bb = new Shape({
			color: 'hsl(0 0% 30%)',
			addTo: b,
			path: [
				{
					x: -0.5,
					y: -0.5,
					z: -0.5
				},
				{
					x: -0.5,
					y: 0.5,
					z: -0.5
				},
				{
					x: 0.5,
					y: 0.5,
					z: -0.5
				},
				{
					arc: [
						{ x: 0.5, y: -0.5, z: -0.5 },
						{ x: -0.5, y: -0.5, z: -0.5 }
					]
				}
			],
			fill: true,
			stroke: 0
		});

		bb.copy({
			addTo: b,
			translate: {
				z: 1
			}
		});

		new Shape({
			color: 'hsl(0 0% 20%)',
			addTo: b,
			path: [
				{
					x: -0.5,
					y: -0.5,
					z: -0.5
				},
				{
					arc: [
						{ x: 0.5, y: -0.5, z: -0.5 },
						{ x: 0.5, y: 0.5, z: -0.5 }
					]
				},
				{
					x: 0.5,
					y: 0.5,
					z: 0.5
				},
				{
					arc: [
						{ x: 0.5, y: -0.5, z: 0.5 },
						{ x: -0.5, y: -0.5, z: 0.5 }
					]
				}
			],
			fill: true,
			stroke: 0
		});

		const c = b.copyGraph({
			rotate: {
				z: TAU / 4
			}
		});

		const d = b.copyGraph({
			rotate: {
				z: TAU / 2
			}
		});

		const e = b.copyGraph({
			rotate: {
				z: (TAU * 3) / 4
			}
		});

		const f = new Anchor();

		new Shape({
			color: 'hsl(0 0% 20%)',
			addTo: f,
			path: [
				{
					x: -0.5,
					y: -0.5,
					z: -0.5
				},
				{
					x: -0.5,
					y: 0.5,
					z: -0.5
				},
				{
					x: -0.5,
					y: 0.5,
					z: 0.5
				},
				{
					x: -0.5,
					y: -0.5,
					z: 0.5
				}
			],
			fill: true,
			stroke: 0
		});

		new Shape({
			color: 'hsl(0 0% 20%)',
			addTo: f,
			path: [
				{
					x: -0.5,
					y: 0.5,
					z: -0.5
				},
				{
					x: 0.5,
					y: 0.5,
					z: -0.5
				},
				{
					x: 0.5,
					y: 0.5,
					z: 0.5
				},
				{
					x: -0.5,
					y: 0.5,
					z: 0.5
				}
			],
			fill: true,
			stroke: 0
		});

		const ff = new Shape({
			color: 'hsl(0 0% 30%)',
			addTo: f,
			path: [
				{
					x: -0.5,
					y: -0.5,
					z: -0.5
				},
				{ x: -0.5, y: 0.5, z: -0.5 },
				{
					x: 0.5,
					y: 0.5,
					z: -0.5
				}
			],
			fill: true,
			stroke: 0
		});

		ff.copy({
			addTo: f,
			translate: {
				z: 1
			}
		});

		new Shape({
			color: 'hsl(0 0% 20%)',
			addTo: f,
			path: [
				{
					x: -0.5,
					y: -0.5,
					z: -0.5
				},
				{ x: 0.5, y: 0.5, z: -0.5 },
				{
					x: 0.5,
					y: 0.5,
					z: 0.5
				},
				{ x: -0.5, y: -0.5, z: 0.5 }
			],
			fill: true,
			stroke: 0
		});

		const g = f.copyGraph({
			rotate: {
				z: TAU / 4
			}
		});

		const h = f.copyGraph({
			rotate: {
				z: TAU / 2
			}
		});

		const i = f.copyGraph({
			rotate: {
				z: (TAU * 3) / 4
			}
		});

		const shapes = { a, b, c, d, e, f, g, h, i };

		const root = new Anchor();
		const center = new Anchor({ addTo: root });

		const origin = new Anchor({
			addTo: center,
			translate: {
				x: (columns / 2) * -1 + 0.5,
				y: (rows / 2) * -1 + 0.5
			}
		});

		for (const { x, y, shape } of copies) {
			if (shapes[shape]) {
				shapes[shape].copyGraph({
					addTo: origin,
					translate: {
						x,
						y
					}
				});
			}
		}

		const context = canvas.getContext('2d');
		const { width, height } = canvas;
		const zoom = 40;

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

		root.rotate.x = TAU / 24;
		root.updateGraph();
		render();

		let frame = null;
		let direction = 1;
		const angle = TAU / 14;

		const animate = () => {
			center.rotate.x += (0.0002 + 0.03 * (1 - Math.abs(center.rotate.x) / angle)) * direction;

			if (center.rotate.x >= angle) {
				center.rotate.x = angle;
				direction = -1;
			} else if (center.rotate.x <= angle * -1) {
				center.rotate.x = angle * -1;
				direction = 1;
			}

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
		observer.observe(canvas);

		return () => {
			cancelAnimationFrame(frame);
			observer.unobserve(canvas);
		};
	});
</script>

<canvas style="display: block;" bind:this={canvas} width="420" height="240" />
