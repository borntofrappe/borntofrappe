<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, Rect, Box, TAU } from 'zdog';

	import { points, lines } from './data.js';

	let widget = null;

	onMount(() => {
		const colors = {
			yellows: ['hsl(44 93% 57%)', 'hsl(39 93% 57%)', 'hsl(33 87% 55%)', 'hsl(27 76% 52%)'],
			reds: ['hsl(354 84% 57%)', 'hsl(346 65% 44%)', 'hsl(346 65% 42%)', 'hsl(346 65% 39%)']
		};

		const strokes = [1, 2, 4];
		const [, stroke] = strokes;

		const size = 50;
		const excess = 5;

		const root = new Anchor();

		const side = new Rect({
			width: size,
			height: size,
			stroke,
			fill: true
		});

		const strip = new Rect({
			width: size + stroke,
			height: size / 10,
			stroke,
			fill: true
		});

		side.copy({
			addTo: root,
			color: colors.yellows[3],
			translate: {
				z: (size / 2) * -1
			}
		});

		side.copy({
			addTo: root,
			color: colors.yellows[2],
			translate: {
				x: (size / 2) * -1
			},
			rotate: {
				y: TAU / 4
			}
		});

		side.copy({
			addTo: root,
			color: colors.yellows[1],
			translate: {
				z: size / 2
			}
		});

		side.copy({
			addTo: root,
			color: colors.yellows[0],
			translate: {
				x: size / 2
			},
			rotate: {
				y: TAU / 4
			}
		});

		strip.copy({
			addTo: root,
			color: colors.reds[3],
			translate: {
				z: size / 2 + stroke
			}
		});

		strip.copy({
			addTo: root,
			color: colors.reds[2],
			translate: {
				x: size / 2 + stroke
			},
			rotate: {
				y: TAU / 4
			}
		});

		new Shape({
			addTo: root,
			color: colors.reds[3],
			stroke,
			fill: true,
			path: [
				{ x: 0, y: -5 },
				{
					bezier: [
						{ x: 7, y: -11 },
						{ x: 12, y: -10 },
						{ x: 18, y: -8 }
					]
				},
				{
					bezier: [
						{ x: 18, y: -2 },
						{ x: 19, y: -1 },
						{ x: 14, y: 5 }
					]
				},
				{
					bezier: [
						{ x: 7, y: 5 },
						{ x: 7, y: 5 },
						{ x: 0, y: 1 }
					]
				},
				{
					bezier: [
						{ x: 8, y: 10 },
						{ x: 8, y: 10 },
						{ x: 13, y: 13 }
					]
				},
				{
					bezier: [
						{ x: 8, y: 14 },
						{ x: 8, y: 14 },
						{ x: 6, y: 18 }
					]
				},
				{
					bezier: [
						{ x: 3, y: 12 },
						{ x: 3, y: 12 },
						{ x: 0, y: 3 }
					]
				},
				{
					bezier: [
						{ x: -3, y: 12 },
						{ x: -3, y: 12 },
						{ x: -6, y: 18 }
					]
				},
				{
					bezier: [
						{ x: -8, y: 14 },
						{ x: -8, y: 14 },
						{ x: -13, y: 13 }
					]
				},
				{
					bezier: [
						{ x: -8, y: 10 },
						{ x: -8, y: 10 },
						{ x: 0, y: 1 }
					]
				},
				{
					bezier: [
						{ x: -7, y: 5 },
						{ x: -7, y: 5 },
						{ x: -14, y: 5 }
					]
				},
				{
					bezier: [
						{ x: -19, y: -1 },
						{ x: -18, y: -2 },
						{ x: -18, y: -8 }
					]
				},
				{
					bezier: [
						{ x: -12, y: -10 },
						{ x: -7, y: -11 },
						{ x: 0, y: -5 }
					]
				}
			],
			translate: {
				z: size / 2 + stroke
			}
		});

		const lid = new Box({
			addTo: root,
			color: colors.reds[2],
			frontFace: colors.reds[3],
			leftFace: colors.reds[1],
			rightFace: colors.reds[1],
			width: strip.width + excess,
			height: strip.height + excess,
			depth: strip.width + excess,
			stroke,
			fill: true,
			translate: {
				y: (size / 2 + stroke) * -1
			}
		});

		const present = new Anchor({
			addTo: root
		});

		new Shape({
			addTo: present,
			color: colors.reds[0],
			fill: true,
			stroke: strokes[2],
			path: points
		});

		for (const path of lines) {
			new Shape({
				addTo: present,
				color: colors.reds[0],
				stroke: strokes[0],
				path
			});
		}

		const element = widget.querySelector('canvas');
		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 3;

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

		const input = widget.querySelector('input[type="range"]');
		input.removeAttribute('disabled');

		const handleInput = (e) => {
			const value = parseFloat(e.target.value);

			root.translate.y = (value * size) / 2;
			root.translate.x = ((value * size) / 2) * -1;
			root.rotate.x = value * 0.3 * -1;
			root.rotate.y = value * 0.3;

			lid.translate.x = (value * size * 3) / 2;
			lid.translate.z = (value * size) / 2;
			lid.rotate.z = value * 1.8;

			present.translate.x = root.translate.x * -1;
			present.translate.y = ((value * size * 5) / 4) * -1;
			present.scale = value * 1.7;
			present.rotate.y = value * (TAU * 2 - root.rotate.y);

			root.updateGraph();
			render();
		};

		input.addEventListener('input', handleInput);

		return () => {
			input.removeEventListener('input', handleInput);
		};
	});
</script>

<div bind:this={widget}>
	<canvas
		style="display: block; inline-size: 100%; max-inline-size: 400px;"
		width="400"
		height="400"
	/>
	<label aria-label="Reach the 25th of December">
		<input disabled type="range" min="0" max="1" step="0.01" steo="0.01" value="0" />
		<svg aria-hidden="true" role="img" viewBox="0 0 9.5 9.5" width="1em" height="1em">
			<defs>
				<clipPath id="stamp-clip">
					<rect x="0.5" y="0.5" width="8.5" height="8.5" />
					<path
						id="stamp-border"
						d="M 0 0 0.5 0 A 0.5 0.5 0 0 0 1.5 0 L 2 0 A 0.5 0.5 0 0 0 3 0 L 3.5 0 A 0.5 0.5 0 0 0 4.5 0 L 5 0 A 0.5 0.5 0 0 0 6 0 L 6.5 0 A 0.5 0.5 0 0 0 7.5 0 L 8 0 A 0.5 0.5 0 0 0 9 0 L 9.5 0 9.5 0.5 0 0.5"
					/>
					<use transform="translate(9.5 0) rotate(90)" href="#stamp-border" />
					<use transform="translate(9.5 9.5) rotate(180)" href="#stamp-border" />
					<use transform="translate(0 9.5) rotate(-90)" href="#stamp-border" />
				</clipPath>
			</defs>
			<rect clip-path="url(#stamp-clip)" fill="hsl(354 84% 57%)" width="20" height="20" />
			<rect fill="hsl(346 65% 39%)" x="1.25" y="1.25" width="7" height="7" />
			<text
				font-family="serif"
				font-weight="700"
				font-size="5"
				text-anchor="middle"
				x="4.75"
				y="6.5"
				fill="hsl(0 0% 99%)"
				stroke="hsl(0 0% 99%)"
				stroke-width="0.1"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				25
			</text>
		</svg>
	</label>
</div>

<style>
	div > * + * {
		margin-block-start: 0.5rem;
	}

	label {
		display: flex;
		gap: 0.5rem;
	}

	label > input {
		flex-grow: 1;
		inline-size: 100%;
		accent-color: hsl(44 93% 57%);
	}

	label > svg {
		inline-size: 4rem;
		block-size: 4rem;
	}
</style>
