<script>
	import site from '$lib/utils/site.js';
	const { title } = site;

	import { time } from '$lib/utils/stores.js';

	$: datetime = `${$time.getHours()}:${$time.getMinutes().toString().padStart(2, '0')}`;
	$: hands = {
		hours: ($time.getHours() % 12) * 30 + $time.getMinutes() * 0.5,
		minutes: $time.getMinutes() * 6
	};
</script>

<svelte:head>
	<title>{datetime} | {title}</title>
	<meta
		name="description"
		content="What time is it? Here's an analog display to soothe your wonderings."
	/>
	<link rel="icon" href="/icons/time.svg" type="image/svg+xml" />
</svelte:head>

<main class="[ visually-hidden ]">
	<h1>What time is it?</h1>
	<p><time {datetime}>{datetime}</time></p>
</main>

<div
	class="[ box centered ]"
	style="
	--box-color: hsl(38 13% 17%); 
	--box-background: hsl(40 23% 97%); 
	--selection-color: hsl(37 12% 22%); 
	--selection-background: hsl(48 95% 76%);
"
>
	<svg style="display: block; max-inline-size: 36rem; inline-size: 100vmin;" viewBox="0 0 300 300">
		<defs>
			<circle id="clock-circle" fill="currentColor" r="7" />
			<symbol id="clock-sparkle-symbol" viewBox="-5 -5 10 10">
				<g fill="currentColor" stroke="none">
					<path d="M -5 0 A 5 5 0 0 0 0 -5 5 5 0 0 0 5 0 5 5 0 0 0 0 5 5 5 0 0 0 -5 0" />
				</g>
			</symbol>
			<symbol id="clock-almond-symbol" viewBox="-6 -4 12 8">
				<g
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M -5 0 C -3.5 -2 -2 -3 0 -3 C 2 -3 3.5 -2 5 0 C 3.5 2 2 3 0 3 C -2 3 -3.5 2 -5 0"
					/>
				</g>
			</symbol>

			<use id="clock-sparkle" href="#clock-sparkle-symbol" x="-9" y="-9" width="18" height="18" />
			<use id="clock-almond" href="#clock-almond-symbol" x="-9" y="-5" width="18" height="10" />
		</defs>
		<g style="color: hsl(43 13% 90%);">
			<use href="#clock-almond" transform="translate(25 115) scale(1.5) rotate(12)" />
			<use href="#clock-almond" transform="translate(210 35) scale(2.2) rotate(-40)" />
		</g>
		<g style="color: hsl(43 13% 90%);">
			<use href="#clock-circle" transform="translate(45 150) scale(0.4)" />
			<use href="#clock-circle" transform="translate(60 240) scale(0.9)" />
			<use href="#clock-circle" transform="translate(90 60) scale(0.6)" />
			<use href="#clock-circle" transform="translate(160 40) scale(1)" />
			<use href="#clock-circle" transform="translate(230 235) scale(0.5)" />
			<use href="#clock-circle" transform="translate(255 90) scale(0.6)" />
			<use href="#clock-circle" transform="translate(260 145) scale(0.5)" />
			<use href="#clock-circle" transform="translate(285 170) scale(1)" />
		</g>
		<g style="color: hsl(40 15% 80%);">
			<use href="#clock-circle" transform="translate(50 190) scale(1.1)" />
			<use href="#clock-circle" transform="translate(60 85) scale(0.9)" />
			<use href="#clock-circle" transform="translate(115 255) scale(1.2)" />
			<use href="#clock-circle" transform="translate(250 220) scale(1.3)" />
			<use href="#clock-circle" transform="translate(265 120) scale(0.6)" />
		</g>
		<g style="color: hsl(43 13% 90%);">
			<use href="#clock-sparkle" transform="translate(15 160) scale(1)" />
			<use href="#clock-sparkle" transform="translate(235 70) scale(1.1)" />
		</g>
		<g transform="translate(150 150)">
			<circle fill="hsl(40 23% 99%)" stroke="hsl(40 10% 35%)" r="80" stroke-width="12" />
			<g fill="none" stroke="hsl(43 13% 90%)" stroke-linecap="round" stroke-linejoin="round">
				<g stroke-width="6">
					<path d="M 56 0 66 0" />
					<path transform="rotate(90)" d="M 56 0 66 0" />
					<path transform="rotate(180)" d="M 56 0 66 0" />
					<path transform="rotate(270)" d="M 56 0 66 0" />
				</g>
				<g stroke-width="4">
					<path transform="rotate(30)" d="M 55 0 67 0" />
					<path transform="rotate(60)" d="M 55 0 67 0" />
					<path transform="rotate(120)" d="M 55 0 67 0" />
					<path transform="rotate(150)" d="M 55 0 67 0" />
					<path transform="rotate(210)" d="M 55 0 67 0" />
					<path transform="rotate(240)" d="M 55 0 67 0" />
					<path transform="rotate(300)" d="M 55 0 67 0" />
					<path transform="rotate(330)" d="M 55 0 67 0" />
				</g>
			</g>
			<g fill="hsl(41 8% 48%)">
				<path transform="rotate({hands.hours})" d="M -4 -11 -4 -30 A 4 4 0 0 1 4 -30 L 4 -11" />
				<path
					transform="rotate({hands.minutes})"
					d="M -3.5 -11 -3.5 -42 A 3.5 3.5 0 0 1 3.5 -42 L 3.5 -11"
				/>
			</g>
			<circle fill="hsl(40 10% 35%)" r="8" />
		</g>
	</svg>
</div>
