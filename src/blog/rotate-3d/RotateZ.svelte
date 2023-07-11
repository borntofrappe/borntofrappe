<script>
	import { onMount } from 'svelte';
	import { Illustration, TAU, Shape, Anchor, Ellipse } from 'zdog';

	let svg = null;
	let angle = 0;
	let anchorLeaves = null;
	let illustration = null;

	onMount(() => {
		illustration = new Illustration({
			element: svg,
			zoom: 5.5,
			rotate: {
				x: TAU / 16,
				y: TAU / 12,
				z: TAU / 24
			},
			translate: {
				y: -9
			}
		});

		new Shape({
			addTo: illustration,
			color: 'hsl(0 0% 75%)',
			stroke: 4,
			path: [{ y: 0 }, { y: 50 }],
			translate: {
				z: -7
			}
		});

		anchorLeaves = new Anchor({
			addTo: illustration
		});

		const leaf = new Shape({
			addTo: anchorLeaves,
			stroke: 4,
			color: 'hsl(338 100% 84%)',
			path: [
				{ x: 0, y: 0 },
				{ x: 0, y: -30 },
				{
					arc: [
						{ x: 15, y: -30 },
						{ x: 15, y: -15 }
					]
				},
				{
					x: 15,
					y: 0
				}
			],
			fill: true,
			translate: {
				x: 2,
				y: -2
			}
		});

		new Shape({
			addTo: leaf,
			stroke: 0,
			color: 'hsl(0 0% 0% / 0.1)',
			path: [
				{ x: 0, y: 2 },
				{
					arc: [
						{ x: 17, y: 0 },
						{ x: 17, y: -17 }
					]
				},
				{
					x: 17,
					y: 0
				},
				{
					arc: [
						{ x: 17, y: 2 },
						{
							x: 15,
							y: 2
						}
					]
				}
			],
			fill: true
		});

		leaf.copyGraph({
			color: 'hsl(44 77% 67%)',
			translate: {
				x: 2,
				y: 2
			},
			rotate: {
				z: TAU / 4
			}
		});

		leaf.copyGraph({
			color: 'hsl(170 73% 65%)',
			translate: {
				x: -2,
				y: 2
			},
			rotate: {
				z: TAU / 2
			}
		});

		leaf.copyGraph({
			color: 'hsl(220 100% 84%)',
			translate: {
				x: -2,
				y: -2
			},
			rotate: {
				z: (TAU * 3) / 4
			}
		});

		new Ellipse({
			addTo: illustration,
			diameter: 5,
			stroke: 4,
			color: 'hsl(0 0% 30%)',
			fill: true,
			translate: {
				z: 5
			}
		});

		illustration.updateRenderGraph();
	});

	const handleAngle = (angle) => {
		if (svg === null || illustration === null || anchorLeaves === null) return;

		anchorLeaves.rotate.z = (angle / 180) * Math.PI;
		illustration.updateRenderGraph();
	};

	$: handleAngle(angle);
</script>

<label>
	<span>Give it a whirl</span>
	<input type="range" min="0" max="360" bind:value={angle} />
</label>

<svg bind:this={svg} style="display: block; outline: 1px solid;" width="360" height="480">
	<svg viewBox="-30 -30 60 80">
		<defs>
			<g id="rotate-z-leaf">
				<path
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
					stroke-linejoin="round"
					stroke-linecap="round"
					d="M 0 0 L 0 -28 A 14 14 0 0 1 14 -14 L 14 0Z"
				/>
				<path
					fill="hsl(0 0% 0% / 0.1)"
					d="M -1 0 L 0 0 A 15 15 0 0 0 15 -15 L 15 0 A 1 1 0 0 1 14 1 L 0 1 A 1 1 0 0 1 -1 0"
				/>
			</g>
		</defs>
		<path
			fill="none"
			stroke="hsl(0 0% 75%)"
			stroke-width="2"
			stroke-linecap="round"
			d="M 0 0 V 49"
		/>
		<use style="color: hsl(338 100% 84%);" transform="translate(1 -1)" href="#rotate-z-leaf" />
		<use
			style="color: hsl(44 77% 67%);"
			transform="translate(1 1) rotate(90)"
			href="#rotate-z-leaf"
		/>
		<use
			style="color: hsl(170 73% 65%);"
			transform="translate(-1 1) rotate(180)"
			href="#rotate-z-leaf"
		/>
		<use
			style="color: hsl(220 100% 84%);"
			transform="translate(-1 -1) rotate(270)"
			href="#rotate-z-leaf"
		/>
		<circle fill="hsl(0 0% 30%)" r="4" />
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
