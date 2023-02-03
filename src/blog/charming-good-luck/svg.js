export default {
	head: `<svg style="display: block" viewBox="-50 -50 100 100">
		<g fill="none" stroke="#38311e" stroke-width="1.5">
			<path d="M 0 0 l 12 -14" />
			<path d="M 0 0 l -12 -14" />
		</g>
		<circle fill="#38311e" r="14" />
	</svg>`,
	marker: `<svg style="display: block" viewBox="-50 -50 100 100">
	<defs>
		<marker id="marker-m" viewBox="-1 -1 2 2">
			<circle r="1" />
		</marker>
	</defs>
	<g fill="none" stroke="#38311e" stroke-width="1.5">
		<path d="M 0 0 l 12 -14" marker-end="url(#marker-m)" />
		<path d="M 0 0 l -12 -14" />
	</g>
	<circle fill="#38311e" r="14" />
	</svg>`,
	markers: `<svg style="display: block" viewBox="-50 -50 100 100">
	<defs>
	<marker id="markers-m" viewBox="-1 -1 2 2">
			<circle r="1" fill="#38311e" />
	</marker>
	</defs>
	<g fill="none" stroke="#38311e" stroke-width="1.5" marker-end="url(#markers-m)">
	<path d="M 0 0 l 12 -14" />
		<path d="M 0 0 l -12 -14" />
	</g>
	<circle fill="#38311e" r="14" />
	</svg>`,
	half: `<svg style="display: block" viewBox="-50 -50 100 100">
		<defs>
			<marker id="half-m" viewBox="-1 -1 2 2">
				<circle r="1" fill="#38311e" />
			</marker>
		</defs>
		<g>
			<g fill="none" stroke="#38311e" stroke-width="1.5" marker-end="url(#half-m)">
				<path d="M 0 0 l 12 -14" />
				<path d="M 0 0 l -12 -14" />
			</g>
			<circle fill="#38311e" r="14" />
		</g>
		<circle fill="#ff6c6c" r="25" />
		<g fill="#38311e">
			<circle cx="4" cy="-18" r="2" />
			<circle cx="8" cy="-8" r="4" />
			<circle cx="18" cy="-1" r="3" />
			<circle cx="6" cy="5" r="3" />
			<circle cx="14" cy="12" r="2" />
			<circle cx="4" cy="18" r="2" />
		</g>
	</svg>`,
	body: `<svg style="display: block" viewBox="-50 -50 100 100">
	<defs>
		<marker id="body-m" viewBox="-1 -1 2 2">
			<circle r="1" fill="#38311e" />
		</marker>
	</defs>
	<g transform="translate(0 -20)">
		<g fill="none" stroke="#38311e" stroke-width="1.5" marker-end="url(#body-m)">
			<path d="M 0 0 l 12 -14" />
			<path d="M 0 0 l -12 -14" />
		</g>
		<circle fill="#38311e" r="14" />
	</g>
	<circle fill="#ff6c6c" r="25" />
	<g fill="#38311e">
		<g id="body-dots">
			<circle cx="4" cy="-18" r="2" />
			<circle cx="8" cy="-8" r="4" />
			<circle cx="18" cy="-1" r="3" />
			<circle cx="6" cy="5" r="3" />
			<circle cx="14" cy="12" r="2" />
			<circle cx="4" cy="18" r="2" />
		</g>
		<use href="#body-dots" transform="scale(-1 1)" />
	</g>
	</svg>`
};
