export default {
	percentage: `<svg style="display: block; color: hsl(215 40% 7%);" viewBox="-5 -7 30 14">
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="currentColor" stroke-dasharray="2%" x1="0" x2="20" />
    <text fill="currentColor" font-size="1.25" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        stroke-dasharray="<tspan font-weight="700">2%</tspan>"
    </text>
</svg>`,
	'percentage-width-1': `<svg style="display: block; color: hsl(215 40% 7%);" viewBox="-5 -7 30 14">
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2%" x1="0" x2="20" />
    <text fill="currentColor" font-size="1.25" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        stroke-width="<tspan font-weight="700">0.5</tspan>"
    </text>
</svg>`,
	'percentage-width-2': `<svg style="display: block; color: hsl(215 40% 7%);" viewBox="-5 -7 30 14">
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray="2%" x1="0" x2="20" />
    <text fill="currentColor" font-size="1.25" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        stroke-width="<tspan font-weight="700">5</tspan>"
    </text>
</svg>`,
	'percentage-length-1': `<svg style="display: block; color: hsl(215 40% 7%);" viewBox="-5 -7 30 14">
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="currentColor" stroke-dasharray="2%" x1="0" x2="20" />
    <text fill="currentColor" font-size="1.25" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        x2="<tspan font-weight="700">20</tspan>"
    </text>
</svg>`,
	'percentage-length-2': `<svg style="display: block; color: hsl(215 40% 7%);" viewBox="-5 -7 30 14">
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="currentColor" stroke-dasharray="2%" x1="0" x2="10" />
    <text fill="currentColor" font-size="1.25" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        x2="<tspan font-weight="700">10</tspan>"
    </text>
</svg>`,
	'relative-width-1': `<svg style="display: block; color: hsl(215 40% 7%);" viewBox="-5 -7 30 14" font-size="18">
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="currentColor" stroke-width="0.02em" stroke-dasharray="0.02em" x1="0" x2="20" />
    <text fill="currentColor" font-size="1.25" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        font-size="<tspan font-weight="700">18</tspan>"
    </text>
</svg>`,
	'relative-width-2': `<svg style="display: block; color: hsl(215 40% 7%);" viewBox="-5 -7 30 14" font-size="64">
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="currentColor" stroke-width="0.02em" stroke-dasharray="0.02em" x1="0" x2="20" />
    <text fill="currentColor" font-size="1.25" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        font-size="<tspan font-weight="700">64</tspan>"
    </text>
</svg>`,
	'relative-length-1': `<svg style="display: block; color: hsl(215 40% 7%);" viewBox="-5 -7 30 14">
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="currentColor" pathLength="1" stroke-dasharray="0.1 0.2" x1="0" x2="20" />
    <text fill="currentColor" font-size="1.25" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        x2="<tspan font-weight="700">20</tspan>"
    </text>
</svg>`,
	'relative-length-2': `<svg style="display: block; color: hsl(215 40% 7%);" viewBox="-5 -7 30 14">
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="currentColor" pathLength="1" stroke-dasharray="0.1 0.2" x1="0" x2="10" />
    <text fill="currentColor" font-size="1.25" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        x2="<tspan font-weight="700">10</tspan>"
    </text>
</svg>`,
	'normalized-diagonal': `<svg style="display: block; color: hsl(215 40% 7%);" viewBox="-2 -1 12 9.5">
    <rect fill="hsl(0 0% 90%)" x="-2" y="-1" width="12" height="9.5" />
    <g fill="none" stroke="currentColor">
        <rect width="4" height="3" stroke-width="0.05" pathLength="1" stroke-dasharray="0.01" />
        <path stroke-width="0.1" d="M 0 0 4 3" />
    </g>
    <g fill="currentColor" font-family="monospace">
        <g font-size="0.5">
            <text text-anchor="middle" x="2" y="-0.25">4</text>	
            <text x="4.25" y="1.6">3</text>	
        </g>
        <text transform="translate(2 4)" font-size="0.4">
            <tspan text-anchor="middle">(4 ** 2 + 3 ** 2) ** 0.5</tspan>
            <tspan text-anchor="middle" font-size="0.6" x="0" y="1.1">5</tspan>
        </text>
    </g>
    <g transform="translate(6.5 2)">
        <g fill="none" stroke="currentColor">
            <rect width="1" height="1" stroke-width="0.025" pathLength="1" stroke-dasharray="0.01" />
            <path stroke-width="0.05" d="M 0 0 1 1" />
        </g>
        <g fill="currentColor" font-family="monospace">
            <g font-size="0.4">
                <text text-anchor="middle" x="0.5" y="-0.2">1</text>	
                <text x="1.2" y="0.65">1</text>	
            </g>
            <text transform="translate(0.5 2)" font-size="0.4">
                <tspan text-anchor="middle">2 ** 0.5</tspan>
                <tspan text-anchor="middle" font-size="0.6" x="0" y="1.1">1.414</tspan>
            </text>
        </g>
    </g>
    <g transform="translate(4.5 7)">
        <ellipse transform="skewX(-10)" fill="none" stroke="currentColor" stroke-width="0.05" stroke-linecap="round" pathLength="1" stroke-dasharray="0.93 0.07" rx="1.9" ry="0.9" />
        <text fill="currentColor" font-size="0.9" font-family="monospace" font-weight="700" font-style="italic" text-anchor="middle" y="0.3">
            3.536
        </text>
    </g>
</svg>`
};
