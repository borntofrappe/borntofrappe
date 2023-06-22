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
	<svg
		style="display: block; max-inline-size: 36rem; inline-size: 100vmin;"
		viewBox="-150 -150 300 300"
	>
		<defs>
			<symbol id="sparkle" viewBox="-5 -5 10 10" x="-9" y="-9" width="18" height="18">
				<path
					fill="currentColor"
					stroke="none"
					d="M -5 0 A 5 5 0 0 0 0 -5 5 5 0 0 0 5 0 5 5 0 0 0 0 5 5 5 0 0 0 -5 0"
				/>
			</symbol>
			<symbol id="almond" viewBox="-6 -4 12 8" x="-12" y="-8" width="24" height="16">
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
		</defs>
		<g style="color: hsl(43 13% 90%);">
			<use href="#almond" transform="translate(-125 -35) rotate(12)" />
			<use href="#almond" transform="translate(60 -115) scale(1.4) rotate(-40)" />
		</g>
		<g style="color: hsl(43 13% 90%);" fill="currentColor">
			<circle transform="translate(-105 0) scale(0.4)" r="7" />
			<circle transform="translate(-90 90) scale(0.9)" r="7" />
			<circle transform="translate(-60 -90) scale(0.6)" r="7" />
			<circle transform="translate(10 -110)" r="7" />
			<circle transform="translate(80 85) scale(0.5)" r="7" />
			<circle transform="translate(105 -60) scale(0.6)" r="7" />
			<circle transform="translate(110 -5) scale(0.5)" r="7" />
			<circle transform="translate(135 20)" r="7" />
		</g>
		<g style="color: hsl(40 15% 80%);" fill="currentColor">
			<circle transform="translate(-100 40) scale(1.1)" r="7" />
			<circle transform="translate(-90 -65) scale(0.9)" r="7" />
			<circle transform="translate(-35 105) scale(1.2)" r="7" />
			<circle transform="translate(100 70) scale(1.3)" r="7" />
			<circle transform="translate(115 -30) scale(0.6)" r="7" />
		</g>
		<g style="color: hsl(43 13% 90%);">
			<use href="#sparkle" transform="translate(-135 10)" />
			<use href="#sparkle" transform="translate(85 -80) scale(1.1)" />
		</g>

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
	</svg>
</div>
