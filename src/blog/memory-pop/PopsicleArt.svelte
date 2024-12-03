<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const {
    Anchor,
    Cylinder,
    Shape,
    Ellipse,
    RoundedRect,
    Rect,
    TAU,
    easeInOut,
  } = pkg;

  /** @type {HTMLCanvasElement} */
  let element;
  onMount(() => {
    const context = /** @type { CanvasRenderingContext2D }*/ (
      element.getContext("2d")
    );
    const { width, height } = element;
    const zoom = 6;

    const colors = {
      background: "hsl(34 98% 81%)",
      biplane: [
        "hsl(7 80% 58%)",
        "hsl(12 89% 61%)",
        "hsl(14 88% 62%)",
        "hsl(32 88% 62%)",
      ],
      frame: ["hsl(25 48% 32%)", "hsl(26 42% 43%)", "hsl(28 40% 50%)"],
    };

    const inset = 20;

    const stroke = 1;
    const diameter = 9;
    const length = 20;
    const bladeSpan = 6;
    const bladeWidth = 1.5;
    const wingSpan = 14;
    const wingWidth = 2;
    const wingOffsets = [-2, 2];
    const wingLinks = [6, 9, 12];
    const flapGrowth = 4;
    const flapExcess = 3;
    const gearOffset = { x: 3, y: 4 };
    const gearSpread = { x: 3, y: 4 };
    const wheelSize = 3;

    const root = new Anchor();

    const background = new Rect({
      addTo: root,
      color: colors.background,
      stroke: 0,
      fill: true,
      width: width - inset * 2,
      height: height - inset * 2,
      translate: {
        z: -50,
      },
      scale: 1 / zoom,
    });

    const popsicleY = new RoundedRect({
      color: colors.frame[1],
      stroke: 0,
      fill: true,
      width: width / 12,
      height,
      cornerRadius: width,
    });

    const popsicleX = new RoundedRect({
      color: colors.frame[2],
      stroke: 0,
      fill: true,
      width,
      height: height / 12,
      cornerRadius: height,
    });

    for (const direction of [-1, 1]) {
      popsicleY.copy({
        addTo: background,
        translate: {
          x: (width / 2 - popsicleY.width / 2 - inset) * direction,
        },
      });
    }

    for (const direction of [-1, 1]) {
      popsicleX.copy({
        addTo: background,
        translate: {
          y: (height / 2 - popsicleX.height / 2 - inset) * direction,
        },
      });
    }

    const crissCross = new Anchor();
    for (const z of [0, TAU / 4]) {
      new Shape({
        addTo: crissCross,
        color: colors.frame[0],
        stroke: 1,
        path: [
          { x: (popsicleY.width / 2) * -1, y: (popsicleX.height / 2) * -1 },
          { x: popsicleY.width / 2, y: popsicleX.height / 2 },
        ],
        rotate: {
          z,
        },
      });
    }

    for (const directionX of [-1, 1]) {
      for (const directionY of [-1, 1]) {
        crissCross.copyGraph({
          addTo: background,
          translate: {
            x: (width / 2 - inset - popsicleY.width / 2) * directionX,
            y: (width / 2 - inset - popsicleX.height / 2) * directionY,
          },
        });
      }
    }

    const biplane = new Anchor({
      addTo: root,
    });

    const body = new Cylinder({
      addTo: biplane,
      color: colors.biplane[1],
      frontFace: colors.biplane[0],
      stroke,
      diameter,
      length,
    });

    const propeller = new Anchor({
      addTo: body,
      translate: {
        z: length / 2,
      },
    });

    const blade = new Shape({
      color: colors.biplane[3],
      stroke,
      fill: true,
      path: [
        { x: (bladeWidth / 2) * -1, y: bladeSpan * -1 },
        {
          arc: [
            { x: bladeWidth / 2, y: bladeSpan * -1 },
            {
              x: bladeWidth / 2,
              y: (bladeSpan - bladeWidth) * -1,
            },
          ],
        },
        { x: bladeWidth / 2, y: bladeSpan },
        {
          arc: [
            { x: (bladeWidth / 2) * -1, y: bladeSpan },
            {
              x: (bladeWidth / 2) * -1,
              y: bladeSpan - bladeWidth,
            },
          ],
        },
      ],
    });

    for (const z of [0, TAU / 4]) {
      blade.copy({
        addTo: propeller,
        rotate: {
          z,
        },
      });
    }

    new Ellipse({
      addTo: body,
      color: colors.biplane[0],
      stroke,
      fill: true,
      diameter: 1,
      translate: {
        z: length / 2 + 1,
      },
    });

    const wings = new Anchor({
      addTo: body,
    });

    const wing = new Shape({
      color: colors.biplane[2],
      stroke,
      fill: true,
      path: [
        { x: 0, z: wingWidth },
        { x: wingSpan - wingWidth, z: wingWidth },
        {
          arc: [
            { x: wingSpan, z: wingWidth },
            { x: wingSpan, z: 0 },
          ],
        },
        {
          arc: [
            { x: wingSpan, z: wingWidth * -1 },
            {
              x: wingSpan - wingWidth,
              z: wingWidth * -1,
            },
          ],
        },
        { x: 0, z: wingWidth * -1 },
      ],
    });

    for (const y of wingOffsets) {
      wing.copy({
        addTo: wings,
        translate: {
          x: diameter / 2 + stroke,
          y,
        },
      });
    }

    const link = new Shape({
      color: wing.color,
      stroke,
      fill: true,
      path: [
        { y: wingOffsets[0], z: wingWidth },
        { y: wingOffsets[0], z: wingWidth * -1 },
        { y: wingOffsets[1], z: wingWidth * -1 },
        { y: wingOffsets[1], z: wingWidth },
      ],
    });

    for (const offset of wingLinks) {
      link.copy({
        addTo: wings,
        translate: {
          x: diameter / 2 + offset,
        },
      });
    }

    wings.copyGraph({
      rotate: {
        z: TAU / 2,
      },
    });

    new Shape({
      addTo: body,
      color: colors.biplane[0],
      stroke,
      fill: true,
      path: [
        { y: (diameter / 4) * -1, z: 0 },
        { y: (diameter / 2) * -1, z: 0 },
        { y: (diameter / 2) * -1, z: flapGrowth },
        {
          arc: [
            {
              y: (diameter / 2 + flapGrowth) * -1,
              z: flapGrowth,
            },
            { y: (diameter / 2 + flapGrowth) * -1, z: 0 },
          ],
        },
        {
          y: (diameter / 2 + flapGrowth) * -1,
          z: flapExcess * -1,
        },
        { y: (diameter / 4) * -1, z: flapExcess * -1 },
      ],
      translate: {
        z: (length / 2 + stroke) * -1,
      },
    });

    const gear = new Anchor();

    new Shape({
      addTo: gear,
      color: colors.biplane[0],
      stroke: wheelSize,
      translate: {
        x: gearSpread.x,
        y: gearSpread.y,
      },
    });

    for (const z of [length / 2, (length / 2) * -1]) {
      new Shape({
        addTo: gear,
        color: colors.biplane[0],
        stroke,
        path: [
          { x: 0, y: 0, z },
          { x: gearSpread.x, y: gearSpread.y, z: 0 },
        ],
      });
    }

    for (const direction of [-1, 1]) {
      gear.copyGraph({
        addTo: body,
        translate: {
          x: gearOffset.x * direction,
          y: gearOffset.y,
        },
        scale: {
          x: direction,
        },
      });
    }

    context.lineJoin = "round";
    context.lineCap = "round";

    const render = () => {
      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(width / 2, height / 2);
      context.scale(zoom, zoom);
      root.renderGraphCanvas(context);
      context.restore();
    };

    biplane.rotate.z = 0.2;
    body.rotate = {
      x: (TAU / 32) * -1,
      y: (TAU / 32) * -1,
    };

    root.updateGraph();
    render();

    const z = biplane.rotate.z * 2;
    const x = body.rotate.x * 2;

    /** @type number */
    let frame;
    let ticker = 0;
    let direction = 1;
    const cycle = 150;

    const animate = () => {
      propeller.rotate.z = (propeller.rotate.z + 0.05) % TAU;

      ticker += direction;
      if (ticker >= cycle) {
        ticker = cycle;
        direction = -1;
      } else if (ticker <= 0) {
        ticker = 0;
        direction = 1;
      }

      const offset = 0.5 - easeInOut(ticker / cycle, 2);
      biplane.rotate.z = z * offset;
      body.rotate.x = x * offset;

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
  height="400"
></canvas>
