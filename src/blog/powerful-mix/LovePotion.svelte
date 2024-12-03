<script>
  import { onMount } from "svelte";
  import { circIn as easing } from "svelte/easing";
  import pkg from "zdog";
  const { Anchor, Group, Shape, Hemisphere, Ellipse } = pkg;

  /** @type {HTMLDivElement} */
  let widget;
  onMount(() => {
    const PI = Math.PI;
    const TAU = PI * 2;

    const colors = {
      flask: "hsla(197 67% 76% / 0.8)",
      rim: "hsla(198 71% 74%)",
      tube: ["hsl(199 67% 88% / 0.6)", "hsla(199 67% 88% / 0.3)"],
      potion: "hsl(343 92% 72%)",
      droplet: "hsl(347 88% 58% / 0.6)",
      bubble: "hsl(350 84% 46% / 0.6)",
      support: "hsl(22 35% 86%)",
      burner: "hsl(20 30% 72%)",
      flame: "hsl(0 88% 63%)",
    };

    const stroke = 6;

    const diameter = 65;
    const legs = 4;
    const legHeight = 40;
    const flameSize = 8;

    const root = new Anchor();

    const tube = new Shape({
      addTo: root,
      color: colors.tube[0],
      stroke,
      closed: false,
      path: [
        { x: -5, y: stroke },
        {
          bezier: [
            { x: -5, y: -25 },
            { x: -30, y: -30 },
            { x: -30, y: -50 },
          ],
        },
        {
          arc: [
            { x: -30, y: -65 },
            { x: -15, y: -65 },
          ],
        },
        {
          arc: [
            { x: 0, y: -65 },
            { x: 0, y: -50 },
          ],
        },
      ],
    });

    new Shape({
      addTo: tube,
      color: colors.tube[1],
      stroke,
      path: [
        { x: -5, y: stroke },
        { x: -5, y: diameter / 2 + stroke },
      ],
    });

    tube.copyGraph({
      scale: {
        x: -1,
      },
    });

    const support = new Anchor({
      addTo: root,
    });

    const arm = new Shape({
      addTo: support,
      color: colors.support,
      stroke,
      closed: false,
      path: [
        { x: diameter / 2, z: 0 },
        {
          arc: [
            { x: diameter / 2, z: diameter / 2 },
            { x: 0, z: diameter / 2 },
          ],
        },
        {
          arc: [
            { x: (diameter / 2) * -1, z: diameter / 2 },
            { x: (diameter / 2) * -1, z: 0 },
          ],
        },
      ],
      translate: {
        y: diameter / 13,
      },
    });

    arm.copy({
      rotate: {
        y: TAU / 2,
      },
    });

    const leg = new Shape({
      color: colors.support,
      stroke,
      path: [{ y: 0 }, { y: legHeight }],
    });

    for (let i = 0; i < legs; i++) {
      const a = (TAU / legs) * i;
      const x = (Math.cos(a) * diameter) / 2;
      const z = (Math.sin(a) * diameter) / 2;

      leg.copy({
        addTo: support,
        translate: {
          x,
          z,
        },
      });
    }

    new Shape({
      addTo: support,
      color: colors.flask,
      stroke: diameter - stroke,
    });

    new Ellipse({
      addTo: support,
      color: colors.rim,
      stroke: stroke * 2,
      diameter: diameter / 2.5,
      translate: {
        y: (diameter / 2) * -1,
      },
      rotate: {
        x: TAU / 4,
      },
    });

    const potion = new Group({
      addTo: support,
    });

    const liquid = new Hemisphere({
      addTo: potion,
      color: colors.potion,
      stroke,
      diameter: (diameter - stroke) * 0.7,
      rotate: {
        x: (TAU / 4) * -1,
      },
    });

    liquid.copy({
      rotate: {
        x: TAU / 4,
      },
      visible: false,
    });

    const burner = new Anchor({
      addTo: root,
      diameter: stroke,
    });

    new Ellipse({
      addTo: burner,
      color: colors.burner,
      stroke,
      diameter: diameter / 4,
      fill: true,
      rotate: {
        x: (TAU / 4) * -1,
      },
    });

    const flame = new Anchor({
      addTo: burner,
      translate: {
        y: stroke * -1,
      },
    });

    new Hemisphere({
      addTo: flame,
      color: colors.flame,
      stroke,
      diameter: flameSize,
      rotate: {
        x: (TAU / 4) * -1,
      },
      translate: {
        y: (flameSize / 2) * -1,
      },
    });

    new Shape({
      addTo: flame,
      color: colors.flame,
      stroke,
      fill: true,
      path: [
        { x: 0, y: flameSize * -1, z: 0 },
        { x: (flameSize / 2) * -1, y: 0, z: 0 },
        {
          arc: [
            { x: (flameSize / 2) * -1, y: 0, z: flameSize / 2 },
            { x: 0, y: 0, z: flameSize / 2 },
          ],
        },
        {
          arc: [
            { x: flameSize / 2, y: 0, z: flameSize / 2 },
            { x: flameSize / 2, y: 0, z: 0 },
          ],
        },
      ],
      translate: {
        y: (flameSize / 2) * -1,
      },
    });

    const droplets = new Anchor({
      addTo: root,
    });

    const droplet = new Shape({
      color: colors.droplet,
      stroke: stroke,
    });

    const bubbles = new Anchor({
      addTo: potion,
      rotate: {
        x: TAU / 4,
      },
    });

    const bubble = new Hemisphere({
      color: colors.droplet,
      stroke: 0,
      diameter: diameter / 10,
    });

    for (const translate of [
      {
        x: diameter / 4,
      },
      {
        x: (diameter / 4) * -1,
      },
      {
        x: diameter / 8,
        y: diameter / 12,
      },
      {
        x: (diameter / 12) * -1,
        y: diameter / 10,
      },
    ]) {
      bubble.copy({
        addTo: bubbles,
        translate,
      });
    }

    const canvas = /** @type { HTMLCanvasElement }*/ (
      widget.querySelector("canvas")
    );
    const context = /** @type { CanvasRenderingContext2D }*/ (
      canvas.getContext("2d")
    );
    const { width, height } = canvas;
    const zoom = 2;

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

    burner.translate.y = diameter / 2 + legHeight + flameSize + stroke;
    root.translate.y = -10;
    support.translate.y = diameter / 2 + stroke * 2;

    root.rotate.x = -0.1;
    root.rotate.y = 0.2;
    support.rotate.y = 0.2;
    burner.rotate.y = root.rotate.y * -1;

    flame.scale = 0;
    for (const bubble of bubbles.children) {
      bubble.t = Math.random();
      bubble.scale = bubble.t;
    }

    root.updateGraph();
    render();

    /** @type number */
    let frame;
    let ticker = 0;
    const cycle = 300;

    const flameData = {
      base: 0.4,
      increment: 0,
      max: 1,
    };

    /** @type Array<{ticker: number, cycle: number, points: number }> */
    let dropletsData = [];

    const steps = 261;

    const ds = [
      `M -5 ${
        diameter / 1.5
      } -5 ${stroke} C -5 -25 -30 -30 -30 -50 A 15 15 0 0 1 0 -50 L 0 ${diameter}`,
      `M 5 ${diameter / 1.5} 5 ${stroke} C 5 -25 30 -30 30 -50 A 15 15 0 0 0 0 -50 L 0 ${diameter}`,
    ];

    const paths = ds.map((d) => {
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("d", d);
      return path;
    });

    const points = paths.map((path) => {
      const totalLength = path.getTotalLength();
      return Array(steps)
        .fill("")
        .map((_, i, { length }) => {
          const { x, y } = path.getPointAtLength(
            (totalLength / (length - 1)) * i
          );
          return { x, y };
        });
    });

    const animate = () => {
      const t = ticker++ / cycle;
      const l = Math.sin(t * PI);

      flame.scale = l * (flameData.base + flameData.increment);
      for (const bubble of bubbles.children) {
        bubble.scale = Math.sin(((t + bubble.t) % 1) * PI);
      }

      for (let i = dropletsData.length - 1; i >= 0; i--) {
        const t = dropletsData[i].ticker++ / dropletsData[i].cycle;
        const indexPoints = dropletsData[i].points;
        const indexProgress = Math.floor(
          easing(t) * points[indexPoints].length
        );
        const { x, y } = points[indexPoints][indexProgress];
        droplets.children[i].translate = { x, y };
        if (dropletsData[i].ticker >= dropletsData[i].cycle) {
          dropletsData = [
            ...dropletsData.slice(0, i),
            ...dropletsData.slice(i + 1),
          ];
          droplets.removeChild(droplets.children[i]);
        }
      }

      if (ticker >= cycle) {
        ticker = ticker % cycle;
        flameData.increment = 0;
      }

      root.updateGraph();
      render();

      frame = requestAnimationFrame(animate);
    };

    const handleClick = () => {
      ticker = cycle / 4;
      flameData.increment = flameData.max - flameData.base;

      droplet.copy({
        addTo: droplets,
      });

      dropletsData = [
        ...dropletsData,
        {
          ticker: 0,
          cycle,
          points: Math.floor(Math.random() * points.length),
        },
      ];
    };

    frame = requestAnimationFrame(animate);
    const button = /** @type HTMLButtonElement */ (
      widget.querySelector("button")
    );
    button.removeAttribute("disabled");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
      cancelAnimationFrame(frame);
    };
  });
</script>

<div bind:this={widget}>
  <canvas
    style="display: block; inline-size: 100%; max-inline-size: 350px;"
    width="350"
    height="350"
  ></canvas>
  <button disabled>Heat up</button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    font-size: 1rem;
    font-family: inherit;
    font-weight: 700;
    padding: 0.5rem 1rem;
    color: hsl(0 88% 20%);
    background: hsl(22 35% 86%);
    border-radius: 1e5px;
    border: none;
    transition: scale 0.2s;
  }

  button:disabled {
    opacity: 0.5;
  }

  button:not(:disabled):active {
    scale: 0.8;
  }

  button:focus-visible {
    outline: 2px solid currentcolor;
    outline-offset: 2px;
  }
</style>
