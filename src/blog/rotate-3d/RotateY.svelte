<script>
	import { onMount } from 'svelte';
	import { Illustration, TAU, Shape, Anchor, Cone, Hemisphere } from 'zdog';

	let svg = null;
	let angle = 0;
	let illustration = null;

	onMount(() => {
		illustration = new Illustration({
			element: svg,
			zoom: 5.5,
			translate: {
				y: 18
			}
		});

		new Shape({
			addTo: illustration,
			color: 'hsl(0 0% 75%)',
			stroke: 1.75,
			path: [{ y: 4.5 }, { y: -6 }]
		});

		new Shape({
			addTo: illustration,
			color: 'hsl(0 0% 75%)',
			fill: true,
			stroke: 1.75,
			path: [
				{ x: 18, y: 0 },
				{ x: -14, y: 0 },
				{ x: -16.5, y: -2.5 },
				{ x: -22.5, y: -2.5 },
				{ x: -20, y: -0 },
				{ x: -22.5, y: 2.5 },
				{ x: -16.5, y: 2.5 },
				{ x: -14, y: 0 }
			]
		});

		new Shape({
			addTo: illustration,
			color: 'hsl(0 0% 75%)',
			stroke: 6
		});

		new Cone({
			addTo: illustration,
			color: 'hsl(0 0% 75%)',
			stroke: 1.5,
			diameter: 4,
			length: 3,
			translate: {
				x: 19
			},
			rotate: {
				y: (TAU / 4) * -1
			}
		});

		const anchorCockerel = new Anchor({
			addTo: illustration,
			translate: {
				y: -8
			}
		});

		new Shape({
			addTo: anchorCockerel,
			color: 'hsl(338 100% 84%)',
			stroke: 2,
			fill: true,
			path: [
				{ x: 12, y: -27 },
				{ x: 17, y: -27.5 },
				{ x: 15, y: -23 }
			]
		});

		new Shape({
			addTo: anchorCockerel,
			color: 'hsl(44 77% 67%)',
			stroke: 5,
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					arc: [
						{ x: 15, y: 0 },
						{ x: 15, y: -15 }
					]
				},
				{
					arc: [
						{ x: 15, y: -30 },
						{ x: 0, y: -30 }
					]
				},
				{ x: 0, y: -15 },
				{ x: -15, y: -15 },
				{
					arc: [
						{ x: -15, y: 0 },
						{ x: 0, y: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: anchorCockerel,
			color: 'hsl(44 77% 67%)',
			stroke: 2,
			fill: true,
			path: [
				{ x: 0, y: 0 },
				{
					arc: [
						{ x: 0, y: -10 },
						{ x: -10, y: -10 }
					]
				},
				{
					arc: [
						{ x: -20, y: -10 },
						{ x: -20, y: 0 }
					]
				}
			],
			translate: {
				x: -9.5,
				y: -17
			}
		});

		const wing = new Shape({
			addTo: anchorCockerel,
			color: 'hsl(0 0% 30%)',
			stroke: 2,
			fill: true,
			path: [
				{ x: -0, y: -15 },
				{ x: 7.5, y: -15 },
				{
					arc: [
						{ x: 7.5, y: -7.5 },
						{ x: 0, y: -7.5 }
					]
				}
			],
			translate: {
				x: -1,
				y: -1,
				z: 3.5
			}
		});

		wing.copy({
			translate: {
				x: -1,
				y: -1,
				z: -3.5
			}
		});

		new Shape({
			addTo: anchorCockerel,
			color: 'hsl(338 100% 84%)',
			stroke: 2,
			fill: true,
			path: [
				{ x: 0, y: -19 },
				{
					arc: [
						{ x: -2, y: -19 },
						{ x: -2, y: -21 }
					]
				},
				{
					arc: [
						{ x: -2, y: -23 },
						{ x: 0, y: -23 }
					]
				},
				{
					arc: [
						{ x: -3.5, y: -23 },
						{ x: -3.5, y: -26.5 }
					]
				},
				{
					arc: [
						{ x: -3.5, y: -30 },
						{ x: 0, y: -30 }
					]
				}
			],
			translate: {
				x: -3,
				y: -1
			}
		});

		const eye = new Hemisphere({
			addTo: anchorCockerel,
			color: 'hsl(0 0% 30%)',
			stroke: 1,
			diameter: 3,
			translate: {
				x: 9,
				y: -22.5,
				z: 3
			}
		});

		eye.copy({
			translate: {
				x: 9,
				y: -22.5,
				z: -3
			},
			rotate: {
				x: TAU / 2
			}
		});

		illustration.updateRenderGraph();
	});

	const handleAngle = (angle) => {
		if (svg === null || illustration === null) return;

		illustration.rotate.y = (angle / 180) * Math.PI;
		illustration.updateRenderGraph();
	};

	$: handleAngle(angle);
</script>

<label>
	<span>Let the wind blow</span>
	<input type="range" min="0" max="360" bind:value={angle} />
</label>

<svg bind:this={svg} style="display: block;" width="360" height="320">
	<svg viewBox="-25 -35 45 40">
		<g style="color: hsl(0 0% 75%)">
			<path
				fill="currentColor"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M -14 0 L 19.5 0 L 16.5 -2 16.5 2 19.5 0 Z M -14 0 L -16 -2 L -20 -2 L -18 0 L -20 2 L -16 2 Z"
			/>
			<path
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
				d="M 0 4.5 L 0 -5"
			/>
		</g>
		<circle fill="hsl(0 0% 75%)" r="2.5" />
		<g
			transform="translate(0 -4.5)"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				style="color: hsl(338 100% 84%);"
				fill="currentColor"
				stroke="currentColor"
				d="M 0 -25 L 17.5 -27.5 L 10 -15 L 0 -15 Z"
			/>
			<path
				style="color: hsl(44 77% 67%);"
				fill="currentColor"
				stroke="currentColor"
				d="M 0 0 A 15 15 0 0 0 0 -30 L 0 -15 L -15 -15 A 15 15 0 0 0 0 0 Z"
			/>
			<path
				style="color: hsl(44 77% 67%);"
				fill="currentColor"
				stroke="currentColor"
				transform="translate(0.5 -1)"
				d="M -5 -15 A 10 10 0 0 0 -25 -15 Z"
			/>
			<path
				style="color: hsl(0 0% 30%);"
				fill="currentColor"
				stroke="currentColor"
				transform="translate(0.5 0.5)"
				d="M 0 -15 L 7.5 -15 A 7.5 7.5 0 0 1 0 -7.5 Z"
			/>
			<path
				style="color: hsl(338 100% 84%);"
				fill="currentColor"
				stroke="currentColor"
				transform="translate(-1 0)"
				d="M 0 -19 A 2 2 0 0 1 0 -23 A 3.5 3.5 0 0 1 0 -30 Z"
			/>
			<circle fill="hsl(0 0% 30%)" r="1.75" cx="8" cy="-21" />
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
