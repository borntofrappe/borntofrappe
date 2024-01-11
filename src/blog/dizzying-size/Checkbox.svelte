<label aria-label="Pointless toggle">
	<input type="checkbox" />
	<svg width="1em" height="1em" viewBox="-50 -50 100 100">
		<circle fill="hsl(49 99% 57%)" r="50" />
		<path fill="hsl(42 100% 55%)" d="M 0 -50 A 50 50 0 0 0 0 50 A 55 55 0 0 1 0 -50" />
		<g stroke-linecap="round" stroke-linejoin="round">
			<g fill="hsl(33 97% 47%)" stroke="hsl(33 97% 47%)" stroke-width="3">
				<path
					id="smile-eyebrow"
					transform="translate(-23 -32) rotate(155)"
					d="M -10 0 A 18 18 0 0 0 10 0 A 40 40 0 0 1 -10 0"
				/>
				<use transform="scale(-1 1)" href="#smile-eyebrow" />
			</g>
			<g stroke="hsl(16 94% 27%)" stroke-width="5">
				<g fill="none">
					<path
						id="smile-eye"
						transform="translate(-19 -8)"
						d="M -12 0 A 12 12 0 0 1 12 0 A 8 8 0 0 1 -4 0 A 4 4 0 0 1 4 0"
					/>
					<use transform="scale(-1 1)" href="#smile-eye" />
					<path
						fill="hsl(16 94% 27%)"
						transform="translate(0 20)"
						d="M -27 -4 -18 6 -9 0 0 6 9 0 18 6 27 -4 18 3 9 -3 0 3 -9 -3 -18 3 Z"
					/>
				</g>
			</g>
		</g>
	</svg>
</label>

<style>
	label {
		font-size: 2rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
		accent-color: hsl(0 93% 65%);
	}

	label > svg {
		inline-size: 2em;
		block-size: 2em;
	}

	input ~ svg {
		transition-property: scale, transform;
		transition-duration: 0.5s;
		transition-timing-function: linear;
	}

	input:checked ~ svg {
		scale: 2;
		transform: scale(0.5);
	}
</style>
