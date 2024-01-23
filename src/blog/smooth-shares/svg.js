export default {
	'spread-methods': `<svg style="display: block;" viewBox="-0.2 -0.2 2.6 1.9">
    <rect x="-0.2" y="-0.2" width="2.6" height="1.9" fill="hsl(0 0% 90%)" />
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
        <text fill="hsl(150, 23%, 97%)" stroke="hsl(150 26% 7%)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" paint-order="stroke" letter-spacing="2" font-family="serif" font-size="20" text-anchor="middle">
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
        <text filter="url(#spread-methods-reflect-filter)" fill="hsl(215, 33%, 97%)" stroke="hsl(215, 40%, 7%)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" paint-order="stroke" letter-spacing="2" font-family="serif" font-size="20" text-anchor="middle" y="20">
            reflect
        </text>
    </svg>
</svg>`
};
