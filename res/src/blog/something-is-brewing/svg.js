export default {
	cauldron: `<svg style="display: block;" viewBox="-40 -15 80 70">
	<g>
		<g fill="#2e2e2c">
			<rect x="-20" width="40" height="8" rx="4" />
			<path d="M -16 4 a 22 22 0 1 0 32 0" />
		</g>
		<g fill="none" stroke="#2e2e2c" stroke-width="6" stroke-linecap="round">
			<path d="M -5 20 l -10 20" />
			<path d="M 5 20 l 10 20" />
		</g>
	</g>
</svg>`,
	flame: `<svg style="display: block;" viewBox="-20 -10 40 14">
	<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<path
			fill="#f04545"
			stroke="#f04545"
			d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
		/>
		<path
			transform="scale(0.5)"
			fill="#e8da38"
			stroke="#e8da38"
			d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
		/>
	</g>
</svg>`,
	flames: `<svg style="display: block;" viewBox="-20 -10 40 14">
	<defs>
		<g id="flames-flame">
			<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path
					fill="#f04545"
					stroke="#f04545"
					d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
				/>
				<path
					transform="scale(0.5)"
					fill="#e8da38"
					stroke="#e8da38"
					d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
				/>
			</g>
		</g>
	</defs>
	<use transform="translate(8 0) rotate(28) scale(0.8)" href="#flames-flame" />
	<use transform="translate(-8 0) rotate(-28) scale(0.8)" href="#flames-flame" />
	<use transform="translate(4 0) rotate(16) scale(0.9)" href="#flames-flame" />
	<use transform="translate(-4 0) rotate(-16) scale(0.9)" href="#flames-flame" />
	<use href="#flames-flame" />
</svg>`,
	goo: `<svg style="display: block;" viewBox="-40 -15 80 70">
	<defs>
		<g id="goo-flame">
			<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path
					fill="#f04545"
					stroke="#f04545"
					d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
				/>
				<path
					transform="scale(0.5)"
					fill="#e8da38"
					stroke="#e8da38"
					d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
				/>
			</g>
		</g>
	</defs>
	<g>
		<g fill="#2e2e2c">
			<rect x="-20" width="40" height="8" rx="4" />
			<path d="M -16 4 a 22 22 0 1 0 32 0" />
		</g>
		<g fill="none" stroke="#2e2e2c" stroke-width="6" stroke-linecap="round">
			<path d="M -5 20 l -10 20" />
			<path d="M 5 20 l 10 20" />
		</g>
		<g fill="none" stroke="#edb927" stroke-linecap="round">
			<path d="M -4 0 h 16" stroke-width="5" />
			<g stroke-width="4">
				<path d="M 0 0 v 7" />
				<path d="M 5 0 v 10" />
				<path d="M 10 0 v 6" />
			</g>
		</g>
	</g>

	<g transform="translate(0 42)">
		<use transform="translate(8 0) rotate(28) scale(0.8)" href="#goo-flame" />
		<use transform="translate(-8 0) rotate(-28) scale(0.8)" href="#goo-flame" />
		<use transform="translate(4 0) rotate(16) scale(0.9)" href="#goo-flame" />
		<use transform="translate(-4 0) rotate(-16) scale(0.9)" href="#goo-flame" />
		<use href="#goo-flame" />
	</g>
</svg>`,
	bubbles: `<svg style="display: block;" viewBox="-40 -25 80 70">
	<defs>
		<g id="bubbles-flame">
			<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path
					fill="#f04545"
					stroke="#f04545"
					d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
				/>
				<path
					transform="scale(0.6)"
					fill="#e8da38"
					stroke="#e8da38"
					d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
				/>
			</g>
		</g>
		<g id="bubbles-bubble">
			<circle r="4" fill="#f6c159" />
			<circle r="1.5" cx="1" cy="-1" fill="#f1daae" />
		</g>
	</defs>
	<use transform="translate(10 -16)" href="#bubbles-bubble" />
	<use transform="translate(-2 -10) scale(0.8)" href="#bubbles-bubble" />
	<use transform="translate(-12 -20) scale(0.6)" href="#bubbles-bubble" />

	<g>
		<g fill="#2e2e2c">
			<rect x="-20" width="40" height="8" rx="4" />
			<path d="M -16 4 a 22 22 0 1 0 32 0" />
		</g>
		<g fill="none" stroke="#2e2e2c" stroke-width="6" stroke-linecap="round">
			<path d="M -5 20 l -10 20" />
			<path d="M 5 20 l 10 20" />
		</g>
		<g fill="none" stroke="#edb927" stroke-linecap="round">
			<path d="M -4 0 h 16" stroke-width="5" />
			<g stroke-width="4">
				<path d="M 0 0 v 7" />
				<path d="M 5 0 v 10" />
				<path d="M 10 0 v 6" />
			</g>
		</g>
	</g>

	<g transform="translate(0 42)">
		<use transform="translate(8 0) rotate(28) scale(0.8)" href="#bubbles-flame" />
		<use transform="translate(-8 0) rotate(-28) scale(0.8)" href="#bubbles-flame" />
		<use transform="translate(4 0) rotate(16) scale(0.9)" href="#bubbles-flame" />
		<use transform="translate(-4 0) rotate(-16) scale(0.9)" href="#bubbles-flame" />
		<use href="#bubbles-flame" />
	</g>
</svg>`,
	scene: `<svg style="display: block;" viewBox="-40 -25 80 70">
	<defs>
		<g id="scene-flame">
			<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path
					fill="#f04545"
					stroke="#f04545"
					d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
				/>
				<path
					transform="scale(0.5)"
					fill="#e8da38"
					stroke="#e8da38"
					d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
				/>
			</g>
		</g>
		<g id="scene-bubble">
			<circle r="4" fill="#f6c159" />
			<circle r="1.5" cx="1" cy="-1" fill="#f1daae" />
		</g>
	</defs>
	<use transform="translate(10 -16)" href="#scene-bubble" />
	<use transform="translate(-2 -10) scale(0.8)" href="#scene-bubble" />
	<use transform="translate(-12 -20) scale(0.6)" href="#scene-bubble" />

	<g transform="translate(0 22)">
		<g transform="rotate(-30)">
			<path d="M 0 0 v -30" fill="none" stroke="#e18434" stroke-width="5" stroke-linecap="round" />
		</g>
	</g>

	<g>
		<g fill="#2e2e2c">
			<rect x="-20" width="40" height="8" rx="4" />
			<path d="M -16 4 a 22 22 0 1 0 32 0" />
		</g>
		<g fill="none" stroke="#2e2e2c" stroke-width="6" stroke-linecap="round">
			<path d="M -5 20 l -10 20" />
			<path d="M 5 20 l 10 20" />
		</g>
		<g fill="none" stroke="#edb927" stroke-linecap="round">
			<path d="M -4 0 h 16" stroke-width="5" />
			<g stroke-width="4">
				<path d="M 0 0 v 7" />
				<path d="M 5 0 v 10" />
				<path d="M 10 0 v 6" />
			</g>
		</g>
	</g>

	<g transform="translate(0 42)">
		<use transform="translate(8 0) rotate(28) scale(0.8)" href="#scene-flame" />
		<use transform="translate(-8 0) rotate(-28) scale(0.8)" href="#scene-flame" />
		<use transform="translate(4 0) rotate(16) scale(0.9)" href="#scene-flame" />
		<use transform="translate(-4 0) rotate(-16) scale(0.9)" href="#scene-flame" />
		<use href="#scene-flame" />
	</g>
</svg>`
};
