<script>
	import { onMount } from 'svelte';
	import { sineIn, backOut } from 'svelte/easing';
	import { Anchor, Shape, Ellipse, Cone, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const colors = {
			snowflake: [
				{ h: 209, s: 77, l: 43 },
				{ h: 207, s: 91, l: 64 }
			],
			stem: [
				{ h: 339, s: 69, l: 38 },
				{ h: 339, s: 76, l: 59 }
			],
			petals: ['hsl(339 68% 45%)', 'hsl(339 67% 52%)', 'hsl(339 76% 59%)'],
			soil: 'hsl(339 69% 38%)',
			particles: 'hsl(336 100% 94%)'
		};

		const strokes = {
			snowflake: 3,
			stem: 2,
			petals: 3,
			soil: 2,
			particles: 1,
			spikes: 1
		};

		const copies = {
			snowflake: 22,
			stem: 80,
			particles: 10,
			spikes: 4
		};

		const indexes = {
			petals: copies.stem - 1,
			particles: Array(copies.particles)
				.fill()
				.map((_, i, { length }) => Math.floor((copies.stem / (length + 1)) * (i + 1))),
			spikes: Array(copies.spikes)
				.fill()
				.map((_, i, { length }) => Math.floor((copies.stem / (length + 1)) * (i + 1)))
		};

		const diagonal = (55 ** 2 + 60 ** 2) ** 0.5;
		const ds = [
			'M 0 -10 -7.5 -20 0 -30 7.5 -20',
			'M 7.5 -5 15 -15 27.5 -15 20 -5',
			'M 7.5 5 15 15 27.5 15 20 5',
			'M 0 10 -7.5 20 0 30 7.5 20',
			'M -7.5 -5 -15 -15 -27.5 -15 -20 -5',
			'M -7.5 5 -15 15 -27.5 15 -20 5'
		];

		const d = 'M 0 0 C 10 25 -10 55 0 80';

		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

		const { h: h1, s: s1, l: l1 } = colors.snowflake[0];
		const { h: h2, s: s2, l: l2 } = colors.snowflake[1];

		const paths = ds.map((d) => {
			path.setAttribute('d', d);
			const totalLength = path.getTotalLength();

			const points = Array(copies.snowflake)
				.fill()
				.map((_, i, { length }) => {
					const distance = (totalLength / length) * i;
					const { x, y } = path.getPointAtLength(distance);

					const offset = ((x + 27.5) ** 2 + (y + 30) ** 2) ** 0.5 / diagonal;
					const h = Math.floor(h1 + (h2 - h1) * offset);
					const s = Math.floor(s1 + (s2 - s1) * offset);
					const l = Math.floor(l1 + (l2 - l1) * offset);
					const color = `hsl(${h} ${s}% ${l}%)`;

					return { x, y, color };
				});

			return points;
		});

		path.setAttribute('d', d);
		const totalLength = path.getTotalLength();

		const { h: h3, s: s3, l: l3 } = colors.stem[0];
		const { h: h4, s: s4, l: l4 } = colors.stem[1];

		const points = Array(copies.stem)
			.fill()
			.map((_, i, { length }) => {
				const distance = (totalLength / length) * i;
				const { x, y } = path.getPointAtLength(distance);

				const offset = distance / totalLength;
				const h = Math.floor(h3 + (h4 - h3) * offset);
				const s = Math.floor(s3 + (s4 - s3) * offset);
				const l = Math.floor(l3 + (l4 - l3) * offset);
				const color = `hsl(${h} ${s}% ${l}%)`;

				return { x, y: y * -1, color };
			});

		const root = new Anchor();

		const snowflake = new Anchor({
			addTo: root,
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		for (const points of paths) {
			for (let i = 0; i < points.length; i++) {
				const { x: x1, y: y1, color } = points[i];
				const { x: x2, y: y2 } = points[(i + 1) % points.length];
				new Shape({
					addTo: snowflake,
					color,
					stroke: strokes.snowflake,
					path: [
						{ x: x1, y: y1 },
						{ x: x2, y: y2 }
					]
				});
			}
		}

		new Ellipse({
			addTo: root,
			color: colors.soil,
			diameter: 4,
			stroke: strokes.soil,
			fill: true,
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		const stem = new Anchor({
			addTo: root
		});

		for (const { x, y, color } of points) {
			new Shape({
				addTo: stem,
				color,
				stroke: strokes.stem,
				translate: {
					x,
					y
				}
			});
		}

		const spikes = new Anchor({
			addTo: root
		});

		const spike = new Cone({
			stroke: strokes.spikes,
			diameter: 2.5,
			length: 3
		});

		for (const [i, index] of indexes.spikes.entries()) {
			const angle = i % 2 === 0 ? TAU / 4 : (TAU / 4) * -1;
			const { x, y, color } = points[index];
			spike.copy({
				addTo: spikes,
				color,
				translate: {
					x,
					y
				},
				rotate: {
					y: angle
				}
			});
		}

		const particles = new Anchor({
			addTo: root
		});

		for (const index of indexes.particles) {
			const { x, y } = points[index];
			new Shape({
				addTo: particles,
				color: colors.particles,
				stroke: strokes.particles,
				translate: {
					x: x * 3,
					y
				}
			});
		}

		const petals = new Anchor({
			addTo: root
		});

		const petal = new Shape({
			stroke: strokes.petals,
			fill: true,
			path: [
				{ x: 0, y: 0, z: 0 },
				{
					arc: [
						{ x: 20, y: 0, z: 0 },
						{ x: 20, y: -25, z: 0 }
					]
				},
				{
					arc: [
						{ x: 20, y: -25, z: 20 },
						{ x: 0, y: -25, z: 20 }
					]
				},
				{
					arc: [
						{ x: 0, y: 0, z: 20 },
						{ x: 0, y: 0, z: 0 }
					]
				}
			]
		});

		for (let i = 0; i < 4; i++) {
			const angle = (TAU / 4) * i;
			for (const [j, scales] of [
				[0.3, 1.3],
				[0.7, 1.15],
				[1, 1]
			].entries()) {
				const [s1, s2] = scales;
				petal.copy({
					addTo: petals,
					color: colors.petals[j],
					scale: {
						x: s1,
						y: s2,
						z: s1
					},
					rotate: {
						y: angle
					}
				});
			}
		}

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 3.7;

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

		petals.translate.y = -80;
		petals.rotate.x = 0.2;
		petals.rotate.y = -0.2;
		petals.rotate.z = 0.4;
		root.translate.y = height / 2 / zoom - 18;
		root.rotate.x = -0.5;

		root.updateGraph();
		render();

		for (const child of stem.children) {
			child.visible = false;
		}

		for (const child of spikes.children) {
			child.visible = false;
		}

		for (const child of particles.children) {
			child.visible = false;
		}

		petals.scale = 0;
		for (const child of petals.children) {
			child.visible = false;
		}

		const indexesMaps = {
			spikes: new Map(indexes.spikes.map((index, i) => [index, spikes.children[i]])),
			particles: new Map(indexes.particles.map((index, i) => [index, particles.children[i]]))
		};

		root.updateGraph();
		render();

		let frame = null;
		let ticker = 0;
		const cycles = [80, 200];
		let [, cycle] = cycles;
		const delay = 2000;

		const rotateZ = petals.rotate.z;
		const stemCount = stem.children.length;

		const animatePetals = () => {
			ticker++;

			if (ticker >= cycle) {
				cancelAnimationFrame(frame);
			} else {
				const t = backOut(ticker / cycle);
				petals.scale = t;
				petals.rotate.z = rotateZ + 1 * (1 - t);

				frame = requestAnimationFrame(animatePetals);
			}

			root.updateGraph();
			render();
		};

		const animateStem = () => {
			ticker++;

			if (ticker >= cycle) {
				ticker = 0;
				cycle = cycles[0];
				for (const child of petals.children) {
					child.visible = true;
				}
				frame = requestAnimationFrame(animatePetals);
			} else {
				const index = Math.floor(sineIn(ticker / cycle) * stemCount);

				stem.children[index].visible = true;
				if (indexesMaps.spikes.get(index)) {
					indexesMaps.spikes.get(index).visible = true;
				}
				if (indexesMaps.particles.get(index)) {
					indexesMaps.particles.get(index).visible = true;
				}

				frame = requestAnimationFrame(animateStem);
			}
			root.updateGraph();
			render();
		};

		const observation = (entries) => {
			if (entries[0].isIntersecting) {
				const timeout = setTimeout(() => {
					frame = requestAnimationFrame(animateStem);
					clearTimeout(timeout);
				}, delay);
				observer.unobserve(element);
			}
		};

		const observer = new IntersectionObserver(observation, {
			threshold: 0.75
		});
		observer.observe(element);

		return () => {
			cancelAnimationFrame(frame);
			observer.unobserve(element);
		};
	});
</script>

<div>
	<canvas
		bind:this={element}
		style="display: block; inline-size: 100%; max-inline-size: 350px;"
		width="350"
		height="480"
	/>
</div>

<style>
	div {
		background: hsl(214 14% 10%);
		padding: 3rem 2rem;
		border-radius: 1rem;
		max-inline-size: max-content;
		margin-inline: auto;
	}
</style>
