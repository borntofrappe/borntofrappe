export default {
	'filter-background': `<svg style="display: block;" viewBox="-0.5 -0.5 100 21">
    <defs>
        <filter id="filter-background" x="0" y="0" width="1" height="1">
            <feFlood flood-color="var(--flood-color, transparent)" />
            <feComposite in="SourceGraphic" />
        </filter>
    </defs>
    <g fill="var(--flood-color, currentColor)" stroke="var(--fill-color, currentColor)" stroke-linejoin="round" stroke-linecap="round">
        <path stroke="none" d="M 0 2 0 5 A 1 1 0 0 0 1 6 L 15.25 6 15.25 2 M 16 2 16 6 L 19 6 A 1 1 0 0 0 20 5 L 20 2" />
        <path d="M 5 9.5 5 18 L 14 14 14 9.5" />
        <path fill="none" d="M 0 0 0 5 A 1 1 0 0 0 1 6 L 19 6 A 1 1 0 0 0 20 5 L 20 0 M 2 6 2 8.5 A 1 1 0 0 0 3 9.5 L 17 9.5 A 1 1 0 0 0 18 8.5 L 18 6" />
    </g>
    <text filter="url(#filter-background)" fill="var(--fill-color, currentColor)" font-size="10" font-family="serif" font-style="italic" font-weight="700" x="25" y="17">
        Highlight text
    </text>
</svg>`
};
