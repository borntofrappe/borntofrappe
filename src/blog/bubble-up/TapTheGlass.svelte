<script>
	import { onMount } from 'svelte';
	import { backInOut } from 'svelte/easing';
	import { Anchor, Shape, Hemisphere, Cone, RoundedRect, TAU } from 'zdog';

	let widget = null;

	onMount(() => {
		const colors = {
			puffer: ['hsl(199 63% 49%)', 'hsl(203 78% 75%)'],
			details: 'hsl(206 78% 34%)',
			eye: ['hsl(120 47% 97%)', 'hsl(229 36% 9%)'],
			fish: 'hsl(199 63% 49%)',
			bubble: 'hsl(185 95% 50%)'
		};

		const root = new Anchor();

		const puffer = new Anchor({
			addTo: root
		});

		const spikes = new Anchor({
			addTo: puffer
		});

		const spike = new Cone({
			stroke: 0.2,
			diameter: 1,
			length: 1,
			translate: {
				z: 4.2
			}
		});

		for (let i = 1; i < 10; i++) {
			const x = (TAU / 10) * i;
			for (let j = 0; j < 6; j++) {
				const y = (Math.PI / 6) * j - Math.PI / 2;
				const color = x > 0 && x < Math.PI ? colors.puffer[0] : colors.puffer[1];

				const anchor = new Anchor({
					addTo: spikes,
					rotate: {
						x,
						y
					}
				});

				spike.copy({
					addTo: anchor,
					color
				});
			}
		}

		new Hemisphere({
			addTo: puffer,
			color: colors.puffer[0],
			stroke: 0,
			diameter: 10,
			rotate: {
				x: TAU / 4
			}
		});

		new Hemisphere({
			addTo: puffer,
			color: colors.puffer[1],
			stroke: 0,
			diameter: 10,
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		const eye = new Shape({
			color: colors.eye[0],
			stroke: 1.75,
			translate: {
				x: -2,
				y: -1.5,
				z: 5
			}
		});

		new Shape({
			addTo: eye,
			color: colors.eye[1],
			stroke: 1.1,
			translate: {
				y: -0.4,
				z: 1
			}
		});

		const eyes = new Anchor({
			addTo: puffer,
			translate: {
				z: 5
			}
		});

		eye.copyGraph({
			addTo: eyes,
			translate: {
				x: -2,
				y: -1.75
			}
		});

		eye.copyGraph({
			addTo: eyes,
			translate: {
				x: 2,
				y: -1.75
			}
		});

		const mouth = new RoundedRect({
			addTo: puffer,
			color: colors.details,
			stroke: 0,
			fill: true,
			width: 1.8,
			height: 1.2,
			cornerRadius: 0.6,
			translate: {
				z: 5
			}
		});

		const fin = new Shape({
			color: colors.puffer[0],
			stroke: 1,
			fill: true,
			path: [
				{ x: 0, y: -0.5 },
				{
					bezier: [
						{ x: 1, y: -1 },
						{ x: 1, y: -1 },
						{ x: 1, y: 0 }
					]
				},
				{
					bezier: [
						{ x: 1, y: 1 },
						{ x: 1, y: 1 },
						{ x: 0, y: 0.5 }
					]
				}
			]
		});

		const stripe = new Shape({
			color: colors.details,
			stroke: 0.4,
			path: [{ x: 0.4 }, { x: 0.9 }]
		});

		stripe.copy({
			addTo: fin,
			translate: {
				y: -0.35,
				z: 0.5
			}
		});

		stripe.copy({
			addTo: fin,
			translate: {
				y: 0.35,
				z: 0.5
			}
		});

		const fins = new Anchor({
			addTo: puffer
		});

		fin.copyGraph({
			addTo: fins,
			translate: {
				x: 5,
				z: 0.5
			}
		});

		fin.copyGraph({
			addTo: fins,
			translate: {
				x: -5,
				z: 0.5
			},
			rotate: {
				z: TAU / 2
			}
		});

		const fishes = new Anchor({
			addTo: root
		});

		const fish = new Shape({
			color: colors.fish,
			stroke: 0.5,
			fill: true,
			path: [
				{ x: -0.5, y: 0 },
				{
					arc: [
						{ x: -1.5, y: 0 },
						{ x: -1.5, y: -0.6 }
					]
				},
				{
					arc: [
						{ x: -0.5, y: -0.6 },
						{ x: -0.5, y: 0 }
					]
				},
				{
					bezier: [
						{ x: -0.5, y: -0.8 },
						{ x: 0.25, y: -1 },
						{ x: 0.6, y: -1 }
					]
				},
				{
					bezier: [
						{ x: 0.5, y: -1.2 },
						{ x: 0.4, y: -1.2 },
						{ x: 0.2, y: -1.5 }
					]
				},
				{
					bezier: [
						{ x: 1, y: -1.3 },
						{ x: 1.5, y: -0.7 },
						{ x: 1.5, y: -0.3 }
					]
				},
				{ x: 1.2, y: 0 },
				{ x: 1.3, y: 0.4 },
				{
					bezier: [
						{ x: 1.2, y: 1 },
						{ x: -0.5, y: 0.9 },
						{ x: -0.5, y: 0 }
					]
				},
				{
					arc: [
						{ x: -0.5, y: 0.6 },
						{ x: -1.5, y: 0.6 }
					]
				},
				{
					arc: [
						{ x: -1.5, y: 0 },
						{ x: -0.5, y: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: fish,
			color: colors.eye[0],
			stroke: 0.7,
			translate: {
				x: 0.8,
				y: -0.5,
				z: 0.5
			}
		});

		new Shape({
			addTo: fish,
			color: colors.eye[1],
			stroke: 0.5,
			translate: {
				x: 0.9,
				y: -0.55,
				z: 0.75
			}
		});

		new Shape({
			addTo: fish,
			color: colors.details,
			stroke: 0.35,
			closed: false,
			path: [
				{
					y: -0.5
				},
				{
					arc: [
						{
							y: 0,
							x: -0.5
						},
						{
							y: 0.5,
							x: 0
						}
					]
				}
			],
			translate: {
				x: 0.2,
				y: -0.1,
				z: 0.75
			},
			rotate: {
				z: -0.3
			}
		});

		for (const { translate, scale } of [
			{
				translate: { x: 12.5, y: 2.5, z: 5 },
				scale: {
					x: -1
				}
			},
			{
				translate: { x: -12.5, y: 7.5, z: -10 },
				scale: {
					x: -1
				}
			},
			{
				translate: { x: -7.5, y: -10, z: 15 },
				scale: {
					x: 1
				}
			},
			{
				translate: { x: 7.5, y: -7.5, z: -5 },
				scale: {
					x: -1
				}
			},
			{
				translate: { x: 0, y: 15, z: -30 },
				scale: {
					x: 1
				}
			}
		]) {
			fish.copyGraph({
				addTo: fishes,
				translate,
				scale
			});
		}

		const bubble = new Shape({
			stroke: 0.5,
			color: colors.bubble
		});

		for (let i = 0; i < 40; i++) {
			const a = Math.random() * TAU;
			const x = Math.floor(Math.cos(a) * 16);
			const y = Math.floor(Math.sin(a) * 10);
			const z = Math.floor(Math.random() * 20 - 10);
			const stroke = Math.ceil(Math.random() * 8) / 10;

			bubble.copy({
				addTo: root,
				stroke,
				translate: {
					x,
					y,
					z
				}
			});
		}

		root.rotate.x = -0.2;
		root.rotate.y = -0.05;

		const canvas = widget.querySelector('canvas');
		const context = canvas.getContext('2d');
		const { width, height } = canvas;
		const zoom = 8;

		context.lineCap = 'round';
		context.lineJoin = 'round';

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
		const [c, cf] = [400, 110];
		let [t, tf] = [0, 0];

		const blow = () => {
			tf++;
			const s = 1 + backInOut(Math.sin((tf / cf) * Math.PI)) * 0.2;

			root.scale = s;
			mouth.scale.y = s;
			fishes.scale = s;
			for (const child of spikes.children) {
				child.scale = s;
			}

			root.updateGraph();
			render();

			if (tf >= cf) {
				tf = 0;
				frame = requestAnimationFrame(animate);
				state = 'float';
			} else {
				frame = requestAnimationFrame(blow);
			}
		};

		const animate = () => {
			t = (t + 1) % c;
			const l = Math.sin((t / c) * TAU);
			const lf = Math.sin((t / c) * TAU * 2);

			fins.children[0].rotate.x = l * 0.5;
			fins.children[1].rotate.x = l * 0.5;
			eyes.children[0].rotate.z = l * 0.5;
			eyes.children[1].rotate.z = l * 0.5;

			puffer.translate.x = lf * 0.5;
			puffer.translate.y = l;
			root.translate.x = lf * 0.25;
			root.translate.y = l * 0.5;

			root.updateGraph();
			render();

			frame = requestAnimationFrame(animate);
		};

		frame = requestAnimationFrame(animate);

		let state = 'float';

		const handleClick = () => {
			if (state !== 'float') return;

			state = 'blow';
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(blow);
		};

		widget.style.background = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 1 1" width="2" height="2">\
            <circle fill="hsl(210 94% 12%)" r="0.1" />\
        </svg>'), hsl(211 100% 13%)`;
		widget.style.backgroundSize = '10px';
		widget.style.borderRadius = `${Math.min(width, height) / 10}px`;
		widget.style.border = 'none';

		widget.setAttribute('aria-label', 'Tap the glass');
		widget.removeAttribute('disabled');
		widget.addEventListener('click', handleClick);

		return () => {
			widget.removeEventListener('click', handleClick);
			cancelAnimationFrame(frame);
		};
	});
</script>

<button disabled bind:this={widget}>
	<canvas
		style="display: block; inline-size: 100%; max-inline-size: 400px; margin-inline: auto;"
		width="400"
		height="300"
	>
	</canvas>
</button>

<style>
	button {
		display: block;
		margin-inline: auto;
		padding: 0;
	}

	button:focus {
		outline: 2px solid;
		outline-offset: 4px;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}
</style>
