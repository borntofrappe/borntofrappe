<svg style="display: block;" viewBox="0 0 80 50">
	<title>Time the shots!</title>

	<defs>
		<pattern id="time-the-shots-pattern-sea" viewBox="0 0 8 5" width="0.1" height="0.1">
			<rect width="8" height="5" fill="#286bc6" />
			<g fill="none" stroke="#43b5f1" stroke-width="0.5" transform="translate(0 0.25)">
				<path d="M 1 2.5 h 0.5 m 0 -0.5 h 0.5 m 0 0.5 h 1" />
				<path d="M 4.5 1 h 0.5 m 0 -0.5 h 0.5 m 0 0.5 h 1" />
				<path d="M 3.5 4 h 0.5 m 0 -0.5 h 0.5 m 0 0.5 h 1" />
			</g>
		</pattern>

		<pattern
			id="time-the-shots-pattern-overlay"
			viewBox="0 0 2 2"
			width="3"
			height="3"
			patternUnits="userSpaceOnUse"
		>
			<g opacity="0.4">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<path
			id="time-the-shots-cloud-shape"
			d="M -6 -9.5 a 7.5 7.5 0 0 1 12 0 7.5 7.5 0 0 1 12 5 7 7 0 0 1 5 12 6.5 6.5 0 0 1 -11 6 7 7 0 0 1 -12 0 7 7 0 0 1 -12 0 6.5 6.5 0 0 1 -11 -6 7 7 0 0 1 5 -12 7.5 7.5 0 0 1 12 -5"
		/>

		<symbol id="time-the-shots-cloud" viewBox="-27 -14 54 33">
			<g stroke="none">
				<use href="#time-the-shots-cloud-shape" />
				<use fill="url(#time-the-shots-pattern-overlay)" href="#time-the-shots-cloud-shape" />
			</g>
			<g fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
				<use href="#time-the-shots-cloud-shape" />
				<use stroke="url(#time-the-shots-pattern-overlay)" href="#time-the-shots-cloud-shape" />
			</g>
		</symbol>
	</defs>

	<rect width="80" height="50" fill="url(#time-the-shots-pattern-sea)" />

	<use fill="#f2f2f2" stroke="#c5c9cc" href="#time-the-shots-cloud" width="14" height="8.6" />
	<use
		fill="#c2c2c2"
		stroke="#808281"
		href="#time-the-shots-cloud"
		y="8.6"
		width="14"
		height="8.6"
	/>
</svg>
