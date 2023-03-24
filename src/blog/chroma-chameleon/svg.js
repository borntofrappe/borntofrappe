export default {
	chameleon: `<svg style="display: block;" viewBox="0 0 100 100">
	<g stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
		<path
			transform="translate(48 36)"
			fill="hsl(0, 0%, 26%)"
			stroke="hsl(0, 0%, 26%)"
			d="M 0 0 a 24 24 0 0 0 0 48 24 24 0 0 0 24 -24 a 1.5 1.5 0 0 0 -3 0 a 12.5 12.5 0 0 1 -25 0 12.5 12.5 0 0 1 12.5 -12.5 a 5.75 5.75 0 0 0 0 -11.5 h -8"
		/>

		<g fill="hsl(0, 0%, 20%)" stroke="hsl(0, 0%, 20%)">
			<path
				transform="translate(53 47) rotate(30)"
				s
				d="M 0 0 c 2 -1 8 -2 12 3 2 2 -8 -2 -16 2 1 0 4 -5 4 -5"
			/>
			<path
				transform="translate(40 62)"
				d="M 0 0 c 4 -6 10 0 16 0 2 2 -6 2 -12 8 0 -2 0 -6  -4 -8"
			/>
		</g>

		<path
			transform="translate(50 20)"
			fill="hsl(0, 0%, 28%)"
			stroke="hsl(0, 0%, 28%)"
			d="M 0 0 a 20 20 0 0 1 26 20 l -6 0 a 2 2 0 0 0 0 6 l 4 0 c 2 2 -12 6 -20 0 -6 -4 -2 -10 -9 -18 -4 -4 3 -8 5 -8"
		/>
	</g>

	<g transform="translate(60 31)">
		<circle fill="hsl(0, 0%, 50%)" r="8" />
		<circle fill="hsl(0, 0%, 85%)" cx="-1.5" cy="-1.5" r="5" />
		<circle fill="hsl(0, 0%, 90%)" cx="3.5" cy="4.5" r="1.5" />
	</g>
</svg>`,
	'linear-gradient': `<svg style="display: block" viewBox="0 0 100 100">
	<defs>
		<linearGradient id="linear-gradient-gradient">
			<stop offset="0" stop-color="hsl(0, 85%, 72%)" />
			<stop offset="0.2" stop-color="hsl(60, 85%, 72%)" />
			<stop offset="0.4" stop-color="hsl(120, 85%, 72%)" />
			<stop offset="0.6" stop-color="hsl(180, 85%, 72%)" />
			<stop offset="0.8" stop-color="hsl(240, 85%, 72%)" />
			<stop offset="1" stop-color="hsl(300, 85%, 72%)" />
		</linearGradient>
	</defs>
	<rect fill="url(#linear-gradient-gradient)" width="100" height="100" />
</svg>`,
	'spread-method': `<svg style="display: block" viewBox="0 0 100 100">
	<defs>
		<linearGradient
			id="spread-method-gradient"
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
	</defs>
	<rect fill="url(#spread-method-gradient)" width="100" height="100" />
</svg>`,
	path: `<svg style="display: block" viewBox="0 0 100 100">
	<defs>
		<linearGradient id="path-gradient" x1="0" x2="0.5" y1="0" y2="0" spreadMethod="reflect">
			<stop offset="0" stop-color="hsl(0, 85%, 72%)" />
			<stop offset="0.2" stop-color="hsl(60, 85%, 72%)" />
			<stop offset="0.4" stop-color="hsl(120, 85%, 72%)" />
			<stop offset="0.6" stop-color="hsl(180, 85%, 72%)" />
			<stop offset="0.8" stop-color="hsl(240, 85%, 72%)" />
			<stop offset="1" stop-color="hsl(300, 85%, 72%)" />
		</linearGradient>
	</defs>
	<rect fill="url(#path-gradient)" width="100" height="100" />
	<path fill="hsl(0, 0%, 28%)" d="M 10 70 a 40 40 0 0 1 80 0 l -20 0 a 20 20 0 0 0 -40 0z" />
</svg>`,
	'clip-path': `<svg style="display: block" viewBox="0 0 100 100">
	<defs>
		<linearGradient id="clip-path-gradient" x1="0" x2="0.5" y1="0" y2="0" spreadMethod="reflect">
			<stop offset="0" stop-color="hsl(0, 85%, 72%)" />
			<stop offset="0.2" stop-color="hsl(60, 85%, 72%)" />
			<stop offset="0.4" stop-color="hsl(120, 85%, 72%)" />
			<stop offset="0.6" stop-color="hsl(180, 85%, 72%)" />
			<stop offset="0.8" stop-color="hsl(240, 85%, 72%)" />
			<stop offset="1" stop-color="hsl(300, 85%, 72%)" />
		</linearGradient>
		<clipPath id="clip-path-clip">
			<path d="M 10 70 a 40 40 0 0 1 80 0 l -20 0 a 20 20 0 0 0 -40 0z" />
		</clipPath>
	</defs>
	<g clip-path="url(#clip-path-clip)">
		<rect fill="url(#clip-path-gradient)" width="100" height="100" />
	</g>
</svg>`
};
