import { browser } from '$app/environment';

if (browser && customElements && !customElements.get('white-rose')) {
	class WhiteRose extends HTMLElement {
		constructor() {
			super();
			const shadowRoot = this.attachShadow({ mode: 'open' });
			shadowRoot.innerHTML = `<style>
            :host {
                display: block;
                text-align: center;
            }
        
            svg {
                max-inline-size: 3.5rem;
                inline-size: 100%;
                block-size: auto;
            }
        </style>
        <svg viewBox="-25 -51 50 90">
            <defs>
                <g id="flower-petal">
                    <path d="M 0 0 C 16 0 24 -8 20 -15 C 16 -22 16 -35 20 -42 C 12 -42 3 -40 0 -33 C -3 -40 -12 -42 -20 -42 C -16 -35 -16 -22 -20 -15 C -24 -8 -16 0 0 0 Z" />
                    <path fill="hsl(0 0% 0%)" stroke="hsl(0 0% 0%)" opacity="0.03" d="M 0 0 C -16 0 -24 -8 -20 -15 C -16 -22 -16 -35 -20 -42 C -12 -42 -3 -40 0 -33 C 5 -24 12 0 0 0 Z" />
                </g>
                <path id="flower-stem" d="M 0 0 0 35 M 0 7 4 9 0 11 M 0 18 -4 20 0 22" />
                <path id="flower-leaf" transform="translate(0 35)" d="M 0 0 C 12.5 0 17.5 -5 17.5 -12.5 C 12.5 -10 0 -15 0 0 Z" />
            </defs>
            <g stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <g fill="hsl(89 68% 51%)" stroke="hsl(89 68% 51%)">
                    <use href="#flower-stem" />
                    <use fill="hsl(0 0% 0%)" stroke="hsl(0 0% 0%)" opacity="0.06" href="#flower-stem" />
                    <use href="#flower-leaf" />
                </g>
                <g fill="hsl(0 0% 98%)" stroke="hsl(0 0% 98%)">
                    <g transform="scale(-1 1) scale(0.9 1.1)">
                        <use href="#flower-petal" />
                        <use fill="hsl(0 0% 0%)" stroke="hsl(0 0% 0%)" opacity="0.06" href="#flower-petal" />
                    </g>
                    <use href="#flower-petal" />
                </g>
            </g>
        </svg>`;
		}
	}

	class ShadowRose extends HTMLElement {
		constructor() {
			super();
			const shadowRoot = this.attachShadow({ mode: 'open' });
			shadowRoot.innerHTML = `<style>
            :host {
                display: block;
                text-align: center;
            }
        
            svg {
                max-inline-size: 3.5rem;
                inline-size: 100%;
                block-size: auto;
            }
        </style>
        <svg viewBox="-25 -51 50 90">
            <defs>
                <g id="flower-petal">
                    <path d="M 0 0 C 16 0 24 -8 20 -15 C 16 -22 16 -35 20 -42 C 12 -42 3 -40 0 -33 C -3 -40 -12 -42 -20 -42 C -16 -35 -16 -22 -20 -15 C -24 -8 -16 0 0 0 Z" />
                    <path fill="hsl(0 0% 0%)" stroke="hsl(0 0% 0%)" opacity="0.03" d="M 0 0 C -16 0 -24 -8 -20 -15 C -16 -22 -16 -35 -20 -42 C -12 -42 -3 -40 0 -33 C 5 -24 12 0 0 0 Z" />
                </g>
                <path id="flower-stem" d="M 0 0 0 35 M 0 7 4 9 0 11 M 0 18 -4 20 0 22" />
                <path id="flower-leaf" transform="translate(0 35)" d="M 0 0 C 12.5 0 17.5 -5 17.5 -12.5 C 12.5 -10 0 -15 0 0 Z" />
            </defs>
            <g stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <g fill="hsl(89 68% 51%)" stroke="hsl(89 68% 51%)">
                    <use href="#flower-stem" />
                    <use fill="hsl(0 0% 0%)" stroke="hsl(0 0% 0%)" opacity="0.06" href="#flower-stem" />
                    <use href="#flower-leaf" />
                </g>
                <g part="rose" fill="hsl(0 0% 98%)" stroke="hsl(0 0% 98%)">
                    <g transform="scale(-1 1) scale(0.9 1.1)">
                        <use href="#flower-petal" />
                        <use fill="hsl(0 0% 0%)" stroke="hsl(0 0% 0%)" opacity="0.06" href="#flower-petal" />
                    </g>
                    <use href="#flower-petal" />
                </g>
            </g>
        </svg>`;
		}
	}

	class ShadowBouquet extends HTMLElement {
		constructor() {
			super();
			const shadowRoot = this.attachShadow({ mode: 'open' });
			shadowRoot.innerHTML = `<style>
            div {
                display: flex;
                gap: 0.75rem;
                flex-wrap: wrap;
                justify-content: center;
            }
        </style>
        <div>
            <shadow-rose></shadow-rose>
            <shadow-rose exportparts="rose"></shadow-rose>
            <shadow-rose></shadow-rose>
        </div>`;
		}
	}

	customElements.define('white-rose', WhiteRose);
	customElements.define('shadow-rose', ShadowRose);
	customElements.define('shadow-bouquet', ShadowBouquet);
}
