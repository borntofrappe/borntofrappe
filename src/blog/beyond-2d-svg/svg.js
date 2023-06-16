export default {
	'code-snippets': `<svg style="display: block; margin-inline: auto;" width="400" height="300">
    <title>Code snippets</title>
    <desc>A folder hinting at the many lines written in code.</desc>
    <defs>
        <circle id="code-snippets-circle" fill="currentColor" r="7" />

        <symbol id="code-snippets-sparkle-symbol" viewBox="-5 -5 10 10">
            <g fill="currentColor" stroke="none">
                <path d="M -5 0 a 5 5 0 0 0 5 -5 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5" />
            </g>
        </symbol>

        <use id="code-snippets-sparkle" href="#code-snippets-sparkle-symbol" x="-9" y="-9" width="18" height="18" />
    </defs>

    <g color="hsl(212 33% 89%)">
        <use transform="translate(30 210) scale(0.9)" href="#code-snippets-circle" />
        <use transform="translate(45 120) scale(0.6)" href="#code-snippets-circle" />
        <use transform="translate(160 25) scale(0.8)" href="#code-snippets-circle" />
        <use transform="translate(260 25) scale(1.25)" href="#code-snippets-circle" />
        <use transform="translate(315 55) scale(0.7)" href="#code-snippets-circle" />
        <use transform="translate(320 265) scale(0.5)" href="#code-snippets-circle" />
        <use transform="translate(350 180) scale(0.6)" href="#code-snippets-circle" />

        <use transform="translate(80 250)" href="#code-snippets-sparkle" />
        <use transform="translate(385 155) scale(1.2)" href="#code-snippets-sparkle" />
    </g>

    <g color="hsl(227 50% 59%)">
        <use transform="translate(30 80)" href="#code-snippets-circle" />
        <use transform="translate(360 90) scale(0.8)" href="#code-snippets-circle" />
    </g>

    <g transform="translate(200 150)">
        <g style="color: hsl(227 50% 59%);" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
            <path d="M 0 -87.5 h 100 c 35 0 35 40 35 50 v 70 c 0 60 -50 60 -75 60 h -120 c -40 0 -75 -10 -75 -60 v -70 c 0 -30 0 -80 45 -80 c 80 0 80 0 90 30" />
        </g>
        <g fill="none" stroke="hsl(210 36% 96%)" stroke-width="28" stroke-linejoin="round" stroke-linecap="round">
            <path d="M -25 -28 l -28 28 28 28" />
            <path transform="scale(-1 1)" d="M -25 -28 l -28 28 28 28" />
        </g>
    </g>
</svg>`
};
