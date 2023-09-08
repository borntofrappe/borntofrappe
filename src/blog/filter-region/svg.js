export default {
	'filter-blur': `<svg style="display: block;" viewBox="0 0 2.4 1.3">
    <title>A blurred circle</title>
    <svg width="1" height="1" viewBox="-50 -50 100 100">
        <circle fill="hsl(36 99% 65%)" stroke="hsl(228 6% 16%)" stroke-width="3" r="40" />
    </svg>
    <g transform="translate(1.25 0.3)">
        <svg width="1" height="1" viewBox="-50 -50 100 100">
            <defs>
                <filter id="filter-blur-filter">
                    <feGaussianBlur stdDeviation="2" />
                </filter>
            </defs>
            <g filter="url(#filter-blur-filter)">
                <circle fill="hsl(36 99% 65%)" stroke="hsl(228 6% 16%)" stroke-width="3" r="40" />
            </g>
        </svg>
        <text fill="currentColor" font-size="0.1" font-family="monospace" text-anchor="middle" x="0.5" y="-0.02">filter="<tspan font-weight="700">url(#blur)</tspan>"</text>
    </g>
</svg>`,
	'filter-region': `<svg style="display: block;" viewBox="0 0 2.4 1.3">
    <title>Parts of a blurred circle</title>
    <svg width="1" height="1" viewBox="-50 -50 100 100">
        <defs>
            <filter id="filter-region-blur">
                <feGaussianBlur stdDeviation="2" />
            </filter>
        </defs>
        <g filter="url(#filter-region-blur)">
            <circle fill="hsl(36 99% 65%)" stroke="hsl(228 6% 16%)" stroke-width="3" r="40" />
        </g>
    </svg>
    <g transform="translate(1.25 0.3)">
        <svg width="1" height="1" viewBox="-50 -50 100 100">
            <defs>
                <filter id="filter-region-filter" x="0.35">
                    <feGaussianBlur stdDeviation="2" />
                </filter>
            </defs>
            <g filter="url(#filter-region-filter)">
                <circle fill="hsl(36 99% 65%)" stroke="hsl(228 6% 16%)" stroke-width="3" r="40" />
            </g>
        </svg>
        <text fill="currentColor" font-size="0.1" font-family="monospace" text-anchor="middle">
            <tspan x="0.5" y="-0.15">filter="#blur"</tspan>
            <tspan x="0.5" y="-0.02" font-weight="700">x="0.35"</tspan>
        </text>
    </g>
</svg>`
};
