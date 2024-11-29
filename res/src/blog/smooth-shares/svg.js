export default {
	'spread-method': `<svg style="display: block;" viewBox="-0.5 -0.45 2 1.4">
    <defs>
        <linearGradient id="spread-method" x1="0.25" x2="0.75">
            <stop stop-color="hsl(58 100% 61%)" offset="0" />
            <stop stop-color="hsl(303 56% 53%)" offset="1" />
        </linearGradient>
    </defs>
    <rect fill="hsl(0 0% 90%)" x="-0.5" y="-0.45" width="2" height="1.4" />
    <rect fill="url(#spread-method)" width="1" height="0.7" />
    <g fill="none" stroke="hsl(215 40% 7%)" stroke-width="0.01">
        <path d="M 0.25 0 V -0.05" />
        <path d="M 0.75 0 V -0.05" />
    </g>
    <g fill="hsl(215 40% 7%)" font-size="0.1" font-weight="700" font-family="monospace" text-anchor="middle">
        <text x="0.25" y="-0.075">0.25</text>
        <text x="0.75" y="-0.075">0.75</text>
    </g>
    <rect fill="hsl(58 100% 61%)" y="-0.145" width="0.075" height="0.075" />
    <rect fill="hsl(303 56% 53%)" x="0.925" y="-0.145" width="0.075" height="0.075" />
</svg>`,
	'spread-methods': `<svg style="display: block;" viewBox="-0.2 -0.2 2.6 1.9">
    <rect fill="hsl(0 0% 90%)" x="-0.2" y="-0.2" width="2.6" height="1.9" />
    <svg width="1" height="1" viewBox="-50 -50 100 100">
        <defs>
            <path id="spread-methods-repeat-path" d="M -50 20 C -25 0 25 0 50 20" />
            <radialGradient id="spread-methods-repeat-gradient" spreadMethod="repeat" r="0.1">
                <stop stop-color="hsl(160 80% 68%)" offset="0" />
                <stop stop-color="hsl(152 57% 53%)" offset="1" />
            </radialGradient>
        </defs>
        <circle fill="url(#spread-methods-repeat-gradient)" r="50" />
        <circle fill="hsl(149 32% 15%)" r="20" />
        <text fill="hsl(150 23% 97%)" stroke="hsl(150 26% 7%)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" paint-order="stroke" letter-spacing="2" font-family="serif" font-size="20" text-anchor="middle">
            <textPath startOffset="50%" href="#spread-methods-repeat-path">
                repeat
            </textPath>
        </text>
    </svg>
    <svg x="1.2" y="0.5" width="1" height="1" viewBox="-50 -50 100 100">
        <defs>
            <radialGradient id="spread-methods-reflect-gradient" spreadMethod="reflect" r="0.1">
                <stop stop-color="hsl(193 98% 52%)" offset="0" />
                <stop stop-color="hsl(182 72% 59%)" offset="1" />
            </radialGradient>
            <filter id="spread-methods-reflect-filter">
                <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="2" />
                <feDisplacementMap scale="10" />
                <feComposite in="SourceGraphic" operator="in" />
            </filter>
        </defs>
        <circle fill="url(#spread-methods-reflect-gradient)" r="50" />
        <text filter="url(#spread-methods-reflect-filter)" fill="hsl(215 33% 97%)" stroke="hsl(215 40% 7%)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" paint-order="stroke" letter-spacing="2" font-family="serif" font-size="20" text-anchor="middle" y="20">
            reflect
        </text>
    </svg>
</svg>`
};
