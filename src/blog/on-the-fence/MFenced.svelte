<script>
  import { onMount } from "svelte";

  /** @type { HTMLElement }*/
  let wrapper;

  const html = `<math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
      <mo>[</mo>
      <mn>0</mn>
      <mo>-</mo>
      <mn>4</mn>
      <mo>|</mo>
      <mn>6</mn>
      <mo>-</mo>
      <mn>9</mn>
      <mo>|</mo>
      <mn>12</mn>
      <mo>-</mo>
      <mn>15</mn>
      <mo>]</mo>
    </math>`;

  const mathml = `<math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
      <mn>0</mn>
      <mn>4</mn>
      <mn>6</mn>
      <mn>9</mn>
      <mn>12</mn>
      <mn>15</mn>
    </math>`;

  const open = "[";
  const close = "]";
  const separators = "-|";

  onMount(() => {
    if (customElements && !customElements.get("m-fenced")) {
      // svelte-ignore perf_avoid_nested_class
      class MFenced extends HTMLElement {
        constructor() {
          super();

          const open = this.getAttribute("open") || "(";
          const close = this.getAttribute("close") || ")";
          const attributeSeparators = this.getAttribute("separators");
          const separators = attributeSeparators
            ? attributeSeparators.split("")
            : [""];

          const ns = "http://www.w3.org/1998/Math/MathML";

          const mopen = document.createElementNS(ns, "mo");
          const mclose = document.createElementNS(ns, "mo");
          mopen.textContent = open;
          mclose.textContent = close;

          const math = /** @type { MathMLElement }*/ (
            this.querySelector("math")
          );
          const children = [...math.children];
          for (let i = 0; i < children.length - 1; i++) {
            const mo = document.createElementNS(ns, "mo");
            mo.textContent = separators[i % separators.length];
            math.insertBefore(mo, children[i + 1]);
          }
          math.prepend(mopen);
          math.append(mclose);
        }
      }

      customElements.define("m-fenced", MFenced);
    }

    wrapper.innerHTML = `<m-fenced open="${open}" close="${close}" separators="${separators}">${mathml}</m-fenced>`;
  });
</script>

<figure bind:this={wrapper}>
  {@html html}
</figure>
