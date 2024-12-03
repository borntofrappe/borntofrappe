export default {
	pedestal: `<svg style="display: block" viewBox="0 0 100 100">
    <g fill="none" stroke="#632b2a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
        <path d="M 50 50 v 35 h -10 h 20" />
    </g>
    <circle fill="#632b2a" cx="50" cy="50" r="4" />
</svg>`,
	overlap: `<svg style="display: block" viewBox="0 0 100 100">
    <g>
        <g fill="none" stroke="#632b2a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
            <path d="M 50 50 v 35 h -10 h 20" />
        </g>
        <circle fill="#632b2a" cx="50" cy="50" r="4" />
    </g>
    <path fill="none" stroke="#db9756" stroke-width="4" d="M 50 10 v 60" />
</svg>`,
	['transform-rotate']: `<svg style="display: block" viewBox="0 0 100 100">
    <g>
        <g fill="none" stroke="#632b2a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
            <path d="M 50 50 v 35 h -10 h 20" />
        </g>
        <circle fill="#632b2a" cx="50" cy="50" r="4" />
    </g>
    <g transform="rotate(25)">
        <path fill="none" stroke="#db9756" stroke-width="4" d="M 50 10 v 60" />
    </g>
</svg>`,
	['transform-origin']: `<svg style="display: block" viewBox="0 0 100 100">
    <g>
        <g fill="none" stroke="#632b2a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
            <path d="M 50 50 v 35 h -10 h 20" />
        </g>
        <circle fill="#632b2a" cx="50" cy="50" r="4" />
    </g>
    <g transform-origin="50 50" transform="rotate(25)">
        <path fill="none" stroke="#db9756" stroke-width="4" d="M 50 10 v 60" />
    </g>
</svg>`,
	['transform-translate']: `<svg style="display: block" viewBox="0 0 100 100">
    <g>
        <g fill="none" stroke="#632b2a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
            <path d="M 50 50 v 35 h -10 h 20" />
        </g>
        <circle fill="#632b2a" cx="50" cy="50" r="4" />
    </g>
    <g transform="translate(50 50)">
        <g transform="rotate(25)">
            <path fill="none" stroke="#db9756" stroke-width="4" d="M 0 -40 v 60" />
        </g>
    </g>
</svg>`,
	['composition-1']: `<svg style="display: block" viewBox="0 0 100 100">
	<g>
		<g fill="none" stroke="#632b2a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
			<path d="M 50 50 v 35 h -10 h 20" />
		</g>
		<circle fill="#632b2a" cx="50" cy="50" r="4" />
	</g>
    <g transform="translate(50 50)">
        <g transform="rotate(25)">
            <path fill="none" stroke="#db9756" stroke-width="4" d="M 0 -40 v 60" />
            <circle fill="#db9756" cy="20" r="11" /> 
            <ellipse fill="#f5e0c1" cy="16" rx="5" ry="4" />
        </g>
    </g>
</svg>`,
	['composition-2']: `<svg style="display: block" viewBox="0 0 100 100">
	<g>
		<g fill="none" stroke="#632b2a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
			<path d="M 50 50 v 35 h -10 h 20" />
		</g>
		<circle fill="#632b2a" cx="50" cy="50" r="4" />
	</g>
    <g transform="translate(50 50)">
        <g transform="rotate(25)">
            <path fill="none" stroke="#db9756" stroke-width="4" d="M 0 -40 v 60" />
            <circle fill="#db9756" cy="20" r="11" /> 
            <ellipse fill="#f5e0c1" cy="16" rx="5" ry="4" />
            <g fill="#914c3c" stroke="#914c3c" stroke-width="2" stroke-linejoin="round">
                <circle r="10" cy="-30" />
                <path d="M 0 -30 l 10 0 10 10 -20 0" />
            </g>
        </g>
    </g>
</svg>`
};
