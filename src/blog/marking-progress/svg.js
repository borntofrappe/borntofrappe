export default {
	'marker-issue': `<svg style="display: block;" viewBox="0 0 12 7.5">
	<defs>
		<marker id="marker-issue-marker-mid" viewBox="0 0 2 2">
			<circle fill="hsl(0, 0%, 28%)" cx="1" cy="1" r="1" />
		</marker>
	</defs>
	<rect fill="hsl(0, 0%, 99%)" width="12" height="7.5" rx="0.4" />
	<g transform="translate(1 1.25)">
		<g fill="none" stroke="hsl(0, 0%, 28%)">
			<line stroke-width="0.075" x1="0" y1="5" x2="10" y2="5" />
			<polyline
				marker-mid="url(#marker-issue-marker-mid)"
				stroke-width="0.1"
				points="0 4 1 3 2 3 3 1 4 4 5 3 6 3 7 2 8 0 9 1 10 1"
			/>
		</g>
	</g>
</svg>`,
	marker: `<svg style="display: block;" viewBox="0 0 12 7.5">
	<defs>
		<marker id="marker-marker-mid" viewBox="0 0 2 2" refX="1" refY="1">
			<circle fill="hsl(0, 0%, 28%)" cx="1" cy="1" r="1" />
		</marker>
	</defs>
	<rect fill="hsl(0, 0%, 99%)" width="12" height="7.5" rx="0.4" />
	<g transform="translate(1 1.25)">
		<g fill="none" stroke="hsl(0, 0%, 28%)">
			<line stroke-width="0.075" x1="0" y1="5" x2="10" y2="5" />
			<polyline
				marker-mid="url(#marker-marker-mid)"
				stroke-width="0.1"
				points="0 4 1 3 2 3 3 1 4 4 5 3 6 3 7 2 8 0 9 1 10 1"
			/>
		</g>
	</g>
</svg>`,
	markers: `<svg style="display: block;" viewBox="0 0 12 7.5">
	<defs>
		<pattern id="markers-pattern-flag" x="0.125" viewBox="0 0 2 2" width="0.5" height="0.5">
			<rect fill="hsl(0, 0%, 72%)" width="2" height="2" />
			<g fill="hsl(0, 0%, 42%)">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<marker id="markers-marker-mid" viewBox="0 0 2 2" refX="1" refY="1">
			<circle fill="hsl(0, 0%, 28%)" cx="1" cy="1" r="1" />
		</marker>
		<marker
			id="markers-marker-start"
			viewBox="0 0 2 2"
			refX="1"
			refY="1"
			markerWidth="6"
			markerHeight="6"
		>
			<g transform="translate(1 1)">
				<circle fill="hsl(0, 0%, 28%)" r="1" />
				<path
					fill="hsl(0, 0%, 72%)"
					stroke="hsl(0, 0%, 72%)"
					stroke-width="0.2"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -0.2 -0.375 l 0.55 0.375 -0.55 0.375z"
				/>
			</g>
		</marker>
		<marker
			id="markers-marker-end"
			viewBox="0 0 3 3"
			refX="1.5"
			refY="3"
			markerWidth="12"
			markerHeight="12"
		>
			<g transform="translate(1.5 1)">
				<line stroke="hsl(0, 0%, 28%)" stroke-width="0.1" x1="0" y1="0" x2="0" y2="2" />
				<circle fill="hsl(0, 0%, 28%)" r="1" />
				<circle fill="url(#markers-pattern-flag)" r="0.75" />
			</g>
		</marker>
		<linearGradient id="gradient-shadow" x1="0" x2="0" y1="0" y2="1">
			<stop stop-color="hsl(0, 0%, 72%)" stop-opacity="0.3" offset="0" />
			<stop stop-color="hsl(0, 0%, 72%)" stop-opacity="0" offset="1" />
		</linearGradient>
	</defs>
	<rect fill="hsl(0, 0%, 99%)" width="12" height="7.5" rx="0.4" />
	<g transform="translate(1 1.25)">
		<path
			fill="url(#gradient-shadow)"
			d="M 0 4 1 3 2 3 3 1 4 4 5 3 6 3 7 2 8 0 9 1 10 1 10 5 0 5"
		/>
		<g fill="none" stroke="hsl(0, 0%, 28%)">
			<line stroke-width="0.075" x1="0" y1="5" x2="10" y2="5" />
			<polyline
				marker-mid="url(#markers-marker-mid)"
				marker-start="url(#markers-marker-start)"
				marker-end="url(#markers-marker-end)"
				stroke-width="0.1"
				points="0 4 1 3 2 3 3 1 4 4 5 3 6 3 7 2 8 0 9 1 10 1"
			/>
		</g>
	</g>
</svg>`,
	'marker-start': `<svg style="display: block;" viewBox="0 0 2 2">
	<g transform="translate(1 1)">
		<circle fill="hsl(0, 0%, 28%)" r="1" />
		<path
			fill="hsl(0, 0%, 72%)"
			stroke="hsl(0, 0%, 72%)"
			stroke-width="0.2"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M -0.2 -0.375 l 0.55 0.375 -0.55 0.375z"
		/>
	</g>
</svg>`
};
