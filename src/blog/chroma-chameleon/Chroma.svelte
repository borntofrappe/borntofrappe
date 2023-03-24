<script>
	import { observe } from './utils.js';
	let animate = false;
</script>

<svg
	use:observe={{
		onObserve: () => {
			animate = true;
		},
		onUnobserve: () => {
			animate = false;
		}
	}}
	class:animate
	viewBox="0 0 100 100"
>
	<title>Chroma, the color-changing lizard</title>
	<defs>
		<linearGradient
			id="chroma-gradient-rainbow"
			x1="0"
			x2="0.5"
			y1="0"
			y2="0"
			spreadMethod="reflect"
		>
			<stop offset="0" stop-color="hsl(0, 85%, 72%)" />
			<stop offset="0.2" stop-color="hsl(60, 85%, 72%)" />
			<stop offset="0.4" stop-color="hsl(120, 85%, 72%)" />
			<stop offset="0.6" stop-color="hsl(180, 85%, 72%)" />
			<stop offset="0.8" stop-color="hsl(240, 85%, 72%)" />
			<stop offset="1" stop-color="hsl(300, 85%, 72%)" />
		</linearGradient>

		<clipPath id="chroma-clip-chameleon">
			<path
				transform="translate(48 36)"
				d="M 0 0 a 24 24 0 0 0 0 48 24 24 0 0 0 24 -24 a 1.5 1.5 0 0 0 -3 0 a 12.5 12.5 0 0 1 -25 0 12.5 12.5 0 0 1 12.5 -12.5 a 5.75 5.75 0 0 0 0 -11.5 h -8"
			/>
			<path
				transform="translate(53 47) rotate(30)"
				s
				d="M 0 0 c 2 -1 8 -2 12 3 2 2 -8 -2 -16 2 1 0 4 -5 4 -5"
			/>
			<path
				transform="translate(40 62)"
				d="M 0 0 c 4 -6 10 0 16 0 2 2 -6 2 -12 8 0 -2 0 -6  -4 -8"
			/>

			<path
				transform="translate(50 20)"
				d="M 0 0 a 20 20 0 0 1 26 20 l -6 0 a 2 2 0 0 0 0 6 l 4 0 c 2 2 -12 6 -20 0 -6 -4 -2 -10 -9 -18 -4 -4 3 -8 5 -8"
			/>
		</clipPath>
	</defs>
	<g
		fill="hsl(0, 0%, 26%)"
		stroke="hsl(0, 0%, 26%)"
		stroke-width="5.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path
			transform="translate(48 36)"
			d="M 0 0 a 24 24 0 0 0 0 48 24 24 0 0 0 24 -24 a 1.5 1.5 0 0 0 -3 0 a 12.5 12.5 0 0 1 -25 0 12.5 12.5 0 0 1 12.5 -12.5 a 5.75 5.75 0 0 0 0 -11.5 h -8"
		/>

		<path
			transform="translate(53 47) rotate(30)"
			s
			d="M 0 0 c 2 -1 8 -2 12 3 2 2 -8 -2 -16 2 1 0 4 -5 4 -5"
		/>
		<path transform="translate(40 62)" d="M 0 0 c 4 -6 10 0 16 0 2 2 -6 2 -12 8 0 -2 0 -6  -4 -8" />

		<path
			transform="translate(50 20)"
			d="M 0 0 a 20 20 0 0 1 26 20 l -6 0 a 2 2 0 0 0 0 6 l 4 0 c 2 2 -12 6 -20 0 -6 -4 -2 -10 -9 -18 -4 -4 3 -8 5 -8"
		/>
	</g>

	<g clip-path="url(#chroma-clip-chameleon)">
		<g class="translate" transform="translate(0 0)">
			<g fill="url(#chroma-gradient-rainbow)" stroke="url(#chroma-gradient-rainbow)">
				<rect x="-300" width="300" height="100" />
				<rect width="300" height="100" />
			</g>
		</g>
	</g>

	<g transform="translate(60 31)">
		<circle fill="hsl(0, 0%, 50%)" r="8" />
		<circle fill="hsl(0, 0%, 85%)" cx="-1.5" cy="-1.5" r="5" />
		<circle fill="hsl(0, 0%, 90%)" cx="3.5" cy="4.5" r="1.5" />
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	.translate {
		animation: translate 30s linear infinite;
		animation-play-state: paused;
	}

	svg.animate .translate {
		animation-play-state: running;
	}

	@keyframes translate {
		to {
			transform: translate(300px, 0);
		}
	}
</style>
