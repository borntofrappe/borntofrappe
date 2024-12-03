export default {
	'fallback-values': `<svg style="display: block;" viewBox="0 0 2.2 1">
    <title>Fallback images and colors</title>
    <defs>
        <linearGradient id="gradient-sky" x1="1" y1="0" x2="0.2" y2="1">
            <stop stop-color="hsl(225 100% 93%)" offset="0" />
            <stop stop-color="hsl(228 100% 86%)" offset="1" />
        </linearGradient>
        <radialGradient id="gradient-sun" cx="0.7" cy="0.3">
            <stop stop-color="hsl(47 100% 62%)" offset="0" />
            <stop stop-color="hsl(45 97% 54%)" offset="1" />
        </radialGradient>
        <linearGradient id="gradient-mountain" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop stop-color="hsl(161 79% 95%)" offset="0" />
            <stop stop-color="hsl(162 82% 40%)" offset="0.2" />
            <stop stop-color="hsl(162 88% 30%)" offset="1" />
        </linearGradient>
    </defs>
    <svg width="1" height="1" viewBox="-10 -10 20 20">
        <rect fill="url(#gradient-sky) hsl(210 14% 83%)" x="-10" y="-10" width="20" height="20" rx="2" />
        <circle fill="url(#gradient-sun) hsl(210 17% 98%)" cx="3.5" cy="-6" r="2.5" />
        <path fill="url(#gradient-mountain) hsl(210 17% 98%)" stroke="url(#gradient-mountain) hsl(210 17% 98%)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M -8 6 A 2 2 0 0 0 -6 8 L 6 8 A 2 2 0 0 0 8 6 L 8 3 5 0 2 3 -3 -2 -8 3Z" />
    </svg>
    <svg x="1.2" width="1" height="1" viewBox="-10 -10 20 20">
        <rect fill="url(#fallback-gradient-sky) hsl(210 14% 83%)" x="-10" y="-10" width="20" height="20" rx="2" />
        <circle fill="url(#fallback-gradient-sun) hsl(210 17% 98%)" cx="3.5" cy="-6" r="2.5" />
        <path fill="url(#fallback-gradient-mountain) hsl(210 17% 98%)" stroke="url(#fallback-gradient-mountain) hsl(210 17% 98%)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M -8 6 A 2 2 0 0 0 -6 8 L 6 8 A 2 2 0 0 0 8 6 L 8 3 5 0 2 3 -3 -2 -8 3Z" />
    </svg>
</svg>`
};
