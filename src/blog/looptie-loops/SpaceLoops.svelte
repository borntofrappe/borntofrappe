<script>
	import { onMount } from 'svelte';
	import { Anchor, Box, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const ring = {
			colors: ['hsl(240 14% 84%)', 'hsl(240 3% 48%)', 'hsl(230 4% 31%)'],
			boxes: [
				{ x: 3, y: 0 },
				{ x: 4, y: 0 },
				{ x: 5, y: 0 },
				{ x: 6, y: 0 },
				{ x: 1, y: 1 },
				{ x: 2, y: 1 },
				{ x: 7, y: 1 },
				{ x: 8, y: 1 },
				{ x: 1, y: 2 },
				{ x: 8, y: 2 },
				{ x: 0, y: 3 },
				{ x: 0, y: 4 },
				{ x: 0, y: 5 },
				{ x: 0, y: 6 },
				{ x: 9, y: 3 },
				{ x: 9, y: 4 },
				{ x: 9, y: 5 },
				{ x: 9, y: 6 },
				{ x: 1, y: 7 },
				{ x: 8, y: 7 },
				{ x: 1, y: 8 },
				{ x: 2, y: 8 },
				{ x: 7, y: 8 },
				{ x: 8, y: 8 },
				{ x: 3, y: 9 },
				{ x: 4, y: 9 },
				{ x: 5, y: 9 },
				{ x: 6, y: 9 }
			]
		};

		const plane = [
			{
				color: 'hsl(230 4% 31%)',
				boxes: [
					{ x: 4, y: 0 },
					{ x: 1, y: 1 },
					{ x: 3, y: 1 },
					{ x: 5, y: 1 },
					{ x: 0, y: 2 },
					{ x: 2, y: 2 },
					{ x: 0, y: 3 },
					{ x: 8, y: 3 },
					{ x: 1, y: 4 },
					{ x: 9, y: 4 },
					{ x: 0, y: 5 },
					{ x: 2, y: 5 },
					{ x: 9, y: 5 },
					{ x: 1, y: 6 },
					{ x: 3, y: 6 },
					{ x: 5, y: 6 },
					{ x: 4, y: 7 }
				]
			},
			{
				color: 'hsl(240 3% 48%)',
				boxes: [
					{ x: 4, y: 2 },
					{ x: 5, y: 2 },
					{ x: 6, y: 2 },
					{ x: 2, y: 4 },
					{ x: 3, y: 4 },
					{ x: 4, y: 4 },
					{ x: 5, y: 4 },
					{ x: 8, y: 4 },
					{ x: 3, y: 5 },
					{ x: 6, y: 5 },
					{ x: 7, y: 5 },
					{ x: 8, y: 5 }
				]
			},
			{
				color: 'hsl(240 14% 84%)',
				boxes: [
					{ x: 4, y: 1 },
					{ x: 3, y: 2 },
					{ x: 1, y: 3 },
					{ x: 2, y: 3 },
					{ x: 3, y: 3 },
					{ x: 4, y: 3 },
					{ x: 5, y: 3 },
					{ x: 6, y: 3 },
					{ x: 7, y: 3 },
					{ x: 1, y: 5 },
					{ x: 4, y: 5 },
					{ x: 5, y: 5 }
				]
			},
			{
				color: 'hsl(240 11% 93%)',
				boxes: [
					{ x: 1, y: 2 },
					{ x: 7, y: 2 },
					{ x: 6, y: 4 },
					{ x: 7, y: 4 },
					{ x: 4, y: 6 }
				]
			}
		];

		const root = new Anchor();

		const rootRing = new Anchor({
			addTo: root
		});

		const rootPlane = new Anchor({
			addTo: root
		});

		const offsetRing = new Anchor({
			addTo: rootRing,
			scale: 1.7
		});

		for (const { x, y } of ring.boxes) {
			new Box({
				addTo: offsetRing,
				color: ring.colors[0],
				rightFace: ring.colors[1],
				bottomFace: ring.colors[2],
				stroke: 0,
				width: 1,
				height: 1,
				depth: 1,
				translate: {
					x: x - 5,
					y: y - 5
				}
			});
		}

		const offsetPlane = new Anchor({
			addTo: rootPlane
		});

		const centerPlane = new Anchor({
			addTo: offsetPlane
		});

		for (const { color, boxes } of plane) {
			for (const { x, y } of boxes) {
				new Box({
					addTo: centerPlane,
					color,
					stroke: 0,
					width: 1,
					height: 1,
					depth: 1,
					translate: {
						x: x - 5,
						y: y - 4
					}
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

		root.updateGraph();
		render();

		let frame = null;
		let ticker = 5;
		const cycle = 500;

		const radius = 18;

		offsetRing.translate.x = radius * -1;
		offsetPlane.translate.x = radius;
		offsetPlane.rotate.y = TAU / 4;

		root.rotate.y = 0.5;
		root.translate.y = 4;

		const update = (t) => {
			const a = t * TAU;
			rootRing.rotate.y = a * -1;
			rootPlane.rotate.y = a * 2;
			centerPlane.rotate.x = a * 3 * -1;
			root.rotate.x = Math.sin(a);
		};

		update(ticker / cycle);

		root.updateGraph();
		render();

		const animate = () => {
			ticker = (ticker + 1) % cycle;

			update(ticker / cycle);
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
		};
	});
</script>

<canvas
	bind:this={element}
	style="display: block; inline-size: 100%; max-inline-size: 500px; margin-inline: auto;"
	width="500"
	height="400"
/>

<style>
	canvas {
		background: hsl(228 7% 12%)
			url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="hsl(228 7% 15%)" width="50" height="50">\
      <rect width="25" height="25" />\
      <rect x="25" y="25" width="25" height="25" />\
  </svg>');
	}
</style>
