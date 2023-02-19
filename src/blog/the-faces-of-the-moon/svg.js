export default {
	'claire-light': `<svg style="display: block" viewBox="-55 -55 110 110">
	<circle r="28" fill="#f2ec64" />
	<g fill="#dad35f">
		<circle r="1.75" cx="19.75" cy="14" />
		<circle r="1.5" cx="16.5" cy="18.5" />
		<circle r="1" cx="13.25" cy="21.5" />
	</g>
	<g fill="#dad35f">
		<g transform="translate(0 -3)">
			<circle r="4.5" cx="10" />
			<circle r="4.5" cx="-10" />
		</g>
		<g transform="translate(0 10)">
			<g stroke="#dad35f" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
				<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
			</g>
		</g>
	</g>
</svg>`,
	'claire-stars': `<svg style="display: block" viewBox="-55 -55 110 110">
    <defs>
        <path
            id="claire-stars-star"
            stroke-width="1"
            stroke-linejoin="round"
            stroke-linecap="round"
            d="M -4 0 l 2.5 1.5 1.5 2.5 1.5 -2.5 2.5 -1.5 -2.5 -1.5 -1.5 -2.5 -1.5 2.5z"
        />
    </defs>
    <g fill="#dad35f">
        <circle cx="-48" cy="-46" r="1" />
        <circle cx="-40" cy="-38" r="1.1" />
        <circle cx="-43" cy="-42" r="0.9" />
        <circle cx="-38" cy="-46" r="1.8" />
        <circle cx="-34" cy="-40" r="1.2" />
        <circle cx="39" cy="-42" r="0.9" />
        <circle cx="35" cy="-38" r="1" />
        <circle cx="34" cy="-45" r="0.75" />
        <circle cx="42" cy="44" r="0.75" />
        <circle cx="-33" cy="35" r="1" />
		<g stroke="#dad35f">
			<use href="#claire-stars-star" x="35" y="-38" />
			<use href="#claire-stars-star" transform="translate(-38 28) scale(0.8)" />
			<use href="#claire-stars-star" transform="translate(29 38) scale(0.7)" />
			<use href="#claire-stars-star" transform="translate(35 45) scale(0.5)" />
			<use href="#claire-stars-star" transform="translate(38 35) scale(0.6)" />
		</g>
    </g>
    <circle r="28" fill="#f2ec64" />
    <g fill="#dad35f">
        <circle r="1.75" cx="19.75" cy="14" />
        <circle r="1.5" cx="16.5" cy="18.5" />
        <circle r="1" cx="13.25" cy="21.5" />
    </g>
    <g fill="#dad35f">
        <g transform="translate(0 -3)">
            <circle r="4.5" cx="10" />
            <circle r="4.5" cx="-10" />
        </g>
        <g transform="translate(0 10)">
            <g stroke="#dad35f" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
                <path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
            </g>
        </g>
    </g>
</svg>`,
	'setup-dark': `<svg style="display: block" viewBox="-55 -55 110 110">
	<circle r="28" fill="#dad35f" />
	<g fill="#bfb5f5">
		<circle r="1.75" cx="19.75" cy="14" />
		<circle r="1.5" cx="16.5" cy="18.5" />
		<circle r="1" cx="13.25" cy="21.5" />
	</g>
	<g
		fill="#bfb5f5"
		stroke="#bfb5f5"
		stroke-width="2"
		stroke-linejoin="round"
		stroke-linecap="round"
	>
		<g transform="translate(0 10)">
			<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
		</g>
	</g>
</svg>`,
	eyelash: `<svg style="display: block" viewBox="-15 -12 30 30">
	<g fill="none" stroke="#bfb5f5" stroke-linejoin="round" stroke-linecap="round">
		<path stroke-width="1.5" d="M -4 0 a 4 4 0 0 0 8 0" />
		<g stroke-width="1">
			<path d="M 0 4 v 2" />
			<path transform="rotate(60)" d="M 0 4 v 2" />
			<path transform="rotate(-60)" d="M 0 4 v 2" />
			<path transform="rotate(-30)" d="M 0 4 v 2" />
			<path transform="rotate(30)" d="M 0 4 v 2" />
		</g>
	</g>
</svg>`,
	'claire-dark': `<svg style="display: block" viewBox="-55 -55 110 110">
	<defs>
		<g
			id="claire-dark-eyelash"
			fill="none"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<path stroke-width="1.5" d="M -4 0 a 4 4 0 0 0 8 0" />
			<g stroke-width="1">
				<path d="M 0 4 v 2" />
				<path transform="rotate(60)" d="M 0 4 v 2" />
				<path transform="rotate(-60)" d="M 0 4 v 2" />
				<path transform="rotate(-30)" d="M 0 4 v 2" />
				<path transform="rotate(30)" d="M 0 4 v 2" />
			</g>
		</g>
	</defs>
	<circle r="28" fill="#dad35f" />
	<g fill="#bfb5f5">
		<circle r="1.75" cx="19.75" cy="14" />
		<circle r="1.5" cx="16.5" cy="18.5" />
		<circle r="1" cx="13.25" cy="21.5" />
	</g>
	<g stroke="#bfb5f5">
		<use href="#claire-dark-eyelash" x="-10" y="-4" />
		<use href="#claire-dark-eyelash" x="10" y="-4" />
	</g>
	<g
		fill="#bfb5f5"
		stroke="#bfb5f5"
		stroke-width="2"
		stroke-linejoin="round"
		stroke-linecap="round"
	>
		<g transform="translate(0 10)">
			<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
		</g>
	</g>
</svg>`,
	'face-overlap': `<svg style="display: block" viewBox="-55 -55 110 110">
	<defs>
		<g
			id="face-overlap-eyelash"
			fill="none"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<path stroke-width="1.5" d="M -4 0 a 4 4 0 0 0 8 0" />
			<g stroke-width="1">
				<path d="M 0 4 v 2" />
				<path transform="rotate(60)" d="M 0 4 v 2" />
				<path transform="rotate(-60)" d="M 0 4 v 2" />
				<path transform="rotate(-30)" d="M 0 4 v 2" />
				<path transform="rotate(30)" d="M 0 4 v 2" />
			</g>
		</g>
	</defs>
	<g>
		<circle r="28" fill="#dad35f" />
		<g fill="#bfb5f5">
			<circle r="1.75" cx="19.75" cy="14" />
			<circle r="1.5" cx="16.5" cy="18.5" />
			<circle r="1" cx="13.25" cy="21.5" />
		</g>
		<g stroke="#bfb5f5">
			<use href="#face-overlap-eyelash" x="-10" y="-4" />
			<use href="#face-overlap-eyelash" x="10" y="-4" />
		</g>
		<g
			fill="#bfb5f5"
			stroke="#bfb5f5"
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<g transform="translate(0 10)">
				<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
			</g>
		</g>
	</g>
	<g>
		<circle r="28" fill="#f2ec64" />
		<g fill="#dad35f">
			<circle r="1.75" cx="19.75" cy="14" />
			<circle r="1.5" cx="16.5" cy="18.5" />
			<circle r="1" cx="13.25" cy="21.5" />
		</g>
		<g fill="#dad35f">
			<g transform="translate(0 -3)">
				<circle r="4.5" cx="10" />
				<circle r="4.5" cx="-10" />
			</g>
			<g transform="translate(0 10)">
				<g stroke="#dad35f" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
					<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
				</g>
			</g>
		</g>
	</g>
</svg>`,
	'face-clip': `<svg style="display: block" viewBox="-55 -55 110 110">
	<defs>
		<g
			id="face-clip-eyelash"
			fill="none"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<path stroke-width="1.5" d="M -4 0 a 4 4 0 0 0 8 0" />
			<g stroke-width="1">
				<path d="M 0 4 v 2" />
				<path transform="rotate(60)" d="M 0 4 v 2" />
				<path transform="rotate(-60)" d="M 0 4 v 2" />
				<path transform="rotate(-30)" d="M 0 4 v 2" />
				<path transform="rotate(30)" d="M 0 4 v 2" />
			</g>
		</g>
		<clipPath id="face-clip-clip-moon">
            <!-- ... -->
        </clipPath>
	</defs>
	<g>
		<circle r="28" fill="#dad35f" />
		<g fill="#bfb5f5">
			<circle r="1.75" cx="19.75" cy="14" />
			<circle r="1.5" cx="16.5" cy="18.5" />
			<circle r="1" cx="13.25" cy="21.5" />
		</g>
		<g stroke="#bfb5f5">
			<use href="#face-clip-eyelash" x="-10" y="-4" />
			<use href="#face-clip-eyelash" x="10" y="-4" />
		</g>
		<g
			fill="#bfb5f5"
			stroke="#bfb5f5"
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<g transform="translate(0 10)">
				<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
			</g>
		</g>
	</g>
	<g clip-path="url(#face-clip-clip-moon)">
		<circle r="28" fill="#f2ec64" />
		<g fill="#dad35f">
			<circle r="1.75" cx="19.75" cy="14" />
			<circle r="1.5" cx="16.5" cy="18.5" />
			<circle r="1" cx="13.25" cy="21.5" />
		</g>
		<g fill="#dad35f">
			<g transform="translate(0 -3)">
				<circle r="4.5" cx="10" />
				<circle r="4.5" cx="-10" />
			</g>
			<g transform="translate(0 10)">
				<g stroke="#dad35f" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
					<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
				</g>
			</g>
		</g>
	</g>
</svg>`
};
