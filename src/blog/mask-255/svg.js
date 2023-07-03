export default {
	'flasks-color-channels': `<svg style="display: block;" viewBox="0 0 300 100">
    <style>
        .hover .translate,
        .hover .scale {
            transition: transform 0.5s;
            transition-timing-function: cubic-bezier(.09,1.09,.44,1.38);
        }

        .hover .scale {
            transform: scale(1);
        }

        .hover .translate {
            transform: translateY(8px);
        }

        .hover:hover .translate {
            transform: translateY(1px);
            transition-timing-function: cubic-bezier(.6,-0.35,.22,1.47);
        }

        .hover:hover .scale {
            transform: scale(0.8);
        }
    </style>
    <defs>
        <circle id="flask-body" r="30" />
        <clipPath id="flask-clip">
            <use href="#flask-body" />
        </clipPath>
        <g id="flask-color">
            <rect fill="hsl(0 0% 25%)" x="-11" y="-50" width="22" height="9" rx="4" />
            <rect fill="hsl(0 0% 15%)" x="-7" y="-41.1" width="14" height="8" />
            <use fill="currentColor" href="#flask-body" />
            <g clip-path="url(#flask-clip)" fill="hsl(0 0% 100%)">
                <path opacity="0.2" d="M -50 10 q 25 -15 50 0 t 50 0 v 40 h -100 z" />
                <path transform="translate(10 10)" opacity="0.2" d="M -50 10 q 25 -15 50 0 t 50 0 v 40 h -100 z" />
            </g>
            <circle fill="none" stroke="hsl(0 0% 25%)" stroke-width="6" r="33" />
            <g fill="hsl(0 0% 100% / 0.5)">
                <circle cx="-13" cy="-11" r="6.5" />
                <circle cx="9" cy="-12" r="3.25" />
            </g>
            <g fill="hsl(0 0% 95% / 0.4)">
                <circle r="3.25" />
                <circle cx="16" cy="4" r="6.5" />
            </g>
        </g>
        <ellipse id="flask-shadow" fill="hsl(0 0% 70%)" rx="16" ry="2" />
    </defs>
    <g class="hover" style="color: red;">
        <g transform="translate(50 50)">
            <use class="translate" transform="translate(0 8)" href="#flask-color" />
            <use opacity="0" transform="translate(0 8)" href="#flask-color" />
        </g>
        <g transform="translate(50 98)">
            <use class="scale" transform="scale(1)" href="#flask-shadow" />
        </g>
    </g>

    <g class="hover" style="color: green;" transform="translate(100 0)">
        <g transform="translate(50 50)">
            <use class="translate" transform="translate(0 8)" href="#flask-color" />
            <use opacity="0" transform="translate(0 8)" href="#flask-color" />
        </g>
        <g transform="translate(50 98)">
            <use class="scale" transform="scale(1)" href="#flask-shadow" />
        </g>
    </g>

    <g class="hover" style="color: blue;" transform="translate(200 0)">
        <g transform="translate(50 50)">
            <use class="translate" transform="translate(0 8)" href="#flask-color" />
            <use opacity="0" transform="translate(0 8)" href="#flask-color" />
        </g>
        <g transform="translate(50 98)">
            <use class="scale" transform="scale(1)" href="#flask-shadow" />
        </g>
    </g>
</svg>`,
	'fish-bowl': `<svg style="display: block; outline: 1px solid;" viewBox="-64.99999618530273 -52.5 130 140">
    <defs>
        <symbol id="rainbow-fish" viewBox="-2 -22 58 44" x="-29" y="-22" width="58" height="44">
            <defs>
                <path id="rainbow-fish-body" d="M -2 0 C 2 -8 12 -14 20 -14 C 30 -14 40 -6 46 0 C 40 6 30 14 20 14 C 12 14 2 8 -2 0 Z" />
                <clipPath id="rainbow-fish-clip">
                    <ellipse rx="12" ry="14" />		
                </clipPath>
                <linearGradient id="rainbow-fish-gradient" x1="0" y1="0" x2="1" y2="0"><stop stop-color="hsl(0 75% 67%)" offset="0" /><stop stop-color="hsl(51.42857142857143 75% 61.297093396292745%)" offset="0.166" /><stop stop-color="hsl(102.85714285714286 75% 65.8704694055762%)" offset="0.333" /><stop stop-color="hsl(154.28571428571428 75% 63.33243719813106%)" offset="0.5" /><stop stop-color="hsl(205.71428571428572 75% 63.33243719813106%)" offset="0.666" /><stop stop-color="hsl(257.14285714285717 75% 65.8704694055762%)" offset="0.833" /><stop stop-color="hsl(308.57142857142856 75% 61.297093396292745%)" offset="1" /></linearGradient>
                <pattern id="rainbow-fish-pattern" viewBox="-1 -1 2 2" width="2" height="2" patternUnits="userSpaceOnUse">
                    <circle fill="white" r="0.8" />
                </pattern>
                <mask id="rainbow-fish-mask">
                    <use fill="black" href="#rainbow-fish-body" />
                    <use fill="url(#rainbow-fish-pattern)" href="#rainbow-fish-body" />
                </mask>
                <mask id="rainbow-fish-mask-rainbow">
                    <use fill="black" href="#rainbow-fish-body" />
                    <use fill="url(#rainbow-fish-gradient)" href="#rainbow-fish-body" />
                </mask>
            </defs>
            <path transform="translate(17 10)" fill="currentColor" d="M 0 0 A 12 12 0 0 0 12 12 L 12 4 A 4 4 0 0 0 8 0 Z" />
            <path transform="translate(17 10)" fill="white" opacity="0.1" d="M 0 0 A 12 12 0 0 0 12 12 L 12 4 A 4 4 0 0 0 8 0 Z" />
            <path transform="scale(1 -1) translate(16 10)" fill="currentColor" d="M 0 0 A 12 12 0 0 0 12 12 L 12 4 A 4 4 0 0 0 8 0 Z" />
            <path transform="scale(1 -1) translate(16 10)" fill="white" opacity="0.15" d="M 0 0 A 12 12 0 0 0 12 12 L 12 4 A 4 4 0 0 0 8 0 Z" />
            <path transform="translate(40 -1)" fill="currentColor" d="M 0 0 C 0 15 5 15 15 15 C 15 0 10 0 0 0 Z" />
            <path transform="translate(40 -1)" fill="white" opacity="0.1" d="M 0 0 C 0 15 5 15 15 15 C 15 0 10 0 0 0 Z" />
            <path transform="scale(1 -1) translate(41 -1)" fill="currentColor" d="M 0 0 C 0 15 5 15 15 15 C 15 0 10 0 0 0 Z" />
            <path transform="scale(1 -1) translate(41 -1)" fill="white" opacity="0.15" d="M 0 0 C 0 15 5 15 15 15 C 15 0 10 0 0 0 Z" />

            <use fill="currentColor" href="#rainbow-fish-body" />
            <use mask="url(#rainbow-fish-mask)" fill="white" href="#rainbow-fish-body" />
            <use mask="url(#rainbow-fish-mask-rainbow)" fill="url(#rainbow-fish-gradient)" href="#rainbow-fish-body" />
            <use clip-path="url(#rainbow-fish-clip)" fill="currentColor" href="#rainbow-fish-body" />
            <g transform="translate(6 -1)">
                <circle fill="hsl(0 0% 70%)" r="5" />
                <circle fill="hsl(0 0% 20%)" r="4" />
                <circle fill="hsl(0 0% 99%)" r="2" cx="-1.25" cy="-1.25" />
            </g>
        </symbol>

        <mask id="fish-bowl-mask">
            <rect fill="black" x="-64.99999618530273" y="-52.5" width="130" height="140" />
            <rect fill="hsl(205, 65%, 55%)" x="-64.99999618530273" y="-52.5" width="130" height="140" />
        </mask>
        <clipPath id="fish-bowl-clip">
            <path d="M 0 -45 L 30 -45 M 15 -45 A 40 40 0 0 0 30 -30 A 60 60 0 1 1 -30 -30 A 40 40 0 0 0 15 -45 L -30 -45 Z" />
        </clipPath>
    </defs>

    <g clip-path="url(#fish-bowl-clip)">
        <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 2; 0 -2; 0 0"
            dur="10s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1;" 
            />
        <path fill="hsl(195, 100%, 85%)" d="M -84.99999618530273 -15 Q -69.99999618530273 -10 -54.999996185302734 -15 T -24.999996185302734 -15 5.000003814697266 -15 35.000003814697266 -15 65.000003814697266 -15 L 65.000003814697266 87.5 L -84.99999618530273 87.5 Z" />

        <g fill="hsl(0 0% 100% / 0.5)">
            <circle cx="-15" cy="0" r="6.5" />
            <circle cx="25" cy="-6" r="6.5" />
        </g>
    </g>

    <g style="color: hsl(205, 65%, 55%)"> 
        <g>
            <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 -1; 0 1; 0 0"
                dur="8s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1;"
            />
            <use transform="translate(30 15) scale(0.45)" href="#rainbow-fish" />
        </g>
        <g>
            <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 -1; 0 1; 0 0"
                dur="10s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1;"
            />
            <use transform="translate(12.5 50) scale(0.55)" href="#rainbow-fish" />
        </g>
        <g>
            <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 -1; 0 1; 0 0"
                dur="12s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1;"
            />
            <use transform="translate(-20 25) scale(-1 1) scale(0.65)" href="#rainbow-fish" />
        </g>
    </g>

    <g clip-path="url(#fish-bowl-clip)" mask="url(#fish-bowl-mask)">
        <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -2; 0 2; 0 0"
            dur="12s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1;"
        />
        <path fill="hsl(195, 100%, 85%)" d="M -64.99999618530273 -15 Q -49.999996185302734 -10 -34.999996185302734 -15 T -4.999996185302734 -15 25.000003814697266 -15 55.000003814697266 -15 85.000003814697266 -15 L 85.000003814697266 87.5 L -64.99999618530273 87.5 Z" />
        <g fill="hsl(0 0% 100% / 0.5)">
            <circle cx="10" r="3.25" />
            <circle cx="-30" cy="-5" r="3.25" />
        </g>
    </g>

    <g fill="none" stroke-linejoin="round" stroke-linecap="round">
        <g stroke-width="10">
            <path stroke="hsl(210, 22%, 49%)" d="M 0 -45 L 30 -45 M 15 -45 A 40 40 0 0 0 30 -30 A 60 60 0 1 1 -30 -30 A 40 40 0 0 0 -15 -45 L -30 -45 Z" />
            <path stroke="hsl(209, 28%, 39%)" pathLength="1" stroke-dasharray="0.3 1.6" stroke-dashoffset="1.5" d="M 0 -45 L 30 -45 M 15 -45 A 40 40 0 0 0 30 -30 A 60 60 0 1 1 -30 -30 A 40 40 0 0 0 -15 -45 L -30 -45 Z" />
            <path stroke="hsl(211, 39%, 23%)" d="M -28 82.5 L 28 82.5" />
            <path stroke="hsl(209, 61%, 16%)" d="M -28 82.5 L -2 82.5" />
        </g>
        <path stroke="hsl(211, 27%, 70%)" stroke-width="5" d="M -5 -47.5 L 10 -47.5 M 20 -47.5 L 24 -47.5" />
    </g>
</svg>`
};
