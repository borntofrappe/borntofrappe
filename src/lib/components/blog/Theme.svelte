<script>
	import { onMount } from 'svelte';

	export let timeOfDay;
	export let colors = {
		morning: { foreground: '#838ac5', background: '#9cb2ce' },
		day: { foreground: '#639aef', background: '#73d2e6' },
		night: { foreground: '#7369b5', background: '#838ace' }
	};

	const positions = {
		morning: { x: 30, y: 35 },
		day: { x: 60, y: 25 },
		night: { x: 90, y: 35 }
	};

	const color = colors[timeOfDay] || colors.day;
	let foreground = color.foreground;
	let background = color.background;
	let position = positions[timeOfDay] || positions.day;

	onMount(() => {
		if (!timeOfDay) {
			const hours = new Date().getHours();

			if (hours > 2 && hours < 10) {
				timeOfDay = 'morning';
			} else if (hours < 18) {
				timeOfDay = 'day';
			} else {
				timeOfDay = 'night';
			}

			foreground = color.foreground;
			background = color.background;
			position = positions[timeOfDay];
		}
	});
</script>

<svg style:background viewBox="0 0 120 60">
	<defs>
		<g id="theme-day-cloud">
			<circle r="4" />
			<circle cx="3.8" r="3" />
			<circle cx="-3.8" r="3" />
		</g>
		<path id="theme-day-ray" d="M 0 0 h -1 l 1 -1 1 1z" />
		<path
			id="theme-night-star"
			d="M 0 0 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1"
		/>
	</defs>

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
				<use transform="translate(0 -52.5)" href="#theme-day-cloud" />
				<use transform="rotate(45) translate(0 -55)" href="#theme-day-cloud" />
				<use transform="rotate(-45) translate(0 -55)" href="#theme-day-cloud" />
				<use transform="rotate(-22.5) translate(0 -70)" href="#theme-day-cloud" />
				<use transform="rotate(22.5) translate(0 -70)" href="#theme-day-cloud" />
			</g>
		</g>
	{:else}
		<g fill="#adc2d6">
			<use x="30" y="52" href="#theme-night-star" />
			<use href="#theme-night-star" x="43" y="42" />
			<use href="#theme-night-star" x="63" y="42.5" />
			<use href="#theme-night-star" x="81" y="42" />
			<use href="#theme-night-star" x="90" y="54" />
			<use href="#theme-night-star" x="98" y="44" />
			<use href="#theme-night-star" x="74" y="27.5" />
			<use href="#theme-night-star" x="52" y="26" />
			<use href="#theme-night-star" x="32" y="32" />
			<use href="#theme-night-star" x="14" y="46" />
			<use href="#theme-night-star" x="14" y="46" />
			<use href="#theme-night-star" x="13" y="26.5" />
			<use href="#theme-night-star" x="33.5" y="14.5" />
			<use href="#theme-night-star" x="61" y="10" />
			<use href="#theme-night-star" x="89.5" y="18.5" />
			<use href="#theme-night-star" x="102.5" y="26" />
		</g>
	{/if}

	<g transform="translate({position.x} {position.y})">
		<g>
			<circle r="7" fill={foreground} />
			<circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
			<g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
				{#if timeOfDay === 'morning'}
					<circle r="3" />
				{:else if timeOfDay === 'day'}
					<circle r="3" />
					<use href="#theme-day-ray" transform="translate(0 -3.5)" />
					<use href="#theme-day-ray" transform="rotate(45) translate(0 -3.5)" />
					<use href="#theme-day-ray" transform="rotate(90) translate(0 -3.5)" />
					<use href="#theme-day-ray" transform="rotate(135) translate(0 -3.5)" />
					<use href="#theme-day-ray" transform="rotate(180) translate(0 -3.5)" />
					<use href="#theme-day-ray" transform="rotate(225) translate(0 -3.5)" />
					<use href="#theme-day-ray" transform="rotate(270) translate(0 -3.5)" />
					<use href="#theme-day-ray" transform="rotate(315) translate(0 -3.5)" />
				{:else}
					<path transform="rotate(-45)" d="M 0 -3 a 3 3 0 1 1 -3 3 2 2 0 0 0 3 -3" />
				{/if}
			</g>
		</g>
	</g>

	<g />

	<g opacity="0">
		<rect width="120" height="53" />
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
</style>
