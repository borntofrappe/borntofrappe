export default {
	'bob-ombs': `<svg style="display: block;" viewBox="0 0 8 4">
    <title>SVG Bob-ombs</title>
    <defs>
        <symbol id="pixel-bomb" style="display: block;" viewBox="0 -0.5 16 15">
            <title>Pixelated Bob-omb</title>
            <path stroke="hsl(205 58% 15%)" d="M 5 0 h 4 M 3 1 h 8 M 2 2 h 6 M 10 2 h 2 M 1 3 h 8 M 11 3 h 2 M 1 4 h 9 M 11 4 h 2 M 0 5 h 2 M 3 5 h 1 M 5 5 h 9 M 0 6 h 2 M 3 6 h 1 M 5 6 h 9 M 0 7 h 2 M 3 7 h 1 M 5 7 h 9 M 0 8 h 14 M 1 9 h 12 M 1 10 h 12 M 2 11 h 9 M 3 12 h 7 M 5 13 h 3" />
            <path stroke="hsl(0 0% 99%)" d="M 8 2 h 2 M 9 3 h 2 M 10 4 h 1 M 15 4 h 1 M 2 5 h 1 M 4 5 h 1 M 15 5 h 1 M 2 6 h 1 M 4 6 h 1 M 14 6 h 2 M 2 7 h 1 M 4 7 h 1 M 14 7 h 2 M 15 8 h 1 M 15 9 h 1" />
            <path stroke="hsl(43 82% 62%)" d="M 1 11 h 2 M 11 11 h 2 M 1 12 h 3 M 10 12 h 3 M 1 13 h 5 M 8 13 h 5 M 2 14 h 4 M 8 14 h 4" />
        </symbol>

        <symbol id="vector-bomb" viewBox="-5 -5 11.75 11" preserveAspectRatio="xMidYMax meet">
            <title>Smooth Bob-omb</title>
            <defs>
                <path id="vector-bomb-leg" d="M -1.5 0 A 3 3 0 0 0 1.5 0" />
                <path id="vector-bomb-eye" d="M 0 -1 A 3 3 0 0 0 0 1" />
            </defs>
            <g stroke-linecap="round" stroke-linejoin="round">
                <g transform="translate(5 0)" fill="none" stroke="hsl(0 0% 99%)">
                    <path d="M 0 0 H 1.25" />
                    <path d="M 1.25 -1.5 V 1.5" />
                </g>
                <circle fill="hsl(205 58% 15%)" r="5" />
                <g fill="none" stroke="hsl(43 82% 62%)" stroke-width="1.5">
                    <use transform="rotate(28) translate(0 5)" href="#vector-bomb-leg" />
                    <use transform="rotate(-28) translate(0 5)" href="#vector-bomb-leg" />
                </g>
                <g fill="none" stroke="hsl(0 0% 99%)">
                    <g transform="translate(-3 -0.5)">
                        <use x="-1" href="#vector-bomb-eye" />
                        <use x="1" href="#vector-bomb-eye" />
                    </g>
                    <path transform="translate(2.5 -2.75)" d="M -0.75 -0.75 A 2 2 0 0 1 0.75 0.75" />
                </g>
            </g>
        </symbol>
    </defs>
    <rect fill="hsl(72 14% 59%)" width="8" height="4" />

    <use href="#pixel-bomb" x="0.75" y="1.5" width="2" height="2" />
    <use href="#vector-bomb" x="4.25" y="0.5" width="3" height="3" />
</svg>`
};
