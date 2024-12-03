<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Illustration, Anchor, Shape, Box, TAU } = pkg;

  /** @type {SVGSVGElement} */
  let element;
  onMount(() => {
    const white = "hsl(0 0% 100%)";
    const grey = "hsl(0 0% 90%)";
    const black = "hsl(0 0% 30%)";

    const length = 50;
    const offset = 80;

    const iterations = 6;

    const points = Array(length)
      .fill("")
      .map((_, i) => {
        const a = (TAU / length) * i;
        const x = Math.cos(a) * offset;
        const y = Math.sin(a) * offset;
        return {
          x,
          y,
        };
      });

    const illustration = new Illustration({
      element,
      zoom: 2,
      rotate: {
        x: -0.125,
        y: 0.25,
      },
    });

    const bracelet = new Anchor({
      addTo: illustration,
      rotate: {
        x: TAU / 4,
      },
    });

    for (let i = 0; i < points.length - 1; i++) {
      const { x: x1, y: y1 } = points[i];
      const { x: x2, y: y2 } = points[i + 1];
      const hue = (360 / ((points.length - 1 - 1) / iterations)) * i;
      const color = `hsl(${hue} 90% 75%)`;

      new Shape({
        addTo: bracelet,
        color,
        stroke: 15,
        path: [
          { x: x1, y: y1 },
          { x: x2, y: y2 },
        ],
      });
    }
    const letters = new Anchor({
      addTo: illustration,
      translate: {
        x: 0,
        y: -8,
      },
    });

    const box = new Box({
      width: 20,
      height: 20,
      depth: 20,
      color: white,
      rightFace: grey,
      leftFace: grey,
      stroke: 1,
    });

    const z = box.copy({
      addTo: letters,
      translate: {
        x: -40,
        y: 0,
      },
      rotate: {
        y: 0.3,
      },
    });

    new Shape({
      addTo: z,
      color: black,
      stroke: 3,
      path: [
        { x: -3.5, y: -3.5 },
        { x: 3.5, y: -3.5 },
        { x: -3.5, y: 3.5 },
        { x: 3.5, y: 3.5 },
      ],
      closed: false,
      translate: {
        z: 10,
      },
    });

    const d = box.copy({
      addTo: letters,
      translate: {
        x: -12.5,
        y: 0,
        z: 20,
      },
      rotate: {
        y: -0.1,
      },
    });

    new Shape({
      addTo: d,
      color: black,
      stroke: 3,
      path: [
        { x: -2.5, y: -3.5 },
        { x: 0, y: -3.5 },
        {
          arc: [
            { x: 3.5, y: -3.5 },
            { x: 3.5, y: 0 },
          ],
        },
        {
          arc: [
            { x: 3.5, y: 3.5 },
            { x: 0, y: 3.5 },
          ],
        },
        { x: -2.5, y: 3.5 },
      ],
      translate: {
        z: 11,
      },
    });

    const o = box.copy({
      addTo: letters,
      translate: {
        x: 12.5,
        y: 0,
        z: 5,
      },
      rotate: {
        y: -0.4,
      },
    });

    new Shape({
      addTo: o,
      color: black,
      stroke: 3,
      path: [
        { x: 0, y: -3.5 },
        {
          arc: [
            { x: 3.5, y: -3.5 },
            { x: 3.5, y: 0 },
          ],
        },
        {
          arc: [
            { x: 3.5, y: 3.5 },
            { x: 0, y: 3.5 },
          ],
        },
        {
          arc: [
            { x: -3.5, y: 3.5 },
            { x: -3.5, y: 0 },
          ],
        },
        {
          arc: [
            { x: -3.5, y: -3.5 },
            { x: 0, y: -3.5 },
          ],
        },
      ],
      translate: {
        z: 11,
      },
    });

    const g = box.copy({
      addTo: letters,
      translate: {
        x: 42.5,
        y: 0,
        z: 10,
      },
      rotate: {
        y: -0.1,
      },
    });

    new Shape({
      addTo: g,
      color: black,
      stroke: 3,
      path: [
        { x: 2, y: -3 },
        {
          arc: [
            { x: 2, y: -3.5 },
            { x: 0, y: -3.5 },
          ],
        },
        {
          arc: [
            { x: -3.5, y: -3.5 },
            { x: -3.5, y: 0 },
          ],
        },
        {
          arc: [
            { x: -3.5, y: 3.5 },
            { x: 0, y: 3.5 },
          ],
        },
        {
          arc: [
            { x: 3, y: 4 },
            { x: 3, y: 0.5 },
          ],
        },
        { x: 1, y: 0.5 },
      ],
      closed: false,
      translate: {
        z: 11,
      },
    });

    illustration.translate.y = 2;
    illustration.updateRenderGraph();
  });
</script>

<svg
  bind:this={element}
  style="display: block; inline-size: 100%; block-size: auto; max-inline-size: 400px;"
  width="400"
  height="100"
  viewBox="-200 -50 400 100"
>
  <defs>
    <linearGradient
      id="zdog-gradient"
      x1="0"
      y1="0"
      x2="15"
      y2="15"
      spreadMethod="repeat"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="hsl(0 90% 75%)" offset="0.11" />
      <stop stop-color="hsl(45 90% 75%)" offset="0.11" />
      <stop stop-color="hsl(45 90% 75%)" offset="0.22" />
      <stop stop-color="hsl(90 90% 75%)" offset="0.22" />
      <stop stop-color="hsl(90 90% 75%)" offset="0.33" />
      <stop stop-color="hsl(135 90% 75%)" offset="0.33" />
      <stop stop-color="hsl(135 90% 75%)" offset="0.44" />
      <stop stop-color="hsl(180 90% 75%)" offset="0.44" />
      <stop stop-color="hsl(180 90% 75%)" offset="0.55" />
      <stop stop-color="hsl(225 90% 75%)" offset="0.55" />
      <stop stop-color="hsl(225 90% 75%)" offset="0.66" />
      <stop stop-color="hsl(270 90% 75%)" offset="0.66" />
      <stop stop-color="hsl(270 90% 75%)" offset="0.77" />
      <stop stop-color="hsl(315 90% 75%)" offset="0.77" />
      <stop stop-color="hsl(315 90% 75%)" offset="0.89" />
      <stop stop-color="hsl(360 90% 75%)" offset="0.89" />
      <stop stop-color="hsl(360 90% 75%)" offset="1" />
    </linearGradient>
  </defs>
  <rect
    fill="hsl(0 0% 100%)"
    stroke="url(#zdog-gradient)"
    stroke-width="8"
    stroke-linejoin="round"
    x="-83.08209228515625"
    y="-38.31432342529297"
    width="166.1641845703125"
    height="80.25140380859375"
  />
  <text
    fill="hsl(0 0% 30%)"
    stroke="hsl(0 0% 30%)"
    font-family="sans-serif"
    stroke-linejoin="round"
    stroke-linecap="round"
    font-size="50"
    font-weight="700"
    letter-spacing="2"
    text-anchor="middle"
    y="18"
  >
    Zdog
  </text>
</svg>
