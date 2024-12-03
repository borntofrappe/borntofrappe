<script>
  import { onMount } from "svelte";

  /** @type { HTMLDivElement }*/
  let element;
  onMount(() => {
    if (customElements && !customElements.get("paint-svg-text")) {
      // svelte-ignore perf_avoid_nested_class
      class PaintSVGText extends HTMLElement {
        #init = false;
        constructor() {
          super();
        }
        connectedCallback() {
          if (this.#init) return;

          const color = this.getAttribute("color") || "white";
          const background = this.getAttribute("background") || "black";
          const padding = this.getAttribute("padding") || "0 0";
          const borderRadius = this.getAttribute("border-radius") || "0";

          const [paddingX, paddingY] = padding.split(" ").map((p) => +p);
          const radius = +borderRadius;

          const svg = /** @type { SVGSVGElement} */ (this.querySelector("svg"));

          svg.querySelectorAll("text").forEach((text) => {
            text.setAttribute("fill", color);
            if (text.hasAttribute("stroke")) {
              text.setAttribute("stroke", color);
            }
            const { x, y, width, height } = text.getBBox();
            const rect = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "rect"
            );

            const [px, py] = [paddingX * width, paddingY * height];
            const rx = radius * Math.min(width, height);
            rect.setAttribute("fill", background);
            rect.setAttribute("x", (x - px / 2).toString());
            rect.setAttribute("y", (y - py / 2).toString());
            rect.setAttribute("width", (width + px).toString());
            rect.setAttribute("height", (height + py).toString());
            rect.setAttribute("rx", rx.toString());
            text.insertAdjacentElement("beforebegin", rect);
          });

          this.#init = true;
        }
      }

      customElements.define("paint-svg-text", PaintSVGText, {
        extends: "figure",
      });
    }

    element.innerHTML = `<figure style="margin: 0;" is="paint-svg-text" color="hsl(188 100% 16%)" background="hsl(35 100% 87%)" padding="0.1 0.5" border-radius="0.2">
    <svg style="display: block;" viewBox="-60 -65 120 130">
        <defs>
            <rect id="card-background" x="-60" y="-65" width="120" height="130" rx="4" />
            <clipPath id="card-clip">
                <use href="#card-background" />
            </clipPath>
            <marker id="card-marker-1" viewBox="-5 -4 10 8" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto" refY="-4">
                <path fill="hsl(5 100% 80%)" stroke="hsl(5 100% 80%)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M -4.5 -3.5 4.5 -3.5 0 3.5 Z" />
            </marker>
            <marker id="card-marker-2" viewBox="-4 -4 8 8" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto" refY="-4">
                <path fill="hsl(32 95% 76%)" stroke="hsl(32 95% 76%)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M -3.5 -3.5 -3.5 3.5 0 2 3.5 3.5 3.5 -3.5 Z" />
            </marker>
            <filter id="card-filter">
                <feTurbulence baseFrequency="1" numOctaves="3" />
                <feSpecularLighting surfaceScale="40" specularConstant="0.75" specularExponent="20" lighting-color="hsl(0 0% 100%)">
                    <fePointLight z="50" />
                </feSpecularLighting>
            </filter>
        </defs>
        <g clip-path="url(#card-clip)">
            <use fill="hsl(188 100% 16%)" href="#card-background" />
            <g fill="none">
                <path marker-start="url(#card-marker-1)" marker-mid="url(#card-marker-1)" marker-end="url(#card-marker-1)" d="M -60 -55 -30.884672164916992 -44.045833587646484 -0.000017166130419354886 -40.32562255859375 30.88465118408203 -44.04582595825195 60 -55" />
                <path marker-start="url(#card-marker-2)" marker-mid="url(#card-marker-2)" marker-end="url(#card-marker-2)" d="M -45.771297454833984 -48.648502349853516 -15.554006576538086 -41.258827209472656 15.553971290588379 -41.258827209472656 45.77131652832031 -48.64851760864258" />
            </g>
            <path fill="none" stroke="hsl(183 100% 30%)" d="M -60 -55 A 130 130 0 0 0 60 -55" />
        </g>
        <g transform="translate(0 42)" >
            <g fill="hsl(36 83% 53%)">
                <rect x="-11" width="11" height="11" />
                <rect y="-11" width="11" height="11" />
            </g>
            <g fill="hsl(36 100% 45%)">
                <rect x="-11" y="-11" width="11" height="11" />
                <rect width="11" height="11" />
            </g>
            <g fill="none" stroke="hsl(183 100% 30%)" stroke-linecap="round" stroke-linejoin="round">
                <path d="M -11 0 11 0 M 0 11 0 -11" />
                <path d="M 0 -11 C -15 -14 -5 -25 0 -12 M 0 -11 C 15 -15 5 -25 0 -12" />
            </g>
        </g>
        <use filter="url(#card-filter)" fill="transparent" href="#card-background" />
		<g stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" font-family="serif" style="text-transform:uppercase;" letter-spacing="1" font-size="10" text-anchor="middle">
            <text y="-11" fill="hsl(35 100% 87%)" stroke="hsl(35 100% 87%)">Joyeux</text>
            <text y="11" fill="hsl(35 100% 87%)" stroke="hsl(35 100% 87%)">anniversaire</text>
        </g>
    </svg>
</figure>`;
  });
</script>

<div bind:this={element}></div>

<style>
  div {
    max-inline-size: 22rem;
    margin-inline: auto;
  }
</style>
