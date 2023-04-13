<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let svg = null;
	let canAnimate = true;
	let useCurves = true;

	const n = 12;
	const offset = 25;

	const getPath = (points = 12, useCurves = true) =>
		useCurves
			? Array(points)
					.fill()
					.map((_, i, { length }) => {
						const angle = (((360 / length) * i - 90) / 180) * Math.PI;
						const x = Math.floor(Math.cos(angle) * offset);
						const y = Math.floor(Math.sin(angle) * offset);
						return [x, y];
					})
					.reduce((acc, curr, i, arr) => {
						const [x, y] = curr;
						if (i === 0) {
							return `M ${x} ${y}`;
						} else if (i === 1) {
							const [x0, y0] = arr[0];
							const noise = Math.random() > 0.5 ? Math.random() : Math.random() * -1;
							const xm = (x0 + x) / 2 + noise * -1;
							const ym = (y0 + y) / 2 + noise;
							return `${acc} Q ${xm} ${ym} ${x} ${y} T`;
						} else if (i === arr.length - 1) {
							const [x0, y0] = arr[0];
							return `${acc} ${x} ${y} ${x0} ${y0}`;
						}
						return `${acc} ${x} ${y}`;
					}, '')
			: Array(points)
					.fill()
					.map((_, i, { length }) => {
						const angle = (((360 / length) * i - 90) / 180) * Math.PI;
						const x = Math.floor(Math.cos(angle) * offset);
						const y = Math.floor(Math.sin(angle) * offset);
						return [x, y];
					})
					.reduce((acc, curr, i, arr) => {
						const [x, y] = curr;
						if (i === 0) {
							return `M ${x} ${y} L`;
						} else if (i === arr.length - 1) {
							const [x0, y0] = arr[0];
							return `${acc} ${x} ${y} ${x0} ${y0}`;
						}
						return `${acc} ${x} ${y}`;
					}, '');

	let path = getPath(n, useCurves);

	const handleEnd = () => {
		path = getPath(n, useCurves);

		canAnimate = true;
	};

	onMount(() => {
		const animateMotion = svg.querySelector('animateMotion');
		animateMotion.addEventListener('endEvent', handleEnd);

		return () => {
			animateMotion.removeEventListener('endEvent', handleEnd);
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

	<svg bind:this={svg} viewBox="-30 -30 60 60">
		<g fill="none">
			<circle stroke="#160d05" y="0.3" stroke-width="7" r="25" />
			<circle stroke="#3f3c32" stroke-width="7" r="25" />
			<circle stroke="#d5d3ca" stroke-width="1.1" r="25" />
			<circle stroke="#3f3c32" stroke-width="0.6" r="25" />
		</g>
		<g>
			<animateMotion
				begin="indefinite"
				{path}
				dur="5s"
				fill="freeze"
				rotate="auto"
				restart="whenNotActive"
			/>
			<animateMotion {path} fill="freeze" rotate="auto" restart="never" />

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
