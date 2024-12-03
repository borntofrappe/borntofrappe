<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Anchor, Shape, Box, TAU } = pkg;

  /** @type {HTMLCanvasElement} */
  let element;
  onMount(() => {
    const stroke = 0;

    const maroons = [
      "hsl(8 48% 39%)",
      "hsl(10 43% 43%)",
      "hsl(10 34% 54%)",
      "hsl(12 39% 63%)",
    ];
    const yellows = ["hsl(34 72% 48%)", "hsl(43 92% 67%)"];

    const root = new Anchor({
      translate: {
        y: -5,
      },
    });

    const top = new Shape({
      addTo: root,
      color: maroons[1],
      stroke,
      fill: true,
      closed: false,
      path: [
        { x: -15, y: 0, z: -10 },
        { x: 15, y: 0, z: -10 },
        { x: 15, y: 0, z: 10 },
        { x: -15, y: 0, z: 10 },
      ],
    });

    const topSide = new Shape({
      addTo: top,
      color: maroons[1],
      stroke,
      fill: true,
      closed: false,
      path: [
        { x: 0, y: 0, z: -10 },
        {
          arc: [
            { x: 0, y: -10, z: -10 },
            { x: 0, y: -10, z: 0 },
          ],
        },
        {
          arc: [
            { x: 0, y: -10, z: 10 },
            { x: 0, y: 0, z: 10 },
          ],
        },
      ],
      translate: {
        x: -15,
      },
    });

    topSide.copy({
      translate: {
        x: 15,
      },
    });

    const topArc = new Shape({
      addTo: top,
      color: maroons[3],
      stroke,
      fill: true,
      closed: false,
      path: [
        { x: -15, y: -10, z: 0 },
        { x: 15, y: -10, z: 0 },
        {
          arc: [
            { x: 15, y: -10, z: 10 },
            { x: 15, y: 0, z: 10 },
          ],
        },
        { x: -15, y: 0, z: 10 },
        {
          arc: [
            { x: -15, y: -10, z: 10 },
            { x: -15, y: -10, z: 0 },
          ],
        },
      ],
    });

    topArc.copy({
      scale: {
        z: -1,
      },
    });

    const topSegment = new Anchor({
      addTo: top,
      translate: {
        x: -17,
      },
    });

    const topLink = new Anchor({
      addTo: topSegment,
    });

    new Shape({
      addTo: topLink,
      color: maroons[0],
      stroke,
      fill: true,
      closed: false,
      path: [
        { x: 2, y: 0, z: 10 },
        {
          arc: [
            { x: 2, y: -10, z: 10 },
            { x: 2, y: -10, z: 0 },
          ],
        },
        { x: -2, y: -10, z: 0 },
        {
          arc: [
            { x: -2, y: -10, z: 10 },
            { x: -2, y: 0, z: 10 },
          ],
        },
      ],
    });

    const topLinkArc = new Shape({
      addTo: topLink,
      color: maroons[2],
      stroke,
      fill: true,
      closed: false,
      path: [
        { x: 0, y: 0, z: 10 },
        {
          arc: [
            { x: 0, y: -10, z: 10 },
            { x: 0, y: -10, z: 0 },
          ],
        },
        { x: 0, y: -14, z: 0 },
        {
          arc: [
            { x: 0, y: -14, z: 14 },
            { x: 0, y: 0, z: 14 },
          ],
        },
      ],
      translate: {
        x: 2,
      },
    });

    topLinkArc.copy({
      color: yellows[0],
      translate: {
        x: -2,
      },
    });

    new Shape({
      addTo: topLink,
      color: yellows[1],
      stroke,
      fill: true,
      closed: false,
      path: [
        { x: 2, y: 0, z: 14 },
        {
          arc: [
            { x: 2, y: -14, z: 14 },
            { x: 2, y: -14, z: 0 },
          ],
        },
        { x: -2, y: -14, z: 0 },
        {
          arc: [
            { x: -2, y: -14, z: 14 },
            { x: -2, y: 0, z: 14 },
          ],
        },
      ],
    });

    topLink.copyGraph({
      scale: {
        z: -1,
      },
    });

    topSegment.copyGraph({
      translate: {
        x: 17,
      },
      scale: {
        x: -1,
      },
    });

    new Box({
      addTo: root,
      color: maroons[2],
      stroke,
      frontFace: maroons[3],
      rearFace: maroons[3],
      width: 30,
      height: 4,
      depth: 20,
      translate: {
        y: 2,
      },
    });

    new Box({
      addTo: root,
      color: maroons[0],
      frontFace: maroons[2],
      rearFace: maroons[2],
      stroke,
      width: 32,
      height: 2,
      depth: 22,
      translate: {
        y: 5,
      },
    });

    new Box({
      addTo: root,
      color: maroons[1],
      frontFace: maroons[3],
      rearFace: maroons[3],
      stroke,
      width: 30,
      height: 16,
      depth: 20,
      translate: {
        y: 14,
      },
    });

    const face = new Anchor({
      addTo: root,
      translate: {
        z: 12,
      },
    });

    const faceSegment = new Box({
      addTo: face,
      color: yellows[0],
      frontFace: yellows[1],
      stroke,
      width: 38,
      height: 4,
      depth: 4,
      translate: {
        y: 2,
      },
    });

    faceSegment.copy({
      translate: {
        y: 8,
      },
    });

    faceSegment.copy({
      translate: {
        y: 20,
      },
    });

    const faceLink = new Box({
      addTo: face,
      color: yellows[0],
      frontFace: yellows[1],
      rearFace: maroons[0],
      leftFace: maroons[2],
      stroke,
      width: 4,
      height: 8,
      depth: 4,
      translate: {
        x: 17,
        y: 14,
      },
    });

    faceLink.copy({
      translate: {
        x: -17,
        y: 14,
      },
      scale: {
        x: -1,
      },
    });

    face.copyGraph({
      translate: {
        z: -12,
      },
      scale: {
        z: -1,
      },
    });

    const side = new Anchor({
      addTo: root,
      translate: {
        x: 18,
      },
    });

    const sideSegment = new Box({
      addTo: side,
      color: yellows[0],
      stroke,
      width: 2,
      height: 4,
      depth: 20,
      translate: {
        y: 2,
      },
    });

    sideSegment.copy({
      translate: {
        y: 8,
      },
    });

    sideSegment.copy({
      translate: {
        y: 20,
      },
    });

    side.copyGraph({
      translate: {
        x: -18,
      },
      scale: {
        x: -1,
      },
    });

    const { width, height } = element;
    const context = /** @type { CanvasRenderingContext2D }*/ (
      element.getContext("2d")
    );
    const zoom = 6;

    /**
     * @param {number} angle
     */
    const tilt = (angle) => Math.cos(angle) * 0.05;

    const render = () => {
      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(width / 2, height / 2);
      context.scale(zoom, zoom);
      root.renderGraphCanvas(context);
      context.restore();
    };

    root.rotate.y = (TAU / 8) * -1;
    root.rotate.x = tilt(root.rotate.y);
    root.updateGraph();
    render();

    /** @type number */
    let frame;

    const animate = () => {
      root.rotate.y = (root.rotate.y + 0.014) % TAU;
      root.rotate.x = tilt(root.rotate.y);

      root.updateGraph();
      render();
      frame = requestAnimationFrame(animate);
    };

    /**
     * @param { IntersectionObserverEntry[] } entries
     */
    const observation = (entries) => {
      if (entries[0].isIntersecting) {
        frame = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(frame);
      }
    };

    const observer = new IntersectionObserver(observation);

    /**
     * @param {MediaQueryListEvent} event
     */
    const listener = (event) => {
      if (event.matches) {
        cancelAnimationFrame(frame);
        observer.unobserve(element);
      } else {
        observer.observe(element);
      }
    };

    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

    if (!reducedMotion.matches) {
      observer.observe(element);
    }

    reducedMotion.addEventListener("change", listener);

    return () => {
      reducedMotion.removeEventListener("change", listener);
      cancelAnimationFrame(frame);
      observer.unobserve(element);
    };
  });
</script>

<canvas
  bind:this={element}
  style="display: block; inline-size: 100%; max-inline-size: 400px;"
  width="400"
  height="260"
></canvas>
