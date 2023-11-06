<script>
	import { onMount } from 'svelte';
	import { Anchor, Group, Box, Shape, Hemisphere, easeInOut, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const colors = {
			'see-saw': ['hsl(333 22% 54%)', 'hsl(344 43% 65%)'],
			peg: ['hsl(344 26% 46%)', 'hsl(8 56% 66%)'],
			face: ['hsl(25 37% 46%)', 'hsl(23 46% 72%)'],
			eye: ['hsl(288 24% 29%)'],
			'left-character': ['hsl(108 22% 54%)', 'hsl(118 43% 65%)'],
			'right-character': ['hsl(53 22% 54%)', 'hsl(54 43% 65%)']
		};

		const stroke = 1;

		const root = new Anchor({
			rotate: {
				x: -0.25,
				y: -0.5
			}
		});

		const seeSaw = new Box({
			addTo: root,
			color: colors['see-saw'][0],
			topFace: colors['see-saw'][1],
			bottomFace: colors['see-saw'][1],
			stroke,
			width: 40,
			height: 2,
			depth: 6
		});

		const peg = new Anchor();

		const back = new Shape({
			addTo: peg,
			color: colors['peg'][0],
			stroke,
			fill: true,
			path: [
				{ x: 0, y: 0, z: 0 },
				{ x: 3, y: 4, z: 0 },
				{ x: -3, y: 4, z: 0 }
			]
		});

		back.copy({
			translate: {
				z: 6
			}
		});

		new Shape({
			addTo: peg,
			color: colors['peg'][0],
			stroke,
			fill: true,
			path: [
				{ x: 3, y: 4, z: 0 },
				{ x: 3, y: 4, z: 6 },
				{ x: -3, y: 4, z: 6 },
				{ x: -3, y: 4, z: 0 }
			]
		});

		const side = new Shape({
			addTo: peg,
			color: colors['peg'][1],
			stroke,
			fill: true,
			path: [
				{ x: 0, y: 0, z: 0 },
				{ x: 0, y: 0, z: 6 },
				{ x: -3, y: 4, z: 6 },
				{ x: -3, y: 4, z: 0 }
			]
		});

		side.copy({
			scale: { x: -1 }
		});

		peg.copyGraph({
			addTo: root,
			translate: {
				z: seeSaw.depth / 2 + stroke
			}
		});

		peg.copyGraph({
			addTo: root,
			translate: {
				z: (seeSaw.depth / 2 + stroke) * -1
			},
			rotate: {
				y: TAU / 2
			}
		});

		const characters = new Group({
			addTo: seeSaw,
			translate: {
				y: (seeSaw.height / 2 + stroke) * -1
			}
		});

		const face = new Anchor();

		new Hemisphere({
			addTo: face,
			color: colors['face'][1],
			stroke,
			diameter: 3 + stroke / 2,
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		new Hemisphere({
			addTo: face,
			color: colors['face'][0],
			stroke,
			diameter: 3 + stroke / 2,
			rotate: {
				x: TAU / 4
			}
		});

		const eye = new Shape({
			color: colors['eye'][0],
			stroke: 0.2 + stroke / 2
		});

		eye.copy({
			addTo: face,
			translate: {
				x: (0.3 + stroke / 2) * -1,
				y: 0.5 + stroke / 2,
				z: 1 + stroke
			}
		});

		eye.copy({
			addTo: face,
			translate: {
				x: 0.3 + stroke / 2,
				y: 0.5 + stroke / 2,
				z: 1 + stroke
			}
		});

		const rightCharacter = new Anchor({
			addTo: characters,
			translate: {
				x: 14
			}
		});

		const rightBase = new Shape({
			addTo: rightCharacter,
			color: colors['right-character'][0],
			stroke,
			fill: true,
			path: [
				{ x: 0, y: 0, z: -1.5 },
				{
					arc: [
						{ x: 1.5, y: 0, z: -1.5 },
						{ x: 1.5, y: 0, z: 0 }
					]
				},
				{
					arc: [
						{ x: 1.5, y: 0, z: 1.5 },
						{ x: 0, y: 0, z: 1.5 }
					]
				},
				{
					arc: [
						{ x: -1.5, y: 0, z: 1.5 },
						{ x: -1.5, y: 0, z: 0 }
					]
				},
				{
					arc: [
						{ x: -1.5, y: 0, z: -1.5 },
						{ x: 0, y: 0, z: -1.5 }
					]
				}
			]
		});

		rightBase.copy({
			color: colors['right-character'][1],
			translate: {
				y: 3 * -1
			}
		});

		const rightCore = new Anchor({
			addTo: rightBase,
			rotate: {
				y: 0.5
			}
		});

		const rightArc = new Shape({
			addTo: rightCore,
			color: colors['right-character'][0],
			stroke,
			fill: true,
			path: [
				{ x: 0, y: 0, z: -1.5 },
				{ x: 0, y: -3, z: -1.5 },
				{
					arc: [
						{ x: 1.5, y: -3, z: -1.5 },
						{ x: 1.5, y: -3, z: 0 }
					]
				},
				{ x: 1.5, y: 0, z: 0 },
				{
					arc: [
						{ x: 1.5, y: 0, z: -1.5 },
						{ x: 0, y: 0, z: -1.5 }
					]
				}
			]
		});

		rightArc.copy({
			rotate: {
				y: TAU / 4
			}
		});

		rightArc.copy({
			color: colors['right-character'][1],
			rotate: {
				y: TAU / 2
			}
		});

		rightArc.copy({
			color: colors['right-character'][1],
			rotate: {
				y: (TAU * 3) / 4
			}
		});

		face.copyGraph({
			addTo: rightCharacter,
			translate: {
				y: (5.2 + stroke) * -1
			},
			rotate: {
				y: TAU / 4
			}
		});

		const leftCharacter = new Anchor({
			addTo: characters,
			translate: {
				x: -14
			}
		});

		new Shape({
			addTo: leftCharacter,
			color: colors['left-character'][0],
			stroke,
			fill: true,
			path: [
				{ x: -1.5, y: 0, z: -1.5 },
				{ x: 1.5, y: 0, z: -1.5 },
				{ x: 1.5, y: 0, z: 1.5 },
				{ x: -1.5, y: 0, z: 1.5 }
			]
		});

		new Shape({
			addTo: leftCharacter,
			color: colors['left-character'][0],
			stroke,
			fill: true,
			path: [
				{ x: 1.5, y: 0, z: -1.5 },
				{ x: 1.5, y: -3, z: -1.5 },
				{ x: 1.5, y: -3, z: 1.5 },
				{ x: 1.5, y: 0, z: 1.5 }
			]
		});

		const leftBack = new Shape({
			addTo: leftCharacter,
			color: colors['left-character'][0],
			stroke,
			fill: true,
			path: [
				{ x: -1.5, y: 0, z: -1.5 },
				{
					arc: [
						{ x: -1.5, y: -3, z: -1.5 },

						{ x: 1.5, y: -3, z: -1.5 }
					]
				},
				{ x: 1.5, y: 0, z: -1.5 }
			]
		});

		leftBack.copy({
			translate: {
				z: 3
			}
		});

		new Shape({
			addTo: leftCharacter,
			color: colors['left-character'][1],
			stroke,
			fill: true,
			path: [
				{ x: -1.5, y: 0, z: -1.5 },
				{
					arc: [
						{ x: -1.5, y: -3, z: -1.5 },

						{ x: 1.5, y: -3, z: -1.5 }
					]
				},
				{ x: 1.5, y: -3, z: 1.5 },
				{
					arc: [
						{ x: -1.5, y: -3, z: 1.5 },

						{ x: -1.5, y: 0, z: 1.5 }
					]
				}
			]
		});

		const leftFace = face.copyGraph({
			addTo: leftCharacter,
			translate: {
				x: 1.5,
				y: (5.2 + stroke) * -1
			},
			rotate: {
				y: (TAU / 4) * -1
			}
		});

		leftFace.children[leftFace.children.length - 1].visible = false;

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 10;

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

		root.translate.y = 3;
		seeSaw.rotate.z = 0.15;
		root.updateGraph();
		render();

		let frame = null;

		const z = seeSaw.rotate.z * 2;
		let ticker = 0;
		let direction = 1;
		const cycle = 100;

		const animate = () => {
			ticker += direction;
			if (ticker >= cycle) {
				ticker = cycle;
				direction = -1;
			} else if (ticker <= 0) {
				ticker = 0;
				direction = 1;
			}

			const offset = 0.5 - easeInOut(ticker / cycle);
			seeSaw.rotate.z = z * offset;

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

<canvas bind:this={element} style="display: block;" width="400" height="220" />
