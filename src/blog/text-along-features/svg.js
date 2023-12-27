export default {
	showcase: `<svg style="display: block;" viewBox="0 0 60 30">
    <defs>
        <path id="showcase-path" d="M 30 27.5 L -21 27.5 -21 15 A 15 10 0 0 0 9 15 L 15 15 A 15 10 0 0 0 45 15 L 51 15 A 15 10 0 0 0 81 15 L 81 27.5 30 27.5" />
        <clipPath id="showcase-clip">
            <use href="#showcase-path" />
        </clipPath>
    </defs>
    <rect fill="hsl(50 100% 93%)" width="60" height="30" />
    <circle fill="hsl(49 100% 80%)" cx="30" cy="30" r="25" />
    <g style="color: hsl(35 100% 47%);" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <path clip-path="url(#showcase-clip)" fill="none" stroke-width="0.2" d="M 0 0 0 30 M 3 0 3 30 M 6 0 6 30 M 18 0 18 30 M 21 0 21 30 M 24 0 24 30 M 27 0 27 30 M 30 0 30 30 M 33 0 33 30 M 36 0 36 30 M 39 0 39 30 M 42 0 42 30 M 54 0 54 30 M 57 0 57 30 M 60 0 60 30" />
        <use fill="none" stroke-width="0.5" href="#showcase-path" />
        <g id="showcase-pole" fill="currentColor">
            <path d="M 15 12.5 15.5 30 14.5 30 Z" />
            <path d="M 9 12.5 9.5 30 8.5 30 Z" />
            <path d="M 9 15 15 15" />
            <path d="M 9 20 15 20" />
        </g>
        <use x="36" href="#showcase-pole" />
        <path d="M 0 27.5 60 27.5" />
    </g>
    <text style="color: hsl(31 100% 35%);" fill="currentColor" stroke="currentColor" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round" dy="-1" font-size="3" font-family="monospace" font-weight="700">
        <textPath startOffset="50%" text-anchor="middle" letter-spacing="1" href="#showcase-path">
            Trail blazer 
        </textPath>
    </text>
</svg>`
};
