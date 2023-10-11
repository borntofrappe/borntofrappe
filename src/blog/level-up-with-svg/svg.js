export default {
	banner: `<svg id="banner" style="display: block;" viewBox="0 0 3 2">
    <style>
        svg#banner {
            display: block;
        }

        svg#banner .translate {
            animation: translate 12s linear infinite paused;
        }

        @media (prefers-reduced-motion: no-preference) {
            svg#banner .translate {
                animation-play-state: running;
            }
        }

        @keyframes translate {
            to {
                translate: 1px 0;
            }
        }
    </style>
    <defs>
        <rect id="banner-square" width="1" height="1" />

        <use id="banner-square-dark" href="#banner-square" fill="hsl(210 10% 23%)" />
        <use id="banner-square-light" href="#banner-square" fill="hsl(210 9% 31%)" />

        <symbol id="banner-square-checks" viewBox="0 0 2 2" width="1" height="1">
            <use href="#banner-square-dark" />
            <use x="1" href="#banner-square-light" />
            <use y="1" href="#banner-square-light" />
            <use x="1" y="1" href="#banner-square-dark" />
        </symbol>

        <pattern id="banner-pattern-checks-1" viewBox="0 0 1 1" width="0.5" height="0.5">
            <use href="#banner-square-checks" />
        </pattern>
        <pattern id="banner-pattern-checks-2" viewBox="0 0 1 1" width="0.25" height="0.25">
            <use href="#banner-square-checks" />
        </pattern>

        <use id="banner-square-checks-1" href="#banner-square" fill="url(#banner-pattern-checks-1)" />
        <use id="banner-square-checks-2" href="#banner-square" fill="url(#banner-pattern-checks-2)" />

        <symbol id="banner-square-comp-1" viewBox="0 0 2 2" width="1" height="1" >
            <use href="#banner-square-light" />
            <use x="1" href="#banner-square-checks" />
            <use y="1" href="#banner-square-checks-2" />
            <use x="1" y="1" href="#banner-square-light" />
        </symbol>
        <symbol id="banner-square-comp-2" viewBox="0 0 2 2" width="1" height="1" >
            <use href="#banner-square-light" />
            <use x="1" href="#banner-square-checks-2" />
            <use y="1" href="#banner-square-checks-1" />
            <use x="1" y="1" href="#banner-square-light" />
        </symbol>
        <symbol id="banner-square-comp-3" viewBox="0 0 2 2" width="1" height="1" >
            <use href="#banner-square-checks-1" />
            <use x="1" href="#banner-square-dark" />
            <use y="1" href="#banner-square-dark" />
            <use x="1" y="1" href="#banner-square-checks-2" />
        </symbol>

        <pattern id="banner-pattern-grid" viewBox="0 0 4 4" width="1" height="1" patternUnits="userSpaceOnUse">
            <use href="#banner-square-dark" />
            <use x="1" href="#banner-square-checks-1" />
            <use x="2" href="#banner-square-comp-2" />
            <use x="3" href="#banner-square-light" />
            <use y="1" href="#banner-square-comp-3" />
            <use x="1" y="1" href="#banner-square-dark" />
            <use x="2" y="1" href="#banner-square-light" />
            <use x="3" y="1" href="#banner-square-checks-1" />
            <use y="2" href="#banner-square-checks-2" />
            <use x="1" y="2" href="#banner-square-light" />
            <use x="2" y="2" href="#banner-square-dark" />
            <use x="3" y="2" href="#banner-square-comp-3" />
            <use y="3" href="#banner-square-light" />
            <use x="1" y="3" href="#banner-square-comp-1" />
            <use x="2" y="3" href="#banner-square-checks-2" />
            <use x="3" y="3" href="#banner-square-dark" />
        </pattern>

        <pattern id="banner-pattern-zigzag" viewBox="0 0 1 1" width="0.15" height="0.15" patternUnits="userSpaceOnUse">
            <path fill="hsl(210 17% 98%)" d="M 0 0.25 0.25 0 0.5 0.25 0.75 0 1 0.25 1 1 0 1Z" />
        </pattern>

        <filter id="banner-filter-shadow">
            <feFlood flood-color="hsl(0 0% 0%)" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="SourceGraphic" operator="in" />
            <feOffset dy="-0.01" />
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    <rect fill="hsl(210 9% 31%)" width="3" height="2" />

    <g transform="rotate(-5)">
        <rect class="translate" fill="url(#banner-pattern-grid)" x="-2" y="-1" width="5" height="4" />
        <g filter="url(#banner-filter-shadow)" font-size="0.3" font-weight="700" font-family="system-ui, sans-serif">
            <text fill="hsl(210 17% 98%)" x="0.2" y="1">One square</text>
            <text fill="hsl(47 100% 62%)" text-anchor="end" x="2.6" y="1.5">Select patterns</text>
        </g>
    </g>

    <g transform="translate(0 1.85)">
        <rect filter="url(#banner-filter-shadow)" fill="url(#banner-pattern-zigzag)" width="3" height="0.15" />
        <text fill="hsl(210 11% 15%)" font-size="0.07" font-weight="700" font-family="system-ui, sans-serif" x="0.075" y="0.12">The possibilities really make you wonder</text>
    </g>
</svg>`
};
