export default {
	kites: `<svg viewBox="-2.5 -100 70 105">
	<defs>
		<marker
			id="kites-marker-ribbon"
			viewBox="0 0 3 6"
			orient="auto"
			refX="1.5"
			refY="3"
			markerWidth="8"
			markerHeight="8"
		>
			<g transform="translate(3 0) rotate(90)">
				<path
					fill="hsl(0, 85%, 72%)"
					d="M 0 0 q 1 0 3 1.2 q 2 -1.2 3 -1.2 q -0.5 1.5 0 3 q -1 0 -3 -1.2 q -2 1.2 -3 1.2 q 0.5 -1.5 0 -3"
				/>
			</g>
		</marker>

		<marker
			id="kites-marker-kite-0"
			viewBox="0 0 37.5 50"
			orient="auto"
			refX="18.75"
			refY="25"
			markerWidth="32"
			markerHeight="32"
			markerUnits="userSpaceOnUse"
		>
			<g transform="translate(37.5 0) rotate(90)">
				<path fill="#52538b" d="M 25 0 l -25 25 q 10 0 25 12.5 q 15 -12.5 25 -12.5z" />
				<path fill="#36365f" d="M 25 0 l -17.5 17.5 q 10 0 17.5 8.75 q 7.5 -8.75 17.5 -8.75z" />
				<path fill="#172b4b" d="M 25 0 l -10 10 q 5 0 10 5 q 5 -5 10 -5z" />
			</g>
		</marker>
		<marker
			id="kites-marker-kite-1"
			viewBox="0 0 60 50"
			orient="auto"
			refX="30"
			refY="25"
			markerWidth="32"
			markerHeight="32"
			markerUnits="userSpaceOnUse"
		>
			<g transform="translate(60 0) rotate(90)">
				<path fill="hsl(0, 0%, 28%)" d="M 25 0 l -25 25 l 25 35 25 -35z" />
				<path fill="#fab540" d="M 25 0 l -25 25 l 24.5 -0.5" />
				<path fill="#4080e0" d="M 0 25 l 25 35 l -0.5 -34.5" />
				<path fill="#72a543" d="M 25 60 l 25 -35 l -24.5 0.5" />
				<path fill="#b93638" d="M 50 25 l -25 -25 l 0.5 24.5" />
				<g fill="none" stroke="hsl(0, 0%, 28%)" stroke-width="0.5">
					<path d="M 0 25 q 2 7.5 1 15 t 2 15" />
					<path transform="translate(50 0) scale(-1 1)" d="M 0 25 q 2 7.5 1 15 t 2 15" />
				</g>
			</g>
		</marker>
		<marker
			id="kites-marker-kite-2"
			viewBox="0 0 36 64"
			orient="auto"
			refX="18"
			refY="31"
			markerWidth="32"
			markerHeight="32"
			markerUnits="userSpaceOnUse"
		>
			<g transform="translate(36 0) rotate(90)">
				<path
					fill="#845eb0"
					d="M 32 0 q -20 0 -30 20 a 8 8 0 0 1 7.5 7.5 a 8 8 0 0 1 10 5 a 10 10 0 0 1 12.5 2.5 a 10 10 0 0 1 12.5 -2.5 a 8 8 0 0 1 10 -5 a 8 8 0 0 1 7.5 -7.5 q -10 -20 -30 -20"
				/>
				<path
					fill="#aa6bce"
					d="M 9.5 27.5 a 8 8 0 0 1 10 5 a 13.5 13.5 0 0 1 25 0 a 8 8 0 0 1 10 -5 a 24 24 0 0 0 -45 0"
				/>
				<g fill="#aa6bce">
					<circle cx="2" cy="20" r="1.5" />
					<circle cx="32" cy="35" r="1.5" />
					<circle cx="61" cy="20" r="1.5" />
				</g>
				<g fill="#845eb0">
					<circle cx="9.5" cy="27.5" r="1.5" />
					<circle cx="19.5" cy="32.5" r="1.5" />
					<circle cx="44.5" cy="32.5" r="1.5" />
					<circle cx="54.5" cy="27.5" r="1.5" />
				</g>
			</g>
		</marker>
	</defs>
	<g marker-mid="url(#kites-marker-ribbon)" fill="none" stroke="hsl(0, 0%, 28%)" stroke-width="0.5">
		<path marker-end="url(#kites-marker-kite-0)" d="M 0 0 q 4 -7 10 -5 t 10 -5 10 -5 20 -2.5" />
		<path marker-end="url(#kites-marker-kite-1)" d="M 0 -30 q 4 -6 10 -5 t 10 -5 10 -5 17.5 -5" />
		<path marker-end="url(#kites-marker-kite-2)" d="M 0 -60 q 4 -5 10 -5 t 10 -5 10 -5 15 -7.5" />
	</g>
</svg>`,
	'line-marker': `<svg viewBox="0 0 12 7.5">
	<defs>
		<marker id="line-marker-marker-mid" viewBox="0 0 2 2" refX="1" refY="1">
			<circle fill="hsl(0, 0%, 28%)" cx="1" cy="1" r="1" />
		</marker>
	</defs>
	<rect fill="hsl(0, 0%, 98%)" width="12" height="7.5" rx="0.4" />
	<g transform="translate(1 1.25)">
		<g fill="none" stroke="hsl(0, 0%, 28%)">
			<line stroke-width="0.075" x1="0" y1="5" x2="10" y2="5" />
			<polyline
				marker-mid="url(#line-marker-marker-mid)"
				stroke-width="0.1"
				points="0 4 1 3 2 3 3 1 4 4 5 3 6 3 7 2 8 0 9 1 10 1"
			/>
		</g>
	</g>
</svg>`,
	'line-markers': `<svg viewBox="0 0 12 7.5">
	<defs>
		<pattern id="line-markers-pattern-flag" x="0.125" viewBox="0 0 2 2" width="0.5" height="0.5">
			<rect fill="hsl(0, 0%, 72%)" width="2" height="2" />
			<g fill="hsl(0, 0%, 42%)">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<marker id="line-markers-marker-mid" viewBox="0 0 2 2" refX="1" refY="1">
			<circle fill="hsl(0, 0%, 28%)" cx="1" cy="1" r="1" />
		</marker>
		<marker
			id="line-markers-marker-start"
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
			id="line-markers-marker-end"
			viewBox="0 0 3 3"
			refX="1.5"
			refY="3"
			markerWidth="12"
			markerHeight="12"
		>
			<g transform="translate(1.5 1)">
				<line stroke="hsl(0, 0%, 28%)" stroke-width="0.1" x1="0" y1="0" x2="0" y2="2" />
				<circle fill="hsl(0, 0%, 28%)" r="1" />
				<circle fill="url(#line-markers-pattern-flag)" r="0.75" />
			</g>
		</marker>
		<linearGradient id="gradient-shadow" x1="0" x2="0" y1="0" y2="1">
			<stop stop-color="hsl(0, 0%, 90%)" offset="0.2" />
			<stop stop-color="hsl(0, 0%, 98%)" offset="1" />
		</linearGradient>
	</defs>
	<rect fill="hsl(0, 0%, 98%)" width="12" height="7.5" rx="0.4" />
	<g transform="translate(1 1.25)">
		<path
			fill="url(#gradient-shadow)"
			d="M 0 4 1 3 2 3 3 1 4 4 5 3 6 3 7 2 8 0 9 1 10 1 10 5 0 5"
		/>
		<g fill="none" stroke="hsl(0, 0%, 28%)">
			<line stroke-width="0.075" x1="0" y1="5" x2="10" y2="5" />
			<polyline
				marker-mid="url(#line-markers-marker-mid)"
				marker-start="url(#line-markers-marker-start)"
				marker-end="url(#line-markers-marker-end)"
				stroke-width="0.1"
				points="0 4 1 3 2 3 3 1 4 4 5 3 6 3 7 2 8 0 9 1 10 1"
			/>
		</g>
	</g>
</svg>`,
	'marker-start': `<svg viewBox="0 0 2 2">
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
</svg>`,
	'marker-end': `<svg viewBox="0 0 3 3">
	<defs>
		<pattern id="marker-end-pattern-flag" x="0.125" viewBox="0 0 2 2" width="0.5" height="0.5">
			<rect fill="hsl(0, 0%, 72%)" width="2" height="2" />
			<g fill="hsl(0, 0%, 42%)">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
	</defs>
	<g transform="translate(1.5 1)">
		<line stroke="hsl(0, 0%, 28%)" stroke-width="0.1" x1="0" y1="0" x2="0" y2="2" />
		<circle r="1" fill="hsl(0, 0%, 28%)" />
		<circle r="0.75" fill="url(#marker-end-pattern-flag)" />
	</g>
</svg>`
};
