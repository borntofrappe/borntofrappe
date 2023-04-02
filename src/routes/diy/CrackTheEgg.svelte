<svg style="display: block;" viewBox="0 0 80 50">
	<title>Crack the egg!</title>

	<defs>
		<pattern
			id="crack-the-egg-pattern-sky"
			viewBox="0 0 2 2"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<rect fill="#5bd2de" width="2" height="2" />
			<g fill="#bdebe6">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<pattern
			id="crack-the-egg-pattern-cloud"
			viewBox="0 0 2 2"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<rect fill="#e6e7e6" width="2" height="2" />
			<g fill="#d6d2d6">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<pattern
			id="crack-the-egg-pattern-spot"
			viewBox="0 0 2 2"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<rect width="2" height="2" fill="#ce7931" />
			<rect width="1" height="1" fill="#f7c283" />
			<rect x="1" y="1" width="1" height="1" fill="#f7c283" />
		</pattern>

		<path id="crack-the-egg-egg" d="M 0 0 c 25 0 15 -32 0 -32 -15 2 -25 32 0 32" />

		<clipPath id="crack-the-egg-clip-egg">
			<use href="#crack-the-egg-egg" />
		</clipPath>

		<symbol id="crack-the-egg-surprise" viewBox="0 0 19 23.5">
			<g stroke="currentColor" stroke-width="1" transform="translate(0.5 0.5)">
				<path stroke-linecap="round" stroke-linejoin="round" fill="#f7f75a" d="M 5 1 h -4 v 4z" />
				<path
					fill="#f7f75a"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M 8.5 18.5 v 2 h -3 v 2 h 6 v -2 h -1.5 v -2"
				/>
				<path fill="#fefefe" d="M 0 11.5 c 0 10 18 10 18 0 v -4 h -6 v -2 c 0 -8 -12 -8 -12 6" />
			</g>
			<circle fill="currentColor" cx="6" cy="4" r="0.75" />
		</symbol>
	</defs>

	<rect fill="url(#crack-the-egg-pattern-sky)" width="80" height="50" />

	<g fill="url(#crack-the-egg-pattern-cloud)">
		<g transform="translate(20 17.5)">
			<circle r="9" />
			<circle cx="-8" r="7" />
			<circle cx="8" r="7" />
		</g>

		<g transform="translate(67.5 32.5)">
			<circle r="9" />
			<circle cx="-9" cy="3" r="6" />
			<circle cx="9" cy="3" r="6" />
		</g>

		<g transform="translate(70 8)">
			<ellipse rx="8" ry="5" />
			<ellipse cx="-10" cy="4" rx="8" ry="5" />
		</g>
		<g transform="translate(5 40)">
			<ellipse rx="9" ry="6" />
			<ellipse cx="10" cy="2" rx="7" ry="4" />
			/>
		</g>
	</g>

	<g transform="translate(20 40)">
		<g transform="translate(-9.5 -23.5)">
			<use href="#crack-the-egg-surprise" width="19" height="23.5" />
		</g>
	</g>

	<g transform="translate(60 40)">
		<g stroke-width="1" transform="translate(0 -0.5)">
			<use fill="#f7d794" href="#crack-the-egg-egg" />
			<g
				clip-path="url(#crack-the-egg-clip-egg)"
				fill="#c54900"
				stroke="url(#crack-the-egg-pattern-spot)"
			>
				<ellipse cx="-11" cy="-28" rx="8" ry="9" stroke-width="2" />
				<ellipse cx="14" cy="1" rx="12" ry="10" stroke-width="2" />
				<ellipse cx="5" cy="-16" rx="4" ry="4" stroke-width="1" />
				<ellipse cx="5" cy="-24" rx="2" ry="2" stroke-width="1" />
				<ellipse cx="-12" cy="-5" rx="5" ry="5" stroke-width="3" />
				<ellipse cx="-7.5" cy="-8" rx="3" ry="3" stroke-width="3" />
				<ellipse cx="-12" cy="-5" rx="5" ry="5" stroke-width="0" />
				<ellipse cx="-7.5" cy="-8" rx="3" ry="3" stroke-width="0" />
				<path
					fill="none"
					stroke="currentColor"
					d="M -16 -12.5 l 3 -2.5 4 2.5 l 3 -2.5 6 3 l 2.5 -2.5 2.5 2.5 2.5 -2.5 l 2.5 2.5 6 -3.5"
				/>
			</g>
			<use fill="none" stroke="currentColor" href="#crack-the-egg-egg" />
		</g>
	</g>
</svg>
