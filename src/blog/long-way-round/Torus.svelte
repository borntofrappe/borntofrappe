<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Illustration, Shape } = pkg;

  const TAU = Math.PI * 2;

  /** @type {SVGSVGElement} */
  let element;
  const o = 40;
  const n = 50;
  const da = TAU / n;
  const hueRange = [0, 15];
  const [hueMin, hueMax] = hueRange;
  const hueDiff = hueMax - hueMin;

  const points = Array(n)
    .fill("")
    .map((_, i) => {
      const a = i * da;
      const cx = Math.cos(a) * o;
      const cy = Math.sin(a) * o;
      const hue = hueMin + (hueDiff / (n - 1)) * i;
      const fill = `hsl(${hue} 90% 70%)`;

      return {
        fill,
        cx,
        cy,
      };
    });

  onMount(() => {
    const illustration = new Illustration({
      element,
      zoom: 3,
    });

    for (const { fill: color, cx: x, cy: y } of points) {
      new Shape({
        addTo: illustration,
        color,
        stroke: 20,
        translate: {
          x,
          y,
        },
      });
    }

    illustration.rotate.x = TAU / 16;
    illustration.rotate.y = TAU / 8;
    illustration.updateRenderGraph();
  });
</script>

<svg
  bind:this={element}
  style="display: block; inline-size: 100%; block-size: auto; max-inline-size: 350px;"
  width="350"
  height="350"
  viewBox="-60 -60 120 120"
>
  {#each points as { fill, cx, cy }}
    <circle {fill} {cx} {cy} r="10" />
  {/each}
</svg>
