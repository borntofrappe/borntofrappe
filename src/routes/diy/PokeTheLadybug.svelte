<script>
	import AnimatedTitle from './AnimatedTitle.svelte';
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<title>Poke the ladybug!</title>

	<defs>
		<pattern
			id="poke-the-ladybug-pattern-grass"
			viewBox="0 0 10 10"
			patternUnits="userSpaceOnUse"
			width="5"
			height="5"
		>
			<rect fill="#73d23a" width="10" height="10" />
			<g fill="#eef7ee">
				<circle r="0.4" cx="1" cy="2" />
				<circle r="0.4" cx="1.5" cy="4" />
				<circle r="0.4" cx="1.5" cy="7.5" />
				<circle r="0.4" cx="2.5" cy="8.5" />
				<circle r="0.4" cx="4.5" cy="1" />
				<circle r="0.4" cx="7" cy="2" />
				<circle r="0.4" cx="5" cy="3.5" />
				<circle r="0.4" cx="8" cy="0" />
				<circle r="0.4" cx="8" cy="10" />
				<circle r="0.4" cx="0" cy="3" />
				<circle r="0.4" cx="10" cy="3" />
				<circle r="0.4" cx="4" cy="5" />
				<circle r="0.4" cx="6" cy="6" />
				<circle r="0.4" cx="5" cy="8.5" />
				<circle r="0.4" cx="8" cy="5" />
				<circle r="0.4" cx="7.5" cy="9" />
			</g>
		</pattern>

		<g id="poke-the-ladybug-rock">
			<g stroke="#7b7e7b" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round">
				<path fill="#bdbebd" d="M 0 0 2 -3 9 -5 12 -4 14 1 12 4 2 4z" />
				<path fill="#7b7e7b" d="M 0 0 2 4 12 4 14 1 11.5 2.5 2.5 3" />
			</g>
			<g fill="#7b7e7b">
				<circle r="0.2" cx="2" cy="-1" />
				<circle r="0.2" cx="7" cy="-2" />
				<circle r="0.2" cx="8" cy="-1.5" />
				<circle r="0.2" cx="9" cy="-3.5" />
				<circle r="0.2" cx="10.5" cy="-3.5" />
				<circle r="0.2" cx="12" cy="-1" />
				<circle r="0.2" cx="11" cy="0.5" />
				<circle r="0.2" cx="10" />
				<circle r="0.2" cx="6.5" />
				<circle r="0.2" cx="7.5" cy="2" />
				<circle r="0.2" cx="6" cy="1.5" />
				<circle r="0.2" cx="3.5" cy="1" />
			</g>
		</g>
	</defs>

	<rect fill="url(#poke-the-ladybug-pattern-grass)" width="80" height="50" />

	<g>
		<use href="#poke-the-ladybug-rock" transform="translate(12.5 12.5)" />
		<use href="#poke-the-ladybug-rock" transform="translate(5 17.5)" />
		<use href="#poke-the-ladybug-rock" transform="translate(60 15)" />
		<use href="#poke-the-ladybug-rock" transform="translate(25 35) scale(-1 1)" />
		<use href="#poke-the-ladybug-rock" transform="translate(70 35) scale(-1 1)" />
		<use href="#poke-the-ladybug-rock" transform="translate(65 40) scale(-1 1)" />
	</g>
</svg>
