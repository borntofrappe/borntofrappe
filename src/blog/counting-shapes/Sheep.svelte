<script>
	import { onMount } from 'svelte';
	import { Anchor, Box, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const layers = [
			{
				color: 'hsl(210 9% 31%)',
				path: 'M 5 2 h 1 M 7 2 h 2 M 10 2 h 2 M 2 3 h 3 M 6 3 h 1 M 9 3 h 1 M 12 3 h 1 M 1 4 h 1 M 12 4 h 2 M 1 5 h 1 M 8 5 h 2 M 14 5 h 1 M 0 6 h 1 M 7 6 h 1 M 10 6 h 1 M 14 6 h 1 M 0 7 h 1 M 6 7 h 3 M 11 7 h 1 M 15 7 h 1 M 0 8 h 1 M 5 8 h 1 M 8 8 h 1 M 11 8 h 1 M 15 8 h 1 M 0 9 h 1 M 5 9 h 1 M 7 9 h 2 M 11 9 h 2 M 14 9 h 1 M 0 10 h 1 M 6 10 h 1 M 10 10 h 1 M 12 10 h 1 M 14 10 h 1 M 0 11 h 1 M 7 11 h 3 M 14 11 h 1 M 1 12 h 1 M 13 12 h 1 M 1 13 h 1 M 6 13 h 2 M 10 13 h 3 M 2 14 h 1 M 4 14 h 2 M 7 14 h 2 M 10 14 h 2 M 2 15 h 3 M 8 15 h 3'
			},
			{
				color: 'hsl(210 16% 93%)',
				path: 'M 5 3 h 1 M 7 3 h 2 M 10 3 h 2 M 2 4 h 10 M 2 5 h 3 M 6 5 h 2 M 10 5 h 4 M 1 6 h 1 M 3 6 h 4 M 11 6 h 3 M 1 7 h 5 M 12 7 h 3 M 1 8 h 4 M 14 8 h 1 M 1 9 h 2 M 4 9 h 1 M 13 9 h 1 M 1 10 h 5 M 11 10 h 1 M 13 10 h 1 M 1 11 h 6 M 11 11 h 3 M 2 12 h 8 M 11 12 h 2 M 2 13 h 4 M 8 13 h 2'
			},
			{
				color: 'hsl(210 7% 56%)',
				path: 'M 5 5 h 1 M 2 6 h 1 M 8 6 h 2 M 9 7 h 2 M 6 8 h 2 M 9 8 h 2 M 12 8 h 2 M 3 9 h 1 M 6 9 h 1 M 9 9 h 2 M 7 10 h 3 M 10 11 h 1 M 10 12 h 1 M 3 14 h 1 M 9 14 h 1'
			}
		].map(({ color, path }) => {
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

			return {
				color,
				boxes
			};
		});

		const root = new Anchor();

		const origin = new Anchor({
			addTo: root,
			translate: {
				x: -8,
				y: -9
			}
		});

		for (const { color, boxes } of layers) {
			for (const { width, height, depth, translate } of boxes) {
				new Box({
					addTo: origin,
					color,
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
			root.rotate.y = (root.rotate.y + 0.03) % TAU;
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
