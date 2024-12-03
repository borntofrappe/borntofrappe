export default {
	microscope: `<svg role="img" style="display: block" viewBox="-58.99136734008789 -110.89614868164062 112.49136734008789 125.89614868164062">
	<title>A grayscale, inquisitive microscope</title>
	<rect
		fill="hsl(0 0% 18%)"
		x="-58.99136734008789"
		y="-110.89614868164062"
		width="112.49136734008789"
		height="125.89614868164062"
		rx="8"
	/>

	<g transform="translate(-8 -21)">
		<g fill="hsl(0 0% 90%)">
			<path d="M 0 4 h -1 a 25 25 0 0 1 0 -50 h 5 v 8 h -5 a 17 17 0 0 0 0 34 h 1" />
		</g>

		<g transform="translate(4 -42)">
			<g transform="rotate(-30)">
				<animateTransform
					begin="3s"
					attributeName="transform"
					type="rotate"
					values="-30; 2; 0"
					dur="2s"
					fill="freeze"
					calcMode="spline"
					keyTimes="0; 0.8; 1"
					keySplines="0.4 0 0.6 1; 0.6 0 0.4 1"
				/>
				<g>
					<path
						fill="hsl(0 0% 90%)"
						stroke="hsl(0 0% 90%)"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M 0 0 l 10 -20 h 10 v 30 h -10 v -10z"
					/>
					<g fill="hsl(0 0% 42%)">
						<path d="M 15 -21 h 4 a 2 2 0 0 0 2 -2 h -12 a 2 2 0 0 0 2 2" />
						<path d="M 15 -23 h 6 a 2 2 0 0 0 2 -2 v -2 h -16 v 2 a 2 2 0 0 0 2 2" />
					</g>
					<g fill="hsl(0 0% 42%)">
						<path d="M 15 11 h 4 v 1 a 2 2 0 0 1 -2 2 h -4 a 2 2 0 0 1 -2 -2 v -1z" />
						<path d="M 15 14 h 2 v 4 a 1 1 0 0 1 -1 1 h -2 a 1 1 0 0 1 -1 -1 v -4z" />
					</g>
				</g>

				<circle fill="hsl(0 0% 90%)" r="7" />
				<circle fill="hsl(0 0% 42%)" r="4" />
			</g>
		</g>

		<g fill="hsl(0 0% 42%)">
			<rect y="-2" width="28" height="4" />
			<rect x="18" y="-12" width="2" height="10" />
		</g>

		<g transform="translate(19 -12)">
			<g fill="hsl(0 0% 42%)">
				<path d="M 0 0 h 5 a 2 2 0 0 0 2 -2 h -14 a 2 2 0 0 0 2 2z" />
				<path d="M 0 -2 h 7 a 2 2 0 0 0 2 -2 v -2 h -18 v 2 a 2 2 0 0 0 2 2z" />
			</g>
			<rect fill="hsl(42 87% 55%)" x="-12" y="-7" width="24" height="1" />
		</g>
	</g>

	<g fill="hsl(0 0% 90%)">
		<path
			stroke="hsl(0 0% 90%)"
			stroke-width="4"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M -10 -2 v -25 l 20 25z"
		/>
		<path d="M -17.5 -5 v -1 a 5 5 0 0 1 5 -5 h 30 a 5 5 0 0 1 5 5 v 1z" />
		<path d="M -22.5 0 v -1 a 5 5 0 0 1 5 -5 h 40 a 5 5 0 0 1 5 5 v 1z" />
	</g>

	<g transform="translate(-8 -21)">
		<circle fill="hsl(0 0% 42%)" r="2.5" />
	</g>
</svg>`,
	'view-boxes': `<svg style="display: block; --accent: hsl(42 86% 86%);" viewBox="0 0 222.5 192.5">
	<pattern id="view-boxes-pattern-grid" viewBox="0 0 1 1" width="0.05" height="0.05">
		<g fill="none" stroke="currentColor" stroke-width="0.0025">
			<rect width="1" height="1" />
		</g>
	</pattern>
	<g transform="translate(10 10)">
		<g fill="none" stroke="currentColor" stroke-width="0.2">
			<path transform="translate(62 0)" d="M 0 0 h 2 v 60 h -2" />
			<path transform="translate(60 62) rotate(90)" d="M 0 0 h 2 v 60 h -2" />
		</g>
		<g font-family="monospace" fill="currentColor" font-size="5" letter-spacing="-0.1">
			<text text-anchor="middle" y="-3">
				(<tspan font-weight="700">0</tspan>, <tspan font-weight="700">0</tspan>)
			</text>
			<text text-anchor="middle" x="30" y="70" font-weight="700">100</text>
			<text x="66" y="31" font-weight="700">100</text>
		</g>
		<svg viewBox="0 0 100 100" width="60" height="60">
			<rect x="0.375" y="0.375" width="99.25" height="99.25" fill="var(--accent, none)" />
			<rect
				x="0.375"
				y="0.375"
				width="99.25"
				height="99.25"
				fill="url(#view-boxes-pattern-grid)"
				stroke="currentColor"
				stroke-width="0.75"
			/>
		</svg>
	</g>

	<g transform="translate(85 55)">
		<svg viewBox="0 0 100 100" width="120" height="120">
			<rect
				x="0.375"
				y="0.375"
				width="99.25"
				height="99.25"
				fill="url(#view-boxes-pattern-grid)"
				stroke="currentColor"
				stroke-width="0.75"
				stroke-dasharray="2 3"
			/>
		</svg>
		<g transform="translate(60 60)">
			<g fill="none" stroke="currentColor" stroke-width="0.4">
				<path transform="translate(62 0)" d="M 0 0 h 2 v 60 h -2" />
				<path transform="translate(60 62) rotate(90)" d="M 0 0 h 2 v 60 h -2" />
			</g>
			<g font-family="monospace" fill="currentColor" font-size="5" letter-spacing="-0.1">
				<text text-anchor="middle" y="-3">
					(<tspan font-weight="700">50</tspan>, <tspan font-weight="700">50</tspan>)
				</text>
				<text text-anchor="middle" x="30" y="70" font-weight="700">50</text>
				<text x="66" y="31" font-weight="700">50</text>
			</g>
			<svg viewBox="50 50 100 100" width="120" height="120">
				<rect x="0.375" y="0.375" width="99.25" height="99.25" fill="var(--accent, none)" />
				<rect
					x="0.375"
					y="0.375"
					width="99.25"
					height="99.25"
					fill="url(#view-boxes-pattern-grid)"
					stroke="currentColor"
					stroke-width="0.75"
				/>
			</svg>
		</g>
	</g>
</svg>`
};
