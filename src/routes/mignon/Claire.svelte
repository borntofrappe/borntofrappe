<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	const scale = spring(1, {
		stiffness: 0.1,
		damping: 0.2
	});

	const offset = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);

	let svg;
	let w, h;
	const m = 10;

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { width, height } = svg.getBoundingClientRect();
		w = width;
		h = height;
	};

	const handleStart = () => {
		scale.set(1.1);
	};

	const handleEnd = () => {
		scale.set(1);
	};

	const handleReset = () => {
		scale.set(1);
		offset.set({ x: 0, y: 0 });
	};

	const handleMove = (e) => {
		const { offsetX, offsetY } = e;
		const x = (offsetX / w - 0.5) * m;
		const y = (offsetY / h - 0.5) * m;

		offset.set({ x, y });
	};
</script>

<svelte:window on:resize={handleSize} />

<svg
	viewBox="-55 -55 110 110"
	bind:this={svg}
	on:mousedown={handleStart}
	on:mouseup={handleEnd}
	on:mousemove={handleMove}
	on:mouseleave={handleReset}
	on:click={handleMove}
	on:keydown
>
	<defs>
		<symbol id="star-symbol" viewBox="-4.5 -4.5 9 9">
			<g stroke-width="1" stroke-linejoin="round" stroke-linecap="round">
				<path d="M -4 0 l 2.5 1.5 1.5 2.5 1.5 -2.5 2.5 -1.5 -2.5 -1.5 -1.5 -2.5 -1.5 2.5z" />
			</g>
		</symbol>
		<use id="star" href="#star-symbol" x="-4" y="-4" width="8" height="8" />

		<g id="eyelash">
			<g fill="none" stroke-linejoin="round" stroke-linecap="round">
				<path stroke-width="1.5" d="M -4 0 a 4 4 0 0 0 8 0" />
				<g stroke-width="1">
					<path d="M 0 4 v 2" />
					<path transform="rotate(60)" d="M 0 4 v 2" />
					<path transform="rotate(-60)" d="M 0 4 v 2" />
					<path transform="rotate(-30)" d="M 0 4 v 2" />
					<path transform="rotate(30)" d="M 0 4 v 2" />
				</g>
			</g>
		</g>

		<circle id="moon" r="28" />
		<clipPath id="moon-clip" class="translate">
			<use href="#moon" />
		</clipPath>
	</defs>

	<g fill="#dad35f">
		<g transform="translate({$offset.x * 0.1} {$offset.y * 0.1})">
			<circle cx="-48" cy="-46" r="1" />
			<circle cx="-40" cy="-38" r="1.1" />
			<circle cx="-43" cy="-42" r="0.9" />
			<circle cx="-38" cy="-46" r="1.8" />
			<circle cx="-34" cy="-40" r="1.2" />
			<circle cx="39" cy="-42" r="0.9" />
			<circle cx="35" cy="-38" r="1" />
			<circle cx="34" cy="-45" r="0.75" />
			<circle cx="42" cy="44" r="0.75" />
			<circle cx="-33" cy="35" r="1" />
		</g>
		<g transform="translate({$offset.x * 0.3} {$offset.y * 0.3})">
			<g stroke="#dad35f">
				<use transform="translate(35 -38)" href="#star" />
				<use transform="translate(-38 28) scale(0.8)" href="#star" />
				<use transform="translate(29 38) scale(0.7)" href="#star" />
				<use transform="translate(35 45) scale(0.5)" href="#star" />
				<use transform="translate(38 35) scale(0.6)" href="#star" />
			</g>
		</g>
	</g>

	<g transform="scale({$scale})">
		<g transform="translate({$offset.x * 0.75} {$offset.y * 0.75})">
			<g>
				<use href="#moon" fill="#dad35f" />
				<g fill="#bfb5f5">
					<circle r="1.75" cx="19.75" cy="14" />
					<circle r="1.5" cx="16.5" cy="18.5" />
					<circle r="1" cx="13.25" cy="21.5" />
				</g>
				<g transform="translate({$offset.x} {$offset.y})">
					<g stroke="#bfb5f5">
						<g transform="translate(0 -4)">
							<use href="#eyelash" x="-10" />
							<use href="#eyelash" x="10" />
						</g>
					</g>
					<g fill="#bfb5f5">
						<g transform="translate(0 10)">
							<g transform="scale({$scale ** 1.5})">
								<g stroke="#bfb5f5" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
									<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>

			<g clip-path="url(#moon-clip)">
				<use href="#moon" fill="#f2ec64" />
				<g fill="#dad35f">
					<circle r="1.75" cx="19.75" cy="14" />
					<circle r="1.5" cx="16.5" cy="18.5" />
					<circle r="1" cx="13.25" cy="21.5" />
				</g>
				<g transform="translate({$offset.x} {$offset.y})">
					<g fill="#dad35f">
						<g transform="translate(0 -3)">
							<g transform="translate(-10 0)">
								<circle class="blink" r="4.5" />
							</g>
							<g transform="translate(10 0)">
								<circle class="blink" r="4.5" />
							</g>
						</g>
						<g transform="translate(0 10)">
							<g transform="scale(1.25)">
								<g transform="scale({$scale ** 2})">
									<g
										stroke="#dad35f"
										stroke-width="2"
										stroke-linejoin="round"
										stroke-linecap="round"
									>
										<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	.translate {
		transform: translate(100px, -45px);
		animation: translate 35s cubic-bezier(0.45, 0, 0.55, 1) infinite;
	}

	.blink {
		animation: blink 7s infinite cubic-bezier(0.65, 0, 0.35, 1);
	}

	@keyframes translate {
		0%,
		12.5% {
			transform: translate(100px, -45px);
		}

		37.5%,
		62.5% {
			transform: translate(0px, 0px);
		}

		87.5%,
		100% {
			transform: translate(-100px, 40px);
		}
	}

	@keyframes blink {
		8%,
		12% {
			transform: scaleY(0);
		}
		6%,
		10%,
		14% {
			transform: scaleY(1);
		}
	}
</style>
