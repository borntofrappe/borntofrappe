<script>
  import { onMount } from "svelte";

  /** @type {HTMLDivElement} */
  let widget;

  onMount(() => {
    if (!customElements.get("chubby-cucco")) {
      // svelte-ignore perf_avoid_nested_class
      class ChubbyCucco extends HTMLElement {
        constructor() {
          super();

          const shadowRoot = this.attachShadow({ mode: "open" });

          shadowRoot.innerHTML = `<style>
	svg {
		inline-size: 100%;
		block-size: 100%;
	}
</style>
<svg style="display: block;" viewBox="-0.375 3.9138975143432617 99.375 83.08610534667969">
	<g>
		<g stroke="hsl(240 11% 34%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path fill="hsl(40 23% 97%)" d="M 67 18 C 82 18 86 26 87 40 87 66 75 82 48 82 29 82 14 75 14 60 4 62 2 44 8 42 2 36 6 30 10 30 15 29 23 36 25 43 23 36 15 29 10 30 10 19 24 15 30 28 35 38 45 38 52 27 56 22 58 18 67 18" />
			<path fill="hsl(358 83% 68%)" d="M 63 18 C 60 19 57 16 58 13 59 9 63 9 65 10 68 12 68 10 71 9 77 8 78 16 73 18 90 20 90 44 90 54 89 60 79 60 79 50 79 46 76 43 69 43 55 42 55 22 63 18" />
			<path fill="none" d="M 62 62 C 60 78 38 76 38 63 30 60 34 46 44 52" />
			<path fill="hsl(31 93% 68%)" d="M 87 33 C 92 33 94 36 94 39 94 43 84 44 84 39 84 35 85 33 87 33" />
		</g>
		<circle fill="hsl(240 11% 34%)" cx="72" cy="33" r="3.5" />
		<circle fill="hsl(0 0% 98%)" cx="72.75" cy="32.75" r="1.5" />
	</g>
</svg>`;
        }

        adoptedCallback() {
          const keyframes = [
            { translate: "0px 0px" },
            { translate: "0px 1px" },
            { translate: "0px -4px" },
            { translate: "0px 0px" },
          ];

          const options = {
            duration: 500,
            delay: 200,
            easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            iterations: 5,
          };

          if (this.shadowRoot) {
            const group = /** @type { SVGGElement }*/ (
              this.shadowRoot.querySelector("svg > g")
            );
            group.animate(keyframes, options);
          }
        }
      }

      customElements.define("chubby-cucco", ChubbyCucco);

      const button = /** @type { HTMLButtonElement }*/ (
        widget.querySelector("button")
      );

      const handleAdoption = () => {
        const chubbyCucco = /** @type { HTMLElement }*/ (
          widget.querySelector("chubby-cucco")
        );
        const iframe = /** @type { HTMLIFrameElement }*/ (
          widget.querySelector("iframe")
        );

        const contentDocument = /** @type { Document }*/ (
          iframe.contentDocument
        );
        contentDocument.body.appendChild(document.adoptNode(chubbyCucco));
        button.remove();
      };

      button.addEventListener("click", handleAdoption, { once: true });

      return () => {
        button.removeEventListener("click", handleAdoption);
      };
    }
  });
</script>

<div bind:this={widget}>
  <chubby-cucco></chubby-cucco>
  <figure>
    <iframe title="Chicken coop" width="200" height="200"></iframe>
    <button>"Adopt"</button>
  </figure>
</div>

<style>
  div:has(chubby-cucco:not(:defined)) {
    display: none;
  }

  div {
    --_color-light: hsl(0 0% 98%);
    --_color-dark: hsl(240 11% 34%);
    background: hsl(34 85% 89%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    max-inline-size: max-content;
    margin-inline: auto;
    border-radius: 1rem;
  }

  @media (min-width: 450px) {
    div {
      display: grid;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
    }
  }

  figure {
    grid-column: 2;
  }

  chubby-cucco,
  figure {
    aspect-ratio: 1;
    max-inline-size: 200px;
    inline-size: 100%;
  }

  chubby-cucco {
    display: block;
  }

  figure {
    padding: 0;
    margin: 0;
    position: relative;
  }

  figure > iframe {
    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
  }

  figure > button {
    position: absolute;
    inset-inline-start: 50%;
    inset-block-start: 50%;
    translate: -50% -50%;
  }

  button {
    font-family: inherit;
    font-size: 1rem;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 1px;
    padding: 0.25rem 0.5rem;
    color: var(--_color-light, hsl(0 0% 95%));
    background: var(--_color-dark, hsl(0 0% 20%));
    border-radius: 0.2rem;
    border: none;
  }

  button:focus {
    outline: 2px solid var(--_color-dark, hsl(0 0% 20%));
    outline-offset: 2px;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  iframe {
    border: 30px dotted var(--_color-dark, hsl(0 0% 20%));
    border-image-repeat: round;
    border-image-slice: 33% 33%;
    border-image-source: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" style="display: block;" viewBox="-1 -1 6 6"><defs>\<g id="d" transform="scale(0.8)"><path fill="hsl(33 78% 65%)" d="M 1 0 A 1 1 0 0 0 -1 0 1 1 0 0 0 1 0" /><path fill="hsl(0 0% 0% / 0.3)" d="M 1 0 A 1.05 1.05 0 0 1 -1 0 1 1 0 0 0 1 0" /></g></defs><use href="%23d" /><use x="2" href="%23d" /><use x="4" href="%23d" /><use y="2" href="%23d" /><use x="4" y="2" href="%23d" /><use y="4" href="%23d" /><use x="2" y="4" href="%23d" /><use x="4" y="4" href="%23d" /></svg>');
  }
</style>
