<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { backIn, backOut, backInOut } from 'svelte/easing';
	import { Illustration, Anchor, Shape } from 'zdog';

	const black = 'hsl(31 100% 20%)';
	const white = 'hsl(45 97% 54%)';

	let svg = null;
	const tween = tweened(0);

	let state = 'painting';

	const handleClick = async () => {
		state = 'illustrating';

		const zoom = 4;

		const illustration = new Illustration({
			element: svg,
			zoom
		});

		const face = new Shape({
			addTo: illustration,
			color: white,
			stroke: 40 * 2
		});

		const front = new Anchor({
			addTo: face,
			translate: {
				z: 40
			}
		});

		const eye = new Anchor();

		const eyeSocket = new Anchor({
			addTo: eye,
			translate: {
				x: 15,
				y: -7
			},
			rotate: {
				z: (5 / 180) * Math.PI
			}
		});

		new Shape({
			addTo: eyeSocket,
			color: black,
			stroke: 3,
			fill: true,
			path: [
				{ x: 6, y: 0 },
				{
					arc: [
						{ x: 6, y: -6 },
						{ x: 0, y: -6 }
					]
				},
				{
					arc: [
						{ x: -6, y: -6 },
						{ x: -6, y: 0 }
					]
				}
			]
		});

		new Shape({
			addTo: eyeSocket,
			color: black,
			stroke: 2,
			closed: false,
			path: [
				{ x: 6.5, y: 0 },
				{
					bezier: [
						{ x: 3, y: -4 },
						{ x: -3, y: -4 },
						{ x: -6.5, y: 0 }
					]
				}
			],
			translate: {
				x: 3,
				y: -10
			},
			rotate: {
				z: (15 / 180) * Math.PI
			}
		});

		const eyes = [
			eye.copyGraph({
				addTo: front
			}),
			eye.copyGraph({
				addTo: front,
				scale: {
					x: -1
				}
			})
		];

		const mouth = new Anchor({
			addTo: front
		});

		new Shape({
			addTo: mouth,
			color: black,
			stroke: 3,
			fill: true,
			path: [
				{ x: 18, y: 0 },
				{
					bezier: [
						{ x: 14, y: 22 },
						{ x: -14, y: 22 },
						{ x: -18, y: 0 }
					]
				}
			],
			translate: {
				y: 10
			}
		});

		illustration.updateRenderGraph();

		state = 'animating';

		const bob = (value, cw = true) => {
			illustration.rotate.x = value * 0.1;
			illustration.rotate.z = cw ? value * 0.2 : value * 0.2 * -1;
			illustration.translate.y = value * 6 * -1;
			eyes.forEach((eye) => {
				eye.translate.y = value * 4 * -1;
			});
			mouth.translate.y = value * 4 * -1;
			mouth.scale = 1 + value * 0.1;
			illustration.scale = 1 + value * 0.1;
		};

		await tween.set(-1, {
			duration: 1100,
			easing: backInOut,
			interpolate: (a, b) => (t) => {
				const value = (b - a) * t + a;
				bob(value);
				illustration.updateRenderGraph();
			}
		});

		await tween.set(1, {
			duration: 600,
			easing: backOut,
			interpolate: (a, b) => (t) => {
				const value = (b - a) * t + a;
				bob(value);
				illustration.updateRenderGraph();
			}
		});

		let cw = true;

		const animate = async () => {
			const value = $tween === 0 ? 1 : 0;
			if (value === 1) {
				cw = !cw;
			}

			await tween.set(value, {
				duration: 1250,
				easing: backInOut,
				interpolate: (a, b) => (t) => {
					const value = (b - a) * t + a;
					bob(value, cw);
					illustration.updateRenderGraph();
				}
			});

			if (state === 'animating') {
				animate();
			}
		};

		animate();
	};

	onMount(() => {
		state = 'waiting';

		return () => {
			state = 'done';
		};
	});
</script>

<div>
	{#if state === 'waiting'}
		<button out:fly|once={{ x: 10, y: 10, easing: backIn, duration: 500 }} on:click={handleClick}>
			Break through
		</button>
	{/if}
	<svg bind:this={svg} style="display: block;" viewBox="0 0 1 1" width="400" height="400">
		<svg style:--black={black} style:--white={white} viewBox="-50 -50 100 100">
			<circle fill="var(--white, hsl(0 0% 90%))" r="40" />
			<g
				fill="var(--black, hsl(0 0% 20%))"
				stroke="var(--black, hsl(0 0% 20%))"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<g id="bob-eye" transform="translate(15 -7) rotate(5)">
					<path stroke-width="3" d="M 6 0 A 6 6 0 0 0 -6 0 Z" />
					<path
						transform="translate(3 -10) rotate(15)"
						fill="none"
						stroke-width="2"
						d="M 6.5 0 C 3 -4 -3 -4 -6.5 0"
					/>
				</g>
				<use transform="scale(-1 1)" href="#bob-eye" />
				<path transform="translate(0 10)" stroke-width="3" d="M 18 0 C 14 22 -14 22 -18 0 Z" />
			</g>
		</svg>
	</svg>
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

	div > svg {
		display: block;
	}

	button {
		--_color: hsl(43 13% 90%);
		--_background: hsl(40 13% 23%);
		cursor: pointer;
		font: inherit;
		font-size: 1rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.02rem;
		color: var(--_color, hsl(0 0% 90%));
		background: var(--_background, hsl(0 0% 20%));
		border: none;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
	}

	button:focus {
		outline-offset: 0.25rem;
		outline-color: var(--_background, hsl(0 0% 20%));
	}
</style>
