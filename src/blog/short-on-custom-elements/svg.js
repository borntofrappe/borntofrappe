export default {
	'console-dom-exception': `<svg style="display: block;" viewBox="0 0 100 54">
    <defs>
        <path id="console-details" fill-rule="evenodd" d="M 2 0 A 2 2 0 0 0 -2 0 A 2 2 0 0 0 2 0 M 0.4 -0.4 0.4 -0.9 A 0.4 0.4 0 0 0 -0.4 -0.9 L -0.4 -0.4 -0.9 -0.4 A 0.4 0.4 0 0 0 -0.9 0.4 L -0.4 0.4 -0.4 0.9 A 0.4 0.4 0 0 0 0.4 0.9 L 0.4 0.4 0.9 0.4 A 0.4 0.4 0 0 0 0.9 -0.4 Z" />
        <linearGradient id="console-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="30">
            <stop stop-color="black" stop-opacity="0" offset="0.55" />
            <stop stop-color="black" stop-opacity="0.1" offset="0.55" />
        </linearGradient>
    </defs>
    <rect fill="hsl(249 11% 12%)" width="100" height="54" rx="5" />
    <path fill="hsl(249 8% 17%)" d="M 0 12 0 5 A 5 5 0 0 1 5 0 L 95 0 A 5 5 0 0 1 100 5 L 100 12" />
    <path fill="hsl(249 11% 12%)" d="M 22 12 A 2 2 0 0 0 24 10 L 24 5 A 2 2 0 0 1 26 3 L 62 3 A 2 2 0 0 1 64 5 L 64 10 A 2 2 0 0 0 66 12" />
    <g transform="translate(6 6)">
        <circle fill="hsl(3 100% 68%)" r="1.75" />
        <circle fill="hsl(41 99% 60%)" cx="6" r="1.75" />
        <circle fill="hsl(129 62% 49%)" cx="12" r="1.75" />
    </g>
    <g transform="translate(30 8)" fill="none" stroke="hsl(0 0% 94%)">
        <rect stroke-width="0.75" x="-2" y="-2" width="4" height="4" rx="0.5" />
        <path stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" d="M -0.75 -0.75 0 0 -0.75 0.75" />
    </g>
    <use fill="hsl(3 100% 68%)" transform="translate(6 20) rotate(45)" href="#console-details" />
    <g font-family="monospace" font-weight="700">
        <text fill="hsl(258 97% 74%)" font-size="3.25" x="35" y="9">Console</text>
        <g fill="hsl(0 0% 94%)">
            <text fill="hsl(3 100% 68%)" font-size="3.75" x="10" y="21">DOMException</text>
            <g transform="translate(10 2)" font-size="3.25">
                <text y="29">Failed to execute 'define' on</text>
                <text y="37">'CustomElementRegistry'</text>
                <text y="45">"g" is an HTMLUnknownElement</text>
            </g>
        </g>
    </g>
    <rect style="pointer-events: none;" fill="url(#console-gradient)" width="100" height="54" rx="5" />
</svg>`
};
