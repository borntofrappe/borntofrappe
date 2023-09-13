export default {
	'outline-filter': `<svg style="display: block;" viewBox="-2.5 -16.962017059326172 38.461490631103516 22.93290138244629">
    <defs>
        <filter id="outline-filter-filter">
            <feMorphology in="SourceGraphic" result="dilation" operator="dilate" radius="1" />
            <feFlood result="color" flood-color="hsl(0 0% 25%)" />
            <feComposite in="color" in2="dilation" operator="in" />
            <feComposite in2="SourceGraphic" operator="out" />
            <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
    <text filter="url(#outline-filter-filter)" fill="hsl(0 0% 99%)" font-family="sans-serif" font-size="16" font-weight="700">Tutti</text>
</svg>`,
	'outline-html': `<div>
    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
        <defs>
            <filter id="outline-html-filter">
                    <feMorphology in="SourceGraphic" result="dilation" operator="dilate" radius="4" />
                    <feFlood result="color" flood-color="hsl(0 0% 25%)" />
                    <feComposite in="color" in2="dilation" operator="in" />
                    <feComposite in2="SourceGraphic" operator="out" />
                    <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    </svg>
    <p style="filter: url(#outline-html-filter); color: hsl(0 0% 99%); font-family: sans-serif; font-size: 3rem; font-weight: 700;">
        On HTML element and even on longer sentences, daring to break in multiple rows.
    </p>
</div>`,
	'outline-stroke': `<svg style="display: block;" viewBox="-2.5 -16.962017059326172 83.21540832519531 22.93290138244629">
    <text fill="hsl(0 0% 99%)" stroke="hsl(0 0% 25%)" stroke-width="2" paint-order="stroke" font-family="sans-serif" font-size="16" font-weight="700">Sforzando</text>
</svg>`
};
