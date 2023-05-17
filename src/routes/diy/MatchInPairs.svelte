<svg viewBox="0 0 80 50">
	<title>Match in pairs!</title>
	<defs>
		<pattern
			id="match-in-pairs-pattern-background"
			viewBox="0 0 2 2"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<g fill="#009e3a">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<symbol id="match-in-pairs-moon" viewBox="-25 -25 50 50">
			<g
				fill="#eeae31"
				stroke="#eeae31"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M 13 -7 a 14 14 0 1 0 0 14 9 9 0 1 1 0 -14" />
			</g>
		</symbol>

		<symbol id="match-in-pairs-sun" viewBox="-25 -25 50 50">
			<circle fill="#eeae31" r="10" />
			<g fill="none" stroke="#eeae31" stroke-width="4" stroke-linecap="round">
				<path d="M 0 -14.5 v -4" />
				<path transform="rotate(45)" d="M 0 -14 v -3" />
				<path transform="rotate(90)" d="M 0 -14 v -3" />
				<path transform="rotate(135)" d="M 0 -14 v -3" />
				<path transform="rotate(180)" d="M 0 -14 v -3" />
				<path transform="rotate(225)" d="M 0 -14 v -3" />
				<path transform="rotate(270)" d="M 0 -14 v -3" />
				<path transform="rotate(315)" d="M 0 -14 v -3" />
			</g>
		</symbol>

		<symbol id="match-in-pairs-star" viewBox="-25 -25 50 50">
			<path
				fill="#eeae31"
				d="M 9.510565162951535 3.090169943749474 Q 14.694631307311829 20.225424859373685 6.123233995736766e-16 10 Q -14.694631307311825 20.225424859373685 -9.510565162951535 3.090169943749475 Q -23.776412907378838 -7.725424859373693 -5.877852522924733 -8.090169943749473 Q -4.592425496802574e-15 -25 5.877852522924729 -8.090169943749476 Q 23.776412907378838 -7.725424859373692 9.510565162951535 3.090169943749474"
			/>
		</symbol>
	</defs>

	<rect fill="#6bce31" width="80" height="60" />
	<g fill="none">
		<rect
			stroke="url(#match-in-pairs-pattern-background)"
			stroke-width="3"
			x="1.5"
			y="1.5"
			width="77"
			height="47"
		/>
		<rect stroke="#eeae31" stroke-width="2" x="1" y="1" width="78" height="48" />
		<rect stroke="#d66d19" stroke-width="1.5" x="0.75" y="0.75" width="77.5" height="47.5" />
		<rect stroke="#c55108" stroke-width="1" x="0.5" y="0.5" width="79" height="49" />
		<rect stroke="#bd4908" stroke-width="0.5" x="0.25" y="0.25" width="79.5" height="49.5" />
	</g>

	<use href="#match-in-pairs-sun" width="10" height="10" />
	<use href="#match-in-pairs-moon" y="10" width="10" height="10" />
	<use href="#match-in-pairs-star" y="20" width="10" height="10" />
</svg>
