export default {
	'abstract-art': `<svg role="img" style="display: block;" viewBox="0 0 100 75">
    <title>Abstract art</title>
    <defs>
        <pattern id="abstract-art-pattern" viewBox="0 0 2 2" patternUnits="userSpaceOnUse" width="1" height="1">
            <rect fill="hsl(0 0% 89%)" width="2" height="2" />
            <rect fill="hsl(0 0% 90%)" width="1" height="1" />
            <rect fill="hsl(0 0% 88%)" y="1" width="1" height="1" />
        </pattern>
    </defs>
    <g stroke-linecap="round">
        <rect fill="url(#abstract-art-pattern)" width="100" height="75" />
        <path fill="none" stroke="hsl(0 93% 71%)" stroke-width="4" d="M 7 7 96 7 M 5 13 65 13 M 16 20 80 20 M 31 26 94 26 M 4 32 72 32 M 23 38 91 38 " />
        <path fill="none" stroke="hsl(208 54% 49%)" stroke-width="5" d="M 4 46 94 46 M 9 54 93 54 M 5 62 90 62 M 11 69 90 69" />
        <g style="color: hsl(63 91% 54%)">
            <circle fill="currentColor" cx="50" cy="25" r="9" />
            <path opacity="0.9" fill="none" stroke="currentColor" stroke-width="3" d="M 43 46 54 46 M 38 52 58 52 M 37 57 61 57 M 34 62 64 62 M 29 68 70 68" />
        </g>
    </g>
</svg>`,
	'filter-art': `<svg role="img" style="display: block;" viewBox="0 0 4.8 3.8">
    <title>Filter art</title>
    <defs>
        <pattern id="filter-art-pattern" viewBox="0 0 2 2" patternUnits="userSpaceOnUse" width="1" height="1">
            <rect fill="hsl(0 0% 89%)" width="2" height="2" />
            <rect fill="hsl(0 0% 90%)" width="1" height="1" />
            <rect fill="hsl(0 0% 88%)" y="1" width="1" height="1" />
        </pattern>
        <linearGradient id="filter-art-gradient" spreadMethod="reflect" y1="0" y2="0.5" x1="0.5" x2="0.5" >
            <stop stop-color="hsl(22 62% 18%)" offset="0" />
            <stop stop-color="hsl(20 60% 21%)" offset="0.48" />
            <stop stop-color="hsl(22 62% 18%)" offset="0.6" />
            <stop stop-color="hsl(21 51% 27%)" offset="1" />
        </linearGradient>
        <filter id="filter-art-filter">
            <feTurbulence baseFrequency="0.05" numOctaves="4" />
            <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
    </defs>
    <rect fill="none" stroke="hsl(0 0% 08%)" stroke-width="0.4" x="0.2" y="0.2" width="4.4" height="3.4" />
    <g fill="url(#filter-art-gradient)">
        <path d="M 0 0 0.4 0.4 4.4 0.4 4.8 0" />
        <path transform="translate(4.8 0) rotate(90)" d="M 0 0 0.4 0.4 3.4 0.4 3.8 0" />
        <path transform="translate(0 3.8) rotate(270)" d="M 0 0 0.4 0.4 3.4 0.4 3.8 0" />
        <path transform="translate(4.8 3.8) rotate(180)"d="M 0 0 0.4 0.4 4.4 0.4 4.8 0" />
    </g>
    <g transform="translate(0.4 0.4)">
        <svg viewBox="0 0 100 75" width="4" height="3">
            <g stroke-linecap="round">
                <rect fill="url(#filter-art-pattern)" width="100" height="75" />
                <g filter="url(#filter-art-filter)">
                    <path fill="none" stroke="hsl(0 93% 71%)" stroke-width="4" d="M 7 7 96 7 M 5 13 65 13 M 16 20 80 20 M 31 26 94 26 M 4 32 72 32 M 23 38 91 38 " />
                    <path fill="none" stroke="hsl(208 54% 49%)" stroke-width="5" d="M 4 46 94 46 M 9 54 93 54 M 5 62 90 62 M 11 69 90 69" />
                    <g style="color: hsl(63 91% 54%);">
                        <circle fill="currentColor" cx="50" cy="25" r="9" />
                        <path opacity="0.9" fill="none" stroke="currentColor" stroke-width="3" d="M 43 46 54 46 M 38 52 58 52 M 37 57 61 57 M 34 62 64 62 M 29 68 70 68" />
                    </g>
                </g>
            </g>
        </svg>
    </g>
</svg>`
};
