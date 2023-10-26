<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, TAU, Cylinder, Ellipse } from 'zdog';

	let element = null;

	onMount(() => {
		const colors = {
			sky: {
				main: 'hsl(272 51% 22%)',
				shadow: 'hsl(273 60% 16%)'
			},
			sphere: 'hsl(47 94% 59%)',
			star: {
				main: 'hsl(45 95% 60%)',
				shadow: 'hsl(45 96% 35%)'
			},
			moon: {
				main: 'hsl(40 93% 63%)',
				shadow: 'hsl(40 95% 44%)'
			},
			detail: 'hsl(108 5% 19%)',
			accent: 'hsl(20 88% 58%)'
		};

		const zOffset = 5;
		const zOffsets = {
			spheres: 10,
			stars: 20,
			moon: 10
		};

		const copies = {
			spheres: [
				{ x: -15, y: -25 },
				{ x: -20, y: -15 },
				{ x: -25, y: -20 },
				{ x: -20, y: 20 },
				{ x: -2.5, y: 32.5 },
				{ x: 5, y: 20 },
				{ x: 15, y: 30 },
				{ x: 30, y: 10 },
				{ x: 25, y: 5 },
				{ x: 30, y: -5 }
			],
			stars: [
				{ x: -3, y: -30, angle: -5 },
				{ x: 18, y: -20, angle: 25 },
				{ x: -26, y: 0, angle: -25 },
				{ x: -9, y: 22, angle: -15 },
				{ x: 20, y: 18, angle: 15 }
			]
		};

		const root = new Anchor();

		const sky = new Cylinder({
			addTo: root,
			stroke: 0,
			color: colors.sky.shadow,
			frontFace: colors.sky.main,
			diameter: 84,
			length: 16
		});

		sky.translate.z = (sky.length / 2) * -1;

		for (const { x, y } of copies.spheres) {
			new Shape({
				addTo: sky,
				color: colors.sphere,
				stroke: 2,
				translate: {
					x,
					y,
					z: zOffsets.spheres + Math.floor(Math.random() * zOffset)
				}
			});
		}

		const star = new Shape({
			color: colors.star.main,
			fill: true,
			path: [
				{ x: 9.797174393178826e-16, y: 16 },
				{
					bezier: [
						{ x: -17.63355756877419, y: 24.270509831248425 },
						{ x: -17.63355756877419, y: 24.270509831248425 },
						{ x: -15.216904260722456, y: 4.94427190999916 }
					]
				},
				{
					bezier: [
						{ x: -28.531695488854606, y: -9.270509831248432 },
						{ x: -28.531695488854606, y: -9.270509831248432 },
						{ x: -9.404564036679572, y: -12.944271909999157 }
					]
				},
				{
					bezier: [
						{ x: -5.510910596163089e-15, y: -30 },
						{ x: -5.510910596163089e-15, y: -30 },
						{ x: 9.404564036679567, y: -12.944271909999161 }
					]
				},
				{
					bezier: [
						{ x: 28.531695488854606, y: -9.27050983124843 },
						{ x: 28.531695488854606, y: -9.27050983124843 },
						{ x: 15.216904260722458, y: 4.944271909999155 }
					]
				},
				{
					bezier: [
						{ x: 17.633557568774222, y: 24.270509831248404 },
						{ x: 17.633557568774222, y: 24.270509831248404 },
						{ x: 9.797174393178826e-16, y: 16 }
					]
				}
			],
			scale: 0.2
		});

		const eye = new Shape({
			color: colors.detail,
			stroke: 0.5,
			closed: false,
			path: [
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
			]
		});

		[-60, -25, 25, 60].forEach((degrees) => {
			new Shape({
				addTo: eye,
				color: eye.color,
				stroke: eye.stroke * 0.7,
				path: [{ y: 4 }, { y: 5 }],
				rotate: {
					z: (degrees / 180) * Math.PI
				}
			});
		});

		[-8, 8].forEach((xOffset) => {
			eye.copyGraph({
				addTo: star,
				translate: {
					x: xOffset,
					y: -4.5,
					z: zOffset
				},
				scale: {
					y: 0.9
				}
			});
		});

		new Shape({
			addTo: star,
			color: colors.detail,
			stroke: 0.5,
			closed: false,
			path: [
				{ x: -2.5, y: 0 },
				{
					arc: [
						{ x: -2.5, y: 2.5 },
						{ x: 0, y: 2.5 }
					]
				},
				{
					arc: [
						{ x: 2.5, y: 2.5 },
						{ x: 2.5, y: 0 }
					]
				}
			],
			translate: {
				y: 8,
				z: zOffset
			}
		});

		const cheeck = new Ellipse({
			color: colors.accent,
			fill: true,
			diameter: 2,
			scale: {
				y: 0.8
			}
		});

		[-9, 9].forEach((offset) => {
			cheeck.copy({
				addTo: star,
				translate: {
					x: offset,
					y: 4.5,
					z: zOffset
				}
			});
		});

		const stars = new Anchor({
			addTo: sky,
			translate: {
				z: zOffsets.stars
			}
		});

		for (const { x, y, angle } of copies.stars) {
			star.copyGraph({
				addTo: stars,
				translate: {
					x,
					y
				},
				rotate: {
					z: (angle / 180) * Math.PI
				}
			});
		}

		const moon = new Shape({
			addTo: sky,
			color: colors.moon.main,
			stroke: 2,
			fill: true,
			path: [
				{ x: 12, y: -8 },
				{
					arc: [
						{ x: 8, y: -13.5 },
						{ x: 0, y: -13.5 }
					]
				},
				{
					arc: [
						{ x: -12.5, y: -13.5 },
						{ x: -12.5, y: 0 }
					]
				},
				{
					arc: [
						{ x: -12.5, y: 13.5 },
						{ x: 0, y: 13.5 }
					]
				},
				{
					arc: [
						{ x: 8, y: 13.5 },
						{ x: 12, y: 8 }
					]
				},
				{
					arc: [
						{ x: 4, y: 8 },
						{ x: 3, y: 2 }
					]
				},
				{
					arc: [
						{ x: 2.25, y: 0 },
						{ x: 3, y: -2 }
					]
				},
				{
					arc: [
						{ x: 4, y: -8 },
						{ x: 12, y: -8 }
					]
				}
			],
			translate: {
				x: 0.25,
				z: zOffsets.moon
			},
			rotate: {
				z: -0.5
			}
		});

		const nose = new Shape({
			addTo: moon,
			color: moon.color,
			stroke: moon.stroke,
			fill: moon.fill,
			path: [
				{ x: 0, y: 0 },
				{ x: 1.5, y: 2 },
				{ x: 0, y: 2.5 }
			],
			translate: {
				x: 3.5,
				y: -2
			}
		});

		new Ellipse({
			addTo: moon,
			color: colors.accent,
			fill: true,
			diameter: 4,
			translate: {
				x: -4,
				z: zOffset
			},
			scale: {
				y: 0.7
			},
			rotate: {
				z: 0.2
			}
		});

		const eyelash = new Shape({
			addTo: moon,
			color: colors.detail,
			stroke: 0.7,
			closed: false,
			path: [
				{ x: -2.6, y: 0 },
				{
					arc: [
						{ x: -2.6, y: 2.6 },
						{ x: 0, y: 2.6 }
					]
				},
				{
					arc: [
						{ x: 2.6, y: 2.6 },
						{ x: 2.6, y: 0 }
					]
				}
			],
			translate: {
				x: -0.5,
				y: -6.5,
				z: zOffset
			},
			rotate: {
				z: moon.rotate.z * -1
			}
		});

		[-60, -30, 0, 30, 60].forEach((degrees) => {
			new Shape({
				addTo: eyelash,
				color: eyelash.color,
				stroke: eyelash.stroke * 0.7,
				path: [{ y: 2.6 }, { y: 3.6 }],
				rotate: {
					z: (degrees / 180) * Math.PI
				}
			});
		});

		new Shape({
			addTo: moon,
			color: colors.detail,
			stroke: 0.7,
			closed: false,
			path: [
				{ x: -2, y: 0 },
				{
					arc: [
						{ x: -1.5, y: 1.4 },
						{ x: 0, y: 1.4 }
					]
				},
				{
					arc: [
						{ x: 1.5, y: 1.4 },
						{ x: 2, y: 0 }
					]
				}
			],
			translate: {
				x: -0.5,
				y: 4.5,
				z: zOffset
			}
		});

		const depthMoon = zOffsets.moon;
		const zMoon = depthMoon * -1;

		const { stroke, fill, path } = moon;

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
					addTo: moon,
					color: colors.moon.shadow,
					stroke,
					fill,
					path: [
						{ x: x1, y: y1, z: 0 },
						{ x: x1, y: y1, z: zMoon },
						{
							arc: [
								{ x: xc, y: yc, z: zMoon },
								{ x: x2, y: y2, z: zMoon }
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
					addTo: moon,
					color: colors.moon.shadow,
					stroke,
					fill,
					path: [
						{ x: x1, y: y1, z: 0 },
						{ x: x1, y: y1, z: zMoon },
						{ x: x2, y: y2, z: zMoon },
						{ x: x2, y: y2, z: 0 }
					]
				});
			}
		}

		for (let i = 0; i < nose.path.length; i++) {
			const { x: x1, y: y1 } = nose.path[i];
			const { x: x2, y: y2 } = nose.path[(i + 1) % nose.path.length];

			new Shape({
				addTo: nose,
				color: colors.moon.shadow,
				stroke,
				fill,
				path: [
					{ x: x1, y: y1, z: 0 },
					{ x: x1, y: y1, z: zMoon },
					{ x: x2, y: y2, z: zMoon },
					{ x: x2, y: y2, z: 0 }
				]
			});
		}

		const depthStars = zOffsets.stars;
		const zStars = depthStars * -1;

		for (const star of stars.children) {
			const { fill, path } = star;

			for (let i = 0; i < path.length; i++) {
				const p1 = path[i];
				const p2 = path[(i + 1) % path.length];

				const p1Bezier = Object.hasOwn(p1, 'bezier');
				const p2Bezier = Object.hasOwn(p2, 'bezier');

				if (p2Bezier) {
					const { x: x1, y: y1 } = p1Bezier ? p1.bezier[2] : p1;
					const { x: xc1, y: yc1 } = p2.bezier[0];
					const { x: xc2, y: yc2 } = p2.bezier[1];
					const { x: x2, y: y2 } = p2.bezier[2];

					new Shape({
						addTo: star,
						color: colors.star.shadow,
						fill,
						path: [
							{ x: x1, y: y1, z: 0 },
							{ x: x1, y: y1, z: zStars },
							{
								bezier: [
									{ x: xc1, y: yc1, z: zStars },
									{ x: xc2, y: yc2, z: zStars },
									{ x: x2, y: y2, z: zStars }
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
						]
					});
				} else {
					const { x: x1, y: y1 } = p1Bezier ? p1.bezier[2] : p1;
					const { x: x2, y: y2 } = p2;

					new Shape({
						addTo: star,
						color: colors.star.shadow,
						fill,
						path: [
							{ x: x1, y: y1, z: 0 },
							{ x: x1, y: y1, z: zStars },
							{ x: x2, y: y2, z: zStars },
							{ x: x2, y: y2, z: 0 }
						]
					});
				}
			}
		}

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 4.5;

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

		const angle = 1;
		const w = 0.2;
		root.rotate.x = Math.cos(angle) * w;
		root.rotate.y = Math.sin(angle) * w;

		root.updateGraph();
		render();

		let frame = null;
		let x = angle;

		const animate = () => {
			x = (x + 0.02) % TAU;
			root.rotate.x = Math.cos(x) * w;
			root.rotate.y = Math.sin(x) * w;

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
