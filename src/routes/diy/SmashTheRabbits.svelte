<svg style="display: block;" viewBox="0 0 80 50">
	<title>Smash the rabbits!</title>

	<defs>
		<pattern
			id="smash-the-rabbits-pattern-grass"
			viewBox="-1 -1 6 6"
			width="5"
			height="5"
			patternUnits="userSpaceOnUse"
		>
			<rect x="-1" y="-1" width="6" height="6" fill="#73d33e" />
			<g fill="none" stroke="#34992f" stroke-width="0.5">
				<path d="M 0.25 1 v 1.5" />
				<path stroke="#98f463" d="M 0.25 1 v 0.5" />
				<path d="M 4.75 3.5 v 1.5" />
				<path stroke="#98f463" d="M 4.75 3.5 v 0.5" />
				<path d="M 3.5 1 v 1.5" />
				<path stroke="#96c636" d="M 3.5 1 v 0.5" />
				<path d="M 4.5 0.5 v 0.5" />
				<path d="M 2 1.5 v 0.5" />
				<path d="M 0.5 3.5 v 0.5" />
				<path d="M 1.5 4.5 v 0.5" />
				<path d="M 2.5 2.75 v 0.5" />
			</g>
		</pattern>

		<symbol id="smash-the-rabbits-rabbit" viewBox="-5 -2 10 10">
			<g stroke="currentColor" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#f7f7f7">
					<path
						d="M -0.5 0 q 0.5 -0.2 1 0 c 0.5 -1 1.25 -1.75 1.75 -1.75 c 0.5 0 0.5 1.25 -0.25 2.25 c 0.5 1 0.5 2.5 0.25 3.75 c 1.5 -3 1.75 0.25 0.5 1 c 0.5 -0.5 1.75 0 0.5 1.75 c -1 1 -1.5 0.75 -1.25 -0.25 c -1 1.25 -3 1.25 -4 0 "
					/>
					<path
						transform="scale(-1 1)"
						d="M -0.5 0 q 0.5 -0.2 1 0 c 0.5 -1 1.25 -1.75 1.75 -1.75 c 0.5 0 0.5 1.25 -0.25 2.25 c 0.5 1 0.5 2.5 0.25 3.75 c 1.5 -3 1.75 0.25 0.5 1 c 0.5 -0.5 1.75 0 0.5 1.75 c -1 1 -1.5 0.75 -1.25 -0.25 c -1 1.25 -3 1.25 -4 0 "
					/>
				</g>
				<g fill="none">
					<path d="M 0 3 v 0.75" />
					<path d="M 0 3.75 a 0.3 0.3 0 0 0 0.6 0" />
					<path d="M 0 3.75 a 0.3 0.3 0 0 1 -0.6 0" />
				</g>
			</g>
			<g fill="currentColor">
				<circle r="0.4" cx="0" cy="3" />
				<circle r="0.4" cx="1" cy="1.75" />
				<circle r="0.4" cx="-1" cy="1.75" />
			</g>
		</symbol>

		<symbol id="smash-the-rabbits-rabbit-hit" viewBox="-5 -2 10 10">
			<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#f7f7f7" stroke-width="0.25">
					<path
						d="M -0.5 0 q 0.5 -0.2 1 0 c 1 -1 2 -1 2 -1 c 1.75 0 1 4 -0.5 1.5 c 0.5 1 0.5 2.5 0.25 3.75 c 0.5 0.25 0.5 0.75 0.5 1 c 0.5 -0.5 1.75 0 0.5 1.75 c -1 1 -1.5 0.75 -1.25 -0.25 c -1 1.25 -3 1.25 -4 0"
					/>
					<path
						transform="scale(-1 1)"
						d="M -0.5 0 q 0.5 -0.2 1 0 c 1 -1 2 -1 2 -1 c 1.75 0 1 4 -0.5 1.5 c 0.5 1 0.5 2.5 0.25 3.75 c 0.5 0.25 0.5 0.75 0.5 1 c 0.5 -0.5 1.75 0 0.5 1.75 c -1 1 -1.5 0.75 -1.25 -0.25 c -1 1.25 -3 1.25 -4 0"
					/>
				</g>

				<g fill="none">
					<g stroke-width="0.25">
						<path d="M 2.75 5.25 c -0.25 0.5 -1.25 1.25 -1.75 1 c -0.5 -0.25 -0 -1 0.5 -1.25" />
						<path
							transform="scale(-1 1)"
							d="M 2.75 5.25 c -0.25 0.5 -1.25 1.25 -1.75 1 c -0.5 -0.25 -0 -1 0.5 -1.25"
						/>
						<g transform="translate(1 1.75)">
							<path d="M -0.25 -0.25 l 0.5 0.5 M -0.25 0.25 l 0.5 -0.5" />
						</g>
						<g transform="translate(-1 1.75)">
							<path d="M -0.25 -0.25 l 0.5 0.5 M -0.25 0.25 l 0.5 -0.5" />
						</g>
					</g>
					<path stroke-width="0.5" d="M 0 4 v 0.25" />
				</g>
			</g>
			<circle fill="currentColor" r="0.4" cx="0" cy="3" />
		</symbol>
	</defs>

	<rect fill="url(#smash-the-rabbits-pattern-grass)" width="80" height="50" />
	<rect fill="#10c5ce" width="80" height="17" />
	<g
		transform="translate(0 17)"
		fill="#73d33e"
		stroke="#73d33e"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M 0 0 l 5 -5 3 5 3 -8 3 5 3 -2 3 5z" />
		<path transform="translate(40 0) scale(-1 1)" d="M 0 0 l 5 -5 3 5 3 -8 3 5 3 -2 3 5z" />
		<path transform="translate(40 0)" d="M 0 0 l 5 -5 3 5 3 -8 3 5 3 -2 3 5z" />
		<path transform="translate(80 0) scale(-1 1)" d="M 0 0 l 5 -5 3 5 3 -8 3 5 3 -2 3 5z" />
	</g>

	<g transform="translate(1 1)">
		<use href="#smash-the-rabbits-rabbit" width="15" height="15" />
		<use x="15" href="#smash-the-rabbits-rabbit-hit" width="15" height="15" />
	</g>

	<g transform="translate(24 30)">
		<ellipse transform="scale(1.08 1.25)" fill="#bc4701" cy="-4" rx="10" ry="4" />
		<ellipse transform="scale(1.05 1.12)" fill="#f5ab26" cy="-4" rx="10" ry="4" />
		<ellipse fill="currentColor" cy="-4" rx="10" ry="4" />
	</g>
</svg>
