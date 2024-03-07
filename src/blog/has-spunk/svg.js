export default {
	smiley: `<svg style="display: block;" viewBox="-50 -50 100 100">
    <defs>
        <g id="smiley-eye">
            <ellipse fill="hsl(34 69% 15%)" rx="7" ry="8" />
            <ellipse fill="hsl(36 60% 34%)" cx="-2" cy="-3" rx="2" ry="2.2" />
        </g>
    </defs>
    <circle fill="hsl(47 94% 57%)" r="50" />
    <use transform="translate(-17 -11)" href="#smiley-eye" />
    <use transform="translate(17 -11)" href="#smiley-eye" />
    <path transform="translate(0 14)" fill="none" stroke="hsl(34 69% 15%)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M -20 0 A 40 40 0 0 0 20 0 28 28 0 0 1 -20 0" />
</svg>`,
	'smiley-ne': `<svg style="display: block;" viewBox="-50 -50 100 100">
    <defs>
        <g id="smiley-eye">
            <ellipse fill="hsl(34 69% 15%)" rx="7" ry="8" />
            <ellipse fill="hsl(36 60% 34%)" cx="-2" cy="-3" rx="2" ry="2.2" />
        </g>
    </defs>
    <circle fill="hsl(47 94% 57%)" r="50" />
    <g transform="rotate(45) translate(0 -12) rotate(-45)">
        <use transform="translate(-17 -11)" href="#smiley-eye" />
        <use transform="translate(17 -11)" href="#smiley-eye" />
        <path transform="translate(0 14)" fill="none" stroke="hsl(34 69% 15%)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M -20 0 A 40 40 0 0 0 20 0 28 28 0 0 1 -20 0" />
    </g>
</svg>`
};
