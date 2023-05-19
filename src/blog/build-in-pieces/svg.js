export default {
	flower: `<svg style="display: block;" viewBox="-6 -5 12 12">
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
	flowers: `<svg style="display: block;" viewBox="-16 -5 32 12">
	<title>A comforting flower bed</title>
	<rect fill="#f8f8f8" x="-16" y="-5" width="32" height="13" />
	<g id="flowers-flower">
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
	<use x="10" href="#flowers-flower" />
	<use x="-10" href="#flowers-flower" />
</svg>`,
	placeholder: `<svg style="display: block;" viewBox="0 0 60 60">
	<title>A placeholder image</title>
	<rect fill="#f8f8f8" width="60" height="60" />
	<g transform="translate(10 10)">
		<rect
			fill="#ebedf0"
			stroke="#ebedf0"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			width="40"
			height="40"
		/>
		<g transform="translate(5 5)" fill="#707da0">
			<path
				stroke="#707da0"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M 0 20 l 10 -8 10 8 5 -4 5 4 0 10 h -30z"
			/>
			<circle cx="10" cy="4" r="4" />
		</g>
	</g>
	<g transform="translate(32 32)">
		<path
			transform="translate(11 11)"
			fill="none"
			stroke="#4e5c78"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M 0 0 l 15 15"
		/>
		<circle fill="#f8f8f8" stroke="#4e5c78" stroke-width="2" cx="11" cy="11" r="10.5" />
		<path
			transform="translate(11 11)"
			fill="none"
			stroke="#4e5c78"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M -3.5 -2.5 a 3.5 3.5 0 0 1 7 0 c 0 3 -3.5 2 -3.5 5 m 0 3.5 v 0"
		/>
	</g>
</svg>`,
	'clip-path': `<svg style="display: block;" viewBox="0 0 2 2">
	<title>A quarter of a placeholder image</title>
	<defs>
		<clipPath id="clip-path-clip">
			<rect width="1" height="1" />
		</clipPath>
		<symbol id="clip-path-placeholder" viewBox="0 0 60 60">
			<rect fill="#f8f8f8" width="60" height="60" />
			<g transform="translate(10 10)">
				<rect
					fill="#ebedf0"
					stroke="#ebedf0"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					width="40"
					height="40"
				/>
				<g transform="translate(5 5)" fill="#707da0">
					<path
						stroke="#707da0"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M 0 20 l 10 -8 10 8 5 -4 5 4 0 10 h -30z"
					/>
					<circle cx="10" cy="4" r="4" />
				</g>
			</g>
			<g transform="translate(32 32)">
				<path
					transform="translate(11 11)"
					fill="none"
					stroke="#4e5c78"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M 0 0 l 15 15"
				/>
				<circle fill="#f8f8f8" stroke="#4e5c78" stroke-width="2" cx="11" cy="11" r="10.5" />
				<path
					transform="translate(11 11)"
					fill="none"
					stroke="#4e5c78"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -3.5 -2.5 a 3.5 3.5 0 0 1 7 0 c 0 3 -3.5 2 -3.5 5 m 0 3.5 v 0"
				/>
			</g>
		</symbol>
	</defs>
	<use clip-path="url(#clip-path-clip)" href="#clip-path-placeholder" />
</svg>`,
	'puzzle-pieces': `<svg style="display: block;" viewBox="0 0 2 2">
	<title>Quarters of a placeholder image</title>
	<defs>
		<clipPath id="puzzle-pieces-clip-0-0">
			<rect x="0" y="0" width="1" height="1" />
		</clipPath>
		<clipPath id="puzzle-pieces-clip-1-0">
			<rect x="1" y="0" width="1" height="1" />
		</clipPath>
		<clipPath id="puzzle-pieces-clip-0-1">
			<rect x="0" y="1" width="1" height="1" />
		</clipPath>
		<clipPath id="puzzle-pieces-clip-1-1">
			<rect x="1" y="1" width="1" height="1" />
		</clipPath>
		<symbol id="puzzle-pieces-placeholder" viewBox="0 0 60 60">
			<rect fill="#f8f8f8" width="60" height="60" />
			<g transform="translate(10 10)">
				<rect
					fill="#ebedf0"
					stroke="#ebedf0"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					width="40"
					height="40"
				/>
				<g transform="translate(5 5)" fill="#707da0">
					<path
						stroke="#707da0"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M 0 20 l 10 -8 10 8 5 -4 5 4 0 10 h -30z"
					/>
					<circle cx="10" cy="4" r="4" />
				</g>
			</g>
			<g transform="translate(32 32)">
				<path
					transform="translate(11 11)"
					fill="none"
					stroke="#4e5c78"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M 0 0 l 15 15"
				/>
				<circle fill="#f8f8f8" stroke="#4e5c78" stroke-width="2" cx="11" cy="11" r="10.5" />
				<path
					transform="translate(11 11)"
					fill="none"
					stroke="#4e5c78"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -3.5 -2.5 a 3.5 3.5 0 0 1 7 0 c 0 3 -3.5 2 -3.5 5 m 0 3.5 v 0"
				/>
			</g>
		</symbol>
	</defs>
	<use clip-path="url(#puzzle-pieces-clip-0-0)" href="#puzzle-pieces-placeholder" />
	<use clip-path="url(#puzzle-pieces-clip-1-0)" href="#puzzle-pieces-placeholder" />
	<use clip-path="url(#puzzle-pieces-clip-0-1)" href="#puzzle-pieces-placeholder" />
	<use clip-path="url(#puzzle-pieces-clip-1-1)" href="#puzzle-pieces-placeholder" />
</svg>`,
	'puzzle-swap': `<svg style="display: block;" viewBox="0 0 2 2">
	<title>A puzzling placeholder image</title>
	<defs>
		<clipPath id="puzzle-swap-clip0-0">
			<rect x="0" y="0" width="1" height="1" />
		</clipPath>
		<clipPath id="puzzle-swap-clip1-0">
			<rect x="1" y="0" width="1" height="1" />
		</clipPath>
		<clipPath id="puzzle-swap-clip0-1">
			<rect x="0" y="1" width="1" height="1" />
		</clipPath>
		<clipPath id="puzzle-swap-clip1-1">
			<rect x="1" y="1" width="1" height="1" />
		</clipPath>
		<symbol id="puzzle-swap-placeholder" viewBox="0 0 60 60">
			<rect fill="#f8f8f8" width="60" height="60" />
			<g transform="translate(10 10)">
				<rect
					fill="#ebedf0"
					stroke="#ebedf0"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					width="40"
					height="40"
				/>
				<g transform="translate(5 5)" fill="#707da0">
					<path
						stroke="#707da0"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M 0 20 l 10 -8 10 8 5 -4 5 4 0 10 h -30z"
					/>
					<circle cx="10" cy="4" r="4" />
				</g>
			</g>
			<g transform="translate(32 32)">
				<path
					transform="translate(11 11)"
					fill="none"
					stroke="#4e5c78"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M 0 0 l 15 15"
				/>
				<circle fill="#f8f8f8" stroke="#4e5c78" stroke-width="2" cx="11" cy="11" r="10.5" />
				<path
					transform="translate(11 11)"
					fill="none"
					stroke="#4e5c78"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -3.5 -2.5 a 3.5 3.5 0 0 1 7 0 c 0 3 -3.5 2 -3.5 5 m 0 3.5 v 0"
				/>
			</g>
		</symbol>
	</defs>
	<use x="1" y="1" clip-path="url(#puzzle-swap-clip0-0)" href="#puzzle-swap-placeholder" />
	<use clip-path="url(#puzzle-swap-clip1-0)" href="#puzzle-swap-placeholder" />
	<use clip-path="url(#puzzle-swap-clip0-1)" href="#puzzle-swap-placeholder" />
	<use x="-1" y="-1" clip-path="url(#puzzle-swap-clip1-1)" href="#puzzle-swap-placeholder" />
</svg>`
};
