export default {
	defs: `<svg aria-hidden="true" width="0" height="0" style="inline-size: 0; block-size: 0; position: absolute;">
    <defs>
        <path id="console-arrow" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M -1 -0.5 1 -0.5 0 0.5 Z" />
        <linearGradient id="console-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="30">
            <stop stop-color="black" stop-opacity="0" offset="0.55" />
            <stop stop-color="black" stop-opacity="0.1" offset="0.55" />
        </linearGradient>
    </defs>
</svg>`,
	'console-inspector-template': `<svg style="display: block;" viewBox="0 0 100 62">
    <rect fill="hsl(249 11% 12%)" width="100" height="62" rx="5" />
    <path fill="hsl(249 8% 17%)" d="M 0 12 0 5 A 5 5 0 0 1 5 0 L 95 0 A 5 5 0 0 1 100 5 L 100 12" />
    <path fill="hsl(249 11% 12%)" d="M 22 12 A 2 2 0 0 0 24 10 L 24 5 A 2 2 0 0 1 26 3 L 62 3 A 2 2 0 0 1 64 5 L 64 10 A 2 2 0 0 0 66 12" />
    <g transform="translate(6 6)">
        <circle fill="hsl(3 100% 68%)" r="1.75" />
        <circle fill="hsl(41 99% 60%)" cx="6" r="1.75" />
        <circle fill="hsl(129 62% 49%)" cx="12" r="1.75" />
    </g>
    <g transform="translate(30 8)" fill="none" stroke="hsl(0 0% 94%)">
        <rect stroke-width="0.75" x="-1.75" y="-1.75" width="3.5" height="3.5" rx="0.5" />
        <path stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" d="M 0 -1.75 0 -2.75 M 1.75 0 2.75 0 M 0 1.75 0 2.75 M -1.75 0 -2.75 0" />
    </g>
    <use transform="translate(6.5 20)" fill="hsl(0 0% 94%)" stroke="hsl(0 0% 94%)" href="#console-arrow" />
    <g font-family="monospace" font-weight="700">
        <text fill="hsl(258 97% 74%)" font-size="3.25" x="35" y="9">Inspector</text>
        <g fill="hsl(0 0% 94%)" font-size="3.75">
            <text x="10" y="21">&lt;<tspan fill="hsl(195 74% 71%)">template</tspan>&gt;</text>
            <text x="16" y="29">&lt;slot name="title"&gt;<tspan dx="1" dy="-0.8">...</tspan><tspan dx="1" dy="0.8">&lt;/slot&gt;</tspan></text>
            <text x="16" y="37">&lt;svg&gt;<tspan dx="1" dy="-0.8">...</tspan><tspan dx="1" dy="0.8">&lt;/svg&gt;</tspan></text>
            <text x="16" y="45">&lt;slot name="description"&gt;<tspan dx="1" dy="-0.8">...</tspan><tspan dx="1" dy="0.8">&lt;/slot&gt;</tspan></text>
            <text x="10" y="53">&lt;/<tspan fill="hsl(195 74% 71%)">template</tspan>&gt;</text>
        </g>
    </g>
    <rect style="pointer-events: none;" fill="url(#console-gradient)" width="100" height="62" rx="5" />
</svg>`,
	'console-inspector-element': `<svg style="display: block;" viewBox="0 0 100 54">
    <rect fill="hsl(249 11% 12%)" width="100" height="54" rx="5" />
    <path fill="hsl(249 8% 17%)" d="M 0 12 0 5 A 5 5 0 0 1 5 0 L 95 0 A 5 5 0 0 1 100 5 L 100 12" />
    <path fill="hsl(249 11% 12%)" d="M 22 12 A 2 2 0 0 0 24 10 L 24 5 A 2 2 0 0 1 26 3 L 62 3 A 2 2 0 0 1 64 5 L 64 10 A 2 2 0 0 0 66 12" />
    <g transform="translate(6 6)">
        <circle fill="hsl(3 100% 68%)" r="1.75" />
        <circle fill="hsl(41 99% 60%)" cx="6" r="1.75" />
        <circle fill="hsl(129 62% 49%)" cx="12" r="1.75" />
    </g>
    <g transform="translate(30 8)" fill="none" stroke="hsl(0 0% 94%)">
        <rect stroke-width="0.75" x="-1.75" y="-1.75" width="3.5" height="3.5" rx="0.5" />
        <path stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" d="M 0 -1.75 0 -2.75 M 1.75 0 2.75 0 M 0 1.75 0 2.75 M -1.75 0 -2.75 0" />
    </g>
    <use transform="translate(6.5 20)" fill="hsl(0 0% 94%)" stroke="hsl(0 0% 94%)" href="#console-arrow" />
    <g font-family="monospace" font-weight="700">
        <text fill="hsl(258 97% 74%)" font-size="3.25" x="35" y="9">Inspector</text>
        <g fill="hsl(0 0% 94%)" font-size="3.75">
            <text x="10" y="21">&lt;<tspan fill="hsl(195 74% 71%)">quick-review</tspan>&gt;</text>
            <text x="16" y="29">&lt;h2 slot="title"&gt;<tspan dx="1" dy="-0.8">...</tspan><tspan dx="1" dy="0.8">&lt;/h2&gt;</tspan></text>
            <text x="16" y="37">&lt;p slot="description"&gt;<tspan dx="1" dy="-0.8">...</tspan><tspan dx="1" dy="0.8">&lt;/p&gt;</tspan></text>
            <text x="10" y="45">&lt;/<tspan fill="hsl(195 74% 71%)">quick-review</tspan>&gt;</text>
        </g>
    </g>
    <rect style="pointer-events: none;" fill="url(#console-gradient)" width="100" height="54" rx="5" />
</svg>`
};
