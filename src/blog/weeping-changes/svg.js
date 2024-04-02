export default {
	'cest-time-zone': `<svg style="display: block;" viewBox="-50 -50 100 100">
    <defs>
        <linearGradient id="clock-gradient-red" x1="0" y1="-50" x2="0" y2="50" gradientUnits="userSpaceOnUse">
            <stop stop-color="hsl(341 80% 56%)" offset="0" />
            <stop stop-color="hsl(338 70% 48%)" offset="1" />
        </linearGradient>
        <linearGradient id="clock-gradient-blue" x1="0" y1="-50" x2="0" y2="50" gradientUnits="userSpaceOnUse">
            <stop stop-color="hsl(255 32% 25%)" offset="0" />
            <stop stop-color="hsl(231 44% 21%)" offset="1" />
        </linearGradient>
        <linearGradient id="clock-gradient-ring" x1="-50" y1="50" x2="50" y2="-50" gradientUnits="userSpaceOnUse">
            <stop stop-color="hsl(270 4% 44%)" offset="0" />
            <stop stop-color="hsl(280 1% 51%)" offset="1" />
        </linearGradient>
        <linearGradient id="clock-gradient-display" x1="-50" y1="50" x2="50" y2="-50" gradientUnits="userSpaceOnUse">
            <stop stop-color="hsl(280 5% 88%)" offset="0" />
            <stop stop-color="hsl(276 5% 80%)" offset="1" />
        </linearGradient>
        <radialGradient id="clock-gradient-hinge">
            <stop stop-color="hsl(270 5% 77%)" offset="0" />
            <stop stop-color="hsl(270 4% 71%)" offset="0.7" />
            <stop stop-color="hsl(270 8% 62%)" offset="1" />
        </radialGradient>
    </defs>
    <circle fill="url(#clock-gradient-display) hsl(280 5% 88%)" stroke="url(#clock-gradient-ring) #6d6b70" stroke-width="10" r="45" />
    <path opacity="0.4" fill="hsl(341 80% 56%)" d="M 0 0 -28.284 -28.284 A 40 40 0 0 1 10.352 -38.637 Z" />	
    <g fill="none" stroke-width="6" stroke-linecap="round">
        <path stroke="url(#clock-gradient-red) hsl(341 80% 56%)" d="M 0 0 6.470 -24.148" />	
        <path stroke="url(#clock-gradient-blue) hsl(255 32% 25%)" d="M 0 0 -17.677 -17.677" />	
    </g>
    <circle fill="url(#clock-gradient-hinge) hsl(270 8% 62%)" r="7" />
</svg>`
};
