<svg viewBox="0 0 80 50">
	<defs>
		<circle id="poke-the-ladybug-dot-grass" r="0.5" />
		<pattern
			id="poke-the-ladybug-pattern-grass"
			viewBox="0 0 10 10"
			patternUnits="userSpaceOnUse"
			width="4"
			height="4"
		>
			<rect fill="#73d23a" width="10" height="10" />
			<g fill="#eef7ee">
				<use href="#poke-the-ladybug-dot-grass" x="1" y="2" />
				<use href="#poke-the-ladybug-dot-grass" x="1.5" y="4" />
				<use href="#poke-the-ladybug-dot-grass" x="1.5" y="7.5" />
				<use href="#poke-the-ladybug-dot-grass" x="2.5" y="8.5" />
				<use href="#poke-the-ladybug-dot-grass" x="4.5" y="1" />
				<use href="#poke-the-ladybug-dot-grass" x="7" y="2" />
				<use href="#poke-the-ladybug-dot-grass" x="5" y="3.5" />
				<use href="#poke-the-ladybug-dot-grass" x="8" y="0" />
				<use href="#poke-the-ladybug-dot-grass" x="8" y="10" />
				<use href="#poke-the-ladybug-dot-grass" x="0" y="3" />
				<use href="#poke-the-ladybug-dot-grass" x="10" y="3" />
				<use href="#poke-the-ladybug-dot-grass" x="4" y="5" />
				<use href="#poke-the-ladybug-dot-grass" x="6" y="6" />
				<use href="#poke-the-ladybug-dot-grass" x="5" y="8.5" />
				<use href="#poke-the-ladybug-dot-grass" x="8" y="5" />
				<use href="#poke-the-ladybug-dot-grass" x="7.5" y="9" />
			</g>
		</pattern>

		<circle id="poke-the-ladybug-dot-rock" r="0.2" />
		<g id="poke-the-ladybug-rock">
			<g stroke="#7b7e7b" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round">
				<path fill="#bdbebd" d="M 0 0 2 -3 9 -5 12 -4 14 1 12 4 2 4z" />
				<path fill="#7b7e7b" d="M 0 0 2 4 12 4 14 1 11.5 2.5 2.5 3" />
			</g>
			<g fill="#7b7e7b">
				<use href="#poke-the-ladybug-dot-rock" x="2" y="-1" />
				<use href="#poke-the-ladybug-dot-rock" x="7" y="-2" />
				<use href="#poke-the-ladybug-dot-rock" x="8" y="-1.5" />
				<use href="#poke-the-ladybug-dot-rock" x="9" y="-3.5" />
				<use href="#poke-the-ladybug-dot-rock" x="10.5" y="-3.5" />
				<use href="#poke-the-ladybug-dot-rock" x="12" y="-1" />
				<use href="#poke-the-ladybug-dot-rock" x="11" y="0.5" />
				<use href="#poke-the-ladybug-dot-rock" x="10" />
				<use href="#poke-the-ladybug-dot-rock" x="6.5" />
				<use href="#poke-the-ladybug-dot-rock" x="7.5" y="2" />
				<use href="#poke-the-ladybug-dot-rock" x="6" y="1.5" />
				<use href="#poke-the-ladybug-dot-rock" x="3.5" y="1" />
			</g>
		</g>
	</defs>

	<rect fill="url(#poke-the-ladybug-pattern-grass)" width="80" height="50" />

	<g>
		<use x="12.5" y="12.5" href="#poke-the-ladybug-rock" />
		<use x="5" y="17.5" href="#poke-the-ladybug-rock" />
		<use x="60" y="15" href="#poke-the-ladybug-rock" />
		<use transform="translate(25 35) scale(-1 1)" href="#poke-the-ladybug-rock" />
		<use transform="translate(70 35) scale(-1 1)" href="#poke-the-ladybug-rock" />
		<use transform="translate(65 40) scale(-1 1)" href="#poke-the-ladybug-rock" />
	</g>

	<g transform="translate(40 25)">
		<g transform="translate(0 -8)">
			<circle fill="currentColor" r="6" />
			<g transform="translate(0 -3.5)">
				<g fill="#f7f7f7">
					<circle r="1.25" cx="-2" />
					<circle r="1.25" cx="2" />
				</g>
			</g>
		</g>
		<circle fill="#f70000" r="10" />
		<g fill="currentColor">
			<circle cx="-5" cy="-1" r="3.6" />
			<circle cx="5" cy="1" r="3.6" />
		</g>
		<path
			fill="none"
			stroke="currentColor"
			stroke-width="0.5"
			stroke-linecap="square"
			d="M 0 -9.75 v 19.5"
		/>
	</g>
</svg>

<style>
	svg {
		max-width: 40rem;
	}
</style>
