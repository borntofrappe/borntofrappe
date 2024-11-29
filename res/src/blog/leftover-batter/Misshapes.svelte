<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape } from 'zdog';

	let element = null;

	onMount(() => {
		const colors = {
			coating: 'hsl(30 63% 46%)',
			batter: 'hsl(39 75% 64%)',
			nugget: 'hsl(19 58% 15%)'
		};

		const base = [
			{ x: 0, y: -14 },
			{
				bezier: [
					{ x: -5, y: -15 },
					{ x: -8, y: -11 },
					{ x: -6, y: -7 }
				]
			},
			{
				bezier: [
					{ x: -10, y: -8 },
					{ x: -14, y: -8 },
					{ x: -14, y: -4 }
				]
			},
			{
				bezier: [
					{ x: -13, y: 0 },
					{ x: -10, y: 0 },
					{ x: -6, y: -1 }
				]
			},
			{
				bezier: [
					{ x: -10, y: 3 },
					{ x: -12, y: 8 },
					{ x: -8, y: 12 }
				]
			},
			{
				bezier: [
					{ x: -5, y: 13 },
					{ x: -2, y: 12 },
					{ x: 0, y: 10 }
				]
			},
			{
				bezier: [
					{ x: 3, y: 13 },
					{ x: 5, y: 15 },
					{ x: 8, y: 13 }
				]
			},
			{
				bezier: [
					{ x: 11, y: 10 },
					{ x: 10, y: 5 },
					{ x: 7, y: 0 }
				]
			},
			{
				bezier: [
					{ x: 12, y: 1 },
					{ x: 14, y: -1 },
					{ x: 13, y: -5 }
				]
			},
			{
				bezier: [
					{ x: 12, y: -7 },
					{ x: 8, y: -8 },
					{ x: 5, y: -8 }
				]
			},
			{
				bezier: [
					{ x: 5, y: -11 },
					{ x: 3, y: -14 },
					{ x: 1, y: -14 }
				]
			}
		];

		const offset = () => -0.5 + Math.random();
		const stroke = 2;
		const depth = 2;
		const z = depth * -1;

		const root = new Anchor();

		for (const [x, y] of [
			[-30, -10],
			[0, 5],
			[30, -5]
		]) {
			const path = base.map((d) => {
				if (Object.hasOwn(d, 'bezier')) {
					return {
						bezier: [
							...d.bezier.map((c, i) => (i === 0 ? c : { x: c.x + offset(), y: c.y + offset() }))
						]
					};
				}

				return d;
			});

			const shape = new Shape({
				addTo: root,
				color: colors.coating,
				stroke,
				fill: true,
				path,
				translate: {
					x,
					y
				},
				rotate: {
					z: offset()
				}
			});

			const nuggets = new Anchor({
				addTo: shape,
				translate: {
					z: 5
				}
			});

			const nugget = new Shape({
				stroke: 2,
				color: colors.nugget
			});

			for (const x of [-3, 1]) {
				nugget.copy({
					addTo: nuggets,
					translate: {
						x: x + offset(),
						y: -9 + offset()
					}
				});
			}

			for (const y of [-2, 2, 6]) {
				nugget.copy({
					addTo: nuggets,
					translate: {
						x: offset(),
						y
					}
				});
			}

			for (let i = 0; i < path.length; i++) {
				const p1 = path[i];
				const p2 = path[(i + 1) % path.length];

				const p1Bezier = Object.hasOwn(p1, 'bezier');
				const p2Bezier = Object.hasOwn(p2, 'bezier');

				let pathShadow = [];

				if (p2Bezier) {
					const { x: x1, y: y1 } = p1Bezier ? p1.bezier[2] : p1;
					const { x: xc1, y: yc1 } = p2.bezier[0];
					const { x: xc2, y: yc2 } = p2.bezier[1];
					const { x: x2, y: y2 } = p2.bezier[2];

					pathShadow = [
						{ x: x1, y: y1, z: 0 },
						{ x: x1, y: y1, z },
						{
							bezier: [
								{ x: xc1, y: yc1, z },
								{ x: xc2, y: yc2, z },
								{ x: x2, y: y2, z }
							]
						},
						{ x: x2, y: y2, z: 0 },
						{
							bezier: [
								{ x: xc2, y: yc2, z: 0 },
								{ x: xc1, y: yc1, z: 0 },
								{ x: x1, y: y1, z: 0 }
							]
						}
					];
				} else {
					const { x: x1, y: y1 } = p1Bezier ? p1.bezier[2] : p1;
					const { x: x2, y: y2 } = p2;

					pathShadow = [
						{ x: x1, y: y1, z: 0 },
						{ x: x1, y: y1, z },
						{ x: x2, y: y2, z },
						{ x: x2, y: y2, z: 0 }
					];
				}

				new Shape({
					addTo: shape,
					color: colors.batter,
					stroke,
					fill: true,
					path: pathShadow,
					translate: {
						z: stroke * -1 * 2
					}
				});
			}
		}

		const context = element.getContext('2d');
		const { width, height } = element;
		const zoom = 4;

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

		root.rotate.x = 0.3;
		root.rotate.y = 0.3;
		root.updateGraph();
		render();
	});
</script>

<canvas
	bind:this={element}
	style="display: block; inline-size: 100%; max-inline-size: 380px;"
	width="380"
	height="200"
/>
