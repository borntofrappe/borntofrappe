<svg viewBox="0 0 80 50">
	<defs>
		<pattern id="time-the-shots-pattern-sea" viewBox="0 0 8 5" width="0.1" height="0.1">
			<rect width="8" height="5" fill="#286bc6" />
			<g fill="none" stroke="#43b5f1" stroke-width="0.5">
				<path d="M 1 2.5 h 0.5 m 0 -0.5 h0.5 m 0 0.5 h1" />
				<path d="M 4.5 1 h 0.5 m 0 -0.5 h0.5 m 0 0.5 h1" />
				<path d="M 3.5 4 h 0.5 m 0 -0.5 h0.5 m 0 0.5 h1" />
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

		<g id="time-the-shots-cloud">
			<path
				d="M -6 -9.5 a 7.5 7.5 0 0 1 12 0 7.5 7.5 0 0 1 12 5 7 7 0 0 1 5 12 6.5 6.5 0 0 1 -11 6 7 7 0 0 1 -12 0 7 7 0 0 1 -12 0 6.5 6.5 0 0 1 -11 -6 7 7 0 0 1 5 -12 7.5 7.5 0 0 1 12 -5"
			/>
		</g>

		<symbol id="time-the-shots-cloud-1" viewBox="-27 -14.5 54 33.5">
			<g stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
				<path
					d="M -6 -9.5 a 7.5 7.5 0 0 1 12 0 7.5 7.5 0 0 1 12 5 7 7 0 0 1 5 12 6.5 6.5 0 0 1 -11 6 7 7 0 0 1 -12 0 7 7 0 0 1 -12 0 6.5 6.5 0 0 1 -11 -6 7 7 0 0 1 5 -12 7.5 7.5 0 0 1 12 -5"
				/>
				<use href="#time-the-shots-cloud" fill="#f2f2f2" stroke="#c5c9cc" />
				<use
					href="#time-the-shots-cloud"
					fill="url(#time-the-shots-pattern-overlay)"
					stroke="url(#time-the-shots-pattern-overlay)"
				/>
			</g>
		</symbol>

		<symbol id="time-the-shots-cloud-2" viewBox="-27 -14.5 54 33.5">
			<g stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
				<path
					d="M -6 -9.5 a 7.5 7.5 0 0 1 12 0 7.5 7.5 0 0 1 12 5 7 7 0 0 1 5 12 6.5 6.5 0 0 1 -11 6 7 7 0 0 1 -12 0 7 7 0 0 1 -12 0 6.5 6.5 0 0 1 -11 -6 7 7 0 0 1 5 -12 7.5 7.5 0 0 1 12 -5"
				/>
				<use href="#time-the-shots-cloud" fill="#c2c2c2" stroke="#808281" />
				<use
					href="#time-the-shots-cloud"
					fill="url(#time-the-shots-pattern-overlay)"
					stroke="url(#time-the-shots-pattern-overlay)"
				/>
			</g>
		</symbol>

		<symbol id="time-the-shots-target" viewBox="-17.5 -19 35 26">
			<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#fec749">
					<ellipse transform="translate(-7 -1)" rx="6.5" ry="5.5" />
					<ellipse transform="translate(7 -1)" rx="6.5" ry="5.5" />
					<ellipse transform="translate(0 0.5)" rx="6.5" ry="5.5" />
				</g>
				<path fill="#5589a3" d="M -9 -9.5 a 17 6.25 0 1 0 18 0 30 30 0 0 1 -18 0" />
				<path fill="#3dbfb3" d="M -9 -9.5 a 9.1 9.1 0 0 1 18 0 30 30 0 0 1 -18 0" />
			</g>
		</symbol>

		<symbol id="time-the-shots-spaceship" viewBox="-20 -20 40 40">
			<g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round">
				<g fill="currentColor">
					<path d="M -18 9 a 25 25 0 0 1 16 -10 a 10 10 0 0 0 -16 10" />
					<path transform="scale(-1 1)" d="M -18 9 a 25 25 0 0 1 16 -10 a 10 10 0 0 0 -16 10" />
				</g>
				<g fill="#fec749">
					<ellipse cx="-6" cy="5.5" rx="4" ry="4" />
					<ellipse cx="6" cy="5.5" rx="4" ry="4" />
					<ellipse cy="7" rx="4.5" ry="4" />
				</g>
				<g fill="#cf6bef">
					<ellipse transform="translate(-7.5 1)" rx="7" ry="6" />
					<ellipse transform="translate(7.5 1)" rx="7" ry="6" />
					<ellipse rx="9" ry="8" stroke-dasharray="14.5 6 35" stroke-dashoffset="-6" />
				</g>
			</g>
		</symbol>
	</defs>

	<rect width="80" height="50" fill="url(#time-the-shots-pattern-sea)" />

	<svg width="10" height="10">
		<use href="#time-the-shots-cloud-1" />
	</svg>
	<svg y="10" width="10" height="10">
		<use href="#time-the-shots-cloud-2" />
	</svg>

	<svg x="10" width="10" height="10">
		<use href="#time-the-shots-target" />
	</svg>

	<svg x="10" y="10" width="10" height="10">
		<use href="#time-the-shots-spaceship" />
	</svg>
</svg>
