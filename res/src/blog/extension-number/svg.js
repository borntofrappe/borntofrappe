export default {
	'extends-puzzle': `<svg style="display: block" viewBox="-0.4883344411849976 -0.7546494841575623 35.97666625976562 21.509297180175782">
    <defs>
        <filter id="puzzle-filter">
            <feTurbulence baseFrequency="8 1" />
            <feBlend in2="SourceGraphic" mode="overlay" />
            <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <path id="puzzle-piece-corner" d="M 0 1 A 1 1 0 0 1 1 0 L 5 0 L 5 1.5 A 1.01 1.01 0 1 1 5 3.5 L 5 5 L 3.5 5 A 1.01 1.01 0 1 0 1.5 5 L 0 5 Z" />
        <path id="puzzle-piece-1" d="M 0 0 L 5 0 L 5 1.5 A 1.01 1.01 0 1 0 5 3.5 L 5 5 L 3.5 5 A 1.01 1.01 0 1 1 1.5 5 L 0 5 L 0 3.5 A 1.01 1.01 0 1 0 0 1.5 Z" />
        <path id="puzzle-piece-2" d="M 0 0 L 5 0 L 5 1.5 A 1.01 1.01 0 1 1 5 3.5 L 5 5 L 3.5 5 A 1.01 1.01 0 1 0 1.5 5 L 0 5 L 0 3.5 A 1.01 1.01 0 1 1 0 1.5 Z" />
        <path id="puzzle-piece-3" d="M 0 0 L 1.5 0 A 1.01 1.01 0 1 0 3.5 0 L 5 0 L 5 1.5 A 1.01 1.01 0 1 1 5 3.5 L 5 5 L 3.5 5 A 1.01 1.01 0 1 0 1.5 5 L 0 5 L 0 3.5 A 1.01 1.01 0 1 1 0 1.5 Z" />
        <rect id="puzzle-background" x="2.5" y="2.5" width="30" height="15" />
        <g id="puzzle-border">
            <use href="#puzzle-piece-corner" />
            <use transform="translate(5 0)" href="#puzzle-piece-1" />
            <use transform="translate(10 0)" href="#puzzle-piece-2" />
            <use transform="translate(15 0)" href="#puzzle-piece-1" />
            <use transform="translate(20 0)" href="#puzzle-piece-2" />
            <use transform="translate(25 0)" href="#puzzle-piece-1" />
            <use transform="translate(35 0) scale(-1 1)" href="#puzzle-piece-corner" />
            <use transform="translate(0 10) rotate(-90)" href="#puzzle-piece-2" />
            <use transform="translate(35 10) scale(-1 1) rotate(-90)" href="#puzzle-piece-2" />
            <use transform="translate(0 15) rotate(-90)" href="#puzzle-piece-1" />
            <use transform="translate(35 15) scale(-1 1) rotate(-90)" href="#puzzle-piece-1" />
            <use transform="translate(0 20) rotate(-90)" href="#puzzle-piece-corner" />
            <use transform="translate(5 20) scale(1 -1)" href="#puzzle-piece-2" />
            <use transform="translate(10 20) scale(1 -1)" href="#puzzle-piece-1" />
            <use transform="translate(15 20) scale(1 -1)" href="#puzzle-piece-2" />
            <use transform="translate(20 20) scale(1 -1)" href="#puzzle-piece-1" />
            <use transform="translate(25 20) scale(1 -1)" href="#puzzle-piece-2" />
            <use transform="translate(35 20) scale(-1 1) rotate(-90)" href="#puzzle-piece-corner" />
        </g>
    </defs>
    <g transform="translate(17.5 10) rotate(-2) translate(-17.5 -10)">
        <use filter="url(#puzzle-filter)" fill="hsl(35 74% 83%)" href="#puzzle-background" />
        <path opacity="0.3" fill="hsl(0 0% 100%)" d="M 10 0 17.5 0 12.5 20 5 20 M 18.5 0 20 0 15 20 13.5 20 Z" />
        <g stroke="hsl(352 60% 20%)" stroke-width="0.3" stroke-linecap="round" stroke-linejoin="round">
            <g fill="none" stroke-opacity="0.1" >
                <use transform="translate(5 5)" href="#puzzle-piece-3" />
                <use transform="translate(15 5)" href="#puzzle-piece-3" />
                <use transform="translate(25 5)" href="#puzzle-piece-3" />
                <use transform="translate(10 10)" href="#puzzle-piece-3" />
                <use transform="translate(20 10)" href="#puzzle-piece-3" />
            </g>
            <use filter="url(#puzzle-filter)" fill="hsl(37 35% 66%)" stroke="none" href="#puzzle-border" />
            <use fill="none" href="#puzzle-border" />
        </g>
        <text fill="hsl(352 60% 20%)" transform="translate(17.5 11.6)" font-size="5" font-family="monospace" font-weight="700" text-anchor="middle" textLength="20">
            extends
        </text>
    </g>
</svg>`
};
