<script>
  import { onMount } from "svelte";

  /** @type { SVGSVGElement }*/
  let svg;

  onMount(() => {
    const { x, y, width, height } = svg.getBBox();
    svg.setAttribute("viewBox", `${x} ${y} ${width} ${height}`);
  });
</script>

<svg
  bind:this={svg}
  style="font-family: monospace; font-size: 16px; outline: 1px solid; display: block;"
  viewBox="-1 -17 350 20"
>
  <text fill="currentColor">Scalable, monospace, vector text :p</text>
</svg>
