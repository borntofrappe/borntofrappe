<script>
	import { onMount } from 'svelte';
	import { backOut, backInOut } from 'svelte/easing';
	import { Anchor, Shape, easeInOut } from 'zdog';

	let widget = null;

	onMount(() => {
		const colors = {
			ball: ['hsl(360 83% 62%)', 'hsl(210 17% 98%)'],
			star: 'hsl(44 92% 63%)',
			seal: 'hsl(210 17% 98%)',
			face: 'hsl(209 20% 25%)'
		};

		const strokes = {
			ball: 0,
			star: 1,
			fin: 3,
			eyebrow: 0.75,
			mouth: 0.75,
			whisker: 0.2
		};

		const radii = {
			ball: 9,
			star: [2, 3.2],
			seal: 11,
			eye: 1.5
		};

		const stripes = 8;

		const PI = Math.PI;
		const TAU = PI * 2;
		const distance = radii.ball * 1.5;

		const root = new Anchor();

		const origin = new Anchor({
			addTo: root
		});

		const ball = new Anchor({
			addTo: origin
		});

		const slices = (() => {
			const r = radii.ball;

			return Array(stripes)
				.fill()
				.map((_, i, { length }) => {
					const color = colors.ball[i % 2];

					const a1 = (TAU / length) * i;
					const a2 = (TAU / length) * (i + 1);
					const am = (a1 + a2) / 2;
					const x1 = Math.cos(a1) * r;
					const y1 = Math.sin(a1) * r;
					const xm = Math.cos(am) * r;
					const ym = Math.sin(am) * r;
					const x2 = Math.cos(a2) * r;
					const y2 = Math.sin(a2) * r;

					return {
						color,
						path: [
							{ x: 0, y: r * -1, z: 0 },
							{
								arc: [
									{ x: x1, y: r * -1, z: y1 },
									{ x: x1, y: 0, z: y1 }
								]
							},
							{
								arc: [
									{ x: xm, y: 0, z: ym },
									{ x: x2, y: 0, z: y2 }
								]
							},
							{
								arc: [
									{ x: x2, y: r * -1, z: y2 },
									{ x: 0, y: r * -1, z: 0 }
								]
							}
						]
					};
				});
		})();

		for (const { color, path } of slices) {
			new Shape({
				addTo: ball,
				color,
				stroke: strokes.ball,
				fill: true,
				path
			});

			new Shape({
				addTo: ball,
				color,
				stroke: strokes.ball,
				fill: true,
				path,
				scale: {
					y: -1
				}
			});
		}

		const path = (() => {
			const [r1, r2] = radii.star;
			return Array(10)
				.fill()
				.map((_, i, { length }) => {
					const r = i % 2 === 0 ? r1 : r2;
					const angle = TAU / 4 + (TAU / length) * i;
					const x = Math.cos(angle) * r;
					const y = Math.sin(angle) * r;

					return { x, y };
				});
		})();

		const stars = new Anchor({
			addTo: origin
		});

		const star = new Shape({
			color: colors.star,
			stroke: strokes.star,
			fill: true,
			path
		});

		for (const { translate, rotate } of [
			{
				translate: { x: 0, y: radii.ball * -1, z: radii.ball },
				rotate: { z: 0 }
			},
			{
				translate: {
					x: radii.ball,
					y: (radii.ball / 2) * -1,
					z: radii.ball / 2
				},
				rotate: { z: 0.4 }
			},
			{
				translate: {
					x: -radii.ball,
					y: (radii.ball / 2) * -1,
					z: radii.ball / 2
				},
				rotate: { z: -0.4 }
			},
			{
				translate: { x: radii.ball * 1.5, y: 1, z: radii.ball },
				rotate: { z: 0.75 }
			},
			{
				translate: { x: -radii.ball * 1.5, y: 1, z: radii.ball },
				rotate: { z: -0.75 }
			}
		]) {
			star.copy({
				addTo: stars,
				translate,
				rotate
			});
		}

		const seal = new Shape({
			addTo: origin,
			color: colors.seal,
			stroke: radii.seal * 2,
			fill: true
		});

		for (const scale of [1, -1]) {
			new Shape({
				addTo: seal,
				color: colors.seal,
				stroke: strokes.fin,
				fill: true,
				path: [
					{ x: 0, y: 0 },
					{
						arc: [
							{ x: radii.seal, y: 0 },
							{ x: radii.seal, y: radii.seal }
						]
					},
					{ x: 0, y: radii.seal }
				],
				translate: {
					y: (strokes.fin / 2) * -1
				},
				scale: {
					x: scale
				}
			});

			new Shape({
				addTo: seal,
				color: colors.seal,
				stroke: strokes.fin + 1,
				closed: false,
				fill: true,
				path: [
					{ x: 0, y: radii.seal, z: radii.seal * 2 * -1 },
					{
						arc: [
							{ x: 0, y: radii.seal, z: 0 },
							{ x: radii.seal, y: radii.seal, z: 0 }
						]
					}
				],
				translate: {
					y: (strokes.fin / 2) * -1
				},
				scale: {
					x: scale
				}
			});
		}

		new Shape({
			addTo: seal,
			color: colors.seal,
			stroke: strokes.fin,
			fill: true,
			path: [
				{ x: 0, y: 0, z: 0 },
				{
					arc: [
						{ x: 0, y: 0, z: radii.seal * 2 * -1 },
						{ x: 0, y: radii.seal, z: radii.seal * 2 * -1 }
					]
				},
				{ x: 0, y: radii.seal, z: 0 }
			],
			translate: {
				y: (strokes.fin / 2) * -1
			}
		});

		const neck = new Anchor({
			addTo: seal
		});

		const face = new Anchor({
			addTo: neck,
			translate: {
				y: (radii.seal / 6) * -1,
				z: radii.seal / 1.4
			},
			rotate: {
				x: 0.1
			}
		});

		for (const scale of [-1, 1]) {
			const eye = new Shape({
				addTo: face,
				color: colors.face,
				stroke: radii.eye * 2,
				translate: {
					x: (radii.seal / 3) * scale,
					y: (radii.seal / 4) * -1
				},
				scale: {
					x: scale
				}
			});

			new Shape({
				addTo: eye,
				color: colors.face,
				stroke: strokes.eyebrow,
				closed: false,
				path: [
					{ x: -0.5, y: -0.25 },
					{
						arc: [
							{ x: 0.5, y: -0.25 },
							{ x: 0.5, y: 0.25 }
						]
					}
				],
				translate: {
					x: radii.eye / 1.5,
					y: radii.eye * 1.5 * -1
				}
			});
		}

		const mouth = new Shape({
			addTo: face,
			color: colors.face,
			stroke: strokes.mouth,
			closed: false,
			path: [
				{ x: radii.seal / 4, y: 0 },
				{
					arc: [
						{ x: radii.seal / 4 + radii.seal / 8, y: 0 },
						{ x: radii.seal / 4 + radii.seal / 8, y: radii.seal / 8 }
					]
				},
				{
					arc: [
						{ x: radii.seal / 4 + radii.seal / 8, y: radii.seal / 4 },
						{ x: radii.seal / 4, y: radii.seal / 4 }
					]
				},
				{
					bezier: [
						{ x: 0, y: radii.seal / 5 },
						{ x: 0, y: radii.seal / 5 },
						{ x: (radii.seal / 4) * -1, y: radii.seal / 4 }
					]
				},
				{
					arc: [
						{ x: (radii.seal / 4 + radii.seal / 8) * -1, y: radii.seal / 4 },
						{ x: (radii.seal / 4 + radii.seal / 8) * -1, y: radii.seal / 8 }
					]
				},
				{
					arc: [
						{ x: (radii.seal / 4 + radii.seal / 8) * -1, y: 0 },
						{ x: (radii.seal / 4) * -1, y: 0 }
					]
				}
			],
			translate: {
				y: radii.seal / 12
			}
		});

		const whisker = new Shape({
			color: colors.face,
			stroke: strokes.whisker,
			closed: false,
			path: [
				{ x: 0, y: 0 },
				{
					bezier: [
						{ x: radii.seal / 4, y: -0.5 },
						{ x: radii.seal / 4, y: -0.5 },
						{ x: radii.seal / 2, y: 0 }
					]
				}
			]
		});

		for (const scale of [-1, 1]) {
			whisker.copy({
				addTo: mouth,
				translate: {
					x: (radii.seal / 5) * scale,
					y: radii.seal / 12
				},
				scale: {
					x: scale
				}
			});

			whisker.copy({
				addTo: mouth,
				translate: {
					x: (radii.seal / 5) * scale,
					y: radii.seal / 12 + 0.5
				},
				rotate: {
					z: 0.2 * scale
				},
				scale: {
					x: scale
				}
			});
		}

		const canvas = widget.querySelector('canvas');
		const context = canvas.getContext('2d');
		const { width, height } = canvas;
		const zoom = 6;

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

		seal.translate.y = radii.seal + radii.ball;
		stars.translate.y = radii.ball;

		root.rotate.x = -0.15;
		root.rotate.y = 0.55;
		root.translate.y = (radii.ball / 2) * -1;

		let t = 0;
		stars.scale = t;
		stars.translate.z = t;
		for (const star of stars.children) {
			star.stroke = t;
		}

		root.updateGraph();
		render();

		let state = 'wait';
		let frame = null;
		const cycles = [150, 30];
		let ticker = 0;
		let [cycle] = cycles;

		const receive = () => {
			const t = ticker++ / cycle;
			const e = easeInOut(t);

			stars.scale = backOut(t);
			for (const star of stars.children) {
				star.scale = 1 - e;
				star.stroke = e * strokes.star;
			}

			root.updateGraph();
			render();

			if (t >= 1) {
				stars.scale = 0;
				stars.translate.z = 0;
				for (const star of stars.children) {
					star.stroke = 0;
				}

				root.updateGraph();
				render();

				ticker = 0;
				cycle = cycles[0];
				state = 'wait';
				cancelAnimationFrame(frame);
				button.removeAttribute('disabled');
			} else {
				frame = requestAnimationFrame(receive);
			}
		};

		const lob = () => {
			const t = ticker++ / cycle;
			const l = Math.sin(t * PI);

			ball.rotate.y = easeInOut(t, 2) * TAU;

			ball.translate.y = backInOut(l) * distance * -1;
			origin.translate.y = Math.min(0, ball.translate.y * -1) * -1;

			neck.rotate.x = backInOut(l) * 0.5;
			face.rotate.z = l * 0.2 * -1;

			root.updateGraph();
			render();

			if (t >= 1) {
				ticker = 0;
				cycle = cycles[1];
				frame = requestAnimationFrame(receive);
			} else {
				frame = requestAnimationFrame(lob);
			}
		};

		const button = widget.querySelector('button');
		button.removeAttribute('disabled');

		const handleVolley = () => {
			if (state !== 'wait') return;

			state = 'lob';
			button.setAttribute('disabled', true);
			frame = requestAnimationFrame(lob);
		};

		button.addEventListener('click', handleVolley);

		return () => {
			button.removeEventListener('click', handleVolley);
			cancelAnimationFrame(frame);
		};
	});
</script>

<div bind:this={widget}>
	<canvas
		style="display: block; margin-inline: auto; inline-size: 100%; max-inline-size: 300px;"
		width="300"
		height="350"
	/>
	<button disabled>Volley</button>
</div>

<style>
	div {
		--_color: hsl(210 17% 98%);
		--_background: hsl(210 63% 12%);
		--_shadow: hsl(229 32% 10%);
		--_accent: hsl(360 83% 62%);
		max-inline-size: 26rem;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		color: var(--_color, hsl(0 0% 99%));
		background: var(--_background, hsl(0 0% 15%));
		border-radius: 2rem;
		padding: 4rem 2rem;
		background-image: linear-gradient(135deg, var(--_shadow) 50%, transparent 50%),
			linear-gradient(-135deg, var(--_shadow) 50%, transparent 50%),
			linear-gradient(-45deg, var(--_shadow) 50%, transparent 50%),
			linear-gradient(45deg, var(--_shadow) 50%, transparent 50%);
		background-size: 2rem 2rem;
		background-repeat: repeat-x;
		background-position: 0% 0%, 0% 0%, 0% 100%, 0% 100%;
	}

	button {
		font-family: inherit;
		font-size: 1rem;
		font-weight: 700;
		color: var(--_background, hsl(0 0% 15%));
		background: var(--_color, hsl(0 0% 99%));
		border: none;
		border-inline: 0.5rem solid var(--_accent, hsl(0 0% 60%));
		padding: 0.5rem 0.75rem;
		border-radius: 1e5px;
		transition: scale 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	button:hover {
		scale: 1.05;
		transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
		transition-duration: 0.1s;
	}

	button:disabled {
		scale: 0.85;
	}

	button:focus {
		outline: 2px solid var(--_accent, hsl(0 0% 60%));
		outline-offset: 2px;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}
</style>
