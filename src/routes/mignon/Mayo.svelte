<script>
	// /	import Chicklet from './Chicklet.svelte'
</script>

<!-- <Chicklet /> -->

<svg viewBox="-55 -60 110 100">
	<defs>
		<path
			transform="rotate(90)"
			id="w"
			d="M 0 0 c 6 -5 14 -8 20 0 -5 5 -2 10 -12 10 -2 0 -8 0 -8 -10"
		/>
		<path transform="rotate(0)" id="l" d="M -3 0 v 7 m 0 0 l 7 7 -7 -4 -7 4z v8" />
	</defs>
	<g
		fill="#f0d584"
		stroke="#f0d584"
		stroke-width="8"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<g transform="translate(27 -10)">
			<use href="#w" />
		</g>
		<g transform="scale(-1 1) translate(27 -10)">
			<use href="#w" />
		</g>
	</g>

	<g fill="none" stroke="#fd971b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
		<g transform="translate(14 17)">
			<use href="#l" />
		</g>
		<g transform="scale(-1 1) translate(14 17)">
			<use href="#l" />
		</g>
	</g>

	<g fill="#f9f5d0">
		<ellipse rx="28" ry="25" />
		<g stroke="#f9f5d0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
			<g transform="translate(0 -30)">
				<path d="M -20 0 c -18 24 58 24 40 0 a 20 20 0 0 0 -40 0" />
			</g>
			<g transform="translate(0 -49.5)">
				<path stroke-width="3" d="M -5 0 c 5 0 11 -2 11 -5 0 5 2.5 5 5 3 0 5 -10 7 -16 2" />
			</g>
		</g>
	</g>

	<g fill="#542b19">
		<circle cx="12" cy="-30" r="2.75" />
		<circle cx="-12" cy="-30" r="2.75" />
	</g>

	<g transform="translate(0 -20)">
		<g stroke-linecap="round" stroke-linejoin="round">
			<g fill="#fd971b" stroke="#fd971b" stroke-width="3">
				<path d="M -9 -2 c 6 6 12 6 18 0 c -7 -5 -11 -5 -18 0" />
			</g>
			<g fill="#fc531c" stroke="#fc531c" stroke-width="1">
				<path d="M -6 -2 c 3 4 9 4 12 0 c -4 1 -8 1 -12 0" />
			</g>
		</g>
	</g>
</svg>
