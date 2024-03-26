<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, RoundedRect, TAU, easeInOut } from 'zdog';

	let widget = null;

	onMount(() => {
		const canvas = widget.querySelector('canvas');

		const context = canvas.getContext('2d');
		const { width, height } = canvas;
		const zoom = 3.2;

		const colors = {
			background: 'hsl(218 61% 7%)',
			sparkles: ['hsl(229 47% 9%)', 'hsl(48 100% 97%)', 'hsl(60 100% 63%)']
		};

		const [c0, c1, c2] = colors.sparkles;
		const [s0, s1, s2] = [1.5, 2.5, 3.5];

		const w = width / zoom - 1;
		const h = height / zoom - 1;
		const cornerRadius = Math.floor(Math.min(w, h) / 12);

		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute(
			'd',
			'M -27 5 C -25 6 -23 2 -27 2 -31 1 -32 8 -26 9 -15 11 -6 -11 -23 -18 -39 -24 -51 -8 -44 3 -41 8 -35 5 -35 0 M -30 15 C -29 12 -36 11 -36 17 -36 22 -24 24 -26 6 -27 -3 -31 -14 -24 -16 M -1 6 C -3 1 -12 2 -12 11 -12 19 -3 19 0 14 3 11 4 3 1 4 -3 6 -3 19 5 17 M 13 -6 C 9 12 9 22 16 19 M 5 2 C 10 1 13 1 17 1 M 20 1 C 29 1 38 -10 33 -13 24 -14 19 3 25 19 24 4 34 2 33 10 31 17 33 21 36 18 M 41 13 45 8 44 15 41 9 47 12 41 13 Z'
		);

		const totalLength = path.getTotalLength();
		const n = 401;
		const g = totalLength / n;

		const points = Array(n)
			.fill()
			.map((_, i) => {
				const { x, y } = path.getPointAtLength(g * i);
				return { x, y };
			});

		const root = new Anchor();

		new RoundedRect({
			addTo: root,
			color: colors.background,
			fill: true,
			width: w,
			height: h,
			cornerRadius,
			translate: {
				z: -100
			}
		});

		const sparkles = new Anchor({
			addTo: root
		});

		const sparkle = new Shape({
			color: c0,
			stroke: s0
		});

		for (const { x, y } of points) {
			sparkle.copy({
				addTo: sparkles,
				translate: {
					x,
					y
				}
			});
		}

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
		let ticker = 0;
		const cycle = 500;
		const { length } = sparkles.children;
		const y = -4;

		const loop = () => {
			ticker = (ticker + 1) % cycle;
			const t = ticker / cycle;
			sparkles.rotate.y = easeInOut(t, 3) * TAU * -1;
			sparkles.translate.y = Math.sin(t * TAU) * y;

			root.updateGraph();
			render();

			frame = requestAnimationFrame(loop);
		};

		const animate = () => {
			ticker++;
			if (ticker >= cycle) {
				sparkles.children[length - 1].color = c1;
				sparkles.children[length - 1].stroke = s1;
				frame = requestAnimationFrame(loop);
			} else {
				frame = requestAnimationFrame(animate);

				const i = Math.floor((ticker / cycle) * length);
				const i1 = Math.max(0, i - 1);
				sparkles.children[i1].color = c1;
				sparkles.children[i1].stroke = s1;
				sparkles.children[i].color = c2;
				sparkles.children[i].stroke = s2;
			}

			root.updateGraph();
			render();
		};

		const button = widget.querySelector('button');
		button.removeAttribute('disabled');

		const handleClick = () => {
			frame = requestAnimationFrame(animate);
			button.setAttribute('disabled', '');
		};

		button.addEventListener('click', handleClick, { once: true });

		return () => {
			button.removeEventListener('click', handleClick);
			cancelAnimationFrame(frame);
		};
	});
</script>

<div bind:this={widget}>
	<canvas
		style="display: block; inline-size: 100%; max-inline-size: 400px;"
		width="400"
		height="300"
	/>
	<button disabled>Lighten up</button>
</div>

<style>
	div {
		--_button_color: hsl(218 61% 7%);
		--_button_background: hsl(48 100% 97%);
		max-inline-size: max-content;
		margin-inline: auto;
		position: relative;
	}

	div > button {
		position: absolute;
		inset-inline-start: 50%;
		inset-block-end: 1rem;
		translate: -50% 0%;
	}

	button {
		font-family: inherit;
		font-weight: 700;
		font-size: 1rem;
		letter-spacing: 1px;
		color: var(--_button_color, hsl(0 0% 95%));
		background: var(--_button_background, hsl(0 0% 20%));
		padding: 0.4rem 0.6rem;
		border-radius: 0.4rem;
		border: none;
	}

	button:focus {
		outline: 2px solid var(--_button_background, hsl(0 0% 20%));
		outline-offset: 2px;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}

	button:disabled {
		transition: scale 0.2s;
		transform-origin: 50% 100%;
		scale: 0;
	}
</style>
