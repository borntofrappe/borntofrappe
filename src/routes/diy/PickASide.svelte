<svg viewBox="0 0 80 50">
	<title>Pick a side!</title>

	<defs>
		<pattern id="pick-a-side-pattern-stroke-1" viewBox="0 0 2 2" width="0.1" height="0.1">
			<g fill="#f7ae42">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<pattern id="pick-a-side-pattern-stroke-2" viewBox="0 0 2 2" width="0.1" height="0.1">
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
</svg>
