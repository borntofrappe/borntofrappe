<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { backOut as easing } from 'svelte/easing';
	import { Illustration, Anchor, Shape, Rect, Cone, Ellipse, Hemisphere, TAU } from 'zdog';

	let element = null;
	let width = 0;
	let height = 0;

	let illustration = null;
	let centered = true;

	const duration = 500;
	const translate = tweened(
		{
			x: 0,
			y: 0
		},
		{
			easing,
			duration
		}
	);

	onMount(() => {
		width = element.width;
		height = element.height;

		if (centered === false) {
			translate.set(
				{
					x: -width / 2,
					y: -height / 2
				},
				{ duration: 0 }
			);
		}

		const extra = 36;
		const background = {
			colors: [
				'#008cb9',
				'#008fbe',
				'#0093c2',
				'#0096c6',
				'#0099ca',
				'#009cce',
				'#00a0d3',
				'#00a3d7',
				'#00a6db',
				'#00aadf',
				'#00ade4',
				'#00b0e8'
			],
			width: 600 + extra,
			height: 450 + extra
		};

		const colorHeight = background.height / background.colors.length;
		background.translate = {
			x: background.width / 2 - extra / 2,
			y: colorHeight / 2 - extra / 2
		};

		background.copies = background.colors.map((color, i) => {
			const y = i * colorHeight;
			const width = background.width;
			const height = colorHeight;

			return {
				color,
				y,
				width,
				height
			};
		});

		const scene = {
			rotate: {
				x: 0.5,
				y: 0.25
			},
			clouds: {
				color: '#f8f7e8',
				circles: [
					{ x: 0, y: -2, r: 22 },
					{ x: 8, y: -6, r: 20 },
					{ x: -8, y: -10, r: 22 },
					{ x: 18, y: 0, r: 18 },
					{ x: -18, y: 0, r: 18 }
				],
				copies: [
					{ x: 80, y: 140 },
					{ x: 140, y: 240 },
					{ x: 190, y: 60 },
					{ x: 320, y: 100 },
					{ x: 440, y: 210 },
					{ x: 530, y: 250 }
				]
			},
			sun: {
				color: '#fdc64f',
				r: 30,
				x: 300,
				y: 225,
				rays: {
					color: '#f7c756',
					r: 6,
					copies: Array(10)
						.fill()
						.map((_, i, { length }) => {
							const angle = ((Math.PI * 2) / length) * i + Math.PI / 2;
							const x = Math.cos(angle) * 50;
							const y = Math.sin(angle) * 50;

							return { x, y };
						})
				}
			},
			birds: {
				color: '#1f6a96',
				copies: [
					{ x: 235, y: 330, z: 5, scale: 0.7 },
					{ x: 255, y: 320, z: -5, scale: 0.8 },
					{ x: 260, y: 350, z: 5, scale: 0.9 },
					{ x: 290, y: 340, z: -5, scale: 1 },
					{ x: 430, y: 310, z: 5, scale: 0.8 },
					{ x: 440, y: 280, z: -5, scale: 0.9 },
					{ x: 470, y: 300, z: 5, scale: 1 }
				]
			},
			mountains: {
				translate: {
					x: 350,
					y: 480
				},
				height: 150,
				r: 70,
				copies: [
					{ color: '#3f4b44', x: -70, y: 40, z: -20 },
					{ color: '#2e503e', x: -110, y: 50, z: -40 },
					{ color: '#2e6148', x: 60, y: 20, z: -40 },
					{ color: '#1a6444', x: 100, y: 40, z: -20 },
					{ color: '#1f744f', x: 0, y: 0, z: 0 }
				]
			},
			balloon: {
				colors: ['#fe79ae', '#f8f7e8'],
				translate: {
					x: 530,
					y: 350
				},
				rotate: {
					x: -0.15,
					y: 0.5,
					z: -0.1
				}
			}
		};

		illustration = new Illustration({
			element,
			translate: $translate
		});

		const origin = new Anchor({
			addTo: illustration,
			translate: {
				x: -width / 2,
				y: -height / 2
			}
		});

		const anchorBackground = new Anchor({
			addTo: origin,
			translate: {
				x: background.translate.x,
				y: background.translate.y,
				z: -200
			}
		});

		const anchorScene = new Anchor({
			addTo: origin
		});

		for (const { color, y, width, height } of background.copies) {
			new Rect({
				addTo: anchorBackground,
				color,
				fill: true,
				width: width,
				height: height,
				translate: {
					y
				}
			});
		}

		const cloud = new Anchor({
			rotate: scene.rotate
		});

		for (const { x, y, r } of scene.clouds.circles) {
			new Shape({
				addTo: cloud,
				color: scene.clouds.color,
				stroke: r * 2,
				translate: {
					x,
					y
				}
			});
		}

		for (const { x, y } of scene.clouds.copies) {
			cloud.copyGraph({
				addTo: anchorScene,
				translate: {
					x,
					y
				}
			});
		}

		const sun = new Shape({
			addTo: anchorScene,
			color: scene.sun.color,
			stroke: scene.sun.r * 2,
			translate: {
				x: scene.sun.x,
				y: scene.sun.y
			},
			rotate: scene.rotate
		});

		for (const { x, y } of scene.sun.rays.copies) {
			new Shape({
				addTo: sun,
				color: scene.sun.rays.color,
				stroke: scene.sun.rays.r * 2,
				translate: {
					x,
					y
				}
			});
		}

		const bird = new Shape({
			color: scene.birds.color,
			stroke: 3,
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					bezier: [
						{ x: 2, y: -4 },
						{ x: 10, y: -8 },
						{ x: 12, y: -8 }
					]
				},
				{
					bezier: [
						{ x: 10, y: -12 },
						{ x: 2, y: -10 },
						{ x: 0, y: -6 }
					]
				},
				{
					bezier: [
						{ x: -2, y: -10 },
						{ x: -10, y: -12 },
						{ x: -12, y: -8 }
					]
				},
				{
					bezier: [
						{ x: -10, y: -8 },
						{ x: -2, y: -4 },
						{ x: 0, y: 0 }
					]
				}
			],
			rotate: scene.rotate
		});

		for (const { x, y, z, scale } of scene.birds.copies) {
			bird.copy({
				addTo: anchorScene,
				translate: {
					x,
					y,
					z
				},
				scale
			});
		}

		const mountains = new Anchor({
			addTo: anchorScene,
			translate: {
				x: scene.mountains.translate.x,
				y: scene.mountains.translate.y
			},
			rotate: scene.rotate
		});

		const mountain = new Cone({
			stroke: 4,
			diameter: scene.mountains.r * 2,
			length: scene.mountains.height,
			rotate: {
				x: TAU / 4
			}
		});

		for (const { color, x, y, z } of scene.mountains.copies) {
			mountain.copy({
				addTo: mountains,
				color,
				translate: {
					x,
					y,
					z
				}
			});
		}

		const balloon = new Anchor({
			addTo: anchorScene,
			translate: {
				x: scene.balloon.translate.x,
				y: scene.balloon.translate.y
			},
			rotate: scene.balloon.rotate
		});

		new Ellipse({
			addTo: balloon,
			color: '#54381d',
			stroke: 6,
			diameter: 18,
			translate: {
				y: 32
			},
			rotate: {
				x: TAU / 4
			}
		});

		for (const path of [
			[
				{ x: 0, y: 0, z: 8 },
				{ x: 0, y: 15, z: 10 }
			],
			[
				{ x: 8, y: 0, z: 0 },
				{ x: 12, y: 15, z: 0 }
			],
			[
				{ x: 0, y: 0, z: -8 },
				{ x: 0, y: 15, z: -10 }
			],
			[
				{ x: -8, y: 0, z: 0 },
				{ x: -12, y: 15, z: 0 }
			]
		]) {
			new Shape({
				addTo: balloon,
				color: '#54381d',
				stroke: 2,
				path,
				translate: {
					y: 32
				}
			});
		}

		new Hemisphere({
			addTo: balloon,
			color: '#7d5f36',
			stroke: 4,
			diameter: 24,
			translate: {
				y: 52
			},
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		new Ellipse({
			addTo: balloon,
			color: '#54381d',
			stroke: 6,
			diameter: 26,
			translate: {
				y: 50
			},
			rotate: {
				x: TAU / 4
			}
		});

		const n = 10;
		const r = 30;
		const y = 30;

		const points = Array(n)
			.fill()
			.map((_, i, { length }) => {
				const angle = (((360 / length) * i) / 180) * Math.PI;
				const x = Math.cos(angle) * r;
				const y = Math.sin(angle) * r;
				const color = scene.balloon.colors[i % 2];
				return {
					x,
					y,
					color
				};
			});

		const shapes = points.map(({ x: x1, y: y1 }, i, arr) => {
			const { x: x2, y: y2, color } = arr[(i + 1) % arr.length];
			const paths = [
				[
					{ x: 0, y, z: 0 },
					{
						arc: [
							{ x: x1, y, z: y1 },
							{ x: x1, y: 0, z: y1 }
						]
					},
					{ x: x2, y: 0, z: y2 },
					{
						arc: [
							{ x: x2, y: y, z: y2 },
							{ x: 0, y, z: 0 }
						]
					}
				],
				[
					{ x: 0, y: -y, z: 0 },
					{
						arc: [
							{ x: x1, y: -y, z: y1 },
							{ x: x1, y: 0, z: y1 }
						]
					},
					{ x: x2, y: 0, z: y2 },
					{
						arc: [
							{ x: x2, y: -y, z: y2 },
							{ x: 0, y: -y, z: 0 }
						]
					}
				]
			];

			return {
				color,
				paths
			};
		});

		for (const { color, paths } of shapes) {
			for (const path of paths) {
				new Shape({
					addTo: balloon,
					color,
					fill: true,
					path
				});
			}
		}

		illustration.updateRenderGraph();
	});

	const handleTranslate = (translate) => {
		if (illustration === null) return;

		illustration.translate = translate;
		illustration.updateRenderGraph();
	};

	const handleCentered = (centered) => {
		if (element === null || illustration === null) return;

		const x = centered ? 0 : -width / 2;
		const y = centered ? 0 : -height / 2;
		translate.set({ x, y });
	};

	$: handleTranslate($translate);
	$: handleCentered(centered);
</script>

<div>
	<button
		on:click={() => {
			centered = !centered;
		}}
	>
		Update <code>centered</code> from <code>{centered}</code>
	</button>

	<canvas
		bind:this={element}
		style="display: block; inline-size: 100%; max-inline-size: 400px;"
		width="400"
		height="300"
	/>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	button {
		display: block;
		padding: 0.5rem 0.75rem;
		font-family: inherit;
		color: inherit;
		background: none;
		border: 0.2rem solid currentColor;
	}

	button:focus {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}

	button > code {
		font-weight: 700;
	}
</style>
