<script>
	import { onMount } from 'svelte';
	import { Anchor, Box, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const layers = [
			{
				colors: {
					main: 'hsl(210 10% 23%)',
					light: 'hsl(210 9% 31%)',
					dark: 'hsl(214 14% 10%)'
				},
				path: 'M 5 0 h 1 M 7 0 h 2 M 10 0 h 2 M 2 1 h 3 M 6 1 h 1 M 9 1 h 1 M 12 1 h 1 M 1 2 h 1 M 12 2 h 2 M 1 3 h 1 M 8 3 h 2 M 14 3 h 1 M 0 4 h 1 M 7 4 h 1 M 10 4 h 1 M 14 4 h 1 M 0 5 h 1 M 6 5 h 3 M 11 5 h 1 M 15 5 h 1 M 0 6 h 1 M 5 6 h 1 M 8 6 h 1 M 11 6 h 1 M 15 6 h 1 M 0 7 h 1 M 5 7 h 1 M 7 7 h 2 M 11 7 h 2 M 14 7 h 1 M 0 8 h 1 M 6 8 h 1 M 10 8 h 1 M 12 8 h 1 M 14 8 h 1 M 0 9 h 1 M 7 9 h 3 M 14 9 h 1 M 1 10 h 1 M 13 10 h 1 M 1 11 h 1 M 6 11 h 2 M 10 11 h 3 M 2 12 h 1 M 4 12 h 2 M 7 12 h 2 M 10 12 h 2 M 2 13 h 3 M 8 13 h 3'
			},
			{
				colors: {
					main: 'hsl(210 16% 93%)'
				},
				path: 'M 5 1 h 1 M 7 1 h 2 M 10 1 h 2 M 2 2 h 10 M 2 3 h 3 M 6 3 h 2 M 10 3 h 4 M 1 4 h 1 M 3 4 h 4 M 11 4 h 3 M 1 5 h 5 M 12 5 h 3 M 1 6 h 4 M 14 6 h 1 M 1 7 h 2 M 4 7 h 1 M 13 7 h 1 M 1 8 h 5 M 11 8 h 1 M 13 8 h 1 M 1 9 h 6 M 11 9 h 3 M 2 10 h 8 M 11 10 h 2 M 2 11 h 4 M 8 11 h 2'
			},
			{
				colors: {
					main: 'hsl(210 7% 56%)'
				},
				path: 'M 5 3 h 1 M 2 4 h 1 M 8 4 h 2 M 9 5 h 2 M 6 6 h 2 M 9 6 h 2 M 12 6 h 2 M 3 7 h 1 M 6 7 h 1 M 9 7 h 2 M 7 8 h 3 M 10 9 h 1 M 10 10 h 1 M 3 12 h 1 M 9 12 h 1'
			}
		].map(({ colors, path }) => {
			const boxes = path
				.slice(1)
				.split(/M/)
				.map((d) => {
					const [x, y, width] = d.match(/\d+/g).map((d) => parseInt(d));
					const height = 1;
					const depth = 1;
					const translate = {
						x: x + width / 2,
						y: y + height / 2
					};
					return {
						width,
						height,
						depth,
						translate
					};
				});

			const { main: color } = colors;
			const rightFace = colors.light || color;
			const leftFace = colors.dark || color;

			return {
				color,
				rightFace,
				leftFace,
				boxes
			};
		});

		const root = new Anchor();

		const origin = new Anchor({
			addTo: root,
			translate: {
				x: -8,
				y: -6.5
			}
		});

		for (const { color, rightFace, leftFace, boxes } of layers) {
			for (const { width, height, depth, translate } of boxes) {
				new Box({
					addTo: origin,
					color,
					rightFace,
					leftFace,
					stroke: 0,
					width,
					height,
					depth,
					translate
				});
			}
		}

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 25;

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

		const translate = (angle) => Math.abs(angle - TAU / 2) * 0.1 * -1;
		root.rotate.y = TAU / 8;
		root.translate.y = translate(root.rotate.y);

		root.updateGraph();
		render();

		let frame = null;

		const animate = () => {
			root.rotate.y = (root.rotate.y + 0.02) % TAU;
			root.translate.y = translate(root.rotate.y);

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

<canvas bind:this={element} style="display: block;" width="400" height="400" />
