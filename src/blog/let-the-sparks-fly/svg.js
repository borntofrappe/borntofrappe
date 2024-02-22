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
        <path transform="translate(150 50)" fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 0 -12 A 12 12 0 0 0 12 0 12 12 0 0 0 0 12 12 12 0 0 0 -12 0 12 12 0 0 0 0 -12 Z" />
    </g>
</svg>`
};
