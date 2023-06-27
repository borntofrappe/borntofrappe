export default {
	'fine-print': `<svg
	style="display: block"
	viewBox="-14.752981185913086 -18.04878044128418 44.81395721435547 30.768024444580078"
>
	<defs>
		<symbol id="fine-print-book" viewBox="-0.5 -3.5 41 32">
			<g stroke="#4c5f78" stroke-linejoin="round" stroke-linecap="round">
				<rect fill="#86b4af" width="40" height="28" rx="2" />
				<path
					fill="#e4e6f1"
					d="M 3 -0.5 h 14.5 a 2.5 2.5 0 0 1 2.5 2.5 v 15 -15 a 2.5 2.5 0 0 1 2.5 -2.5 h 14.5 v 24 h -15 a 2 2 0 0 0 -2 2 2 2 0 0 0 -2 -2 h -15z"
				/>

				<g fill="none">
					<path d="M 7.5 16 h 8" />
					<path d="M 7.5 19 h 8" />

					<path d="M 24.5 5 h 8" />
					<path d="M 24.5 8 h 8" />
				</g>
			</g>
			<rect fill="#4c5f78" x="5" y="-3.5" width="3" height="3.5" rx="0.5" />
		</symbol>
		<circle id="fine-print-circle" r="6" />
		<clipPath id="fine-print-clip">
			<use href="#fine-print-circle" />
		</clipPath>
	</defs>
	<use href="#fine-print-book" x="-6" y="-22" width="36" height="36" />

	<g clip-path="url(#fine-print-clip)">
		<use transform="scale(1.2)" href="#fine-print-book" x="-6" y="-22" width="36" height="36" />
	</g>

	<g>
		<path
			transform="rotate(50)"
			fill="#f6c068"
			stroke="#15203d"
			stroke-width="1"
			d="M 0 6 v 3 a 1.5 1.5 0 0 0 -1.5 1.5 v 6 a 1.5 1.5 0 0 0 3 0 v -6 a 1.5 1.5 0 0 0 -1.5 -1.5"
		/>
		<use
			href="#fine-print-circle"
			fill="#f0f9f9"
			fill-opacity="0.2"
			stroke="#15203d"
			stroke-width="2"
			r="6"
		/>
	</g>
</svg>`,
	'text-baseline': `<svg style="font-family: sans-serif; font-size: 16px; display: block;" viewBox="-40 -40 210 70">
	<rect fill="hsl(0 0% 100%)" x="-40" y="-40" width="210" height="70" rx="5" />
	<text fill="hsl(210, 16%, 82%)">Scalable vector text :p</text>
	<g
		fill="hsl(209, 61%, 16%)"
		font-family="monospace"
		font-weight="700"
		text-anchor="end"
		transform="translate(-9 -8)"
	>
		<text font-size="12" y="3.7">16</text>
	</g>
	<g fill="none" stroke="hsl(209, 61%, 16%)">
		<path d="M -2 0 h -3 v -16 h 3" />
		<rect stroke-width="0.5" width="300" height="100" />
	</g>
	<svg>
		<text fill="hsl(0 0% 30%)">Scalable vector text :p</text>
	</svg>
</svg>`,
	text: `<svg
	style="font-family: sans-serif; font-size: 16px; outline: 1px solid; display: block;"
	viewBox="-1 -17 200 20"
>
	<text fill="currentColor">Scalable vector text :p</text>
</svg>`
};
