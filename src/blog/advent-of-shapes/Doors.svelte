<script>
	import { onMount } from 'svelte';
	import { Anchor, Shape, RoundedRect, TAU, easeInOut } from 'zdog';

	import { shapes } from './shapes.js';

	let widget = null;
	let index = 0;

	onMount(() => {
		const root = new Anchor();

		const panel = new RoundedRect({
			stroke: 2,
			fill: true,
			width: 60,
			height: 60,
			cornerRadius: 10
		});

		const front = new Anchor({
			addTo: root,
			translate: {
				z: 3
			}
		});

		const back = new Anchor({
			addTo: root,
			translate: {
				z: -3
			}
		});

		const { color, background, path } = shapes[index];

		panel.copy({
			addTo: front,
			color: background,
			translate: {
				z: -2
			}
		});

		panel.copy({
			addTo: back,
			color: background,
			translate: {
				z: 2
			}
		});

		new Shape({
			addTo: front,
			color,
			stroke: 2,
			fill: true,
			path
		});

		new Shape({
			addTo: back,
			color,
			stroke: 2,
			fill: true,
			path
		});

		const canvas = widget.querySelector('canvas');
		const context = canvas.getContext('2d');
		const { width, height } = canvas;
		const zoom = 6;

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

		let state = 'wait';
		let frame = null;
		let ticker = 0;
		const cycle = 50;
		let startAngle = 0;
		const PI = TAU / 2;
		let direction = 0;

		const previous = widget.querySelector('button:nth-of-type(1)');
		const next = widget.querySelector('button:nth-of-type(2)');

		const animate = () => {
			ticker = ticker + 1;
			if (ticker >= cycle) {
				ticker = 0;

				root.rotate.y = (PI * direction + startAngle) % TAU;
				startAngle = startAngle === 0 ? PI : 0;
				root.updateGraph();
				render();

				if (index > 0) previous.removeAttribute('disabled');
				if (index < shapes.length - 1) next.removeAttribute('disabled');
				state = 'wait';

				cancelAnimationFrame(frame);
			} else {
				const ease = easeInOut(ticker / cycle);
				root.rotate.y = PI * ease * direction + startAngle;

				root.updateGraph();
				render();

				frame = requestAnimationFrame(animate);
			}
		};

		if (index > 0) previous.removeAttribute('disabled');
		if (index < shapes.length - 1) next.removeAttribute('disabled');

		function spin(dir) {
			direction = dir;
			index += direction;

			const { color, background, path } = shapes[index];

			const side = startAngle === 0 ? back : front;
			side.children[0].color = background;
			side.children[1].remove();
			new Shape({
				addTo: side,
				color: color,
				stroke: 2,
				fill: true,
				path: path
			});

			state = 'animate';

			frame = requestAnimationFrame(animate);
		}

		function spinBack() {
			if (state !== 'wait') return;
			if (index <= 0) return;
			if (next.hasAttribute('disabled')) next.removeAttribute('disabled');
			if (index <= 1) previous.setAttribute('disabled', 'true');

			spin(-1);
		}
		function spinForward() {
			if (state !== 'wait') return;
			if (index >= shapes.length - 1) return;
			if (previous.hasAttribute('disabled')) previous.removeAttribute('disabled');
			if (index >= shapes.length - 2) next.setAttribute('disabled', 'true');

			spin(1);
		}

		previous.addEventListener('click', spinBack);
		next.addEventListener('click', spinForward);

		return () => {
			previous.removeEventListener('click', spinBack);
			next.removeEventListener('click', spinForward);
			cancelAnimationFrame(frame);
		};
	});
</script>

<div bind:this={widget} class="layout">
	<canvas
		style="display: block; inline-size: 100%; max-inline-size: 400px;"
		width="400"
		height="400"
	/>
	<div class="controls">
		<button disabled aria-label="Previous door">
			<svg viewBox="-4.5 -4.5 9 9" style="display: block;">
				<path
					transform="translate(-1 0) scale(-1 1)"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -2.5 -4 2.5 0 -2.5 4"
				/>
			</svg>
		</button>
		<span>
			{index + 1}
		</span>
		<button disabled aria-label="Next door">
			<svg viewBox="-5 -5 10 10" style="display: block;">
				<path
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -2.5 -4 2.5 0 -2.5 4"
				/>
			</svg>
		</button>
	</div>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	button {
		display: block;
		inline-size: 2.4rem;
		block-size: 2.4rem;
		padding: 0.8rem;
		border-radius: 0.4rem;
		border: none;
		color: hsl(210 16% 93%);
		background: hsl(210 10% 23%);
		transition-property: opacity, scale;
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
	}

	button > svg {
		inline-size: 100%;
		block-size: 100%;
	}

	button:disabled {
		opacity: 0.7;
	}

	button:focus {
		outline: 2px solid hsl(210 10% 23%);
		outline-offset: 2px;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}

	button:not(:disabled):active {
		scale: 0.95;
	}

	span {
		font-weight: 700;
		font-size: 2rem;
		font-family: monospace;
	}
</style>
