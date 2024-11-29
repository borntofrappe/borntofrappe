export default {
	stroke: `<svg style="display: block;" viewBox="-5 -7 30 14">
    <defs>
        <linearGradient id="stroke-gradient">
            <stop stop-color="hsl(188 100% 50%)" offset="0" />
            <stop stop-color="hsl(276 100% 46%)" offset="1" />
        </linearGradient>
    </defs>	
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="url(#stroke-gradient)" x1="0" x2="20" />
    <text fill="hsl(215 40% 7%)" font-size="1.75" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        stroke
    </text>
</svg>`,
	fallback: `<svg style="display: block;" viewBox="-5 -7 30 14">
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="url(#fallback-gradient) hsl(215 40% 7%)" x1="0" x2="20" />
    <text fill="hsl(215 40% 7%)" font-size="1.75" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        fallback
    </text>
</svg>`,
	'user-space-on-use': `<svg style="display: block;" viewBox="-5 -7 30 14">
    <defs>
        <linearGradient id="user-space-on-use-gradient" gradientUnits="userSpaceOnUse" x1="0" x2="20">
            <stop stop-color="hsl(188 100% 50%)" offset="0" />
            <stop stop-color="hsl(276 100% 46%)" offset="1" />
        </linearGradient>
    </defs>
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <line fill="none" stroke="url(#user-space-on-use-gradient)" x1="0" x2="20" />
    <text fill="hsl(215 40% 7%)" font-size="1.75" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        userSpaceOnUse
    </text>
</svg>`
};
