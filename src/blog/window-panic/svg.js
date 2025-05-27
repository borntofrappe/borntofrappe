export default {
  "tauri-window": `<svg style="--color-surface-1: light-dark(#f2f4f6, #252521); --color-surface-2: light-dark(#ebedef, #3a3a37); --color-surface-3: light-dark(#d1d6d8, #666968);" display="block" viewBox="-50 -50 900 700">
    <defs>
        <linearGradient id="mussel-gradient-body" x1="0" y1="0" x2="0" y2="1">
            <stop stop-color="#93abe2" offset="0" />
            <stop stop-color="#97b4f6" offset="0.45" />
            <stop stop-color="#b2b4e0" offset="1" />
        </linearGradient>
        <linearGradient id="mussel-gradient-eye" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop stop-color="#9ca0b4" offset="0" />
            <stop stop-color="#dfe4ee" offset="1" />
        </linearGradient>
        <symbol id="mussel-tauri" viewBox="0 0 210 234">
            <circle fill="#24C8DB" stroke="none" cx="86.35" cy="148.5" r="22.5" />
            <circle fill="#FFC131" stroke="none" cx="124" cy="85.6" r="22.5" />
            <path fill="#24C8DB" stroke="none" d="M69.0134 65.4936C30.2 73.3739 1 107.493 1 148.39C1 195.119 39.1229 233 86.1499 233C124.358 233 156.689 207.994 167.471 173.554C157.292 178.538 146.275 181.765 134.897 183.039C124.023 198.116 106.241 207.94 86.1499 207.94C53.0515 207.94 26.22 181.278 26.22 148.39C26.22 122.701 42.5902 100.811 65.5305 92.4581C64.5999 83.3843 65.7609 74.1388 69.0134 65.4936Z" />
            <path fill="#FFC131" stroke="none" d="M140.986 168.506C179.8 160.626 209 126.507 209 85.6102C209 38.8813 170.877 1 123.85 1C85.6418 1 53.3113 26.006 42.5294 60.4465C52.708 55.4618 63.7247 52.2348 75.1035 50.9613C85.9768 35.884 103.759 26.0601 123.85 26.0601C156.948 26.0601 183.78 52.7216 183.78 85.6102C183.78 111.3 167.41 133.19 144.469 141.542C145.4 150.616 144.239 159.861 140.986 168.506Z" />
        </symbol>
        <symbol id="mussel-1" viewBox="-79.5 -69.5 158 90">
            <g fill="url(#mussel-gradient-body)" stroke="url(#mussel-gradient-body)" stroke-width="1" stroke-linejoin="round" stroke-linecap="round">
                <path d="M 0 -66 C 3.59 -65.5 5.19 -60.41 7.19 -58 S 13.19 -61.2 19.19 -66 21.59 -61.61 22.4 -54.4 27.59 -58 34.8 -62 35.6 -56 34 -50 40.8 -51.21 47.19 -51.21 46.39 -45.61 44.39 -41.21 50.8 -41.61 56.39 -41.61 56.8 -35.6 56 -29.21 61.6 -28.8 66.39 -27.21 65.19 -21.21 62.39 -16.8 66.8 -14 74.8 -13.6 72.39 -7.6 62.8 -0.81 C 35 20 10 20 0 20 Z" />
                <path transform="scale(-1 1)" d="M 0 -66 C 3.59 -65.5 5.19 -60.41 7.19 -58 S 13.19 -61.2 19.19 -66 21.59 -61.61 22.4 -54.4 27.59 -58 34.8 -62 35.6 -56 34 -50 40.8 -51.21 47.19 -51.21 46.39 -45.61 44.39 -41.21 50.8 -41.61 56.39 -41.61 56.8 -35.6 56 -29.21 61.6 -28.8 66.39 -27.21 65.19 -21.21 62.39 -16.8 66.8 -14 74.8 -13.6 72.39 -7.6 62.8 -0.81 C 35 20 10 20 0 20 Z" />
            </g> 
            <g transform="translate(15 -8)">
                <ellipse fill="hsl(0 0% 30%)" stroke="url(#mussel-gradient-eye)" stroke-width="3" paint-order="stroke" rx="12" ry="15" />
                <ellipse transform="translate(-3 -2) rotate(100)" fill="#fafdfd" rx="7" ry="5" />
            </g>
            <g transform="translate(-15 -8)">
                <ellipse fill="hsl(0 0% 30%)" stroke="url(#mussel-gradient-eye)" stroke-width="3" paint-order="stroke" rx="12" ry="15" />
                <ellipse transform="translate(-3 -2) rotate(100)" fill="#fafdfd" rx="7" ry="5" />
            </g>
        </symbol>
        <symbol id="mussel-2" viewBox="-83.5 -66.5 166 87">
            <g fill="url(#mussel-gradient-body)" stroke="url(#mussel-gradient-body)" stroke-width="1" stroke-linejoin="round" stroke-linecap="round">
                <path d="M 0 -64.81 C 5.19 -62.41 7.59 -59.2 8.4 -56 S 13.19 -60.81 21.19 -64 22 -58.4 21.19 -52.8 27.19 -55.61 35.19 -55.61 37.19 -50.8 36 -46 42 -46.8 53.6 -46.8 52.8 -42 49.6 -35.21 58.39 -34 66.39 -32.41 62.8 -26.41 62 -20.41 67.19 -16.8 78 -14.41 73.6 -7.6 67.6 -1.2 C 50 15 20 20 0 20 Z" />
                <path transform="scale(-1 1)" d="M 0 -64.81 C 5.19 -62.41 7.59 -59.2 8.4 -56 S 13.19 -60.81 21.19 -64 22 -58.4 21.19 -52.8 27.19 -55.61 35.19 -55.61 37.19 -50.8 36 -46 42 -46.8 53.6 -46.8 52.8 -42 49.6 -35.21 58.39 -34 66.39 -32.41 62.8 -26.41 62 -20.41 67.19 -16.8 78 -14.41 73.6 -7.6 67.6 -1.2 C 50 15 20 20 0 20 Z" />
            </g> 
            <g transform="translate(15 -32)">
                <ellipse fill="hsl(0 0% 30%)" stroke="url(#mussel-gradient-eye)" stroke-width="3" paint-order="stroke" rx="12" ry="10" />
                <ellipse transform="translate(2 5) rotate(-10)" fill="#fafdfd" rx="4" ry="3" />
            </g>
            <g transform="translate(-15 -32)">
                <ellipse fill="hsl(0 0% 30%)" stroke="url(#mussel-gradient-eye)" stroke-width="3" paint-order="stroke" rx="12" ry="10" />
                <ellipse transform="translate(2 5) rotate(-10)" fill="#fafdfd" rx="4" ry="3" />
            </g>
        </symbol>
    </defs>
    <use transform="translate(55 -5) rotate(-3)" href="#mussel-2" x="-80" y="-80" width="160" height="160" />
    <rect width="800" height="600" fill="var(--color-surface-1, hsl(0 0% 99%))" rx="20" />
    <path fill="var(--color-surface-2, hsl(0 0% 95%))"  d="M 0 40 0 20 A 20 20 0 0 1 20 0 L 780 0 A 20 20 0 0 1 800 20 L 800 40 Z" />
    <g fill="var(--color-surface-3, hsl(0 0% 82%))" transform="translate(30 20)">
        <circle r="7" /> 
        <circle cx="24" r="7" /> 
        <circle cx="48" r="7" /> 
    </g>
    <use transform="translate(750 580)" href="#mussel-1" x="-90" y="-90" width="180" height="180" />
    <use transform="translate(400 320)" href="#mussel-tauri" fill="none" stroke="hsl(0 0% 40%)" x="-90" y="-90" width="180" height="180" />
</svg>`,
};
