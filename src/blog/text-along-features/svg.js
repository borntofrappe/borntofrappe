export default {
	'text-textPath': `<svg style="display: block;" viewBox="8.401213645935059 5.7715654373168945 76.59878540039062 55.02155685424805">
    <g fill="none" stroke="currentColor" stroke-width="0.3" stroke-dasharray="0.5 1.5">
        <path d="M 8.401213645935059 20 20 20 M 20 5.7715654373168945 20 20" />
        <path id="text-textPath-path" d="M 40 50 80 40" />
    </g>
    <g fill="currentColor">
        <circle cx="20" cy="20" r="0.7" />
        <circle cx="40" cy="50" r="0.7" />
    </g>
    <g fill="currentColor" font-size="3.5" font-family="monospace">
        <text text-anchor="middle" x="20" y="25">(x, y)</text>
        <text dy="5">
            <textPath href="#text-textPath-path">
                &lt;path /&gt;
            </textPath>
        </text>
    </g>
    <g fill="currentColor" font-size="10" font-family="monospace">
        <text x="20" y="20">
            Hike
        </text>
        <text>
            <textPath href="#text-textPath-path">
                Climb
            </textPath>
        </text>
    </g>
</svg>`,
	'textPath-shape': `<svg style="display: block;" viewBox="7.5 -0.7789987325668335 43.27900314331055 43.27899932861328">
    <!-- <rect id="textPath-shape-path" fill="none" stroke="currentColor" stroke-width="0.3" stroke-dasharray="0.5 1.5" x="10" y="10" width="30" height="30" /> -->
    <path id="textPath-shape-path" fill="none" stroke="currentColor" stroke-width="0.3" stroke-dasharray="0.5 1.5" d="M 10 10 H 40 V 40 H 10 Z" />
    <text fill="currentColor" font-size="9" font-family="monospace">
        <textPath href="#textPath-shape-path">
            Shape walker
        </textPath>
    </text>
</svg>`,
	'textPath-side': `<svg style="display: block;" viewBox="0 0 2 1">
    <svg width="1" height="1" viewBox="0 0 57.96246337890625 57.94722366333008">
        <path id="textPath-side-path" fill="none" stroke="currentColor" stroke-width="0.3" stroke-dasharray="0.8 1.6" d="M 45 25 A 20 20 0 0 1 5 25 20 20 0 0 1 45 25" />
        <text fill="currentColor" font-size="9" font-family="monospace">
            <textPath href="#textPath-side-path">
                Outside track
            </textPath>
        </text>
    </svg>
    <svg x="1" width="1" height="1" viewBox="0 0 57.96246337890625 57.94722366333008">
        <path id="textPath-side-right-path" fill="none" stroke="currentColor" stroke-width="0.3" stroke-dasharray="0.8 1.6" d="M 45 25 A 20 20 0 0 0 5 25 20 20 0 0 0 45 25" />
            <!-- <text fill="currentColor" font-size="9" font-family="monospace">
                <textPath side="right" href="#textPath-side-path">
                    Inside view
                </textPath>
            </text> -->
        <text fill="currentColor" font-size="9" font-family="monospace">
            <textPath href="#textPath-side-right-path">
                Inside view
            </textPath>
        </text>
    </svg>
</svg>`,
	'textPath-showcase': `<svg style="display: block;" viewBox="0 0 60 30">
    <defs>
        <path id="textPath-showcase-path" d="M 30 27.5 L -21 27.5 -21 15 A 15 10 0 0 0 9 15 L 15 15 A 15 10 0 0 0 45 15 L 51 15 A 15 10 0 0 0 81 15 L 81 27.5 30 27.5" />
        <clipPath id="textPath-showcase-clip">
            <use href="#textPath-showcase-path" />
        </clipPath>
    </defs>
    <rect fill="hsl(50 100% 93%)" width="60" height="30" />
    <circle fill="hsl(49 100% 80%)" cx="30" cy="30" r="25" />
    <g style="color: hsl(35 100% 47%);" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <path clip-path="url(#textPath-showcase-clip)" fill="none" stroke-width="0.2" d="M 0 0 0 30 M 3 0 3 30 M 6 0 6 30 M 18 0 18 30 M 21 0 21 30 M 24 0 24 30 M 27 0 27 30 M 30 0 30 30 M 33 0 33 30 M 36 0 36 30 M 39 0 39 30 M 42 0 42 30 M 54 0 54 30 M 57 0 57 30 M 60 0 60 30" />
        <use fill="none" stroke-width="0.5" href="#textPath-showcase-path" />
        <g id="textPath-showcase-pole" fill="currentColor">
            <path d="M 15 12.5 15.5 30 14.5 30 Z" />
            <path d="M 9 12.5 9.5 30 8.5 30 Z" />
            <path d="M 9 15 15 15" />
            <path d="M 9 20 15 20" />
        </g>
        <use x="36" href="#textPath-showcase-pole" />
        <path d="M 0 27.5 60 27.5" />
    </g>
    <text style="color: hsl(31 100% 35%);" fill="currentColor" dy="-1" font-size="3" font-family="monospace" font-weight="700">
        <textPath startOffset="50%" text-anchor="middle" letter-spacing="1" href="#textPath-showcase-path">
            Trailblazer 
        </textPath>
    </text>
</svg>`
};
