<form>
	<fieldset>
		<legend>
			<span>What's for dinner?</span>
			<svg
				role="img"
				aria-hidden="true"
				width="4rem"
				height="4rem"
				style="display: block;"
				viewBox="-26.5 -44 53 85.5"
			>
				<path fill="hsl(36 60% 34%)" d="M -25 -30 A 25 12.5 0 0 1 25 -30 25 12.5 0 0 1 -25 -30" />
				<ellipse fill="hsl(49 60% 68%)" cx="0" cy="-30" rx="18" ry="8" />
				<path
					fill="hsl(36 60% 34%)"
					d="M -25 -30 A 25 12.5 0 0 0 25 -30 L 25 30 A 25 10 0 0 1 -25 30 Z"
				/>
				<path
					fill="hsl(49 60% 68%)"
					d="M -25 -20 A 25 10 0 0 0 25 -20 L 25 20 A 25 12.5 0 0 1 -25 20 Z"
				/>
				<path
					fill="none"
					stroke="hsl(34 69% 15%)"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -25 -30 A 25 12.5 0 0 1 25 -30 L 25 30 A 25 10 0 0 1 -25 30 Z M -25 -30 A 25 12.5 0 0 0 25 -30 M -25 -20 A 25 10 0 0 0 25 -20 M -25 20 A 25 12.5 0 0 0 25 20"
				/>
				<g transform="translate(0 10)">
					<g fill="hsl(34 69% 15%)">
						<ellipse cx="-5" rx="2" ry="2.2" />
						<ellipse cx="5" rx="2" ry="2.2" />
						<path
							transform="translate(0 6)"
							stroke="hsl(34 69% 15%)"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M -1.5 0 A 1.5 0.75 0 0 1 1.5 0 1.5 1.5 0 0 1 -1.5 0 Z"
						/>
					</g>
					<path
						fill="none"
						stroke="hsl(34 69% 15%)"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M 0 12 C -5 12 -12 11 -12 4 C -12 0 -10 -2 -10 -3 Q -11 -6 -10 -11 Q -6 -10 -3.5 -7 C -3 -7.5 3 -7.5 3.5 -7Q 6 -10 10 -11Q 11 -6 10 -3C 10 -2 12 0 12 4C 12 11 5 12 0 12"
						pathLength="1"
						stroke-dasharray="0.9 0.1"
						stroke-dashoffset="-0.05"
					/>
				</g>
			</svg>
		</legend>

		<label>
			<input name="food-choice" type="radio" />
			<span>Tuna</span>
		</label>
		<label>
			<input name="food-choice" type="radio" />
			<span>Chicken</span>
		</label>
		<label>
			<input name="food-choice" type="radio" />
			<span>Turkey</span>
		</label>
	</fieldset>

	<svg style="display: block;" viewBox="-55 -55 110 100">
		<defs>
			<path id="spunky-lobe" d="M 0 0 C -12 -4 -18 -24 -14 -32 C -4 -32 6 -16 0 0" />
			<g id="spunky-ear" transform="translate(-16 0)">
				<use
					fill="hsl(47 94% 57%)"
					stroke="hsl(47 94% 57%)"
					stroke-width="24"
					href="#spunky-lobe"
				/>
				<use fill="hsl(1 96% 91%)" stroke="hsl(1 96% 91%)" stroke-width="4" href="#spunky-lobe" />
			</g>
			<g id="spunky-whiskers" transform="translate(-30 8)" stroke-width="2">
				<path d="M 0 0 C -3 0 -12 0 -17 2" />
				<path transform="translate(1 6)" d="M 0 0 C -5 0 -11 2 -16 5" />
				<path transform="translate(0 -5)" d="M 0 0 C -5 -2 -9 -3 -17 -3" />
			</g>
			<g id="spunky-eye">
				<ellipse fill="hsl(34 69% 15%)" rx="5" ry="6" />
				<ellipse fill="hsl(36 60% 34%)" cx="-1.5" cy="-2" rx="2" ry="2.2" />
			</g>
		</defs>
		<g stroke-linecap="round" stroke-linejoin="round">
			<use href="#spunky-ear" />
			<use transform="scale(-1 1)" href="#spunky-ear" />
		</g>
		<ellipse fill="hsl(47 94% 57%)" rx="40" ry="35" />
		<g id="spunky-details">
			<g fill="none" stroke="hsl(35 44% 35%)" stroke-linecap="round">
				<use href="#spunky-whiskers" />
				<use transform="scale(-1 1)" href="#spunky-whiskers" />
			</g>
			<use transform="translate(-15 -7)" href="#spunky-eye" />
			<use transform="translate(15 -7)" href="#spunky-eye" />
			<g
				transform="translate(0 7)"
				stroke="hsl(34 69% 15%)"
				stroke-width="2.5"
				stroke-linecap="round"
			>
				<path fill="none" d="M 0 0 0 7 A 9 9 0 0 0 14 7 M 0 7 A 9 9 0 0 1 -14 7" />
				<path fill="hsl(34 69% 15%)" d="M -6 0 C -4.5 5 4.5 5 6 0 C 6 -3.5 -6 -3.5 -6 0" />
			</g>
		</g>
	</svg>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	form > svg {
		display: block;
		max-inline-size: 7rem;
	}

	fieldset {
		padding: 0;
		border: none;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	legend {
		display: flex;
		align-items: baseline;
	}

	legend > svg {
		inline-size: 2.5em;
		block-size: 2.5em;
	}

	label {
		padding: 0.75rem;
		font-weight: 700;
	}

	input[type='radio'] {
		font-size: inherit;
		inline-size: 1em;
		block-size: 1em;
		accent-color: hsl(34 69% 15%);
	}

	#spunky-details {
		transition-property: rotate, transform;
		transition-duration: 0.4s;
		transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}

	form:has(label:nth-of-type(1) input:checked) #spunky-details {
		rotate: -45deg;
		transform: translate(0px, -8px) rotate(45deg);
	}

	form:has(label:nth-of-type(2) input:checked) #spunky-details {
		rotate: 0deg;
		transform: translate(0px, -8px);
	}

	form:has(label:nth-of-type(3) input:checked) #spunky-details {
		rotate: 45deg;
		transform: translate(0px, -8px) rotate(-45deg);
	}
</style>
