export default {
	'control-points': `<svg style="display: block;" viewBox="-0.25 -0.25 1.5 1.5">
	<title>Two control points for a bezier curve</title>
	<rect fill="hsl(0 0% 99%)" x="-0.25" y="-0.25" width="1.5" height="1.5" rx="0.1" />
	<g transform="translate(0 1) scale(1 -1)">
		<g fill="none">
			<g stroke="hsl(0 0% 70%)" stroke-width="0.01">
				<path d="M 0 0 0.78 0.31" />
				<path d="M 1 1 0.22 0.74" />
			</g>
			<path stroke="hsl(0 0% 10%)" stroke-width="0.02" d="M 0 0 C 0.78 0.31 0.22 0.74 1 1" />
		</g>
		<g fill="hsl(0 0% 99%)" stroke="hsl(0 0% 10%)">
			<g stroke-width="0.005">
				<circle transform="translate(0 0)" r="0.035" />
				<circle transform="translate(1 1)" r="0.035" />
			</g>
			<g stroke-width="0.004">
				<circle transform="translate(0.78 0.31)" r="0.025" />
				<circle transform="translate(0.22 0.74)" r="0.025" />
			</g>
		</g>
	</g>
	<g font-family="monospace" font-size="0.075" text-anchor="middle" letter-spacing="-0.002">
		<text x="0.78" y="0.63"
			>(<tspan font-weight="700">0.78</tspan>, <tspan font-weight="700">0.31</tspan>)</text
		>
		<text x="0.22" y="0.36"
			>(<tspan font-weight="700">0.22</tspan>, <tspan font-weight="700">0.74</tspan>)</text
		>
	</g>
</svg>`
};
