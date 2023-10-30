<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { backIn, backOut } from 'svelte/easing';
	import { Illustration, Group, Box, Hemisphere, TAU } from 'zdog';

	let element = null;
	let illustration = null;

	let state = null;
	const tween = tweened({ x: (TAU / 14) * -1, y: TAU / 8, z: 0, zoom: 2.5 });
	const duration = 2000;

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

		const { x, y, z, zoom } = $tween;

		illustration = new Illustration({
			element,
			zoom,
			rotate: { x, y, z }
		});

		const dice = new Box({
			addTo: illustration,
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

		illustration.updateRenderGraph();

		state = 'wait';
	});

	const handleClick = async () => {
		if (illustration === null || state !== 'wait') return;

		state = 'roll';

		const { zoom } = $tween;

		const [x, y, z] = Array(3)
			.fill()
			.map((_) => (Math.floor(Math.random() * 4) * TAU) / 4 + Math.ceil(Math.random() * 3) * TAU);

		await tween.set(
			{ x: x / 2, y: y / 2, z: z / 2, zoom: zoom * 1.5 },
			{ easing: backIn, duration }
		);
		await tween.set({ x, y, z, zoom }, { easing: backOut, duration: duration * 0.8 });
		await tween.set({ x: x % TAU, y: y % TAU, z: z % TAU, zoom }, { duration: 0 });

		state = 'wait';
	};

	const updateIllustration = ({ x, y, z, zoom }) => {
		if (illustration === null) return;

		illustration.rotate.x = x;
		illustration.rotate.y = y;
		illustration.rotate.z = z;
		illustration.zoom = zoom;
		illustration.updateRenderGraph();
	};

	$: updateIllustration($tween);
</script>

<div>
	<canvas bind:this={element} style="display: block;" width="400" height="400" />
	{#if state !== 'null'}
		<button data-state={state} on:click={handleClick}>Roll</button>
	{/if}
</div>

<style>
	div {
		display: inline-block;
		position: relative;
		aspect-ratio: 1/1;
	}

	div > button {
		position: absolute;
		inset-inline-start: 50%;
		inset-block-end: 0%;
		translate: -50% 0%;
	}

	div > canvas {
		display: block;
		width: 400px;
		height: 400px;
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

	button:focus {
		outline-offset: 0.25rem;
		outline-color: var(--_background, hsl(0 0% 20%));
	}

	button[data-state='roll'] {
		scale: 0.8;
		--_background: var(--_active);
	}
</style>
