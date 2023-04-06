export default {
	rect: `<svg style="display: block;" viewBox="0 0 100 100">
	<g fill="hsl(210, 36%, 96%)" stroke="hsl(211, 39%, 23%)" stroke-width="10">
		<rect width="100" height="100" />
	</g>
</svg>`,
	'stroke-issue': `<svg style="display: block;" viewBox="0 0 3.75 1">
	<g transform="translate(0.5 0.5)">
		<circle fill="hsl(360, 77%, 78%)" r="0.2" />
		<path fill="none" stroke="hsl(360, 72%, 38%)" stroke-width="0.04" stroke-linecap="round" d="M -0.05 -0.05 l 0.1 0.1 M -0.05 0.05 l 0.1 -0.1" />
	</g>
	<g transform="translate(1 0)">
		<svg viewBox="0 0 100 100" width="1" height="1">
			<g fill="hsl(210, 36%, 96%)" stroke="hsl(211, 39%, 23%)" stroke-width="10">
				<rect width="100" height="100" />
			</g>
		</svg>
	</g>
	<g transform="translate(2.25 0)">
		<svg viewBox="0 0 100 100" width="1" height="1">
			<g fill="hsl(210, 36%, 96%)" stroke="hsl(211, 39%, 23%)" stroke-width="10">
				<circle r="50" cx="50" cy="50" />
			</g>
		</svg>
	</g>
</svg>`,
	'stroke-fix': `<svg style="display: block;" viewBox="0 0 3.75 1">
	<g transform="translate(0.5 0.5)">
		<circle fill="hsl(122, 42%, 75%)" r="0.2" />
		<path fill="none" stroke="hsl(125, 56%, 29%)" stroke-width="0.04" stroke-linecap="round" stroke-linejoin="round" d="M -0.065 0 l 0.05 0.05 0.08 -0.08" />
	</g>
	<g transform="translate(1 0)">
		<svg viewBox="0 0 100 100" width="1" height="1">
			<g transform="translate(5 5)">
				<g fill="hsl(210, 36%, 96%)" stroke="hsl(211, 39%, 23%)" stroke-width="10">
					<rect width="90" height="90" />
				</g>
			</g>
		</svg>
	</g>
	<g transform="translate(2.25 0)">
		<svg viewBox="0 0 110 110" width="1" height="1">
			<g transform="translate(5 5)">
				<g fill="hsl(210, 36%, 96%)" stroke="hsl(211, 39%, 23%)" stroke-width="10">
					<circle r="50" cx="50" cy="50" />
				</g>
			</g>
		</svg>
	</g>
</svg>`,
	needlepoint: `<svg style="display: block; --c0: hsl(211, 39%, 23%); --c1: hsl(205, 74%, 65%); --c2: hsl(210, 36%, 96%);" viewBox="-5 -5 110 110">
	<g fill="var(--c2, hsl(210, 36%, 96%))" stroke="var(--c2, hsl(210, 36%, 96%))" stroke-width="10">
		<circle r="50" cx="50" cy="50" />
	</g>
	<g fill="none" stroke="var(--c0, hsl(211, 39%, 23%))" stroke-width="1.25" stroke-dasharray="2.5 6" stroke-linecap="round">
		<circle r="50" cx="50" cy="50" />
	</g>
	<g fill="var(--c1, hsl(205, 74%, 65%))" stroke="var(--c1, hsl(205, 74%, 65%))" stroke-width="9">
		<path d="M 25 42 a 12.5 12.5 0 0 1 25 0 12.5 12.5 0 0 1 25 0 q 0 17.5 -25 30 -25 -12.5 -25 -30" />
	</g>
	<g fill="none" stroke="var(--c0, hsl(211, 39%, 23%))" stroke-width="1" stroke-dasharray="1 3" stroke-linecap="round">
		<path d="M 25 42 a 12.5 12.5 0 0 1 25 0 12.5 12.5 0 0 1 25 0 q 0 17.5 -25 30 -25 -12.5 -25 -30" />
	</g>
</svg>`,
	breakdown: `<svg style="display: block; --c0: hsl(211, 39%, 23%); --c1: hsl(205, 74%, 65%); --c2: hsl(210, 36%, 96%);" viewBox="-5 -35 225 140">
	<defs>
		<marker id="marker-dot" viewBox="-1 -1 2 2" markerWidth="5" markerHeight="5">
			<circle fill="currentColor" r="1" />
		</marker>
	</defs>
	<g fill="var(--c2, hsl(210, 36%, 96%))" stroke="var(--c2, hsl(210, 36%, 96%))" stroke-width="10">
		<circle r="50" cx="50" cy="50" />
	</g>
	<g fill="none" stroke="var(--c0, hsl(211, 39%, 23%))" stroke-width="1.25" stroke-dasharray="2.5 6" stroke-linecap="round">
		<circle r="50" cx="50" cy="50" />
	</g>
	<g fill="var(--c1, hsl(205, 74%, 65%))" stroke="var(--c1, hsl(205, 74%, 65%))" stroke-width="9">
		<path d="M 25 42 a 12.5 12.5 0 0 1 25 0 12.5 12.5 0 0 1 25 0 q 0 17.5 -25 30 -25 -12.5 -25 -30" />
	</g>
	<g fill="none" stroke="var(--c0, hsl(211, 39%, 23%))" stroke-width="1" stroke-dasharray="1 3" stroke-linecap="round">
		<path d="M 25 42 a 12.5 12.5 0 0 1 25 0 12.5 12.5 0 0 1 25 0 q 0 17.5 -25 30 -25 -12.5 -25 -30" />
	</g>
	<g fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" marker-end="url(#marker-dot)">
		<path d="M 50 -5 l 5 -5 h 90" />
		<path d="M 84 11 h 61" />
		<path d="M 74 60 h 71" />
		<path d="M 51 73 l 5 5 h 89" />
	</g>
	<g fill="currentColor" font-family="monospace">
		<g transform="translate(149 -25)">
			<text font-size="9">stroke-width</text>
			<g font-size="10" font-weight="700">
				<text y="18">10</text>
				<text y="39">1.25</text>
				<text y="88">9</text>
				<text y="106">1</text>
			</g>
		</g>
	</g>
</svg>`,
	sticker: `<svg style="display: block; --c0: hsl(209, 34%, 30%); --c1: #ffdb47; --c2: hsl(209, 61%, 16%);" viewBox="-5 -5 110 110">
	<g fill="var(--c2, hsl(210, 36%, 96%))" stroke="var(--c2, hsl(210, 36%, 96%))" stroke-width="10">
		<circle r="50" cx="50" cy="50" />
	</g>
	<g fill="none" stroke="var(--c0, hsl(211, 39%, 23%))" stroke-width="1.25" stroke-dasharray="2.5 6" stroke-linecap="round">
		<circle r="50" cx="50" cy="50" />
	</g>
	<g transform="translate(0 -1.5)">
		<svg viewBox="-27.704545974731445 -29.5 54.409088134765625 52.56756591796875" x="20" y="20" width="60" height="60">
			<g fill="var(--c1, hsl(205, 74%, 65%))" stroke="var(--c1, hsl(205, 74%, 65%))" stroke-width="9">
				<path d="M 0 15 Q -21 28 -15 4 Q -34 -11 -9 -13 Q -1 -35 8 -13 Q 33 -11 14 4 Q 20 28 0 15" />
			</g>
		</svg>
		<svg viewBox="-27.704545974731445 -29.5 54.409088134765625 52.56756591796875"  x="20" y="20" width="60" height="60">
			<g fill="none" stroke="var(--c0, hsl(211, 39%, 23%))" stroke-width="1" stroke-dasharray="1 3" stroke-linecap="round">
				<path d="M 0 15 Q -21 28 -15 4 Q -34 -11 -9 -13 Q -1 -35 8 -13 Q 33 -11 14 4 Q 20 28 0 15" />
			</g>
		</svg>
	</g>
</svg>`,
	'text-issue': `<svg style="display: block;" viewBox="0 0 3 1" >
	<g transform="translate(0.45 0.5)">
		<circle fill="hsl(360, 77%, 78%)" r="0.2" />
		<path fill="none" stroke="hsl(360, 72%, 38%)" stroke-width="0.04" stroke-linecap="round" d="M -0.05 -0.05 l 0.1 0.1 M -0.05 0.05 l 0.1 -0.1" />
	</g>
	<g transform="translate(1 0)">
		<svg viewBox="0 0 70 25" width="2">
			<g 
				 transform="translate(2 20)"
				 font-size="20"
				 font-family="sans-serif"
				 fill="hsl(210, 36%, 96%)"
				 stroke="hsl(211, 39%, 23%)">
				<text>outline</text>
			</g>
		</svg>
	</g>
</svg>`,
	'text-fix': `<svg style="display: block;" viewBox="0 0 3 1">
	<g transform="translate(0.45 0.5)">
		<circle fill="hsl(122, 42%, 75%)" r="0.2" />
		<path
			fill="none"
			stroke="hsl(125, 56%, 29%)"
			stroke-width="0.04"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M -0.065 0 l 0.05 0.05 0.08 -0.08"
		/>
	</g>
	<g transform="translate(1 0)">
		<svg viewBox="0 0 70 25" width="2">
			<g
				transform="translate(2 20)"
				font-size="20"
				font-family="sans-serif"
				fill="hsl(210, 36%, 96%)"
				stroke="hsl(211, 39%, 23%)"
				paint-order="stroke"
				stroke-width="3"
				letter-spacing="1">
				<text>outline</text>
			</g>
		</svg>
	</g>
</svg>`
};
