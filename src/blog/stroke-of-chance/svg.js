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
</svg>`
};
