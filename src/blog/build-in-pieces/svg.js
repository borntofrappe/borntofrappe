export default {
	piece: `<svg style="display: block;" viewBox="-6 -5 12 12">
    <title>A stylish flower</title>
	<rect fill="#f8f8f8" x="-6" y="-5" width="12" height="12" />
	<g stroke="#4e5c78" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round">
		<path fill="none" d="M 0 0 q 0.2 3 -0.1 5" />
		<g fill="#4e5c78">
			<path d="M 0 5.5 c 0 -2 1 -2.5 2 -2.5 c 0 2 -1 2.5 -2 2.5" />
			<path transform="scale(-1 1)" d="M 0 5.5 c 0 -2 1 -2.5 2 -2.5 c 0 2 -1 2.5 -2 2.5" />
		</g>
	</g>
	<g
		fill="#84a88d"
		stroke="#84a88d"
		stroke-width="1"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<g transform="rotate(30)">
			<path d="M -1 0 a 0.4 1 0 0 0 2 0" />
			<path transform="rotate(60)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
			<path transform="rotate(120)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
			<path transform="rotate(180)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
			<path transform="rotate(240)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
			<path transform="rotate(300)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
		</g>
	</g>
	<ellipse fill="#ebc699" rx="1.1" ry="1.05" />
</svg>`,
	pieces: `<svg style="display: block;" viewBox="-16 -5 32 12">
    <title>A comforting flower bed</title>
	<rect fill="#f8f8f8" x="-16" y="-5" width="32" height="13" />
	<g id="pieces-flower">
		<g stroke="#4e5c78" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round">
			<path fill="none" d="M 0 0 q 0.2 3 -0.1 5" />
			<g fill="#4e5c78">
				<path d="M 0 5.5 c 0 -2 1 -2.5 2 -2.5 c 0 2 -1 2.5 -2 2.5" />
				<path transform="scale(-1 1)" d="M 0 5.5 c 0 -2 1 -2.5 2 -2.5 c 0 2 -1 2.5 -2 2.5" />
			</g>
		</g>
		<g
			fill="#84a88d"
			stroke="#84a88d"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="rotate(30)">
				<path d="M -1 0 a 0.4 1 0 0 0 2 0" />
				<path transform="rotate(60)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
				<path transform="rotate(120)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
				<path transform="rotate(180)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
				<path transform="rotate(240)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
				<path transform="rotate(300)" d="M -1 0 a 0.4 1 0 0 0 2 0" />
			</g>
		</g>
		<ellipse fill="#ebc699" rx="1.1" ry="1.05" />
	</g>
	<use x="10" href="#pieces-flower" />
	<use x="-10" href="#pieces-flower" />
</svg>`
};
