<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, Ellipse, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const colors = [
			'hsl(39 90% 84%)',
			'hsl(39 87% 73%)',
			'hsl(36 66% 71%)',
			'hsl(38 69% 57%)',
			'hsl(34 46% 42%)'
		];

		const root = new Anchor({
			rotate: {
				x: -0.15,
				y: -0.3
			}
		});

		const base = new Anchor({
			addTo: root,
			translate: {
				y: 25
			}
		});

		new Ellipse({
			addTo: base,
			color: colors[2],
			diameter: 90,
			stroke: 5,
			fill: true,
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		const spool = new Anchor({
			addTo: base,
			translate: {
				x: -30,
				y: -4
			},
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		new Shape({
			addTo: spool,
			color: colors[4],
			stroke: 4,
			translate: {
				x: -12,
				y: -5,
				z: -1
			}
		});

		new Shape({
			addTo: spool,
			color: colors[3],
			stroke: 2,
			closed: false,
			path: [
				{ x: 0, y: 0 },
				{
					arc: [
						{ x: -6, y: 0 },
						{ x: -6, y: 6 }
					]
				},
				{
					arc: [
						{ x: -6, y: 10 },
						{ x: -10, y: 10 }
					]
				},
				{
					arc: [
						{ x: -14, y: 10 },
						{ x: -14, y: 6 }
					]
				}
			],
			translate: {
				x: 0,
				y: -8,
				z: -2
			}
		});

		const discs = 6;
		const disc = new Ellipse({
			addTo: spool,
			color: colors[4],
			diameter: 12,
			stroke: 3,
			fill: true
		});

		for (let i = 1; i <= discs; i++) {
			disc.copy({
				color: i % 2 === 0 ? colors[1] : colors[3],
				translate: {
					z: i * 2 * -1
				},
				scale: 0.8
			});
		}

		disc.copy({
			translate: {
				z: (discs + 1) * 2 * -1
			}
		});

		const yarn = new Anchor({
			addTo: base,
			translate: {
				x: -30,
				y: -12,
				z: 40
			},
			rotate: {
				x: (TAU / 4) * -1,
				y: 0.5
			}
		});

		new Shape({
			addTo: yarn,
			color: colors[4],
			stroke: 18
		});

		const threads = [0.95, 0.85];
		const thread = new Ellipse({
			addTo: yarn,
			color: colors[3],
			diameter: 20,
			quarters: 2,
			stroke: 2,
			rotate: {
				z: (TAU / 4) * -1
			}
		});

		for (let i = 0; i < threads.length; i++) {
			const color = i % 2 === 0 ? colors[1] : colors[3];
			const z = (i + 1) * 2.1;
			const scale = threads[i];

			thread.copy({
				color,
				translate: {
					z: z * -1
				},
				scale
			});

			thread.copy({
				color,
				translate: {
					z
				},
				scale
			});
		}

		const cat = new Shape({
			addTo: root,
			color: colors[1],
			stroke: 12,
			fill: true,
			path: [
				{ x: -11, y: 0 },
				{
					arc: [
						{ x: -11, y: -10 },
						{ x: 0, y: -10 }
					]
				},
				{
					arc: [
						{ x: 11, y: -10 },
						{ x: 11, y: 0 }
					]
				},
				{
					arc: [
						{ x: 11, y: 7 },
						{ x: 0, y: 7 }
					]
				},
				{
					arc: [
						{ x: -11, y: 7 },
						{ x: -11, y: 0 }
					]
				}
			],
			translate: {
				y: -2,
				z: 5
			}
		});

		const body = new Shape({
			addTo: cat,
			color: colors[3],
			stroke: 10,
			fill: true,
			path: [
				{ x: 0, y: 0, z: 0 },
				{
					arc: [
						{ x: -7.5, y: 0 },
						{ x: -7.5, y: -7.5 }
					]
				},
				{
					arc: [
						{ x: -7.5, y: -15 },
						{ x: 0, y: -15 }
					]
				},
				{ x: 12.5, y: -15 },
				{
					arc: [
						{ x: 20, y: -15 },
						{ x: 20, y: -7.5 }
					]
				},
				{
					arc: [
						{ x: 20, y: 0 },
						{ x: 12.5, y: 0 }
					]
				}
			],
			translate: {
				x: 0,
				y: 20,
				z: -1
			}
		});

		new Shape({
			addTo: body,
			color: colors[3],
			stroke: 6,
			closed: false,
			path: [
				{ x: 0, y: 0, z: 0 },
				{
					arc: [
						{ x: 20, y: 0, z: 0 },
						{ x: 20, y: 0, z: 20 }
					]
				},
				{
					arc: [
						{ x: 20, y: 0, z: 30 },
						{ x: 10, y: 0, z: 30 }
					]
				},
				{
					arc: [
						{ x: 0, y: 0, z: 30 },
						{ x: 0, y: 0, z: 40 }
					]
				}
			],
			translate: {
				x: 14,
				y: 2,
				z: -1
			}
		});

		const paws = new Anchor({
			addTo: body,
			translate: {
				z: 5,
				y: 1
			}
		});

		const paw = new Shape({
			addTo: paws,
			color: colors[1],
			stroke: 8,
			fill: true,
			path: [
				{ x: 0, y: 0, z: 0 },
				{ x: 2, y: 0, z: 0 }
			]
		});

		paw.copy({
			translate: {
				x: -10,
				z: -3
			}
		});

		const ear = new Anchor();

		const lobe = new Shape({
			addTo: ear,
			color: colors[1],
			stroke: 4,
			fill: true,
			path: [
				{ x: -4, y: 0 },
				{
					bezier: [
						{ x: -3, y: -2 },
						{ x: -2, y: -5 },
						{ x: 0, y: -5 }
					]
				},
				{
					bezier: [
						{ x: 2, y: -5 },
						{ x: 3, y: -2 },
						{ x: 4, y: 0 }
					]
				}
			]
		});

		lobe.copy({
			color: colors[0],
			stroke: 0
		});

		ear.copyGraph({
			addTo: cat,
			translate: {
				x: 11,
				y: -11
			},
			rotate: {
				z: 0.7
			}
		});

		ear.copyGraph({
			addTo: cat,
			translate: {
				x: -11,
				y: -11
			},

			rotate: {
				z: -0.7
			}
		});

		const face = new Anchor({
			addTo: cat,
			translate: {
				z: 6
			}
		});

		const mark = new Shape({
			addTo: face,
			color: colors[4],
			stroke: 3,
			path: [
				{ x: 0, y: -8, z: 0 },
				{
					arc: [
						{ x: 0, y: -14, z: 0 },
						{ x: 0, y: -14, z: -6 }
					]
				}
			]
		});

		mark.copy({
			stroke: 2.5,
			translate: {
				x: 4.5,
				y: -1.5
			},
			scale: 0.9
		});

		mark.copy({
			stroke: 2.5,
			translate: {
				x: -4.5,
				y: -1.5
			},
			scale: 0.9
		});

		const eye = new Shape({
			color: colors[4],
			stroke: 1.5,
			closed: false,
			path: [
				{ x: -1.5, y: 0 },
				{
					arc: [
						{ x: -1.5, y: 0.75 },
						{ x: 0, y: 0.75 }
					]
				},
				{
					arc: [
						{ x: 1.5, y: 0.75 },
						{ x: 1.5, y: 0 }
					]
				}
			]
		});

		eye.copy({
			addTo: face,
			translate: {
				x: 4.5,
				x: -4.5,
				y: 1
			}
		});

		eye.copy({
			addTo: face,
			translate: {
				x: 4.5,
				y: 1
			}
		});

		const nose = new Shape({
			addTo: face,
			color: colors[0],
			stroke: 2.5,
			path: [{ x: -0.4 }, { x: 0.4 }],
			translate: {
				y: 4
			}
		});

		new Shape({
			addTo: nose,
			color: colors[4],
			stroke: 1,
			closed: false,
			path: [
				{ x: 2, y: 2 },
				{
					arc: [
						{ x: 0, y: 2 },
						{ x: 0, y: 0.5 }
					]
				},
				{ x: 0, y: 0 },
				{ x: 0, y: 0.5 },
				{
					arc: [
						{ x: 0, y: 2 },
						{ x: -2, y: 2 }
					]
				}
			],
			translate: {
				y: 2
			}
		});

		const cheeck = new Anchor();

		new Shape({
			addTo: cheeck,
			color: colors[0],
			stroke: 2.5,
			path: [{ y: -0.3 }, { y: 0.3 }]
		});

		const whisker = new Shape({
			color: colors[4],
			stroke: 1.25,
			closed: false,
			path: [
				{ x: 0, y: 0 },
				{ x: 7, y: 1 }
			]
		});

		whisker.copy({
			addTo: cheeck,
			translate: {
				x: 3,
				y: 1
			}
		});

		whisker.copy({
			addTo: cheeck,
			translate: {
				x: 3,
				y: -1
			},
			scale: { y: -1 }
		});

		cheeck.copyGraph({
			addTo: face,
			translate: {
				x: 9,
				y: 4.5
			}
		});

		cheeck.copyGraph({
			addTo: face,
			translate: {
				x: -9,
				y: 5
			},
			scale: {
				x: -1
			}
		});

		const zCenter = new Anchor({
			addTo: face,
			translate: {
				x: -27.5,
				y: -22.5
			}
		});

		const zOut = new Anchor({
			addTo: zCenter,
			scale: 1,
			translate: {
				x: -15,
				y: -10
			}
		});

		const zIn = new Anchor({
			addTo: zCenter,
			scale: 0,
			translate: {
				x: 17.5,
				y: 12.5
			}
		});

		const z = new Shape({
			color: colors[1],
			stroke: 4,
			closed: false,
			path: [
				{ x: -3, y: -4 },
				{ x: 3, y: -4 },
				{ x: -3, y: 4 },
				{ x: 3, y: 4 }
			]
		});

		z.copy({
			addTo: zOut,
			translate: {
				x: zOut.translate.x * -1,
				y: zOut.translate.y * -1
			}
		});

		z.copy({
			addTo: zIn,
			translate: {
				x: zIn.translate.x * -1,
				y: zIn.translate.y * -1
			}
		});

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

		root.updateGraph();
		render();

		let frame = null;
		let scale = 1;

		const animate = () => {
			if (scale === 0) scale = 1;

			scale = Math.max(0, scale - 0.01);

			zOut.scale = scale;
			zIn.scale = 1 - scale;

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
	height="300"
/>
