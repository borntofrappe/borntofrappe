export default {
	defs: `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0">
	<defs>
		<linearGradient id="deck-gradient-light" x1="0" x2="0" y1="0" y2="1">
			<stop stop-color="#fcfff6" offset="0" />
			<stop stop-color="#fcfff655" offset="1" />
		</linearGradient>
		<linearGradient id="deck-gradient-red" x1="0" x2="0" y1="0" y2="1">
			<stop stop-color="#fe5b53" offset="0" />
			<stop stop-color="#fe4e46" offset="1" />
		</linearGradient>
		<linearGradient id="deck-gradient-black" x1="0" x2="0" y1="0" y2="1">
			<stop stop-color="#374e4e" offset="0" />
			<stop stop-color="#1f393a" offset="1" />
		</linearGradient>
		<symbol id="deck-card-back" viewBox="0 0 40 55">
			<pattern id="deck-pattern-card-back" viewBox="0 0 2 2" width="0.5" height="0.33">
				<path fill="#22b33d" d="M 1 0 l 1 1 -1 1 -1 -1z" />
			</pattern>
			<rect fill="#0c6f0f" width="40" height="55" rx="5" />
			<rect fill="url(#deck-pattern-card-back)" width="40" height="55" rx="5" />
			<rect opacity="0.2" fill="url(#deck-gradient-light)" width="40" height="55" rx="5" />
			<rect
				fill="none"
				stroke="#fcfff6"
				stroke-width="2"
				x="3"
				y="3"
				width="34"
				height="49"
				rx="2"
			/>
			<rect
				fill="none"
				stroke="url(#deck-gradient-black)"
				stroke-width="2"
				x="1"
				y="1"
				width="38"
				height="53"
				rx="4"
			/>
		</symbol>
		<symbol id="deck-card-diamond" viewBox="0 0 40 55">
			<clipPath id="deck-clip-card-diamond">
				<path d="M 20 12.5 l 15 15 -15 15 -15 -15" />
			</clipPath>
			<rect fill="#fcfff6" width="40" height="55" rx="5" />
			<rect
				fill="none"
				stroke="url(#deck-gradient-black)"
				stroke-width="2"
				x="1"
				y="1"
				width="38"
				height="53"
				rx="4"
			/>
			<rect
				clip-path="url(#deck-clip-card-diamond)"
				fill="url(#deck-gradient-red)"
				width="40"
				height="55"
				rx="4"
			/>
		</symbol>
		<symbol id="deck-card-heart" viewBox="0 0 40 55">
			<clipPath id="deck-clip-card-heart">
				<path
					d="M 20 22.5 a 7.5 7.5 0 0 0 -15 0 c 0 7.5 10 15 15 17.5 7.5 -2.5 15 -10 15 -17.5 a 7.5 7.5 0 0 0 -15 0"
				/>
			</clipPath>
			<rect fill="#fcfff6" width="40" height="55" rx="5" />
			<rect
				fill="none"
				stroke="url(#deck-gradient-black)"
				stroke-width="2"
				x="1"
				y="1"
				width="38"
				height="53"
				rx="4"
			/>
			<rect
				clip-path="url(#deck-clip-card-heart)"
				fill="url(#deck-gradient-red)"
				width="40"
				height="55"
				rx="4"
			/>
		</symbol>
		<symbol id="deck-card-club" viewBox="0 0 40 55">
			<clipPath id="deck-clip-card-club">
				<path d="M 20 30 q 2.5 7 5 12 h -10 q 2.5 -5 5 -12" />
				<path
					d="M 20 31 c -2.5 7.5 -15 7.5 -15 0 0 -7.5 10 -15 15 -17.5 5 0 15 10 15 17.5 0 7.5 -12.5 7.5 -15 0"
				/>
			</clipPath>
			<rect fill="#fcfff6" width="40" height="55" rx="5" />
			<rect
				fill="none"
				stroke="url(#deck-gradient-black)"
				stroke-width="2"
				x="1"
				y="1"
				width="38"
				height="53"
				rx="4"
			/>
			<rect
				clip-path="url(#deck-clip-card-club)"
				fill="url(#deck-gradient-black)"
				width="40"
				height="55"
				rx="4"
			/>
		</symbol>
		<symbol id="deck-card-flower" viewBox="0 0 40 55">
			<clipPath id="deck-clip-card-flower">
				<path d="M 20 30 q 2.5 7 5 12 h -10 q 2.5 -5 5 -12" />
				<path
					transform="translate(20 28)"
					d="M 0 7 c 0 -7.5 7.5 -10 7.5 -15 a 7.5 7.5 0 0 0 -15 0 c 0 5 7.5 7.5 7.5 15"
				/>
				<path
					transform="translate(20 28) rotate(110)"
					d="M 0 7 c 0 -7.5 7.5 -10 7.5 -15 a 7.5 7.5 0 0 0 -15 0 c 0 5 7.5 7.5 7.5 15"
				/>
				<path
					transform="translate(20 28) rotate(-110)"
					d="M 0 7 c 0 -7.5 7.5 -10 7.5 -15 a 7.5 7.5 0 0 0 -15 0 c 0 5 7.5 7.5 7.5 15"
				/>
			</clipPath>
			<rect fill="#fcfff6" width="40" height="55" rx="5" />
			<rect
				fill="none"
				stroke="url(#deck-gradient-black)"
				stroke-width="2"
				x="1"
				y="1"
				width="38"
				height="53"
				rx="4"
			/>
			<rect
				clip-path="url(#deck-clip-card-flower)"
				fill="url(#deck-gradient-black)"
				width="40"
				height="55"
				rx="4"
			/>
		</symbol>
	</defs>
</svg>`,
	'aspect-ratio': `<svg style="display: block" viewBox="0 0 2.7 1.7">
	<g transform="translate(1.6 0.6)">
		<rect fill="currentColor" width="1" height="1" />
		<use href="#deck-card-back" width="1" height="1" />
		<g fill="none" stroke="currentColor" stroke-width="0.01">
			<path d="M 0 -0.1 v -0.1 h 1 v 0.1" />
			<path d="M -0.1 0 h -0.1 v 1 h 0.1" />
		</g>
		<g fill="currentColor" font-family="monospace" font-size="0.2">
			<text text-anchor="middle" x="0.5" y="-0.3">width="<tspan font-weight="700">1</tspan>"</text>
			<text text-anchor="end" x="-0.3" y="0.6">height="<tspan font-weight="700">1</tspan>"</text>
		</g>
	</g>
</svg>`
};
