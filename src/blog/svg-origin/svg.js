export default {
	viewBox: `<svg style="display: block;" viewBox="0 0 100 100">
	<rect x="0.375" y="0.375" width="99.25" height="99.25" fill="none" stroke="currentColor" stroke-width="0.75" />
	<g>
		<circle r="4" fill="none" stroke="currentColor" stroke-dasharray="1.5 2" />
		<path
			d="M 0 0 l 9.5 5.5"
			fill="none"
			stroke="currentColor"
			stroke-width="0.75"
			stroke-linecap="round"
			stroke-dasharray="1 2"
		/>
		<g transform="translate(11 10)">
			<text
				font-family="monospace"
				fill="currentColor"
				font-size="6"
				style="text-transform: uppercase">You are here</text
			>
		</g>
	</g>
</svg>`,
	translate: `<svg style="display: block;" viewBox="0 0 100 100">
	<rect x="0.375" y="0.375" width="99.25" height="99.25" fill="none" stroke="currentColor" stroke-width="0.75" />
	<g transform="translate(50 80)">
		<g>
			<circle r="4" fill="none" stroke="currentColor" stroke-dasharray="1.5 2" />
			<path
				d="M 0 0 l 7 -13.5"
				fill="none"
				stroke="currentColor"
				stroke-width="0.75"
				stroke-linecap="round"
				stroke-dasharray="1 2"
			/>
			<g transform="translate(8 -15)">
				<text
					font-family="monospace"
					fill="currentColor"
					font-size="6"
					style="text-transform: uppercase">You are here</text
				>
			</g>
		</g>
	</g>
</svg>`,
	rotate: `<svg style="display: block;" viewBox="0 0 100 100">
	<rect x="0.375" y="0.375" width="99.25" height="99.25" fill="none" stroke="currentColor" stroke-width="0.75" />
	<g transform="translate(50 80)">
		<g transform="rotate(40)">
			<g>
				<circle r="4" fill="none" stroke="currentColor" stroke-dasharray="1.5 2" />
				<path
					d="M 0 0 l 6.5 -14"
					fill="none"
					stroke="currentColor"
					stroke-width="0.75"
					stroke-linecap="round"
					stroke-dasharray="1 2"
				/>
				<g transform="translate(7 -16)">
					<text
						font-family="monospace"
						fill="currentColor"
						font-size="6"
						style="text-transform: uppercase">You are here</text
					>
				</g>
			</g>
			<path d="M 0 0 v -30" fill="none" stroke="currentColor" />
		</g>
	</g>
</svg>`,
	circle: `<svg style="display: block;" viewBox="0 0 100 100">
	<rect x="0.375" y="0.375" width="99.25" height="99.25" fill="none" stroke="currentColor" stroke-width="0.75" />
	<g transform="translate(50 80)">
		<g transform="rotate(40)">
			<g>
				<circle r="4" fill="none" stroke="currentColor" stroke-dasharray="1.5 2" />
				<path
					d="M 0 0 l 6.5 -14"
					fill="none"
					stroke="currentColor"
					stroke-width="0.75"
					stroke-linecap="round"
					stroke-dasharray="1 2"
				/>
				<g transform="translate(7 -16)">
					<text
						font-family="monospace"
						fill="currentColor"
						font-size="6"
						style="text-transform: uppercase">You are here</text
					>
				</g>
			</g>
			<path d="M 0 0 v -30" fill="none" stroke="currentColor" />
			<circle r="2" cy="-30" fill="currentColor" />
		</g>
	</g>
</svg>`,
	'rotate-further': `<svg style="display: block;" viewBox="0 0 100 100">
	<rect x="0.375" y="0.375" width="99.25" height="99.25" fill="none" stroke="currentColor" stroke-width="0.75" />
	<g transform="translate(50 80)">
		<g transform="rotate(40)">
			<path d="M 0 0 v -30" fill="none" stroke="currentColor" />
			<circle r="2" cy="-30" fill="currentColor" />
			<g transform="translate(0 -30)">
				<g transform="rotate(20)">
					<g>
						<circle r="4" fill="none" stroke="currentColor" stroke-dasharray="1.5 2" />
						<path
							d="M 0 0 l -15 -2"
							fill="none"
							stroke="currentColor"
							stroke-width="0.75"
							stroke-linecap="round"
							stroke-dasharray="1 2"
						/>
						<g transform="translate(-18 0)">
							<text
								font-family="monospace"
								text-anchor="end"
								fill="currentColor"
								font-size="6"
								style="text-transform: uppercase">You are here</text
							>
						</g>
					</g>
					<path d="M 0 0 v -30" fill="none" stroke="currentColor" />
				</g>
			</g>
		</g>
	</g>
</svg>`,
	'rotate-opposite': `<svg style="display: block;" viewBox="0 0 100 100">
	<rect x="0.375" y="0.375" width="99.25" height="99.25" fill="none" stroke="currentColor" stroke-width="0.75" />
	<g transform="translate(50 80)">
		<g transform="rotate(40)">
			<path d="M 0 0 v -30" fill="none" stroke="currentColor" />
			<circle r="2" cy="-30" fill="currentColor" />
			<g transform="translate(0 -30)">
				<g transform="rotate(-80)">
					<g>
						<circle r="4" fill="none" stroke="currentColor" stroke-dasharray="1.5 2" />
						<path
							d="M 0 0 l -15 -11"
							fill="none"
							stroke="currentColor"
							stroke-width="0.75"
							stroke-linecap="round"
							stroke-dasharray="1 2"
						/>
						<g transform="translate(-18 -10)">
							<text
								font-family="monospace"
								text-anchor="end"
								fill="currentColor"
								font-size="6"
								style="text-transform: uppercase">You are here</text
							>
						</g>
						<path d="M 0 0 v -30" fill="none" stroke="currentColor" />
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>`
};
