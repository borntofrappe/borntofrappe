<script>
	import { onMount } from 'svelte';
	import { backInOut } from 'svelte/easing';
	import { Anchor, Group, Box, Hemisphere, TAU } from 'zdog';

	let div = null;

	onMount(() => {
		const colors = {
			white: 'hsl(210 16% 93%)',
			black: 'hsl(210 10% 23%)',
			accent: 'hsl(42 96% 50%)'
		};

		const stroke = 20;
		const size = 50;
		const diameter = 13;
		const offset = 16;

		const root = new Anchor();

		const dice = new Box({
			addTo: root,
			color: colors.white,
			stroke,
			width: size,
			height: size,
			depth: size
		});

		const dot = new Hemisphere({
			color: colors.black,
			stroke: 0,
			diameter
		});

		const one = new Group({
			addTo: dice,
			translate: {
				y: (size / 2 + stroke / 2) * -1
			},
			rotate: {
				x: TAU / 4
			}
		});

		dot.copy({
			addTo: one,
			color: colors.accent
		});

		const six = new Group({
			addTo: dice,
			translate: {
				y: size / 2 + stroke / 2
			},
			rotate: {
				x: (TAU / 4) * -1
			}
		});

		for (const { x, y } of [
			{ x: offset, y: offset * -1 },
			{ x: offset, y: 0 },
			{ x: offset, y: offset },
			{ x: offset * -1, y: offset },
			{ x: offset * -1, y: 0 },
			{ x: offset * -1, y: offset * -1 }
		]) {
			dot.copy({
				addTo: six,
				translate: {
					x,
					y
				}
			});
		}

		const two = new Group({
			addTo: dice,
			translate: {
				z: (size / 2 + stroke / 2) * -1
			},
			rotate: {
				x: TAU / 2
			}
		});

		for (const { x, y } of [
			{ x: offset, y: offset * -1 },
			{ x: offset * -1, y: offset }
		]) {
			dot.copy({
				addTo: two,
				translate: {
					x,
					y
				}
			});
		}

		const five = new Group({
			addTo: dice,
			translate: {
				z: size / 2 + stroke / 2
			}
		});

		for (const { x, y } of [
			{ x: 0, y: 0 },
			{ x: offset, y: offset * -1 },
			{ x: offset, y: offset },
			{ x: offset * -1, y: offset },
			{ x: offset * -1, y: offset * -1 }
		]) {
			dot.copy({
				addTo: five,
				translate: {
					x,
					y
				}
			});
		}

		const three = new Group({
			addTo: dice,
			translate: {
				x: (size / 2 + stroke / 2) * -1
			},
			rotate: {
				y: TAU / 4
			}
		});

		for (const { x, y } of [
			{ x: 0, y: -0 },
			{ x: offset, y: offset * -1 },
			{ x: offset * -1, y: offset }
		]) {
			dot.copy({
				addTo: three,
				translate: {
					x,
					y
				}
			});
		}

		const four = new Group({
			addTo: dice,
			translate: {
				x: size / 2 + stroke / 2
			},
			rotate: {
				y: (TAU / 4) * -1
			}
		});

		for (const { x, y } of [
			{ x: offset, y: offset * -1 },
			{ x: offset, y: offset },
			{ x: offset * -1, y: offset },
			{ x: offset * -1, y: offset * -1 }
		]) {
			dot.copy({
				addTo: four,
				translate: {
					x,
					y
				}
			});
		}

		const element = div.querySelector('canvas');
		const { width, height } = element;
		const context = element.getContext('2d');
		const zoom = 2.5;

		context.lineJoin = 'round';
		context.lineCap = 'round';

		const render = (zoom = 1) => {
			context.clearRect(0, 0, width, height);
			context.save();
			context.translate(width / 2, height / 2);
			context.scale(zoom, zoom);
			root.renderGraphCanvas(context);
			context.restore();
		};

		root.rotate = {
			x: (TAU / 14) * -1,
			y: TAU / 8,
			z: 0
		};
		root.updateGraph();
		render(zoom);

		let state = 'wait';
		const button = div.querySelector('button');
		button.removeAttribute('disabled');
		button.setAttribute('data-state', state);

		let frame = null;
		let ticker = 0;
		const cycle = 220;
		let rotate = { ...root.rotate };
		let rotateRoll = { ...rotate };

		const animate = () => {
			ticker++;
			if (ticker >= cycle) {
				ticker = ticker % cycle;

				root.rotate = {
					x: (rotate.x + rotateRoll.x) % TAU,
					y: (rotate.y + rotateRoll.y) % TAU,
					z: (rotate.z + rotateRoll.z) % TAU
				};

				rotate = { ...root.rotate };

				root.updateGraph();
				render(zoom);

				state = 'wait';
				button.setAttribute('data-state', state);

				cancelAnimationFrame(frame);
			} else {
				const ease = backInOut(ticker / cycle);

				root.rotate = {
					x: rotate.x + ease * rotateRoll.x,
					y: rotate.y + ease * rotateRoll.y,
					z: rotate.z + ease * rotateRoll.z
				};

				root.updateGraph();
				render(zoom + Math.sin(ease * Math.PI));
				frame = requestAnimationFrame(animate);
			}
		};

		const randomAngle = () => (Math.floor(Math.random() * 4) * TAU) / 4;

		const handleRoll = () => {
			if (state !== 'wait') return;

			state = 'roll';
			button.setAttribute('data-state', state);

			const [x, y, z] = Array(3)
				.fill()
				.map((_) => randomAngle() + TAU * 3);

			rotateRoll = {
				x: x + (TAU - rotate.x),
				y: y + (TAU - rotate.y),
				z: z + (TAU - rotate.z)
			};

			frame = requestAnimationFrame(animate);
		};

		button.addEventListener('click', handleRoll);

		return () => {
			button.removeEventListener('click', handleRoll);
			cancelAnimationFrame(frame);
		};
	});
</script>

<div bind:this={div}>
	<canvas
		style="display: block; inline-size: 100%; max-inline-size: 400px;"
		width="400"
		height="400"
	/>
	<button disabled data-state={false || 'roll'}>Roll</button>
</div>

<style>
	div {
		display: inline-block;
		position: relative;
	}

	div > button {
		position: absolute;
		inset-inline-start: 50%;
		inset-block-end: 0%;
		translate: -50% 0%;
	}

	button {
		--_color: hsl(210 16% 93%);
		--_background: hsl(210 10% 23%);
		--_active: hsl(210 9% 31%);
		font: inherit;
		font-size: 1rem;
		color: var(--_color, hsl(0 0% 90%));
		background: var(--_background, hsl(0 0% 20%));
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.025rem;
		border: none;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		transition: scale 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
		transform-origin: 50% 100%;
	}

	button:disabled {
		opacity: 0.7;
	}

	button:focus {
		outline: 2px solid var(--_background, hsl(0 0% 20%));
		outline-offset: 2px;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}

	button[data-state='roll'] {
		scale: 0.8;
		--_background: var(--_active);
	}
</style>
