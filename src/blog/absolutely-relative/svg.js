export default {
	'absolute-relative-art': `<svg style="display: block;" viewBox="-4 -4 28 27">
    <title>Absolute and relative art</title>
    <rect fill="hsl(213 15% 12%)" x="-4" y="-4" width="28" height="27" />
    <svg width="10" height="8" viewBox="0 0 10 8">
        <title>Absolute triangle</title>
        <path fill="hsl(33 75% 65%)" d="M 0 0 L 10 0 L 10 8" />
    </svg>
    <svg y="11" width="20" height="8" viewBox="0 0 20 8">
        <title>Relative triangle</title>
        <path fill="hsl(205 30% 48%)" d="M 0 0 l 10 0 l 10 8" />
    </svg>
</svg>`,
	'abstract-art': `<svg style="display: block;" viewBox="0 0 12 8">
    <title>Abstract art</title>
    <rect fill="hsl(213 15% 12%)" width="12" height="8" />
    <g transform="translate(1 0)">
        <svg width="4" height="4" viewBox="-20 -20 40 40">
            <title>Absolute and relative cubic bezier curves</title>
            <path fill="hsl(33 75% 65%)" d="M -20 0 C -10 -20 -10 20 -0 0 S 10 20 20 0" />
            <path fill="hsl(205 30% 48%)" d="M -20 0 c -10 -20 -10 20 -0 0 s 10 20 20 0" />
        </svg>
    </g>
    <g transform="translate(4 4)">
        <svg width="4" height="4" viewBox="-20 -20 40 40">
            <title>Absolute and relative arcs</title>
            <path fill="hsl(33 75% 65%)" d="M 0 0 A 10 10 0 0 0 20 0 A 10 10 0 0 0 -20 0" />
            <path fill="hsl(3 72% 59%)" d="M 0 0 a 10 10 0 0 0 20 0 a 10 10 0 0 0 -20 0" />
        </svg>
    </g>
    <g transform="translate(8 1)">
        <svg width="4" height="4" viewBox="-20 -20 40 40">
            <title>Absolute and relative quadratic bezier curves</title>
            <path fill="hsl(33 75% 65%)" d="M 0 -20 Q -20 -10 0 0 T 0 20" />
            <path fill="hsl(205 30% 48%)" d="m 0 -20 q -20 -10 0 0 t 0 20" />
        </svg>
    </g>
</svg>`
};
