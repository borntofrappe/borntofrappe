<script>
	import { onMount } from 'svelte';
	import { Illustration, Ellipse, Shape, Cone, Anchor, Group, TAU } from 'zdog';

	const diameter = 260;
	const black = 'hsl(0 0% 19%)';
	const white = 'hsl(0 0% 97%)';
	const accent = 'hsl(42 96% 50%)';

	const degreesToRad = (degrees) => (degrees / 180) * Math.PI;

	let element = null;

	let y = 45;
	let x = 45;

	let illustration = null;
	let a1 = null;
	let a2 = null;

	onMount(() => {
		const hours = 8;
		const stroke = 16;

		illustration = new Illustration({
			element
		});

		new Shape({
			addTo: illustration,
			color: white,
			stroke: 0,
			fill: true,
			path: [
				{ x: -175, y: -135 },
				{
					arc: [
						{ x: -175, y: -175 },
						{ x: -135, y: -175 }
					]
				},
				{ x: 135, y: -175 },
				{
					arc: [
						{ x: 175, y: -175 },
						{ x: 175, y: -135 }
					]
				},
				{ x: 175, y: 130 },
				{
					arc: [
						{ x: 175, y: 175 },
						{ x: 135, y: 175 }
					]
				},
				{ x: -135, y: 175 },
				{
					arc: [
						{ x: -175, y: 175 },
						{ x: -175, y: 135 }
					]
				},
				{ x: -175, y: 135 }
			],
			translate: {
				z: -diameter
			}
		});

		for (let i = 0; i < hours; i++) {
			new Ellipse({
				addTo: illustration,
				color: black,
				stroke: 0.1,
				diameter,
				rotate: {
					y: (TAU / 2 / hours) * i
				}
			});
		}

		const group = new Group({
			addTo: illustration,
			rotate: {
				x: TAU / 24
			}
		});

		new Ellipse({
			addTo: group,
			color: black,
			stroke: 2,
			diameter,
			rotate: {
				x: TAU / 4
			}
		});

		a1 = new Anchor({
			addTo: group
		});

		a2 = new Anchor({
			addTo: a1
		});

		new Shape({
			addTo: a2,
			color: black,
			stroke: 8
		});

		new Shape({
			addTo: a2,
			color: black,
			stroke: 2,
			path: [{ z: 0 }, { z: (diameter / 2 - stroke * 2) * -1 }]
		});

		new Cone({
			addTo: a2,
			color: black,
			stroke: 5,
			diameter: 10,
			length: 12,
			translate: {
				z: (diameter / 2 - stroke * 2) * -1
			},
			rotate: {
				x: TAU / 2
			}
		});

		new Shape({
			addTo: a2,
			color: accent,
			stroke,
			translate: {
				z: (diameter / 2) * -1
			}
		});

		const l1 = new Anchor({
			addTo: a1,
			translate: {
				y: -15,
				z: 25
			},
			scale: 0.45
		});

		new Shape({
			addTo: l1,
			color: black,
			stroke: 4,
			closed: false,
			path: [
				{ x: -17.5, y: -15 },
				{ x: -10, y: -15 },
				{
					arc: [
						{ x: 0, y: -15 },
						{ x: 0, y: -5 }
					]
				},
				{ x: 0, y: 0 },
				{ x: -10, y: 0 },
				{
					arc: [
						{ x: -20, y: 0 },
						{ x: -20, y: 10 }
					]
				},
				{
					arc: [
						{ x: -20, y: 20 },
						{ x: -10, y: 20 }
					]
				},
				{
					arc: [
						{ x: 0, y: 20 },
						{ x: 0, y: 10 }
					]
				},
				{ x: 0, y: 0 },
				{ x: 0, y: 10 },
				{
					arc: [
						{ x: 0, y: 20 },
						{ x: 10, y: 20 }
					]
				}
			],
			translate: {
				x: -15
			}
		});

		new Shape({
			addTo: l1,
			color: black,
			stroke: 4,
			closed: false,
			path: [
				{ x: -10, y: -5 },
				{ x: 0, y: -15 },
				{ x: 0, y: 20 },
				{ x: -10, y: 20 },
				{ x: 10, y: 20 }
			],
			translate: {
				x: 20
			}
		});

		const l2 = new Anchor({
			addTo: a2,
			translate: {
				x: 15,
				y: -15,
				z: -25
			},
			scale: 0.45,
			rotate: {
				y: (TAU / 4) * -1
			}
		});

		new Shape({
			addTo: l2,
			color: black,
			stroke: 4,
			closed: false,
			path: [
				{ x: -17.5, y: -15 },
				{ x: -10, y: -15 },
				{
					arc: [
						{ x: 0, y: -15 },
						{ x: 0, y: -5 }
					]
				},
				{ x: 0, y: 0 },
				{ x: -10, y: 0 },
				{
					arc: [
						{ x: -20, y: 0 },
						{ x: -20, y: 10 }
					]
				},
				{
					arc: [
						{ x: -20, y: 20 },
						{ x: -10, y: 20 }
					]
				},
				{
					arc: [
						{ x: 0, y: 20 },
						{ x: 0, y: 10 }
					]
				},
				{ x: 0, y: 0 },
				{ x: 0, y: 10 },
				{
					arc: [
						{ x: 0, y: 20 },
						{ x: 10, y: 20 }
					]
				}
			],
			translate: {
				x: -15
			}
		});

		new Shape({
			addTo: l2,
			translate: {
				x: 20
			},
			color: black,
			stroke: 4,
			closed: false,
			path: [
				{ x: -10, y: -5 },
				{
					arc: [
						{ x: -10, y: -15 },
						{ x: 0, y: -15 }
					]
				},
				{
					arc: [
						{ x: 10, y: -15 },
						{ x: 10, y: -5 }
					]
				},
				{
					bezier: [
						{ x: 10, y: 7.5 },
						{ x: -10, y: 7.5 },
						{ x: -10, y: 20 }
					]
				},
				{ x: 12.5, y: 20 }
			]
		});

		a1.rotate.y = degreesToRad(y);
		a2.rotate.x = degreesToRad(x);

		illustration.updateRenderGraph();
	});

	const handleChange = ({ x, y }) => {
		if (illustration === null || a1 === null || a2 === null) return;
		a1.rotate.y = degreesToRad(y);
		a2.rotate.x = degreesToRad(x);

		illustration.updateRenderGraph();
	};

	$: handleChange({ x, y });
</script>

<div>
	<label>
		<span>Rotate around the y axis</span>
		<input disabled={a1 === null} type="range" min="0" max="360" bind:value={y} />
	</label>

	<label>
		<span>Rotate around the x axis</span>
		<input disabled={a2 === null} type="range" min="0" max="360" bind:value={x} />
	</label>
</div>

<svg
	bind:this={element}
	style="display: block; inline-size: 100%; block-size: auto; max-inline-size: 350px;"
	width="350"
	height="350"
	viewBox="-175 -175 350 350"
>
	<g stroke-linecap="round" stroke-linejoin="round">
		<path
			fill="hsl(0 0% 97%)"
			d="M-175,-135 C-175,-157.5 -157.5,-175 -135,-175 L135,-175 C157.5,-175 175,-157.5 175,-135 L175,130 C175,155.313 157.5,175 135,175 L-135,175 C-157.5,175 -175,157.5 -175,135 L-175,135 Z"
		/>
		<path
			fill="none"
			stroke="hsl(0 0% 19%)"
			stroke-width="2"
			d="M0,33.646 C73.125,33.646 130,18.926 130,0 C130,-18.926 73.125,-33.646 0,-33.646 C-73.125,-33.646 -130,-18.926 -130,0 C-130,18.926 -73.125,33.646 0,33.646"
		/>
		<path fill="none" stroke="hsl(0 0% 19%)" stroke-width="8" d="M0,0 Z" />
		<path d="M0,0 L56.21,20.777" stroke="hsl(0 0% 19%)" stroke-width="2" fill="none" />
		<g fill="hsl(0 0% 19%)" stroke="hsl(0 0% 19%)" stroke-width="5">
			<path d="M56.751,25.467 L63.093,23.321 L59.671,17.567" />
			<path
				d="M56.21,25.607 C58.514,25.189 60.306,22.752 60.306,20.035 C60.306,17.318 58.514,15.53 56.21,15.948 C53.907,16.365 52.115,18.803 52.115,21.519 C52.115,24.236 53.907,26.024 56.21,25.607"
			/>
		</g>
		<path fill="none" stroke="hsl(42 96% 50%)" stroke-width="16" d="M74.565,27.562 Z" />
		<g fill="none" stroke="hsl(0 0% 19%)" stroke-width="4">
			<path
				d="M18.238,-21.036 L20.174,-20.321 C21.626,-19.784 22.755,-17.465 22.755,-15.02 L22.755,-12.846 L20.174,-13.801 C18.722,-14.337 17.593,-12.853 17.593,-10.408 C17.593,-7.963 18.722,-5.644 20.174,-5.107 C21.626,-4.571 22.755,-6.055 22.755,-8.5 L22.755,-12.846 L22.755,-8.5 C22.755,-6.055 23.884,-3.736 25.336,-3.199"
			/>
			<path
				d="M29.208,-12.635 C29.208,-15.08 30.337,-16.564 31.789,-16.027 C33.241,-15.491 34.37,-13.172 34.37,-10.727 C34.37,-5.293 29.208,-7.201 29.208,-1.768 L35.015,0.379"
			/>
			<path
				d="M-26.32,-24.138 L-23.555,-24.639 C-21.481,-25.015 -19.869,-23.405 -19.869,-20.96 L-19.869,-18.787 L-23.555,-18.119 C-25.628,-17.743 -27.241,-15.549 -27.241,-13.104 C-27.241,-10.659 -25.628,-9.05 -23.555,-9.426 C-21.481,-9.802 -19.869,-11.995 -19.869,-14.44 L-19.869,-18.787 L-19.869,-14.44 C-19.869,-11.995 -18.256,-10.386 -16.183,-10.762"
			/>
			<path d="M-10.653,-22.631 L-6.967,-27.645 L-6.967,-12.432 L-10.653,-11.764 L-3.281,-13.1" />
		</g>
		<g fill="none" stroke="hsl(0 0% 19%)" stroke-width="0.1">
			<path
				d="M0,-130 C73.125,-130 130,-73.125 130,0 C130,73.125 73.125,130 0,130 C-73.125,130 -130,73.125 -130,0 C-130,-73.125 -73.125,-130 0,-130"
			/>
			<path
				d="M0,-130 C67.559,-130 120.104,-73.125 120.104,0 C120.104,73.125 67.559,130 0,130 C-67.559,130 -120.104,73.125 -120.104,0 C-120.104,-73.125 -67.559,-130 0,-130"
			/>
			<path
				d="M0,-130 C51.707,-130 91.924,-73.125 91.924,0 C91.924,73.125 51.707,130 0,130 C-51.707,130 -91.924,73.125 -91.924,0 C-91.924,-73.125 -51.707,-130 0,-130"
			/>
			<path
				d="M0,-130 C27.984,-130 49.749,-73.125 49.749,0 C49.749,73.125 27.984,130 0,130 C-27.984,130 -49.749,73.125 -49.749,0 C-49.749,-73.125 -27.984,-130 0,-130"
			/>
			<path
				d="M0,-130 C0,-130 0,-73.125 0,0 C0,73.125 0,130 0,130 C0,130 0,73.125 0,0 C0,-73.125 0,-130 0,-130"
			/>
			<path
				d="M0,-130 C-27.984,-130 -49.749,-73.125 -49.749,0 C-49.749,73.125 -27.984,130 0,130 C27.984,130 49.749,73.125 49.749,0 C49.749,-73.125 27.984,-130 0,-130"
			/>
			<path
				d="M0,-130 C-51.707,-130 -91.924,-73.125 -91.924,0 C-91.924,73.125 -51.707,130 0,130 C51.707,130 91.924,73.125 91.924,0 C91.924,-73.125 51.707,-130 0,-130"
			/>
			<path
				d="M0,-130 C-67.559,-130 -120.104,-73.125 -120.104,0 C-120.104,73.125 -67.559,130 0,130 C67.559,130 120.104,73.125 120.104,0 C120.104,-73.125 67.559,-130 0,-130"
			/>
		</g>
	</g>
</svg>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	div > * {
		flex: 1 1 20ch;
	}

	label {
		display: block;
	}

	label > * + * {
		margin-block-start: 0.5rem;
	}

	input {
		display: block;
		inline-size: 100%;
		accent-color: hsl(42 96% 50%);
	}

	svg {
		display: block;
		margin-inline: auto;
	}
</style>
