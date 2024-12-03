export default {
	'arc-zdog': `<svg role="img" style="display: block;" viewBox="-18.19130516052246 -10.73276948928833 119.77091217041016 63.82587814331055">
    <title>Arc syntax in Zdog</title>
    <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 20 0 0 1 20 20" />
    <path fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1" d="M 0 0 L 20 0 L 20 20" />
    <g fill="currentColor">
        <circle r="1.25" />
        <circle transform="translate(20 0)" r="1" />
        <circle transform="translate(20 20)" r="1.25" />
    </g>
    <g fill="currentColor" font-family="monospace">
        <text text-anchor="end" font-size="3" y="-3">(x1, y1)</text>
        <text transform="translate(20 0)" font-size="3" x="2" y="0.8">(xc, yc)</text>
        <text transform="translate(20 10)" font-size="3" y="5">(x2, y2)</text>
    </g>
    <text transform="translate(45 5)" fill="currentColor" font-family="monospace" font-weight="700" font-size="4" y="1.5">
        <tspan x="0">&#123; x: x1, y: y1 &#125;,</tspan>
        <tspan x="0" y="7">&#123;</tspan>
        <tspan x="8" y="14">arc: [</tspan>
        <tspan x="12" y="21">&#123; x: xc, y: yc &#125;,</tspan>
        <tspan x="12" y="28">&#123; x: x2, y: y2 &#125;,</tspan>
        <tspan x="8" y="35">]</tspan>
        <tspan x="0" y="42">&#125;</tspan>
    </text>
</svg>`,
	'bezier-zdog': `<svg role="img" style="display: block;" viewBox="-23.48536491394043 -10.706281661987305 129.46849060058594 70.67281341552734">
    <title>Bezier syntax in Zdog</title>
    <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 C 0 10 20 10 20 20" />
    <path fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1" d="M 0 0 L 0 10 M 20 20 20 10" />
    <g fill="currentColor">
        <circle r="1.25" />
        <circle transform="translate(0 10)" r="1" />
        <circle transform="translate(20 10)" r="1" />
        <circle transform="translate(20 20)" r="1.25" />
    </g>
    <g fill="currentColor" font-family="monospace">
        <text text-anchor="end" font-size="3" y="-3">(x1, y1)</text>
        <text transform="translate(0 10)" text-anchor="end" font-size="3" x="-2" y="3">(xc1, yc1)</text>
        <text transform="translate(20 10)" font-size="3" x="2" y="0">(xc2, yc2)</text>
        <text transform="translate(20 20)" font-size="3" y="5">(x2, y2)</text>
    </g>
    <text transform="translate(45 5)" fill="currentColor" font-family="monospace" font-weight="700" font-size="4" y="1.5">
        <tspan x="0">&#123; x: x1, y: y1 &#125;,</tspan>
        <tspan x="0" y="7">&#123;</tspan>
        <tspan x="8" y="14">bezier: [</tspan>
        <tspan x="12" y="21">&#123; x: xc1, y: yc1 &#125;,</tspan>
        <tspan x="12" y="28">&#123; x: xc2, y: yc2 &#125;,</tspan>
        <tspan x="12" y="35">&#123; x: x2, y: y2 &#125;,</tspan>
        <tspan x="8" y="42">]</tspan>
        <tspan x="0" y="49">&#125;</tspan>
    </text>
</svg>`
};
