<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Illustration, Anchor, Shape, Ellipse, TAU } = pkg;

  /** @type {SVGSVGElement} */
  let element;
  onMount(() => {
    const red1 = "hsl(1 67% 66%)";
    const red2 = "hsl(0 46% 47%)";
    const blue1 = "hsl(224 52% 70%)";
    const blue2 = "hsl(224 50% 73%)";
    const blue3 = "hsl(224 40% 66%)";
    const blue4 = "hsl(224 47% 45%)";
    const blue5 = "hsl(225 46% 28%)";

    const stroke = 22;
    const circles = [
      { color: red1, translate: { y: -stroke } },
      { color: red1, translate: { x: stroke / 2, y: -stroke / 2 } },
      { color: red1, translate: { x: -stroke / 2, y: -stroke / 2 } },
      { color: red2, translate: { z: -stroke / 2, y: -stroke / 2 } },
      { color: red2, translate: { z: stroke / 2, y: -stroke / 2 } },
      { color: red1, translate: { x: stroke / 1.5 } },
      { color: red1, translate: { x: -stroke / 1.5 } },
      { color: red1, translate: { z: stroke / 1.5 } },
      { color: red1, translate: { z: -stroke / 1.5 } },
      { color: red2, translate: { x: stroke / 1.5, z: stroke / 1.5 } },
      { color: red2, translate: { x: -stroke / 1.5, z: -stroke / 1.5 } },
      { color: red2, translate: { x: -stroke / 1.5, z: stroke / 1.5 } },
      { color: red2, translate: { x: stroke / 1.5, z: -stroke / 1.5 } },
    ];

    const illustration = new Illustration({
      element,
      zoom: 2,
    });

    const backdrop = new Anchor({
      addTo: illustration,
      translate: {
        x: -105,
        y: -65,
        z: -200,
      },
    });

    const bowl = new Anchor({
      addTo: illustration,
      translate: {
        y: 20,
        z: -100,
      },
    });

    const overlap = new Anchor({
      addTo: illustration,
      translate: {
        y: 20,
        z: 100,
      },
    });

    new Shape({
      addTo: backdrop,
      color: blue1,
      stroke: 0,
      fill: true,
      path: [
        { x: 0, y: 15 },
        {
          arc: [
            { x: 0, y: 0 },
            { x: 15, y: 0 },
          ],
        },
        { x: 195, y: 0 },
        {
          arc: [
            { x: 210, y: 0 },
            { x: 210, y: 15 },
          ],
        },
        { x: 210, y: 115 },
        {
          arc: [
            { x: 210, y: 130 },
            { x: 195, y: 130 },
          ],
        },
        { x: 15, y: 130 },
        {
          arc: [
            { x: 0, y: 130 },
            { x: 0, y: 115 },
          ],
        },
      ],
    });

    new Shape({
      addTo: backdrop,
      color: blue2,
      stroke: 0,
      fill: true,
      path: [
        { x: 0, y: 95 },
        { x: 0, y: 115 },
        {
          arc: [
            { x: 0, y: 130 },
            { x: 15, y: 130 },
          ],
        },
        { x: 195, y: 130 },
        {
          arc: [
            { x: 210, y: 130 },
            { x: 210, y: 115 },
          ],
        },
        { x: 210, y: 95 },
      ],
    });

    new Ellipse({
      addTo: bowl,
      color: blue3,
      stroke: 0,
      fill: true,
      diameter: 105,
      translate: {
        y: 26,
      },
      rotate: {
        x: TAU / 3.65,
      },
    });

    new Shape({
      addTo: bowl,
      color: blue4,
      stroke: 3,
      fill: true,
      path: [
        { x: -50, y: 0 },
        {
          bezier: [
            { x: -46, y: 35 },
            { x: 46, y: 35 },
            { x: 50, y: 0 },
          ],
        },
        {
          bezier: [
            { x: 40, y: -12.5 },
            { x: -40, y: -12.5 },
            { x: -50, y: 0 },
          ],
        },
      ],
    });

    new Shape({
      addTo: bowl,
      color: blue5,
      stroke: 3,
      fill: true,
      path: [
        { x: -50, y: 0 },
        {
          bezier: [
            { x: -40, y: 12.5 },
            { x: 40, y: 12.5 },
            { x: 50, y: 0 },
          ],
        },
        {
          bezier: [
            { x: 40, y: -12.5 },
            { x: -40, y: -12.5 },
            { x: -50, y: 0 },
          ],
        },
      ],
    });

    new Shape({
      addTo: overlap,
      color: blue4,
      stroke: 3,
      fill: true,
      path: [
        { x: -50, y: 0 },
        {
          bezier: [
            { x: -46, y: 35 },
            { x: 46, y: 35 },
            { x: 50, y: 0 },
          ],
        },
        {
          bezier: [
            { x: 40, y: 12.5 },
            { x: -40, y: 12.5 },
            { x: -50, y: 0 },
          ],
        },
      ],
    });

    const treats = new Anchor({
      addTo: illustration,
      translate: {
        y: 25,
      },
    });

    for (const { color, translate } of circles) {
      new Shape({
        addTo: treats,
        color,
        stroke,
        translate,
      });
    }

    illustration.updateRenderGraph();

    /** @type number */
    let frame;

    const loop = () => {
      treats.rotate.y = (treats.rotate.y + 0.02) % TAU;
      illustration.updateRenderGraph();
      frame = requestAnimationFrame(loop);
    };

    /**
     * @param { IntersectionObserverEntry[] } entries
     */
    const observation = (entries) => {
      if (entries[0].isIntersecting) {
        frame = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(frame);
      }
    };

    const observer = new IntersectionObserver(observation);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      cancelAnimationFrame(frame);
    };
  });
</script>

<svg
  bind:this={element}
  style="display: block; inline-size: 100%; block-size: auto; max-inline-size: 420px;"
  width="420"
  height="260"
  viewBox="0 0 210 130"
>
  <g stroke-linecap="round" stroke-linejoin="round">
    <path
      fill="hsl(224 52% 70%)"
      d="M 0 15 A 15 15 0 0 1 15 0 L 195 0 A 15 15 0 0 1 210 15 L 210 115 A 15 15 0 0 1 195 130 L 15 130 A 15 15 0 0 1 0 115 Z"
    />
    <path
      fill="hsl(224 50% 73%)"
      d="M 0 95 L 0 115 A 15 15 0 0 0 15 130 L 195 130 A 15 15 0 0 0 210 115 L 210 95"
    />
    <g transform="translate(105 85)">
      <ellipse fill="hsl(224 40% 66%)" cy="26" rx="52.5" ry="8" />
      <path
        style="color: hsl(224 47% 45%)"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="3"
        d="M -50 0 C -46 35 46 35 50 0 C 40 -12.5 -40 -12.5 -50 0 Z"
      />
      <path
        style="color: hsl(225 46% 28%)"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="3"
        d="M -50 0 C -40 12.5 40 12.5 50 0 C 40 -12.5 -40 -12.5 -50 0 Z"
      />
      <g transform="translate(0 7)">
        <circle fill="hsl(1 67% 66%)" cy="-22" r="11" />
        <circle fill="hsl(0 46% 47%)" cx="11" cy="-12" r="11" />
        <circle fill="hsl(0 46% 47%)" cx="-11" cy="-12" r="11" />
        <circle fill="hsl(1 67% 66%)" cy="-11" r="11" />
        <circle fill="hsl(0 46% 47%)" r="11" />
        <circle fill="hsl(1 67% 66%)" cx="18.5" r="11" />
        <circle fill="hsl(1 67% 66%)" cx="-18.5" r="11" />
      </g>
      <path
        style="color: hsl(224 47% 45%)"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="3"
        d="M -50 0 C -46 35 46 35 50 0 C 40 12.5 -40 12.5 -50 0 Z"
      />
    </g>
  </g>
</svg>
