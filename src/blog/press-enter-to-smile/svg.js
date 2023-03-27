export default {
	keycap: `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0">
	<defs>
		<g id="keycap">
			<path
				fill="hsl(0, 0%, 69%)"
				stroke="hsl(0, 0%, 69%)"
				d="M 0 1.5 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 a 2 2 0 0 0 -2 -2z"
			/>
			<path
				fill="hsl(0, 0%, 75%)"
				stroke="hsl(0, 0%, 75%)"
				d="M 0 0 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 a 2 2 0 0 0 -2 -2z"
			/>
		</g>
	</defs>
</svg>`,
	keyboard: `<svg style="display: block" viewBox="0 0 55 35.5">
	<g transform="translate(4.5 0.5)">
		<g transform="translate(3 3)">
			<g fill="currentColor" stroke="currentColor" stroke-linejoin="round">
				<g stroke-width="6">
					<path
						fill="hsl(0, 0%, 81%)"
						stroke="hsl(0, 0%, 81%)"
						d="M 1.5 1.5 h -2 -2 a 2 2 0 0 0 -2 2 v 23.5 a 2 2 0 0 0 2 2 h 45 a 2 2 0 0 0 2 -2 v -23.5 a 2 2 0 0 0 -2 -2z"
					/>
					<path
						fill="hsl(0, 0%, 88%)"
						stroke="hsl(0, 0%, 88%)"
						d="M 1.5 -0.5 h -2 -2 a 2 2 0 0 0 -2 2 v 23.5 a 2 2 0 0 0 2 2 h 45 a 2 2 0 0 0 2 -2 v -23.5 a 2 2 0 0 0 -2 -2z"
					/>
				</g>
				<g transform="translate(30 0)">
					<path
						fill="hsl(42, 63%, 48%)"
						stroke="hsl(42, 63%, 48%)"
						d="M 0 1.5 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 2 a 2 2 0 0 1 2 2 v 1.5 2 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 -2 -1.5 -2 -2 -2 a 2 2 0 0 0 -2 -2z"
					/>
					<path
						fill="hsl(42, 78%, 60%)"
						stroke="hsl(42, 78%, 60%)"
						d="M 0 0 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 2 a 2 2 0 0 1 2 2 v 1.5 2 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 -2 -1.5 -2 -2 -2 a 2 2 0 0 0 -2 -2z"
					/>
				</g>
				<use href="#keycap" />
				<use href="#keycap" x="10" />
				<use href="#keycap" x="20" />
				<g transform="translate(0 9.5)">
					<use href="#keycap" />
					<use href="#keycap" x="10" />
					<use href="#keycap" x="20" />
					<use href="#keycap" x="30" />
				</g>
				<g transform="translate(0 19)">
					<use href="#keycap" />
					<use href="#keycap" x="10" />
					<use href="#keycap" x="20" />
					<use href="#keycap" x="30" />
					<use href="#keycap" x="40" />
				</g>
			</g>
		</g>
	</g>
</svg>`,
	click: `<svg style="display: block" viewBox="0 0 55 35.5">
	<g transform="translate(4.5 0.5)">
		<g transform="translate(3 3)">
			<g fill="currentColor" stroke="currentColor" stroke-linejoin="round">
				<g stroke-width="6">
					<path
						fill="hsl(0, 0%, 81%)"
						stroke="hsl(0, 0%, 81%)"
						d="M 1.5 1.5 h -2 -2 a 2 2 0 0 0 -2 2 v 23.5 a 2 2 0 0 0 2 2 h 45 a 2 2 0 0 0 2 -2 v -23.5 a 2 2 0 0 0 -2 -2z"
					/>
					<path
						fill="hsl(0, 0%, 88%)"
						stroke="hsl(0, 0%, 88%)"
						d="M 1.5 -0.5 h -2 -2 a 2 2 0 0 0 -2 2 v 23.5 a 2 2 0 0 0 2 2 h 45 a 2 2 0 0 0 2 -2 v -23.5 a 2 2 0 0 0 -2 -2z"
					/>
				</g>
				<g transform="translate(30 0)">
					<path
						fill="hsl(42, 63%, 48%)"
						stroke="hsl(42, 63%, 48%)"
						d="M 0 1.5 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 2 a 2 2 0 0 1 2 2 v 1.5 2 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 -2 -1.5 -2 -2 -2 a 2 2 0 0 0 -2 -2z"
					/>
					<path
						style="cursor: pointer"
						fill="hsl(42, 78%, 60%)"
						stroke="hsl(42, 78%, 60%)"
						d="M 0 0 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 2 a 2 2 0 0 1 2 2 v 1.5 2 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 -2 -1.5 -2 -2 -2 a 2 2 0 0 0 -2 -2z"
					>
						<animateTransform
							begin="click"
							attributeName="transform"
							type="translate"
							values="0 0; 0 1; 0 0"
							dur="0.35s"
						/>
					</path>
				</g>
				<use href="#keycap" />
				<use href="#keycap" x="10" />
				<use href="#keycap" x="20" />
				<g transform="translate(0 9.5)">
					<use href="#keycap" />
					<use href="#keycap" x="10" />
					<use href="#keycap" x="20" />
					<use href="#keycap" x="30" />
				</g>
				<g transform="translate(0 19)">
					<use href="#keycap" />
					<use href="#keycap" x="10" />
					<use href="#keycap" x="20" />
					<use href="#keycap" x="30" />
					<use href="#keycap" x="40" />
				</g>
			</g>
		</g>
	</g>
</svg>`,
	keydown: `<svg style="display: block" viewBox="0 0 55 35.5">
	<g transform="translate(4.5 0.5)">
		<g transform="translate(3 3)">
			<g fill="currentColor" stroke="currentColor" stroke-linejoin="round">
				<g stroke-width="6">
					<path
						fill="hsl(0, 0%, 81%)"
						stroke="hsl(0, 0%, 81%)"
						d="M 1.5 1.5 h -2 -2 a 2 2 0 0 0 -2 2 v 23.5 a 2 2 0 0 0 2 2 h 45 a 2 2 0 0 0 2 -2 v -23.5 a 2 2 0 0 0 -2 -2z"
					/>
					<path
						fill="hsl(0, 0%, 88%)"
						stroke="hsl(0, 0%, 88%)"
						d="M 1.5 -0.5 h -2 -2 a 2 2 0 0 0 -2 2 v 23.5 a 2 2 0 0 0 2 2 h 45 a 2 2 0 0 0 2 -2 v -23.5 a 2 2 0 0 0 -2 -2z"
					/>
				</g>
				<g transform="translate(30 0)">
					<path
						fill="hsl(42, 63%, 48%)"
						stroke="hsl(42, 63%, 48%)"
						d="M 0 1.5 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 2 a 2 2 0 0 1 2 2 v 1.5 2 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 -2 -1.5 -2 -2 -2 a 2 2 0 0 0 -2 -2z"
					/>
					<path
						role="button"
						aria-label="Press a key to animate"
						tabindex="0"
						style="cursor: pointer"
						fill="hsl(42, 78%, 60%)"
						stroke="hsl(42, 78%, 60%)"
						d="M 0 0 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 2 a 2 2 0 0 1 2 2 v 1.5 2 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 -2 -1.5 -2 -2 -2 a 2 2 0 0 0 -2 -2z"
					>
						<animateTransform
							begin="click; keydown"
							attributeName="transform"
							type="translate"
							values="0 0; 0 1; 0 0"
							dur="0.35s"
						/>
					</path>
				</g>
				<use href="#keycap" />
				<use href="#keycap" x="10" />
				<use href="#keycap" x="20" />
				<g transform="translate(0 9.5)">
					<use href="#keycap" />
					<use href="#keycap" x="10" />
					<use href="#keycap" x="20" />
					<use href="#keycap" x="30" />
				</g>
				<g transform="translate(0 19)">
					<use href="#keycap" />
					<use href="#keycap" x="10" />
					<use href="#keycap" x="20" />
					<use href="#keycap" x="30" />
					<use href="#keycap" x="40" />
				</g>
			</g>
		</g>
	</g>
</svg>`
};
