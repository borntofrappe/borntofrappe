<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let svg = null;
	let canAnimate = true;

	const handleAnimation = () => {
		canAnimate = true;
	};

	onMount(() => {
		const animateMotion = svg.querySelector('animateMotion');
		animateMotion.addEventListener('endEvent', handleAnimation);

		return () => {
			animateMotion.removeEventListener('endEvent', handleAnimation);
		};
	});

	const handleClick = () => {
		if (!canAnimate) return;
		canAnimate = false;

		svg.querySelector('animateMotion').beginElement();
	};
</script>

<div>
	{#if canAnimate}
		<button
			in:scale={{ duration: 400, easing: backOut }}
			out:scale={{ duration: 350 }}
			on:click={handleClick}
		>
			Take a lap
		</button>
	{/if}

	<svg bind:this={svg} viewBox="0 0 80 40">
		<defs>
			<path id="lap-race-track" d="M 40 5 h 20 a 15 15 0 0 1 0 30 h -40 a 15 15 0 0 1 0 -30 h 20" />
		</defs>

		<g fill="none">
			<use stroke="#160d05" y="0.3" stroke-width="7" href="#lap-race-track" />
			<use stroke="#3f3c32" stroke-width="7" href="#lap-race-track" />
			<use stroke="#d5d3ca" stroke-width="1.1" href="#lap-race-track" />
			<use stroke="#3f3c32" stroke-width="0.6" href="#lap-race-track" />
		</g>

		<g>
			<animateMotion
				begin="indefinite"
				dur="5s"
				fill="freeze"
				rotate="auto"
				restart="whenNotActive"
			>
				<mpath href="#lap-race-track" />
			</animateMotion>
			<animateMotion fill="freeze" rotate="auto" restart="never">
				<mpath href="#lap-race-track" />
			</animateMotion>

			<use
				style="--c0: #160d05; --c1: #e36636; --c2: #f5ad37; --c3: #d5d3ca"
				href="#the-race-is-on-car"
				x="-3.5"
				y="-3.5"
				width="7"
				height="7"
			/>
		</g>
	</svg>
</div>

<style>
	svg {
		display: block;
	}

	div {
		position: relative;
	}

	div > button {
		position: absolute;
		inset-inline-start: 50%;
		inset-block-start: 50%;
		transform: translate(-50%, -50%);
	}

	button {
		cursor: pointer;
		display: block;
		border: none;
		font-weight: 700;
		padding: 0.2rem 0.5rem;
		color: #d5d3ca;
		background: #3f3c32;
		border-bottom: 1px solid #160d05;
		border-radius: 0.25rem;
	}
</style>
