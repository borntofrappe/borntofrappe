<script>
  import { onMount } from "svelte";

  onMount(() => {
    if (customElements.get("random-number-generator")) return;
    // svelte-ignore perf_avoid_nested_class
    class RandomNumberGenerator extends HTMLElement {
      constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.innerHTML = `:host {
    --_color-foreground: var(--color-foreground, hsl(0 0% 99%));
    --_color-background: var(--color-background, hsl(0 0% 10%));
    color: var(--_color-foreground);
    background: var(--_color-background);
    display: block;
    max-inline-size: max-content;
    margin-inline: auto;
    padding: 1.5rem 2.2rem;
    font-family: system-ui;
    text-align: center;
    border-radius: 1rem
}

:host > * + * {
    margin-block-start: 0.5rem;
}

h1 {
    font-size: 2.6rem;
    font-weight: 400;
    letter-spacing: 1px;
}

button {
    color: var(--_color-background);
    background: var(--_color-foreground);
    border: none;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 1e5px;
    display: flex;
    align-items: center;
    transition: scale 0.1s cubic-bezier(0.37, 0, 0.63, 1);
}

button:active {
    scale: 0.975;
}

button > svg {
    margin-inline-start: 1ch;
	inline-size: 1.25em;
	block-size: 1.25em;
}
button > svg > g {
	rotate: 90deg;
    transition: rotate 0.3s cubic-bezier(0.37, 0, 0.63, 1);
}
button:hover > svg > g {
	rotate: -90deg;
}
`;

        const display = document.createElement("h1");
        display.setAttribute("role", "status");
        display.setAttribute("aria-live", "polite");
        display.textContent = this.number;

        const button = document.createElement("button");
        button.textContent = "Generate";
        button.innerHTML = `<span>Generate</span>
<svg width="1em" height="1em" viewBox="-6.9 -6.9 13.8 13.8">
    <g transform="rotate(90)" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <path transform="translate(2 0)" d="M 0 4.5 A 5.5 5.5 0 0 0 0 -4.5 M 0 -4.5 2.5 -4.5 M 0 -4.5 0 -2" />
        <path transform="scale(-1 -1) translate(2 0)" d="M 0 4.5 A 5.5 5.5 0 0 0 0 -4.5 M 0 -4.5 2.5 -4.5 M 0 -4.5 0 -2" />
    </g>
</svg>`;

        button.addEventListener("click", () => {
          const min = +(this.getAttribute("min") || "0");
          const max = +(this.getAttribute("max") || "100");
          this.number = Math.floor(
            Math.random() * (max - min) + min
          ).toString();
        });

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(display);
        shadowRoot.appendChild(button);
      }

      get number() {
        return this.getAttribute("number");
      }

      set number(n) {
        if (n) {
          this.setAttribute("number", n);
        } else {
          this.removeAttribute("number");
        }
      }

      static get observedAttributes() {
        return ["number"];
      }

      /**
       * @param { string } name
       * @param { string } oldValue
       * @param { string } newValue
       */
      attributeChangedCallback(name, oldValue, newValue) {
        const shadowRoot = /** @type { ShadowRoot }*/ (this.shadowRoot);
        const display = /** @type { HTMLHeadingElement }*/ (
          shadowRoot.querySelector("h1")
        );
        display.textContent = newValue;
      }
    }

    customElements.define("random-number-generator", RandomNumberGenerator);
  });
</script>

<random-number-generator
  style="--color-foreground: hsl(0 0% 94%); --color-background: hsl(249 11% 12%);"
  min="0"
  max="100"
  number="-8"
></random-number-generator>
