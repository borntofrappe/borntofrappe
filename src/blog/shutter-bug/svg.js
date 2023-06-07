export default {
	snapshot: `<svg style="display: block;" viewBox="-0.2 -0.2 60.4 75.4">
	<defs>
		<symbol id="snapshot-snail" viewBox="-37 -16.5 50.80065155029297 49">
			<g
				transform="scale(-1 1)"
				fill="currentColor"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke-width="3" d="M -11 -15 l 2 9" />
				<path stroke-width="3" d="M 2 -14 l -3 8" />
				<path
					stroke-width="5"
					d="M -10 0 c 2 -7 8 -7 10 0  c 2 10 5 20 15 20 c 5 0 15 -2 15 0 c 4 2 -10 10 -20 10 c -15 0 -25-10 -20 -30"
				/>
				<path
					stroke-width="4"
					d="M 7 4 a 14 14 0 0 1 28 0 9 9 0 0 1 -18 0  4 4 0 0 1 8 0 2.5 2.5 0 0 0 5 0 9 9 0 0 0 -18 0 2.5 2.5 0 0 1 -5 0"
				/>
			</g>
		</symbol>
		<pattern
			style="color: #cbcbcb"
			id="snapshot-pattern-snail"
			viewBox="-0.5 -0.5 1 1"
			patternUnits="userSpaceOnUse"
			width="20"
			height="20"
		>
			<use
				id="snapshot-snail-copy"
				transform="scale(0.4)"
				href="#snapshot-snail"
				x="-0.5"
				y="-0.5"
				width="1"
				height="1"
			/>
			<use href="#snapshot-snail-copy" x="-0.5" y="-0.5" />
			<use href="#snapshot-snail-copy" x="0.5" y="-0.5" />
			<use href="#snapshot-snail-copy" x="0.5" y="0.5" />
			<use href="#snapshot-snail-copy" x="-0.5" y="0.5" />
		</pattern>

		<rect id="snapshot-frame" width="50" height="50" rx="2" />
		<clipPath id="snapshot-frame-clip">
			<use href="#snapshot-frame" />
		</clipPath>
	</defs>
	<rect fill="#e3e3e3" width="60" height="70" rx="3" />
	<rect
		fill="url(#snapshot-pattern-snail)"
		stroke="#313131"
		stroke-width="0.4"
		width="60"
		height="70"
		rx="2"
	/>

	<g transform="translate(5 4)">
		<use href="#snapshot-frame" fill="#d8d8d8" />

		<g clip-path="url(#snapshot-frame-clip)">
			<svg viewBox="0 0 100 100" width="50" height="50">
				<defs>
					<g id="picture-patch">
						<path d="M 0 0 q 0 -2 0.75 -5.5" />
						<path d="M 4 1 q 1.25 -2.5 2.5 -4" />
						<path d="M -3.5 0.5 q -1.5 -2.5 -3 -4" />
					</g>

					<path
						id="picture-weed"
						d="M -3.5 0 c -5 -10 2 -12 2 -5 c -2 -12 5 -12 5 0.5 c -1 -7 7 -6 3 5"
					/>

					<g id="picture-tree">
						<g transform="translate(0 -30)">
							<rect x="-1.5" y="26" width="3" height="4" />
							<path
								transform="translate(0 8) scale(1.4)"
								d="M 0 0 q 2 7 7 10 c -4 4 -10 4 -14 0 q 5 -3 7 -10"
							/>
							<path
								transform="translate(0 4) scale(1.2)"
								d="M 0 0 q 2 7 7 10 c -4 4 -10 4 -14 0 q 5 -3 7 -10"
							/>
							<path d="M 0 0 q 2 7 7 10 c -4 4 -10 4 -14 0 q 5 -3 7 -10" />
						</g>
					</g>
					<g id="picture-trees">
						<g transform="translate(-4 0)">
							<use href="#picture-tree" />
							<use transform="translate(12 -1)" href="#picture-tree" />
							<use transform="translate(24 -1)" href="#picture-tree" />
							<use transform="translate(36 -1)" href="#picture-tree" />
							<use transform="translate(48 -1.25)" href="#picture-tree" />
							<use transform="translate(60 -1.25)" href="#picture-tree" />
							<use transform="translate(72 -1)" href="#picture-tree" />
							<use transform="translate(84 -1)" href="#picture-tree" />
							<use transform="translate(96 -1)" href="#picture-tree" />
							<use transform="translate(108 0)" href="#picture-tree" />
						</g>
					</g>
				</defs>
				<rect fill="#d4d4d4" width="100" height="100" />

				<g
					fill="#f6f6f6"
					stroke="#f6f6f6"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M 0 0 0 16 18 20 22 18 26 20 28 18 34 17 38 19 41 15 44 15 47 20 56 28 65 26 70 28 78 24 84 18 86 10 90 8 92 0 78 0 76 6 68 6 64 0 50 0 46 5 30 6 20 0 0 0"
					/>
					<path
						d="M 0 45 8 40 10 36 18 30 24 32 36 28 38 26 42 32 50 33 56 38 56 45 50 47 42 44 36 43 30 48 24 47 16 44 8 46 0 45"
					/>
				</g>

				<g transform="translate(0 65)">
					<g stroke-linecap="round" stroke-linejoin="round">
						<g
							transform="translate(50 0) scale(1.2) translate(-50 0)"
							fill="#b7b7b7"
							stroke="#b7b7b7"
							stroke-width="2"
						>
							<use href="#picture-trees" />
						</g>
						<g
							transform="translate(50 0) scale(0.9) translate(-50 0)"
							fill="#a2a2a2"
							stroke="#a2a2a2"
							stroke-width="2"
						>
							<use href="#picture-trees" />
						</g>
					</g>
				</g>

				<g transform="translate(72.5 40)">
					<path fill="#959595" d="M 0 0 h 5 v 4 l -6 8 h -5 v -4 l 6 -8" />
					<g fill="none" stroke="#313131" stroke-linecap="round" stroke-linejoin="round">
						<path d="M 0 0 l -0.5 -4" />
						<path d="M 5 0 l 1 -4" />
						<path d="M 0 0 h 5 v 4 h -5 v -4 l -6 8 0 4 6 -8 h 5 l -6 8 h -5" />
					</g>
					<g stroke-linecap="round" stroke-linejoin="round">
						<g fill="#f6f6f6" stroke="#313131">
							<path d="M -1 1.33 c -3 -5 -10 -4 -7 1 c -4 1 -5 7 2 5.67z" />
							<path d="M 5 2 c 3 -5 11 -2 3 3 c 4 3 -4 5.5 -6.75 4 l 3.75 -5z" />
						</g>
						<g fill="none" stroke="#cdcdcd">
							<ellipse transform="translate(-5 1) rotate(25)" rx="1.5" ry="1" />
							<ellipse transform="translate(-7.25 5.25) rotate(-30)" rx="1.5" ry="1" />
							<ellipse transform="translate(8 2.25) rotate(-35)" rx="1.25" ry="0.75" />
							<ellipse transform="translate(5.75 7) rotate(-20)" rx="1.5" ry="0.75" />
						</g>
					</g>
				</g>

				<path fill="#e6e6e6" d="M 0 65 c 20 -3 80 -3 100 0 v 35 h -100z" />

				<g transform="translate(25 67.5)">
					<g transform="scale(-1 1)">
						<g stroke="#313131" stroke-linecap="round" stroke-linejoin="round">
							<g fill="#777777">
								<path
									transform="translate(-2 -4) rotate(-10)"
									d="M 0 0 c 0.5 -4 3 -5.5 6 -6 c 2 -0.5 2.5 2.5 -1 2.5 c 0 1 0.5 2.5 -2.5 2.5 l -0.5 2"
								/>
								<path
									transform="translate(4.5 11)"
									d="M 0 0 c 1 1 1 4 -1 4 c 2 0 2 2 0 2 h -3 c -2 0 -2 -2 0 -2 c -1.5 -0 -2.5 -5 1.5 -4.5"
								/>

								<path transform="translate(-1 5.5)" d="M 0 0 c -3.5 2.5 -2 5.5 2 2" />

								<path
									transform="translate(7 6)"
									d="M 0 0 c 1 -4 2 -8 6 -8 c 3 0 5 2 5 5 c 0 4 -7 5 -7 0 c 0 3 2 2.5 1 3.5 q -2 2.5 -5 4"
								/>
							</g>

							<g fill="#959595">
								<path
									d="M -5.25 1 a 6 6 0 0 1 12 0 c 0 5 4 6 2 10 c 1 1 1 4 -1 4 c 2 0 2 2 0 2 h -3 c -2 0 -2 -2 0 -2 c -1.5 -0 -2.5 -5 1.5 -4.5 c -3 0 -3 2.25 -3 2.5 a 4 4 0 0 1 -4 -4 v -4 c -1 0 -4.5 -0 -4.5 -4"
								/>
								<path
									transform="translate(2.25 -2.75)"
									d="M 0 0 c 0.5 -4 3 -5.5 6 -6 c 2 -0.5 2.5 2.5 -1 2.5 c 0 1 0.5 2.5 -2.5 2.5 l -0.5 2"
								/>
							</g>

							<ellipse
								fill="#777777"
								stroke-width="0.75"
								transform="translate(-4 1.5) rotate(-20)"
								rx="1.25"
								ry="1"
							/>

							<g fill="none">
								<path transform="translate(-4.75 2.75)" d="M 0 0 c 0 1.5 3.5 2 3.5 0.5" />

								<path transform="translate(-2 4.5)" d="M 0 0 c 1 1 4 0 4.5 -2" />
							</g>
						</g>
						<ellipse transform="translate(2 9)" fill="#cdcdcd" rx="1.75" ry="2.5" />

						<path
							fill="#959595"
							stroke="#313131"
							stroke-linecap="round"
							stroke-linejoin="round"
							transform="translate(3 6)"
							d="M 0 0 c -3.5 2.5 -2 5.5 2 2"
						/>

						<ellipse fill="#313131" transform="rotate(5)" rx="1" ry="1.7" />
					</g>
				</g>

				<g transform="translate(0 65)">
					<g
						fill="#cdcdcd"
						stroke="#959595"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<use transform="translate(14 20)" href="#picture-weed" />
						<use transform="translate(32 18)" href="#picture-weed" />
						<use transform="translate(24 24) scale(1 1)" href="#picture-weed" />
					</g>

					<g fill="none" stroke="#cdcdcd" stroke-linecap="round">
						<g stroke-width="1.5">
							<use transform="translate(50 10)" href="#picture-patch" />
							<use transform="translate(67.5 22.5) scale(-1 1)" href="#picture-patch" />
							<use transform="translate(45 27.5) scale(-1 1)" href="#picture-patch" />
						</g>

						<g stroke-width="2">
							<use transform="translate(72.5 7.5) scale(0.8)" href="#picture-patch" />
							<use transform="translate(85 27.5) scale(-1 1) scale(0.8)" href="#picture-patch" />
							<use transform="translate(87.5 15) scale(-1 1) scale(0.8)" href="#picture-patch" />
						</g>
					</g>
				</g>
			</svg>
		</g>

		<use href="#snapshot-frame" fill="none" stroke="#3e3e3e" stroke-width="0.4" />
	</g>

	<g transform="translate(30 64)" text-anchor="middle">
		<text
			fill="#313131"
			font-size="7"
			style="text-transform: uppercase;"
			font-family="'Comic Sans MS', cursive"
			font-weight="700"
			letter-spacing="0.5"
			rotate="-2 2 -2 2 -2">Snap!</text
		>
	</g>
</svg>`,
	butterfly: `<svg style="display: block;" viewBox="-11.13358211517334 -4 22.587158203125 16">
	<path fill="#959595" d="M 0 0 h 5 v 4 l -6 8 h -5 v -4 l 6 -8" />
	<g fill="none" stroke="#313131" stroke-linecap="round" stroke-linejoin="round">
		<path d="M 0 0 l -0.5 -4" />
		<path d="M 5 0 l 1 -4" />
		<path d="M 0 0 h 5 v 4 h -5 v -4 l -6 8 0 4 6 -8 h 5 l -6 8 h -5" />
	</g>
	<g stroke-linecap="round" stroke-linejoin="round">
		<g fill="#f6f6f6" stroke="#313131">
			<path d="M -1 1.33 c -3 -5 -10 -4 -7 1 c -4 1 -5 7 2 5.67z" />
			<path d="M 5 2 c 3 -5 11 -2 3 3 c 4 3 -4 5.5 -6.75 4 l 3.75 -5z" />
		</g>
		<g fill="none" stroke="#cdcdcd">
			<ellipse transform="translate(-5 1) rotate(25)" rx="1.5" ry="1" />
			<ellipse transform="translate(-7.25 5.25) rotate(-30)" rx="1.5" ry="1" />
			<ellipse transform="translate(8 2.25) rotate(-35)" rx="1.25" ry="0.75" />
			<ellipse transform="translate(5.75 7) rotate(-20)" rx="1.5" ry="0.75" />
		</g>
	</g>
</svg>`,
	squirrel: `<svg
	style="display: block;"
	viewBox="-18.5 -11.778164863586426 24.51663589477539 29.27816390991211"
>
	<g transform="scale(-1 1)">
		<g stroke="#313131" stroke-linecap="round" stroke-linejoin="round">
			<g fill="#777777">
				<path
					transform="translate(-2 -4) rotate(-10)"
					d="M 0 0 c 0.5 -4 3 -5.5 6 -6 c 2 -0.5 2.5 2.5 -1 2.5 c 0 1 0.5 2.5 -2.5 2.5 l -0.5 2"
				/>
				<path
					transform="translate(4.5 11)"
					d="M 0 0 c 1 1 1 4 -1 4 c 2 0 2 2 0 2 h -3 c -2 0 -2 -2 0 -2 c -1.5 -0 -2.5 -5 1.5 -4.5"
				/>

				<path transform="translate(-1 5.5)" d="M 0 0 c -3.5 2.5 -2 5.5 2 2" />

				<path
					transform="translate(7 6)"
					d="M 0 0 c 1 -4 2 -8 6 -8 c 3 0 5 2 5 5 c 0 4 -7 5 -7 0 c 0 3 2 2.5 1 3.5 q -2 2.5 -5 4"
				/>
			</g>

			<g fill="#959595">
				<path
					d="M -5.25 1 a 6 6 0 0 1 12 0 c 0 5 4 6 2 10 c 1 1 1 4 -1 4 c 2 0 2 2 0 2 h -3 c -2 0 -2 -2 0 -2 c -1.5 -0 -2.5 -5 1.5 -4.5 c -3 0 -3 2.25 -3 2.5 a 4 4 0 0 1 -4 -4 v -4 c -1 0 -4.5 -0 -4.5 -4"
				/>
				<path
					transform="translate(2.25 -2.75)"
					d="M 0 0 c 0.5 -4 3 -5.5 6 -6 c 2 -0.5 2.5 2.5 -1 2.5 c 0 1 0.5 2.5 -2.5 2.5 l -0.5 2"
				/>
			</g>

			<ellipse
				fill="#777777"
				stroke-width="0.75"
				transform="translate(-4 1.5) rotate(-20)"
				rx="1.25"
				ry="1"
			/>

			<g fill="none">
				<path transform="translate(-4.75 2.75)" d="M 0 0 c 0 1.5 3.5 2 3.5 0.5" />

				<path transform="translate(-2 4.5)" d="M 0 0 c 1 1 4 0 4.5 -2" />
			</g>
		</g>
		<ellipse transform="translate(2 9)" fill="#cdcdcd" rx="1.75" ry="2.5" />

		<path
			fill="#959595"
			stroke="#313131"
			stroke-linecap="round"
			stroke-linejoin="round"
			transform="translate(3 6)"
			d="M 0 0 c -3.5 2.5 -2 5.5 2 2"
		/>

		<ellipse fill="#313131" transform="rotate(5)" rx="1" ry="1.7" />
	</g>
</svg>`,
	smile: `<svg viewBox="-0.525 -0.525 1.05 1.05" width="1.25em" height="1.25em">
	<circle fill="#f6f6f6" stroke="#313131" stroke-width="0.05" r="0.5" />
	<g fill="#313131">
		<circle r="0.07" cx="-0.15" cy="-0.16" />
		<circle r="0.07" cx="0.15" cy="-0.14" />
	</g>
	<path
		transform="translate(-0.025 0.15) rotate(8)"
		fill="none"
		stroke="#313131"
		stroke-width="0.08"
		stroke-linecap="round"
		d="M -0.12 0 a 0.18 0.2 0 0 0 0.24 0"
	/>
</svg>`
};
