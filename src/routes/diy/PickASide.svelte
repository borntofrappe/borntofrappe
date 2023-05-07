<svg viewBox="0 0 80 50">
	<title>Pick a side!</title>

	<defs>
		<pattern id="pick-a-side-pattern-stroke-left" viewBox="0 0 2 2" width="0.1" height="0.1">
			<g fill="#f7ae42">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<pattern id="pick-a-side-pattern-stroke-right" viewBox="0 0 2 2" width="0.1" height="0.1">
			<g fill="#21c6ce">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<pattern
			id="pick-a-side-pattern-grid-left"
			width="0.1"
			height="0.1"
			viewBox="-0.05 -0.05 1.1 1.1"
		>
			<rect
				fill="none"
				stroke="url(#pick-a-side-pattern-stroke-left)"
				stroke-width="0.1"
				width="1"
				height="1"
			/>
		</pattern>
		<pattern
			id="pick-a-side-pattern-grid-right"
			width="0.1"
			height="0.1"
			viewBox="-0.05 -0.05 1.1 1.1"
		>
			<rect
				fill="none"
				stroke="url(#pick-a-side-pattern-stroke-right)"
				stroke-width="0.1"
				width="1"
				height="1"
			/>
		</pattern>

		<symbol id="pick-a-side-sprite-left" viewBox="-5 -5 10 10">
			<g stroke-width="0.4" stroke="currentColor">
				<g transform="translate(0 -2.3)">
					<path fill="currentColor" d="M -1.5 2.3 h -1 v -2.1 a 2.5 2.5 0 0 1 5 0 v 2.1 h -1z" />
					<circle fill="#f7f7f7" r="2.5" />
					<path fill="#bd4900" d="M -2.5 0 a 2.5 2.5 0 0 1 5 0" />

					<g fill="none">
						<path d="M -0.7 1.6 h 1.4" />
						<g stroke-width="0.5" stroke-linecap="square">
							<path d="M -0.8 0.8 h 0" />
							<path d="M 0.8 0.8 h 0" />
						</g>
					</g>
				</g>
				<path
					fill="#f7f7f7"
					d="M -1 0 a 2 2 0 0 0 2 0 h 2 v 1.5 h -1.5 l 1.3 1.8 h -1.3 v 1.5 h -1.5 v -2 2 h -1.5 v -1.5 h -1.3 l 1.3 -1.8 h -1.5 v -1.5z"
				/>
				<path
					stroke-width="0.3"
					fill="#f70000"
					d="M 1.75 -4 l 0.75 -0.6 h 0.5 v 2 h -0.5 l -0.75 -0.6 -0.75 0.6 h -0.5 v -2 h 0.5z"
				/>
			</g>
		</symbol>
		<symbol id="pick-a-side-sprite-right" viewBox="-5 -5 10 10">
			<g stroke-width="0.4" stroke="currentColor">
				<g transform="translate(0 -2.3)">
					<circle fill="#f7f7f7" r="2.5" />
					<path fill="#bd4900" d="M -2.5 0 a 2.5 2.5 0 0 1 5 0" />

					<g fill="none">
						<path d="M -0.7 1.6 h 1.4" />
						<g stroke-width="0.5" stroke-linecap="square">
							<path d="M -0.8 0.8 h 0" />
							<path d="M 0.8 0.8 h 0" />
						</g>
					</g>
				</g>
				<path
					fill="#f7f7f7"
					d="M -1 0 a 2 2 0 0 0 2 0 h 2 v 1.5 h -1.5 v 3.3 h -1.5 v -2 2 h -1.5 v -3.3  h -1.5 v -1.5z"
				/>
			</g>
		</symbol>
	</defs>

	<rect width="80" height="50" fill="yellow" />

	<rect fill="url(#pick-a-side-pattern-grid-left)" y="18" width="40" height="40" />
	<rect fill="url(#pick-a-side-pattern-grid-right)" x="40" y="18" width="40" height="40" />

	<use x="5" y="5" href="#pick-a-side-sprite-left" width="10" height="10" />
	<use x="15" y="5" href="#pick-a-side-sprite-right" width="10" height="10" />
</svg>
