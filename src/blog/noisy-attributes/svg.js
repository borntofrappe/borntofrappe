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
