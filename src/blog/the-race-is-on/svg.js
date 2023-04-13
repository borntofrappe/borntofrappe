export default {
	defs: `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
	<defs>
		<symbol id="the-race-is-on-car" viewBox="0 0 100 70">
			<mask id="the-race-is-on-car-mask-cockpit">
				<rect width="100" height="70" fill="white" />
				<path d="M 66 0 v 15 a 20 20 0 0 0 0 40 v 15 h 34 v -70z" fill="black" />
			</mask>
			<mask id="the-race-is-on-car-mask-spoiler">
				<rect width="100" height="70" fill="white" />
				<rect x="4" width="5" height="70" fill="black" />
			</mask>

			<g stroke="var(--c0, #220b08)">
				<path stroke-width="5" d="M 24 0 v 70" />
				<path stroke-width="4" d="M 73 20 v 30" />
			</g>
			<g fill="var(--c0, #220b08)">
				<rect transform="translate(15 0)" rx="2" width="18" height="14" />
				<rect transform="translate(15 56)" rx="2" width="18" height="14" />
				<rect transform="translate(65 10)" rx="1.5" width="16" height="10" />
				<rect transform="translate(65 50)" rx="1.5" width="16" height="10" />
			</g>
			<g stroke-linecap="round" stroke-linejoin="round">
				<g stroke-width="2">
					<path
						fill="var(--c1, #273665)"
						stroke="var(--c1, #273665)"
						transform="translate(0 18)"
						d="M 1 1 l 50 -1 l 8 5 q 30 2 40 12 q -10 10 -40 12 l -8 5 l -50 -1z"
					/>
					<path
						fill="var(--c2, #4568a3)"
						stroke="var(--c2, #4568a3)"
						transform="translate(0 18)"
						d="M 1 1 l 50 2 l 8 2 q 30 2 40 12 q -10 10 -40 12 l -8 2 l -50 2z"
					/>

					<path
						fill="var(--c1, #273665)"
						stroke="var(--c1, #273665)"
						transform="translate(88 18)"
						d="M 1 1 l 10 2 0 28 -10 2z"
					/>
					<path
						fill="var(--c2, #4568a3)"
						stroke="var(--c2, #4568a3)"
						transform="translate(0 15)"
						d="M 1 1 l 14 1 0 36 -14 1z"
					/>
					<g mask="url(#the-race-is-on-car-mask-spoiler)">
						<path
							fill="var(--c1, #273665)"
							stroke="var(--c1, #273665)"
							transform="translate(0 15)"
							d="M 1 1 l 14 1 0 36 -14 1z"
						/>
					</g>
				</g>
				<g>
					<path
						fill="var(--c0, #220b08)"
						transform="translate(30 35)"
						d="M 0 0 c 0 -15 40 -10 40 0 0 10 -40 15 -40 0"
					/>
					<g mask="url(#the-race-is-on-car-mask-cockpit)">
						<path
							fill="var(--c1, #273665)"
							transform="translate(30 35)"
							d="M 0 0 c 0 -15 40 -10 40 0 0 10 -40 15 -40 0"
						/>
					</g>
				</g>
			</g>
			<circle fill="var(--c3, #d5d3ca)" cx="52.5" cy="35" r="5.25" />
		</symbol>
	</defs>
</svg>
`
};
