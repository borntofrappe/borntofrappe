import { browser } from "$app/environment";

/** @typedef { 'courage' | 'wisdom' | 'power' } Key */

if (browser && customElements && !customElements.get("hey-listen")) {
  class HeyListen extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });

      /** @type Object.<Key,string> */
      this.colors = {
        courage: "hsl(44 92% 63%)",
        wisdom: "hsl(210 83% 53%)",
        power: "hsl(356 75% 53%)",
      };

      shadowRoot.innerHTML = `<svg style="display: block;" viewBox="-47.5 -35 95 65">
    <defs>
        <linearGradient id="gradient-linear" x1="0" y1="0" x2="0" y2="1">
            <stop stop-color="hsl(0 0% 100%)" stop-opacity="0.22" offset="0.2" />
            <stop stop-color="hsl(0 0% 100%)" stop-opacity="0.1" offset="0.5" />
            <stop stop-color="hsl(0 0% 100%)" stop-opacity="0.22" offset="0.8" />
        </linearGradient>
        <radialGradient id="gradient-radial">
            <stop stop-color="hsl(0 0% 100%)" stop-opacity="0.4" offset="0.5" />
            <stop stop-color="hsl(0 0% 100%)" stop-opacity="0.1" offset="1" />
        </radialGradient>
        <filter id="filter-blur">
            <feGaussianBlur stdDeviation="2" />
        </filter>
        <g id="wings">
            <path id="wing" d="M 10 0 C 30 0 40 20 30 23 C 20 25 10 12 10 0 C 18 -16 36 -28 42 -22 C 50 -15 35 6 10 0 Z" />
            <use transform="scale(-1 1)" href="#wing" />
        </g>
    </defs>
    <g id="flip">
        <g id="rotate">
            <g id="translate">
            <g id="scale">
                <g id="animate">
                    <use fill="currentColor" href="#wings" />
                    <use fill="url(#gradient-linear)" href="#wings" />
                </g>
            </g>
            <circle fill="currentColor" r="14" />
            <circle filter="url(#filter-blur)" fill="url(#gradient-radial) hsl(0 0% 100% / 0.2)" r="24" />
            </g>
        </g>
    </g>
</svg>`;
    }

    static get observedAttributes() {
      return ["spirit"];
    }

    get spirit() {
      return this.getAttribute("spirit") || "";
    }

    /**
     * @param { string } s
     */
    set spirit(s) {
      this.setAttribute("spirit", s);
    }

    /**
     * @param { string } name
     * @param { Key } oldValue
     * @param { Key } newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
      const color = this.colors[newValue];
      if (color) {
        const shadowRoot = /** @type { ShadowRoot } */ (this.shadowRoot);
        shadowRoot.querySelector("svg")?.style.setProperty("color", color);
      }
    }

    connectedCallback() {
      if (!this.spirit && "spirits" in this && Array.isArray(this.spirits)) {
        this.spirit = this.spirits[0];
      }

      const shadowRoot = /** @type { ShadowRoot } */ (this.shadowRoot);

      const duration = 2500;
      const delay = 3000;

      const options = {
        duration,
        easing: "cubic-bezier(0.34, 1.36, 0.64, 1)",
      };

      const keyframesRotate = [
        { rotate: "0deg" },
        { rotate: "5deg" },
        { rotate: "5deg" },
        { rotate: "0deg" },
        { rotate: "-5deg" },
        { rotate: "0deg" },
      ];

      const keyframesTranslate = [
        { translate: "0px 0px" },
        { translate: "0px -5px" },
        { translate: "0px -5px" },
        { translate: "0px 0px" },
        { translate: "0px 5px" },
        { translate: "0px 0px" },
      ];

      const keyframesScale = [
        { scale: "1 1" },
        { scale: "1 1.1" },
        { scale: "1 1.1" },
        { scale: "1 1" },
        { scale: "1 0.9" },
        { scale: "1 1" },
      ];

      const optionsRepeat = {
        duration: Math.floor(duration / 2),
        delay: delay * -1,
        easing: "cubic-bezier(0.37, 0, 0.63, 1)",
        iterations: Infinity,
      };

      const keyframesRepeat = [
        { scale: "1 1", rotate: "0deg", translate: "0px 0px" },
        { scale: "1 0.975", rotate: "0.5deg", translate: "0px 0.1px" },
        { scale: "1 0.95", rotate: "0deg", translate: "0px 0.2px" },
        { scale: "1 0.925", rotate: "-0.5deg", translate: "0px 0.2px" },
        { scale: "1 0.9", rotate: "0deg", translate: "0px 0px" },
        { scale: "1 0.925", rotate: "0.5deg", translate: "0px -0.1px" },
        { scale: "1 0.95", rotate: "0deg", translate: "0px -0.2px" },
        { scale: "1 0.975", rotate: "-0.5deg", translate: "0px -0.1px" },
        { scale: "1 1", rotate: "0deg", translate: "0px 0px" },
      ];

      const flip = /** @type { SVGGElement } */ (
        shadowRoot.querySelector("svg #flip")
      );
      const rotate = /** @type { SVGGElement } */ (
        shadowRoot.querySelector("svg #rotate")
      );
      const translate = /** @type { SVGGElement } */ (
        shadowRoot.querySelector("svg #translate")
      );
      const scale = /** @type { SVGGElement } */ (
        shadowRoot.querySelector("svg #scale")
      );
      const repeat = /** @type { SVGGElement } */ (
        shadowRoot.querySelector("svg #animate")
      );

      repeat.animate(keyframesRepeat, optionsRepeat);

      this.interval = setInterval(() => {
        flip.style.setProperty("scale", Math.random() > 0.5 ? "1 1" : "-1 1");
        rotate.animate(keyframesRotate, options);
        translate.animate(keyframesTranslate, options);
        scale.animate(keyframesScale, options);
      }, duration + delay);
    }

    disconnectedCallback() {
      clearInterval(this.interval);
    }
  }

  customElements.define("hey-listen", HeyListen);
}
