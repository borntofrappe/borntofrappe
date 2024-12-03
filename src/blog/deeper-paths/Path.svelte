<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Illustration, Shape, Anchor, Cone, TAU } = pkg;

  /** @type {SVGSVGElement} */
  let element;
  onMount(() => {
    const color = "hsl(0, 0%, 70%)";

    const illustration = new Illustration({
      element,
      zoom: 30,
      translate: {
        x: 1.5,
        y: 1.25,
      },
      rotate: {
        x: 0.2,
        y: 0.4,
      },
    });

    new Shape({
      addTo: illustration,
      color,
      fill: true,
      path: [
        { x: -4, y: 3 },
        { x: 0, y: -3 },
        { x: 4, y: 3 },
      ],
    });

    const distance = 2;
    const gaps = 5;
    const segment = distance / gaps;
    const dash = segment / 4;

    const axes = new Anchor({
      addTo: illustration,
      translate: {
        x: -6,
        y: -5,
      },
    });

    const marker = new Cone({
      color: "currentColor",
      stroke: 0,
      diameter: 0.4,
      length: 0.6,
    });

    new Shape({
      addTo: axes,
      color: "currentColor",
      stroke: 0.4,
    });

    ["x", "y", "z"].forEach((axis) => {
      for (let i = 0; i < gaps; i++) {
        const axis1 = i * segment;
        const axis2 = axis1 + dash;
        new Shape({
          addTo: axes,
          color: "currentColor",
          stroke: 0.1,
          path: [{ [axis]: axis1 * -1 }, { [axis]: axis2 * -1 }],
        });
      }

      new Shape({
        addTo: axes,
        color: "currentColor",
        stroke: 0.1,
        path: [{ [axis]: 0 }, { [axis]: distance }],
      });
    });

    marker.copy({
      addTo: axes,
      translate: {
        x: distance,
      },
      rotate: {
        y: (TAU / 4) * -1,
      },
    });

    marker.copy({
      addTo: axes,
      translate: {
        y: distance,
      },
      rotate: {
        x: (TAU / 4) * -1,
      },
    });

    marker.copy({
      addTo: axes,
      translate: {
        z: distance,
      },
    });

    illustration.updateRenderGraph();
  });
</script>

<svg
  bind:this={element}
  style="display: block; inline-size: 100%; block-size: auto; max-inline-size: 400px;"
  viewBox="-5 -5 10 10"
  width="400"
  height="320"
>
  <path
    d="M -4 3 0 -3 4 3 Z"
    fill="hsl(0 0% 70%)"
    stroke="hsl(0 0% 70%)"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
