<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const colors = {
			cookie: 'hsl(30 84% 74%)',
			shadow: 'hsl(30 84% 60%)',
			black: 'hsl(31 18% 23%)',
			white: 'hsl(4 79% 96%)',
			chocolate: 'hsl(8 39% 27%)',
			pumpkin: 'hsl(18 85% 59%)',
			sugar: 'hsl(340 37% 53%)'
		};

		const stroke = 1;
		const zOffset = 1.5;
		const depth = 1;
		const z = depth * -1;

		const root = new Anchor();

		const cookieBat = new Shape({
			addTo: root,
			color: colors.cookie,
			stroke,
			fill: true,
			path: [
				{ x: -0.75, y: -3.5 },
				{
					bezier: [
						{ x: -0.5, y: -3.75 },
						{ x: 0.5, y: -3.75 },
						{ x: 0.75, y: -3.5 }
					]
				},
				{
					bezier: [
						{ x: 1, y: -4 },
						{ x: 1.25, y: -4.75 },
						{ x: 1.5, y: -5 }
					]
				},
				{
					bezier: [
						{ x: 1.75, y: -4.75 },
						{ x: 2.25, y: -3 },
						{ x: 2.5, y: -2 }
					]
				},
				{
					bezier: [
						{ x: 2.5, y: -2.5 },
						{ x: 3.5, y: -3.75 },
						{ x: 3.75, y: -4 }
					]
				},
				{
					bezier: [
						{ x: 4.5, y: -4 },
						{ x: 7, y: -3 },
						{ x: 7, y: -2.5 }
					]
				},
				{
					bezier: [
						{ x: 6.5, y: -2 },
						{ x: 5.5, y: -2 },
						{ x: 4.75, y: -2 }
					]
				},
				{
					bezier: [
						{ x: 4.75, y: -2 },
						{ x: 5, y: -0.5 },
						{ x: 5, y: 0.25 }
					]
				},
				{
					bezier: [
						{ x: 4, y: 0.25 },
						{ x: 3, y: 0 },
						{ x: 2.5, y: -0.25 }
					]
				},
				{
					bezier: [
						{ x: 2, y: 1 },
						{ x: 1, y: 2.25 },
						{ x: 0, y: 2.75 }
					]
				},
				{
					bezier: [
						{ x: -1, y: 2.25 },
						{ x: -2, y: 1 },
						{ x: -2.5, y: -0.25 }
					]
				},
				{
					bezier: [
						{ x: -3, y: 0 },
						{ x: -4, y: 0.25 },
						{ x: -5, y: 0.25 }
					]
				},
				{
					bezier: [
						{ x: -5, y: -0.5 },
						{ x: -4.75, y: -2 },
						{ x: -4.75, y: -2 }
					]
				},
				{
					bezier: [
						{ x: -5.5, y: -2 },
						{ x: -6.5, y: -2 },
						{ x: -7, y: -2.5 }
					]
				},
				{
					bezier: [
						{ x: -7, y: -3 },
						{ x: -4.5, y: -4 },
						{ x: -3.75, y: -4 }
					]
				},
				{
					bezier: [
						{ x: -3.5, y: -3.75 },
						{ x: -2.5, y: -2.5 },
						{ x: -2.5, y: -2 }
					]
				},
				{
					bezier: [
						{ x: -2.25, y: -3 },
						{ x: -1.75, y: -4.75 },
						{ x: -1.5, y: -5 }
					]
				},
				{
					bezier: [
						{ x: -1.25, y: -4.75 },
						{ x: -1, y: -4 },
						{ x: -0.75, y: -3.5 }
					]
				}
			]
		});

		cookieBat.copy({
			addTo: cookieBat,
			stroke: 0,
			fill: true,
			color: colors.black,
			translate: {
				z: stroke / 2
			}
		});

		const eyeBat = new Shape({
			stroke: 0.7,
			color: colors.cookie
		});

		[-0.9, 0.9].forEach((x) => {
			eyeBat.copy({
				addTo: cookieBat,
				translate: {
					x,
					y: -2,
					z: zOffset
				}
			});
		});

		const cookieGhost = new Shape({
			addTo: root,
			color: colors.cookie,
			stroke,
			fill: true,
			path: [
				{ x: -3.5, y: -1 },
				{ x: -3.5, y: -1.5 },
				{
					arc: [
						{ x: -3.5, y: -5 },
						{ x: 0, y: -5 }
					]
				},
				{
					arc: [
						{ x: 3.5, y: -5 },
						{ x: 3.5, y: -1.5 }
					]
				},
				{ x: 3.5, y: -1 },
				{
					arc: [
						{ x: 4.5, y: -1 },
						{ x: 4.5, y: 0 }
					]
				},
				{
					arc: [
						{ x: 4.5, y: 1 },
						{ x: 3.5, y: 1 }
					]
				},
				{
					bezier: [
						{ x: 2.5, y: 1 },
						{ x: 1, y: 3 },
						{ x: 1, y: 5 }
					]
				},
				{
					bezier: [
						{ x: 0, y: 4 },
						{ x: -3.5, y: 4 },
						{ x: -3.5, y: 1 }
					]
				},
				{
					arc: [
						{ x: -4.5, y: 1 },
						{ x: -4.5, y: 0 }
					]
				},
				{
					arc: [
						{ x: -4.5, y: -1 },
						{ x: -3.5, y: -1 }
					]
				}
			]
		});

		cookieGhost.copy({
			addTo: cookieGhost,
			color: colors.white,
			stroke: 0,
			fill: true,
			translate: {
				z: stroke / 2
			}
		});

		const eyeGhost = new Shape({
			color: colors.black,
			stroke: 0.5,
			fill: true,
			path: [
				{ x: 0.2, y: -0.75 },
				{
					bezier: [
						{ x: 0.25, y: -0.75 },
						{ x: 0.5, y: 0.3 },
						{ x: 0.5, y: 0.5 }
					]
				},
				{
					arc: [
						{ x: 0.5, y: 0.5 },
						{ x: 0.25, y: 0.5 }
					]
				},
				{
					arc: [
						{ x: 0, y: 0.5 },
						{ x: 0, y: 0.25 }
					]
				},
				{
					bezier: [
						{ x: 0, y: 0.2 },
						{ x: 0, y: -0.2 },
						{ x: 0.2, y: -0.75 }
					]
				}
			]
		});

		[-1, 1].forEach((direction) => {
			eyeGhost.copy({
				addTo: cookieGhost,
				translate: {
					x: direction,
					y: -3,
					z: zOffset
				},
				scale: {
					x: direction
				}
			});
		});

		new Shape({
			addTo: cookieGhost,
			color: colors.sugar,
			stroke: 1,
			closed: false,
			path: [
				{ x: -1, y: 0 },
				{
					bezier: [
						{ x: -0.6, y: 0.75 },
						{ x: 0.6, y: 0.75 },
						{ x: 1, y: 0 }
					]
				}
			],
			translate: {
				z: zOffset
			}
		});

		const cookiePumpkin = new Shape({
			addTo: root,
			color: colors.cookie,
			stroke,
			path: [
				{ x: -1, y: -4 },
				{
					arc: [
						{ x: -1, y: -5 },
						{ x: 0, y: -5 }
					]
				},
				{
					arc: [
						{ x: 1, y: -5 },
						{ x: 1, y: -4 }
					]
				},
				{
					bezier: [
						{ x: 3, y: -4.5 },
						{ x: 5, y: -3 },
						{ x: 5, y: -1 }
					]
				},
				{
					bezier: [
						{ x: 5, y: 2 },
						{ x: 1, y: 2 },
						{ x: 0, y: 2 }
					]
				},
				{
					bezier: [
						{ x: -1, y: 2 },
						{ x: -5, y: 2 },
						{ x: -5, y: -1 }
					]
				},
				{
					bezier: [
						{ x: -5, y: -3 },
						{ x: -3, y: -4.5 },
						{ x: -1, y: -4 }
					]
				}
			]
		});

		cookiePumpkin.copy({
			addTo: cookiePumpkin,
			color: colors.pumpkin,
			stroke: 0,
			fill: true,
			translate: {
				z: stroke / 2
			}
		});

		const eyePumpkin = new Shape({
			color: colors.chocolate,
			stroke: 0.5,
			fill: true,
			path: [
				{ x: 0, y: -0.5 },
				{
					bezier: [
						{ x: 0.3, y: -0.4 },
						{ x: 0.7, y: 0 },
						{ x: 0.8, y: 0.5 }
					]
				},
				{
					bezier: [
						{ x: 0.6, y: 0.7 },
						{ x: -0.6, y: 0.7 },
						{ x: -0.8, y: 0.5 }
					]
				},
				{
					bezier: [
						{ x: -0.7, y: 0 },
						{ x: -0.3, y: -0.4 },
						{ x: 0, y: -0.5 }
					]
				}
			]
		});

		[-1, 1].forEach((direction) => {
			eyePumpkin.copy({
				addTo: cookiePumpkin,
				translate: {
					x: 1.5 * direction,
					y: -2.25,
					z: zOffset
				},
				rotate: { z: 5 * direction },
				scale: 0.8
			});
		});

		new Shape({
			addTo: cookiePumpkin,
			color: colors.chocolate,
			stroke: 1,
			closed: false,
			path: [
				{ x: -2, y: 0 },
				{
					bezier: [
						{ x: -1.8, y: 0.4 },
						{ x: -1, y: 0.4 },
						{ x: -0.8, y: 0 }
					]
				},
				{
					bezier: [
						{ x: -0.5, y: -0.5 },
						{ x: 0.5, y: -0.5 },
						{ x: 0.8, y: 0 }
					]
				},
				{
					bezier: [
						{ x: 1, y: 0.4 },
						{ x: 1.8, y: 0.4 },
						{ x: 2, y: 0 }
					]
				}
			],
			translate: {
				z: zOffset
			}
		});

		for (const shape of [cookieBat, cookieGhost, cookiePumpkin]) {
			const { fill, stroke, path } = shape;

			for (let i = 0; i < path.length; i++) {
				const p1 = path[i];
				const p2 = path[(i + 1) % path.length];

				const p1Arc = Object.hasOwn(p1, 'arc');
				const p2Arc = Object.hasOwn(p2, 'arc');
				const p1Bezier = Object.hasOwn(p1, 'bezier');
				const p2Bezier = Object.hasOwn(p2, 'bezier');

				let pathShadow = [];

				if (p2Arc) {
					const { x: x1, y: y1 } = p1Bezier ? p1.bezier[2] : p1Arc ? p1.arc[1] : p1;
					const { x: xc, y: yc } = p2.arc[0];
					const { x: x2, y: y2 } = p2.arc[1];

					pathShadow = [
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
					];
				} else if (p2Bezier) {
					const { x: x1, y: y1 } = p1Bezier ? p1.bezier[2] : p1Arc ? p1.arc[1] : p1;
					const { x: xc1, y: yc1 } = p2.bezier[0];
					const { x: xc2, y: yc2 } = p2.bezier[1];
					const { x: x2, y: y2 } = p2.bezier[2];

					pathShadow = [
						{ x: x1, y: y1, z: 0 },
						{ x: x1, y: y1, z },
						{
							bezier: [
								{ x: xc1, y: yc1, z },
								{ x: xc2, y: yc2, z },
								{ x: x2, y: y2, z }
							]
						},
						{ x: x2, y: y2, z: 0 },
						{
							bezier: [
								{ x: xc2, y: yc2, z: 0 },
								{ x: xc1, y: yc1, z: 0 },
								{ x: x1, y: y1, z: 0 }
							]
						}
					];
				} else {
					const { x: x1, y: y1 } = p1Bezier ? p1.bezier[2] : p1Arc ? p1.arc[1] : p1;
					const { x: x2, y: y2 } = p2;

					pathShadow = [
						{ x: x1, y: y1, z: 0 },
						{ x: x1, y: y1, z },
						{ x: x2, y: y2, z },
						{ x: x2, y: y2, z: 0 }
					];
				}

				new Shape({
					addTo: shape,
					color: colors.shadow,
					stroke,
					fill,
					path: pathShadow,
					translate: {
						z: stroke * 2 * -1
					}
				});
			}
		}

		cookieBat.translate.x = -6.6;
		cookieBat.translate.y = -8;
		cookieGhost.translate.x = 9;
		cookieGhost.translate.y = 8;

		const cookies = [cookieBat, cookiePumpkin, cookieGhost];

		root.rotate.x = -0.4;
		root.rotate.y = 0.4;

		for (const cookie of cookies) {
			cookie.rotate.x = root.rotate.x * -1;
		}

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 13.5;

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

		const animate = () => {
			root.rotate.x = (root.rotate.x + 0.015) % TAU;

			for (const cookie of cookies) {
				cookie.rotate.x = root.rotate.x * -1;
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

<canvas bind:this={element} style="display: block;" width="400" height="400" />
