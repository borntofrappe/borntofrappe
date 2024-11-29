export default {
	'fe-tile': `<svg style="display: block;" viewBox="0 0 5 5">
    <title>A checkered pattern</title>
    <defs>
        <filter id="fe-tile-filter" x="0" y="0" width="1" height="1">
            <feTile width="5" height="5" />
        </filter>
    </defs>
    <g filter="url(#fe-tile-filter)">
        <g fill="hsl(0 0% 97%)">
            <rect x="0.5" width="0.5" height="0.5" />
            <rect y="0.5" width="0.5" height="0.5" />
        </g>
        <g fill="hsl(0 0% 70%)">
            <rect width="0.5" height="0.5" />
            <rect x="0.5" y="0.5" width="0.5" height="0.5" />
        </g>
    </g>
</svg>`,
	'pattern-squares': `<svg style="display: block;" viewBox="0 0 4 3" preserveAspectRatio="xMidYMid slice">
    <title>Expanding squares</title>
    <defs>
        <path id="squares-quarter" d="M 0 0 l 0 -0.5 -0.5 0 0 0.5 z m -4 -4 l 0.5 0 0 0.5 -0.5 0 m 4 1 l 0 -1 -1.5 0 0 1 -1 0 0 1 -1 0 0 1.5 1 0 0 -0.5 1 0 0 -1 1 0 0 -1 z" />
        <pattern id="squares-pattern" viewBox="0 0 8 8" width="0.5" height="0.5" patternUnits="userSpaceOnUse">
            <rect fill="hsl(0 0% 97%)" width="8" height="8" />
            <g fill="hsl(0 0% 70%)">
                <use href="#squares-quarter" transform="translate(4 4)" />
                <use href="#squares-quarter" transform="translate(4 4) rotate(90)" />
                <use href="#squares-quarter" transform="translate(4 4) rotate(180)" />
                <use href="#squares-quarter" transform="translate(4 4) rotate(270)" />
            </g>
        </pattern>
    </defs>
    <rect fill="url(#squares-pattern)" width="4" height="3" />
</svg>`,
	'pattern-cross-stitch': `<svg style="display: block;" viewBox="0 0 4 3" preserveAspectRatio="xMidYMid slice">
    <title>Cross-stitch sequence</title>
    <defs>
        <rect id="cross-stitch-corner" x="-0.05" y="-0.05" width="0.1" height="0.1" />
        <pattern id="cross-stitch-pattern" viewBox="0 0 1 1" width="1" height="1" patternUnits="userSpaceOnUse">
            <rect fill="hsl(0 0% 97%)" width="1" height="1" />
            <path fill="none" stroke="hsl(0 0% 70%)" stroke-width="0.01" stroke-dasharray="0.05" stroke-linecap="round" d="M 0 0.5 0.5 0 1 0.5 0.5 1 Z" />
            <g fill="hsl(0 0% 70%)">
                <use href="#cross-stitch-corner" x="0.5" />
                <use href="#cross-stitch-corner" y="0.5" />
                <use href="#cross-stitch-corner" x="1" y="0.5" />
                <use href="#cross-stitch-corner" x="0.5" y="1" />
            </g>
        </pattern>
    </defs>
    <rect fill="url(#cross-stitch-pattern)" width="4" height="3" />
</svg>`,
	'pattern-cubes': `<svg style="display: block;" viewBox="0 0 4 3" preserveAspectRatio="xMidYMid slice">
    <title>Three dimensional cubes</title>
    <defs>
        <pattern id="cubes-pattern" viewBox="0 0 1 1.5" width="1" height="1.5" patternUnits="userSpaceOnUse">
            <path fill="hsl(0 0% 60%)" d="M 0 0.25 0.5 0 1 0.25 0.5 0.5 Z M 0 0.75 0.5 1 0 1.25 Z M 0.5 1 1 0.75 1 1.25Z" />
            <path fill="hsl(0 0% 70%)" d="M 0 0 0.5 0 0 0.25 Z M 0.5 0.5 1 0.25 1 0.75 0.5 1 Z M 0 1.25 0.5 1 0.5 1.5 0 1.5 Z" />
            <path transform="translate(1 0) scale(-1 1)" fill="hsl(0 0% 97%)" d="M 0 0 0.5 0 0 0.25 Z M 0.5 0.5 1 0.25 1 0.75 0.5 1 Z M 0 1.25 0.5 1 0.5 1.5 0 1.5 Z" />
        </pattern>
    </defs>
    <rect fill="url(#cubes-pattern)" width="4" height="3" />
</svg>`,
	'pattern-rectangles': `<svg style="display: block;" viewBox="0 0 4 3" preserveAspectRatio="xMidYMid slice">
    <title>Marching rectangles</title>
    <defs>
        <pattern id="rectangles-pattern" viewBox="0 0 2 2" width="1" height="1" patternUnits="userSpaceOnUse">
            <rect fill="hsl(0 0% 97%)" width="2" height="2" />
            <path fill="none" stroke="hsl(0 0% 70%)" stroke-width="0.04" stroke-linecap="square" d="M 0 0 0.5 0.5 M 2 0 0.5 1.5 0 1 1 0 1.5 0.5 M 2 1 1.5 1.5 2 2 M 1 2 0.5 1.5 1 1 1.5 1.5 M 0 2 Z" />
        </pattern>
    </defs>
    <rect fill="url(#rectangles-pattern)" width="4" height="3" />
</svg>`,
	'pattern-stripes': `<svg style="display: block;" viewBox="0 0 4 3" preserveAspectRatio="xMidYMid slice">
    <title>Perpendicular stripes</title>
    <defs>
        <pattern id="stripes-pattern" viewBox="0 0 20 20" width="1" height="1" patternUnits="userSpaceOnUse">
            <g id="stripes-x">
                <path stroke="hsl(0 0% 70%)" transform="translate(0 0.5)" d="M 0 0 10 0 M 0 2 10 2 M 0 4 10 4 M 0 6 10 6 M 0 8 10 8" />
                <path stroke="hsl(0 0% 97%)" transform="translate(0 1.5)" d="M 0 0 10 0 M 0 2 10 2 M 0 4 10 4 M 0 6 10 6 M 0 8 10 8" />
            </g>
            <use href="#stripes-x" x="10" y="10" />
            <g id="stripes-y">
                <path stroke="hsl(0 0% 70%)" transform="translate(0.5 10)" d="M 0 0 0 10 M 2 0 2 10 M 4 0 4 10 M 6 0 6 10 M 8 0 8 10" />
                <path stroke="hsl(0 0% 97%)" transform="translate(1.5 10)" d="M 0 0 0 10 M 2 0 2 10 M 4 0 4 10 M 6 0 6 10 M 8 0 8 10" />
            </g>
            <use href="#stripes-y" x="10" y="-10" />
        </pattern>
    </defs>
    <rect fill="url(#stripes-pattern)" width="4" height="3" />
</svg>`,
	'pattern-zig-zag': `<svg style="display: block;" viewBox="0 0 4 3" preserveAspectRatio="xMidYMid slice">
    <title>Zig-zagging ribbons</title>
    <defs>
        <pattern id="pattern-zigzag" viewBox="0 0 1 1" width="0.5" height="0.5" patternUnits="userSpaceOnUse">
            <rect fill="hsl(0 0% 70%)" width="1" height="1" />
            <path fill="hsl(0 0% 97%)" d="M 0 0.35 0.5 0.15 1 0.35 1 0.85 0.5 0.65 0 0.85 " />
        </pattern>
    </defs>
    <rect fill="url(#pattern-zigzag)" width="4" height="3" />
</svg>`
};
