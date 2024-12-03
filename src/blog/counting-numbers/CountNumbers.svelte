<script>
  import { onMount } from "svelte";

  onMount(() => {
    if (customElements.get("count-numbers")) return;

    const template = document.createElement("template");

    template.innerHTML = `<button>Decrement</button>
        <span>0</span>
        <button>Increment</button>`;

    // svelte-ignore perf_avoid_nested_class
    class CountNumbers extends HTMLElement {
      constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));

        const count = /** @type {HTMLSpanElement} */ (
          shadowRoot.querySelector("span")
        );
        const buttonDecrement = /** @type {HTMLButtonElement} */ (
          shadowRoot.querySelector("button:nth-of-type(1)")
        );
        const buttonIncrement = /** @type {HTMLButtonElement} */ (
          shadowRoot.querySelector("button:nth-of-type(2)")
        );

        buttonDecrement.addEventListener("click", () => {
          const textContent = /** @type {string} */ (count.textContent);
          count.textContent = (+textContent - 1).toString();
        });

        buttonIncrement.addEventListener("click", () => {
          const textContent = /** @type {string} */ (count.textContent);
          count.textContent = (+textContent + 1).toString();
        });
      }
    }

    customElements.define("count-numbers", CountNumbers);
  });
</script>

<count-numbers></count-numbers>
