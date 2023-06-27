<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	export let useCurves = true;

	let svg = null;
	let canAnimate = true;

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
		<defs>
			<symbol id="circle-race-car" viewBox="0 0 100 70">
				<mask id="circle-race-car-mask-cockpit">
					<rect width="100" height="70" fill="white" />
					<path d="M 66 0 v 15 a 20 20 0 0 0 0 40 v 15 h 34 v -70z" fill="black" />
				</mask>
				<mask id="circle-race-car-mask-spoiler">
					<rect width="100" height="70" fill="white" />
					<rect x="4" width="5" height="70" fill="black" />
				</mask>

				<g stroke="var(--c0, #220b08)">
					<path stroke-width="5" d="M 24 0 v 70" />
					<path stroke-width="4" d="M 73 20 v 30" />
				</g>
				<g fill="var(--c0, #220b08)">
					<rect transform="translate(15 0)" rx="2" width="18" height="14" />
					<rect transform="translate(15 56)" rx="2" width="18" height="14" />
					<rect transform="translate(65 10)" rx="1.5" width="16" height="10" />
					<rect transform="translate(65 50)" rx="1.5" width="16" height="10" />
				</g>
				<g stroke-linecap="round" stroke-linejoin="round">
					<g stroke-width="2">
						<path
							fill="var(--c1, #273665)"
							stroke="var(--c1, #273665)"
							transform="translate(0 18)"
							d="M 1 1 l 50 -1 l 8 5 q 30 2 40 12 q -10 10 -40 12 l -8 5 l -50 -1z"
						/>
						<path
							fill="var(--c2, #4568a3)"
							stroke="var(--c2, #4568a3)"
							transform="translate(0 18)"
							d="M 1 1 l 50 2 l 8 2 q 30 2 40 12 q -10 10 -40 12 l -8 2 l -50 2z"
						/>

						<path
							fill="var(--c1, #273665)"
							stroke="var(--c1, #273665)"
							transform="translate(88 18)"
							d="M 1 1 l 10 2 0 28 -10 2z"
						/>
						<path
							fill="var(--c2, #4568a3)"
							stroke="var(--c2, #4568a3)"
							transform="translate(0 15)"
							d="M 1 1 l 14 1 0 36 -14 1z"
						/>
						<g mask="url(#circle-race-car-mask-spoiler)">
							<path
								fill="var(--c1, #273665)"
								stroke="var(--c1, #273665)"
								transform="translate(0 15)"
								d="M 1 1 l 14 1 0 36 -14 1z"
							/>
						</g>
					</g>
					<g>
						<path
							fill="var(--c0, #220b08)"
							transform="translate(30 35)"
							d="M 0 0 c 0 -15 40 -10 40 0 0 10 -40 15 -40 0"
						/>
						<g mask="url(#circle-race-car-mask-cockpit)">
							<path
								fill="var(--c1, #273665)"
								transform="translate(30 35)"
								d="M 0 0 c 0 -15 40 -10 40 0 0 10 -40 15 -40 0"
							/>
						</g>
					</g>
				</g>
				<circle fill="var(--c3, #d5d3ca)" cx="52.5" cy="35" r="5.25" />
			</symbol>
		</defs>
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
				href="#circle-race-car"
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
