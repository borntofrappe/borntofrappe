<script>
	import { tweened } from 'svelte/motion';
	import { quadInOut, linear } from 'svelte/easing';

	const duration = 3000;

	const time = tweened(0, { easing: linear, duration });
	$: offsets = [$time, quadInOut($time), Math.sin($time * Math.PI)].map((d) => d * 50 * -1);
</script>

<div>
	<button
		on:click={() => {
			time.set(0, { duration: 0 });
			time.set(1);
		}}
	>
		<span>Dip</span>
		<svg width="1em" height="1em" viewBox="-11 -5.095012187957764 16 10.190024375915527">
			<g
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path
					d="M 0 0 A 5.1 5.1 0 0 0 -10 0 5.1 5.1 0 0 0 0 0 4 4 0 0 0 4 4 L 4 -4 A 4 4 0 0 0 0 0 Z"
				/>
			</g>
		</svg>
	</button>

	<svg style="display: block;" viewBox="-7.5 -7.5 85 75">
		<symbol id="fish" viewBox="-33.5 -36 74.5 67">
			<defs>
				<linearGradient
					id="fish-gradient-1"
					gradientUnits="userSpaceOnUse"
					x1="-33.5"
					y1="-20"
					x2="74.5"
					y2="20"
				>
					<stop stop-color="hsl(199 88% 65%)" offset="0" />
					<stop stop-color="hsl(225 77% 58%)" offset="1" />
				</linearGradient>
				<linearGradient
					id="fish-gradient-2"
					href="#fish-gradient-1"
					gradientUnits="userSpaceOnUse"
					x1="-33.5"
					y1="30"
					x2="74.5"
					y2="-20"
				/>
				<path id="fish-fin" d="M 0 0 0 12 A 10 10 0 0 0 10 22 L 10 10 A 10 10 0 0 0 0 0 Z" />
			</defs>
			<g stroke-linecap="round" stroke-linejoin="round">
				<g stroke-width="2">
					<g
						fill="url(#fish-gradient-2) hsl(225 77% 58%)"
						stroke="url(#fish-gradient-2) hsl(225 77% 58%)"
					>
						<use transform="translate(30 0)" href="#fish-fin" />
						<use transform="translate(30 0) scale(1 -1)" href="#fish-fin" />
						<use transform="translate(-5 -25) rotate(-90)" href="#fish-fin" />
						<use transform="translate(-5 25) scale(-1 1) rotate(90) scale(0.5)" href="#fish-fin" />
					</g>
					<g
						fill="url(#fish-gradient-1) hsl(199 88% 65%)"
						stroke="url(#fish-gradient-1) hsl(199 88% 65%)"
					>
						<path d="M 5 -25 -5 -25 A 25 25 0 0 0 -5 25 L 5 25 A 25 25 0 0 0 5 -25 Z" />
						<path d="M -30 0 -30 -5 A 2.5 2.5 0 0 0 -30 0 2.5 2.5 0 0 0 -30 5 Z" />
					</g>
				</g>
				<circle fill="hsl(234 62% 26%)" cx="-15" cy="-7" r="1.5" />
				<path
					transform="translate(-5 0)"
					fill="none"
					stroke="hsl(225 77% 58%)"
					stroke-width="2"
					d="M 0 -13 C 6 -6 6 6 0 13"
				/>
			</g>
		</symbol>
		<rect fill="hsl(205 97% 85%)" x="-7.5" y="-7.5" width="85" height="75" rx="4" />
		<g fill="hsl(205 90% 80%)">
			<circle transform="translate(0.21 0.11) scale(0.72)" r="1" />
			<circle transform="translate(-0.05 7.11) scale(0.83)" r="1" />
			<circle transform="translate(2.05 17.38) scale(0.86)" r="1" />
			<circle transform="translate(2.65 27.13) scale(0.88)" r="1" />
			<circle transform="translate(-1.4 40.88) scale(0.55)" r="1" />
			<circle transform="translate(-2.44 48.49) scale(0.91)" r="1" />
			<circle transform="translate(2.18 59.19) scale(0.6)" r="1" />
			<circle transform="translate(0.99 70.55) scale(0.93)" r="1" />
			<circle transform="translate(12.8 -0.73) scale(0.65)" r="1" />
			<circle transform="translate(11.79 10.66) scale(0.78)" r="1" />
			<circle transform="translate(8.32 21.11) scale(0.69)" r="1" />
			<circle transform="translate(11.05 30.29) scale(0.76)" r="1" />
			<circle transform="translate(10.33 42.56) scale(0.75)" r="1" />
			<circle transform="translate(11.98 52) scale(0.87)" r="1" />
			<circle transform="translate(9.43 60.16) scale(0.76)" r="1" />
			<circle transform="translate(8.64 70.76) scale(0.58)" r="1" />
			<circle transform="translate(19.04 -1.97) scale(0.65)" r="1" />
			<circle transform="translate(21.3 9.44) scale(0.81)" r="1" />
			<circle transform="translate(17.36 19.27) scale(0.92)" r="1" />
			<circle transform="translate(20.46 31.76) scale(0.94)" r="1" />
			<circle transform="translate(22.22 40.33) scale(0.79)" r="1" />
			<circle transform="translate(21.47 52.29) scale(0.66)" r="1" />
			<circle transform="translate(21.34 57.9) scale(0.97)" r="1" />
			<circle transform="translate(19.21 70.65) scale(0.72)" r="1" />
			<circle transform="translate(30.29 0.6) scale(0.57)" r="1" />
			<circle transform="translate(29.54 9.87) scale(0.88)" r="1" />
			<circle transform="translate(31.49 22.42) scale(0.51)" r="1" />
			<circle transform="translate(31.07 32.89) scale(0.9)" r="1" />
			<circle transform="translate(32.21 38.58) scale(0.61)" r="1" />
			<circle transform="translate(28.07 52.7) scale(0.85)" r="1" />
			<circle transform="translate(32.1 57.38) scale(0.78)" r="1" />
			<circle transform="translate(28.9 72.53) scale(0.95)" r="1" />
			<circle transform="translate(42.19 1.52) scale(0.78)" r="1" />
			<circle transform="translate(41.5 10) scale(0.58)" r="1" />
			<circle transform="translate(38.5 18.59) scale(0.57)" r="1" />
			<circle transform="translate(39.96 27.86) scale(0.55)" r="1" />
			<circle transform="translate(42.42 38.87) scale(0.83)" r="1" />
			<circle transform="translate(38.64 51.68) scale(0.83)" r="1" />
			<circle transform="translate(37.12 58.28) scale(0.83)" r="1" />
			<circle transform="translate(38.48 71.59) scale(0.88)" r="1" />
			<circle transform="translate(50.76 2.04) scale(0.77)" r="1" />
			<circle transform="translate(49.63 11.36) scale(0.91)" r="1" />
			<circle transform="translate(51.74 20.49) scale(0.67)" r="1" />
			<circle transform="translate(48.54 30.13) scale(0.73)" r="1" />
			<circle transform="translate(48.82 41.28) scale(0.54)" r="1" />
			<circle transform="translate(52.64 47.76) scale(0.67)" r="1" />
			<circle transform="translate(49.3 60.76) scale(0.77)" r="1" />
			<circle transform="translate(51.51 71.79) scale(0.53)" r="1" />
			<circle transform="translate(59.01 1.56) scale(0.69)" r="1" />
			<circle transform="translate(62.18 8.35) scale(0.96)" r="1" />
			<circle transform="translate(59.62 17.13) scale(0.86)" r="1" />
			<circle transform="translate(61.95 27.72) scale(0.5)" r="1" />
			<circle transform="translate(58.03 40.21) scale(0.77)" r="1" />
			<circle transform="translate(62.3 47.53) scale(0.83)" r="1" />
			<circle transform="translate(61.61 58.57) scale(0.96)" r="1" />
			<circle transform="translate(59.37 68.04) scale(0.57)" r="1" />
			<circle transform="translate(67.46 2.14) scale(0.56)" r="1" />
			<circle transform="translate(68.24 8.35) scale(0.93)" r="1" />
			<circle transform="translate(67.19 20.87) scale(0.64)" r="1" />
			<circle transform="translate(68.5 29.72) scale(0.82)" r="1" />
			<circle transform="translate(69.57 39.5) scale(0.92)" r="1" />
			<circle transform="translate(71.32 51.75) scale(0.7)" r="1" />
			<circle transform="translate(71.43 58.29) scale(0.8)" r="1" />
			<circle transform="translate(70.89 71.11) scale(0.83)" r="1" />
		</g>
		<g transform="translate(50 0)">
			<use href="#fish" x={offsets[0]} width="20" height="20" />
			<use
				style="filter: hue-rotate(50deg)"
				href="#fish"
				x={offsets[1]}
				y="20"
				width="20"
				height="20"
			/>
			<use
				style="filter: hue-rotate(100deg)"
				href="#fish"
				x={offsets[2]}
				y="40"
				width="20"
				height="20"
			/>
		</g>
	</svg>
</div>

<style>
	div {
		max-inline-size: 26rem;
		margin-inline: auto;
	}

	button {
		margin-inline: auto;
		font-family: inherit;
		font-weight: 700;
		display: flex;
		align-items: center;
		color: hsl(234 62% 26%);
		background: hsl(205 97% 85%);
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		border-end-start-radius: 0;
		border-end-end-radius: 0;
		border: 0.2rem solid transparent;
		border-block-end: none;
	}

	button:focus {
		outline: none;
		border-color: currentColor;
	}

	button:focus:not(:focus-visible) {
		border-color: transparent;
	}

	button > svg {
		inline-size: 1.25em;
		block-size: 1.25em;
	}

	button {
		--icon-gap: 0.5rem;
	}

	button > svg {
		margin-inline-start: var(--icon-gap, 0.5rem);
		translate: 0 0;
		transition: translate 0.4s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button:active > svg {
		translate: calc(var(--icon-gap, 0.5rem) * -1) 0;
	}
</style>
