<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape } from 'zdog';

	let widget = null;

	onMount(() => {
		const canvas = widget.querySelector('canvas');
		const context = canvas.getContext('2d');
		const { width, height } = canvas;

		const colors = [
			{
				h: 238,
				s: 92,
				l: 69
			},
			{
				h: 232,
				s: 90,
				l: 68
			},
			{
				h: 178,
				s: 98,
				l: 49
			}
		];

		const strokes = {
			core: 10,
			particle: 1.6,
			lightning: [3, 0.05]
		};

		const { h, s, l } = colors[0];
		const { h: h1, s: s1, l: l1 } = colors[1];
		const { h: h2, s: s2, l: l2 } = colors[2];
		const color = `hsl(${h}, ${s}%, ${l}%)`;
		const color1 = `hsl(${h1}, ${s1}%, ${l1}%)`;

		const diameter = Math.min(width, height);

		const PI = Math.PI;
		const TAU = PI * 2;

		const points = Math.sqrt(100);
		const offset = diameter / 2.5;
		const particles = Array(points)
			.fill()
			.map((_, i, { length }) => {
				const theta = PI * -1 + (TAU / length) * i;
				return [
					...Array(points)
						.fill()
						.map((_, j, { length }) => {
							const a = PI * -1 + (TAU / length) * j;
							const x = offset * Math.sin(theta) * Math.cos(a);
							const y = offset * Math.sin(theta) * Math.sin(a);
							const z = offset * Math.cos(theta);

							return {
								x,
								y,
								z
							};
						})
				];
			})
			.flat();

		const start = 0;
		const end = offset;
		const lines = 3;
		const offsets = [5, 12];
		const scales = [0.7, 1];

		const [stroke1, stroke2] = strokes.lightning;
		const [offset1, offset2] = offsets;
		const [scale1, scale2] = scales;

		const lightnings = 27;
		const threshold = 6;

		const getRandomOffset = (max = 10) => Math.floor(Math.random() * (max * 2)) - max;
		const roundPercentage = (n) => Math.floor(n * 100) / 100;

		const getRandomMetrics = () => {
			const scale = scale1 + roundPercentage(Math.random() * (scale2 - scale1));
			const x = roundPercentage(Math.random() * TAU);
			const y = roundPercentage(Math.random() * TAU);
			const z = roundPercentage(Math.random() * TAU);
			const counter = Math.floor(Math.random() * threshold) * -1;

			return {
				x,
				y,
				z,
				scale,
				counter
			};
		};

		const segments = [
			{ x: start, y: 0, z: 0 },
			...Array(lines)
				.fill()
				.map((_, i, { length }) => {
					const x = start + Math.floor(((end - start) / (length + 1)) * (i + 1));

					const max = offset1 + ((offset2 - offset1) / length) * (length - i - 1);
					const y = getRandomOffset(max);
					const z = getRandomOffset(max);
					return {
						x,
						y,
						z
					};
				}),
			{ x: end, y: 0, z: 0 }
		].reduce((acc, curr, i, array) => {
			if (i === 0) return acc;

			const { length } = array;
			const { x: x1, y: y1, z: z1 } = array[i - 1];
			const { x, y, z } = curr;

			const h = h1 + Math.floor((h2 - h1) / length) * i;
			const s = s1 + Math.floor((s2 - s1) / length) * i;
			const l = l1 + Math.floor((l2 - l1) / length) * i;
			const color = `hsl(${h}, ${s}%, ${l}%)`;

			const stroke = stroke1 + roundPercentage(((stroke2 - stroke1) / length) * i);

			const path = [
				{ x: x1, y: y1, z: z1 },
				{ x, y, z }
			];
			return [
				...acc,
				{
					color,
					stroke,
					path
				}
			];
		}, []);

		const root = new Anchor();

		const core = new Shape({
			addTo: root,
			color,
			stroke: strokes.core
		});

		const sphere = new Anchor({
			addTo: root
		});

		for (const { x, y, z } of particles) {
			new Shape({
				addTo: sphere,
				color,
				stroke: strokes.particle,
				translate: {
					x,
					y,
					z
				}
			});
		}

		const cloud = new Anchor({
			addTo: root
		});

		const storm = Array(lightnings)
			.fill()
			.map((_, i) => {
				const { x, y, z, scale, counter } = getRandomMetrics();

				const anchor = new Anchor({
					addTo: cloud,
					rotate: {
						x,
						y,
						z
					},
					scale
				});

				for (const { color, stroke, path } of segments) {
					new Shape({
						addTo: anchor,
						color,
						stroke,
						path,
						visible: false
					});
				}

				return {
					anchor,
					counter
				};
			});

		context.lineJoin = 'round';
		context.lineCap = 'round';

		const render = () => {
			context.clearRect(0, 0, width, height);
			context.save();
			context.translate(width / 2, height / 2);
			root.renderGraphCanvas(context);
			context.restore();
		};

		sphere.rotate.x = (TAU / 12) * -1;
		sphere.rotate.y = TAU / 16;

		root.updateGraph();
		render();

		let state = 'wait';
		let frame = null;

		const handleReset = () => {
			for (const lightning of storm) {
				for (const child of lightning.anchor.children) {
					child.visible = false;
				}

				const { x, y, z, scale, counter } = getRandomMetrics();
				lightning.counter = counter;
				lightning.anchor.rotate = {
					x,
					y,
					z
				};
				lightning.anchor.scale = scale;
			}
		};

		const animate = () => {
			for (const lightning of storm) {
				lightning.counter++;
				if (lightning.counter > threshold) {
					const index = lightning.anchor.children.findIndex((child) => child.visible === false);
					if (index === -1) {
						for (const child of lightning.anchor.children) {
							child.visible = false;
						}

						const { x, y, z, scale, counter } = getRandomMetrics();
						lightning.counter = counter;
						lightning.anchor.rotate = {
							x,
							y,
							z
						};
						lightning.anchor.scale = scale;
					} else {
						lightning.counter = 0;
						lightning.anchor.children[index].visible = true;
					}
					root.updateGraph();
					render();
				}
			}

			frame = requestAnimationFrame(animate);
		};

		const handlePointerdown = () => {
			if (state !== 'wait') return;

			state = 'animate';

			core.color = color1;
			frame = requestAnimationFrame(animate);
		};

		const handlePointerlose = () => {
			core.color = color;
			handleReset();

			root.updateGraph();
			render();

			button.blur();

			state = 'wait';
			cancelAnimationFrame(frame);
		};

		const handleKeydown = (e) => {
			if (e.key !== ' ' || state !== 'wait') return;

			state = 'animate';

			core.color = color1;
			frame = requestAnimationFrame(animate);
		};

		const handleKeyup = (e) => {
			if (e.key !== ' ') return;

			core.color = color;
			handleReset();

			root.updateGraph();
			render();

			state = 'wait';
			cancelAnimationFrame(frame);
		};

		const handleBlur = () => {
			core.color = color;
			handleReset();

			root.updateGraph();
			render();

			state = 'wait';
			cancelAnimationFrame(frame);
		};

		const button = widget.querySelector('button');
		button.removeAttribute('disabled');

		button.addEventListener('pointerdown', handlePointerdown);
		button.addEventListener('pointerup', handlePointerlose);
		button.addEventListener('pointerleave', handlePointerlose);
		button.addEventListener('keydown', handleKeydown);
		button.addEventListener('keyup', handleKeyup);
		button.addEventListener('blur', handleBlur);

		return () => {
			cancelAnimationFrame(frame);

			button.removeEventListener('pointerdown', handlePointerdown);
			button.removeEventListener('pointerup', handlePointerlose);
			button.removeEventListener('pointerleave', handlePointerlose);
			button.removeEventListener('keydown', handleKeydown);
			button.removeEventListener('keyup', handleKeyup);
			button.removeEventListener('blur', handleBlur);
		};
	});
</script>

<div bind:this={widget}>
	<canvas
		style="display: block; inline-size: 100%; max-inline-size: 300px;"
		width="300px"
		height="300px"
	/>

	<button disabled aria-label="Press and hold to strike lightning">
		<svg
			aria-hidden="true"
			width="1em"
			height="1em"
			viewBox="6 4.358623027801514 89 92.6413803100586"
		>
			<defs>
				<linearGradient
					id="branching-out-gradient"
					gradientUnits="userSpaceOnUse"
					x1="0"
					y1="4.358623027801514"
					x2="0"
					y2="92.6413803100586"
				>
					<stop stop-color="hsl(178 98% 49%)" offset="0" />
					<stop stop-color="hsl(232 90% 68%)" offset="1" />
				</linearGradient>
			</defs>
			<g
				fill="none"
				stroke="url(#branching-out-gradient) currentColor"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M 36 87 C 46 76 51 63 51 47" />
				<path
					d="M 29 83 C 36 76 41 67 41 58 M 42 47 C 44 35 60 35 60 48 60 56 59 65 57 70 M 52 81 C 50 85 48 88 44 92"
				/>
				<path
					d="M 22 80 C 23 79 25 77 26 75 M 31 67 C 35 57 33 48 35 43 38 29 58 26 64 37 M 68 47 C 68 60 64 83 54 94"
				/>
				<path
					d="M 16 74 C 23 68 26 60 27 45 29 30 37 22 52 22 68 22 78 36 76 52 74 70 72 80 64 95"
				/>
				<path d="M 11 67 C 20 59 18 46 20 39 22 12 60 7 74 23  M 80 31 C 89 50 82 78 75 92" />
				<path
					d="M 8 58 C 15 49 8 31 21 19 M 31 11 C 60 -3 90 17 92 40 M 93 47 C 93 56 92 66 90 73"
				/>
			</g>
		</svg>
	</button>
</div>

<style>
	div {
		max-inline-size: max-content;
		margin-inline: auto;
		color: hsl(178 98% 49%);
		background: hsl(240 13% 9%);
		border-radius: 1rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}

	button {
		display: block;
		inline-size: 3rem;
		block-size: 3rem;
		padding: 0.4rem;
		border-radius: 1e5px;
		border: none;
		color: hsl(178 98% 49%);
		background: hsl(240 13% 16%);
	}

	button:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}

	@media (pointer: coarse) {
		button {
			inline-size: 4rem;
			block-size: 4rem;
			padding: 0.7rem;
		}
	}

	button > svg {
		inline-size: 100%;
		block-size: 100%;
	}

	button:disabled {
		opacity: 0.7;
	}

	button:not(:disabled) {
		transform-origin: 50% 80%;
		transition-property: scale, box-shadow;
		transition-duration: 0.07s;
		transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
		box-shadow: 0 0 1rem -0.6rem hsl(232 90% 68% / 0.5);
	}

	button g > path {
		opacity: 0;
		transition: opacity 0.3s cubic-bezier(0.37, 0, 0.63, 1);
		will-change: opacity;
	}

	button:not(:disabled):active {
		box-shadow: 0 0 0 0 hsl(258 92% 62% / 0.5);
		scale: 0.99;
	}

	button:not(:disabled):active g > path {
		opacity: 1;
	}

	button:active g > path:nth-child(1) {
		transition-delay: 0.05s;
	}

	button:active g > path:nth-child(2) {
		transition-delay: 0.1s;
	}

	button:active g > path:nth-child(3) {
		transition-delay: 0.15s;
	}

	button:active g > path:nth-child(4) {
		transition-delay: 0.2s;
	}

	button:active g > path:nth-child(5) {
		transition-delay: 0.25s;
	}

	button:active g > path:nth-child(6) {
		transition-delay: 0.3s;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
