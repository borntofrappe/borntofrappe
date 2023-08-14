<script>
	import { onMount } from 'svelte';
	import { Illustration, Shape, TAU } from 'zdog';

	let frame = null;
	let element = null;
	let illustration = null;

	let r = 0;
	let a = 0;
	let z = 0;
	const dr = 0.1;
	const da = 0.15;
	const dz = 0.1;
	let rMax = 25;
	let state = null;

	let path = [];

	const handleSwirl = () => {
		r += dr;
		a = (a + da) % TAU;
		z += dz;

		const x = Math.cos(a) * r;
		const y = Math.sin(a) * r;

		path = [
			...path,
			{
				x,
				y,
				z
			}
		];

		illustration.children[0].remove();
		new Shape({
			addTo: illustration,
			color: 'currentColor',
			stroke: 1,
			closed: false,
			path
		});

		illustration.updateRenderGraph();

		if (r >= rMax) {
			cancelAnimationFrame(frame);
			state = 'end';
			return;
		}

		frame = requestAnimationFrame(handleSwirl);
	};

	const handleStart = () => {
		if (state !== 'start') return;

		frame = requestAnimationFrame(handleSwirl);
		state = 'draw';
	};

	const handleEnd = () => {
		cancelAnimationFrame(frame);

		if (r <= rMax) {
			state = 'start';
		}
	};

	const handleClear = () => {
		path = [];
		r = 0;
		a = 0;
		z = 0;

		illustration.children[0].remove();
		illustration.updateRenderGraph();
		new Shape({
			addTo: illustration
		});

		state = 'start';
	};

	onMount(() => {
		illustration = new Illustration({
			element,
			zoom: 7,
			rotate: {
				x: (TAU / 6) * -1
			},
			translate: {
				y: -15
			}
		});

		illustration.updateRenderGraph();

		new Shape({
			addTo: illustration
		});

		state = 'start';

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<div class="layout">
	{#if state !== null}
		<div class="controls">
			<button
				disabled={r >= rMax}
				on:pointerdown={handleStart}
				on:pointerup={handleEnd}
				on:pointerout={handleEnd}
				aria-label="Keep pressing the button to draw the pseudo-3D spiral"
				on:keydown={(e) => {
					const { code } = e;
					if (code === 'Space') {
						e.preventDefault();
						handleStart();
					}
				}}
				on:keyup={handleEnd}
				on:blur={handleEnd}
			>
				Draw
			</button>

			<button disabled={r === 0} on:click={handleClear}> Clear </button>
		</div>
	{/if}

	<svg bind:this={element} style="display: block;" width="400" height="400">
		<svg viewBox="-28.571428571428573 -28.571428571428573 57.142857142857146 57.142857142857146">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M0.099,-14.906 L0.191,-14.797 L0.27,-14.675 L0.33,-14.541 L0.366,-14.397 L0.373,-14.245 L0.348,-14.09 L0.29,-13.934 L0.197,-13.782 L0.071,-13.635 L-0.087,-13.499 L-0.273,-13.376 L-0.481,-13.27 L-0.707,-13.183 L-0.942,-13.117 L-1.18,-13.074 L-1.411,-13.054 L-1.627,-13.057 L-1.82,-13.081 L-1.98,-13.127 L-2.1,-13.19 L-2.172,-13.268 L-2.191,-13.357 L-2.152,-13.453 L-2.051,-13.549 L-1.887,-13.642 L-1.661,-13.726 L-1.373,-13.795 L-1.028,-13.844 L-0.632,-13.868 L-0.193,-13.862 L0.28,-13.823 L0.777,-13.746 L1.285,-13.629 L1.792,-13.472 L2.285,-13.273 L2.749,-13.034 L3.172,-12.755 L3.54,-12.441 L3.841,-12.095 L4.064,-11.722 L4.199,-11.327 L4.24,-10.919 L4.181,-10.504 L4.019,-10.09 L3.752,-9.686 L3.385,-9.299 L2.92,-8.938 L2.366,-8.611 L1.733,-8.325 L1.033,-8.086 L0.281,-7.9 L-0.508,-7.772 L-1.315,-7.705 L-2.122,-7.7 L-2.908,-7.757 L-3.655,-7.877 L-4.342,-8.054 L-4.952,-8.287 L-5.467,-8.567 L-5.871,-8.89 L-6.152,-9.245 L-6.298,-9.623 L-6.302,-10.015 L-6.159,-10.409 L-5.869,-10.794 L-5.433,-11.158 L-4.857,-11.491 L-4.151,-11.78 L-3.329,-12.017 L-2.405,-12.191 L-1.399,-12.296 L-0.333,-12.324 L0.771,-12.271 L1.888,-12.134 L2.991,-11.912 L4.054,-11.605 L5.051,-11.217 L5.958,-10.752 L6.751,-10.218 L7.408,-9.623 L7.911,-8.978 L8.244,-8.294 L8.395,-7.584 L8.357,-6.863 L8.126,-6.144 L7.702,-5.443 L7.092,-4.774 L6.304,-4.151 L5.354,-3.589 L4.26,-3.099 L3.043,-2.692 L1.731,-2.377 L0.349,-2.163 L-1.07,-2.053 L-2.494,-2.051 L-3.892,-2.157 L-5.229,-2.369 L-6.474,-2.682 L-7.597,-3.088 L-8.568,-3.579 L-9.363,-4.143 L-9.959,-4.766 L-10.339,-5.433 L-10.491,-6.127 L-10.405,-6.832 L-10.08,-7.528 L-9.519,-8.198 L-8.73,-8.824 L-7.726,-9.389 L-6.528,-9.876 L-5.16,-10.271 L-3.648,-10.561 L-2.027,-10.736 L-0.331,-10.788 L1.403,-10.712 L3.135,-10.504 L4.825,-10.165 L6.434,-9.7 L7.924,-9.114 L9.258,-8.417 L10.404,-7.621 L11.331,-6.74 L12.016,-5.793 L12.438,-4.796 L12.584,-3.77 L12.446,-2.737 L12.022,-1.718 L11.318,-0.733 L10.346,0.194 L9.123,1.046 L7.673,1.802 L6.028,2.446 L4.22,2.964 L2.289,3.344 L0.277,3.577 L-1.771,3.657 L-3.809,3.583 L-5.79,3.356 L-7.668,2.981 L-9.399,2.466 L-10.941,1.823 L-12.257,1.067 L-13.312,0.216 L-14.08,-0.711 L-14.539,-1.692 L-14.675,-2.702 L-14.478,-3.717 L-13.951,-4.713 L-13.1,-5.663 L-11.94,-6.545 L-10.493,-7.335 L-8.789,-8.012 L-6.864,-8.556 L-4.757,-8.953 L-2.515,-9.188 L-0.188,-9.253 L2.174,-9.142 L4.517,-8.853 L6.787,-8.388 L8.931,-7.755 L10.9,-6.963 L12.646,-6.026 L14.127,-4.962 L15.306,-3.792 L16.152,-2.538 L16.643,-1.227 L16.762,0.114 L16.503,1.457 L15.866,2.774 L14.863,4.037 L13.511,5.218 L11.837,6.29 L9.876,7.232 L7.668,8.021 L5.261,8.64 L2.707,9.075 L0.063,9.315 L-2.612,9.356 L-5.258,9.196 L-7.815,8.838 L-10.223,8.29 L-12.427,7.565 L-14.373,6.679 L-16.015,5.652 L-17.312,4.509 L-18.231,3.275 L-18.748,1.979 L-18.846,0.654 L-18.518,-0.671 L-17.768,-1.963 L-16.608,-3.189 L-15.06,-4.321 L-13.155,-5.329 L-10.932,-6.186 L-8.439,-6.871 L-5.73,-7.363 L-2.864,-7.649 L0.097,-7.716 L3.085,-7.56 L6.033,-7.179 L8.875,-6.579 L11.544,-5.769 L13.978,-4.762 L16.12,-3.579 L17.919,-2.241 L19.33,-0.777 L20.317,0.785 L20.855,2.411 L20.926,4.068 L20.525,5.72 L19.655,7.332 L18.334,8.868 L16.585,10.295 L14.445,11.582 L11.959,12.7 L9.178,13.624 L6.165,14.334 L2.985,14.814 L-0.292,15.052 L-3.592,15.042 L-6.842,14.786 L-9.965,14.287 L-12.892,13.558 L-15.554,12.615 L-17.888,11.478 L-19.839,10.175 L-21.358,8.735 L-22.409,7.191 L-22.962,5.58 L-23.001,3.939 L-22.521,2.306 L-21.528,0.722 L-20.04,-0.775 L-18.087,-2.15 L-15.708,-3.368 L-12.955,-4.398 L-9.885,-5.214 L-6.566,-5.792 L-3.071,-6.117 L0.523,-6.176 L4.134,-5.964 L7.683,-5.482 L11.087,-4.737 L14.269,-3.74 L17.155,-2.512 L19.677,-1.074 L21.775,0.542 L23.398,2.305 L24.506,4.178 "
				stroke="currentColor"
				stroke-width="1"
				fill="none"
			/>
		</svg>
	</svg>
</div>

<style>
	.layout {
		position: relative;
	}

	.controls {
		position: absolute;
		inline-size: 100%;
		inset-block-end: 0;
		inset-inline-start: 50%;
		translate: -50% 0%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	button {
		color: hsl(0 0% 20%);
		background: hsl(0 0% 99%);
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		font-weight: 700;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		border: none;
		box-shadow: 0 0.1rem currentColor;
		transition: translate 0.2s ease-out, box-shadow 0.2s ease-out;
	}

	button:disabled {
		opacity: 0.5;
	}

	button:not(:disabled):active {
		translate: 0 0.1rem;
		box-shadow: 0 0px currentColor;
	}

	svg {
		display: block;
	}
</style>
