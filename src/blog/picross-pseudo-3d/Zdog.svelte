<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Anchor, Box, Shape, TAU } = pkg;

  const level = `
---FEBI---
--IAAAAF--
-HAGEBHAG-
DAGEDCBHAC
-H-C--D-G-
`;

  const grid = level
    .trim()
    .split("\n")
    .map((row) => row.split(""));

  const rows = grid.length;
  const columns = grid[0].length;

  /** @typedef {{x: number, y: number, ref: string}} Shape */
  /** @type Array<Shape> */
  const copies = grid.reduce((acc, curr, y) => {
    const row = curr.reduce((a, c, x) => {
      return c !== "-"
        ? [
            ...a,
            {
              x,
              y,
              ref: c.toLowerCase(),
            },
          ]
        : a;
    }, /** @type Array<Shape> */ ([]));
    return [...acc, ...row];
  }, /** @type Array<Shape> */ ([]));

  /** @type {HTMLCanvasElement} */
  let canvas;

  onMount(() => {
    const a = new Box({
      color: "hsl(263 54% 64%)",
      rearFace: "hsl(263 98% 76%)",
      frontFace: "hsl(263 98% 76%)",
      width: 1,
      height: 1,
      depth: 1,
      stroke: 0,
    });

    const b = new Anchor({});

    new Shape({
      addTo: b,
      color: "hsl(263 54% 64%)",
      fill: true,
      stroke: 0,
      path: [
        {
          x: -0.5,
          y: 0.5,
          z: -0.5,
        },
        {
          x: 0.5,
          y: 0.5,
          z: -0.5,
        },
        {
          x: 0.5,
          y: 0.5,
          z: 0.5,
        },
        {
          x: -0.5,
          y: 0.5,
          z: 0.5,
        },
      ],
    });

    new Shape({
      addTo: b,
      color: "hsl(263 54% 64%)",
      fill: true,
      stroke: 0,
      path: [
        {
          x: -0.5,
          y: -0.5,
          z: 0.5,
        },
        {
          x: -0.5,
          y: 0.5,
          z: 0.5,
        },
        {
          x: -0.5,
          y: 0.5,
          z: -0.5,
        },
        {
          x: -0.5,
          y: -0.5,
          z: -0.5,
        },
      ],
    });

    new Shape({
      addTo: b,
      color: "hsl(263 98% 76%)",
      fill: true,
      stroke: 0,
      path: [
        {
          x: -0.5,
          y: -0.5,
          z: -0.5,
        },
        {
          x: -0.5,
          y: 0.5,
          z: -0.5,
        },
        {
          x: 0.5,
          y: 0.5,
          z: -0.5,
        },
        {
          arc: [
            { x: 0.5, y: -0.5, z: -0.5 },
            { x: -0.5, y: -0.5, z: -0.5 },
          ],
        },
      ],
    });

    new Shape({
      addTo: b,
      color: "hsl(263 98% 76%)",
      fill: true,
      stroke: 0,
      path: [
        {
          x: -0.5,
          y: -0.5,
          z: 0.5,
        },
        {
          x: -0.5,
          y: 0.5,
          z: 0.5,
        },
        {
          x: 0.5,
          y: 0.5,
          z: 0.5,
        },
        {
          arc: [
            { x: 0.5, y: -0.5, z: 0.5 },
            { x: -0.5, y: -0.5, z: 0.5 },
          ],
        },
      ],
    });

    new Shape({
      addTo: b,
      color: "hsl(263 54% 64%)",
      fill: true,
      stroke: 0,
      path: [
        {
          x: 0.5,
          y: 0.5,
          z: 0.5,
        },
        {
          arc: [
            { x: 0.5, y: -0.5, z: 0.5 },
            { x: -0.5, y: -0.5, z: 0.5 },
          ],
        },
        {
          x: -0.5,
          y: -0.5,
          z: -0.5,
        },
        {
          arc: [
            { x: 0.5, y: -0.5, z: -0.5 },
            { x: 0.5, y: 0.5, z: -0.5 },
          ],
        },
      ],
    });

    const c = b.copyGraph({
      rotate: {
        z: TAU / 4,
      },
    });

    const d = b.copyGraph({
      rotate: {
        z: TAU / 2,
      },
    });

    const e = b.copyGraph({
      rotate: {
        z: (TAU * 3) / 4,
      },
    });

    const f = new Anchor();

    new Shape({
      addTo: f,
      color: "hsl(263 54% 64%)",
      fill: true,
      stroke: 0,
      path: [
        {
          x: -0.5,
          y: 0.5,
          z: -0.5,
        },
        {
          x: 0.5,
          y: 0.5,
          z: -0.5,
        },
        {
          x: 0.5,
          y: 0.5,
          z: 0.5,
        },
        {
          x: -0.5,
          y: 0.5,
          z: 0.5,
        },
      ],
    });

    new Shape({
      addTo: f,
      color: "hsl(263 54% 64%)",
      fill: true,
      stroke: 0,
      path: [
        {
          x: -0.5,
          y: -0.5,
          z: 0.5,
        },
        {
          x: -0.5,
          y: 0.5,
          z: 0.5,
        },
        {
          x: -0.5,
          y: 0.5,
          z: -0.5,
        },
        {
          x: -0.5,
          y: -0.5,
          z: -0.5,
        },
      ],
    });

    new Shape({
      addTo: f,
      color: "hsl(263 98% 76%)",
      fill: true,
      stroke: 0,
      path: [
        {
          x: -0.5,
          y: -0.5,
          z: -0.5,
        },
        { x: -0.5, y: 0.5, z: -0.5 },
        {
          x: 0.5,
          y: 0.5,
          z: -0.5,
        },
      ],
    });

    new Shape({
      addTo: f,
      color: "hsl(263 98% 76%)",
      fill: true,
      stroke: 0,
      path: [
        {
          x: -0.5,
          y: -0.5,
          z: 0.5,
        },
        { x: -0.5, y: 0.5, z: 0.5 },
        {
          x: 0.5,
          y: 0.5,
          z: 0.5,
        },
      ],
    });

    new Shape({
      addTo: f,
      color: "hsl(263 54% 64%)",
      fill: true,
      stroke: 0,
      path: [
        {
          x: 0.5,
          y: 0.5,
          z: 0.5,
        },
        { x: -0.5, y: -0.5, z: 0.5 },
        {
          x: -0.5,
          y: -0.5,
          z: -0.5,
        },
        { x: 0.5, y: 0.5, z: -0.5 },
      ],
    });

    const g = f.copyGraph({
      rotate: {
        z: TAU / 4,
      },
    });

    const h = f.copyGraph({
      rotate: {
        z: TAU / 2,
      },
    });

    const i = f.copyGraph({
      rotate: {
        z: (TAU * 3) / 4,
      },
    });

    /** @typedef { 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i'} Copy */
    /** @type Object.<Copy, any>*/
    const shapes = { a, b, c, d, e, f, g, h, i };

    const root = new Anchor();
    const center = new Anchor({ addTo: root });

    const origin = new Anchor({
      addTo: center,
      translate: {
        x: (columns / 2) * -1 + 0.5,
        y: (rows / 2) * -1 + 0.5,
      },
    });

    for (const { x, y, ref } of copies) {
      const copy = shapes[/** @type {Copy} */ (ref)];
      if (copy) {
        copy.copyGraph({
          addTo: origin,
          translate: {
            x,
            y,
          },
        });
      }
    }

    const context = /** @type { CanvasRenderingContext2D }*/ (
      canvas.getContext("2d")
    );
    const { width, height } = canvas;
    const zoom = 40;

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

    root.rotate.x = TAU / 24;
    root.updateGraph();
    render();

    /** @type number */
    let frame;
    let direction = 1;
    const angle = TAU / 14;

    const animate = () => {
      center.rotate.x +=
        (0.0002 + 0.03 * (1 - Math.abs(center.rotate.x) / angle)) * direction;

      if (center.rotate.x >= angle) {
        center.rotate.x = angle;
        direction = -1;
      } else if (center.rotate.x <= angle * -1) {
        center.rotate.x = angle * -1;
        direction = 1;
      }

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
        observer.unobserve(canvas);
      } else {
        observer.observe(canvas);
      }
    };

    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

    if (!reducedMotion.matches) {
      observer.observe(canvas);
    }

    reducedMotion.addEventListener("change", listener);

    return () => {
      reducedMotion.removeEventListener("change", listener);
      cancelAnimationFrame(frame);
      observer.unobserve(canvas);
    };
  });
</script>

<canvas
  bind:this={canvas}
  style="display: block; inline-size: 100%; max-inline-size: 420px;"
  width="420"
  height="240"
></canvas>
