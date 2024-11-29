export default {
	'cest-time-zone': `<svg style="display: block;" viewBox="-50 -50 100 100">
    <defs>
        <filter id="light-filter">
            <feDiffuseLighting lighting-color="hsl(0 0% 100%)">
                <fePointLight x="50" y="-50" z="2" />
            </feDiffuseLighting>
            <feComposite in2="SourceGraphic" operator="in" />
            <feBlend in2="SourceGraphic" mode="screen" />
        </filter>
        <radialGradient id="light-gradient" fx="0.7" fy="0.3">
            <stop stop-color="hsl(0 0% 100%)" stop-opacity="0.2" offset="0.6" />
            <stop stop-color="hsl(0 0% 100%)" stop-opacity="0" offset="1" />
        </radialGradient>
    </defs>
    <g filter="url(#light-filter)">
        <circle fill="hsl(280 5% 88%)" stroke="hsl(264 2% 43%)" stroke-width="10" r="45" />
        <path opacity="0.4" fill="hsl(341 80% 56%)" d="M 0 0 -28.284 -28.284 A 40 40 0 0 1 10.352 -38.637 Z" />
        <g fill="none" stroke-width="6" stroke-linecap="round">
            <path stroke="hsl(341 80% 56%)" d="M 0 0 6.470 -24.148" />	
            <path stroke="hsl(255 32% 25%)" d="M 0 0 -17.677 -17.677" />	
        </g>
        <circle fill="url(#light-gradient)" r="50" />
        <circle fill="hsl(270 8% 62%)" r="7" />
        <circle fill="url(#light-gradient)" r="7" />
    </g>
</svg>`
};
