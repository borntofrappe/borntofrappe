export default {
	'diamond-tile': `<svg style="display: block:" viewBox="0 0 1 1">
    <title>Diamond tile</title>
    <rect fill="hsl(0 0% 90%)" width="1" height="1" />
    <path fill="hsl(0 0% 30%)" d="M 0.5 0.2 0.8 0.5 0.5 0.8 0.2 0.5 Z" />
</svg>`,
	'diamond-pattern': `<svg style="display: block:" viewBox="0 0 100 100">
    <title>Diamond pattern</title>
    <defs>
        <pattern id="diamond-pattern" width="0.2" height="0.2" viewBox="0 0 1 1">
            <rect fill="hsl(0 0% 90%)" width="1" height="1" />
            <path fill="hsl(0 0% 30%)" d="M 0.5 0.2 0.8 0.5 0.5 0.8 0.2 0.5 Z" />
        </pattern>
    </defs>
    <rect fill="url(#diamond-pattern)" width="100" height="100" />
</svg>`,
	'repeated-tile': `<svg style="display: block:" viewBox="0 0 1 1">
    <title>Tile repeated with offsets</title>
    <rect fill="hsl(0 0% 90%)" width="1" height="1" />
    <path id="repeated-tile" fill="hsl(0 0% 30%)" d="M 0.5 0.2 0.8 0.5 0.5 0.8 0.2 0.5 Z" />
    <use x="-0.5" y="-0.5" href="#repeated-tile" />
    <use x="0.5" y="-0.5" href="#repeated-tile" />
    <use x="0.5" y="0.5" href="#repeated-tile" />
    <use x="-0.5" y="0.5" href="#repeated-tile" />
</svg>`,
	'transform-pattern': `<svg style="display: block:" viewBox="0 0 100 100">
    <title>Rotated diamond pattern</title>
    <defs>
        <pattern id="transform-pattern" width="0.2" height="0.2" viewBox="0 0 1 1" patternTransform="rotate(45)">
            <rect fill="hsl(0 0% 90%)" width="1" height="1" />
            <path fill="hsl(0 0% 30%)" d="M 0.5 0.2 0.8 0.5 0.5 0.8 0.2 0.5 Z" />
        </pattern>
    </defs>
    <rect fill="url(#transform-pattern)" width="100" height="100" />
</svg>`,
	'transform-tile': `<svg style="display: block:" viewBox="0 0 1 1">
    <title>Rotated diamond — a square</title>
    <rect fill="hsl(0 0% 90%)" width="1" height="1" />
    <path transform="rotate(45, 0.5 0.5)" fill="hsl(0 0% 30%)" d="M 0.5 0.2 0.8 0.5 0.5 0.8 0.2 0.5 Z" />
</svg>`,
	'diagonal-pattern': `<svg style="display: block:" viewBox="0 0 100 100">
    <title>Diagonal diamond pattern</title>
    <defs>
        <pattern id="diagonal-pattern" width="0.2" height="0.2" viewBox="0 0 1 1" patternTransform="rotate(45)">
        <rect fill="hsl(0 0% 90%)" width="1" height="1" />
        <path transform="rotate(-45, 0.5 0.5)" fill="hsl(0 0% 30%)" d="M 0.5 0.2 0.8 0.5 0.5 0.8 0.2 0.5 Z" />
        </pattern>
    </defs>
    <rect fill="url(#diagonal-pattern)" width="100" height="100" />
</svg>`,
	'gaps-tile': `<svg style="display: block:" viewBox="0 0 1 1">
    <title>Rotated diamond with gaps</title>
    <g transform="rotate(45, 0.5 0.5)">
        <rect fill="hsl(0 0% 90%)" width="1" height="1" />
        <path fill="hsl(0 0% 30%)" d="M 0.5 0.2 0.8 0.5 0.5 0.8 0.2 0.5 Z" />
    </g>
</svg>`,
	'gaps-pattern': `<svg style="display: block:" viewBox="0 0 100 100">
    <title>Diagonal diamond pattern with gaps</title>
    <defs>
        <pattern id="gaps-pattern" width="0.2" height="0.2" viewBox="0 0 1 1" patternTransform="rotate(45)">
            <g transform="rotate(-45, 0.5 0.5)">
                <rect fill="hsl(0 0% 90%)" width="1" height="1" />
                <path fill="hsl(0 0% 30%)" d="M 0.5 0.2 0.8 0.5 0.5 0.8 0.2 0.5 Z" />
            </g>
        </pattern>
    </defs>
    <rect fill="url(#gaps-pattern)" width="100" height="100" />
</svg>`
};
