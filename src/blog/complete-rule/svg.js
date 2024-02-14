export default {
	'line-markers': `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
    <defs>
        <marker id="line-marker-start" viewBox="-1 -1 2 2" markerWidth="4" markerHeight="4">
            <circle fill="currentColor" r="1" />
        </marker>
        <marker id="line-marker-end" viewBox="-1.3 -1.3 2.6 2.6" markerWidth="6" markerHeight="6" orient="auto">
            <path fill="currentColor" stroke="currentColor" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round" d="M -0.4 -1 1.4 0 -0.4 1 Z" />
        </marker>
    </defs>
</svg>`,
	'winding-clockwise': `<svg role="img" style="display: block;" viewBox="0 0 2.1 1">
    <svg width="1" height="1" viewBox="-2 -2 24 24">
        <path fill="none" stroke="currentColor" stroke-width="0.1" d="M 10 0 20 10 10 20 0 10 Z M 10 5 15 10 10 15 5 10 Z" />
        <g fill="currentColor" font-family="monospace" font-size="1.5" text-anchor="middle">
            <text transform="translate(10 0)" y="-0.7">1</text>
            <text transform="translate(20 10)" x="0.8" y="0.45">2</text>
            <text transform="translate(10 20)" y="1.5">3</text>
            <text transform="translate(0 10)" x="-0.8" y="0.45">4</text>
            <text transform="translate(10 5)" y="-0.7">5</text>
            <text transform="translate(15 10)" x="0.8" y="0.45">6</text>
            <text transform="translate(10 15)" y="1.5">7</text>
            <text transform="translate(5 10)" x="-0.8" y="0.45">8</text>
        </g>
        <g fill="currentColor">
            <circle transform="translate(10 0)" r="0.3" />
            <g marker-start="url(#line-marker-start)" marker-end="url(#line-marker-end)" fill="none" stroke="currentColor" stroke-width="0.15" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 10 0 15 5" />
                <path d="M 10 5 12.5 7.5" />
            </g>
        </g>
    </svg>
    <svg x="1.1" width="1" height="1" viewBox="-2 -2 24 24">
        <path fill="currentColor" d="M 10 0 20 10 10 20 0 10 Z M 10 5 15 10 10 15 5 10 Z" />
    </svg>
</svg>`,
	'algorithm-clockwise': `<svg role="img" style="display: block;" viewBox="-2 -2 24 24">
    <g fill="none" stroke="currentColor" stroke-width="0.1">
        <rect width="20" height="20" />
        <path d="M 10 0 20 10 10 20 0 10 Z M 10 5 15 10 10 15 5 10 Z" />
    </g>
    <g fill="currentColor" font-family="monospace" font-size="1.5" text-anchor="middle">
        <text transform="translate(3 4)">0</text>
        <text transform="translate(3 17)">0</text>
        <text transform="translate(17 4)">0</text>
        <text transform="translate(17 17)">0</text>
        <text transform="translate(6 7)">1</text>
        <text transform="translate(10 10.5)">2</text>
        <g font-weight="700" font-size="2">
            <text transform="translate(10 -0.75)">+</text>
            <text transform="translate(10 4.25)">+</text>
        </g>
    </g>
    <g fill="currentColor">
        <circle transform="translate(10 0)" r="0.3" />
        <g marker-start="url(#line-marker-start)" marker-end="url(#line-marker-end)" fill="none" stroke="currentColor" stroke-width="0.15" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 10 0 15 5" />
            <path d="M 10 5 12.5 7.5" />
        </g>
    </g>
</svg>`,
	'fill-rules': `<svg role="img" style="display: block;" viewBox="0 0 2.1 1.2">
    <svg width="1" height="1" viewBox="0 0 20 20">
        <path fill="currentColor" d="M 10 0 20 10 10 20 0 10 Z M 10 5 15 10 10 15 5 10 Z" />
    </svg>
    <svg x="1.1" width="1" height="1" viewBox="0 0 20 20">
        <path fill="currentColor" fill-rule="evenodd" d="M 10 0 20 10 10 20 0 10 Z M 10 5 15 10 10 15 5 10 Z" />
    </svg>
    <g transform="translate(0 1)" fill="currentColor" font-family="monospace" font-size="0.1" text-anchor="middle">
        <text x="0.5" y="0.15">nonzero</text>
        <text transform="translate(1.1 0)" x="0.5" y="0.15">evenodd</text>
    </g>
</svg>`,
	'winding-counter-clockwise': `<svg role="img" style="display: block;" viewBox="0 0 2.1 1">
    <svg width="1" height="1" viewBox="-2 -2 24 24">
        <path fill="none" stroke="currentColor" stroke-width="0.1" d="M 10 0 20 10 10 20 0 10 Z M 10 5 5 10 10 15 15 10 Z" />
        <g fill="currentColor" font-family="monospace" font-size="1.5" text-anchor="middle">
            <text transform="translate(10 0)" y="-0.7">1</text>
            <text transform="translate(20 10)" x="0.8" y="0.45">2</text>
            <text transform="translate(10 20)" y="1.5">3</text>
            <text transform="translate(0 10)" x="-0.8" y="0.45">4</text>
            <text transform="translate(10 5)" y="-0.7">5</text>
            <text transform="translate(5 10)" x="-0.8" y="0.45">6</text>
            <text transform="translate(10 15)" y="1.5">7</text>
            <text transform="translate(15 10)" x="0.8" y="0.45">8</text>
        </g>
        <g fill="currentColor">
            <circle transform="translate(10 0)" r="0.3" />
            <g marker-start="url(#line-marker-start)" marker-end="url(#line-marker-end)" fill="none" stroke="currentColor" stroke-width="0.15" stroke-linecap="round" stroke-linejoin="round">
                <path d="M 10 0 15 5" />
                <path d="M 10 5 7.5 7.5" />
            </g>
        </g>
    </svg>
    <svg x="1.1" width="1" height="1" viewBox="-2 -2 24 24">
        <path fill="currentColor" d="M 10 0 20 10 10 20 0 10 Z M 10 5 5 10 10 15 15 10 Z" />
    </svg>
</svg>`,
	'algorithm-counter-clockwise': `<svg role="img" style="display: block;" viewBox="-2 -2 24 24">
    <g fill="none" stroke="currentColor" stroke-width="0.1">
        <rect width="20" height="20" />
        <path d="M 10 0 20 10 10 20 0 10 Z M 10 5 15 10 10 15 5 10 Z" />
    </g>
    <g fill="currentColor" font-family="monospace" font-size="1.5" text-anchor="middle">
        <text transform="translate(3 4)">0</text>
        <text transform="translate(3 17)">0</text>
        <text transform="translate(17 4)">0</text>
        <text transform="translate(17 17)">0</text>
        <text transform="translate(6 7)">1</text>
        <text transform="translate(10 10.5)">0</text>
        <g font-weight="700" font-size="2">
            <text transform="translate(10 -0.75)">+</text>
            <text transform="translate(10 4.25)">-</text>
        </g>
    </g>
    <g fill="currentColor">
        <circle transform="translate(10 0)" r="0.3" />
        <g marker-start="url(#line-marker-start)" marker-end="url(#line-marker-end)" fill="none" stroke="currentColor" stroke-width="0.15" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 10 0 15 5" />
            <path d="M 10 5 7.5 7.5" />
        </g>
    </g>
</svg>`
};
