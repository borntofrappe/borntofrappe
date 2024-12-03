export default {
	'road-sign': `<svg style="display: block;" viewBox="-87.5 -92.5 175 180">
    <defs>
        <path id="sign-arrow" d="M 4.34120444167326 24.6201938253052 A 25 25 0 0 0 25 0" />
        <marker id="sign-marker" viewBox="-20 -20 40 40" orient="100" markerWidth="2.6" markerHeight="2.6">
            <path fill="hsl(210 10% 23%)" d="M 20 -20 -20 0 20 20 12 0 Z" />
        </marker>
        <path id="sign-top" d="M 0 -85 80 45 -80 45 Z" />
        <rect id="sign-bottom" x="-84" width="168" height="26" rx="1" />
    </defs>
    <g stroke-linecap="round" stroke-linejoin="round">
        <use fill="none" stroke="hsl(210 17% 98%)" stroke-width="15" href="#sign-top" />
        <use fill="hsl(210 17% 98%)" stroke="hsl(0 86% 59%)" stroke-width="10" href="#sign-top" />
    </g>
    <g fill="none" stroke="hsl(210 10% 23%)" stroke-width="9" marker-end="url(#sign-marker)">
        <use href="#sign-arrow" />
        <use href="#sign-arrow" transform="rotate(120)" />
        <use href="#sign-arrow" transform="rotate(240)" />
    </g>
    <g transform="translate(0 58)" stroke-linecap="round" stroke-linejoin="round">
        <use fill="hsl(210 17% 98%)" stroke="hsl(210 10% 98%)" stroke-width="7" href="#sign-bottom" />
        <use fill="hsl(210 17% 98%)" stroke="hsl(210 10% 23%)" stroke-width="2" href="#sign-bottom" />
        <text fill="hsl(210 10% 23%)" font-weight="700" font-family="monospace" font-size="16" y="19" text-anchor="middle">100 m</text>
    </g>
</svg>`
};
