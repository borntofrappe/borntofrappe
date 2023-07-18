<script>
	import { onMount } from 'svelte';
	import { Illustration, Anchor, Shape, RoundedRect, Hemisphere, Cylinder, TAU } from 'zdog';

	const stars = [
		{ x: 30, y: 100, scale: 0.35, z: 30 },
		{ x: 40, y: 200, scale: 0.6, z: 40 },
		{ x: 70, y: 35, scale: 0.5, z: -20 },
		{ x: 130, y: 240, scale: 0.6, z: -20 },
		{ x: 170, y: 40, scale: 0.5, z: 20 },
		{ x: 210, y: 270, scale: 0.55, z: -20 },
		{ x: 250, y: 60, scale: 0.5, z: -30 },
		{ x: 300, y: 250, scale: 0.4, z: 20 },
		{ x: 305, y: 130, scale: 0.5, z: -20 }
	];

	const black = 'hsl(202 17% 32%)';
	const blue = 'hsl(183 59% 54%)';
	const grey = 'hsl(162 14% 85%)';
	const yellow = 'hsl(46 87% 51%)';

	let element = null;
	onMount(() => {
		const illustration = new Illustration({
			element,
			zoom: 0.75
		});

		const anchor = new Anchor({
			addTo: illustration,
			rotate: {
				x: (TAU / 32) * 1,
				y: (TAU / 32) * 1
			}
		});

		const origin = new Anchor({
			addTo: anchor,
			translate: {
				x: -175,
				y: -150
			}
		});

		new Shape({
			addTo: illustration,
			stroke: 10,
			fill: true,
			color: black,
			path: [
				{ x: -220, y: 80 },
				{
					arc: [
						{ x: -220, y: -180 },
						{ x: 0, y: -180 }
					]
				},
				{
					arc: [
						{ x: 220, y: -180 },
						{ x: 220, y: 80 }
					]
				},
				{
					arc: [
						{ x: 220, y: 160 },
						{ x: 0, y: 160 }
					]
				},
				{
					arc: [
						{ x: -220, y: 160 },
						{ x: -220, y: 80 }
					]
				}
			],
			translate: {
				z: -100
			}
		});

		const planet = new Anchor({
			addTo: origin,
			translate: { x: 140, y: 120 },
			rotate: {
				z: (15 / 180) * Math.PI * -1
			}
		});

		new Shape({
			addTo: planet,
			color: blue,
			stroke: 80
		});

		new Shape({
			addTo: planet,
			color: grey,
			stroke: 20,
			translate: { x: -80 }
		});

		const satellite = new Anchor({
			addTo: origin,
			translate: { x: 240, y: 190 },
			rotate: { z: (45 / 180) * Math.PI * -1, x: TAU / 8 }
		});

		new RoundedRect({
			addTo: satellite,
			color: grey,
			stroke: 10,
			fill: true,
			width: 20,
			height: 18,
			cornerRadius: 2,
			translate: { x: 35, y: -22.5 }
		});

		new RoundedRect({
			addTo: satellite,
			color: grey,
			stroke: 10,
			fill: true,
			width: 20,
			height: 18,
			cornerRadius: 2,
			translate: { x: -35, y: -22.5 },
			scale: { y: -1 }
		});

		new Hemisphere({
			addTo: satellite,
			color: blue,
			stroke: 1,
			fill: true,
			diameter: 30,
			rotate: {
				x: TAU / 4
			},
			translate: { y: -45 }
		});

		new Cylinder({
			addTo: satellite,
			color: blue,
			stroke: 1,
			fill: true,
			diameter: 30,
			length: 45,
			rotate: {
				x: (TAU / 4) * -1
			},
			translate: { y: -22.5 }
		});

		new Hemisphere({
			addTo: satellite,
			color: blue,
			stroke: 1,
			fill: true,
			diameter: 30,
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		new Hemisphere({
			addTo: satellite,
			color: blue,
			stroke: 1,
			fill: true,
			diameter: 30,
			rotate: {
				x: TAU / 4
			},
			translate: { y: 37.5 }
		});

		new Hemisphere({
			addTo: satellite,
			color: grey,
			diameter: 15,
			stroke: 1,
			translate: { y: 37.5 },
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		const star = new Shape({
			color: yellow,
			stroke: 4,
			fill: true,
			path: [
				{ x: 9.797174393178826e-16, y: 16 },
				{
					bezier: [
						{ x: -16.457987064189243, y: 22.65247584249853 },
						{ x: -16.457987064189243, y: 22.65247584249853 },
						{ x: -15.216904260722456, y: 4.94427190999916 }
					]
				},
				{
					bezier: [
						{ x: -26.6295824562643, y: -8.652475842498536 },
						{ x: -26.6295824562643, y: -8.652475842498536 },
						{ x: -9.404564036679572, y: -12.944271909999157 }
					]
				},
				{
					bezier: [
						{ x: -5.143516556418883e-15, y: -28 },
						{ x: -5.143516556418883e-15, y: -28 },
						{ x: 9.404564036679567, y: -12.944271909999161 }
					]
				},
				{
					bezier: [
						{ x: 26.6295824562643, y: -8.652475842498536 },
						{ x: 26.6295824562643, y: -8.652475842498536 },
						{ x: 15.216904260722458, y: 4.944271909999155 }
					]
				},
				{
					bezier: [
						{ x: 16.457987064189272, y: 22.65247584249851 },
						{ x: 16.457987064189272, y: 22.65247584249851 },
						{ x: 9.797174393178826e-16, y: 16 }
					]
				}
			]
		});

		for (const { x, y, z, scale } of stars) {
			star.copyGraph({
				addTo: origin,
				translate: { x, y, z },
				scale
			});
		}

		illustration.updateRenderGraph();
	});
</script>

<svg bind:this={element} style="display: block;" width="350" height="300">
	<defs>
		<symbol
			id="svg-star-symbol"
			viewBox="-23.161237716674805 -24.236068725585938 46.32247543334961 44.331390380859375"
		>
			<path
				d="M 9.797174393178826e-16 16 C -16.457987064189243 22.65247584249853 -16.457987064189243 22.65247584249853 -15.216904260722456 4.94427190999916 C -26.6295824562643 -8.652475842498536 -26.6295824562643 -8.652475842498536 -9.404564036679572 -12.944271909999157 C -5.143516556418883e-15 -28 -5.143516556418883e-15 -28 9.404564036679567 -12.944271909999161 C 26.6295824562643 -8.652475842498536 26.6295824562643 -8.652475842498536 15.216904260722458 4.944271909999155 C 16.457987064189272 22.65247584249851 16.457987064189272 22.65247584249851 9.797174393178826e-16 16 Z"
			/>
		</symbol>
		<use id="svg-star" href="#svg-star-symbol" x="-10" y="-10" width="20" height="20" />
	</defs>
	<rect fill="hsl(202 17% 32%)" rx="10" width="350" height="300" />

	<g fill="hsl(46 87% 51%)">
		<use href="#svg-star" transform="translate(30 100) scale(0.8)" />
		<use href="#svg-star" transform="translate(40 200) scale(1.1)" />
		<use href="#svg-star" transform="translate(70 35) scale(0.9)" />
		<use href="#svg-star" transform="translate(130 240) scale(1.1)" />
		<use href="#svg-star" transform="translate(170 40) scale(1)" />
		<use href="#svg-star" transform="translate(210 270) scale(1.2)" />
		<use href="#svg-star" transform="translate(250 60) scale(1)" />
		<use href="#svg-star" transform="translate(300 250) scale(0.9)" />
		<use href="#svg-star" transform="translate(305 130) scale(1)" />
	</g>

	<g transform="translate(140 120)">
		<circle fill="hsl(183 59% 54%)" r="40" />
		<circle transform="rotate(-15) translate(-80 0)" fill="hsl(162 14% 85%)" r="10" />
	</g>

	<g transform="translate(240 180) rotate(-45)">
		<g fill="hsl(162 14% 85%)">
			<rect transform="translate(12.5 -9)" rx="2" width="20" height="18" />
			<rect transform="scale(-1 1) translate(12.5 -9)" rx="2" width="20" height="18" />
		</g>
		<circle transform="translate(0 30)" fill="hsl(162 14% 85%)" r="4" />
		<g style="color: hsl(183 59% 54%);">
			<path
				fill="currentColor"
				d="M 7.5 -10 A 7.5 7.5 0 0 0 -7.5 -10 L -7.5 10 A 7.5 7.5 0 0 0 7.5 10 Z"
			/>
			<path
				transform="translate(0 20)"
				fill="currentColor"
				stroke="currentColor"
				stroke-width="2"
				stroke-linejoin="round"
				d="M 0 0 A 10 10 0 0 0 -10 10 L 10 10 A 10 10 0 0 0 0 0 Z"
			/>
		</g>
	</g>
</svg>
