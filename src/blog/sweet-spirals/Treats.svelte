<script>
	import { onMount } from 'svelte';
	import { Anchor, Group, TAU, Shape, Cylinder, Cone } from 'zdog';

	let element = null;

	onMount(() => {
		const stroke = 15;

		const n = 80;
		const r = 50;
		const depth = 60;
		const loops = 5;

		const deltaAngle = (TAU / n) * loops * 1;
		const deltaDepth = depth / n;
		const deltaOffset = r / n;

		const path = Array(n)
			.fill()
			.map((_, i) => {
				const a = deltaAngle * i;
				const o = deltaOffset * i;
				const x = Math.cos(a) * o;
				const y = Math.sin(a) * o;

				const z = deltaDepth * i - depth;
				return {
					x,
					y,
					z
				};
			});

		const treats = [
			{
				color: 'hsl(0, 100%, 75%)',
				translate: {
					x: -80,
					z: 2
				},
				rotate: {
					x: (TAU / 4.1) * -1,
					y: -0.1
				}
			},
			{
				color: 'hsl(45, 100%, 60%)',
				translate: {
					x: 80,
					z: -2
				},
				rotate: {
					x: (TAU / 3.9) * -1,
					y: 0.1,
					z: TAU / 2
				}
			}
		];

		const sprinkles = {
			color: 'hsl(33, 55%, 92%)',
			stroke: 4,
			layers: [1, 3, 6, 8].reduce((acc, curr, i, { length }) => {
				const z = (depth / length) * i - depth;
				const o = ((r + stroke) / length) * i;
				const layer = Array(curr)
					.fill()
					.map((_, j, { length }) => {
						const d = j % 2 === 0 ? 0.1 : -0.1;
						const a = (TAU / length) * j;
						const x1 = Math.cos(a) * o;
						const y1 = Math.sin(a) * o;
						const x2 = Math.cos(a + d) * o;
						const y2 = Math.sin(a + d) * o;

						return [
							{ x: x1, y: y1, z },
							{ x: x2, y: y2, z }
						];
					});
				return [...acc, ...layer];
			}, [])
		};

		const cone = 'hsl(27, 80%, 68%)';

		const root = new Anchor({
			translate: {
				y: -15
			},
			rotate: {
				x: -0.1
			}
		});

		const bottom = new Anchor();

		const top = new Anchor();

		new Cylinder({
			addTo: bottom,
			color: cone,
			stroke: 10,
			diameter: r * 1.5,
			length: 20,
			translate: {
				z: 10
			}
		});

		new Cone({
			addTo: bottom,
			color: cone,
			stroke: 10,
			diameter: r * 1.25,
			length: 80,
			translate: {
				z: 20
			}
		});

		for (const path of sprinkles.layers) {
			new Shape({
				addTo: top,
				color: sprinkles.color,
				stroke: sprinkles.stroke,
				path
			});
		}

		for (const { color, translate, rotate } of treats) {
			const treat = new Anchor({
				addTo: root,
				translate,
				rotate
			});

			const group = new Group({
				addTo: treat
			});

			top.copyGraph({
				addTo: treat
			});

			bottom.copyGraph({
				addTo: group
			});

			new Shape({
				addTo: group,
				color,
				stroke,
				path,
				closed: false
			});
		}

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 1.42;

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

		const animate = () => {
			root.rotate.y = (root.rotate.y + 0.018) % TAU;

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

<canvas bind:this={element} style="display: block;" width="400" height="320" />
