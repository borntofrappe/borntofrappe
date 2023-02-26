<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	const startAngle = 90;
	const angle = spring(startAngle, {
		stiffness: 0.1,
		damping: 0.25
	});

	const scale = spring(0.8, {
		stiffness: 0.1,
		damping: 0.2
	});

	const bounce = spring(1, {
		stiffness: 0.1,
		damping: 0.2
	});

	let svg;
	let t;
	let h;

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { top, height } = svg.getBoundingClientRect();
		t = top;
		h = height;
	};

	const handleMove = ({ offsetY }) => {
		const y = 1 - offsetY / h;
		scale.set(0.8 + y * 0.2);
		angle.set(startAngle - y * startAngle);
	};

	const handleStart = () => {
		bounce.set(1.1);
	};

	const handleEnd = () => {
		bounce.set(1);
	};
</script>

<svelte:window on:resize={handleSize} />

<svg
	viewBox="-60 -70 120 120"
	bind:this={svg}
	on:mousemove={({ offsetY }) => {
		handleMove({ offsetY });
	}}
	on:touchmove|preventDefault={(e) => {
		const { pageY: y } = e.touches[0];
		handleMove({
			offsetY: y - t
		});
	}}
	on:mouseenter={handleStart}
	on:mouseleave={handleEnd}
	on:touchstart|preventDefault={handleStart}
	on:touchend|preventDefault={handleEnd}
>
	<defs>
		<path
			transform="rotate({$angle})"
			id="w"
			d="M 0 0 c 6 -5 14 -8 20 0 -5 5 -2 10 -12 10 -2 0 -8 0 -8 -10"
		/>
		<g id="l" transform="rotate({$angle / 2})">
			<path
				transform="rotate({(startAngle * -1) / 2})"
				id="l"
				d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7z"
			/>
		</g>
	</defs>
	<g transform="scale({$bounce})">
		<g fill="none" stroke="#fd971b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
			<g transform="translate(12 17)">
				<use href="#l" />
			</g>
			<g transform="scale(-1 1) translate(12 17)">
				<use href="#l" />
			</g>
		</g>

		<g
			fill="#f0d584"
			stroke="#f0d584"
			stroke-width="8"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="translate(25 -10)">
				<use href="#w" />
			</g>
			<g transform="scale(-1 1) translate(25 -10)">
				<use href="#w" />
			</g>
		</g>

		<g fill="#f9f5d0">
			<ellipse rx="28" ry="25" />
			<g stroke="#f9f5d0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
				<g transform="translate(0 -30)">
					<path d="M -20 0 c -18 24 58 24 40 0 a 20 20 0 0 0 -40 0" />
					<g transform="translate(0 -20)">
						<g transform="scale({$scale})">
							<path stroke-width="3" d="M 0 0 c 5 0 11 -2 11 -5 0 5 2.5 5 5 3 0 5 -10 7 -16 2" />
						</g>
					</g>
				</g>
			</g>
		</g>

		<g fill="#542b19">
			<g transform="translate(12 -30)">
				<circle class="blink" r="2.75" />
			</g>
			<g transform="translate(-12 -30)">
				<circle class="blink" r="2.75" />
			</g>
		</g>

		<g transform="translate(0 -20)">
			<g stroke-linecap="round" stroke-linejoin="round">
				<g fill="#fd971b" stroke="#fd971b" stroke-width="3">
					<path d="M -9 -2 c 6 6 12 6 18 0 c -7 -5 -11 -5 -18 0" />
				</g>
				<g fill="#fc531c" stroke="#fc531c" stroke-width="1">
					<g transform="scale({$scale})">
						<path d="M -6 -2 c 3 4 9 4 12 0 c -4 1 -8 1 -12 0" />
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

	.blink {
		animation: blink 7s infinite cubic-bezier(0.65, 0, 0.35, 1);
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
