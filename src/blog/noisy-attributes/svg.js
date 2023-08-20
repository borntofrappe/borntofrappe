export default {
	feTurbulence: `<svg style="display: block;" viewBox="-3 -10 46 46">
    <title>feTurbulence attributes</title>
    <defs>
        <symbol id="feTurbulence-painting" viewBox="-50 -50 100 100" width="10" height="10">
            <rect fill="hsl(28 89% 96%)" x="-50" y="-50" width="100" height="100" />
            <path fill="hsl(338 26% 18%)" stroke="hsl(338 26% 18%)" stroke-linecap="round" stroke-linejoin="round" d="M 0 -12.5 2 -12.5 4 -20.5 3 -11.5 4 -5.5 12 -7.5 15 -1.5 26 -2.5 27 8.5 43 19.5 32 16.5 40 22.5 31 20.5 26 21.5 14 15.5 15 13.5 9 12.5 6 9.5 2 13.5 3 20.5 0 15.5 -3 20.5 -2 13.5 -6 9.5 -9 12.5 -15 13.5 -14 15.5 -26 21.5 -31 20.5 -40 22.5 -32 16.5 -43 19.5 -27 8.5 -26 -2.5 -15 -1.5 -12 -7.5 -4 -5.5 -3 -11.5 -4 -20.5 -2 -12.5" />
        </symbol>
        <filter id="feTurbulence-filter-1-01">
            <feTurbulence numOctaves="1" baseFrequency="0.1" />
        </filter>
        <filter id="feTurbulence-filter-2-01">
            <feTurbulence numOctaves="2" baseFrequency="0.1" />
        </filter>
        <filter id="feTurbulence-filter-3-01">
            <feTurbulence numOctaves="3" baseFrequency="0.1" />
        </filter>
        <filter id="feTurbulence-filter-3-02">
            <feTurbulence numOctaves="3" baseFrequency="0.2"/>
        </filter>
        <filter id="feTurbulence-filter-3-03">
            <feTurbulence numOctaves="3" baseFrequency="0.3" />
        </filter>
    </defs>
    <text fill="currentColor" font-family="monospace" font-size="3" font-weight="700" letter-spacing="0.1" x="-1" y="-5">numOctaves</text>
    <use filter="url(#feTurbulence-filter-1-01)" href="#feTurbulence-painting" />
    <text fill="currentColor" font-family="monospace" font-size="2" text-anchor="end" x="10.9" y="-2">1</text>
    <g transform="translate(15 0)">
        <use filter="url(#feTurbulence-filter-2-01)" href="#feTurbulence-painting" />
        <text fill="currentColor" font-family="monospace" font-size="2" text-anchor="end" x="10.9" y="-2">2</text>
    </g>
    <g transform="translate(30 0)">
        <use filter="url(#feTurbulence-filter-3-01)" href="#feTurbulence-painting" />
        <text fill="currentColor" font-family="monospace" font-size="2" text-anchor="end" x="10.9" y="-2">3</text>
    </g>
    <g transform="translate(0 22.5)">
        <text fill="currentColor" font-family="monospace" font-size="3" font-weight="700" letter-spacing="0.1" x="-1" y="-5">baseFrequency</text>
        <use filter="url(#feTurbulence-filter-3-01)" href="#feTurbulence-painting" />
        <text fill="currentColor" font-family="monospace" font-size="2" text-anchor="end" x="10.9" y="-2">0.01</text>
        <g transform="translate(15 0)">
            <use filter="url(#feTurbulence-filter-3-02)" href="#feTurbulence-painting" />
            <text fill="currentColor" font-family="monospace" font-size="2" text-anchor="end" x="10.9" y="-2">0.02</text>
        </g>
        <g transform="translate(30 0)">
            <use filter="url(#feTurbulence-filter-3-02)" href="#feTurbulence-painting" />
            <text fill="currentColor" font-family="monospace" font-size="2" text-anchor="end" x="10.9" y="-2">0.03</text>
        </g>
    </g>
</svg>`,
	'amplitude-frequency': `<svg style="display: block;" viewBox="-25 -25 250 150">
    <title>Amplitude and frequency</title>
    <g stroke-linecap="round" stroke-linejoin="round">
        <rect fill="hsl(0 0% 97%)" x="-25" y="-25" width="250" height="150" rx="10" />
        <text fill="hsl(0 0% 28%)" font-family="monospace" font-size="12" writing-mode="vertical-rl" x="-10" y="0">Amplitude</text>
        <text fill="hsl(0 0% 28%)" font-family="monospace" font-size="12" text-anchor="end" x="200" y="114">Frequency</text>
        <path fill="none" stroke="hsl(0 0% 70%)" stroke-width="1" d="M 0 100 200 100" />
        <g fill="none" stroke="hsl(0 0% 70%)" stroke-width="0.75" stroke-dasharray="1 6">
            <path d="M 50 12 V 100" />
            <path d="M 100 65 V 100" />
            <path d="M 150 67 V 100" />
            <path d="M 200 21 V 100" />
        </g> 
        <g fill="hsl(0 0% 20%)">
            <circle transform="translate(0 80)" r="4" />
            <circle transform="translate(50 12)" r="4" />
            <circle transform="translate(100 65)" r="4" />
            <circle transform="translate(150 67)" r="4" />
            <circle transform="translate(200 21)" r="4" />
        </g>
    </g>
</svg>`,
	octave: `<svg style="display: block;" viewBox="-25 -25 250 150">
    <title>Octave</title>
    <g stroke-linecap="round" stroke-linejoin="round">
        <rect fill="hsl(0 0% 97%)" x="-25" y="-25" width="250" height="150" rx="10" />
        <g fill="hsl(0 0% 20%)">
            <circle transform="translate(0 80)" r="4" />
            <circle transform="translate(50 12)" r="4" />
            <circle transform="translate(100 65)" r="4" />
            <circle transform="translate(150 67)" r="4" />
            <circle transform="translate(200 21)" r="4" />
        </g>
        <path fill="none" stroke="hsl(0 0% 20%)" stroke-width="2" d="M 0 80 C 0 80 32.674 13.06 50 12 C 66.098 11.015 81.45 56.554 100 65 C 115.373 71.999 134.425 72.719 150 67 C 168.149 60.336 200 21 200 21" />
        <text fill="hsl(0 0% 28%)" font-family="monospace" font-weight="700" font-size="14" y="5">Octave</text>
    </g>
</svg>`,
	octaves: `<svg style="display: block;" viewBox="-15 -15 540 580">
    <title>Octaves</title>
    <g stroke-linecap="round" stroke-linejoin="round">
        <path fill="none" stroke="hsl(0 0% 90%)" d="M 215 50 c 40 0 40 225 80 225" />
        <rect fill="hsl(0 0% 97%)" x="-15" y="-15" width="230" height="130" rx="10" />
        <text fill="hsl(0 0% 28%)" font-family="monospace" font-size="14" y="10">Octave #1</text>
        <path fill="none" stroke="hsl(0 0% 20%)" stroke-width="2" d="M 0 80 C 0 80 32.674 13.06 50 12 C 66.098 11.015 81.45 56.554 100 65 C 115.373 71.999 134.425 72.719 150 67 C 168.149 60.336 200 21 200 21" />
        <g transform="translate(0 150)">
            <path fill="none" stroke="hsl(0 0% 90%)" d="M 215 50 c 40 0 40 75 80 75" />
            <rect fill="hsl(0 0% 97%)" x="-15" y="-15" width="230" height="130" rx="10" />
            <text fill="hsl(0 0% 28%)" font-family="monospace" font-size="14" y="10">Octave #2</text>
            <path fill="none" stroke="hsl(0 0% 20%)" stroke-width="2" d="M 0 67 C 0 67 14.935 70.918 22.222 70 C 29.758 69.051 36.983 63.681 44.444 61 C 51.8 58.357 59.237 54.154 66.667 54 C 74.052 53.847 81.423 58.667 88.889 60 C 96.24 61.313 103.782 60.534 111.111 62 C 118.6 63.498 125.951 69.149 133.333 69 C 140.766 68.85 148.63 59.389 155.556 61 C 163.615 62.874 169.718 82.126 177.778 84 C 184.704 85.611 200 76 200 76" />
        </g>
        <g transform="translate(0 300)">
            <path fill="none" stroke="hsl(0 0% 90%)" d="M 215 50 c 40 0 40 -75 80 -75" />
            <rect fill="hsl(0 0% 97%)" x="-15" y="-15" width="230" height="130" rx="10" />
            <text fill="hsl(0 0% 28%)" font-family="monospace" font-size="14" y="10">Octave #3</text>
            <path fill="none" stroke="hsl(0 0% 20%)" stroke-width="2" d="M 0 81 C 0 81 9.524 80.333 14.286 80 C 19.048 79.667 23.928 78.093 28.571 79 C 33.465 79.956 38.164 83.382 42.857 86 C 47.692 88.697 52.243 94.445 57.143 95 C 61.782 95.525 66.608 91.169 71.429 90 C 76.135 88.859 81.19 86.803 85.714 88 C 90.773 89.338 95.77 100.013 100 99 C 105.742 97.625 108.682 70.101 114.286 69 C 118.558 68.16 123.452 80.787 128.571 82 C 133.058 83.063 138.537 76.537 142.857 78 C 148.326 79.852 152.205 96.713 157.143 97 C 161.752 97.268 166.268 83.079 171.429 82 C 175.892 81.067 180.864 87.37 185.714 88 C 190.394 88.608 200 86 200 86" />
        </g>
        <g transform="translate(0 450)">
            <path fill="none" stroke="hsl(0 0% 90%)" d="M 215 50 c 40 0 40 -225 80 -225" />
            <rect fill="hsl(0 0% 97%)" x="-15" y="-15" width="230" height="130" rx="10" />
            <text fill="hsl(0 0% 28%)" font-family="monospace" font-size="14" y="10">Octave #4</text>
            <path fill="none" stroke="hsl(0 0% 20%)" stroke-width="2" d="M 0 76 C 0 76 6.884 85.058 10.526 89 C 13.919 92.673 17.501 98.907 21.053 99 C 24.521 99.091 28.029 90.102 31.579 90 C 35.048 89.9 38.972 98.727 42.105 98 C 46.281 97.03 49.123 77 52.632 77 C 56.14 77 58.68 96.031 63.158 98 C 66.215 99.344 70.42 96.968 73.684 95 C 77.534 92.679 80.434 84.695 84.211 84 C 87.514 83.392 91.332 89.353 94.737 89 C 98.364 88.624 101.602 83.031 105.263 81 C 108.642 79.125 112.537 76.191 115.789 77 C 119.662 77.963 122.408 86.527 126.316 89 C 129.551 91.047 133.451 90.435 136.842 92 C 140.487 93.681 144.129 99.61 147.368 99 C 151.268 98.266 153.804 86.91 157.895 84 C 161.056 81.751 164.893 81.836 168.421 81 C 171.911 80.173 175.604 78.214 178.947 79 C 182.661 79.874 185.965 87 189.474 87 C 192.982 87 200 79 200 79" />
        </g>
        <g transform="translate(310 225)">
            <rect fill="hsl(0 0% 97%)" x="-15" y="-15" width="230" height="130" rx="10" />
            <text fill="hsl(0 0% 28%)" font-family="monospace" font-size="14" x="5" y="10" font-weight="700">Noise</text>
            <path fill="none" stroke="hsl(0 0% 20%)" stroke-width="2" d="M 0 80 C 0 80 6.688 80.227 10 79.82 C 13.355 79.408 17.05 79.657 20 77.515 C 24.058 74.568 26.073 64.557 30 60.879 C 32.989 58.079 37.017 58.543 40 55.726 C 43.945 52.001 46.959 45.353 50 38.783 C 53.787 30.601 56.117 10.425 60 9.947 C 63.004 9.577 67.016 19.048 70 25.245 C 73.944 33.436 75.356 49.517 80 55.575 C 82.842 59.283 86.583 61.839 90 62.145 C 93.257 62.436 96.594 58.588 100 57.881 C 103.267 57.203 106.768 57.004 110 57.816 C 113.449 58.683 117.029 60.328 120 63.267 C 123.985 67.209 125.873 79.403 130 81.152 C 132.933 82.395 136.965 77.48 140 78.5 C 143.802 79.777 146.171 89.032 150 91.297 C 153.024 93.086 157.069 94.317 160 92.919 C 164.132 90.949 166.402 80.523 170 75.457 C 173.133 71.047 176.234 65.684 180 63.943 C 183.05 62.533 187.166 65.803 190 63.84 C 194.717 60.571 200 38 200 38" />
        </g>
    </g>
</svg>`,
	'card-5': `<svg style="display: block;" viewBox="-2 -2 13 13">
    <title>A butterfly. Or a bat. Or...</title>
    <defs>
        <symbol id="card-5-painting" viewBox="-50 -50 100 100" width="10" height="10">
            <rect fill="hsl(28 89% 96%)" x="-50" y="-50" width="100" height="100" />
            <path fill="hsl(338 26% 18%)" stroke="hsl(338 26% 18%)" stroke-linecap="round" stroke-linejoin="round" d="M 0 -12.5 2 -12.5 4 -20.5 3 -11.5 4 -5.5 12 -7.5 15 -1.5 26 -2.5 27 8.5 43 19.5 32 16.5 40 22.5 31 20.5 26 21.5 14 15.5 15 13.5 9 12.5 6 9.5 2 13.5 3 20.5 0 15.5 -3 20.5 -2 13.5 -6 9.5 -9 12.5 -15 13.5 -14 15.5 -26 21.5 -31 20.5 -40 22.5 -32 16.5 -43 19.5 -27 8.5 -26 -2.5 -15 -1.5 -12 -7.5 -4 -5.5 -3 -11.5 -4 -20.5 -2 -12.5" />
        </symbol>
        <filter id="card-5-filter">
            <feTurbulence numOctaves="3" baseFrequency="0.3" />
            <feDisplacementMap in="SourceGraphic" scale="-3" />
        </filter>
    </defs>
    <use filter="url(#card-5-filter)" href="#card-5-painting" />
</svg>`
};
