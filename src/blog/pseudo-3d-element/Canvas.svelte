<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, Ellipse, Hemisphere, Cylinder, Cone, TAU } from 'zdog';

	const black = 'hsl(202 17% 32%)';
	const blue = 'hsl(183 59% 54%)';
	const grey = 'hsl(162 14% 85%)';
	const red = 'hsl(5 92% 67%)';
	const yellow = 'hsl(46 87% 51%)';

	const sparkles = [
		{ x: -45, y: -155 },
		{ x: -25, y: -145 },
		{ x: 20, y: -140 },
		{ x: 25, y: -135 },
		{ x: -75, y: -125 },
		{ x: -5, y: -120 },
		{ x: -115, y: -117 },
		{ x: -95, y: -113 },
		{ x: 21, y: -109 },
		{ x: 53, y: -115 },
		{ x: 60, y: -113 },
		{ x: 90, y: -105 },
		{ x: 120, y: -102 },
		{ x: 81, y: -89 },
		{ x: -15, y: -77 },
		{ x: -135, y: -70 },
		{ x: -93, y: -68 },
		{ x: -25, y: -50 },
		{ x: 30, y: -48 },
		{ x: 90, y: -52 },
		{ x: 135, y: -57 },
		{ x: -140, y: -40 },
		{ x: -65, y: -25 },
		{ x: 45, y: -20 },
		{ x: 80, y: -10 },
		{ x: 151, y: -14 },
		{ x: -130, y: 13 },
		{ x: -60, y: 20 },
		{ x: 37, y: 22 },
		{ x: 100, y: 13 },
		{ x: 147, y: 17 },
		{ x: -120, y: 45 },
		{ x: -95, y: 31 },
		{ x: -25, y: 43 },
		{ x: 30, y: 50 },
		{ x: 95, y: 40 },
		{ x: 140, y: 53 },
		{ x: -135, y: 65 },
		{ x: -105, y: 73 },
		{ x: 20, y: 65 },
		{ x: 123, y: 75 },
		{ x: -110, y: 85 },
		{ x: -50, y: 103 },
		{ x: 60, y: 100 },
		{ x: 90, y: 93 },
		{ x: -75, y: 125 },
		{ x: -20, y: 140 },
		{ x: 25, y: 145 },
		{ x: 53, y: 135 }
	].map((d) => ({
		...d,
		stroke: Math.random() * 2 + 2
	}));

	let element = null;

	onMount(() => {
		const root = new Anchor();

		new Ellipse({
			addTo: root,
			color: black,
			stroke: 0,
			fill: true,
			diameter: 350
		});

		const spaceship = new Anchor({
			addTo: root,
			translate: {
				y: 20,
				z: 50
			},
			rotate: {
				x: TAU / 8
			}
		});

		new Cylinder({
			addTo: spaceship,
			color: blue,
			diameter: 25,
			length: 40,
			rotate: {
				x: TAU / 4
			}
		});

		new Cone({
			addTo: spaceship,
			color: blue,
			stroke: 5,
			diameter: 20,
			length: 20,
			translate: {
				y: -22.5
			},
			rotate: {
				x: TAU / 4
			}
		});

		new Hemisphere({
			addTo: spaceship,
			color: blue,
			diameter: 20,
			translate: {
				y: 35
			},
			rotate: {
				x: TAU / 4
			}
		});

		new Cone({
			addTo: spaceship,
			color: red,
			stroke: 5,
			diameter: 7.5,
			length: 5,
			translate: {
				y: 37.5
			},
			rotate: {
				x: (TAU * 3) / 4
			}
		});

		const wing = new Shape({
			addTo: spaceship,
			color: grey,
			stroke: 5,
			fill: true,
			path: [
				{
					x: 0,
					y: -10
				},
				{
					bezier: [
						{ x: 12.5, y: 5 },
						{ x: 5, y: 5 },
						{ x: 15, y: 17.5 }
					]
				},
				{
					x: 0,
					y: 17.5
				}
			],
			translate: {
				x: 15
			}
		});

		wing.copy({
			translate: {
				x: -15
			},
			scale: {
				x: -1
			}
		});

		new Ellipse({
			addTo: spaceship,
			color: grey,
			stroke: 5,
			fill: true,
			diameter: 10,
			translate: {
				y: -5,
				z: 20
			}
		});

		for (const { x, y, stroke } of sparkles) {
			new Shape({
				addTo: root,
				color: grey,
				stroke,
				translate: {
					x,
					y
				}
			});
		}

		const star = new Shape({
			color: yellow,
			stroke: 0,
			fill: true,
			path: [
				{ x: 9.797174393178826e-16, y: 16 },
				{
					bezier: [
						{ x: -16.457987064189243, y: 22.65247584249853 },
						{ x: -16.457987064189243, y: 22.65247584249853 },
						{ x: -15.216904260722456, y: 4.94427190999916 }
					]
				},
				{
					bezier: [
						{ x: -26.6295824562643, y: -8.652475842498536 },
						{ x: -26.6295824562643, y: -8.652475842498536 },
						{ x: -9.404564036679572, y: -12.944271909999157 }
					]
				},
				{
					bezier: [
						{ x: -5.143516556418883e-15, y: -28 },
						{ x: -5.143516556418883e-15, y: -28 },
						{ x: 9.404564036679567, y: -12.944271909999161 }
					]
				},
				{
					bezier: [
						{ x: 26.6295824562643, y: -8.652475842498536 },
						{ x: 26.6295824562643, y: -8.652475842498536 },
						{ x: 15.216904260722458, y: 4.944271909999155 }
					]
				},
				{
					bezier: [
						{ x: 16.457987064189272, y: 22.65247584249851 },
						{ x: 16.457987064189272, y: 22.65247584249851 },
						{ x: 9.797174393178826e-16, y: 16 }
					]
				}
			]
		});

		const getStar = ({
			spread = 5,
			max = 175,
			weights = { scale: [0.6, 1.5], speed: [2, 5] }
		} = {}) => {
			const r = Math.floor(Math.random() * spread) + 0.1;
			const a = (Math.floor(Math.random() * 360) / 180) * Math.PI;
			const cos = Math.cos(a);
			const sin = Math.sin(a);
			const x = cos * r;
			const y = sin * r;
			const x2 = cos * max;
			const y2 = sin * max;
			const d = (x ** 2 + y ** 2) ** 0.5;
			const d2 = (x2 ** 2 + y2 ** 2) ** 0.5;

			const [scaleMin, scaleMax] = weights.scale;
			const [speedMin, speedMax] = weights.speed;
			const w = {
				scale: Math.random() * (scaleMax - scaleMin) + scaleMin,
				speed: Math.random() * (speedMax - speedMin) + speedMin
			};
			const scale = (d / d2) * w.scale;

			const copy = star.copyGraph({
				addTo: root,
				translate: { x, y },
				scale
			});

			copy.animate = {
				x: x2,
				y: y2,
				d: d2,
				dx: cos,
				dy: sin
			};

			copy.weights = w;

			return copy;
		};

		const context = element.getContext('2d');
		const { width, height } = element;

		context.lineJoin = 'round';
		context.lineCap = 'round';

		const max = width / 1.7;

		let stars = Array(17)
			.fill()
			.map(() => getStar({ spread: width / 2, max }));

		const render = () => {
			context.clearRect(0, 0, width, height);
			context.save();
			context.translate(width / 2, height / 2);
			root.renderGraphCanvas(context);
			context.restore();
		};

		root.updateGraph();
		render();

		let frame = null;
		let direction = 1;
		const angle = TAU / 32;

		const animate = () => {
			spaceship.rotate.z +=
				(0.0006 + 0.004 * (1 - Math.abs(spaceship.rotate.z) / angle)) * direction;
			spaceship.rotate.y = spaceship.rotate.z * -1;

			if (spaceship.rotate.z >= angle) {
				spaceship.rotate.z = angle;
				direction = -1;
			} else if (spaceship.rotate.z <= angle * -1) {
				spaceship.rotate.z = angle * -1;
				direction = 1;
			}

			for (let i = stars.length - 1; i >= 0; i--) {
				const star = stars[i];
				const { translate, animate, weights } = star;
				const { x, y } = translate;
				const { x: x2, y: y2, d: d2 } = animate;
				const d = (x ** 2 + y ** 2) ** 0.5;

				const w = d / d2;
				const scale = w * weights.scale;

				star.scale.x = scale;
				star.scale.y = scale;

				const dx = w * weights.speed * animate.dx;
				const dy = w * weights.speed * animate.dy;

				star.translate.x = x + dx;
				star.translate.y = y + dy;

				if (w >= 1) {
					star.remove();
					stars = [...stars.slice(0, i), ...stars.slice(i + 1), getStar({ max })];
				}
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
		observer.observe(element);

		return () => {
			cancelAnimationFrame(frame);
			observer.unobserve(element);
		};
	});
</script>

<canvas
	bind:this={element}
	style="display: block; inline-size: 100%; max-inline-size: 350px; clip-path: circle();"
	width="350"
	height="350"
/>
