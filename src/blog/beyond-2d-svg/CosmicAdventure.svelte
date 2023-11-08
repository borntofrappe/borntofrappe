<script>
	import { onMount } from 'svelte';
	import { Illustration, Group, Shape, easeInOut, TAU } from 'zdog';

	let svg = null;

	onMount(() => {
		const illustration = new Illustration({
			element: svg,
			zoom: 1.25
		});

		const group = new Group({
			addTo: illustration,
			translate: { x: -200, y: -125 }
		});

		const sparkles = [
			{ x: 35, y: 185 },
			{ x: 55, y: 135 },
			{ x: 60, y: 65 },
			{ x: 135, y: 215 },
			{ x: 155, y: 125 },
			{ x: 170, y: 50 },
			{ x: 230, y: 135 },
			{ x: 275, y: 185 },
			{ x: 290, y: 100 },
			{ x: 315, y: 150 },
			{ x: 350, y: 200 }
		];

		const stars = [
			{ x: 20, y: 160, scale: 2 },
			{ x: 60, y: 105, scale: 2.25 },
			{ x: 70, y: 165, scale: 2.25 },
			{ x: 80, y: 215, scale: 2 },
			{ x: 85, y: 40, scale: 2 },
			{ x: 115, y: 120, scale: 2.25 },
			{ x: 125, y: 55, scale: 2.25 },
			{ x: 125, y: 180, scale: 2.25 },
			{ x: 175, y: 90, scale: 2.25 },
			{ x: 185, y: 25, scale: 2 },
			{ x: 220, y: 60, scale: 2 },
			{ x: 240, y: 20, scale: 2 },
			{ x: 245, y: 95, scale: 2.25 },
			{ x: 260, y: 150, scale: 2.25 },
			{ x: 260, y: 220, scale: 2 },
			{ x: 280, y: 35, scale: 2 },
			{ x: 305, y: 70, scale: 2 },
			{ x: 305, y: 195, scale: 2.25 },
			{ x: 330, y: 125, scale: 2.25 },
			{ x: 375, y: 175, scale: 2 }
		];

		for (const { x, y } of sparkles) {
			new Shape({
				addTo: group,
				color: 'hsl(212 33% 89%)',
				path: [
					{ x: -5, y: 0 },
					{
						arc: [
							{ x: 0, y: 0 },
							{ x: 0, y: -5 }
						]
					},
					{
						arc: [
							{ x: 0, y: 0 },
							{ x: 5, y: 0 }
						]
					},
					{
						arc: [
							{ x: 0, y: 0 },
							{ x: 0, y: 5 }
						]
					},
					{
						arc: [
							{ x: 0, y: 0 },
							{ x: -5, y: 0 }
						]
					}
				],
				stroke: 4,
				fill: true,
				translate: { x, y, z: Math.floor(Math.random() * 50) }
			});
		}

		for (const { x, y, scale } of stars) {
			const groupStar = new Group({
				addTo: group,
				translate: { x, y, z: Math.floor(Math.random() * 50) },
				rotate: { z: TAU / 24 },
				scale
			});

			new Shape({
				addTo: groupStar,
				color: 'hsl(212 33% 89%)',
				path: [
					{ x: -3.214697847761802e-16, y: 1.75 },
					{ x: -2.351141009169893, y: 3.2360679774997894 },
					{ x: -1.6643489035165187, y: 0.5407797401561585 },
					{ x: -3.804226065180614, y: -1.23606797749979 },
					{ x: -1.0286241915118277, y: -1.415779740156158 },
					{ x: 2.4492935982947064e-16, y: -4 },
					{ x: 1.028624191511828, y: -1.415779740156158 },
					{ x: 3.804226065180614, y: -1.2360679774997896 },
					{ x: 1.6643489035165187, y: 0.5407797401561579 },
					{ x: 2.3511410091698925, y: 3.23606797749979 }
				],
				stroke: 4,
				fill: true
			});

			new Shape({
				addTo: groupStar,
				color: 'hsl(212 33% 89%)',
				path: [
					{ x: 1, y: -7 },
					{ x: 3, y: -9 }
				],
				stroke: 1
			});

			new Shape({
				addTo: groupStar,
				color: 'hsl(212 33% 89%)',
				path: [
					{ x: 3.5, y: -4.5 },
					{ x: 7.5, y: -8.5 }
				],
				stroke: 1
			});

			new Shape({
				addTo: groupStar,
				color: 'hsl(212 33% 89%)',
				path: [
					{ x: 6, y: -2 },
					{ x: 8, y: -4 }
				],
				stroke: 1
			});
		}

		const groupSpaceship = new Group({
			addTo: group,
			translate: { x: 200, y: 205, z: 25 }
		});

		new Shape({
			addTo: groupSpaceship,
			color: 'hsl(227 50% 59%)',
			path: [
				{ x: 0, y: 0 },
				{ x: 10, y: 0 },
				{ x: 15, y: -5 },
				{ x: 24, y: 0 },
				{ x: 30, y: -15 },
				{ x: 15, y: -30 },
				{
					bezier: [
						{ x: 15, y: -35 },
						{ x: 11, y: -62 },
						{ x: 0, y: -70 }
					]
				},
				{
					bezier: [
						{ x: -11, y: -62 },
						{ x: -15, y: -35 },
						{ x: -15, y: -30 }
					]
				},
				{ x: -30, y: -15 },
				{ x: -24, y: 0 },
				{ x: -15, y: -5 },
				{ x: -10, y: 0 },
				{ x: 0, y: 0 }
			],
			stroke: 4,
			fill: true
		});

		new Shape({
			addTo: groupSpaceship,
			color: 'hsl(227 50% 59%)',
			path: [
				{ x: 0, y: 7 },
				{
					arc: [
						{ x: -8, y: 7 },
						{ x: -8, y: 15 }
					]
				},
				{
					bezier: [
						{ x: -8, y: 19 },
						{ x: -4, y: 21 },
						{ x: 0, y: 27 }
					]
				},
				{
					bezier: [
						{ x: 4, y: 21 },
						{ x: 8, y: 19 },
						{ x: 8, y: 15 }
					]
				},
				{
					arc: [
						{ x: 8, y: 7 },
						{ x: 0, y: 7 }
					]
				}
			],
			stroke: 4,
			fill: true
		});

		illustration.rotate.x = TAU / 32;
		illustration.updateRenderGraph();

		let frame = null;

		const cycle = 200;
		let ticker = cycle / 2;
		let direction = 1;
		const angle = TAU / 16;

		const loop = () => {
			ticker++;
			if (ticker >= cycle) {
				ticker = ticker % cycle;
				direction = direction * -1;
			}

			const offset = 0.5 - easeInOut(ticker / cycle, 3);
			illustration.rotate.z = offset * direction * angle;
			illustration.rotate.y = illustration.rotate.z * -1;

			illustration.updateRenderGraph();
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
		observer.observe(svg);

		return () => {
			observer.unobserve(svg);
			cancelAnimationFrame(frame);
		};
	});
</script>

<svg
	bind:this={svg}
	style="display: block; inline-size: 100%; block-size: auto; max-inline-size: 500px;"
	width="500"
	height="350"
>
	<title>Cosmic adventure</title>
	<desc>In the vast space a solitary ship roams among the stars.</desc>
	<defs>
		<symbol id="cosmic-adventure-star-symbol" viewBox="-10 -10.3819661140441895 20 20">
			<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<g fill="none" stroke-width="0.25">
					<g transform="translate(1 -7)">
						<path d="M 0 0 l 2 -2" />
						<path d="M 2.5 2.5 l 4 -4" />
						<path d="M 5 5 l 2 -2" />
					</g>
				</g>
				<path
					fill="currentColor"
					stroke-width="1.5"
					d="M -3.214697847761802e-16 1.75 -2.351141009169893 3.2360679774997894 -1.6643489035165187 0.5407797401561585 -3.804226065180614 -1.23606797749979 -1.0286241915118277 -1.415779740156158 2.4492935982947064e-16 -4 1.028624191511828 -1.415779740156158 3.804226065180614 -1.2360679774997896 1.6643489035165187 0.5407797401561579 2.3511410091698925 3.23606797749979 z"
				/>
			</g>
		</symbol>
		<symbol id="cosmic-adventure-sparkle-symbol" viewBox="-5 -5 10 10">
			<g fill="currentColor" stroke="none">
				<path d="M -5 0 a 5 5 0 0 0 5 -5 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5" />
			</g>
		</symbol>

		<use
			id="cosmic-adventure-star"
			href="#cosmic-adventure-star-symbol"
			transform="rotate(15)"
			x="-18"
			y="-18"
			width="36"
			height="36"
		/>
		<use
			id="cosmic-adventure-sparkle"
			href="#cosmic-adventure-sparkle-symbol"
			x="-9"
			y="-9"
			width="18"
			height="18"
		/>
	</defs>

	<g transform="translate(50 50)">
		<g style="color: hsl(212 33% 89%)">
			<use transform="translate(35 185)" href="#cosmic-adventure-sparkle" />
			<use transform="translate(55 135)" href="#cosmic-adventure-sparkle" />
			<use transform="translate(60 65)" href="#cosmic-adventure-sparkle" />
			<use transform="translate(135 215)" href="#cosmic-adventure-sparkle" />
			<use transform="translate(155 125)" href="#cosmic-adventure-sparkle" />
			<use transform="translate(170 50)" href="#cosmic-adventure-sparkle" />
			<use transform="translate(230 135)" href="#cosmic-adventure-sparkle" />
			<use transform="translate(275 185)" href="#cosmic-adventure-sparkle" />
			<use transform="translate(290 100)" href="#cosmic-adventure-sparkle" />
			<use transform="translate(315 150)" href="#cosmic-adventure-sparkle" />
			<use transform="translate(350 200)" href="#cosmic-adventure-sparkle" />

			<use transform="translate(20 160)" href="#cosmic-adventure-star" />
			<use transform="translate(60 105) scale(1.25)" href="#cosmic-adventure-star" />
			<use transform="translate(70 165) scale(1.25)" href="#cosmic-adventure-star" />
			<use transform="translate(80 215) scale(0.9)" href="#cosmic-adventure-star" />
			<use transform="translate(85 40) scale(0.9)" href="#cosmic-adventure-star" />
			<use transform="translate(115 120) scale(1.25)" href="#cosmic-adventure-star" />
			<use transform="translate(125 55) scale(1.25)" href="#cosmic-adventure-star" />
			<use transform="translate(125 180) scale(1.25)" href="#cosmic-adventure-star" />
			<use transform="translate(175 90) scale(1.25)" href="#cosmic-adventure-star" />
			<use transform="translate(185 25) scale(0.9)" href="#cosmic-adventure-star" />
			<use transform="translate(220 60) scale(0.9)" href="#cosmic-adventure-star" />
			<use transform="translate(240 20) scale(0.9)" href="#cosmic-adventure-star" />
			<use transform="translate(245 95) scale(1.25)" href="#cosmic-adventure-star" />
			<use transform="translate(260 150) scale(1.25)" href="#cosmic-adventure-star" />
			<use transform="translate(260 220) scale(0.9)" href="#cosmic-adventure-star" />
			<use transform="translate(280 35) scale(0.9)" href="#cosmic-adventure-star" />
			<use transform="translate(305 70) scale(0.9)" href="#cosmic-adventure-star" />
			<use transform="translate(305 195) scale(1.25)" href="#cosmic-adventure-star" />
			<use transform="translate(330 125) scale(1.25)" href="#cosmic-adventure-star" />
			<use transform="translate(375 175)" href="#cosmic-adventure-star" />
		</g>

		<g transform="translate(200 205)">
			<g
				style="color: hsl(227 50% 59%)"
				fill="currentColor"
				stroke="currentColor"
				stroke-linejoin="round"
				stroke-linecap="round"
			>
				<path
					stroke-width="6"
					d="M 0 0 h 10 l 5 -5 9 5 6 -15 -15 -15 c 0 -5 -4 -32 -15 -40 c -11 8 -15 35 -15 40 l -15 15 6 15 9 -5 5 5 h 10"
				/>
				<path
					stroke-width="3"
					d="M 0 7 a 8 8 0 0 0 -8 8 c 0 4 4 6 8 12 c 4 -6 8 -8 8 -12 a 8 8 0 0 0 -8 -8"
				/>
			</g>
		</g>
	</g>
</svg>
