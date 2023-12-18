<script>
	import { onMount } from 'svelte';
	import { backInOut } from 'svelte/easing';
	import { Anchor, Shape, Hemisphere, Cylinder, TAU } from 'zdog';

	let widget = null;

	onMount(() => {
		const element = widget.querySelector('canvas');
		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 8;

		const colors = {
			backdrop: 'hsl(210 14% 90%)',
			body: 'hsl(0 0% 99%)',
			eyes: 'hsl(306 83% 26%)',
			wing: 'hsl(313 100% 50%)',
			beak: 'hsl(12 96% 55%)',
			legs: 'hsl(12 96% 55%)'
		};

		const strokes = [0.2, 2, 3];

		const x = width / 2 / zoom;
		const y = height / 2 / zoom;

		const color = colors.duck;
		const [stroke] = strokes;
		const length = 10;
		const diameter = 12;

		const root = new Anchor();

		new Shape({
			addTo: root,
			color: colors.backdrop,
			stroke: 0,
			fill: true,
			path: [
				{ x: 0, y },
				{
					bezier: [
						{ x, y },
						{ x, y },
						{ x, y: 0 }
					]
				},
				{
					bezier: [
						{ x, y: y * -1 },
						{ x, y: y * -1 },
						{ x: 0, y: y * -1 }
					]
				},
				{
					bezier: [
						{ x: x * -1, y: y * -1 },
						{ x: x * -1, y: y * -1 },
						{ x: x * -1, y: 0 }
					]
				},
				{
					bezier: [
						{ x: x * -1, y },
						{ x: x * -1, y },
						{ x: 0, y }
					]
				}
			],
			translate: {
				z: -50
			}
		});

		const duck = new Anchor({
			addTo: root
		});

		const neck = new Cylinder({
			addTo: duck,
			color,
			stroke,
			diameter,
			length,
			rotate: {
				x: TAU / 4
			}
		});

		const head = new Hemisphere({
			addTo: neck,
			color,
			stroke,
			diameter,
			translate: {
				z: length / 2
			}
		});

		for (const [x, y] of [
			[diameter / 2 + 1.5, -1.5],
			[diameter / 2 + 1.5, 1.5]
		]) {
			new Shape({
				addTo: head,
				color: colors.eyes,
				stroke: strokes[2],
				translate: {
					x,
					y
				}
			});
		}

		new Shape({
			addTo: head,
			color: colors.beak,
			stroke: strokes[2],
			path: [{ y: -2 }, { y: 2 }],
			translate: {
				x: diameter / 2 + 1.5,
				z: -3
			}
		});

		const body = new Cylinder({
			addTo: neck,
			color,
			stroke,
			length,
			diameter,
			translate: {
				x: (length / 2 + diameter / 2) * -1,
				z: (length / 2 + diameter / 2) * -1
			},
			rotate: {
				y: TAU / 4
			}
		});

		const legs = new Anchor({
			addTo: body,
			translate: {
				x: (diameter / 2) * -1
			}
		});

		for (const [y, z] of [
			[3, 0],
			[-3, -2]
		]) {
			new Shape({
				addTo: legs,
				color: colors.legs,
				stroke: strokes[1],
				closed: false,
				path: [
					{ x: 0, z: 0 },
					{ x: -4, z: 0 },
					{ x: -4, z: 2 },
					{ x: -4, z: -3 }
				],
				translate: {
					y,
					z
				}
			});
		}

		new Hemisphere({
			addTo: body,
			color,
			stroke,
			diameter,
			translate: {
				z: body.length / 2
			}
		});

		const belly = new Anchor({
			addTo: body,
			translate: {
				z: (body.length / 2) * -1
			}
		});

		new Shape({
			addTo: belly,
			color,
			stroke,
			fill: true,
			path: [
				{
					x: diameter / 2,
					y: 0,
					z: 0
				},
				{
					arc: [
						{
							x: diameter / 2,
							y: diameter / 2,
							z: 0
						},
						{
							x: diameter / 2,
							y: diameter / 2,
							z: (diameter / 2) * -1
						}
					]
				},
				{
					x: 0,
					y: diameter / 2,
					z: (diameter / 2) * -1
				},
				{
					x: 0,
					y: diameter / 2,
					z: 0
				},
				{
					arc: [
						{
							x: diameter / 2,
							y: diameter / 2,
							z: 0
						},
						{
							x: diameter / 2,
							y: 0,
							z: 0
						}
					]
				}
			]
		});

		new Shape({
			addTo: belly,
			color,
			stroke,
			fill: true,
			path: [
				{
					x: diameter / 2,
					y: diameter / 2,
					z: (diameter / 2) * -1
				},
				{
					arc: [
						{
							x: diameter / 2,
							y: diameter / 2,
							z: diameter * -1
						},
						{
							x: diameter / 2,
							y: 0,
							z: diameter * -1
						}
					]
				},
				{
					x: 0,
					y: 0,
					z: diameter * -1
				},
				{
					arc: [
						{
							x: 0,
							y: diameter / 2,
							z: diameter * -1
						},
						{
							x: 0,
							y: diameter / 2,
							z: (diameter / 2) * -1
						}
					]
				}
			]
		});

		new Shape({
			addTo: belly,
			color,
			stroke,
			fill: true,
			path: [
				{
					x: diameter / 2,
					y: (diameter / 2) * -1,
					z: (diameter / 2) * -1
				},
				{
					arc: [
						{
							x: diameter / 2,
							y: (diameter / 2) * -1,
							z: diameter * -1
						},
						{
							x: diameter / 2,
							y: 0,
							z: diameter * -1
						}
					]
				},
				{
					x: 0,
					y: 0,
					z: diameter * -1
				},
				{
					arc: [
						{
							x: 0,
							y: (diameter / 2) * -1,
							z: diameter * -1
						},
						{
							x: 0,
							y: (diameter / 2) * -1,
							z: (diameter / 2) * -1
						}
					]
				}
			]
		});

		new Shape({
			addTo: belly,
			color,
			stroke,
			fill: true,
			path: [
				{
					x: 0,
					y: diameter / 2,
					z: (diameter / 2) * -1
				},
				{
					arc: [
						{
							x: (diameter / 2) * -1,
							y: diameter / 2,
							z: (diameter / 2) * -1
						},
						{
							x: (diameter / 2) * -1,
							y: 0,
							z: (diameter / 2) * -1
						}
					]
				},
				{
					arc: [
						{
							x: (diameter / 2) * -1,
							y: 0,
							z: diameter * -1
						},
						{
							x: 0,
							y: 0,
							z: diameter * -1
						}
					]
				},
				{
					arc: [
						{
							x: 0,
							y: diameter / 2,
							z: diameter * -1
						},
						{
							x: 0,
							y: diameter / 2,
							z: (diameter / 2) * -1
						}
					]
				}
			]
		});

		new Shape({
			addTo: belly,
			color,
			stroke,
			fill: true,
			path: [
				{ x: 0, y: diameter / 2, z: 0 },
				{
					arc: [
						{ x: (diameter / 2) * -1, y: diameter / 2, z: 0 },
						{ x: (diameter / 2) * -1, y: 0, z: 0 }
					]
				},
				{ x: (diameter / 2) * -1, y: 0, z: (diameter / 2) * -1 },
				{
					arc: [
						{ x: (diameter / 2) * -1, y: diameter / 2, z: (diameter / 2) * -1 },
						{ x: 0, y: diameter / 2, z: (diameter / 2) * -1 }
					]
				}
			]
		});

		new Shape({
			addTo: body,
			color: colors.wing,
			stroke: strokes[1],
			fill: true,
			path: [
				{ x: 0, z: 0 },
				{
					arc: [
						{ x: 0, z: -2.5 },
						{ x: -2.5, z: -2.5 }
					]
				},
				{
					arc: [
						{ x: -5, z: -2.5 },
						{ x: -5, z: 0 }
					]
				},
				{ x: -5, z: 3.5 },
				{
					arc: [
						{ x: -5, z: 8.5 },
						{ x: 0, z: 8.5 }
					]
				}
			],
			translate: {
				x: 2.5,
				y: diameter / 2 + 2,
				z: (length / 2) * -1
			}
		});

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

		duck.translate.y = -5;
		duck.translate.x = 6;

		duck.rotate.x = -0.2;
		duck.rotate.y = -0.2;
		head.rotate.z = 0;

		root.updateGraph();
		render();

		let frame = null;
		let ticker = 0;
		const cycle = 50;
		let direction = 1;
		let state = 'wait';
		const { x: rx, y: ry } = duck.rotate;

		const animate = () => {
			ticker += direction;
			const ease = backInOut(ticker / cycle);
			duck.rotate.x = rx + ease * rx * -1;
			duck.rotate.y = ry + ease * 0.4;
			head.rotate.z = ease * (TAU / 4 - 0.2);

			root.updateGraph();
			render();

			if (ticker > cycle || ticker < 0) {
				state = 'wait';
				cancelAnimationFrame(frame);
			} else {
				frame = requestAnimationFrame(animate);
			}
		};

		const handleInput = function (e) {
			direction = this.checked ? 1 : -1;
			if (state === 'wait') {
				state = 'animate';
				requestAnimationFrame(animate);
			}
		};

		const checkbox = widget.querySelector('input[type="checkbox"]');
		checkbox.removeAttribute('disabled');
		checkbox.addEventListener('input', handleInput);

		return () => {
			cancelAnimationFrame(frame);
			checkbox.removeEventListener('input', handleInput);
		};
	});
</script>

<div bind:this={widget}>
	<canvas
		style="display: block; inline-size: 100%; max-inline-size: 400px;"
		width="400"
		height="400"
	/>
	<label>
		<input disabled type="checkbox" />
		<span>Quack</span>
		<svg
			width="1em"
			height="1em"
			viewBox="-15.142135620117188 -21.50609588623047 36.648231506347656 36.648231506347656"
		>
			<g transform="rotate(-45)">
				<path
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -13 0.5 -13 -0.5 -6.5 -0.5 -6.5 -3 -6 -3 -6 -0.5 -2.5 -0.5 -2.5 -3 -2 -3 -2 -0.5 1.5 -0.5 1.5 -3 2 -3 2 -0.5 4 -0.5 C 8 -0.5 11 -3 13 -6 12 -1 12 1 13 6 11 3 8 0.5 4 0.5 L 2 0.5 2 2 A 3 3 0 0 1 -1 5 L -4 5 A 3 3 0 0 1 -7 2 L -7 0.5 Z"
				/>
				<g
					transform="translate(14 0)"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path id="sound" d="M 4 0 8 0 M 2.5 -4.5 6 -7 M 2.5 4.5 6 7 Z" />
				</g>
			</g>
		</svg>
	</label>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	label {
		padding: 1rem 1.5rem;
		border-radius: 0.25rem;
		position: relative;
		font-size: 1.25rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	label,
	input {
		cursor: pointer;
	}

	label > svg {
		inline-size: 2em;
		block-size: 2em;
	}

	input {
		font-size: inherit;
		accent-color: hsl(12 96% 55%);
		inline-size: 1em;
		block-size: 1em;
	}

	input ~ svg #sound {
		scale: 0;
		transition: scale 0.2s cubic-bezier(0.83, 0, 0.17, 1);
	}

	input:checked ~ svg #sound {
		scale: 1;
		transition-duration: 0.3s;
		transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	span {
		font-weight: 700;
	}
</style>
