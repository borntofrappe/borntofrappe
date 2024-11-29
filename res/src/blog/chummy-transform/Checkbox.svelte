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
			<g fill="hsl(16 94% 27%)" stroke="hsl(16 94% 27%)" stroke-width="4">
				<path
					id="smile-eye"
					transform="translate(-20 -10) rotate(-5)"
					d="M -12 0 A 34 34 0 0 1 12 0 A 20 20 0 0 0 0 -12 A 30 30 0 0 1 12 0 A 20 20 0 0 0 -12 0"
				/>
				<use transform="scale(-1 1)" href="#smile-eye" />
				<path transform="translate(0 10)" d="M -25 0 A 25 25 0 0 0 25 0 A 75 75 0 0 1 -25 0" />
			</g>
			<path
				fill="hsl(210 33% 95%)"
				stroke="hsl(210 33% 95%)"
				stroke-width="3"
				transform="translate(0 14)"
				d="M -16 0 A 35 35 0 0 0 16 0 A 60 60 0 0 1 -16 0"
			/>
			<g transform="translate(0 25)">
				<path
					class="scale"
					transform="scale(0)"
					fill="hsl(0 93% 65%)"
					stroke="hsl(0 93% 65%)"
					stroke-width="4"
					d="M -9 12 A 9 9 0 0 0 9 12 C 9 9 9 7 7 5 A 11 11 0 0 0 -7 5 C -9 7 -9 9 -9 12 Z"
				/>
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

	input ~ svg .scale {
		transform: scale(0);
		transition: transform 0.25s;
		transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
	}

	input:checked ~ svg .scale {
		transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
		transform: scale(1);
	}
</style>
