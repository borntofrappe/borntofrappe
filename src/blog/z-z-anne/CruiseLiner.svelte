<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Anchor, Shape, Ellipse, RoundedRect, TAU, easeInOut } = pkg;

  /** @type {HTMLCanvasElement} */
  let element;
  onMount(() => {
    const context = /** @type { CanvasRenderingContext2D }*/ (
      element.getContext("2d")
    );
    const { width, height } = element;
    const zoom = 5;

    const stroke = 0.2;
    const offsets = [1, 2, 3];
    const depth = 10;
    const z = depth * -1;

    const cruiseOffset = -5;
    const cruiseAngle = TAU / 30;

    const streamsOffset = 16;
    const streamsSpeed = 0.05;
    const streamsOffsets = Array(4)
      .fill("")
      .map((_, i, { length }) => (streamsOffset / length) * i);

    /**
     * @param {number} offset
     */
    const streamsScale = (offset) => (streamsOffset - offset) / streamsOffset;

    const puffsOffset = -12;
    const puffsSpeed = 0.05;
    const puffsOffsets = Array(3)
      .fill("")
      .map((_, i, { length }) => (puffsOffset / length) * i);

    /**
     * @param {number} offset
     */
    const puffsOffsetX = (offset) =>
      easeInOut(1 - (puffsOffset - offset) / puffsOffset) * 8;
    /**
     * @param {number} offset
     */
    const puffsStroke = (offset) => ((puffsOffset - offset) / puffsOffset) * 4;

    const colors = {
      sea: "hsl(217 57% 45%)",
      wave: "hsl(213 62% 39%)",
      stream: "hsl(214 50% 51%)",
      hull: "hsl(180 6% 94%)",
      deck: "hsl(48 85% 61%)",
      cabin: "hsl(180 6% 94%)",
      chinmey: "hsl(180 6% 94%)",
      exhaust: "hsl(48 85% 61%)",
      puffs: "hsl(225 100% 99%)",
      windows: "hsl(245 12% 37%)",
      anchor: "hsl(225 14% 28%)",
    };

    const root = new Anchor();

    new RoundedRect({
      addTo: root,
      color: colors.sea,
      stroke: 0,
      fill: true,
      cornerRadius: Math.max(width, height),
      width: width / zoom,
      height: height / zoom,
      translate: {
        z: -50,
      },
    });

    const cruise = new Anchor({
      addTo: root,
    });

    const waves = new Anchor({
      addTo: cruise,
    });

    const wave = new Shape({
      color: colors.wave,
      stroke: 1.25,
      closed: false,
      path: [
        { x: -4.5, y: 0 },
        {
          bezier: [
            { x: -4, y: 1.5 },
            { x: -2, y: 1.5 },
            { x: -1.5, y: 0 },
          ],
        },
        {
          bezier: [
            { x: -1, y: 1.5 },
            { x: 1, y: 1.5 },
            { x: 1.5, y: 0 },
          ],
        },
        {
          bezier: [
            { x: 2, y: 1.5 },
            { x: 4, y: 1.5 },
            { x: 4.5, y: 0 },
          ],
        },
      ],
    });

    for (const [x, y] of [
      [15, 25],
      [-10, 30],
      [-20, -35],
      [25, -15],
      [10, -40],
      [-30, 0],
    ]) {
      wave.copy({
        addTo: waves,
        translate: {
          x,
          y,
        },
      });
    }

    const streams = new Anchor({
      addTo: cruise,
      translate: {
        x: 7,
        y: 9,
        z: z / 2 - 0.5,
      },
    });

    const stream = new Shape({
      color: colors.stream,
      stroke: 2,
      path: [{ z: depth / 2 }, { z: (depth / 2) * -1 }],
    });

    for (const offset of streamsOffsets) {
      stream.copy({
        addTo: streams,
        translate: {
          x: offset,
        },
        scale: {
          z: streamsScale(offset),
        },
      });
    }

    const hull = new Shape({
      addTo: cruise,
      color: colors.hull,
      stroke,
      fill: true,
      path: [
        { x: 13.5, y: 2.5 },
        {
          arc: [
            { x: 13.5, y: 10 },
            { x: 6, y: 10 },
          ],
        },
        { x: -6, y: 10 },
        {
          arc: [
            { x: -13.5, y: 10 },
            { x: -13.5, y: 2.5 },
          ],
        },
      ],
    });

    const deck = new Shape({
      addTo: cruise,
      color: colors.deck,
      stroke,
      fill: true,
      path: [
        { x: 3, y: 0 },
        { x: 11, y: 0 },
        {
          arc: [
            { x: 13.5, y: 0 },
            { x: 13.5, y: 2.5 },
          ],
        },
        { x: -13.5, y: 2.5 },
        { x: -13.5, y: -2.5 },
        {
          arc: [
            { x: -13.5, y: -5 },
            { x: -11, y: -5 },
          ],
        },
        { x: -8, y: -5 },
        {
          bezier: [
            { x: -2, y: -5 },
            { x: -2, y: 0 },
            { x: 3, y: 0 },
          ],
        },
      ],
    });

    const porthole = new Ellipse({
      color: colors.windows,
      stroke: 1,
      fill: true,
      diameter: 2,
    });

    for (const x of [-10, -5]) {
      porthole.copy({
        addTo: cruise,
        translate: {
          x,
          y: -1,
          z: offsets[2],
        },
      });
    }

    const cabin = new Shape({
      addTo: cruise,
      color: colors.cabin,
      stroke,
      fill: true,
      path: [
        { x: -8, y: -5 },
        { x: -8, y: -9 },
        {
          arc: [
            { x: -8, y: -11.5 },
            { x: -5.5, y: -11.5 },
          ],
        },
        { x: 1.5, y: -11.5 },
        {
          arc: [
            { x: 3, y: -11.5 },
            { x: 3, y: -9 },
          ],
        },
        { x: 3, y: 0 },
        {
          bezier: [
            { x: -2, y: 0 },
            { x: -2, y: -5 },
            { x: -8, y: -5 },
          ],
        },
      ],
    });

    const sidescuttle = new RoundedRect({
      color: colors.windows,
      stroke: 1,
      fill: true,
      width: 2.5,
      height: 2.5,
      cornerRadius: 0.5,
    });

    for (const [x, y] of [
      [-4.5, -8],
      [-0.5, -8],
    ]) {
      sidescuttle.copy({
        addTo: cruise,
        translate: {
          x,
          y,
          z: offsets[0],
        },
      });
    }

    const chimney = new Shape({
      addTo: cruise,
      color: colors.chinmey,
      stroke,
      fill: true,
      path: [
        { x: 4.5, y: 0 },
        { x: 4.5, y: -8 },
        { x: 9.5, y: -8 },
        { x: 11, y: 0 },
      ],
    });

    const exhaust = new Shape({
      addTo: cruise,
      color: colors.exhaust,
      stroke,
      fill: true,
      path: [
        { x: 4.5, y: -8 },
        { x: 4.5, y: -9.5 },
        { x: 9.5, y: -9.5 },
        { x: 9.5, y: -8 },
      ],
    });

    const puffs = new Anchor({
      addTo: cruise,
      translate: {
        x: 7,
        y: -12,
        z: z / 2,
      },
    });

    for (const offset of puffsOffsets) {
      const x = puffsOffsetX(offset);
      new Shape({
        addTo: puffs,
        stroke: puffsStroke(offset),
        color: colors.puffs,
        translate: {
          x,
          y: offset,
        },
      });
    }

    const anchor = new Anchor({
      addTo: cruise,
      translate: {
        x: 6,
        y: 2.5,
        z: offsets[1],
      },
    });

    new Ellipse({
      addTo: anchor,
      color: colors.anchor,
      stroke: 0.75,
      diameter: 2,
    });

    new Shape({
      addTo: anchor,
      color: colors.anchor,
      stroke: 0.75,
      path: [{ y: 1 }, { y: 5 }],
    });

    new Shape({
      addTo: anchor,
      color: colors.anchor,
      stroke: 0.75,
      path: [
        { x: 1, y: 2.5 },
        { x: -1, y: 2.5 },
      ],
    });

    new Shape({
      addTo: anchor,
      color: colors.anchor,
      stroke: 0.75,
      closed: false,
      path: [
        { x: 2.75, y: 3 },
        { x: 2.25, y: 3 },
        {
          bezier: [
            { x: 2.25, y: 4.5 },
            { x: 0, y: 4.5 },
            { x: 0, y: 4.5 },
          ],
        },
        {
          bezier: [
            { x: 0, y: 4.5 },
            { x: -2.25, y: 4.5 },
            { x: -2.25, y: 3 },
          ],
        },
        { x: -2.75, y: 3 },
      ],
    });

    for (const shape of [hull, deck, cabin, chimney, exhaust]) {
      const { color, stroke, fill, path } = shape;
      const [h, s, l] = color.match(/\d+/g);
      const colorShadow = `hsl(${h} ${s}% ${parseFloat(l) * 0.8}%)`;

      for (let i = 0; i < path.length; i++) {
        let pathShadow = [];
        const p1 = path[i];
        const p2 = path[(i + 1) % path.length];

        const p1Bezier = Object.hasOwn(p1, "bezier");
        const p2Bezier = Object.hasOwn(p2, "bezier");
        const p1Arc = Object.hasOwn(p1, "arc");
        const p2Arc = Object.hasOwn(p2, "arc");

        const { x: x1, y: y1 } = p1Bezier
          ? p1.bezier[2]
          : p1Arc
            ? p1.arc[1]
            : p1;

        if (p2Bezier) {
          const { x: xc1, y: yc1 } = p2.bezier[0];
          const { x: xc2, y: yc2 } = p2.bezier[1];
          const { x: x2, y: y2 } = p2.bezier[2];

          pathShadow = [
            { x: x1, y: y1, z: 0 },
            { x: x1, y: y1, z },
            {
              bezier: [
                { x: xc1, y: yc1, z },
                { x: xc2, y: yc2, z },
                { x: x2, y: y2, z },
              ],
            },
            { x: x2, y: y2, z: 0 },
            {
              bezier: [
                { x: xc2, y: yc2, z: 0 },
                { x: xc1, y: yc1, z: 0 },
                { x: x1, y: y1, z: 0 },
              ],
            },
          ];
        } else if (p2Arc) {
          const { x: xc, y: yc } = p2.arc[0];
          const { x: x2, y: y2 } = p2.arc[1];

          pathShadow = [
            { x: x1, y: y1, z: 0 },
            { x: x1, y: y1, z },
            {
              arc: [
                { x: xc, y: yc, z },
                { x: x2, y: y2, z },
              ],
            },
            { x: x2, y: y2, z: 0 },
            {
              arc: [
                { x: xc, y: yc, z: 0 },
                { x: x1, y: y1, z: 0 },
              ],
            },
          ];
        } else {
          const { x: x2, y: y2 } = p2;

          pathShadow = [
            { x: x1, y: y1, z: 0 },
            { x: x1, y: y1, z },
            { x: x2, y: y2, z },
            { x: x2, y: y2, z: 0 },
          ];
        }

        new Shape({
          addTo: shape,
          color: colorShadow,
          stroke,
          fill,
          path: pathShadow,
        });
      }
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

    cruise.translate.y = 4;
    cruise.rotate.x = (TAU / 8) * -1;

    root.updateGraph();
    render();

    /** @type number */
    let frame;
    let ticker = 0;
    let direction = 1;
    const cycle = 1000;

    const animate = () => {
      for (const stream of streams.children) {
        stream.translate.x += streamsSpeed;
        if (stream.translate.x >= streamsOffset) {
          stream.translate.x = 0;
        }
        stream.scale.z = streamsScale(stream.translate.x);
      }

      for (const puff of puffs.children) {
        puff.translate.y -= puffsSpeed;
        if (puff.translate.y <= puffsOffset) {
          puff.translate.y = 0;
        }
        puff.stroke = puffsStroke(puff.translate.y);
        puff.translate.x = puffsOffsetX(puff.translate.y);
      }

      ticker += direction;
      if (ticker >= cycle) {
        ticker = cycle;
        direction = -1;
      } else if (ticker <= 0) {
        ticker = 0;
        direction = 1;
      }

      const ease = easeInOut(ticker / cycle, 3);
      cruise.translate.x = cruiseOffset * ease;
      cruise.rotate.y = cruiseAngle * ease;
      waves.translate.x = cruise.translate.x * 1.5 * -1;

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
