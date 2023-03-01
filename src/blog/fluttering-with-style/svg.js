export default {
	'mayo-1': `<svg viewBox="-60 -60 120 120">
	<ellipse rx="28" ry="25" fill="#f9f5d0" />
</svg>`,
	leg: `<svg viewBox="-20 -15 40 40">
	<path d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7" fill="#fd971b" />
</svg>`,
	'leg-stroke': `<svg viewBox="-20 -15 40 40">
	<path
		d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7"
		fill="#fd971b"
		stroke="#fd971b"
		stroke-width="4"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>`,
	'mayo-2': `<svg viewBox="-60 -60 120 120">
	<defs>
		<path id="mayo-2-leg" d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7" />
	</defs>
	<g
		transform="translate(0 17)"
		fill="#fd971b"
		stroke="#fd971b"
		stroke-width="4"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<use href="#mayo-2-leg" x="-12" />
		<use href="#mayo-2-leg" x="12" />
	</g>
	<ellipse rx="28" ry="25" fill="#f9f5d0" />
</svg>`,
	'mayo-3': `<svg viewBox="-60 -70 120 120">
	<defs>
		<path id="mayo-3-leg" d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7" />
	</defs>
	<g
		transform="translate(0 17)"
		fill="#fd971b"
		stroke="#fd971b"
		stroke-width="4"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<use href="#mayo-3-leg" x="-12" />
		<use href="#mayo-3-leg" x="12" />
	</g>
	<ellipse rx="28" ry="25" fill="#f9f5d0" />
	<g transform="translate(0 -30)">
		<path
			d="M -20 0 c -18 24 58 24 40 0 a 20 20 0 0 0 -40 0"
			fill="#f9f5d0"
			stroke="#f9f5d0"
			stroke-width="4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>`,
	'mayo-4': `<svg viewBox="-60 -70 120 120">
	<defs>
		<path id="mayo-4-leg" d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7" />
	</defs>
	<g
		transform="translate(0 17)"
		fill="#fd971b"
		stroke="#fd971b"
		stroke-width="4"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<use href="#mayo-4-leg" x="-12" />
		<use href="#mayo-4-leg" x="12" />
	</g>
	<ellipse rx="28" ry="25" fill="#f9f5d0" />
	<g transform="translate(0 -30)">
		<path
			d="M -20 0 c -18 24 58 24 40 0 a 20 20 0 0 0 -40 0"
			fill="#f9f5d0"
			stroke="#f9f5d0"
			stroke-width="4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<g fill="#542b19">
			<circle r="2.75" cx="-12" />
			<circle r="2.75" cx="12" />
		</g>
		<g stroke-linecap="round" stroke-linejoin="round">
			<g fill="#fd971b" stroke="#fd971b" stroke-width="3">
				<path d="M -9 8 c 6 6 12 6 18 0 -7 -5 -11 -5 -18 0" />
			</g>
			<g fill="#fc531c" stroke="#fc531c" stroke-width="1">
				<path d="M -6 8 c 3 4 9 4 12 0 -4 1 -8 1 -12 0" />
			</g>
		</g>
	</g>
</svg>`,
	wing: `<svg viewBox="-30 -30 60 60">
	<path
		d="M 0 0 c 6 -5 14 -8 20 0 -5 5 -2 10 -12 10 -2 0 -8 0 -8 -10"
		fill="#f0d584"
		stroke="#f0d584"
		stroke-width="8"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>`,
	'mayo-5': `<svg viewBox="-60 -70 120 120">
	<defs>
		<path id="mayo-5-leg" d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7" />
		<path id="mayo-5-wing" d="M 0 0 c 6 -5 14 -8 20 0 -5 5 -2 10 -12 10 -2 0 -8 0 -8 -10" />
	</defs>
	<g
		transform="translate(0 17)"
		fill="#fd971b"
		stroke="#fd971b"
		stroke-width="4"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<use href="#mayo-5-leg" x="-12" />
		<use href="#mayo-5-leg" x="12" />
	</g>
	<g transform="translate(0 -10)">
		<g
			fill="#f0d584"
			stroke="#f0d584"
			stroke-width="8"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="translate(25 0)"> <use href="#mayo-5-wing" transform="rotate(90)" /></g>
			<g transform="scale(-1 1) translate(25 0)">
				<use href="#mayo-5-wing" transform="rotate(90)" /></g
			>
		</g>
	</g>
	<ellipse rx="28" ry="25" fill="#f9f5d0" />
	<g transform="translate(0 -30)">
		<path
			d="M -20 0 c -18 24 58 24 40 0 a 20 20 0 0 0 -40 0"
			fill="#f9f5d0"
			stroke="#f9f5d0"
			stroke-width="4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<g fill="#542b19">
			<circle r="2.75" cx="-12" />
			<circle r="2.75" cx="12" />
		</g>
		<g stroke-linecap="round" stroke-linejoin="round">
			<g fill="#fd971b" stroke="#fd971b" stroke-width="3">
				<path d="M -9 8 c 6 6 12 6 18 0 -7 -5 -11 -5 -18 0" />
			</g>
			<g fill="#fc531c" stroke="#fc531c" stroke-width="1">
				<path d="M -6 8 c 3 4 9 4 12 0 -4 1 -8 1 -12 0" />
			</g>
		</g>
	</g>
</svg>`,
	'mayo-6': `<svg viewBox="-60 -70 120 120">
	<defs>
		<path id="mayo-6-leg" d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7" />
		<path id="mayo-6-wing" d="M 0 0 c 6 -5 14 -8 20 0 -5 5 -2 10 -12 10 -2 0 -8 0 -8 -10" />
	</defs>
	<g
		transform="translate(0 17)"
		fill="#fd971b"
		stroke="#fd971b"
		stroke-width="4"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<use href="#mayo-6-leg" x="-12" />
		<use href="#mayo-6-leg" x="12" />
	</g>
	<g transform="translate(0 -10)">
		<g
			fill="#f0d584"
			stroke="#f0d584"
			stroke-width="8"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="translate(25 0)"> <use href="#mayo-6-wing" transform="rotate(90)" /></g>
			<g transform="scale(-1 1) translate(25 0)">
				<use href="#mayo-6-wing" transform="rotate(90)" /></g
			>
		</g>
	</g>
	<ellipse rx="28" ry="25" fill="#f9f5d0" />
	<g transform="translate(0 -30)">
		<g transform="translate(0 -20)">
			<path
				d="M 0 0 c 5 0 11 -2 11 -5 0 5 2.5 5 5 3 0 5 -10 7 -16 2"
				fill="#f9f5d0"
				stroke="#f9f5d0"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
		<path
			d="M -20 0 c -18 24 58 24 40 0 a 20 20 0 0 0 -40 0"
			fill="#f9f5d0"
			stroke="#f9f5d0"
			stroke-width="4"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<g fill="#542b19">
			<circle r="2.75" cx="-12" />
			<circle r="2.75" cx="12" />
		</g>
		<g stroke-linecap="round" stroke-linejoin="round">
			<g fill="#fd971b" stroke="#fd971b" stroke-width="3">
				<path d="M -9 8 c 6 6 12 6 18 0 -7 -5 -11 -5 -18 0" />
			</g>
			<g fill="#fc531c" stroke="#fc531c" stroke-width="1">
				<path d="M -6 8 c 3 4 9 4 12 0 -4 1 -8 1 -12 0" />
			</g>
		</g>
	</g>
</svg>`
};
