<script>
	import themes from '$lib/utils/themes.js';

	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let { timeOfDay, foreground, background } = themes[1];

	// viewBox="0 0 120 60"
	const positions = {
		morning: { x: 30, y: 35 },
		day: { x: 60, y: 25 },
		night: { x: 90, y: 35 }
	};

	// viewBox="0 0 120 60"
	const position = spring(
		{
			x: 60,
			y: 60
		},
		{
			damping: 0.4
		}
	);

	let svg;
	let w, h;

	onMount(() => {
		handleSize();

		const value = localStorage.getItem('timeOfDay');
		if (value) timeOfDay = value;

		const theme = themes.find((d) => d.timeOfDay === timeOfDay);
		foreground = theme.foreground;
		background = theme.background;

		const { x, y } = positions[timeOfDay];
		position.set({ x, y });

		dispatch('change', {
			timeOfDay
		});
	});

	const handleSize = () => {
		const { width, height } = svg.getBoundingClientRect();
		w = width;
		h = height;
	};

	let isDragging = false;

	const handleStart = (e) => {
		isDragging = true;

		handlePosition(e);
	};

	const handleEnd = () => {
		isDragging = false;
	};

	const handleMove = (e) => {
		if (!isDragging) return;

		handlePosition(e);
	};

	const handlePosition = ({ offsetX, offsetY }) => {
		// viewBox="0 0 120 60"
		const x = (offsetX / w) * 120;
		const y = (offsetY / h) * 60;

		position.set({ x, y });

		const dx = 60 - x;
		const dy = 60 - y;

		const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
		const angles = Array(themes.length)
			.fill()
			.map((_, i, { length }) => (180 / length) * (i + 1));

		const index = angles.findIndex((d) => angle <= d);

		let { timeOfDay: value } = themes[index];

		if (value !== timeOfDay) handleValue(value);
	};

	const handleKey = (e) => {
		const { key } = e;
		if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;

		const index = themes.findIndex((d) => d.timeOfDay === timeOfDay);

		let next;
		if (key === 'ArrowRight') {
			next = (index + 1) % themes.length;
		} else {
			next = index > 0 ? index - 1 : themes.length - 1;
		}

		const { timeOfDay: value } = themes[next];
		const { x, y } = positions[value];
		position.set({ x, y });

		handleValue(value);
	};

	const handleValue = (value) => {
		timeOfDay = value;

		const theme = themes.find((d) => d.timeOfDay === timeOfDay);
		foreground = theme.foreground;
		background = theme.background;

		dispatch('change', {
			timeOfDay
		});

		document.documentElement.setAttribute('data-time-of-day', timeOfDay);
		localStorage.setItem('timeOfDay', timeOfDay);
	};
</script>

<svelte:window on:resize={handleSize} />

<svg style:background bind:this={svg} viewBox="0 0 120 60">
	<defs>
		<g id="theme-cloud">
			<circle r="4" />
			<circle cx="3.8" r="3" />
			<circle cx="-3.8" r="3" />
		</g>
		<path id="theme-star" d="M 0 0 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />

		<g id="theme-details-morning">
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
		</g>
		<g id="theme-details-day">
			<g fill="#8cdbef" stroke="#8cdbef">
				<g transform="translate(60 85)">
					<use transform="translate(0 -52.5)" href="#theme-cloud" />
					<use transform="rotate(45) translate(0 -55)" href="#theme-cloud" />
					<use transform="rotate(-45) translate(0 -55)" href="#theme-cloud" />
					<use transform="rotate(-22.5) translate(0 -70)" href="#theme-cloud" />
					<use transform="rotate(22.5) translate(0 -70)" href="#theme-cloud" />
				</g>
			</g>
		</g>
		<g id="theme-details-night">
			<g fill="#adc2d6">
				<use x="30" y="52" href="#theme-star" />
				<use href="#theme-star" x="43" y="42" />
				<use href="#theme-star" x="63" y="42.5" />
				<use href="#theme-star" x="81" y="42" />
				<use href="#theme-star" x="90" y="54" />
				<use href="#theme-star" x="98" y="44" />
				<use href="#theme-star" x="74" y="27.5" />
				<use href="#theme-star" x="52" y="26" />
				<use href="#theme-star" x="32" y="32" />
				<use href="#theme-star" x="14" y="46" />
				<use href="#theme-star" x="14" y="46" />
				<use href="#theme-star" x="13" y="26.5" />
				<use href="#theme-star" x="33.5" y="14.5" />
				<use href="#theme-star" x="61" y="10" />
				<use href="#theme-star" x="89.5" y="18.5" />
				<use href="#theme-star" x="102.5" y="26" />
			</g>
		</g>

		<g id="theme-marker-morning">
			<circle r="7" fill="#838ac5" />
			<circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
			<g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
				<circle r="3" />
			</g>
		</g>
		<g id="theme-marker-day">
			<circle r="7" fill="#639aef" />
			<circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
			<g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
				<circle r="3" />
				<path d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(45)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(90)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(135)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(180)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(225)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(270)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
				<path transform="rotate(315)" d="M 0 -3.5 h -1 l 1 -1 1 1z" />
			</g>
		</g>
		<g id="theme-marker-night">
			<circle r="7" fill="#7369b5" />
			<circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
			<g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
				<path transform="rotate(-45)" d="M 0 -3 a 3 3 0 1 1 -3 3 2 2 0 0 0 3 -3z" />
			</g>
		</g>
	</defs>

	<circle fill={background} r="60" cx="60" cy="60" />

	<use href="#theme-details-{timeOfDay}" />

	<g transform="translate({$position.x} {$position.y})">
		<use href="#theme-marker-{timeOfDay}" />
	</g>

	<g
		style:cursor={isDragging ? 'grabbing' : 'pointer'}
		on:click={handlePosition}
		on:mousedown={handleStart}
		on:mouseup={handleEnd}
		on:mouseleave={handleEnd}
		on:mousemove={handleMove}
		on:keydown={handleKey}
		role="spinbutton"
		aria-valuemin={0}
		aria-valuenow={themes.findIndex((d) => d === timeOfDay)}
		aria-valuemax={themes.length - 1}
		aria-valuetext={timeOfDay}
		tabindex="0"
		aria-label="Change the time of day with the arrow keys."
		class="focusable"
		opacity="0"
	>
		<g opacity="0">
			<rect width="120" height="53" />
		</g>

		<g style="pointer-events: none;" opacity="0.1">
			<g transform="translate(60 85)">
				<circle r="37" />
			</g>
		</g>
	</g>

	<g transform="translate(60 85)">
		<circle fill={foreground} r="36" />
	</g>
	<g opacity="0">
		<path d="M 0 60 h 7 a 53 53 0 0 1 106 0 h 7 v -60 h -120z" />
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	.focusable {
		outline: none;
	}

	.focusable:focus {
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) {
		opacity: 0;
	}
</style>
