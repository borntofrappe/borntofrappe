export default {
	crt: `<svg style="display: block;" viewBox="-0.15 -0.15 1.3 1.3">
    <title>CRT display</title>
    <defs>
        <linearGradient id="crt-gradient-screen" x1="0" x2="0" y1="0" y2="0.05" gradientUnits="userSpaceOnUse" spreadMethod="repeat">
            <stop stop-color="hsl(120 6% 15%)" offset="0.5" />
            <stop stop-color="hsl(0 0% 13%)" offset="0.5" />
        </linearGradient>
        <linearGradient id="crt-gradient-display" x1="0" x2="0" y1="0" y2="0.05" gradientUnits="userSpaceOnUse" spreadMethod="repeat">
            <stop stop-color="hsl(122 31% 40%)" offset="0.5" />
            <stop stop-color="hsl(122 24% 28%)" offset="0.5" />
        </linearGradient>
        <clipPath id="crt-clip">
            <path d="M 0 0 1 0 1 0.55 0.425 0.55 0.425 0.6 0 0.6" />
        </clipPath>
    </defs>
    <path fill="hsl(48 15% 65%)" stroke="hsl(48 15% 65%)" stroke-width="0.05" stroke-linecap="round" stroke-linejoin="round" d="M -0.1 -0.1 C 0 -0.12 1 -0.12 1.1 -0.1 C 1.12 0 1.12 1 1.1 1.1 C 1 1.12 0 1.12 -0.1 1.1 C -0.12 1 -0.12 0 -0.1 -0.1 Z" />
    <rect fill="hsl(180 2% 9%)" width="1" height="1" />
    <path fill="hsl(51 17% 71%)" d="M 1 0 1.03 -0.03 1.03 1.03 -0.03 1.03 0 1 1 1" />
    <path fill="hsl(47 8% 53%)" d="M 1 0 1.03 -0.03 -0.03 -0.03 -0.03 1.03 0 1 0 0" />
    <g clip-path="url(#crt-clip)">
        <rect fill="url(#crt-gradient-screen) hsl(120 6% 15%)" width="1" height="1" />
        <g fill="url(#crt-gradient-display) hsl(122 31% 40%)" transform="translate(0.05 0.35)">
            <path d="M 0.3 0 0.15 0 A 0.15 0.15 0 0 0 0.15 0.3 L 0.2 0.3 0.25 0.2 0.15 0.2 A 0.05 0.05 0 0 1 0.15 0.1 L 0.25 0.1" />
            <path transform="translate(0.3 0)" d="M 0.05 0 0.175 0 A 0.0875 0.0875 0 0 1 0.175 0.175 L 0.175 0.15 0.175 0.125 A 0.075 0.075 0 0 1 0.25 0.2 L 0.25 0.3 0 0.3 0 0.1" />
            <path transform="translate(0.6 0)" d="M 0.05 0 0.3 0 0.3 0.1 0.2 0.1 0.2 0.2 0.15 0.3 0.1 0.3 0.1 0.1 0 0.1" />
        </g>
    </g>
</svg>`,
	points: `<svg style="display: block;" viewBox="-50 -50 100 100">
    <title>A striped star</title>
    <defs>
        <linearGradient id="points-gradient-backdrop" x1="0" x2="0" y1="0" y2="2.5" gradientUnits="userSpaceOnUse" spreadMethod="repeat">
            <stop stop-color="hsl(120 6% 15%)" offset="0.5" />
            <stop stop-color="hsl(0 0% 13%)" offset="0.5" />
        </linearGradient>
        <linearGradient id="points-gradient-star" x1="0" x2="0" y1="0" y2="2.5" gradientUnits="userSpaceOnUse" spreadMethod="repeat">
            <stop stop-color="hsl(31 100% 35%)" offset="0.5" />
            <stop stop-color="hsl(31 100% 20%)" offset="0.5" />
        </linearGradient>
    </defs>
    <circle fill="hsl(48 15% 65%)" r="50" />
    <g transform="rotate(45)">
        <path fill="hsl(47 8% 53%)" d="M 0 -46 0 -43 A 43 43 0 0 1 0 43 L 0 46 A 46 46 0 0 1 0 -46" />
        <path fill="hsl(51 17% 71%)" d="M 0 -46 0 -43 A 43 43 0 0 0 0 43 L 0 46 A 46 46 0 0 0 0 -46" />
    </g>
    <circle fill="url(#points-gradient-backdrop) hsl(120 6% 15%)" r="43" />
    <path fill="url(#points-gradient-star) hsl(31 100% 35%)" id="points-gradient-half" d="M 0 14-17 22 -14 4-27 -9 -9 -12-0 -28" />
    <use transform="scale(-1 1)" href="#points-gradient-half" />
</svg>`
};
