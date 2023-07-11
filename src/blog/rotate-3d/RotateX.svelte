<script>
	import { onMount } from 'svelte';
	import { Illustration, TAU, Shape, Anchor, Box, Ellipse } from 'zdog';

	let svg = null;
	let angle = 0;
	let illustration = null;
	let anchorSkewer = null;

	onMount(() => {
		illustration = new Illustration({
			element: svg,
			zoom: 3.4,
			translate: {
				y: -19.5
			},
			rotate: {
				y: TAU / 16
			}
		});

		const anchorFlames = new Anchor({
			addTo: illustration,
			translate: {
				y: 45
			},
			scale: 0.7
		});

		const flame = new Shape({
			addTo: anchorFlames,
			stroke: 4,
			color: 'hsl(338 100% 84%)',
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					arc: [
						{ x: -10, y: 0 },
						{ x: -10, y: -10 }
					]
				},
				{
					bezier: [
						{ x: -10, y: -15 },
						{ x: -5, y: -20 },
						{ x: -5, y: -25 }
					]
				},
				{
					bezier: [
						{ x: 0, y: -22.5 },
						{ x: 2.5, y: -20 },
						{ x: 2.5, y: -15 }
					]
				},
				{
					bezier: [
						{ x: 2.5, y: -17.5 },
						{ x: 2.5, y: -17.5 },
						{ x: 5.5, y: -20 }
					]
				},
				{
					bezier: [
						{ x: 7.5, y: -15 },
						{ x: 10, y: -15 },
						{ x: 10, y: -10 }
					]
				},
				{
					arc: [
						{ x: 10, y: 0 },
						{ x: 0, y: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: flame,
			stroke: 0,
			color: 'hsl(0 0% 100% / 0.3)',
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					arc: [
						{ x: -10, y: 0 },
						{ x: -10, y: -10 }
					]
				},
				{
					bezier: [
						{ x: -10, y: -15 },
						{ x: -5, y: -20 },
						{ x: -5, y: -25 }
					]
				},
				{
					bezier: [
						{ x: 0, y: -22.5 },
						{ x: 2.5, y: -20 },
						{ x: 2.5, y: -15 }
					]
				},
				{
					bezier: [
						{ x: 2.5, y: -17.5 },
						{ x: 2.5, y: -17.5 },
						{ x: 5.5, y: -20 }
					]
				},
				{
					bezier: [
						{ x: 7.5, y: -15 },
						{ x: 10, y: -15 },
						{ x: 10, y: -10 }
					]
				},
				{
					arc: [
						{ x: 10, y: 0 },
						{ x: 0, y: 0 }
					]
				}
			],
			scale: {
				x: 0.7,
				y: 0.6
			},
			translate: {
				z: 1
			}
		});

		flame.copyGraph({
			translate: {
				x: 14
			},
			scale: 0.8
		});

		flame.copyGraph({
			translate: {
				x: -14
			},
			scale: 0.8
		});

		flame.copyGraph({
			translate: {
				x: 25
			},
			scale: 0.7
		});

		flame.copyGraph({
			translate: {
				x: -25
			},
			scale: 0.7
		});

		const peg = new Shape({
			addTo: illustration,
			color: 'hsl(0 0% 75%)',
			stroke: 3,
			path: [{ y: 44.5 }, { y: 6 }],
			translate: {
				x: -37.5
			}
		});

		new Ellipse({
			addTo: peg,
			color: 'hsl(0 0% 75%)',
			stroke: 3,
			diameter: 14,
			quarters: 1,
			rotate: {
				z: TAU / 2,
				y: TAU / 4
			},
			translate: {
				y: -2
			}
		});

		new Ellipse({
			addTo: peg,
			color: 'hsl(0 0% 75%)',
			stroke: 3,
			diameter: 14,
			quarters: 1,
			rotate: {
				z: TAU / 4,
				y: TAU / 4
			},
			translate: {
				y: -2
			}
		});

		new Shape({
			addTo: peg,
			color: 'hsl(0 0% 30%)',
			stroke: 6
		});

		peg.copyGraph({
			translate: {
				x: 37.5
			}
		});

		const paths = [
			[{ x: -49 }, { x: -41 }],
			[{ x: -33 }, { x: -27 }],
			[{ x: -14 }, { x: -10 }],
			[{ x: 4 }, { x: 9 }],
			[{ x: 15 }, { x: 19 }],
			[{ x: 25 }, { x: 34 }],
			[{ x: 42 }, { x: 49 }]
		];

		for (const path of paths) {
			new Shape({
				addTo: illustration,
				color: 'hsl(0 0% 75%)',
				stroke: 2,
				path
			});
		}

		anchorSkewer = new Anchor({
			addTo: illustration
		});

		const boxTreat = new Box({
			addTo: anchorSkewer,
			color: 'hsl(170 73% 65%)',
			stroke: 2,
			width: 4,
			height: 8,
			depth: 8,
			translate: {
				x: 12.5
			}
		});

		boxTreat.copy({
			translate: {
				x: 22.5
			}
		});

		const shapeTreat = new Shape({
			addTo: anchorSkewer,
			stroke: 5,
			color: 'hsl(44 77% 67%)',
			path: [
				{ x: 5, y: 1.5 },
				{ x: 5, y: 0 },
				{
					arc: [
						{ x: 5, y: -5 },
						{ x: 0, y: -5 }
					]
				},
				{
					arc: [
						{ x: -5, y: -5 },
						{ x: -5, y: 0 }
					]
				},
				{
					arc: [
						{ x: -5, y: 2.5 },
						{ x: -2.5, y: 2.5 }
					]
				},
				{
					arc: [
						{ x: 0, y: 2.5 },
						{ x: 0, y: 0 }
					]
				},
				{
					arc: [
						{ x: 0, y: -2.5 },
						{ x: 2.5, y: -2.5 }
					]
				},
				{
					arc: [
						{ x: 5, y: -2.5 },
						{ x: 5, y: 0 }
					]
				}
			],
			translate: {
				x: -2.5
			},
			rotate: {
				y: TAU / 16
			}
		});

		shapeTreat.copy({
			translate: {
				x: -20
			}
		});

		illustration.updateRenderGraph();
	});

	const handleAngle = (angle) => {
		if (svg === null || illustration === null || anchorSkewer === null) return;

		anchorSkewer.rotate.x = (angle / 180) * Math.PI;
		illustration.updateRenderGraph();
	};

	$: handleAngle(angle);
</script>

<label>
	<span>Roast to medium rare</span>
	<input type="range" min="0" max="360" bind:value={angle} />
</label>

<svg bind:this={svg} style="display: block;" width="360" height="198">
	<svg style="display: block;" viewBox="-50 -9 100 55">
		<defs>
			<g id="rotate-x-flame">
				<path
					fill="currentColor"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M 0 0 A 10 10 0 0 1 -10 -10 C -10 -15 -5 -20 -5 -25 C 0 -22.5 2.5 -20 2.5 -15 C 2.5 -17.5 2.5 -17.5 5.5 -20 C 7.5 -15 10 -15 10 -10 A 10 10 0 0 1 0 0 Z"
				/>
				<path
					transform="scale(0.7 0.6)"
					fill="hsl(0 0% 100% / 0.3)"
					d="M 0 0 A 10 10 0 0 1 -10 -10 C -10 -15 -5 -20 -5 -25 C 0 -22.5 2.5 -20 2.5 -15 C 2.5 -17.5 2.5 -17.5 5.5 -20 C 7.5 -15 10 -15 10 -10 A 10 10 0 0 1 0 0 Z"
				/>
			</g>
		</defs>
		<g style="color: hsl(338 100% 84%)" transform="translate(0 44.5) scale(0.7)">
			<use transform="translate(20 0) scale(0.7)" href="#rotate-x-flame" />
			<use transform="translate(12.5 0) scale(0.8)" href="#rotate-x-flame" />
			<use transform="translate(-20 0) scale(0.7)" href="#rotate-x-flame" />
			<use transform="translate(-12.5 0) scale(0.8)" href="#rotate-x-flame" />
			<use href="#rotate-x-flame" />
		</g>

		<g fill="none" stroke="hsl(0 0% 75%)" stroke-linecap="round">
			<path stroke-width="2" d="M -49 0 L 49 0" />
			<g stroke-width="3">
				<path d="M -37.5 44.5 L -37.5 -7.5" />
				<path d="M 37.5 44.5 L 37.5 -7.5" />
			</g>
		</g>

		<g fill="hsl(0 0% 30%)">
			<path d="M -39 3.5 A 3.5 3.5 0 0 1 -39 -3.5" />
			<path d="M -36 3.5 A 3.5 3.5 0 0 0 -36 -3.5" />
			<path d="M 39 3.5 A 3.5 3.5 0 0 0 39 -3.5" />
			<path d="M 36 3.5 A 3.5 3.5 0 0 1 36 -3.5" />
		</g>

		<g
			style="color: hsl(170 73% 65%)"
			fill="currentColor"
			stroke="currentColor"
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<rect transform="translate(10 0)" x="-2" y="-4" width="4" height="8" />
			<rect transform="translate(20 0)" x="-2" y="-4" width="4" height="8" />
		</g>
		<g
			style="color: hsl(44 77% 67%)"
			fill="currentColor"
			stroke="currentColor"
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<path
				transform="translate(-20 0)"
				d="M 5 1.5 L 5 0 A 5 5 0 0 0 -5 0 A 2.5 2.5 0 0 0 0 0 2.5 2.5 0 0 1 5 0"
			/>
			<path
				transform="translate(-5 0)"
				d="M 5 1.5 L 5 0 A 5 5 0 0 0 -5 0 A 2.5 2.5 0 0 0 0 0 2.5 2.5 0 0 1 5 0"
			/>
		</g>
	</svg>
</svg>

<style>
	label {
		display: block;
	}

	span {
		font-style: italic;
	}

	input {
		display: block;
		inline-size: 100%;
		margin-block-start: 0.5rem;
	}

	svg {
		display: block;
	}
</style>
