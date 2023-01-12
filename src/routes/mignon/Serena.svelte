<svg viewBox="-60 -30 120 130">
	<defs>
		<pattern id="p" viewBox="-8 -8 16 16" width="10" height="10" patternUnits="userSpaceOnUse">
			<path fill="#35cce9" d="M 0 0 q 2 2 2 4 a 2 2 0 0 1 -4 0 q 0 -2 2 -4" />
		</pattern>
		<circle id="c" r="11" />
		<mask id="m">
			<use href="#c" fill="white" />
			<use href="#c" y="-2" fill="black" />
		</mask>
		<g id="cc">
			<use href="#c" />
			<use href="#c" fill="black" mask="url(#m)" opacity="0.1" />
		</g>
		<g id="ccc">
			<g fill="#ebf3f5">
				<use href="#c" />
				<use transform="translate(-12.5 -5)" href="#c" />
				<use transform="translate(12.5 -5)" href="#c" />
				<use transform="translate(0 -10)" href="#c" />
				<use transform="translate(-20 0) rotate(20)" href="#cc" />
				<use transform="translate(20 0) rotate(-20)" href="#cc" />
				<use transform="translate(-15 10) rotate(10)" href="#cc" />
				<use transform="translate(15 10) rotate(-10)" href="#cc" />
				<use transform="translate(0 15)" href="#cc" />
			</g>
		</g>
	</defs>

	<g class="translate">
		<rect fill="url(#p)" x="-30" width="60" height="100" />
	</g>

	<use href="#ccc" transform="scale(1.2)" />

	<g fill="#f9a3c6">
		<ellipse cx="12.5" cy="3" rx="4" ry="2" />
		<ellipse cx="-12.5" cy="3" rx="4" ry="2" />
	</g>

	<g fill="#acacfa">
		<g transform="translate(12.5 -2.5)">
			<circle r="3" />
		</g>
		<g transform="translate(-12.5 -2.5)">
			<circle r="3" />
		</g>
	</g>

	<g
		fill="#acacfa"
		stroke="#acacfa"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<g transform="translate(0 10)">
			<path d="M -2 0 h 4" />
			<path d="M -2 0 v 2 a 2 2 0 0 0 4 0 v -2z" />
		</g>
	</g>
</svg>
