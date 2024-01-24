export default {
	stroke: `<svg style="display: block;" viewBox="-5 -7 30 14">
    <defs>
        <linearGradient id="stroke-gradient">
            <stop stop-color="hsl(188 100% 50%)" offset="0" />
            <stop stop-color="hsl(276 100% 46%)" offset="1" />
        </linearGradient>
    </defs>	
    <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
    <path fill="none" stroke="url(#stroke-gradient)" d="M 0 0 H 20" />
    <text fill="hsl(215 40% 7%)" font-size="1.75" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
        stroke
    </text>
</svg>`,
	'stroke-fixes': `<svg style="display: block;" viewBox="0 0 30 29">
    <svg viewBox="-5 -7 30 14" width="30" height="14">
        <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
        <path fill="none" stroke="url(#fallback-gradient) hsl(215 40% 7%)" d="M 0 0 H 20" />
        <text fill="hsl(215 40% 7%)" font-size="1.75" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
            fallback
        </text>
    </svg>
    <svg viewBox="-5 -7 30 14" y="15" width="30" height="14">
        <defs>
            <linearGradient id="user-space-on-use-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="20" y2="0">
                <stop stop-color="hsl(188 100% 50%)" offset="0" />
                <stop stop-color="hsl(276 100% 46%)" offset="1" />
            </linearGradient>
        </defs>
        <rect fill="hsl(0 0% 90%)" x="-5" y="-7" width="30" height="14" />
        <path fill="none" stroke="url(#user-space-on-use-gradient)" d="M 0 0 H 20" />
        <text fill="hsl(215 40% 7%)" font-size="1.75" font-family="monospace" font-style="italic" x="23.5" y="5.5" text-anchor="end">
            userSpaceOnUse
        </text>
    </svg>
</svg>
`
};
