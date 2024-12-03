<script>
  import { onMount } from "svelte";

  onMount(() => {
    if (customElements.get("count-markup")) return;

    const template = document.createElement("template");

    template.innerHTML = `<button>Decrement</button>
        <span>0</span>
        <button>Increment</button>`;

    // svelte-ignore perf_avoid_nested_class
    class CountMarkup extends HTMLElement {
      constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));
      }
    }

    customElements.define("count-markup", CountMarkup);
  });
</script>

<count-markup></count-markup>
