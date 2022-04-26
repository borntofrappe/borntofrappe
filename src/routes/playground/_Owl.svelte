<script>
	import { onMount } from 'svelte';
	import { tweened, spring } from 'svelte/motion';
	import { elasticOut } from 'svelte/easing';

	const opacity = tweened(0, {
		duration: 150
	});
	const focus = tweened(1, {
		duration: 1000,
		easing: elasticOut
	});

	let scale = spring(1);
	let rotate = spring(0);

	let svg;
	let w, h;

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { width, height } = svg.getBoundingClientRect();
		w = width;
		h = height;
		console.log('resize!');
	};

	const handleStart = () => {
		opacity.set(0.2);
	};

	const handleEnd = () => {
		opacity.set(0);
		scale.set(1);
		rotate.set(0);
	};

	const handleMove = ({ offsetX, offsetY }) => {
		const x = offsetX / w - 0.5;
		const y = offsetY / h - 0.5;
		const d = 1 - 1.5 * (x ** 2 + y ** 2) ** 0.5;

		scale.set(1 - 0.2 * d);
		rotate.set(-20 * d);
	};

	const handleMousedown = () => {
		focus.set(1.05);
	};

	const handleMouseup = () => {
		focus.set(1);
	};
</script>

<svelte:head>
	<link rel="icon" href="/icons/owl.svg" type="image/svg+xml" />
</svelte:head>

<svelte:window on:resize={handleSize} />

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-50 -45 100 100"
	bind:this={svg}
	on:mousedown={handleMousedown}
	on:mouseup={handleMouseup}
	on:mouseenter={handleStart}
	on:touchstart={handleStart}
	on:mouseleave={handleEnd}
	on:touchend={handleEnd}
	on:mousemove={handleMove}
	on:touchmove={(e) => {
		const { clientX, clientY } = e.touches[0];
		handleMove({
			offsetX: clientX,
			offsetY: clientY
		});
	}}
>
	<g transform="scale({$focus})">
		<g
			fill="currentColor"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g id="h" style="color: #ae51bb;">
				<g transform="scale({$scale})">
					<g transform="translate(-22 -20) rotate(-30)">
						<g transform="rotate({$rotate})">
							<path d="M 0 10 a 10 10 0 0 0 0 -20 c 1.5 6 1.5 14 0 20" />
						</g>
					</g>
				</g>
			</g>
			<use transform="scale(-1 1)" href="#h" />

			<g transform="scale({$scale})">
				<path
					style="color: #ae51bb;"
					d="M -33 0 a 33 33 0 0 1 66 0 c 0 11 -5 30 -33 30 -28 0 -33 -19 -33 -30"
				/>
			</g>

			<g id="c" style="color: #fcc43d">
				<g transform="translate(-12 0)">
					<g opacity={$opacity}>
						<ellipse rx="4" ry="2.5" />
					</g>
				</g>
			</g>

			<use transform="scale(-1 1)" href="#c" />

			<g id="e">
				<g transform="translate(12 -10)">
					<g transform="scale({$scale ** 2})">
						<circle r="9" style="color: #ffffff;" />
					</g>
					<g transform="scale({$scale})">
						<circle r="5" style="color: #7332b4;" />
						<g transform="rotate({$rotate})">
							<circle r="2" cx="-2.5" cy="-2.5" style="color: #ffffff;" />
						</g>
					</g>
				</g>
			</g>
			<use transform="scale(-1 1)" href="#e" />

			<g transform="scale({$scale})">
				<path style="color: #fcc43d;" d="M -3 2 a 3 3 0 0 1 6 0 q 0 3 -3 6 -3 -3 -3 -6" />
			</g>

			<g id="w" style="color: #7332b4;">
				<g transform="scale({$scale})">
					<g transform="translate(-30 8)">
						<g transform="rotate({$rotate})">
							<path
								d="M 0 -10 a 10 10 0 0 1 10 10 q 0 8 -10 14 -10 -6 -10 -14 a 10 10 0 0 1 10 -10"
							/>
						</g>
					</g>
				</g>
			</g>
			<use transform="scale(-1 1)" href="#w" />

			<g id="f" style="color: #fcc43d;">
				<g transform="translate(-8 -9)">
					<g transform="scale({$scale})">
						<g transform="rotate({$rotate / 10})">
							<g transform="translate(-2 40)">
								<rect rx="2" x="-2" y="-6" width="4" height="12" />
								<g id="ff">
									<g transform="translate(2.5 0)">
										<rect rx="2" y="-4" width="4" height="8" />
									</g>
								</g>
								<use transform="scale(-1 1)" href="#ff" />
							</g>
						</g>
					</g>
				</g>
			</g>
			<use transform="scale(-1 1)" href="#f" />
		</g>
	</g>
</svg>
