export default {
	rainbow: `<svg role="img" aria-labelledby="rainbow-title rainbow-desc" style="display: block;" viewBox="-0.5 -0.5 11 11">
    <title id="rainbow-title">Colorful arcs</title>
    <desc id="rainbow-desc">In French the word 'rainbow' is literally 'arc-en-ciel', arc in the sky. The word is apt to describe visual, specifically drawn with path elements and the 'A' character.</desc>
    <g fill="none" stroke-width="1" stroke-linecap="round">
        <path stroke="hsl(245 93% 72%)" pathLength="1" stroke-dasharray="0.8 1.2" stroke-dashoffset="-0.08" d="M 10 5 A 5 5 0 0 0 5 10" />
        <path stroke="hsl(191 100% 46%)" pathLength="1" stroke-dasharray="0.8 1.2" stroke-dashoffset="-0.12" d="M 10 4 A 6 6 0 0 0 4 10" />
        <path stroke="hsl(81 59% 51%)" pathLength="1" stroke-dasharray="0.8 1.2" stroke-dashoffset="-0.08" d="M 10 3 A 7 7 0 0 0 3 10" />
        <path stroke="hsl(51 95% 55%)" pathLength="1" stroke-dasharray="0.8 1.2" stroke-dashoffset="-0.12" d="M 10 2 A 8 8 0 0 0 2 10" />
        <path stroke="hsl(33 100% 50%)" pathLength="1" stroke-dasharray="0.8 1.2" stroke-dashoffset="-0.08" d="M 10 1 A 9 9 0 0 0 1 10" />
        <path stroke="hsl(15 100% 55%)" pathLength="1" stroke-dasharray="0.8 1.2" stroke-dashoffset="-0.12" d="M 10 0 A 10 10 0 0 0 0 10" />
    </g>
</svg>`,
	emotions: `<svg role="img" aria-labelledby="emotions-title emotions-desc" id="emotions" style="display: block;" viewBox="-0.05 -0.05 4.1 1.1">
    <title id="emotions-title">Emotional rollercoaster</title>
    <desc id="emotions-desc">Understanding how to draw elliptical arcs with the path element is an emotional journey. Suprise, delight, dismay, and reflief as you finally acquiesce you've learned aplenty.</desc>
    <style>
        #emotions .target use {
            scale: 0.75;
            transition: scale 0.25s cubic-bezier(.5, 1.75, .75, 1.25);
        }

        #emotions .target:hover use {
            scale: 1;
        }
    </style>
    <defs>
    <symbol id="emotions-relief" viewBox="-50 -50 100 100">
        <path fill="hsl(49 99% 57%)" d="M 0 -50 A 50 50 0 0 0 0 50 A 50 50 0 0 0 0 -50" />
        <path fill="hsl(42 100% 55%)" d="M 0 -50 A 50 50 0 0 0 0 50 A 55 55 0 0 1 0 -50" />
        <g stroke-linecap="round" stroke-linejoin="round">
            <g fill="hsl(33 97% 47%)" stroke="hsl(33 97% 47%)" stroke-width="3">
                <path transform="translate(-23 -32) rotate(160)" d="M -10 0 A 18 18 0 0 0 10 0 A 40 40 0 0 1 -10 0" />
                <path transform="scale(-1 1) translate(-23 -32) rotate(160)" d="M -10 0 A 18 18 0 0 0 10 0 A 40 40 0 0 1 -10 0" />
            </g>
            <g fill="hsl(39 98% 55%)" stroke="hsl(39 98% 55%)" stroke-width="4">
                <path transform="translate(-27 2) rotate(-5)" d="M -12 0 A 11 7 0 0 0 12 0 A 11 7 0 0 0 -12 0" />
                <path transform="translate(29 3) rotate(-5)" d="M -12 0 A 11 7 0 0 0 12 0 A 11 7 0 0 0 -12 0" />
            </g>
            <g fill="hsl(16 94% 27%)" stroke="hsl(16 94% 27%)" stroke-width="4">
                <path transform="translate(-22 -14)" d="M -12 0 A 18 18 0 0 1 12 0 A 40 40 0 0 0 -12 0" />
                <path transform="translate(22 -14)" d="M -12 0 A 18 18 0 0 1 12 0 A 40 40 0 0 0 -12 0" />
                <path transform="translate(0 18)" d="M -18 0 A 20 20 0 0 0 18 0 A 40 40 0 0 1 -18 0" />
            </g>
        </g>
    </symbol>
    <symbol id="emotions-delight" viewBox="-50 -50 100 100">
        <path fill="hsl(49 99% 57%)" d="M 0 -50 A 50 50 0 0 0 0 50 A 50 50 0 0 0 0 -50" />
        <path fill="hsl(42 100% 55%)" d="M 0 -50 A 50 50 0 0 0 0 50 A 55 55 0 0 1 0 -50" />
        <g stroke-linecap="round" stroke-linejoin="round">
            <g fill="hsl(33 97% 47%)" stroke="hsl(33 97% 47%)" stroke-width="3">
                <path transform="translate(-23 -32) rotate(155)" d="M -10 0 A 18 18 0 0 0 10 0 A 40 40 0 0 1 -10 0" />
                <path transform="scale(-1 1) translate(-23 -32) rotate(155)" d="M -10 0 A 18 18 0 0 0 10 0 A 40 40 0 0 1 -10 0" />
            </g>
            <g fill="hsl(16 94% 27%)" stroke="hsl(16 94% 27%)" stroke-width="4">
                <path transform="translate(-20 -10) rotate(-5)" d="M -12 0 A 34 34 0 0 1 12 0 A 20 20 0 0 0 0 -12 A 30 30 0 0 1 12 0 A 20 20 0 0 0 -12 0 " />
                <path transform="scale(-1 1) translate(-20 -10) rotate(-5)" d="M -12 0 A 34 34 0 0 1 12 0 A 20 20 0 0 0 0 -12 A 30 30 0 0 1 12 0 A 20 20 0 0 0 -12 0 " />
                <path transform="translate(0 10)" d="M -25 0 A 25 25 0 0 0 25 0 A 75 75 0 0 1 -25 0" />
            </g>
            <path fill="hsl(210 33% 95%)" stroke="hsl(210 33% 95%)" stroke-width="3" transform="translate(0 14)" d="M -16 0 A 35 35 0 0 0 16 0 A 60 60 0 0 1 -16 0" />
            <path fill="hsl(0 93% 65%)" stroke="hsl(0 93% 65%)" stroke-width="4" transform="translate(-6 30) rotate(12)" d="M -7 0 A 14 14 0 0 0 7 0 A 12 12 0 0 0 -7 0" />
        </g>
    </symbol>
    <symbol id="emotions-shock" viewBox="-50 -50 100 100">
        <path fill="hsl(49 99% 57%)" d="M 0 -50 A 50 50 0 0 0 0 50 A 50 50 0 0 0 0 -50" />
        <path fill="hsl(42 100% 55%)" d="M 0 -50 A 50 50 0 0 0 0 50 A 55 55 0 0 1 0 -50" />
        <g stroke-linecap="round" stroke-linejoin="round">
            <g fill="hsl(33 97% 47%)" stroke="hsl(33 97% 47%)" stroke-width="3">
                <path transform="translate(-20 -32) rotate(160)" d="M -10 0 A 18 18 0 0 0 10 0 A 40 40 0 0 1 -10 0" />
                <path transform="scale(-1 1) translate(-20 -32) rotate(160)" d="M -10 0 A 18 18 0 0 0 10 0 A 40 40 0 0 1 -10 0" />
            </g>
            <g fill="hsl(16 94% 27%)" stroke="hsl(16 94% 27%)" stroke-width="4">
                <path transform="translate(-16 -12)" d="M -7 0 A 7 8 0 0 0 7 0 A 7 8 0 0 0 -7 0" />
                <path transform="scale(-1 1) translate(-16 -12)" d="M -7 0 A 7 8 0 0 0 7 0 A 7 8 0 0 0 -7 0" />
                <path transform="translate(0 20)" d="M -11 0 A 5.5 6 0 0 0 11 0 A 5.5 6 0 0 0 -11 0" />
            </g>
            <path fill="hsl(0 93% 65%)" stroke="hsl(0 93% 65%)" stroke-width="4" transform="translate(-3 25) rotate(30)" d="M -5 0 A 6 6 0 0 0 5 0 A 6 6 0 0 0 -5 0" />
        </g>
    </symbol>
    <symbol id="emotions-dismay" viewBox="-50 -50 100 100">
        <path fill="hsl(49 99% 57%)" d="M 0 -50 A 50 50 0 0 0 0 50 A 50 50 0 0 0 0 -50" />
        <path fill="hsl(42 100% 55%)" d="M 0 -50 A 50 50 0 0 0 0 50 A 55 55 0 0 1 0 -50" />
        <g stroke-linecap="round" stroke-linejoin="round">
            <g fill="hsl(33 97% 47%)" stroke="hsl(33 97% 47%)" stroke-width="3">
                <path transform="translate(-20 -32) rotate(160)" d="M -10 0 A 18 18 0 0 0 10 0 A 40 40 0 0 1 -10 0" />
                <path transform="scale(-1 1) translate(-20 -32) rotate(160)" d="M -10 0 A 18 18 0 0 0 10 0 A 40 40 0 0 1 -10 0" />
            </g>
            <g fill="hsl(16 94% 27%)" stroke="hsl(16 94% 27%)" stroke-width="4">
                <path transform="translate(-16 -15) rotate(-5)" d="M -6 -6 A 60 60 0 0 0 6 6 A 60 60 0 0 0 -6 -6 M 6 -6 A 60 60 0 0 0 -6 6 A 60 60 0 0 0 6 -6" />
                <path transform="scale(-1 1) translate(-16 -15) rotate(-5)" d="M -6 -6 A 60 60 0 0 0 6 6 A 60 60 0 0 0 -6 -6 M 6 -6 A 60 60 0 0 0 -6 6 A 60 60 0 0 0 6 -6" />
                <path transform="translate(0 20)" d="M -13 0 A 6.5 6.5 0 0 0 13 0 A 6.5 6.5 0 0 0 -13 0" />
            </g>
            <path fill="hsl(0 93% 65%)" stroke="hsl(0 93% 65%)" stroke-width="4" transform="translate(-3 25) rotate(30)" d="M -5 0 A 6 6 0 0 0 5 0 A 6 6 0 0 0 -5 0" />
        </g>
    </symbol>
    </defs>
    <g transform="translate(0.5 0.5)">
        <g class="target">
            <use href="#emotions-shock" x="-0.5" y="-0.5" width="1" height="1" />
            <rect fill="transparent" opacity="0" x="-0.5" y="-0.5" width="1" height="1" />
        </g>
        <g class="target" transform="translate(1 0)">
            <use href="#emotions-delight" x="-0.5" y="-0.5" width="1" height="1" />
            <rect fill="transparent" opacity="0" x="-0.5" y="-0.5" width="1" height="1" />
        </g>
        <g class="target" transform="translate(2 0)">
            <use href="#emotions-dismay" x="-0.5" y="-0.5" width="1" height="1" />
            <rect fill="transparent" opacity="0" x="-0.5" y="-0.5" width="1" height="1" />
        </g>
        <g class="target" transform="translate(3 0)">
            <use href="#emotions-relief" x="-0.5" y="-0.5" width="1" height="1" />
            <rect fill="transparent" opacity="0" x="-0.5" y="-0.5" width="1" height="1" />
        </g>
    </g>
</svg>`,
	'three-path-commands': `<svg role="img" aria-labelledby="three-path-commands-title three-path-commands-desc" style="display: block;" viewBox="-10 -10 97.40080261230469 105.70024108886719">
    <title id="three-path-commands-title">Three path commands</title>
    <desc id="three-path-commands-desc">In the 'd' attribute of a path element you can draw straight lines with the 'L' character, quadratic bezier curves with the letter 'Q' and cubic bezier curves with the letter 'C'.</desc>
    <g>
        <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 L 20 10" />
        <g fill="currentColor">
            <circle transform="translate(20 10)" r="1.25" />
            <g font-family="monospace">
                <text transform="translate(20 10)" text-anchor="middle" font-size="3" y="5">(x, y)</text>
                <text transform="translate(40 5)" font-weight="700" font-size="4" y="1.5">L x y</text>
            </g>
        </g>
    </g>

    <g transform="translate(0 35)">
        <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 Q 15 0 20 10" />
        <g fill="currentColor">
            <circle transform="translate(20 10)" r="1.25" />
            <path transform="translate(15 0)" d="M -1.2 0 L 0 -1.2 L 1.2 0 L 0 1.2" />
        </g>
        <g fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1">
            <path d="M 0 0 L 15 0" />
            <path d="M 20 10 L 15 0" />
        </g>
        <g font-family="monospace" fill="currentColor" >
            <text transform="translate(15 0)" text-anchor="middle" font-size="2.4" y="-2.9">(x1, y1)</text>
            <text transform="translate(20 10)" text-anchor="middle" font-size="3" y="5">(x, y)</text>
            <text transform="translate(40 5)" font-weight="700" font-size="4" y="1.5">Q x1 y1 x y</text>
        </g>
    </g>

    <g transform="translate(0 70)">
        <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 C 10 -5 20 0 20 10" />
        <g fill="currentColor">
            <circle transform="translate(20 10)" r="1.25" />
            <path fill="" transform="translate(10 -5)" d="M -1.2 0 L 0 -1.2 L 1.2 0 L 0 1.2" />
            <path transform="translate(20 0)" d="M -1.2 0 L 0 -1.2 L 1.2 0 L 0 1.2" />
        </g>
        <g fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1">
            <path d="M 0 0 L 10 -5" />
            <path d="M 20 10 L 20 0" />
        </g>
        <g font-family="monospace" fill="currentColor">
            <text transform="translate(20 10)" text-anchor="middle" font-size="3" y="5">(x, y)</text>
            <text transform="translate(10 -5)" text-anchor="middle" font-size="2.4" y="-2.9">(x1, y1)</text>
            <text transform="translate(20 0)" font-size="2.4" x="2.1" y="0.7">(x2, y2)</text>
            <text transform="translate(40 5)" font-weight="700" font-size="4" y="1.5">C x1 y1 x2 y2 x y</text>
        </g>
    </g>
</svg>`,
	'arc-syntax': `<svg role="img" aria-labelledby="arc-syntax-title arc-syntax-desc" style="display: block;" viewBox="-10 -10 92.98309326171875 61.0318717956543">
    <title id="arc-syntax-title">Arc syntax</title>
    <desc id="arc-syntax-desc">To draw arcs with a path element you need a lot of numbers.</desc>
    <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 10 0 0 1 20 10" />
    <circle transform="translate(20 10)" fill="currentColor" r="1.25" />
    <g fill="currentColor" font-family="monospace">
        <text transform="translate(20 10)" text-anchor="middle" font-size="3" y="5">(x, y)</text>
        <text transform="translate(40 5)" font-weight="700" font-size="4" y="1.5">
            <tspan>A</tspan>
            <tspan x="0" y="7">rx ry</tspan>
            <tspan x="0" y="14">angle</tspan>
            <tspan x="0" y="21">large-arc-flag</tspan>
            <tspan x="0" y="28">sweep-flag</tspan>
            <tspan x="0" y="35">x y</tspan>
        </text>
    </g>
</svg>`,
	'arc-radii-coordinates': `<svg role="img" aria-labelledby="arc-radii-coordinates-title arc-radii-coordinates-desc" style="display: block;" viewBox="-30 -10 112.98309326171875 61.0318717956543">
    <title id="arc-radii-coordinates-title">Arc radii and coordinates</title>
    <desc id="arc-radii-coordinates-desc">To draw arcs with a path element the first two numbers describe the radii of an ellipse connecting the start and end coordinates. The last two numbers describe where the arc should end.</desc>
    <g transform="translate(0 10)">
        <ellipse opacity="0.1" fill="currentColor" rx="20" ry="10" />
        <g fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1">
            <path d="M 0 0 L 0 -10" />
            <path d="M 0 0 L 20 0" />
        </g>
        <path fill="currentColor" d="M -1.2 0 L 0 -1.2 L 1.2 0 L 0 1.2" />

        <g font-family="monospace" fill="currentColor" >
            <text transform="translate(0 -5)" text-anchor="end" font-size="2.5" x="-1.5" y="1">10</text>
            <text transform="translate(10 0)" text-anchor="middle" font-size="2.5" y="-1.9">20</text>
        </g>
    </g>
    <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 10 0 0 1 20 10" />
    <circle transform="translate(20 10)" fill="currentColor" r="1.25" />
    <g fill="currentColor" font-family="monospace">
        <text transform="translate(20 10)" text-anchor="middle" font-size="3" y="5">(20, 10)</text>
        <text transform="translate(40 5)" font-size="3.5" y="1.5">
            <tspan>A</tspan>
            <tspan font-weight="700" font-size="4.5" x="0" y="7.8">20 10</tspan>
            <tspan x="0" y="14">angle</tspan>
            <tspan x="0" y="21">large-arc-flag</tspan>
            <tspan x="0" y="28">sweep-flag</tspan>
            <tspan font-weight="700" font-size="4.5" x="0" y="35.8">20 10</tspan>
        </text>
    </g>
</svg>`,
	'arc-large-arc-flag': `<svg role="img" aria-labelledby="arc-large-arc-flag-title arc-large-arc-flag-desc" style="display: block;" viewBox="-30 -10 110 115.95834350585938">
    <title id="arc-large-arc-flag-title">Arc large arc flag</title>
    <desc id="arc-large-arc-flag-desc">To draw arcs with a path element the fourth number is a flag to decide which arc to draw from start two end, the small or large arc.</desc>
    <g>
        <g transform="translate(0 10)">
            <ellipse opacity="0.1" fill="currentColor" rx="20" ry="10" />
            <g fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1">
                <path d="M 0 0 L 0 -10" />
                <path d="M 0 0 L 20 0" />
            </g>
            <path fill="currentColor" d="M -1.2 0 L 0 -1.2 L 1.2 0 L 0 1.2" />
        </g>

        <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 10 0 0 1 20 10" />
        <circle transform="translate(20 10)" fill="currentColor" r="1.25" />
        <g fill="currentColor" font-family="monospace">
            <text transform="translate(40 5)" font-size="3.5" y="1.5">
                <tspan>A</tspan>
                <tspan x="0" y="7">20 10</tspan>
                <tspan x="0" y="14">angle</tspan>
                <tspan font-weight="700" font-size="4.5" x="0" y="21">0</tspan>
                <tspan x="0" y="28">sweep-flag</tspan>
                <tspan x="0" y="35">20 10</tspan>
            </text>
        </g>
    </g>
    <g transform="translate(0 65)">
        <g transform="translate(30 0)">
            <g transform="translate(20 0)">
                <ellipse opacity="0.1" fill="currentColor" rx="20" ry="10" />
                <g fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1">
                    <path d="M 0 0 L 0 10" />
                    <path d="M 0 0 L -20 0" />
                </g>
                <path fill="currentColor" d="M -1.2 0 L 0 -1.2 L 1.2 0 L 0 1.2" />
            </g>
            <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 10 0 1 1 20 10" />
            <circle transform="translate(20 10)" fill="currentColor" r="1.25" />
        </g>
        <g fill="currentColor" font-family="monospace">
            <text transform="translate(0 -5)" font-size="3.5" y="1.5">
                <tspan>A</tspan>
                <tspan x="0" y="7">20 10</tspan>
                <tspan x="0" y="14">angle</tspan>
                <tspan font-weight="700" font-size="4.5" x="0" y="21">1</tspan>
                <tspan x="0" y="28">sweep-flag</tspan>
                <tspan x="0" y="35">20 10</tspan>
            </text>
        </g>
    </g>
</svg>`,
	'arc-sweep-flag': `<svg role="img" aria-labelledby="arc-sweep-flag-title arc-sweep-flag-desc" style="display: block;" viewBox="-30 -10 110 115.95834350585938">
    <title id="arc-sweep-flag-title">Arc sweep flag</title>
    <desc id="arc-sweep-flag-desc">To draw arcs with a path element the fifth number is a flag to decide which arc to draw from start two end, drawing the shape in a clockwise or counter-clockwise manner.</desc>
    <g>
        <g transform="translate(0 10)">
            <ellipse opacity="0.1" fill="currentColor" rx="20" ry="10" />
            <g fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1">
                <path d="M 0 0 L 0 -10" />
                <path d="M 0 0 L 20 0" />
            </g>
            <path fill="currentColor" d="M -1.2 0 L 0 -1.2 L 1.2 0 L 0 1.2" />
        </g>

        <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 10 0 0 1 20 10" />
        <circle transform="translate(20 10)" fill="currentColor" r="1.25" />
        <g fill="currentColor" font-family="monospace">
            <text transform="translate(40 5)" font-size="3.5" y="1.5">
                <tspan>A</tspan>
                <tspan x="0" y="7">20 10</tspan>
                <tspan x="0" y="14">angle</tspan>
                <tspan x="0" y="21">0</tspan>
                <tspan font-weight="700" font-size="4.5" x="0" y="28">1</tspan>
                <tspan x="0" y="35">20 10</tspan>
            </text>
        </g>
    </g>
    <g transform="translate(0 65)">
        <g transform="translate(30 0)">
            <g transform="translate(20 0)">
                <ellipse opacity="0.1" fill="currentColor" rx="20" ry="10" />
                <g fill="none" stroke="currentColor" stroke-width="0.25" stroke-dasharray="0.5 1">
                    <path d="M 0 0 L 0 10" />
                    <path d="M 0 0 L -20 0" />
                </g>
                <path fill="currentColor" d="M -1.2 0 L 0 -1.2 L 1.2 0 L 0 1.2" />
            </g>
            <path fill="none" stroke="currentColor" stroke-width="0.75" d="M 0 0 A 20 10 0 0 0 20 10" />
            <circle transform="translate(20 10)" fill="currentColor" r="1.25" />
        </g>
        <g fill="currentColor" font-family="monospace">
            <text transform="translate(0 -5)" font-size="3.5" y="1.5">
                <tspan>A</tspan>
                <tspan x="0" y="7">20 10</tspan>
                <tspan x="0" y="14">angle</tspan>
                <tspan x="0" y="21">0</tspan>
                <tspan font-weight="700" font-size="4.5" x="0" y="28">0</tspan>
                <tspan x="0" y="35">20 10</tspan>
            </text>
        </g>
    </g>
</svg>`
};
