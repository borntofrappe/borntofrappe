<script>
	import { onMount } from 'svelte';
	import { quintInOut as ease, quartOut, backInOut } from 'svelte/easing';
	import { Anchor, Ellipse, Shape } from 'zdog';

	let widget = null;

	onMount(() => {
		const PI = Math.PI;
		const TAU = PI * 2;

		const colors = {
			belt: ['hsl(220 14% 25%)', 'hsl(210 20% 91%)'],
			box: ['hsl(216 9% 32%)', 'hsl(219 9% 36%)', 'hsl(220 8% 41%)'],
			star: ['hsl(159 61% 63%)', 'hsl(169 82% 44%)'],
			assembly: ['hsl(220 9% 19%)', 'hsl(219 9% 46%)', 'hsl(210 20% 91%)', 'hsl(169 82% 44%)']
		};

		const strokes = {
			belt: [6, 0.5],
			star: [4, 1],
			box: 3
		};

		const radius = 50;
		const spread = 12;

		const root = new Anchor();

		new Ellipse({
			addTo: root,
			color: colors.belt[0],
			stroke: strokes.belt[0],
			diameter: radius * 2,
			rotate: {
				x: TAU / 4
			}
		});

		new Ellipse({
			addTo: root,
			color: colors.belt[1],
			stroke: strokes.belt[1],
			diameter: radius * 2,
			translate: {
				y: (strokes.belt[0] / 2) * -1
			},
			rotate: {
				x: TAU / 4
			}
		});

		new Shape({
			addTo: root,
			color: colors.box[0],
			stroke: strokes.box,
			fill: true,
			path: [
				{ x: spread, y: 0, z: 0 },
				{ x: spread * -1, y: 0, z: 0 },
				{ x: spread * -1, y: spread * 2 * -1, z: 0 },
				{ x: spread, y: spread * 2 * -1, z: 0 }
			]
		});

		new Shape({
			addTo: root,
			color: colors.box[1],
			stroke: strokes.box,
			fill: true,
			path: [
				{ x: spread * -1, y: spread * 2 * -1, z: 0 },
				{ x: spread * -1, y: spread * 2 * -1, z: (radius + spread / 2) * -1 },
				{ x: spread, y: spread * 2 * -1, z: (radius + spread / 2) * -1 },
				{ x: spread, y: spread * 2 * -1, z: 0 }
			]
		});

		new Shape({
			addTo: root,
			color: colors.box[2],
			stroke: strokes.box,
			fill: true,
			path: [
				{ x: spread * -1, y: spread * 2 * -1, z: (radius + spread / 2) * -1 },
				{ x: spread, y: spread * 2 * -1, z: (radius + spread / 2) * -1 },
				{ x: spread, y: 0, z: (radius + spread / 2) * -1 },
				{ x: spread * -1, y: 0, z: (radius + spread / 2) * -1 }
			]
		});

		const path = (() => {
			const [r1, r2] = [spread * 0.35, spread * 0.6];
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

		const pathSmall = (() => {
			const [r1, r2] = [spread * 0.16, spread * 0.25];
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

		const star = new Shape({
			addTo: root,
			color: colors.star[0],
			stroke: strokes.star[0],
			fill: true,
			path,
			translate: {
				y: spread * -1,
				z: strokes.star[0] / 2
			}
		});

		const stars = new Anchor({
			addTo: root,
			translate: {
				y: spread * -1,
				z: radius * -1
			}
		});

		new Shape({
			addTo: stars,
			color: colors.star[1],
			stroke: strokes.star[1],
			fill: true,
			path: pathSmall,
			translate: {
				x: spread * 1.5,
				y: (spread / 2) * -1
			}
		});

		new Shape({
			addTo: stars,
			color: colors.star[1],
			stroke: strokes.star[1],
			fill: true,
			path: pathSmall,
			translate: {
				x: spread * 1.5,
				y: spread / 2
			}
		});

		new Shape({
			addTo: stars,
			color: colors.star[1],
			stroke: strokes.star[1],
			fill: true,
			path: pathSmall,
			translate: {
				x: spread * 1.8 * -1,
				y: (spread / 2) * -1
			}
		});

		new Shape({
			addTo: stars,
			color: colors.star[1],
			stroke: strokes.star[1],
			fill: true,
			path: pathSmall,
			translate: {
				x: spread * 1.8 * -1,
				y: spread / 2
			}
		});

		const center = new Anchor({
			addTo: root
		});

		const offset = new Anchor({
			addTo: center,
			translate: {
				y: (15.5 + strokes.belt[0] / 2 + strokes.belt[1] / 2) * -1,
				z: radius
			}
		});

		const squircleSmall = new Shape({
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					bezier: [
						{ x: 0.7, y: 0 },
						{ x: 0.8, y: 0.1 },
						{ x: 0.8, y: 1.6 }
					]
				},
				{
					bezier: [
						{ x: 0.8, y: 3.1 },
						{ x: 0.7, y: 3.2 },
						{ x: 0, y: 3.2 }
					]
				},
				{
					bezier: [
						{ x: -0.7, y: 3.2 },
						{ x: -0.8, y: 3.1 },
						{ x: -0.8, y: 1.6 }
					]
				},
				{
					bezier: [
						{ x: -0.8, y: 0.1 },
						{ x: -0.7, y: 0 },
						{ x: 0, y: 0 }
					]
				}
			]
		});

		const squircleLarge = new Shape({
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					bezier: [
						{ x: 7, y: 0 },
						{ x: 7.5, y: 0.5 },
						{ x: 7.5, y: 5 }
					]
				},
				{
					bezier: [
						{ x: 7.5, y: 9.5 },
						{ x: 7, y: 10 },
						{ x: 0, y: 10 }
					]
				},
				{
					bezier: [
						{ x: -7, y: 10 },
						{ x: -7.5, y: 9.5 },
						{ x: -7.5, y: 5 }
					]
				},
				{
					bezier: [
						{ x: -7.5, y: 0.5 },
						{ x: -7, y: 0 },
						{ x: 0, y: 0 }
					]
				}
			]
		});

		const zOffsets = [1, 4];

		const antenna = new Anchor({
			addTo: offset
		});

		const handles = new Anchor({
			addTo: offset
		});

		const screen = new Anchor({
			addTo: offset
		});

		const face = new Anchor({
			addTo: offset
		});

		new Shape({
			addTo: antenna,
			color: colors.assembly[2],
			stroke: 3.2
		});

		new Shape({
			addTo: antenna,
			color: colors.assembly[0],
			stroke: 1,
			path: [{ y: 1.5 }, { y: 3 }]
		});

		screen.translate.y = 3;

		squircleLarge.copy({
			addTo: screen,
			color: colors.assembly[1]
		});

		squircleLarge.copy({
			addTo: screen,
			color: colors.assembly[0],
			translate: {
				y: 1.25,
				z: zOffsets[0]
			},
			scale: {
				x: 0.825,
				y: 0.725
			}
		});

		new Shape({
			addTo: screen,
			color: colors.assembly[2],
			fill: true,
			path: [
				{ x: 3, y: 0 },
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
			],
			translate: {
				y: 9.25,
				z: zOffsets[0] * -1
			}
		});

		handles.translate.y = 6.4;

		[-1, 1].forEach((direction) => {
			squircleSmall.copy({
				addTo: handles,
				color: colors.assembly[2],
				translate: {
					x: 8 * direction,
					z: zOffsets[0] * -1
				}
			});
		});

		face.translate.y = 9.75;
		face.translate.z = zOffsets[1];

		new Shape({
			addTo: face,
			color: colors.assembly[3],
			stroke: 0.5,
			fill: true,
			path: [
				{ x: 1, y: 0 },
				{ x: -1, y: 0 },
				{
					arc: [
						{ x: -1, y: 1 },
						{ x: 0, y: 1 }
					]
				},
				{
					arc: [
						{ x: 1, y: 1 },
						{ x: 1, y: 0 }
					]
				}
			]
		});

		[-1, 1].forEach((direction) => {
			squircleSmall.copy({
				addTo: face,
				color: colors.assembly[3],
				stroke: 0.5,
				translate: {
					x: 3.5 * direction,
					y: -4
				}
			});
		});

		const element = widget.querySelector('canvas');
		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 4.7;

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

		root.translate.y = 12;
		root.rotate.x = -0.15;
		root.rotate.y = 0.05;
		stars.scale = 0;

		root.updateGraph();
		render();

		const steps = [
			{
				anchor: screen,
				label: 'Crisp screen'
			},
			{
				anchor: handles,
				label: 'Comfy grip'
			},
			{
				anchor: antenna,
				label: 'Vital sensor'
			},
			{
				anchor: face,
				label: 'Winning personality'
			}
		];

		let state = 'wait';
		let frame = null;
		let timeout = null;
		let counter = 0;
		const thresholds = [60, 120];
		let index = 0;
		let direction = 1;
		const translateY = {
			offset: offset.translate.y,
			face: face.translate.y
		};

		const label = widget.querySelector('p');
		const buttonNext = widget.querySelector('button[data-action="next"]');
		const buttonPrevious = widget.querySelector('button[data-action="prev"]');

		const updateControls = () => {
			if (index < steps.length - 1) buttonNext.removeAttribute('disabled');
			else buttonNext.setAttribute('disabled', '');

			if (index > 0) buttonPrevious.removeAttribute('disabled');
			else buttonPrevious.setAttribute('disabled', '');
		};

		const updateUI = () => {
			for (let i = 0; i < steps.length; i++) {
				const visible = i <= index;
				for (const child of steps[i].anchor.children) {
					child.visible = visible;
				}
			}
			root.updateGraph();
			render();

			label.textContent = steps[index].label;
		};

		const animateOut = () => {
			counter++;
			const e = ease(counter / thresholds[1]);

			center.rotate.y = e * PI * direction;

			root.updateGraph();
			render();

			if (counter >= thresholds[1]) {
				updateUI();

				counter = 0;

				if (direction === 1) {
					const delay = label.textContent.length * 100;
					timeout = setTimeout(() => {
						frame = requestAnimationFrame(animateStep);
						clearTimeout(timeout);
					}, delay);
				} else {
					frame = requestAnimationFrame(animateIn);
				}
			} else {
				frame = requestAnimationFrame(animateOut);
			}
		};

		const animateStep = () => {
			counter++;
			const t1 = Math.min(1, (counter / thresholds[0]) * 3);
			const t2 = counter / thresholds[0];
			const e = ease(t2);

			star.scale = 1 - Math.sin(t1 * PI) * 0.2;

			stars.scale = quartOut(t2);
			for (const star of stars.children) {
				star.scale = 1 - e;
				star.stroke = 1 - e;
			}

			root.updateGraph();
			render();

			if (counter >= thresholds[0]) {
				stars.scale = 0;

				root.updateGraph();
				render();

				counter = 0;
				frame = requestAnimationFrame(animateIn);
			} else {
				frame = requestAnimationFrame(animateStep);
			}
		};

		const animateIn = () => {
			counter++;
			const e = ease(counter / thresholds[1]);

			center.rotate.y = e * PI * direction + PI;

			root.updateGraph();
			render();

			if (counter >= thresholds[1]) {
				counter = 0;

				if (index === steps.length - 1) {
					frame = requestAnimationFrame(animateEnd);
				} else {
					updateControls();
					state = 'wait';
					cancelAnimationFrame(frame);
				}
			} else {
				frame = requestAnimationFrame(animateIn);
			}
		};

		const animateEnd = () => {
			counter++;
			const l = Math.sin(backInOut(counter / thresholds[0]) * PI);

			offset.translate.y = translateY.offset - l;
			face.translate.y = translateY.face - l;
			face.scale = 1 + l * 0.05;

			root.updateGraph();
			render();

			if (counter >= thresholds[0]) {
				counter = 0;

				updateControls();
				state = 'wait';
				cancelAnimationFrame(frame);
			} else {
				frame = requestAnimationFrame(animateEnd);
			}
		};

		const handleStart = () => {
			buttonPrevious.setAttribute('disabled', '');
			buttonNext.setAttribute('disabled', '');
			state = 'animate';
			animateOut();
		};

		const handleNext = () => {
			if (state !== 'wait' || index >= steps.length - 1) return;

			direction = 1;
			index++;
			handleStart();
		};

		const handlePrevious = () => {
			if (state !== 'wait' || index <= 0) return;

			direction = -1;
			index--;
			handleStart();
		};

		updateUI();
		updateControls();

		label.setAttribute('aria-live', 'polite');
		label.setAttribute('role', 'status');
		buttonNext.addEventListener('click', handleNext);
		buttonPrevious.addEventListener('click', handlePrevious);

		return () => {
			buttonNext.removeEventListener('click', handleNext);
			buttonPrevious.removeEventListener('click', handlePrevious);
			clearTimeout(timeout);
			cancelAnimationFrame(frame);
		};
	});
</script>

<div class="layout" bind:this={widget}>
	<canvas
		style="display: block; inline-size: 100%; max-inline-size: 500px;"
		width="500"
		height="250"
	/>
	<p>Assemble</p>
	<div class="controls">
		<button aria-label="Previous step" data-action="prev" disabled>
			<svg aria-hidden="true" width="1em" height="1em" viewBox="-3.75 -6.75 7.5 13.5">
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -3.25 6.25 -1.75 6.25 A 5 5 0 0 0 -1.75 -3.75 L -3.25 -3.75 -0.75 -6.25 -3.25 -3.75 -0.75 -1.25"
				/>
			</svg>
		</button>
		<button aria-label="Next step" data-action="next" disabled>
			<svg aria-hidden="true" width="1em" height="1em" viewBox="-3.75 -6.75 7.5 13.5">
				<path
					transform="scale(-1 1)"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -3.25 6.25 -1.75 6.25 A 5 5 0 0 0 -1.75 -3.75 L -3.25 -3.75 -0.75 -6.25 -3.25 -3.75 -0.75 -1.25"
				/>
			</svg>
		</button>
	</div>
</div>

<style>
	.layout {
		--_color-000: hsl(210 12% 10%);
		--_color-100: hsl(220 9% 19%);
		--_color-200: hsl(219 9% 36%);
		--_color-300: hsl(210 98% 95%);
		max-inline-size: 32rem;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 2rem;
		border-radius: 1rem;
		color: var(--_color-300, hsl(0 0% 95));
		background: var(--_color-000, hsl(0 0% 10%));
	}

	.controls {
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
		gap: 0.5rem;
	}

	p {
		min-block-size: 1lh;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.05rem;
		padding: 0.5rem 1rem;
		color: var(--_color-300, hsl(0 0% 95));
		background: var(--_color-200, hsl(0 0% 30%));
		border-radius: 1e5px;
	}

	button {
		display: block;
		inline-size: 2.5rem;
		block-size: 2.5rem;
		padding: 0.6rem;
		color: var(--_color-300, hsl(0 0% 95));
		background: var(--_color-200, hsl(0 0% 30%));
		border: none;
		border-radius: 1e5px;
		transition-property: opacity, border-block-end-width;
		transition-duration: 0.2s, 0.1s;
		transition-timing-function: ease-in-out;
	}

	button > svg {
		display: block;
		inline-size: 100%;
		block-size: 100%;
	}

	p,
	button {
		border-block-end: 0.2rem solid var(--_color-100, hsl(0 0% 20%));
		transform: perspective(200px) rotateX(10deg);
		transform-origin: 50% 100%;
	}

	button:disabled {
		opacity: 0.4;
	}

	button:not(:disabled):active {
		border-block-end-width: 0;
	}

	.layout {
		background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">\
      <path fill="none" stroke="hsl(0 0% 100%)" stroke-opacity="0.1" stroke-width="0.1" d="M 0.25 0 A 0.25 0.25 0 0 1 0 0.25 M 1 0 1 1 0 1 M 0 2.5 0.5 2 0.75 2 A 0.25 0.25 0 0 1 1.25 2 0.25 0.25 0 0 1 0.75 2 M 0 4 0.5 4 2 2.5 2 0 M 0 5 0.75 5 A 0.25 0.25 0 0 1 1.25 5 0.25 0.25 0 0 1 0.75 5 M 0 5.75 A 0.25 0.25 0 0 1 0 6.25 M 0 7 2 7 2 10 M 0 8 0.75 8 A 0.25 0.25 0 0 1 1.25 8 0.25 0.25 0 0 1 0.75 8 M 0 9 1 9 1 10 M 0 9.75 A 0.25 0.25 0 0 1 0.25 10 M 3 0 3 0.75 A 0.25 0.25 0 0 1 3 1.25 0.25 0.25 0 0 1 3 0.75 M 2.25 6 A 0.25 0.25 0 0 1 1.75 6 0.25 0.25 0 0 1 2.25 6 L 3 6 3 10 M 5 1.25 A 0.25 0.25 0 0 1 5 0.75 0.25 0.25 0 0 1 5 1.25 L 5 2.5 3.5 4 2.25 4 A 0.25 0.25 0 0 1 1.75 4 0.25 0.25 0 0 1 2.25 4 M 6 2.25 A 0.25 0.25 0 0 1 6 1.75 0.25 0.25 0 0 1 6 2.25 L 6 3.5 4.5 5 3.25 5 A 0.25 0.25 0 0 1 2.75 5 0.25 0.25 0 0 1 3.25 5 M 6 0 4 0 4 2 3.25 2 A 0.25 0.25 0 0 1 2.75 2 0.25 0.25 0 0 1 3.25 2 M 7 10 7 9 6 9 6 10 4 10 M 7 0 7 0.75 A 0.25 0.25 0 0 1 7 1.25 0.25 0.25 0 0 1 7 0.75 M 10 2.5 9.5 3 8.25 3 A 0.25 0.25 0 0 1 7.75 3 0.25 0.25 0 0 1 8.25 3 M 10 4 7 4 7 2.25 A 0.25 0.25 0 0 1 7 1.75 A 0.25 0.25 0 0 1 7 2.25 M 8 0 8 2 8.75 2 A 0.25 0.25 0 0 1 9.25 2 0.25 0.25 0 0 1 8.75 2 M 9 0 9 1 10 1 M 9.75 0 A 0.25 0.25 0 0 0 10 0.25 M 10 5 5.5 5 4 6.5 4 8.75 A 0.25 0.25 0 0 1 4 9.25 0.25 0.25 0 0 1 4 8.75 M 9 6 6.25 6 A 0.25 0.25 0 0 1 5.75 6 0.25 0.25 0 0 1 6.25 6 M 5 7 7.75 7 A 0.25 0.25 0 0 1 8.25 7 0.25 0.25 0 0 1 7.75 7 M 5.25 8 A 0.25 0.25 0 0 1 4.75 8 0.25 0.25 0 0 1 5.25 8 L 8 8 8 10 M 10 5.75 A 0.25 0.25 0 0 0 10 6.25 M 10 7 9.25 7 A 0.25 0.25 0 0 1 8.75 7 0.25 0.25 0 0 1 9.25 7 M 10 8 9.25 8 A 0.25 0.25 0 0 1 8.75 8 0.25 0.25 0 0 1 9.25 8 M 10 9 9 9 9 10 M 10 9.75 A 0.25 0.25 0 0 0 9.75 10" />\
  </svg>');
		background-size: 25%;
	}
</style>
