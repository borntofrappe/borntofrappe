export default {
	defs: `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0">
	<defs>
		<pattern id="dot" viewBox="0 0 2 2" width="0.1" height="0.1">
			<circle fill="#52a2bd" cx="1" cy="1" r="0.5" />
		</pattern>
		<pattern id="drop" viewBox="0 0 10 10" width="0.1" height="0.1">
			<g transform="translate(3 2.5)">
				<path
					fill="#52a2bd"
					d="M 2 0 c 1 1 2 2 2 3 c 0 2 -2 2 -2 2 c 0 0 -2 0 -2 -2 c 0 -1 1 -2 2 -3"
				/>
			</g>
		</pattern>
		<pattern id="drop-10" viewBox="0 0 10 10" patternUnits="userSpaceOnUse" width="10" height="10">
			<g transform="translate(3 2.5)">
				<path
					fill="#52a2bd"
					d="M 2 0 c 1 1 2 2 2 3 c 0 2 -2 2 -2 2 c 0 0 -2 0 -2 -2 c 0 -1 1 -2 2 -3"
				/>
			</g>
		</pattern>
		<pattern id="drop-5" viewBox="0 0 10 10" patternUnits="userSpaceOnUse" width="5" height="5">
			<g transform="translate(3 2.5)">
				<path
					fill="#52a2bd"
					d="M 2 0 c 1 1 2 2 2 3 c 0 2 -2 2 -2 2 c 0 0 -2 0 -2 -2 c 0 -1 1 -2 2 -3"
				/>
			</g>
		</pattern>
		<pattern
			id="polka-dot"
			viewBox="0 0 2 2"
			patternUnits="userSpaceOnUse"
			width="3.5"
			height="3.5"
		>
			<rect fill="#fed245" width="2" height="2" />
			<circle fill="#fe7c71" cx="1" cy="1" r="0.5" />
		</pattern>
		<pattern
			id="polka-dot-light"
			viewBox="0 0 2 2"
			patternUnits="userSpaceOnUse"
			width="3.5"
			height="3.5"
		>
			<rect fill="#feec6e" width="2" height="2" />
			<circle fill="#ffa8a6" cx="1" cy="1" r="0.5" />
		</pattern>
	</defs>
</svg>`,
	edges: `<svg style="display: block" viewBox="0 0 10 10">
	<path fill="#52a2bd" d="M 2 0 l 2 3 l -2 2 l -2 -2 l 2 -3" />
</svg>`,
	drop: `<svg style="display: block" viewBox="0 0 10 10">
	<path fill="#52a2bd" d="M 2 0 c 1 1 2 2 2 3 c 0 2 -2 2 -2 2 c 0 0 -2 0 -2 -2 c 0 -1 1 -2 2 -3" />
</svg>`,
	dots: `<svg style="display: block" viewBox="0 0 100 100">
	<rect fill="url(#dot)" width="100" height="100" />
</svg>`,
	drops: `<svg style="display: block" viewBox="0 0 100 100">
	<rect fill="url(#drop)" width="100" height="100" />
</svg>`,
	'source-order': `<svg style="display: block" viewBox="0 0 100 100">
	<rect fill="url(#drop)" width="100" height="100" />
	<g fill="#dceff6">
		<ellipse rx="30" ry="16" />
		<ellipse cx="35" rx="24" ry="13" />
		<ellipse cx="65" rx="24" ry="13" />
		<ellipse cx="100" rx="30" ry="16" />
	</g>
</svg>`,
	mask: `<svg style="display: block" viewBox="0 0 100 100">
	<mask id="mask-drops">
		<rect fill="white" width="100" height="100" />
		<rect fill="black" width="50" height="100" />
	</mask>
	<g mask="url(#mask-drops)">
		<rect fill="url(#drop)" width="100" height="100" />
	</g>
	<g fill="#dceff6">
		<ellipse rx="30" ry="16" />
		<ellipse cx="35" rx="24" ry="13" />
		<ellipse cx="65" rx="24" ry="13" />
		<ellipse cx="100" rx="30" ry="16" />
	</g>
</svg>`
};
