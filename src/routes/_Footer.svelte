<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let svg;
	let l, t;
	let w, h;

	const pos = spring(
		{
			x: 60,
			y: 60
		},
		{
			damping: 0.4,
			stiffness: 0.3
		}
	);

	onMount(() => {
		handleSize();
		const hours = new Date().getHours();
		if (hours > 2 && hours < 10) {
			timeOfDay = 'morning';
			pos.set({ x: 30, y: 35 });
		} else if (hours < 18) {
			timeOfDay = 'day';
			pos.set({ x: 60, y: 25 });
		} else {
			timeOfDay = 'night';
			pos.set({ x: 90, y: 35 });
		}
	});

	const handleSize = () => {
		const { left, top, width, height } = svg.getBoundingClientRect();
		l = left;
		t = top;
		w = width;
		h = height;
	};

	let isGrabbing;

	const handleStart = () => (isGrabbing = true);
	const handleEnd = () => (isGrabbing = false);
	const handleMove = ({ offsetX, offsetY }) => {
		if (!isGrabbing) return;

		const x = (offsetX / w) * 120;
		const y = (offsetY / h) * 60;

		pos.set({ x, y });

		const dx = 60 - x;
		const dy = 60 - y;
		const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

		if (angle < 60) {
			timeOfDay = 'morning';
		} else if (angle < 120) {
			timeOfDay = 'day';
		} else {
			timeOfDay = 'night';
		}
	};

	let timeOfDay = 'day';
	let foreground = '#639aef';
	let background = '#9cb2ce';
	$: switch (timeOfDay) {
		case 'morning':
			foreground = '#838ac5';
			background = '#9cb2ce';
			break;
		case 'day':
			foreground = '#639aef';
			background = '#73d2e6';
			break;
		case 'night':
			foreground = '#7369b5';
			background = '#838ace';
			break;
	}
</script>

<svelte:window on:resize={handleSize} />

<footer style:background>
	<svg bind:this={svg} viewBox="0 0 120 60">
		<circle fill={background} r="60" cx="60" cy="60" />

		{#if timeOfDay === 'morning'}
			<g fill="none" stroke="#a4bace" stroke-linecap="round" stroke-linejoin="round">
				<g transform="translate(60 85)">
					<g stroke-dasharray="15 30" stroke-width="2.5">
						<path d="M -46 0 a 46 46 0 0 1 92 0" />
						<path transform="rotate(-3)" d="M -45 0 a 45.5 45.5 0 0 1 91 0" />
						<path transform="rotate(-4)" d="M -46.5 0 a 46.5 46.5 0 0 1 93 0" />
					</g>
					<g stroke-dasharray="20 26.5" stroke-width="2">
						<path d="M -64 0 a 64 64 0 0 1 128 0" />
						<path transform="rotate(-2)" d="M -65 0 a 65 65 0 0 1 130 0" />
						<path transform="rotate(-4)" d="M -66 0 a 66 66 0 0 1 132 0" />
					</g>
				</g>
			</g>
		{:else if timeOfDay === 'day'}
			<g fill="#8cdbef" stroke="#8cdbef">
				<g transform="translate(60 85)">
					<g transform="translate(0 -52.5)">
						<circle r="4" />
						<circle cx="3.8" r="3" />
						<circle cx="-3.8" r="3" />
					</g>
					<g transform="rotate(45) translate(0 -55)">
						<circle r="4" />
						<circle cx="3.8" r="3" />
						<circle cx="-3.8" r="3" />
					</g>
					<g transform="rotate(-45) translate(0 -55)">
						<circle r="4" />
						<circle cx="3.8" r="3" />
						<circle cx="-3.8" r="3" />
					</g>
					<g transform="rotate(-22.5) translate(0 -70)">
						<circle r="4" />
						<circle cx="3.8" r="3" />
						<circle cx="-3.8" r="3" />
					</g>
					<g transform="rotate(22.5) translate(0 -70)">
						<circle r="4" />
						<circle cx="3.8" r="3" />
						<circle cx="-3.8" r="3" />
					</g>
				</g>
			</g>
		{:else}
			<g fill="#adc2d6">
				<path d="M 30 52 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 43 42 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 63 42.5 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 81 42 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 90 54 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 98 44 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 74 27.5 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 52 26 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 32 32 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 14 46 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 14 46 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 13 26.5 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 33.5 14.5 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 61.5 10 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 89 18.5 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
				<path d="M 102.5 26 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
			</g>
		{/if}

		<g transform="translate({$pos.x} {$pos.y})">
			<g
				style:cursor={isGrabbing ? 'grabbing' : 'grab'}
				on:mousedown={handleStart}
				on:touchstart|preventDefault={handleStart}
				on:mouseup={handleEnd}
				on:mouseleave={handleEnd}
				on:touchend|preventDefault={handleEnd}
				on:mousemove={handleMove}
				on:touchmove|preventDefault={(e) => {
					const { pageX: x, pageY: y } = e.touches[0];
					handleMove({
						offsetX: x - l,
						offsetY: y - t
					});
				}}
			>
				<circle r="7" fill={foreground} />
				<circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
				<g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
					{#if timeOfDay === 'morning'}
						<circle r="3" />
					{:else if timeOfDay === 'day'}
						<circle r="3" />
						<path transform="rotate(0) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
						<path transform="rotate(45) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
						<path transform="rotate(90) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
						<path transform="rotate(135) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
						<path transform="rotate(180) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
						<path transform="rotate(225) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
						<path transform="rotate(270) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
						<path transform="rotate(315) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
					{:else}
						<path transform="rotate(-45)" d="M 0 -3 a 3 3 0 1 1 -3 3 2 2 0 0 0 3 -3" />
					{/if}
				</g>
			</g>
		</g>

		<g transform="translate(60 85)">
			<circle fill={foreground} r="36" />
		</g>
		<path d="M 0 60 h 7 a 53 53 0 0 1 106 0 h 7 v -60 h -120z" opacity="0" />
	</svg>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	footer > svg {
		margin-top: auto;
		max-width: 42rem;
		height: auto;
	}
</style>
