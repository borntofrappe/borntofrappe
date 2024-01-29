<script>
	import { onMount } from 'svelte';
	import { Anchor, Cylinder, Ellipse, Shape, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const colors = {
			center: 'hsl(13 79% 75%)',
			base: ['hsl(3 76% 74%)', 'hsl(4 78% 73%)'],
			top: 'hsl(14 84% 85%)',
			tent: ['hsl(18 38% 95%)', 'hsl(14 84% 85%)'],
			horses: [
				['hsl(4 57% 89%)', 'hsl(338 70% 82%)'],
				['hsl(35 92% 76%)', 'hsl(48 89% 79%)']
			]
		};

		const strokes = {
			center: 1,
			base: 1,
			top: 6,
			stripe: 0,
			arc: 1,
			pole: 1,
			horse: 1
		};

		const heights = {
			center: 40,
			base: 4,
			tent: 20
		};

		const diameters = {
			center: 6,
			base: [90, 95],
			tent: 90
		};

		const copies = {
			stripes: 20,
			horses: 8
		};

		const offset = 6;

		const root = new Anchor();

		const carousel = new Anchor({
			addTo: root
		});

		const horses = new Anchor({
			addTo: carousel
		});

		new Shape({
			addTo: root,
			color: colors.top,
			fill: true,
			stroke: strokes.top,
			translate: {
				y: (heights.center / 2 + heights.tent + strokes.top / 2) * -1
			}
		});

		const base = new Ellipse({
			addTo: root,
			color: colors.base[0],
			stroke: strokes.base,
			fill: true,
			diameter: diameters.base[0],
			translate: {
				y: heights.center / 2 + (strokes.base + strokes.center) / 2
			},
			rotate: {
				x: TAU / 4
			}
		});

		new Ellipse({
			addTo: base,
			color: colors.base[1],
			stroke: strokes.base,
			fill: true,
			diameter: diameters.base[1],
			translate: {
				z: strokes.base * -1
			}
		});

		new Shape({
			addTo: base,
			color: colors.base[1],
			stroke: strokes.base,
			fill: true,
			path: [
				{ x: (diameters.base[1] / 2) * -1, y: 0, z: 0 },
				{
					arc: [
						{ x: (diameters.base[1] / 2) * -1, y: diameters.base[1] / 2, z: 0 },
						{ x: 0, y: diameters.base[1] / 2, z: 0 }
					]
				},
				{
					arc: [
						{ x: diameters.base[1] / 2, y: diameters.base[1] / 2, z: 0 },
						{ x: diameters.base[1] / 2, y: 0, z: 0 }
					]
				},
				{ x: diameters.base[1] / 2, y: 0, z: heights.base * -1 },
				{
					arc: [
						{
							x: diameters.base[1] / 2,
							y: diameters.base[1] / 2,
							z: heights.base * -1
						},
						{ x: 0, y: diameters.base[1] / 2, z: heights.base * -1 }
					]
				},
				{
					arc: [
						{
							x: (diameters.base[1] / 2) * -1,
							y: diameters.base[1] / 2,
							z: heights.base * -1
						},
						{ x: (diameters.base[1] / 2) * -1, y: 0, z: heights.base * -1 }
					]
				}
			],
			translate: {
				z: strokes.base * -1
			}
		});

		const center = new Cylinder({
			addTo: carousel,
			color: colors.center,
			stroke: strokes.center,
			fill: true,
			diameter: diameters.center,
			length: heights.center,
			rotate: {
				x: TAU / 4
			}
		});

		const tent = new Anchor({
			addTo: center,
			translate: {
				z: heights.center / 2 + strokes.center / 2
			}
		});

		const a1 = TAU / copies.stripes;
		const a2 = a1 * 2;
		const am = (a1 + a2) / 2;
		const d = diameters.tent / 2;
		const x1 = Math.cos(a1) * d;
		const y1 = Math.sin(a1) * d;
		const x2 = Math.cos(a2) * d;
		const y2 = Math.sin(a2) * d;
		const xm = Math.cos(am) * d;
		const ym = Math.sin(am) * d;
		const gap = ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;

		const stripe = new Shape({
			color: colors.tent[0],
			stroke: strokes.stripe,
			fill: true,
			path: [
				{ x: 0, y: 0, z: heights.tent },
				{ x: x1, y: y1, z: 0 },
				{ x: x2, y: y2, z: 0 },
				{ x: 0, y: 0, z: heights.tent }
			]
		});

		const arc = new Shape({
			color: colors.tent[1],
			stroke: strokes.arc,
			fill: true,
			path: [
				{ x: x1, y: y1, z: 0 },
				{
					arc: [
						{ x: x1, y: y1, z: gap / 2 },
						{ x: xm, y: ym, z: gap / 2 }
					]
				},
				{
					arc: [
						{ x: x2, y: y2, z: gap / 2 },
						{ x: x2, y: y2, z: 0 }
					]
				}
			]
		});

		for (let i = 0; i < copies.stripes; i++) {
			const angle = a1 * i;

			const anchor = new Anchor({
				addTo: tent,
				rotate: {
					z: angle
				}
			});

			stripe.copy({
				addTo: anchor,
				color: i % 2 === 0 ? colors.tent[0] : colors.tent[1]
			});

			arc.copy({
				addTo: anchor,
				color: i % 2 === 0 ? colors.tent[1] : colors.tent[0]
			});
		}

		const body = new Shape({
			stroke: strokes.horse,
			fill: true,
			path: [
				{ z: 0, y: 0 },
				{ z: 4, y: 0 },
				{
					arc: [
						{ z: 6, y: 0 },
						{ z: 6, y: 2 }
					]
				},
				{ z: 6, y: 4 },
				{
					arc: [
						{ z: 7, y: 4 },
						{ z: 7, y: 6 }
					]
				},
				{ z: 5, y: 8 },
				{ z: 5.5, y: 8.5 },
				{ z: 4.5, y: 9 },
				{ z: 4.5, y: 8 },
				{ z: 6, y: 6.5 },
				{
					arc: [
						{ z: 6, y: 4 },
						{ z: 3, y: 4 }
					]
				},
				{ z: -2.5, y: 4 },
				{
					arc: [
						{ z: -4, y: 4 },
						{ z: -4, y: 5.5 }
					]
				},
				{ z: -5.5, y: 5.5 },
				{ z: -5.5, y: 7.5 },
				{ z: -5, y: 7.5 },
				{ z: -5, y: 8.5 },
				{
					arc: [
						{ z: -6, y: 8.5 },
						{ z: -6, y: 7.5 }
					]
				},
				{ z: -6, y: 5 },
				{ z: -4, y: 4 },
				{
					arc: [
						{ z: -4, y: 3 },
						{ z: -5, y: 3 }
					]
				},
				{ z: -5, y: -1.5 },
				{
					arc: [
						{ z: -6.5, y: -1.5 },
						{ z: -6.5, y: 0 }
					]
				},
				{ z: -6.5, y: 1 },
				{ z: -7.2, y: 1 },
				{ z: -7.2, y: -5 },
				{ z: -6.5, y: -5 },
				{
					arc: [
						{ z: -2, y: -5 },
						{ z: -2, y: 0 }
					]
				}
			]
		});

		const mane = new Shape({
			stroke: strokes.horse,
			fill: true,
			path: [
				{ z: -7.25, y: -5.75 },
				{ z: -5.75, y: -5.75 },
				{
					arc: [
						{ z: -2.75, y: -5.75 },
						{ z: -1.25, y: -0.75 }
					]
				},
				{ z: -0.75, y: -0.75 },
				{
					arc: [
						{ z: -0.75, y: -6.75 },
						{ z: -5.75, y: -6.75 }
					]
				},
				{ z: -7.25, y: -6.75 }
			]
		});

		const tail = new Shape({
			stroke: strokes.horse,
			fill: true,
			path: [
				{ z: 0, y: 0 },
				{
					arc: [
						{ z: 1, y: 0 },
						{ z: 1, y: 1 }
					]
				},
				{ z: 1, y: 1.5 },
				{ z: 1, y: 3.5 },
				{
					arc: [
						{ z: 0, y: 3.5 },
						{ z: 0, y: 2.5 }
					]
				}
			],
			translate: {
				z: 6.5,
				y: 0.5
			},
			rotate: {
				x: 0.5
			}
		});

		for (let i = 0; i < copies.horses; i++) {
			const angle = (TAU / copies.horses) * i;
			const x = diameters.base[0] / 2 - strokes.base;
			const y = Math.sin(angle) * offset * -1;

			const [c1, c2] = i % 2 === 0 ? colors.horses[0] : colors.horses[1];

			const anchor = new Anchor({
				addTo: horses,
				rotate: {
					y: angle
				}
			});

			const horse = new Anchor({
				addTo: anchor,
				translate: {
					x,
					y
				},
				scale: 1.2
			});

			body.copy({
				addTo: horse,
				color: c1
			});

			mane.copy({
				addTo: horse,
				color: c2
			});

			tail.copy({
				addTo: horse,
				color: c2
			});

			new Shape({
				addTo: anchor,
				color: c1,
				stroke: strokes.pole,
				path: [{ y: heights.center / 2 }, { y: (heights.center / 2) * -1 }],
				translate: {
					x
				}
			});
		}

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 4;

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

		root.translate.y = 7.5;
		root.rotate.x = -0.15;
		root.rotate.y = 0.65;
		base.rotate.z = root.rotate.y * -1;

		root.updateGraph();
		render();

		let frame = null;
		let ticker = 0;
		const cycle = 1200;

		const animate = () => {
			ticker = (ticker + 1) % cycle;
			const t = ticker / cycle;
			root.rotate.x = -0.15 + 0.05 * Math.sin(t * TAU);
			carousel.rotate.y = t * TAU * -1;
			for (let i = 0; i < horses.children.length; i++) {
				const angle = (TAU / horses.children.length) * i;
				horses.children[i].children[0].translate.y = Math.sin(t * TAU + angle) * offset * -1;
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

		const listener = (e) => {
			if (e.matches) {
				cancelAnimationFrame(frame);
				observer.unobserve(element);
			} else {
				observer.observe(element);
			}
		};

		const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

		if (!reducedMotion.matches) {
			observer.observe(element);
		}

		reducedMotion.addEventListener('change', listener);

		return () => {
			reducedMotion.removeEventListener('change', listener);
			cancelAnimationFrame(frame);
			observer.unobserve(element);
		};
	});
</script>

<canvas
	bind:this={element}
	style="display: block; inline-size: 100%; max-inline-size: 400px;"
	width="400"
	height="350"
/>
