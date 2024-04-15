<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, Hemisphere, Cylinder, Rect, Ellipse, TAU } from 'zdog';

	let widget = null;

	onMount(() => {
		const easeInSine = (t) => 1 - Math.cos((t * Math.PI) / 2);

		const canvas = widget.querySelector('canvas');
		const context = canvas.getContext('2d');
		const { width, height } = canvas;
		const zoom = 3.75;

		const w = width / zoom;
		const h = height / zoom;

		const trackOffset = (w / 2) * 1.5;
		const trackPegs = 15;
		const trackGap = (trackOffset * 2) / (trackPegs + 1);

		const colors = ['hsl(221 19% 48%)', 'hsl(220 31% 37%)', 'hsl(220 48% 28%)', 'hsl(219 52% 20%)'];
		const stroke = 2;

		const root = new Anchor();

		new Rect({
			addTo: root,
			color: 'hsl(196 78% 77%)',
			stroke: 0,
			fill: true,
			width: w,
			height: h,
			translate: {
				z: -50
			}
		});

		const horizon = new Anchor({
			addTo: root
		});

		new Ellipse({
			addTo: horizon,
			color: 'hsl(60 93% 75%)',
			stroke: 0,
			fill: true,
			diameter: 20,
			translate: {
				x: -30,
				y: -20,
				z: -30
			}
		});

		for (const { color, translate, rotate } of [
			{
				color: 'hsl(170 50% 41%)',
				rotate: { z: 0.01 },
				translate: { z: -30 }
			},
			{
				color: 'hsl(171 63% 44%)',
				rotate: { z: -0.02 },
				translate: {
					y: h / 8,
					z: -20
				}
			}
		]) {
			new Shape({
				addTo: horizon,
				color,
				stroke: 0,
				fill: true,
				path: [
					{ x: w * -1, y: 0 },
					{
						arc: [
							{ x: 0, y: (h / 4) * -1 },
							{ x: w, y: 0 }
						]
					},
					{ x: w, y: h },
					{ x: w * -1, y: h }
				],
				translate,
				rotate
			});
		}

		const track = new Anchor({
			addTo: horizon,
			translate: {
				y: 4.5 + stroke * 2
			}
		});

		for (const d of [1, -1]) {
			new Shape({
				addTo: track,
				color: colors[3],
				stroke,
				path: [{ x: trackOffset * -1 }, { x: trackOffset }],
				translate: {
					z: (5 + stroke) * d
				}
			});
		}

		for (let i = 0; i < trackPegs; i++) {
			new Shape({
				addTo: track,
				color: colors[3],
				stroke,
				path: [{ z: -5 }, { z: 5 }],
				translate: {
					x: trackOffset * -1 + ((trackOffset * 2) / (trackPegs + 1)) * (i + 1)
				}
			});
		}

		const back = new Cylinder({
			addTo: horizon,
			color: colors[2],
			stroke,
			diameter: 10,
			length: 12,
			translate: {
				x: 1.5 + stroke,
				y: (6 + stroke) * -1
			},
			rotate: {
				x: TAU / 4
			}
		});

		new Ellipse({
			addTo: back,
			color: colors[1],
			stroke,
			fill: true,
			diameter: 10,
			translate: {
				z: 6 + stroke
			}
		});

		const front = new Cylinder({
			addTo: horizon,
			color: colors[2],
			stroke,
			diameter: 3,
			length: 10,
			translate: {
				x: (5 + stroke) * -1,
				y: (9 + stroke) * -1
			},
			rotate: {
				x: TAU / 4
			}
		});

		new Hemisphere({
			addTo: front,
			color: colors[1],
			stroke,
			diameter: 5,
			translate: {
				z: 5 + stroke
			},
			scale: {
				z: 0.8
			}
		});

		new Cylinder({
			addTo: horizon,
			color: colors[2],
			stroke,
			diameter: 10,
			length: 15 + stroke,
			rotate: {
				y: TAU / 4
			}
		});

		new Cylinder({
			addTo: horizon,
			color: colors[1],
			stroke,
			diameter: 10,
			length: 2,
			translate: {
				x: (8 + stroke * 1.5) * -1
			},
			rotate: {
				y: TAU / 4
			}
		});

		new Cylinder({
			addTo: horizon,
			color: colors[0],
			stroke,
			diameter: 3,
			length: 1,
			translate: {
				x: (10 + stroke * 2) * -1
			},
			rotate: {
				y: TAU / 4
			}
		});

		const backWheel = new Ellipse({
			addTo: horizon,
			color: colors[1],
			stroke,
			fill: true,
			diameter: 6,
			translate: {
				x: 4 + stroke,
				y: 2 + stroke,
				z: 5
			}
		});

		new Hemisphere({
			addTo: backWheel,
			color: colors[2],
			stroke,
			diameter: 2,
			translate: {
				z: 1
			}
		});

		const frontWheel = new Ellipse({
			addTo: horizon,
			color: colors[1],
			stroke,
			fill: true,
			diameter: 5,
			translate: {
				x: (5 + stroke) * -1,
				y: 2 + stroke + 0.5,
				z: 5
			}
		});

		new Hemisphere({
			addTo: frontWheel,
			color: colors[2],
			stroke,
			diameter: 1.5,
			translate: {
				z: 1
			}
		});

		const anchor = new Anchor({
			addTo: frontWheel,
			translate: {
				z: 4
			}
		});

		const shape = new Shape({
			addTo: anchor,
			color: colors[0],
			stroke,
			path: [{ x: 0 }, { x: 5 + stroke + 4 + stroke }]
		});

		context.lineCap = 'round';
		context.lineJoin = 'round';

		const render = () => {
			context.clearRect(0, 0, width, height);
			context.save();
			context.translate(width / 2, height / 2);
			context.scale(zoom, zoom);
			root.renderGraphCanvas(context);
			context.restore();
		};

		horizon.translate.y = 6;

		const radius = 2 + stroke / 2;
		shape.translate.x = radius;

		root.updateGraph();
		render();

		let frame = null;
		const loops = 20;
		let ticker = 0;
		const cycle = 600;

		const update = (t) => {
			const angle = t * TAU * loops * -1;
			const x = Math.cos(angle) * radius;
			const y = Math.sin(angle) * radius;

			shape.translate.x = x;
			shape.translate.y = y;

			track.translate.x = (t * trackGap * loops) % trackGap;
		};

		const loop = () => {
			ticker = (ticker + 1) % cycle;

			update(ticker / cycle);

			root.updateGraph();
			render();

			frame = requestAnimationFrame(loop);
		};

		const animate = () => {
			ticker++;

			const e = easeInSine(ticker / cycle);

			update(e);

			anchor.translate.y = e * (stroke / 2) * -1;
			horizon.translate.x = (e * trackGap) / 2;
			horizon.rotate.x = e * 0.3 * -1;
			horizon.rotate.y = e * 0.5 * -1;

			root.updateGraph();
			render();

			if (ticker >= cycle) {
				ticker = 0;
				frame = requestAnimationFrame(loop);
			} else {
				frame = requestAnimationFrame(animate);
			}
		};

		const handleStart = () => {
			frame = requestAnimationFrame(animate);
			button.setAttribute('disabled', '');
		};

		const button = widget.querySelector('button');
		button.removeAttribute('disabled');
		button.addEventListener('click', handleStart, { once: true });

		return () => {
			cancelAnimationFrame(frame);
			button.removeEventListener('click', handleStart);
		};
	});
</script>

<div bind:this={widget}>
	<canvas
		style="display: block; inline-size: 100%; max-inline-size: 400px"
		width="400"
		height="250"
	>
	</canvas>
	<button disabled>Nudge</button>
</div>

<style>
	div {
		max-inline-size: max-content;
		margin-inline: auto;
		position: relative;
	}

	div > button {
		position: absolute;
		inset-inline-start: 50%;
		inset-block-end: 0.5rem;
		transform: translate(-50%, 0%);
	}

	canvas {
		border-radius: 0.5rem;
	}

	button {
		font-family: inherit;
		font-size: 1rem;
		font-weight: 700;
		color: hsl(210 17% 98%);
		background: hsl(210 10% 23%);
		padding: 0.4rem 0.75rem;
		border: none;
		border-radius: 0.25rem;
	}

	button:focus-visible {
		outline: 2px solid hsl(210 10% 23%);
		outline-offset: 2px;
	}

	button:disabled {
		transition-property: translate, visibility, opacity;
		transition-duration: 0.9s;
		transition-timing-function: cubic-bezier(0.36, 0, 0.66, -0.56);
		translate: -50% 0;
		visibility: hidden;
		opacity: 0;
	}
</style>
