export default {
	'fe-morphology': `<svg style="display: block;" viewBox="0 0 6 1.4">
    <title>Cryptic runes</title>
    <defs>
        <filter id="fe-morphology-filter">
            <feMorphology operator="erode" radius="0.02" />
        </filter>
    </defs>
    <g filter="url(#fe-morphology-filter)" fill="none" stroke="currentColor" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round">
        <path d="M 0.2 1.3 0.2 0.1 0.8 0.55 0.8 1.3" />
        <path transform="translate(1 0)" d="M 0.5 1.3 0.5 0.1 M 0.1 0.2 0.5 0.55 0.9 0.2" />
        <path transform="translate(2 0)" d="M 0.1 1.3 0.9 0.5 0.5 0.1 0.1 0.5 0.9 1.3" />
        <path transform="translate(3 0)" d="M 0.2 1.3 0.2 0.1 M 0.2 0.55 0.8 0.15 M 0.2 0.9 0.7 0.57" />
        <path transform="translate(4 0)" d="M 0.2 1.3 0.8 0.7 0.2 0.1 M 0.8 1.3 0.2 0.7 0.8 0.1" />
        <path transform="translate(5 0)" d="M 0.2 1.3 0.2 0.1 0.65 0.45 0.2 0.8 M 0.4 0.65 0.8 0.9 0.2 1.3" />
    </g>
</svg>`,
	'fe-convolve-matrix': `<svg style="display: block;" viewBox="-2 -2 4 4">
    <title>Cryptic carvings</title>
    <defs>
        <filter id="fe-convolve-matrix-filter" >
            <feConvolveMatrix preserveAlpha="true" bias="-0.15" kernelMatrix=" 0 0 3 0 1 0 -3 0 0" />
        </filter>
    </defs>
    <g filter="url(#fe-convolve-matrix-filter)" transform="rotate(-5)" stroke-linecap="round" stroke-linejoin="round">
        <g transform="rotate(-5) translate(0 -1.25) rotate(5)">
            <path fill="hsl(47 28% 87%)" stroke="hsl(47 28% 87%)" stroke-width="0.05" d="M 4.286263797015736e-17, -0.7 Q 0.2163118960624632, -0.6657395614066074 0.4114496766047312, -0.5663118960624631 T 0.6657395614066074, -0.216311896062463180.6657395614066074, 0.216311896062463180.4114496766047312, 0.5663118960624631 4.286263797015736e-17, 0.7-0.4114496766047311, 0.5663118960624631 -0.6657395614066074, 0.21631189606246323 -0.6657395614066074, -0.2163118960624634 -0.41144967660473125, -0.5663118960624631 4.286263797015736e-17, -0.7 Z" />
            <path transform="translate(-0.5 -0.5)" fill="none" stroke="hsl(46 97% 63%)" stroke-width="0.075" d="M 0.3 0.1 0.25 0.5 0.6 0.3 0.6 0.9" />
        </g>
        <g transform="rotate(85) translate(0 -1.25) rotate(-95)">
            <path fill="hsl(47 28% 87%)" stroke="hsl(47 28% 87%)" stroke-width="0.05" d="M 4.286263797015736e-17, -0.7 Q 0.2163118960624632, -0.6657395614066074 0.4214496766047312, -0.5863118960624631 T 0.6657395614066074, -0.216311896062463180.6657395614066074, 0.216311896062463180.4114496766047312, 0.5663118960624631 4.286263797015736e-17, 0.7-0.4114496766047311, 0.5663118960624631 -0.6657395614066074, 0.21631189606246323 -0.6657395614066074, -0.2163118960624634 -0.41144967660473125, -0.5663118960624631 4.286263797015736e-17, -0.7 Z" />
            <path transform="translate(-0.5 -0.5)" fill="none" stroke="hsl(46 97% 63%)" stroke-width="0.075" d="M 0.3 0.1 0.3 0.9 M 0.3 0.45 0.6 0.45 0.65 0.15 M 0.3 0.55 0.6 0.55 0.6 0.85" />
        </g>
        <g transform="rotate(175) translate(0 -1.2) rotate(160)">
            <path fill="hsl(47 28% 87%)" stroke="hsl(47 28% 87%)" stroke-width="0.05" d="M 4.286263797015736e-17, -0.7 Q 0.2163118960624632, -0.6657395614066074 0.4314496766047312, -0.5663118960624631 T 0.6657395614066074, -0.216311896062463180.6657395614066074, 0.216311896062463180.4114496766047312, 0.5663118960624631 4.286263797015736e-17, 0.7-0.4114496766047311, 0.5663118960624631 -0.6657395614066074, 0.21631189606246323 -0.6657395614066074, -0.2163118960624634 -0.41144967660473125, -0.5663118960624631 4.286263797015736e-17, -0.7 Z" />
            <path transform="translate(-0.5 -0.5)" fill="none" stroke="hsl(46 97% 63%)" stroke-width="0.075" d="M 0.2 0.1 0.8 0.9 M 0.1 0.9 0.9 0.15" />
        </g>
        <g transform="rotate(270) translate(0 -1.25) rotate(-250)">
            <path fill="hsl(47 28% 87%)" stroke="hsl(47 28% 87%)" stroke-width="0.05" d="M 4.286263797015736e-17, -0.7 Q 0.2163118960624632, -0.6657395614066074 0.4114496766047312, -0.5263118960624631 T 0.6657395614066074, -0.216311896062463180.6657395614066074, 0.216311896062463180.4114496766047312, 0.5663118960624631 4.286263797015736e-17, 0.7-0.4114496766047311, 0.5663118960624631 -0.6657395614066074, 0.21631189606246323 -0.6657395614066074, -0.2163118960624634 -0.41144967660473125, -0.5663118960624631 4.286263797015736e-17, -0.7 Z" />
            <path transform="translate(-0.5 -0.5)" fill="none" stroke="hsl(46 97% 63%)" stroke-width="0.075" d="M 0.2 0.1 0.2 0.9 0.1 0.9 M 0.2 0.4 A 0.275 0.275 0 0 0 0.55 0.1 M 0.2 0.6 A 0.5 0.5 0 0 0 0.85 0.1" />
        </g>
    </g>
</svg>`,
	'convolve-bias': `<svg style="display: block;" viewBox="0 0 19 4">
    <title>feConvolveMatrix biases</title>
    <defs>
        <filter id="convolve-bias-0" x="0" y="0" width="1" height="1">
            <feConvolveMatrix order="1" kernelMatrix="1" bias="0" />
        </filter>
        <filter id="convolve-bias-1" x="0" y="0" width="1" height="1">
            <feConvolveMatrix order="1" kernelMatrix="1" bias="0.25" />
        </filter>
        <filter id="convolve-bias-2" x="0" y="0" width="1" height="1">
            <feConvolveMatrix order="1" kernelMatrix="1" bias="-0.25" />
        </filter>
    </defs>
    <svg width="6" height="4" viewBox="-3 -2 6 4">
        <rect fill="hsl(47 28% 87%)" stroke="hsl(31 29% 40%)" stroke-width="0.3" x="-2.85" y="-1.85" width="5.7" height="3.7" />
        <rect filter="url(#convolve-bias-0)" fill="hsl(46 97% 63%)" x="-0.6" y="-0.6" width="1.2" height="1.2" rx="0.2" />
        <text fill="hsl(42 15% 13%)" font-family="monospace" font-style="italic" letter-spacing="-0.01" word-spacing="-0.125" font-size="0.55" x="-2.55" y="1.55">bias = <tspan font-weight="700">0</tspan></text>
    </svg>
    <svg x="6.5" width="6" height="4" viewBox="-3 -2 6 4">
        <rect fill="hsl(47 28% 87%)" stroke="hsl(31 29% 40%)" stroke-width="0.3" x="-2.85" y="-1.85" width="5.7" height="3.7" />
        <rect filter="url(#convolve-bias-1)" fill="hsl(46 97% 63%)" x="-0.6" y="-0.6" width="1.2" height="1.2" rx="0.2" />
        <text fill="hsl(42 15% 13%)" font-family="monospace" font-style="italic" letter-spacing="-0.01" word-spacing="-0.125" font-size="0.55" x="-2.55" y="1.55">bias = <tspan font-weight="700">0.25</tspan></text>
    </svg>
    <svg x="13" width="6" height="4" viewBox="-3 -2 6 4">
        <rect fill="hsl(47 28% 87%)" stroke="hsl(31 29% 40%)" stroke-width="0.3" x="-2.85" y="-1.85" width="5.7" height="3.7" />
        <rect filter="url(#convolve-bias-2)" fill="hsl(46 97% 63%)" x="-0.6" y="-0.6" width="1.2" height="1.2" rx="0.2" />
        <text fill="hsl(42 15% 13%)" font-family="monospace" font-style="italic" letter-spacing="-0.01" word-spacing="-0.125" font-size="0.55" x="-2.55" y="1.55">bias = <tspan font-weight="700">-0.25</tspan></text>
    </svg>
</svg>`,
	'convolve-alpha': `<svg style="display: block;" viewBox="0 0 12.5 8.5">
    <title>feConvolve alpha channel</title>
    <defs>
        <filter id="convolve-alpha-false" x="0" y="0" width="1" height="1">
            <feConvolveMatrix preserveAlpha="false" order="1" kernelMatrix="1" bias="-0.25" />
        </filter>
        <filter id="convolve-alpha-true" x="0" y="0" width="1" height="1">
            <feConvolveMatrix preserveAlpha="true" order="1" kernelMatrix="1" bias="-0.25" />
        </filter>
    </defs>
    <svg x="3.25" width="6" height="4" viewBox="-3 -2 6 4">
        <rect fill="hsl(47 28% 87%)" stroke="hsl(31 29% 40%)" stroke-width="0.3" x="-2.85" y="-1.85" width="5.7" height="3.7" />
        <rect fill="hsl(46 97% 63%)" x="-0.6" y="-0.6" width="1.2" height="1.2" rx="0.2" />
    </svg>
    <svg y="4.5" width="6" height="4" viewBox="-3 -2 6 4">
        <rect fill="hsl(47 28% 87%)" stroke="hsl(31 29% 40%)" stroke-width="0.3" x="-2.85" y="-1.85" width="5.7" height="3.7" />
        <rect filter="url(#convolve-alpha-false)" fill="hsl(46 97% 63%)" x="-0.6" y="-0.6" width="1.2" height="1.2" rx="0.2" />
        <text fill="hsl(42 15% 13%)" font-family="monospace" font-style="italic" letter-spacing="-0.01" word-spacing="-0.125" font-size="0.4" text-anchor="end" x="2.55" y="1.55">preserveAlpha = <tspan font-weight="700">false</tspan></text>
    </svg>
    <svg y="4.5" x="6.5" width="6" height="4" viewBox="-3 -2 6 4">
        <rect fill="hsl(47 28% 87%)" stroke="hsl(31 29% 40%)" stroke-width="0.3" x="-2.85" y="-1.85" width="5.7" height="3.7" />
        <rect filter="url(#convolve-alpha-true)" fill="hsl(46 97% 63%)" x="-0.6" y="-0.6" width="1.2" height="1.2" rx="0.2" />
        <text fill="hsl(42 15% 13%)" font-family="monospace" font-style="italic" letter-spacing="-0.01" word-spacing="-0.125" font-size="0.4" text-anchor="end" x="2.55" y="1.55">preserveAlpha = <tspan font-weight="700">true</tspan></text>
    </svg>
</svg>`
};
