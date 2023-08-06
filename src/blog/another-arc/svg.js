export default {
	'treasure-chest': `<svg style="display: block;" viewBox="0 0 100 65">
    <title>A chest possibly packed with treasure</title>
    <path fill="hsl(10 34% 54%)" d="M 68 0 A 25 25 0 0 1 93 25 L 87 25 A 19 19 0 0 0 68 6 A 19 19 0 0 0 47 25 L 41 25 A 25 25 0 0 1 62 0" />
    <path fill="hsl(12 39% 63%)" d="M 65 3 A 22 22 0 0 1 87 25 L 57 25 A 22 22 0 0 0 35 3 Z" />
    <path fill="hsl(43 92% 67%)" d="M 25 0 L 32 0 A 25 25 0 0 1 57 25 L 93 25 A 25 25 0 0 0 68 0 L 75 0 A 25 25 0 0 1 100 25 L 100 32 L 50 32 L 50 25 A 25 25 0 0 0 25 0" />
    <path fill="hsl(34 72% 48%)" d="M 6 25 L 50 25 L 50 32 0 32 L 0 25 A 25 25 0 0 1 50 25 L 44 25 A 18.5 18.5 0 0 0 7 25 Z" />
    <path fill="hsl(10 43% 43%)" d="M 44 25 A 18.5 18.5 0 0 0 7 25 Z" />
    <path fill="hsl(8 48% 39%)" d="M 9 25 L 7 25 A 18.5 18.5 0 0 1 25.5 6.5 A 12.5 18.5 0 0 0 13 25" />
    <path fill="hsl(10 34% 54%)" d="M 2 32 L 98 32 L 98 35 L 2 35 Z" />
    <path fill="hsl(8 48% 39%)" d="M 2 32 L 48 32 L 48 35 L 2 35 Z" />
    <path fill="hsl(34 72% 48%)" d="M 7 42 L 44 42 L 44 58 L 7 58 L 7 35 L 0 35 L 0 65 L 50 65 L 50 35 L 7 35 Z" />
    <path fill="hsl(10 43% 43%)" d="M 7 42 L 44 42 L 44 58 L 7 58 L 7 35 Z" />
    <path fill="hsl(8 48% 39%)" d="M 7 42 L 13 42 L 13 58 L 7 58" />
    <path fill="hsl(43 92% 67%)" d="M 57 42 L 94 42 L 94 58 L 57 58 L 57 35 L 50 35 L 50 65 L 57 65 L 100 65 L 100 35 L 57 35 Z" />
    <path fill="hsl(12 39% 63%)" d="M 57 42 L 94 42 L 94 58 L 57 58 L 57 35 Z" />
    <path fill="hsl(10 34% 54%)" d="M 88 42 L 94 42 L 94 58 L 88 58" />
</svg>`,
	'arc-svg': `<svg role="img" style="display: block;" viewBox="-25 -5 102.98924255371094 50.8607063293457">
    <title>Arc syntax in SVG</title>
    <g transform="translate(0 10)">
    <ellipse opacity="0.1" fill="currentColor" rx="20" ry="10" />
        <g fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1">
            <path d="M 0 0 L 0 -10" />
            <path d="M 0 0 L 20 0" />
        </g>
        <path fill="currentColor" d="M -1.2 0 L 0 -1.2 L 1.2 0 L 0 1.2" />

        <g fill="currentColor" font-family="monospace">
            <text transform="translate(0 -5)" text-anchor="end" font-size="3" x="-1.5" y="1">ry</text>
            <text transform="translate(10 0)" text-anchor="middle" font-size="3" y="3.5">rx</text>
            <text transform="translate(20 0)" font-size="3" y="5">(x, y)</text>
        </g>
    </g>

    <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 10 0 0 1 20 10" />
    <circle fill="currentColor" transform="translate(20 10)" r="1.25" />

    <text transform="translate(40 5)" fill="currentColor" font-family="monospace" font-weight="700" font-size="4" y="1.5">
        <tspan>A</tspan>
        <tspan x="0" y="7">rx ry</tspan>
        <tspan x="0" y="14">angle</tspan>
        <tspan x="0" y="21">large-arc-flag</tspan>
        <tspan x="0" y="28">sweep-flag</tspan>
        <tspan x="0" y="35">x y</tspan>
    </text>
</svg>`,
	'arc-zdog': `<svg role="img" style="display: block;" viewBox="-18.18852424621582 -10.869019508361816 115.77202606201172 63.7297248840332">
    <title>Arc syntax in Zdog</title>
    <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 10 0 0 1 20 10" />
    <path fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1" d="M 0 0 L 20 0 L 20 10" />
    <g fill="currentColor">
    <circle r="1.25" />
    <circle transform="translate(20 0)" r="1" />
    <circle transform="translate(20 10)" r="1.25" />
    </g>

    <g fill="currentColor" font-family="monospace">
    <text text-anchor="end" font-size="3" y="-3">(x1, y1)</text>
    <text transform="translate(20 0)" font-size="3" x="2" y="0.8">(xc, yc)</text>
    <text transform="translate(20 10)" font-size="3" y="5">(x2, y2)</text>
    </g>

    <text transform="translate(45 5)" fill="currentColor" font-family="monospace" font-weight="700" font-size="4" y="1.5">
        <tspan>arc: [</tspan>
        <tspan x="4" y="7">&#123; x: x1, y: y1 &#125;,</tspan>
        <tspan x="4" y="14">[</tspan>
        <tspan x="8" y="21">&#123; x: xc, y: yc &#125;,</tspan>
        <tspan x="8" y="28">&#123; x: x2, y: y2 &#125;,</tspan>
        <tspan x="4" y="35">]</tspan>
        <tspan x="0" y="42">]</tspan>
    </text>
</svg>`,
	'arcs-zdog': `<svg role="img" style="display: block;" viewBox="-26 -5 96.880859375 61">
    <title>Arcs in Zdog</title>
    <g>
        <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 10 0 0 0 20 10" />
        <path fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1" d="M 0 0 L 0 10 L 20 10" />
        <g fill="currentColor">
            <circle transform="translate(0 10)" r="1" />
            <circle transform="translate(20 10)" r="1.25" />
        </g>
        <text fill="currentColor" font-family="monospace" transform="translate(35 5)" font-weight="700" font-size="4" y="1">sweep-flag</text>
    </g>
    <g transform="translate(0 30)">
        <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 10 0 1 0 20 10" />
        <g fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1">
            <path d="M 0 0 L -20 0 L -20 10" />
            <path d="M -20 10 L -20 20 L 0 20" />
            <path d="M 0 20 L 20 20 L 20 10" />
        </g>

        <g fill="currentColor">
            <circle transform="translate(-20 0)" r="1" />
            <circle transform="translate(-20 20)" r="1" />
            <circle transform="translate(20 20)" r="1" />
            <circle transform="translate(20 10)" r="1.25" />
        </g>
        <text fill="currentColor" font-family="monospace" transform="translate(35 10)" font-weight="700" font-size="4" y="1">large-arc-flag</text>
    </g>
</svg>`
};
