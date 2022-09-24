<svg viewBox="0 0 80 50">
	<defs>
		<pattern
			id="pick-up-produce-pattern-overlay"
			viewBox="0 0 2 2"
			width="2"
			height="2"
			patternUnits="userSpaceOnUse"
		>
			<g opacity="0.2">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<g id="pick-up-produce-cloud">
			<path
				fill="#fdfbfc"
				stroke="none"
				d="M 0 0 a 3.75 3.75 0 0 1 6 2 2.25 2.25 0 0 1 0 5 3.75 3.75 0 0 1 -6 1 3.75 3.75 0 0 1 -6 -1 2.25 2.25 0 0 1 0 -5 3.75 3.75 0 0 1 6 -2"
			/>
			<path
				opacity="0.1"
				d="M 8.5 4.5 a 2.25 2.25 0 0 1 -2.5 2.5 3.75 3.75 0 0 1 -6 1 3.75 3.75 0 0 1 -6 -1 2.25 2.25 0 0 1 -2.5 -2.5 a 2 2 0 0 0 3.5 1 3 3 0 0 0 5 0 3 3 0 0 0 5 0 2 2 0 0 0 3.5 -1"
			/>
		</g>

		<g id="pick-up-produce-tree-front">
			<circle r="10" fill="#51a78e" />
			<circle r="10" fill="url(#pick-up-produce-pattern-overlay)" opacity="0.5" />
		</g>

		<g id="pick-up-produce-tree-back">
			<circle r="10" fill="#51a78e" />
			<circle r="10" opacity="0.2" />
		</g>

		<path
			id="pick-up-produce-tree-trunk-shape"
			d="M 0 0 v -2 q 2 -10 -5 -17 v -2 q 2 0 6 5 q 0 -3 -4 -9 h 2 q 0 3 3 4 2 0 4 -6 h 2 q -3 7 -3 12 q 5 -10 10 -10 h 2 q -15 10 -7 23 v 2"
		/>

		<g id="pick-up-produce-tree-trunk">
			<use href="#pick-up-produce-tree-trunk-shape" fill="#ffd794" />
			<use
				href="#pick-up-produce-tree-trunk-shape"
				fill="url(#pick-up-produce-pattern-overlay)"
				opacity="0.3"
			/>
		</g>

		<path
			id="pick-up-produce-grass"
			d="M 0 34 l 1 -5 1 2 1 -5 1 5 1 1 0 -3 3 2 1 -2 2 2 0 -3 4 3 2 -2 2 3 2 -3 0 5z"
		/>
	</defs>

	<rect width="80" height="50" fill="#85dde1" />
	<rect width="80" height="50" fill="url(#pick-up-produce-pattern-overlay)" />

	<use href="#pick-up-produce-cloud" x="50" y="6" />
	<use href="#pick-up-produce-cloud" x="69" y="3" />

	<g stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round">
		<g fill="#51a78e" stroke="#51a78e">
			<use href="#pick-up-produce-grass" />
			<g transform="translate(79 1) scale(-1 1)">
				<use href="#pick-up-produce-grass" />
			</g>
		</g>
		<g stroke="#000000" opacity="0.3">
			<use href="#pick-up-produce-grass" />
			<g transform="translate(79 1) scale(-1 1)">
				<use href="#pick-up-produce-grass" />
			</g>
		</g>
	</g>

	<g>
		<g>
			<use href="#pick-up-produce-tree-back" x="-2" y="9" />
			<use href="#pick-up-produce-tree-back" x="9" y="9" />
			<use href="#pick-up-produce-tree-back" x="16" y="6" />
		</g>

		<use href="#pick-up-produce-tree-trunk" x="5" y="34" />

		<g>
			<use href="#pick-up-produce-tree-front" x="-3" y="5" />
			<use href="#pick-up-produce-tree-front" x="6" y="2" />
			<use href="#pick-up-produce-tree-front" x="18" y="2" />
			<use href="#pick-up-produce-tree-front" x="26" />
		</g>
	</g>

	<!-- crops here	 -->

	<g>
		<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
			<g fill="#c64a00">
				<path d="M 7 32 l 1 -1 3 0 1 1 0 1 -5 2 -1 -1z" />
				<path d="M 25 32 l 1 0 1 1 2 0 0 2 -2 1 -1 0 -1 -2 0 -2z" />
				<path d="M 45 32 l 1 -1 2 0 1 1 -1 1 -1 1 -2 -1z" />
				<path d="M 52 33 l 0 -1 2 -2 2 0 1 1 -1 2 -4 0z" />
				<path d="M  61 33 l 1 -2 1 0 1 1 -1 2 -1 0z" />
				<path d="M  75 34 l 0 -1 1 -1 3 0 0 1 0 1 -4 0z" />

				<path
					d="M 0 33 l 1 0 2 -2 3 1 2 1 2 1 1 -1 2 0 1 -1 4 0 2 1 2 -1 3 1 1 2 3 -2 7 0 3 -1 1 0 2 1 5 0 1 -1 2 0 0 1 5 0 1 -2 5 0 1 2 2 -1 6 0 1 1 6 0 1 -1 1 0 H 81 V 51 H -1 V 33"
				/>
			</g>

			<g fill="none">
				<path d="M 3 38 l 1 -1 1 0 2 -1 2 1 -1 1 -2 0 -1 -1" />
				<path d="M 9 37 l 2 0 0 -1 3 0 0 3 -5 0 0 -2" />
				<path
					d="M 6 47 l 0 -1 1 0 1 1 0 -2 2 0 1 1 2 -1 1 0 1 1 4 0 -1 -2 3 0 2 1 -1 2 -3 0 0 -1 0 0"
				/>
				<path
					d="M 26 38 l -2 2 2 1 5 0 -1 -3 1 0 0 2 2 -1 1 2 2 -2 2 0 2 -2 2 0 1 2 2 0 0 1 2 -1 2 0"
				/>
				<path d="M  40 46 l 0 -2 1 0 3 0 1 1 -1 2 4 1 2 0 -2 -2 -3 0" />
				<path d="M 55 48 l 2 0 0 -1 2 0 1 -2 1 1 3 0 0 -2 1 3 2 0 0 1" />
				<path d="M  71 47 l 2 0 3 -3 -1 1 3 0 -3 0 -1 1 2 1 2 0" />
				<path d="M 58 40 l 2 -1 2 0 1 -2 2 0 0 2" />
				<path d="M 68 37 l -1 0 -1 0 0 2 1 1 1 0 2 -2 -4 0" />
			</g>
		</g>
	</g>
</svg>
