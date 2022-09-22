<script>
	const size = 10;
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<symbol id="pick-a-side-sprite-1" viewBox="-5 -5 10 10">
			<g stroke-width="0.4" stroke="currentColor">
				<g fill="currentColor">
					<path d="M -2.5 -2.3 v 2 h 1 a 1 1 0 0 1 -1 -1" />
					<path transform="scale(-1 1)" d="M -2.5 -2.3 v 2 h 1 a 1 1 0 0 1 -1 -1" />
				</g>
				<g fill="#f7f7f7">
					<circle r="2.5" cy="-2.3" />
					<path d="M -0.7 -0.7 h 1.4" />
					<g stroke-width="0.5">
						<path d="M -0.8 -1.6 h 0" stroke-linecap="square" />
						<path d="M 0.8 -1.6 h 0" stroke-linecap="square" />
					</g>
					<path
						d="M -1 0 a 2 2 0 0 0 2 0 h 2 v 1.5 h -1.5 l 1.3 1.8 h -1.3 v 1.5 h -1.5 v -2 2 h -1.5 v -1.5 h -1.3 l 1.3 -1.8 h -1.5 v -1.5z"
					/>
				</g>
				<path fill="#bd4900" d="M -2.5 -2.3 a 2.5 2.5 0 0 1 5 0" />
				<path
					stroke-width="0.3"
					fill="#f70000"
					d="M 1.75 -4 l 0.75 -0.6 h 0.5 v 2 h -0.5 l -0.75 -0.6 -0.75 0.6 h -0.5 v -2 h 0.5z"
				/>
			</g>
		</symbol>
		<symbol id="pick-a-side-sprite-2" viewBox="-5 -5 10 10">
			<g stroke-width="0.4" stroke="currentColor">
				<g fill="#f7f7f7">
					<circle r="2.5" cy="-2.3" />
					<path d="M -0.7 -0.7 h 1.4" />
					<g stroke-width="0.5">
						<path d="M -0.8 -1.6 h 0" stroke-linecap="square" />
						<path d="M 0.8 -1.6 h 0" stroke-linecap="square" />
					</g>
					<path
						d="M -1 0 a 2 2 0 0 0 2 0 h 2 v 1.5 h -1.5 v 3.3 h -1.5 v -2 2 h -1.5 v -3.3  h -1.5 v -1.5z"
					/>
				</g>
				<path fill="#bd4900" d="M -2.5 -2.3 a 2.5 2.5 0 0 1 5 0" />
			</g>
		</symbol>

		<pattern
			id="pick-a-side-pattern-stroke-1"
			viewBox="0 0 2 2"
			width="0.1"
			height="0.1"
			patternUnits="userSpaceOnUse"
		>
			<g fill="#f7ae42">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<pattern
			id="pick-a-side-pattern-stroke-2"
			viewBox="0 0 2 2"
			width="0.1"
			height="0.1"
			patternUnits="userSpaceOnUse"
		>
			<g fill="#21c6ce">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<pattern id="pick-a-side-pattern-grid-1" width="0.1" height="0.1" viewBox="-0.05 -0.05 1.1 1.1">
			<rect
				fill="none"
				stroke="url(#pick-a-side-pattern-stroke-1)"
				stroke-width="0.1"
				width="1"
				height="1"
			/>
		</pattern>
		<pattern id="pick-a-side-pattern-grid-2" width="0.1" height="0.1" viewBox="-0.05 -0.05 1.1 1.1">
			<rect
				fill="none"
				stroke="url(#pick-a-side-pattern-stroke-2)"
				stroke-width="0.1"
				width="1"
				height="1"
			/>
		</pattern>
	</defs>

	<rect width="80" height="50" fill="#f7f7f7" />

	<rect fill="url(#pick-a-side-pattern-grid-1)" y="18" width="40" height="40" />
	<rect fill="url(#pick-a-side-pattern-grid-2)" x="40" y="18" width="40" height="40" />

	<g transform="translate(20 5)">
		<svg x={-size / 2} width={size} height={size}>
			<use href="#pick-a-side-sprite-1" />
		</svg>
	</g>

	<g transform="translate(60 5)">
		<svg x={-size / 2} width={size} height={size}>
			<use href="#pick-a-side-sprite-2" />
		</svg>
	</g>

	<g transform="translate(40 10)">
		<g stroke="currentColor" stroke-width="0.5">
			<path fill="#f7ae42" d="M -2 0 h -5 v 3 h 3 v -3" />
			<path transform="scale(-1 1)" fill="#21c6ce" d="M -2 0 h -5 v 3 h 3 v -3" />
		</g>
	</g>
</svg>
