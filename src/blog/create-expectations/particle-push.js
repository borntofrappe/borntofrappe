import { browser } from "$app/environment";

if (browser && customElements && !customElements.get("particle-push")) {
  class ParticlePush extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });

      const template = document.createElement("template");
      template.innerHTML = `<style>
            :host {
                display: block;
                position: relative;
                max-inline-size: max-content;
                margin-inline: auto;
            }
        
            :host > button {
                position: absolute;
                inset-inline-start: 50%;
                inset-block-start: 50%;
                translate: -50% -50%;
            }
        
            canvas {
                display: block;
            }
        
            button {
                display: block;
                inline-size: 2.5rem;
                block-size: 2.5rem;
                padding: 0;
                border-radius: 1e5px;
                color: inherit;
                background: none;
                border: none;
                transition: scale 0.2s;
                transition-delay: 0.1s;
            }
        
            button:active {
                scale: 0.7;
                transition-delay: 0s;
            }
        
            button:focus {
                outline: 2px solid currentColor;
                outline-offset: 2px;
            }
        
            button:focus:not(:focus-visible) {
                outline: none;
            }
        
            button > svg {
                inline-size: 100%;
                block-size: 100%;
            }
        
            .visually-hidden {
                display: none;
            }
        </style>
        <canvas style="display: block; inline-size: 100%; max-inline-size: 340px" width="340" height="280">
        </canvas>
        <button>
            <svg width="1em" height="1em" viewBox="-8.5 -8.5 17 17">
                <path fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round" d="M 8.5 0 A 8.5 8.5 0 0 0 -8.5 0 8.5 8.5 0 0 0 8.5 0 M -1 -1 -1 -3 A 1 1 0 0 1 1 -3 L 1 -1 3 -1 A 1 1 0 0 1 3 1 L 1 1 1 3 A 1 1 0 0 1 -1 3 L -1 1 -3 1 A 1 1 0 0 1 -3 -1" />
            </svg>
            <span class="visually-hidden">Spawn particles</span>
        </button>`;

      shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const { shadowRoot } = this;
      if (!shadowRoot) return;

      const canvas = /** @type {HTMLCanvasElement} */ (
        shadowRoot.querySelector("canvas")
      );
      const button = /** @type { HTMLButtonElement }*/ (
        shadowRoot.querySelector("button")
      );

      /**
       * @param {number} t
       * @returns {number}
       */
      const easing = (t) => -t * (t - 2.0);
      const PI = Math.PI;
      const TAU = PI * 2;
      const [min, max] = [8, 13];
      /** @type {{r0: number, x1: number, y1: number, ticker: number}[]} */
      let particles = [];
      this.frame = null;
      const cycle = 100;

      const context = /** @type { CanvasRenderingContext2D }*/ (
        canvas.getContext("2d")
      );
      const { width, height } = canvas;

      const x = Math.floor(width / 2);
      const y = Math.floor(height / 2);
      const rMax = Math.floor(Math.min(x, y) / 12);

      const draw = () => {
        context.clearRect(0, 0, width, height);
        context.save();
        context.translate(x, y);

        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].ticker++;
          const { r0, x1, y1 } = particles[i];
          const t = easing(particles[i].ticker / cycle);
          const x = t * x1;
          const y = t * y1;
          const r = (1 - t) * r0;
          context.beginPath();
          context.arc(x, y, r, 0, TAU);
          context.fill();
          context.closePath();

          if (particles[i].ticker >= cycle) {
            particles = [...particles.slice(0, i), ...particles.slice(i + 1)];
          }
        }
        context.restore();
      };

      const update = () => {
        if (particles.length === 0 && this.frame) {
          cancelAnimationFrame(this.frame);
          this.frame = null;
        } else {
          this.frame = requestAnimationFrame(update);
        }

        draw();
      };

      button.addEventListener("click", () => {
        const color = getComputedStyle(button).getPropertyValue("color");
        context.fillStyle = color;
        const copies = (Math.floor(Math.random() * (max - min)) + min) * 2;

        particles.push(
          ...Array(copies)
            .fill("")
            .map((_, i) => {
              const a = (TAU / copies) * i;
              const x1 = Math.cos(a) * Math.floor(x);
              const y1 = Math.sin(a) * Math.floor(y);
              return {
                r0: rMax,
                x1,
                y1,
                ticker: i % 2 === 0 ? 2 : 6,
              };
            })
        );

        if (this.frame === null) {
          this.frame = requestAnimationFrame(update);
        }
      });
    }

    disconnectedCallback() {
      if (!this.frame) return;
      cancelAnimationFrame(this.frame);
    }
  }

  customElements.define("particle-push", ParticlePush);
}
