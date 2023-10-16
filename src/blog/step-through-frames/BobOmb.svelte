<script>
	import { onMount } from 'svelte';
	import { Anchor, Rect, Shape, Box, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 9;

		const colors = {
			bomb: {
				black: 'hsl(205 58% 15%)',
				white: 'hsl(0 0% 99%)',
				accent: 'hsl(43 82% 62%)'
			},
			screen: {
				display: ['hsl(39 28% 78%)', 'hsl(60 4% 32%)', 'hsl(72 14% 59%)'],
				led: ['hsl(96 6% 17%)', 'hsl(358 73% 61%)']
			},
			box: ['hsl(70 10% 34%)', 'hsl(73 12% 42%)']
		};

		const stroke = 4;
		const padding = 3;
		const inset = 0.5;
		const notch = 5;

		const root = new Anchor();

		const x = (width / zoom - stroke) / 2;
		const y = (height / zoom - stroke) / 2;

		const outline = new Shape({
			addTo: root,
			color: colors.screen.display[1],
			stroke,
			path: [
				{ x: (x - inset - padding) * -1, y: (y - padding) * -1 },
				{ x: x - inset - padding, y: (y - padding) * -1 },
				{
					arc: [
						{ x: x - padding, y: (y - padding) * -1 },
						{ x: x - padding, y: (y - inset - padding) * -1 }
					]
				},
				{ x: x - padding, y: y - notch - padding },
				{
					arc: [
						{ x: x - padding, y: y - padding },
						{ x: x - notch - padding, y: y - padding }
					]
				},
				{ x: (x - inset - padding) * -1, y: y - padding },
				{
					arc: [
						{ x: (x - padding) * -1, y: y - padding },
						{ x: (x - padding) * -1, y: y - inset - padding }
					]
				},
				{ x: (x - padding) * -1, y: (y - inset - padding) * -1 },
				{
					arc: [
						{ x: (x - padding) * -1, y: (y - padding) * -1 },
						{ x: (x - inset - padding) * -1, y: (y - padding) * -1 }
					]
				}
			]
		});

		new Rect({
			addTo: outline,
			color: colors.screen.display[0],
			stroke: stroke + padding * 2,
			width: width / zoom,
			height: height / zoom,
			translate: { z: -5 }
		});

		outline.copy({
			color: colors.screen.display[2],
			stroke: 0,
			fill: true,
			translate: { z: -50 }
		});

		const power = new Shape({
			addTo: outline,
			color: colors.screen.led[0],
			stroke: 1.3,
			translate: {
				x: (x - padding) * -1,
				y: (y / 2) * -1
			}
		});

		const powerOn = power.copy({
			visible: false,
			color: colors.screen.led[1],
			stroke: 1.2
		});

		const bomb = new Shape({
			addTo: root,
			color: colors.bomb.black,
			stroke: 10,
			translate: {
				y: y - padding - stroke / 2 - 5 - 1
			},
			rotate: {
				y: -0.2
			}
		});

		const leg = new Shape({
			color: colors.bomb.accent,
			stroke: 1.5,
			closed: false,
			path: [
				{ x: -1.5, y: 0 },
				{
					arc: [
						{ x: 0, y: 0.75 },
						{ x: 1.5, y: 0 }
					]
				}
			]
		});

		const stepForward = new Anchor({
			addTo: bomb,
			translate: {
				z: -0.5
			},
			rotate: {
				z: 0.5
			}
		});

		const stepBack = new Anchor({
			addTo: bomb,
			translate: {
				z: 0.5
			},
			rotate: {
				z: -0.5
			}
		});

		[stepForward, stepBack].forEach((step) => {
			leg.copy({
				addTo: step,
				translate: {
					y: 5
				}
			});
		});

		const eyes = new Anchor({
			addTo: bomb,
			translate: {
				x: -3,
				y: -0.5,
				z: 5
			}
		});

		const eye = new Shape({
			color: colors.bomb.white,
			stroke: 1,
			closed: false,
			path: [
				{ x: 0, y: -1 },
				{
					arc: [
						{ x: -0.3, y: 0 },
						{ x: 0, y: 1 }
					]
				}
			]
		});

		[-1, 1].forEach((x) => {
			eye.copy({
				addTo: eyes,
				translate: {
					x
				}
			});
		});

		new Shape({
			addTo: bomb,
			color: colors.bomb.white,
			stroke: 1,
			closed: false,
			path: [
				{ x: -0.75, y: -0.75 },
				{
					arc: [
						{ x: 0.5, y: -0.25 },
						{ x: 0.75, y: 0.75 }
					]
				}
			],
			translate: {
				x: 2.5,
				y: -2.75,
				z: 5
			}
		});

		const motor = new Shape({
			addTo: bomb,
			color: colors.bomb.white,
			stroke: 1,
			closed: false,
			path: [{ x: 0 }, { x: 1.25 }],
			translate: {
				x: 5,
				z: -1
			}
		});

		new Shape({
			addTo: motor,
			color: colors.bomb.white,
			stroke: 1,
			closed: false,
			path: [{ y: -1.5 }, { y: 1.5 }],
			translate: {
				x: 1.25
			}
		});

		const size = 1.5;
		const strokeBox = 0.75;
		const gap = size + strokeBox;

		const box = new Box({
			width: size,
			height: size,
			depth: size,
			stroke: strokeBox,
			color: colors.box[1],
			leftFace: colors.box[0],
			rotate: {
				y: bomb.rotate.y
			}
		});

		const boxes = new Anchor({
			addTo: root,
			translate: {
				y: y - padding - stroke / 2 - size / 2 - strokeBox / 2
			}
		});

		[
			{ x: -8 },
			{ x: -8 - gap },
			{ x: -8 - gap * 2 },
			{ x: -8 - gap * 1.5, y: -gap },
			{ x: 4.5 },
			{ x: 9.5 },
			{ x: 9.5 + gap },
			{ x: 9.5 + gap / 2, y: -gap }
		].forEach(({ x, y }) => {
			box.copy({
				addTo: boxes,
				translate: {
					x,
					y
				}
			});
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

		root.updateGraph();
		render();

		let frame = null;

		let angleDirection = 1;
		const angleStart = Math.abs(stepForward.rotate.z);
		const angleEnd = angleStart * -1;

		const offsetStart = 35;
		const offsetEnd = offsetStart * -1;

		const animate = () => {
			motor.rotate.x = (motor.rotate.x + 0.08) % TAU;

			stepForward.rotate.z -=
				(0.005 + (0.1 * (angleStart - Math.abs(stepForward.rotate.z))) / angleStart) *
				angleDirection;
			stepBack.rotate.z = stepForward.rotate.z * -1;

			bomb.translate.x -= 0.2;
			bomb.translate.z = bomb.translate.x * -1;

			if (stepForward.rotate.z <= angleEnd) {
				stepForward.rotate.z = angleEnd;
				angleDirection *= -1;
			} else if (stepForward.rotate.z >= angleStart) {
				stepForward.rotate.z = angleStart;
				angleDirection *= -1;
			}

			if (bomb.translate.x <= offsetEnd) {
				bomb.translate.x = offsetStart;
				bomb.translate.z = offsetStart * -1;
			}

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
			bomb.translate.x = offsetStart;
			powerOn.visible = true;

			root.updateGraph();
			render();

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

<canvas bind:this={element} style="display: block;" width="400" height="320" />
