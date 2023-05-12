export default {
	'view-box': `<svg style="display: block; --accent: hsl(42 86% 86%);" viewBox="0 0 87.5 85">
	<pattern id="view-box-pattern-grid" viewBox="0 0 1 1" width="0.05" height="0.05">
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
				fill="url(#view-box-pattern-grid)"
				stroke="currentColor"
				stroke-width="0.75"
			/>
		</svg>
	</g>
</svg>`
};
