export default {
	plant: `<svg style="display: block;" viewBox="0 0 82 89">
	<title>A nice potted plant</title>
	<rect fill="#f5f7fa" width="82" height="89" />
	<svg style="color: #3e4c59;" viewBox="-11 -52 22 69" x="30" y="10" width="22" height="69">
		<g
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<path
				d="M 0 0 v -6 c 0 -7.5 2.5 -9 9 -9 c 0 6 -1 9 -9 9 c 0 -7.5 -2.5 -9 -9 -9 c 0 6 1 9 9 9 v -12 c 0 -7.5 2.5 -9 9 -9 c 0 6 -1 9 -9 9 c 0 -7.5 -2.5 -9 -9 -9 c 0 6 1 9 9 9 v -12 c 0 -7.5 2.5 -9 9 -9 c 0 6 -1 9 -9 9 c 0 -7.5 -2.5 -9 -9 -9 c 0 6 1 9 9 9 v -12 c 0 -7.5 2.5 -9 9 -9 c 0 6 -1 9 -9 9 c 0 -7.5 -2.5 -9 -9 -9 c 0 6 1 9 9 9z"
			/>
			<g transform="translate(-10 0)">
				<rect width="20" height="6" rx="2" />
				<path d="M 2 6 c 0.5 8 3 10 5 10 l 6 0 c 2 0 4.5 -2 5 -10" />
			</g>
		</g>
	</svg>
</svg>`,
	elements: `<svg style="display: block; color: #3e4c59;" viewBox="0 0 100 89">
	<title>A few SVG elements</title>
	<rect fill="#f5f7fa" width="100" height="89" />
	<g transform="translate(42 10)">
		<g fill="none" stroke="currentColor" stroke-width="0.2">
			<path d="M 0 40 h 15" />
			<path d="M 1 55 h 14" />
			<path d="M -2 65 h 17" />
		</g>
		<g transform="translate(15 0)">
			<g fill="currentColor">
				<circle r="0.75" cy="40" />
				<circle r="0.75" cy="55" />
				<circle r="0.75" cy="65" />
			</g>
			<g
				transform="translate(3 1.2)"
				fill="currentColor"
				font-size="5"
				font-weight="700"
				font-family="monospace"
			>
				<text y="40">&lt;path /&gt;</text>
				<text y="55">&lt;rect /&gt;</text>
				<text y="65">&lt;path /&gt;</text>
			</g>
		</g>
	</g>
	<svg style="color: #3e4c59;" viewBox="-11 -52 22 69" x="20" y="10" width="22" height="69">
		<g
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<path
				d="M 0 0 v -6 c 0 -7.5 2.5 -9 9 -9 c 0 6 -1 9 -9 9 c 0 -7.5 -2.5 -9 -9 -9 c 0 6 1 9 9 9 v -12 c 0 -7.5 2.5 -9 9 -9 c 0 6 -1 9 -9 9 c 0 -7.5 -2.5 -9 -9 -9 c 0 6 1 9 9 9 v -12 c 0 -7.5 2.5 -9 9 -9 c 0 6 -1 9 -9 9 c 0 -7.5 -2.5 -9 -9 -9 c 0 6 1 9 9 9 v -12 c 0 -7.5 2.5 -9 9 -9 c 0 6 -1 9 -9 9 c 0 -7.5 -2.5 -9 -9 -9 c 0 6 1 9 9 9"
			/>
			<g transform="translate(-10 0)">
				<rect width="20" height="6" rx="2" />
				<path d="M 2 6 c 0.5 8 3 10 5 10 l 6 0 c 2 0 4.5 -2 5 -10" />
			</g>
		</g>
	</svg>
</svg>`,
	segments: `<svg style="display: block; color: #3e4c59;" viewBox="0 0 110 75">
	<title>A few vertical segments</title>
	<defs>
		<marker markerWidth="2.5" markerHeight="2.5" id="marker" viewBox="-1 -1 2 2">
			<circle fill="#d1d9e1" r="1" />
		</marker>
		<marker markerWidth="4" markerHeight="4" id="marker-end" viewBox="-1 -1 2 2">
			<circle fill="currentColor" r="1" />
		</marker>
	</defs>
	<rect fill="#f5f7fa" width="110" height="75" />
	<g
		 transform="translate(15 15)">
		<g transform="translate(0 50)">
			<g transform="translate(0 -10)">
				<g
					 fill="none"
					 stroke="#d1d9e1"
					 stroke-width="1"
					 stroke-linejoin="round"
					 stroke-linecap="round"
					 marker-end="url(#marker-end)"
					 marker-mid="url(#marker)"
					 marker-start="url(#marker)"
					 >
					<path d="M 0 0" />
					<path d="M 20 0 v -6" />
					<path d="M 40 0 v -6 v -12" />
					<path d="M 60 0 v -6 v -12 v -12" />
					<path d="M 80 0 v -6 v -12 v -12 v -12" />
				</g>
			</g>
			<g
				 fill="currentColor"
				 font-size="5"
				 font-weight="700"
				 font-family="monospace"
				 text-anchor="middle"
				 >
				<text>M 0 0</text>
				<text x="20">v -6</text>
				<text x="40">v -12</text>
				<text x="60">v -12</text>
				<text x="80">v -12</text>
			</g>
		</g>
	</g>
</svg>`
};
