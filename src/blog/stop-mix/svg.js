export default {
	offset: `<svg style="display: block;" viewBox="0 0 2.15 1.25">
    <defs>
        <linearGradient id="offset-gradient">
            <stop stop-color="orange" offset="0" />
            <stop stop-color="yellow" offset="1" />
        </linearGradient>
        <linearGradient id="offset-gradient-mix">
            <stop stop-color="yellow" offset="1" />
            <stop stop-color="orange" offset="0" />
        </linearGradient>
    </defs>
    <rect fill="url(#offset-gradient)" width="1" height="1" />
    <rect x="1.15" fill="url(#offset-gradient-mix)" width="1" height="1" />
    <g transform="translate(0 1.1)" fill="currentColor" font-family="monospace" font-size="0.05">
        <text transform="translate(0.5 0)" text-anchor="middle">
            <tspan>stop-color="orange" offset="<tspan font-weight="700">0</tspan>"</tspan><tspan x="0" y="0.1">stop-color="yellow" offset="<tspan font-weight="700">1</tspan>"</tspan>
        </text>
        <text transform="translate(1.65 0)" text-anchor="middle">
            <tspan>stop-color="yellow" offset="<tspan font-weight="700">1</tspan>"</tspan><tspan x="0" y="0.1">stop-color="orange" offset="<tspan font-weight="700">0</tspan>"</tspan>
        </text>
    </g>
</svg>`
};
