export default {
	pan: `<svg style="display: block;" viewBox="-60 -71.5 120 105">
    <style>
        #pan-face {
            animation: pan 17s infinite;
        }

        @keyframes pan {
            0% {
                animation-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
            }
            5% {
                scale: 1.1;
                rotate: -55deg;
                transform: translate(0, -7.5px) rotate(45deg);
            }
            10% {
                scale: 1.15;
                rotate: 0deg;
                transform: translate(0, -5px) rotate(0deg);
            }
            15% {
                scale: 1.1;
                rotate: 55deg;
                transform: translate(0, -7.5px) rotate(-45deg);
                animation-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
            }
            20% {
                scale: 1;
                rotate: 0deg;
                transform: translate(0, 0px) rotate(0deg);
            }
        }
    </style>
    <defs>
        <filter id="pan-filter">
            <feTurbulence baseFrequency="2 0.1" />
            <feBlend in2="SourceGraphic" mode="overlay" />
            <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <rect id="pan-base" width="16" height="16" rx="0.2" />
        <rect id="pan-overlay" x="1.5" y="1.5" width="13" height="13" rx="0.2" />
        <g id="pan-block">
            <use filter="url(#pan-filter)" fill="hsl(37 35% 66%)" href="#pan-base" />
            <use fill="none" stroke="currentColor" href="#pan-base" />
            <use filter="url(#pan-filter)" fill="hsl(35 74% 83%)" href="#pan-overlay" />
            <use fill="none" stroke="currentColor" href="#pan-overlay" />
        </g>
        <symbol id="pan-block-1" viewBox="-0.5 -0.5 17 17">
            <use href="#pan-block" />
            <path transform="translate(8 8)" fill="currentColor" stroke="currentColor" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" d="M -1.25 -4.75 L 1 -4.75 1 4.75 -1 4.75 -1 -2.75 -2.5 -2.75 Z" />
        </symbol>
        <symbol id="pan-block-2" viewBox="-0.5 -0.5 17 17">
            <use href="#pan-block" />
            <path transform="translate(8 8)" fill="currentColor" stroke="currentColor" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" d="M -3 -1.75 A 3 3 0 0 1 3 -1.75 C 3 1.25 -0.75 1.25 -0.75 2.75 L 3 2.75 3 4.75 -3 4.75 -3 2.75 C -3 0 0.75 0 0.75 -1.75 A 0.75 0.75 0 0 0 -0.75 -1.75 Z" />
        </symbol>
        <symbol id="pan-block-3" viewBox="-0.5 -0.5 17 17">
            <use href="#pan-block" />
            <path transform="translate(8 8)" fill="currentColor" stroke="currentColor" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" d="M -0.5 -0.75 0 -0.75 A 1 1 0 0 0 0 -2.75 1 1 0 0 0 -1 -1.75 L -3 -1.75 A 3 3 0 0 1 3 -1.75 2 2 0 0 1 1 0.25 L 0 0.25 0 -0.25 1 -0.25 A 2 2 0 0 1 3 1.75 3 3 0 0 1 -3 1.75 L -1 1.75 A 1 1 0 0 0 1 1.75 1 1 0 0 0 0 0.75 L -0.5 0.75 Z" />
        </symbol>
    </defs>
    <g stroke="hsl(352 60% 20%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path filter="url(#pan-filter)" fill="hsl(37 35% 66%)" stroke="none" d="M -44 26.5 -44 -23.5 A 5 5 0 0 1 -39 -28.5 L 39 -28.5 A 5 5 0 0 1 44 -23.5 L 44 26.5" />
        <path fill="none" d="M -44 26.5 -44 -23.5 A 5 5 0 0 1 -39 -28.5 L 39 -28.5 A 5 5 0 0 1 44 -23.5 L 44 26.5" />
        <path filter="url(#pan-filter)" fill="hsl(35 74% 83%)" stroke="none" d="M -39 26.5 -39 -23.5 39 -23.5 39 26.5" />
        <path fill="none" d="M -39 26.5 -39 -23.5 39 -23.5 39 26.5" />
        <path opacity="0.2" fill="white" stroke="none" d="M -38 22.5 -38 26.5 -19.5 26.5 5 -22.5 -15.5 -22.5 M -10 26.5 14.5 -22.5 10.5 -22.5 -14 26.5" />
        <g id="pan-face">
            <g transform="translate(0 -2)" fill="none">
                <path transform="translate(-15 0)" d="M -2.5 0 A 2.5 2.5 0 0 1 2.5 0" />
                <path transform="translate(15 0)" d="M -2.5 0 A 2.5 2.5 0 0 1 2.5 0" />
            </g>
            <g transform="translate(0 16)" stroke-width="4">
                <path transform="translate(0 -2) scale(1 0.95) translate(0 2)" fill="hsl(352 60% 20%)" stroke="hsl(352 60% 20%)" d="M 0 0 A 8 8 0 0 0 8 -8 L -8 -8 A 8 8 0 0 0 0 0 Z" />
                <path transform="translate(0 -2) scale(0.5 0.45) translate(0 2)" fill="#fc494b" stroke="#fc494b" d="M 0 0 A 8 8 0 0 0 8 -8 L -8 -8 A 8 8 0 0 0 0 0 Z" />
            </g>
        </g>
        <g transform="translate(0 26.5)">
            <rect filter="url(#pan-filter)" fill="hsl(37 35% 66%)" stroke="none" x="-48" width="96" height="6" rx="3" />
            <rect fill="none" x="-48" width="96" height="6" rx="3" />
            <path opacity="0.3" fill="white" stroke="none" d="M 37 1 45 1 A 2 2 0 0 1 45 5 L 37 5 A 2 2 0 0 0 37 1" />
            <path fill="none" d="M -9 0 A 3 3 0 0 0 -6 3 L 6 3 A 3 3 0 0 0 9 0 Z" />
        </g>
    </g>
    <g style="color: hsl(352 60% 20%);">
        <use transform="rotate(-40) translate(0 -70) rotate(22)" href="#pan-block-1" x="-12" y="-12" width="24" height="24" />
        <use transform="rotate(-4) translate(0 -47.5) rotate(10)" href="#pan-block-2" x="-12" y="-12" width="24" height="24" />
        <use transform="rotate(35) translate(0 -65) rotate(-40)" href="#pan-block-3" x="-12" y="-12" width="24" height="24" />
    </g>
</svg>`
};
