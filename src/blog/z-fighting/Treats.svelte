<script>
	import { onMount } from 'svelte';
	import { Illustration, Anchor, Shape, Ellipse, TAU } from 'zdog';

	let element = null;

	onMount(() => {
		const element1 = element.querySelector('svg:nth-of-type(1)');
		const element2 = element.querySelector('svg:nth-of-type(2)');

		const red = 'hsl(360 71% 66%)';
		const green = 'hsl(162 63% 41%)';
		const yellow = 'hsl(42 78% 65%)';
		const blue1 = 'hsl(224 50% 73%)';
		const blue2 = 'hsl(224 52% 70%)';
		const blue3 = 'hsl(224 40% 66%)';
		const blue4 = 'hsl(224 47% 45%)';
		const blue5 = 'hsl(225 46% 28%)';
		const accent = 'hsl(222 56% 93%)';

		const stroke = 28;
		const circles = [
			{
				translate: { y: -stroke }
			},
			{
				translate: { x: stroke / 2, y: -stroke / 2 }
			},
			{
				translate: { x: -stroke / 2, y: -stroke / 2 }
			},
			{
				translate: { z: -stroke / 2, y: -stroke / 2 }
			},
			{
				translate: { z: stroke / 2, y: -stroke / 2 }
			},
			{
				translate: { x: stroke / 1.3 }
			},
			{
				translate: { x: -stroke / 1.3 }
			},
			{
				translate: { z: stroke / 1.3 }
			},
			{
				translate: { z: -stroke / 1.3 }
			},
			{
				translate: { x: stroke / 1.3, z: stroke / 1.3 }
			},
			{
				translate: { x: -stroke / 1.3, z: -stroke / 1.3 }
			},
			{
				translate: { x: -stroke / 1.3, z: stroke / 1.3 }
			},
			{
				translate: { x: stroke / 1.3, z: -stroke / 1.3 }
			}
		];

		const illustration1 = new Illustration({
			element: element1
		});

		const illustration2 = new Illustration({
			element: element2
		});

		const backdrop = new Anchor({
			translate: {
				x: -160,
				y: -110,
				z: -100
			}
		});

		new Shape({
			addTo: backdrop,
			color: blue2,
			stroke: 0,
			fill: true,
			path: [
				{ x: 0, y: 30 },
				{
					arc: [
						{ x: 0, y: 0 },
						{ x: 30, y: 0 }
					]
				},
				{ x: 290, y: 0 },
				{
					arc: [
						{ x: 320, y: 0 },
						{ x: 320, y: 30 }
					]
				},
				{ x: 320, y: 190 },
				{
					arc: [
						{ x: 320, y: 220 },
						{ x: 290, y: 220 }
					]
				},
				{ x: 30, y: 220 },
				{
					arc: [
						{ x: 0, y: 220 },
						{ x: 0, y: 190 }
					]
				}
			]
		});

		new Shape({
			addTo: backdrop,
			color: blue1,
			stroke: 0,
			fill: true,
			path: [
				{ x: 0, y: 170 },
				{ x: 0, y: 190 },
				{
					arc: [
						{ x: 0, y: 220 },
						{ x: 30, y: 220 }
					]
				},
				{ x: 290, y: 220 },
				{
					arc: [
						{ x: 320, y: 220 },
						{ x: 320, y: 190 }
					]
				},
				{ x: 320, y: 170 }
			]
		});

		backdrop.copyGraph({
			addTo: illustration1
		});

		const bowl1 = new Anchor({
			addTo: illustration1,
			translate: {
				y: 60,
				z: -100
			}
		});

		const treats1 = new Anchor({
			addTo: illustration1,
			translate: {
				y: 67
			}
		});

		const overlap1 = new Anchor({
			addTo: illustration1,
			translate: {
				y: 60,
				z: 100
			}
		});

		new Ellipse({
			addTo: bowl1,
			diameter: 160,
			color: blue3,
			stroke: 0,
			fill: true,
			translate: {
				y: 25
			},
			rotate: {
				x: TAU / 3.65
			}
		});

		new Shape({
			addTo: bowl1,
			color: blue4,
			stroke: 0,
			fill: true,
			path: [
				{ x: -60, y: 0 },
				{ x: -60, y: 20 },
				{
					bezier: [
						{ x: -60, y: 35 },
						{ x: 60, y: 35 },
						{ x: 60, y: 20 }
					]
				},
				{ x: 60, y: 0 },
				{
					bezier: [
						{ x: 60, y: 15 },
						{ x: -60, y: 15 },
						{ x: -60, y: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: bowl1,
			color: blue4,
			stroke: 0,
			fill: true,
			path: [
				{ x: -75, y: 0 },
				{ x: -75, y: 10 },
				{
					bezier: [
						{ x: -75, y: 30 },
						{ x: 75, y: 30 },
						{ x: 75, y: 10 }
					]
				},
				{ x: 75, y: 0 },
				{
					bezier: [
						{ x: 75, y: -25 },
						{ x: -75, y: -25 },
						{ x: -75, y: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: bowl1,
			color: blue5,
			stroke: 0,
			fill: true,
			path: [
				{ x: -60, y: 0 },
				{
					bezier: [
						{ x: -60, y: 15 },
						{ x: 60, y: 15 },
						{ x: 60, y: 0 }
					]
				},
				{
					bezier: [
						{ x: 60, y: -15 },
						{ x: -60, y: -15 },
						{ x: -60, y: 0 }
					]
				}
			]
		});

		for (const { translate } of circles) {
			new Shape({
				addTo: treats1,
				color: 'hsl(42 78% 65%)',
				stroke,
				translate
			});
		}

		const leaf = new Shape({
			color: green,
			stroke: 3,
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					arc: [
						{ x: 3, y: 0 },
						{ x: 3, y: -3 }
					]
				},
				{
					bezier: [
						{ x: 3, y: -4 },
						{ x: 3, y: -6 },
						{ x: 0, y: -8 }
					]
				},
				{
					bezier: [
						{ x: -3, y: -6 },
						{ x: -3, y: -4 },
						{ x: -3, y: -3 }
					]
				},
				{
					arc: [
						{ x: -3, y: 0 },
						{ x: 0, y: 0 }
					]
				}
			]
		});

		leaf.copy({
			addTo: treats1,
			translate: {
				z: stroke / 2,
				x: 2,
				y: -34
			},
			rotate: {
				z: (40 / 180) * Math.PI
			}
		});

		leaf.copy({
			addTo: treats1,
			translate: {
				z: stroke / 2,
				x: 4,
				y: -31
			},
			rotate: {
				z: (60 / 180) * Math.PI
			}
		});

		new Shape({
			addTo: overlap1,
			color: blue4,
			stroke: 0,
			fill: true,
			path: [
				{ x: -75, y: 0 },
				{ x: -60, y: 0 },
				{
					bezier: [
						{ x: -60, y: 15 },
						{ x: 60, y: 15 },
						{ x: 60, y: 0 }
					]
				},
				{ x: 75, y: 0 },
				{ x: 75, y: 10 },
				{
					bezier: [
						{ x: 75, y: 30 },
						{ x: -75, y: 30 },
						{ x: -75, y: 10 }
					]
				},
				{ x: -75, y: 0 }
			]
		});

		backdrop.copyGraph({
			addTo: illustration2
		});

		const bowl2 = new Anchor({
			addTo: illustration2,
			translate: {
				y: 65,
				z: -100
			}
		});

		const treats2 = new Anchor({
			addTo: illustration2,
			translate: {
				y: 57
			}
		});

		const angle = new Anchor({
			addTo: treats2,
			rotate: {
				x: TAU / 64
			}
		});

		new Ellipse({
			addTo: bowl2,
			diameter: 160,
			color: blue3,
			stroke: 0,
			fill: true,
			translate: {
				y: 18
			},
			rotate: {
				x: TAU / 3.65
			}
		});

		new Shape({
			addTo: bowl2,
			color: blue4,
			stroke: 0,
			fill: true,
			path: [
				{ x: -75, y: 0 },
				{ x: -75, y: 10 },
				{
					bezier: [
						{ x: -75, y: 30 },
						{ x: 75, y: 30 },
						{ x: 75, y: 10 }
					]
				},
				{ x: 75, y: 0 },
				{
					bezier: [
						{ x: 75, y: -20 },
						{ x: -75, y: -20 },
						{ x: -75, y: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: bowl2,
			color: blue5,
			stroke: 0,
			fill: true,
			path: [
				{ x: -60, y: 0 },
				{
					bezier: [
						{ x: -60, y: 15 },
						{ x: 60, y: 15 },
						{ x: 60, y: 0 }
					]
				},
				{
					bezier: [
						{ x: 60, y: -15 },
						{ x: -60, y: -15 },
						{ x: -60, y: 0 }
					]
				}
			]
		});

		const treat2 = new Shape({
			stroke: 25,
			path: [{ z: -20 }, { z: 20 }]
		});

		new Shape({
			addTo: treat2,
			color: accent,
			stroke: 8,
			path: [
				{ x: 0, z: -14 },
				{
					arc: [
						{ x: -7, z: -14 },
						{ x: -7, z: -7 }
					]
				},
				{
					arc: [
						{ x: -7, z: 0 },
						{ x: 0, z: 0 }
					]
				},
				{
					arc: [
						{ x: 0, z: 7 },
						{ x: 7, z: 7 }
					]
				},
				{
					arc: [
						{ x: 7, z: 14 },
						{ x: 0, z: 14 }
					]
				}
			],
			closed: false,
			translate: {
				y: -14
			}
		});

		treat2.copyGraph({
			addTo: treats2,
			color: green
		});

		treat2.copyGraph({
			addTo: treats2,
			color: red,
			translate: {
				x: -40
			}
		});

		treat2.copyGraph({
			addTo: treats2,
			color: yellow,
			translate: {
				x: 40
			}
		});

		treats1.rotate.x = TAU / 64;
		treats2.rotate.x = (TAU / 64) * -1;

		illustration1.updateRenderGraph();
		illustration2.updateRenderGraph();

		let frame = null;

		const loop = () => {
			treats1.rotate.y = (treats1.rotate.y + 0.02) % TAU;
			treats2.rotate.y = (treats2.rotate.y + 0.02) % TAU;
			illustration1.updateRenderGraph();
			illustration2.updateRenderGraph();
			frame = requestAnimationFrame(loop);
		};

		const observation = (entries) => {
			if (entries[0].isIntersecting) {
				frame = requestAnimationFrame(loop);
			} else {
				cancelAnimationFrame(frame);
			}
		};

		const observer = new IntersectionObserver(observation);
		observer.observe(element);

		return () => {
			observer.unobserve(element);
			cancelAnimationFrame(frame);
		};
	});
</script>

<div bind:this={element}>
	<svg style="display: block;" viewBox="0 0 320 220" width="320" height="220">
		<path
			fill="hsl(224 52% 70%)"
			d="M 0 30 A 30 30 0 0 1 30 0 L 290 0 A 30 30 0 0 1 320 30 L 320 190 A 30 30 0 0 1 290 220 L 30 220 A 30 30 0 0 1 0 190 Z"
		/>
		<path
			fill="hsl(224 50% 73%)"
			d="M 0 170 L 0 190 A 30 30 0 0 0 30 220 L 290 220 A 30 30 0 0 0 320 190 L 320 170 Z"
		/>
		<g transform="translate(160 170)">
			<ellipse fill="hsl(224 40% 66%)" cy="25" rx="80" ry="12" />
			<path
				fill="hsl(224 47% 45%)"
				d="M -60 0 L -60 20 C -60 35 60 35 60 20 L 60 0 C 60 15 -60 15 -60 0 Z"
			/>
			<path
				fill="hsl(224 47% 45%)"
				d="M -75 0 L -75 10 C -75 30 75 30 75 10 L 75 0 C 75 -25 -75 -25 -75 0 Z"
			/>
			<path fill="hsl(225 46% 28%)" d="M -60 0 C -60 15 60 15 60 0 C 60 -15 -60 -15 -60 0 Z" />

			<g transform="translate(0 7)">
				<g fill="hsl(42 78% 65%)">
					<circle cy="-28" r="14" />
					<circle cx="14" cy="-14" r="14" />
					<circle cx="-14" cy="-14" r="14" />
					<circle cy="-14" r="14" />
					<circle r="14" />
					<circle cx="22" r="14" />
					<circle cx="-22" r="14" />
				</g>
				<g
					transform="translate(0 -28)"
					style="color: hsl(162 63% 41%)"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
				>
					<path
						transform="translate(2 -6) rotate(40)"
						d="M 0 0 A 3 3 0 0 0 3 -3 C 3 -4 3 -6 0 -8 C -3 -6 -3 -4 -3 -3 A 3 3 0 0 0 0 0 Z"
					/>
					<path
						transform="translate(4 -3) rotate(60)"
						d="M 0 0 A 3 3 0 0 0 3 -3 C 3 -4 3 -6 0 -8 C -3 -6 -3 -4 -3 -3 A 3 3 0 0 0 0 0 Z"
					/>
				</g>
			</g>

			<path
				fill="hsl(224 47% 45%)"
				d="M -75 0 L -60 0 C -60 15 60 15 60 0 L 75 0 L 75 10 C 75 30 -75 30 -75 10 L -75 0 Z"
			/>
		</g>
	</svg>

	<svg style="display: block;" viewBox="0 0 320 220" width="320" height="220">
		<path
			fill="hsl(224 52% 70%)"
			d="M 0 30 A 30 30 0 0 1 30 0 L 290 0 A 30 30 0 0 1 320 30 L 320 190 A 30 30 0 0 1 290 220 L 30 220 A 30 30 0 0 1 0 190 Z"
		/>
		<path
			fill="hsl(224 50% 73%)"
			d="M 0 170 L 0 190 A 30 30 0 0 0 30 220 L 290 220 A 30 30 0 0 0 320 190 L 320 170 Z"
		/>
		<g transform="translate(160 175)">
			<ellipse fill="hsl(224 40% 66%)" cy="18" rx="80" ry="12" />
			<path
				fill="hsl(224 47% 45%)"
				d="M -75 0 L -75 10 C -75 30 75 30 75 10 L 75 0 C 75 -20 -75 -20 -75 0 Z"
			/>
			<path fill="hsl(225 46% 28%)" d="M -60 0 C -60 15 60 15 60 0 C 60 -15 -60 -15 -60 0 Z" />

			<g transform="translate(0 -8)" stroke-linecap="round" stroke-linejoin="round">
				<g style="color: hsl(162 63% 41%)">
					<circle fill="currentColor" stroke="currentColor" r="12" />
					<path
						transform="translate(0 -14)"
						fill="none"
						stroke="hsl(222 56% 93%)"
						stroke-width="8"
						d="M -7 0 L 7 0"
					/>
				</g>

				<g style="color: hsl(360 71% 66%)" transform="translate(-40 0)">
					<circle fill="currentColor" stroke="currentColor" r="12" />
					<path
						transform="translate(0 -14)"
						fill="none"
						stroke="hsl(222 56% 93%)"
						stroke-width="8"
						d="M -7 0 L 7 0"
					/>
				</g>

				<g style="color: hsl(42 78% 65%)" transform="translate(40 0)">
					<circle fill="currentColor" stroke="currentColor" r="12" />
					<path
						transform="translate(0 -14)"
						fill="none"
						stroke="hsl(222 56% 93%)"
						stroke-width="8"
						d="M -7 0 L 7 0"
					/>
				</g>
			</g>
		</g>
	</svg>
</div>

<style>
	div {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	div > svg {
		flex-basis: 320px;
	}
</style>
