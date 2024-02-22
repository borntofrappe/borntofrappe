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
</svg>`,
	sprites: `<svg style="display: block;" viewBox="0 0 600 100">
    <path transform="translate(100 0)" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 48 47 C 49 53 49 53 53 54 49 56 49 56 48 63 47 56 47 56 43 54 47 53 47 53 48 47" />
    <path transform="translate(200 0)" fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 48 34 C 51 51 51 51 63 53 50 56 50 56 49 71 46 56 46 56 34 54 45 50 45 50 48 34 M 38 43 Z M 60 60 Z M 56 65 Q 57 66 56 67 55 66 56 65" />
    <path transform="translate(300 0)" fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 46 26 C 51 48 51 48 70 51 51 55 51 55 47 78 43 55 43 55 25 51 42 47 42 47 46 26 M 61 67 Z M 34 40 Q 32 41 32 38 34 38 34 40" />
    <path transform="translate(400 0)" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 44 28 43 15 M 73 50 82 49 M 47 67 48 82 M 26 51 13 52 M 61 69 Z M 23 36 Z" />
    <path transform="translate(500 0)" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M 43 17 42 13 M 83 48 88 47 M 50 82 51 87 M 12 53 6 54" />
</svg>`
};
