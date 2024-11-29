<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape } from 'zdog';

	let element = null;

	onMount(() => {
		const PI = Math.PI;
		const TAU = PI * 2;

		const colors = {
			line: 'hsl(22 35% 86%)',
			spheres: ['hsl(343 87% 68%)', 'hsl(198 71% 74%)']
		};

		const strokes = {
			line: 5,
			spheres: 15
		};

		const copies = 20;
		const offset = 40;
		const loops = 1.5;
		const length = 300;

		const deltaAngle = (TAU * loops) / copies;
		const deltaY = length / (copies - 1);

		const points = Array(copies)
			.fill()
			.map((_, i) => {
				const a1 = deltaAngle * i;
				const x1 = Math.cos(a1) * offset;
				const z1 = Math.sin(a1) * offset;
				const a2 = a1 + PI;
				const x2 = Math.cos(a2) * offset;
				const z2 = Math.sin(a2) * offset;

				const y = deltaY * i - length / 2;
				return {
					x1,
					z1,
					x2,
					z2,
					y
				};
			});

		const root = new Anchor();

		const sequence = new Anchor({
			addTo: root
		});

		for (const { x1, z1, x2, z2, y } of points) {
			const anchor = new Anchor({
				addTo: sequence,
				translate: {
					y
				}
			});

			new Shape({
				addTo: anchor,
				color: colors.line,
				stroke: strokes.line,
				path: [
					{ x: x1, z: z1 },
					{ x: x2, z: z2 }
				],
				scale: 0.75
			});

			new Shape({
				addTo: anchor,
				color: colors.spheres[0],
				stroke: strokes.spheres,
				translate: {
					x: x1,
					z: z1
				}
			});

			new Shape({
				addTo: anchor,
				color: colors.spheres[1],
				stroke: strokes.spheres,
				translate: {
					x: x2,
					z: z2
				}
			});
		}

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 1.5;

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

		root.rotate.x = -0.1;
		root.rotate.z = 0.3;
		root.updateGraph();
		render();

		let frame = null;

		const animate = () => {
			sequence.rotate.y = (sequence.rotate.y + 0.02) % TAU;

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
	style="display: block; inline-size: 100%; max-inline-size: 300px; margin-inline: auto;"
	width="300"
	height="500"
/>
