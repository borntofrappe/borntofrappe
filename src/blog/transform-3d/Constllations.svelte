<script>
	import constellations from './constellations.js';
	import { onMount } from 'svelte';
	import { Shape, Anchor, TAU } from 'zdog';

	const diameter = 180;
	const black = 'hsl(0 0% 19%)';
	const grey = 'hsl(0 0% 31%)';
	const accent = 'hsl(39 100% 48%)';

	const stars = constellations
		.trim()
		.split('\n')
		.reduce((acc, curr) => {
			const [ascension, declination] = curr.trim().split('|');
			const [hh, mm, ss] = ascension
				.trim()
				.split(' ')
				.map((d) => parseFloat(d));

			return [
				...acc,
				{
					ascension: {
						hh,
						mm,
						ss
					},
					declination: parseFloat(declination.trim())
				}
			];
		}, []);

	const ascensionToDegrees = ({ hh, mm, ss }) => (hh + mm / 60 + ss / 3600) * 15;
	const degreesToRad = (deg) => (deg / 180) * Math.PI;

	let element = null;

	onMount(() => {
		const root = new Anchor();

		const anchor = new Anchor({
			addTo: root
		});

		new Shape({
			addTo: root,
			color: black,
			stroke: 0,
			fill: true,
			path: [
				{ x: -250, y: -130 },
				{
					arc: [
						{ x: -250, y: -160 },
						{ x: -220, y: -160 }
					]
				},
				{ x: 220, y: -160 },
				{
					arc: [
						{ x: 250, y: -160 },
						{ x: 250, y: -130 }
					]
				},
				{ x: 250, y: 130 },
				{
					arc: [
						{ x: 250, y: 160 },
						{ x: 220, y: 160 }
					]
				},
				{ x: -220, y: 160 },
				{
					arc: [
						{ x: -250, y: 160 },
						{ x: -250, y: 130 }
					]
				},
				{ x: -250, y: 130 }
			],
			translate: {
				z: -diameter
			}
		});

		new Shape({
			addTo: root,
			stroke: diameter,
			color: grey
		});

		for (const { ascension, declination } of stars) {
			const x = degreesToRad(declination);
			const y = degreesToRad(ascensionToDegrees(ascension)) * -1;

			const a1 = new Anchor({
				addTo: anchor,
				rotate: { y }
			});

			const a2 = new Anchor({
				addTo: a1,
				rotate: { x }
			});

			new Shape({
				addTo: a2,
				color: accent,
				stroke: 4,
				translate: {
					z: diameter
				}
			});
		}

		const context = element.getContext('2d');
		const { width, height } = element;

		context.lineJoin = 'round';
		context.lineCap = 'round';

		const render = () => {
			context.clearRect(0, 0, width, height);
			context.save();
			context.translate(width / 2, height / 2);
			root.renderGraphCanvas(context);
			context.restore();
		};

		root.updateGraph();
		render();

		let frame = null;

		const animate = () => {
			anchor.rotate.y = (anchor.rotate.y + 0.01) % TAU;

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
		observer.observe(element);

		return () => {
			cancelAnimationFrame(frame);
			observer.unobserve(element);
		};
	});
</script>

<canvas bind:this={element} style="display: block;" width="500" height="320" />
