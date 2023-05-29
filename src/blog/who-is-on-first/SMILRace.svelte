<script>
	let animate = false;
	let svg = null;

	$: if (animate && svg) {
		svg.querySelectorAll('animateMotion').forEach((d) => d.beginElement());
	} else if (svg) {
		svg.querySelectorAll('animateMotion').forEach((d) => {
			d.endElement();
		});
	}
</script>

<label>
	<input type="checkbox" bind:checked={animate} />
	<span>Race</span>
</label>

<svg bind:this={svg} viewBox="-15 -3.5 24 17">
	<title>A SMIL race between Firefox and Chrome</title>
	<defs>
		<pattern
			id="smil-race-pattern-flag"
			viewBox="0 0 2 2"
			patternUnits="userSpaceOnUse"
			width="1"
			height="1"
		>
			<rect fill="hsl(0 0% 50%)" width="2" height="2" />
			<g fill="hsl(0 0% 70%)">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<symbol id="smil-race-chrome" viewBox="-40 -40 80 80">
			<clipPath id="smil-race-chrome-clip">
				<path d="M 0 -20 h 40 v 60 h -20 v -40 a 20 20 0 0 0 -20 -20" />
				<path transform="rotate(30)" d="M 0 -20 h 40 v 60 h -20 v -40 a 20 20 0 0 0 -20 -20" />
			</clipPath>
			<circle clip-path="url(#smil-race-chrome-clip)" r="40" fill="#fbc21c" />
			<circle
				transform="rotate(120)"
				clip-path="url(#smil-race-chrome-clip)"
				r="40"
				fill="#259644"
			/>
			<circle
				transform="rotate(240)"
				clip-path="url(#smil-race-chrome-clip)"
				r="40"
				fill="#e63f31"
			/>
			<circle r="20" fill="#ffffff" />
			<circle r="16" fill="#2d7cee" />
		</symbol>
		<symbol id="smil-race-firefox" viewBox="-40 -40 80 80">
			<mask id="smil-race-firefox-mask-1">
				<circle r="40" fill="white" />
				<circle r="28" cx="-8" cy="-10" fill="black" />
			</mask>
			<mask id="smil-race-firefox-mask-2">
				<circle r="40" fill="white" />
				<circle r="25" cx="10" cy="-15" fill="black" />
			</mask>
			<mask id="smil-race-firefox-mask-3">
				<circle r="40" fill="white" />
				<circle r="22" cx="5" cy="-10" fill="black" />
			</mask>
			<linearGradient id="smil-race-firefox-gradient-1" x1="0" y1="0" x2="1" y2="0">
				<stop stop-color="#df1566" offset="0" />
				<stop stop-color="#feba38" offset="1" />
			</linearGradient>
			<linearGradient id="smil-race-firefox-gradient-2" x1="0" y1="0" x2="1" y2="0">
				<stop stop-color="#ff5d4c" offset="0" />
				<stop stop-color="#ffd237" offset="1" />
			</linearGradient>
			<linearGradient id="smil-race-firefox-gradient-3" x1="0" y1="0" x2="1" y2="1">
				<stop stop-color="#ffa922" offset="0" />
				<stop stop-color="#ffde3f" offset="1" />
			</linearGradient>
			<circle
				mask="url(#smil-race-firefox-mask-1)"
				r="40"
				fill="url(#smil-race-firefox-gradient-1)"
			/>
			<circle
				mask="url(#smil-race-firefox-mask-2)"
				r="35"
				fill="url(#smil-race-firefox-gradient-2)"
			/>
			<circle
				transform="translate(8 -4)"
				mask="url(#smil-race-firefox-mask-3)"
				r="25"
				fill="url(#smil-race-firefox-gradient-3)"
			/>
		</symbol>
	</defs>
	<path
		fill="hsl(0 0% 99%)"
		d="M -12.5 -3.5 h 19 a 2.5 2.5 0 0 1 2.5 2.5 v 12 a 2.5 2.5 0 0 1 -2.5 2.5 h -19 a 2.5 2.5 0 0 1 -2.5 -2.5 v -12 a 2.5 2.5 0 0 1 2.5 -2.5"
	/>

	<g fill="none" stroke="hsl(0 0% 30%)" stroke-width="0.5">
		<path
			id="smil-race-path"
			d="M 0 0 h 3 a 4 4 0 0 1 4 4 v 3 a 4 4 0 0 1 -4 4 c -3 0 -3 -2 -6 -2 c -3 0 -3 2 -6 2 a 4 4 0 0 1 -4 -4 v -3 a 4 4 0 0 1 4 -4 h 9"
		/>
	</g>

	<rect fill="url(#smil-race-pattern-flag)" x="-1.5" y="-1.5" width="1.5" height="3" rx="0.2" />

	<g transform="translate(0 -1.25)">
		<use href="#smil-race-firefox" x="-1" y="-1" width="2" height="2">
			<animateMotion begin="indefinite" dur="8s">
				<mpath href="#smil-race-path" />
			</animateMotion>
		</use>
	</g>

	<g transform="translate(0 1.25)">
		<use href="#smil-race-chrome" x="-1" y="-1" width="2" height="2">
			<animateMotion
				begin="indefinite"
				dur="7.25s"
				calcMode="spline"
				keySplines="0.85 0.52 0.73 0.96"
				keyTimes="0; 1"
			>
				<mpath href="#smil-race-path" />
			</animateMotion>
		</use>
	</g>
</svg>

<style>
	label {
		display: block;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
	}

	svg {
		display: block;
	}
</style>
