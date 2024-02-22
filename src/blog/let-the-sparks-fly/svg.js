export default {
	viewBox: `<svg style="display: block;" viewBox="-2.5 -20 202.5 122.5">
    <defs>
        <filter id="viewBox-filter" filterUnits="userSpaceOnUse" x="100" y="0" width="100" height="100">
            <feTurbulence baseFrequency="0.2 0.4" numOctaves="3" />
            <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
    </defs>
    <text fill="currentColor" font-size="12" font-family="monospace" y="-6">viewBox</text>
    <rect fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="5" width="100" height="100" />
    <g filter="url(#viewBox-filter)" opacity="0.5">
        <circle fill="currentColor" cx="150" cy="50" r="10" />
    </g>
</svg>`,
	'step-end': `<svg style="display: block;" viewBox="-15 -5 120 117.5">
    <defs>
        <marker id="step-end-marker" viewBox="-1 -1 2 2" markerWidth="3" markerHeight="3">
            <circle fill="currentColor" r="1" />
        </marker>
    </defs>
    <g fill="none" stroke="currentColor" >
        <g stroke-width="0.5">
            <path d="M 0 0 0 100 100 100" />
            <g stroke-linecap="square">
                <path transform="translate(0 100)" d="M 0 0 0 2 M 25 0 25 2 M 50 0 50 2 M 75 0 75 2 M 100 0 100 2" />
                <path d="M 0 0 -2 0 M 0 25 -2 25 M 0 50 -2 50 M 0 75 -2 75 M 0 100 -2 100" />
            </g>
            <path pathLength="1" stroke-dasharray="0.0125 0.025" stroke-dashoffset="-0.0125" d="M 25 100 25 75 M 50 75 50 50 M 75 50 75 25 M 100 25 100 0" />
        </g>
        <g marker-start="url(#step-end-marker)" stroke-width="1.5">
            <path d="M 0 100 25 100" />
            <path d="M 25 75 50 75" />
            <path d="M 50 50 75 50" />
            <path d="M 75 25 100 25" />
            <path d="M 100 0 Z" />
        </g>
    </g>
    <g fill="currentColor" font-family="monospace" font-size="6">
        <text x="-4" y="109" text-anchor="end">0</text>
        <g transform="translate(0 109)" text-anchor="middle">
            <text x="25">0.25</text>
            <text x="50">0.50</text>
            <text x="75">0.75</text>
            <text x="100">1</text>
        </g>
        <g transform="translate(-4 1.9)" text-anchor="end">
            <text y="75">25</text>
            <text y="50">50</text>
            <text y="25">75</text>
            <text>100</text>
        </g>
    </g>
</svg>`
};
