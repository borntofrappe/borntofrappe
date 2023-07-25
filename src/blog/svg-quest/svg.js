export default {
	magnemite: `<svg style="display: block;" viewBox="0 0 100 100">
    <title>Magnemite</title>
    <defs>
        <clipPath id="clip-entry">
            <rect width="100" height="100" rx="8" />
        </clipPath>
    </defs>
    <g clip-path="url(#clip-entry)">
        <rect fill="hsl(195 36% 78%)" width="100" height="100" />
        <rect fill="hsl(216 45% 98%)" x="25" y="12" width="50" height="50" />
        <rect fill="hsl(300 1% 37%)" x="47" y="33.5" width="6" height="6" />
        <g transform="translate(8 68)">
            <rect fill="hsl(300 2% 79%)" width="20" height="20" />
            <g fill="hsl(0 1% 55%)">
                <rect x="7" y="2" width="6" height="16" />	
                <rect x="2" y="7" width="16" height="6" />	
            </g>
        </g>
        <g transform="translate(72 68)">
            <rect fill="hsl(300 2% 79%)" width="20" height="20" />
            <g fill="hsl(0 1% 55%)">
                <rect x="7" y="2" width="6" height="16" />	
                <rect x="2" y="7" width="16" height="6" />	
            </g>
        </g>
    </g>
</svg>`,
	magneton: `<svg style="display: block;" viewBox="0 0 100 100">
    <title>Magneton</title>
    <defs>
        <clipPath id="clip-entry">
            <rect width="100" height="100" rx="8" />
        </clipPath>
        <symbol id="magnemite" viewBox="0 0 100 100">
            <title>Magnemite</title>
            <rect fill="hsl(195 36% 78%)" width="100" height="100" />
            <rect fill="hsl(216 45% 98%)" x="25" y="12" width="50" height="50" />
            <rect fill="hsl(300 1% 37%)" x="47" y="33.5" width="6" height="6" />
            <g transform="translate(8 68)">
                <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                <g fill="hsl(0 1% 55%)">
                    <rect x="7" y="2" width="6" height="16" />	
                    <rect x="2" y="7" width="16" height="6" />	
                </g>
            </g>
            <g transform="translate(72 68)">
                <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                <g fill="hsl(0 1% 55%)">
                    <rect x="7" y="2" width="6" height="16" />	
                    <rect x="2" y="7" width="16" height="6" />	
                </g>
            </g>
        </symbol>
    </defs>
    <g clip-path="url(#clip-entry)">
        <rect fill="hsl(44 100% 68%)" width="100" height="100" />
        <use href="#magnemite" x="25" width="50" height="50" />
        <use href="#magnemite" y="50" width="50" height="50" />
        <use href="#magnemite" x="50" y="50" width="50" height="50" />
    </g>
</svg>`
};
