export default {
	path: `<svg style="display: block;" viewBox="0 0 100 100">
    <path fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M 77 84 C 60 87 47.5 78 47.5 63 M 62 94 C 46 94 35 80 35 63 A 12.5 12.5 0 0 1 60 63 M 37 93 C 18 81 20 39 47.5 38 A 25 25 0 0 1 72.5 63 L 72.5 64 M 17 81 C 4 52 25 27 50 27 C 79 28 85 51 85 65 M 10 36 C 25 10 75 10 90 36 M 21 12 C 36 2 66 2 79 12" />
</svg>`,
	animation: `<svg style="display: block;" viewBox="0 0 100 100">
    <style>
    g#fingerprint > path {
        opacity: 0;
        animation: fade-in 2s infinite;
    }

    @keyframes fade-in {
        to {
            opacity: 1;
        }
    }

    g#fingerprint > path:nth-child(1) {
        animation-delay: 0.1s;
    }

    g#fingerprint > path:nth-child(2) {
        animation-delay: 0.2s;
    }

    g#fingerprint > path:nth-child(3) {
        animation-delay: 0.3s;
    }

    g#fingerprint > path:nth-child(4) {
        animation-delay: 0.4s;
    }

    g#fingerprint > path:nth-child(5) {
        animation-delay: 0.5s;
    }

    g#fingerprint > path:nth-child(6) {
        animation-delay: 0.6s;
    }
    </style>
    <g id="fingerprint" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M 77 84 C 60 87 47.5 78 47.5 63" />
        <path d="M 62 94 C 46 94 35 80 35 63 A 12.5 12.5 0 0 1 60 63" />
        <path d="M 37 93 C 18 81 20 39 47.5 38 A 25 25 0 0 1 72.5 63 L 72.5 64" />
        <path d="M 17 81 C 4 52 25 27 50 27 C 79 28 85 51 85 65" />
        <path d="M 10 36 C 25 10 75 10 90 36" />
        <path d="M 21 12 C 36 2 66 2 79 12" />
    </g>
</svg>`
};
