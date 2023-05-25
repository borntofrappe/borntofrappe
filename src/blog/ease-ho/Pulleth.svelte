<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';

	let canAnimate = false;
	let svg = null;

	onMount(() => {
		canAnimate = true;
	});

	const handleClick = () => {
		if (!canAnimate) return;

		canAnimate = false;
		const animations = svg.querySelectorAll('.animate');
		animations.forEach((animation) => {
			animation.beginElement();
		});
	};
</script>

<div>
	<svg bind:this={svg} viewBox="0 0 400 400">
		<title>The sword in the stone</title>
		<defs>
			<linearGradient
				id="pulleth-gradient-light"
				x1="0"
				x2="0.2"
				y1="0"
				y2="0"
				spreadMethod="repeat"
			>
				<stop stop-opacity="0.18" stop-color="white" offset="0" />
				<stop stop-opacity="0.22" stop-color="white" offset="0.5" />
				<stop stop-opacity="0.18" stop-color="white" offset="1" />
			</linearGradient>
			<pattern
				id="pulleth-pattern-wall"
				width="80"
				height="40"
				viewBox="0 0 80 40"
				patternUnits="userSpaceOnUse"
			>
				<g fill="#3e5460" stroke="#314555" stroke-width="1">
					<rect width="40" height="20" />
					<rect x="40" width="40" height="20" />
					<path d="M 0 20 h 20 v 20 h -20" />
					<path d="M 80 20 h -20 v 20 h 20" />
					<rect x="20" y="20" width="40" height="20" />
				</g>
			</pattern>
		</defs>

		<rect fill="url(#pulleth-pattern-wall)" width="400" height="400" />

		<g transform="translate(200 200)">
			<g>
				<animateTransform
					class="animate"
					id="pullethStirSword"
					attributeName="transform"
					type="translate"
					begin="indefinite"
					dur="0.5s"
					to="0 -10"
					fill="freeze"
					keyTimes="0; 1"
					calcMode="spline"
					keySplines="0.83 0.16 0.16 0.72"
				/>
				<g>
					<animateMotion path="M 0 0 c 0 -80 -50 -80 -80 -50" rotate="auto" />
					<animateMotion
						begin="pullethStirSword.end"
						path="M 0 0 c 0 -80 -50 -80 -80 -50"
						dur="4s"
						rotate="auto"
						fill="freeze"
						keyTimes="0; 1"
						calcMode="spline"
						keySplines="0.94 0.36 0.17 0.82"
					/>
					<g transform="rotate(90)">
						<g>
							<path fill="#c8bf9d" d="M 0 30 v 124 l -7 -10 l -2 -114" />
							<path fill="#eeeedd" d="M 0 30 v 124 l 7 -10 l 2 -114" />
							<g fill="#c7963a">
								<path d="M 0.5 0 q 1.5 20 3 30 l -7.5 0 q 1.5 -10 3 -30" />
								<circle r="5" />
								<path
									d="M 0 26 c 6 0 20 1 35 10 c -15 -4 -30 -10 -35 2 c -5 -10 -20 -6 -35 -2 c 15 -9 29 -10 35 -10"
								/>
								<circle cx="33.5" cy="36" r="2" />
								<circle cx="-33.5" cy="36" r="2" />
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>

		<g transform="translate(200 310)">
			<path
				fill="#1b1913"
				stroke="#1b1913"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M -50 0 l 100 0 l -30 30 20 20 -80 0 20 -20z"
			/>
			<path
				fill="none"
				stroke="#d8dae9"
				stroke-width="6"
				stroke-linecap="round"
				d="M -50 0 l 100 0"
			/>
			<g transform="translate(0 50)">
				<path
					fill="#2a2720"
					stroke="#2a2720"
					stroke-width="5"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -100 0 l 200 0 l 5 40 l -210 0z"
				/>
				<path
					fill="none"
					stroke="#d8dae9"
					stroke-width="4"
					stroke-linecap="round"
					d="M -100 -2 l 200 0"
				/>
			</g>
		</g>

		<g fill="url(#pulleth-gradient-light)">
			<set attributeName="opacity" to="0" />
			<animate
				attributeName="opacity"
				values="0; 0; 0; 1"
				dur="5s"
				fill="freeze"
				begin="indefinite"
				class="animate"
			/>
			<animateTransform
				attributeName="transform"
				type="translate"
				to="2000 0"
				dur="60s"
				repeatCount="indefinite"
				class="animate"
				begin="indefinite"
			/>
			<rect width="2000" height="400" />
			<rect x="-2000" width="2000" height="400" />
		</g>
	</svg>

	{#if canAnimate}
		<button out:fly={{ y: -20, duration: 500, easing: quadIn }} on:click|once={handleClick}>
			Pulleth
		</button>
	{/if}
</div>

<style>
	svg {
		display: block;
	}

	div {
		position: relative;
	}

	button {
		cursor: pointer;
		position: absolute;
		display: block;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: #d8dae9;
		background: #1b1913;
		border: none;
		border-radius: 0.25rem;
		padding: 0.2rem 0.75rem;
	}
</style>
