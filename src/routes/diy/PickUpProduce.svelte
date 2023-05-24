<svg style="display: block;" viewBox="0 0 80 50">
	<title>Pick up produce!</title>

	<defs>
		<pattern
			id="pick-up-produce-pattern-overlay"
			viewBox="0 0 2 2"
			width="2"
			height="2"
			patternUnits="userSpaceOnUse"
		>
			<g opacity="0.2" fill="#000000">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<g id="pick-up-produce-cloud">
			<path
				stroke="none"
				d="M 0 0 a 3.75 3.75 0 0 1 6 2 2.25 2.25 0 0 1 0 5 3.75 3.75 0 0 1 -6 1 3.75 3.75 0 0 1 -6 -1 2.25 2.25 0 0 1 0 -5 3.75 3.75 0 0 1 6 -2"
			/>
			<path
				fill="#000000"
				opacity="0.1"
				d="M 8.5 4.5 a 2.25 2.25 0 0 1 -2.5 2.5 3.75 3.75 0 0 1 -6 1 3.75 3.75 0 0 1 -6 -1 2.25 2.25 0 0 1 -2.5 -2.5 a 2 2 0 0 0 3.5 1 3 3 0 0 0 5 0 3 3 0 0 0 5 0 2 2 0 0 0 3.5 -1"
			/>
		</g>

		<g id="pick-up-produce-grass">
			<path d="M 0 34 l 1 -5 1 2 1 -5 1 5 1 1 0 -3 3 2 1 -2 2 2 0 -3 4 3 2 -2 2 3 2 -3 0 5z" />
			<path
				transform="translate(79 1) scale(-1 1)"
				d="M 0 34 l 1 -5 1 2 1 -5 1 5 1 1 0 -3 3 2 1 -2 2 2 0 -3 4 3 2 -2 2 3 2 -3 0 5z"
			/>
		</g>

		<g id="pick-up-produce-tree-front">
			<circle fill="#51a78e" r="10" />
			<circle opacity="0.5" fill="url(#pick-up-produce-pattern-overlay)" r="10" />
		</g>

		<g id="pick-up-produce-tree-back">
			<circle fill="#51a78e" r="10" />
			<circle opacity="0.2" fill="#000000" r="10" />
		</g>

		<path
			id="pick-up-produce-tree-trunk-shape"
			d="M 0 0 v -2 q 2 -10 -5 -17 v -2 q 2 0 6 5 q 0 -3 -4 -9 h 2 q 0 3 3 4 2 0 4 -6 h 2 q -3 7 -3 12 q 5 -10 10 -10 h 2 q -15 10 -7 23 v 2"
		/>

		<g id="pick-up-produce-tree-trunk">
			<use fill="#ffd794" href="#pick-up-produce-tree-trunk-shape" />
			<use
				opacity="0.3"
				fill="url(#pick-up-produce-pattern-overlay)"
				href="#pick-up-produce-tree-trunk-shape"
			/>
		</g>

		<symbol id="pick-up-produce-crop" viewBox="-15 -21 30 47">
			<g transform="translate(0 -6)">
				<g fill="#76d0ad" stroke="#12984f" stroke-linecap="round" stroke-linejoin="round">
					<path d="M 0 0 a 9 9 0 0 1 0 -14 9 9 0 0 1 0 14" />
					<path stroke-width="0.75" d="M 0 0 v -10" />
					<path d="M 0.25 0 c 0 -5 0 -10 8 -14 5 7 -1 13 -5.5 14" />
					<path transform="scale(-1 1)" d="M 0.25 0 c 0 -5 0 -10 8 -14 5 7 -1 13 -5.5 14" />
					<g stroke-width="0.75">
						<path d="M 0.25 0 q 3.5 -4 6.5 -9.5" />
						<path transform="scale(-1 1)" d="M 0.25 0 q 3.5 -4 6.5 -9.5" />
					</g>
				</g>
			</g>
			<g fill="none" stroke="#12984f" stroke-linecap="round" stroke-linejoin="round">
				<path transform="rotate(0) translate(0 21)" d="M 0 0 a 1 1 0 0 0 0 2 1 1 0 0 1 0 2" />
				<path transform="rotate(15) translate(0 20.5)" d="M 0 0 a 1 1 0 0 0 0 2 1 1 0 0 1 0 2" />
				<path transform="rotate(-15) translate(0 20.5)" d="M 0 0 a 1 1 0 0 0 0 2 1 1 0 0 1 0 2" />
				<path transform="rotate(-30) translate(0 20)" d="M 0 0 a 1 1 0 0 0 0 2 1 1 0 0 1 0 2" />
				<path transform="rotate(30) translate(0 20)" d="M 0 0 a 1 1 0 0 0 0 2 1 1 0 0 1 0 2" />
			</g>

			<path fill="#ffdd9d" d="M 2 0 v 5 a 13 8 0 1 1 -4 0 v -5" />
			<path fill="#76d0ad" d="M -2 -6 v 5 h 4 v -5" />

			<g stroke="#c64e00" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#c64e00">
					<path transform="translate(3.25 9)" d="M 0 0 l 1.1 1.7 -1.1 1.7 -1.1 -1.7z" />
					<path transform="translate(-3.25 9)" d="M 0 0 l 1.1 1.7 -1.1 1.7 -1.1 -1.7z" />
				</g>
				<path fill="none" stroke="#c64e00" d="M -4 15 a 6 6 0 0 0 8 0" />
			</g>

			<path fill="#ffdd9d" d="M -1.5 -1 h 3 v 4 l -0.75 -0.75 -0.75 0.75 -0.75 -0.75 -0.75 0.75z" />
			<path opacity="0.1" d="M -1.5 -1 h 3 v 4 l -0.75 -0.75 -0.75 0.75 -0.75 -0.75 -0.75 0.75z" />

			<g stroke="#12984f" stroke-linecap="round" stroke-linejoin="round">
				<path fill="none" stroke-width="1.25" d="M 2 -6 v 11 a 13 8 0 1 1 -4 0 v -11" />
				<path fill="#ffdd9d" d="M -7 17 c -1 3 6 5 7 5 1 0 8 -2 7 -5" />
			</g>
		</symbol>
	</defs>

	<rect width="80" height="50" fill="#85dde1" />
	<rect width="80" height="50" fill="url(#pick-up-produce-pattern-overlay)" />

	<g fill="#fdfbfc">
		<use href="#pick-up-produce-cloud" x="50" y="6" />
		<use href="#pick-up-produce-cloud" x="69" y="3" />
	</g>

	<g stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round">
		<use fill="#51a78e" stroke="#51a78e" href="#pick-up-produce-grass" />
		<use fill="#000000" stroke="#000000" opacity="0.3" href="#pick-up-produce-grass" />
	</g>

	<g>
		<use href="#pick-up-produce-tree-back" x="-2" y="9" />
		<use href="#pick-up-produce-tree-back" x="9" y="9" />
		<use href="#pick-up-produce-tree-back" x="16" y="6" />

		<use href="#pick-up-produce-tree-trunk" x="5" y="34" />

		<use href="#pick-up-produce-tree-front" x="-3" y="5" />
		<use href="#pick-up-produce-tree-front" x="6" y="2" />
		<use href="#pick-up-produce-tree-front" x="18" y="2" />
		<use href="#pick-up-produce-tree-front" x="26" />
	</g>

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

	<g>
		<use href="#pick-up-produce-crop" width="30" height="47" />
	</g>
</svg>
