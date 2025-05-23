<script>
  import { onMount } from "svelte";

  /** @type { HTMLDivElement }*/
  let widget;
  onMount(() => {
    if (!customElements.get("out-of-sync")) {
      // svelte-ignore perf_avoid_nested_class
      class OutOfSync extends HTMLElement {
        constructor() {
          super();

          const shadowRoot = this.attachShadow({ mode: "open" });

          const display = /** @type { HTMLHeadingElement }*/ (
            document.createElement("h1")
          );
          display.setAttribute("role", "status");
          display.setAttribute("aria-live", "polite");
          display.textContent = this.getAttribute("number");

          const button = document.createElement("button");
          button.textContent = "Generate";

          button.addEventListener("click", () => {
            display.textContent = Math.floor(Math.random() * 100).toString();
          });

          shadowRoot.appendChild(display);
          shadowRoot.appendChild(button);
        }
      }

      customElements.define("out-of-sync", OutOfSync);
    }

    const customElement = /** @type { HTMLElement }*/ (
      widget.querySelector("out-of-sync")
    );

    const number = /** @type { SVGTSpanElement }*/ (
      widget.querySelector('[data-key="number"]')
    );

    const shadowRoot = /** @type { ShadowRoot }*/ (customElement.shadowRoot);
    const status = /** @type { HTMLHeadingElement }*/ (
      shadowRoot.querySelector('[role="status"]')
    );
    status.textContent = customElement.getAttribute("number");
    number.textContent = customElement.getAttribute("number");

    const observer = new MutationObserver(() => {
      number.textContent = customElement.getAttribute("number");
    });

    observer.observe(customElement, {
      attributes: true,
      attributeFilter: ["number"],
    });

    return () => {
      observer.disconnect();
    };
  });
</script>

<div bind:this={widget}>
  <out-of-sync number="10"></out-of-sync>
  <svg style="display: block;" viewBox="0 0 100 46">
    <rect fill="hsl(249 11% 12%)" width="100" height="46" rx="5" />
    <path
      fill="hsl(249 8% 17%)"
      d="M 0 12 0 5 A 5 5 0 0 1 5 0 L 95 0 A 5 5 0 0 1 100 5 L 100 12"
    />
    <path
      fill="hsl(249 11% 12%)"
      d="M 22 12 A 2 2 0 0 0 24 10 L 24 5 A 2 2 0 0 1 26 3 L 62 3 A 2 2 0 0 1 64 5 L 64 10 A 2 2 0 0 0 66 12"
    />
    <g transform="translate(6 6)">
      <circle fill="hsl(3 100% 68%)" r="1.75" />
      <circle fill="hsl(41 99% 60%)" cx="6" r="1.75" />
      <circle fill="hsl(129 62% 49%)" cx="12" r="1.75" />
    </g>
    <g transform="translate(30 8)" fill="none" stroke="hsl(0 0% 94%)">
      <rect
        stroke-width="0.75"
        x="-1.75"
        y="-1.75"
        width="3.5"
        height="3.5"
        rx="0.5"
      />
      <path
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 0 -1.75 0 -2.75 M 1.75 0 2.75 0 M 0 1.75 0 2.75 M -1.75 0 -2.75 0"
      />
    </g>
    <use
      transform="translate(6 20) rotate(-90)"
      fill="hsl(0 0% 94%)"
      stroke="hsl(0 0% 94%)"
      href="#console-arrow"
    />
    <g font-family="monospace" font-weight="700">
      <text fill="hsl(258 97% 74%)" font-size="3.25" x="35" y="9"
        >Inspector</text
      >
      <g fill="hsl(0 0% 94%)" font-size="3.75">
        <text x="10" y="21">&lt;random-number-generator</text>
        <text x="16" y="29"
          >number="<tspan data-key="number" fill="hsl(195 74% 71%)">10</tspan
          >"</text
        >
        <text x="10" y="37">&gt;&lt;/random-number-generator&gt;</text>
      </g>
    </g>
    <rect
      style="pointer-events: none;"
      fill="url(#console-gradient)"
      width="100"
      height="46"
      rx="5"
    />
  </svg>
</div>

<style>
  div {
    max-inline-size: 36rem;
    margin-inline: auto;
  }

  div > * + * {
    margin-block-start: 1rem;
  }
</style>
