export default {
	'user-space-on-use': `<svg style="display: block;" viewBox="-61.5 -66 203 107.5">
    <title>Circles slightly offset</title>
    <defs>
        <filter id="user-space-on-use-filter" width="240%">
            <feOffset dx="1" />
            <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
    <circle filter="url(#user-space-on-use-filter)" fill="hsl(0 0% 99%)" stroke="hsl(0 0% 20%)" stroke-width="3" r="40" />
    <text fill="currentColor" font-size="10" font-family="monospace" text-anchor="middle" x="40" y="-53">&lt;feOffset <tspan font-weight="700">dx="1"</tspan> /&gt;</text>
</svg>`,
	'object-bounding-box': `<svg style="display: block;" viewBox="-71.5 -66 223 107.5">
    <title>Circles clearly offset</title>
    <defs>
        <filter id="object-bounding-box-filter" x="-0.2" width="2.4" filterUnits="objectBoundingBox" primitiveUnits="objectBoundingBox">
            <feOffset dx="1" />
            <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
    <circle filter="url(#object-bounding-box-filter)" fill="hsl(0 0% 99%)" stroke="hsl(0 0% 20%)" stroke-width="3" r="40" />
    <text fill="currentColor" font-size="10" font-family="monospace" text-anchor="middle" x="40" y="-53">primitiveUnits="<tspan font-weight="700">objectBoundingBox</tspan>"</text>
</svg>`
};
