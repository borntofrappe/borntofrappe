<script>
  import { onMount } from "svelte";

  /** @type { HTMLDivElement } widget */
  let widget;
  onMount(() => {
    /** @typedef { SVGCircleElement | SVGPathElement | SVGPolygonElement | SVGRectElement } SVGChild */

    const nums = [1, 2];
    const [a, b] = nums;

    const exceptions = ["class", "tabindex", "aria-label", "role"];

    const svg = /** @type { SVGSVGElement } */ (widget.querySelector("svg"));

    const [rect, ...children] = /** @type [SVGRectElement, SVGChild] */ (
      [...svg.childNodes].reverse()
    );
    const pre = /** @type { HTMLPreElement } */ (widget.querySelector("pre"));

    /**
     * @param { SVGSVGElement | SVGChild } node
     */
    const handleNode = (node) => {
      const { x, y, width, height } = node.getBBox();
      rect.setAttribute("x", x.toString());
      rect.setAttribute("y", y.toString());
      rect.setAttribute("width", width.toString());
      rect.setAttribute("height", height.toString());

      const { nodeName, attributes } = node;
      pre.innerHTML = `<code><span class="token-key">${nodeName}</span><span class="token-value">[${[
        ...attributes,
      ]
        .filter(({ name }) => !exceptions.includes(name))
        .map(({ name, value }) => `${name}="${value}"`)
        .join(" ")}]</span></code>`;
    };

    handleNode(svg);

    /**
     * @param { Event } event
     */
    function handleEvent(event) {
      event.stopPropagation();
      const target = /** @type {SVGSVGElement | SVGChild } */ (event.target);
      handleNode(target);
    }

    widget.setAttribute("tabindex", "0");
    widget.setAttribute("role", "tabpanel");
    widget.setAttribute(
      "aria-label",
      "Tab through the list of elements to highlight the attributes of the different nodes."
    );

    svg.setAttribute("tabindex", "0");
    svg.setAttribute("role", "tablist");
    svg.setAttribute("aria-label", "SVG element.");
    svg.addEventListener("click", handleEvent);
    svg.addEventListener("focus", handleEvent);

    for (const child of children) {
      child.setAttribute("tabindex", "0");
      child.setAttribute("role", "tab");
      child.setAttribute("aria-label", `Child element.`);
      child.addEventListener("click", handleEvent);
      child.addEventListener("focus", handleEvent);
    }

    pre.setAttribute("role", "status");
    pre.setAttribute("aria-live", "polite");

    return () => {
      svg.removeEventListener("click", handleEvent);
      svg.removeEventListener("focus", handleEvent);
      for (const child of children) {
        child.removeEventListener("click", handleEvent);
        child.removeEventListener("focus", handleEvent);
      }
    };
  });
</script>

<div bind:this={widget}>
  <svg viewBox="-10 -10 50 50">
    <circle fill="turquoise" r="10" />
    <path fill="mediumturquoise" d="M 20 12.5 A 10 10 0 0 1 40 12.5" />
    <path fill="darkcyan" d="M 20 12.5 A 10 10 0 0 0 40 12.5" />
    <polygon fill="teal" points="0 40 12.5 22.5 25 40" />
    <rect style="pointer-events: none;" fill="hsl(187 69% 55%)" opacity="0.3" />
  </svg>
  <pre></pre>
</div>

<style>
  div {
    max-inline-size: 35ch;
    margin-inline: auto;
    color: hsl(210 9% 31%);
    background: hsl(210 17% 98%);
    padding: 1rem;
  }

  div > * + * {
    margin-block-start: 0.5rem;
  }

  svg {
    display: block;
  }

  :is(svg, svg > *):not(:focus-visible):focus {
    outline: none;
  }

  pre {
    overflow-x: auto;
    padding: 0.5rem;
    display: block;
    color: hsl(210 17% 98%);
    background: hsl(210 10% 23%);
    min-block-size: 1lh;
  }

  pre::-webkit-scrollbar {
    block-size: 0.2rem;
  }

  pre::-webkit-scrollbar-thumb {
    background: currentColor;
  }

  pre > :global(code) {
    color: inherit;
    background: none;
    font-size: 1rem;
  }

  pre :global(.token-key) {
    color: hsl(289 85% 78%);
  }

  pre :global(.token-value) {
    color: hsl(207 91% 64%);
  }
</style>
