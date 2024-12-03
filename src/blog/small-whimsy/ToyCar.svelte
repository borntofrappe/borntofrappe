<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Anchor, Group, Shape, Box, Ellipse, RoundedRect, TAU, easeInOut } =
    pkg;

  /** @type {HTMLDivElement} */
  let widget;
  onMount(() => {
    const colors = {
      car: "hsl(348 100% 84%)",
      window: "hsl(177 100% 96%)",
      door: "hsl(356 20% 58%)",
      wheel: ["hsl(213 16% 89%)", "hsl(356 20% 58%)"],
      crank: "hsl(356 20% 58%)",
      road: "hsl(356 20% 52%)",
      grass: "hsl(200 20% 70%)",
    };

    const strokes = [2, 4, 6];
    const offsets = [6, 12];
    const depth = 50;
    const z = depth * -1;

    const root = new Anchor();

    const car = new Shape({
      addTo: root,
      color: colors.car,
      stroke: strokes[0],
      fill: true,
      path: [
        { x: 0, y: 0 },
        {
          bezier: [
            { x: 30, y: 0 },
            { x: 35, y: 30 },
            { x: 35, y: 40 },
          ],
        },
        {
          bezier: [
            { x: 45, y: 45 },
            { x: 45, y: 55 },
            { x: 45, y: 60 },
          ],
        },
        { x: -45, y: 60 },
        {
          bezier: [
            { x: -45, y: 40 },
            { x: -45, y: 0 },
            { x: 0, y: 0 },
          ],
        },
      ],
    });

    new Shape({
      addTo: car,
      color: colors.window,
      stroke: strokes[0],
      fill: true,
      path: [
        { x: 0, y: 0 },
        {
          bezier: [
            { x: 20, y: 0 },
            { x: 25, y: 20 },
            { x: 25, y: 30 },
          ],
        },
        { x: 0, y: 30 },
      ],
      translate: {
        x: 2.5,
        y: 5,
        z: offsets[0],
      },
    });

    new Shape({
      addTo: car,
      color: colors.window,
      stroke: strokes[0],
      fill: true,
      path: [
        { x: 0, y: 0 },
        {
          bezier: [
            { x: -25, y: 0 },
            { x: -35, y: 20 },
            { x: -35, y: 30 },
          ],
        },
        { x: 0, y: 30 },
      ],
      translate: {
        x: -2.5,
        y: 5,
        z: offsets[0],
      },
    });

    new Shape({
      addTo: car,
      color: colors.door,
      stroke: strokes[1],
      path: [{ x: 0 }, { x: 8 }],
      translate: {
        x: 2.5,
        y: 41,
        z: offsets[0],
      },
    });

    new Shape({
      addTo: car,
      color: colors.door,
      stroke: strokes[1],
      translate: {
        x: -2.5,
        y: 41,
        z: offsets[0],
      },
    });

    const wheel = new Ellipse({
      color: colors.wheel[0],
      stroke: strokes[2],
      fill: true,
      diameter: 18,
    });

    new Ellipse({
      addTo: wheel,
      color: colors.wheel[1],
      stroke: strokes[1],
      fill: true,
      diameter: 8,
      translate: {
        z: strokes[2],
      },
    });

    for (const [x, y, z] of [
      [22.5, 59, offsets[1]],
      [-27.5, 59, offsets[1]],
    ]) {
      wheel.copyGraph({
        addTo: car,
        translate: {
          x,
          y,
          z,
        },
      });

      wheel.copyGraph({
        addTo: car,
        translate: {
          x,
          y,
          z: (depth + z) * -1,
        },
        rotate: {
          y: TAU / 2,
        },
      });
    }

    const crank = new Shape({
      addTo: car,
      color: colors.crank,
      stroke: strokes[1],
      path: [{ y: 0 }, { y: -17 }],
    });

    new Box({
      addTo: crank,
      color: colors.crank,
      stroke: strokes[1],
      width: 6,
      height: 6,
      depth: 6,
      translate: {
        y: -20,
      },
    });

    for (const x of [-12.5, 12.5]) {
      new Ellipse({
        addTo: crank,
        color: colors.crank,
        stroke: strokes[1],
        diameter: 20,
        translate: {
          x,
          y: -20,
        },
        scale: {
          y: 0.6,
        },
      });
    }

    const road = new RoundedRect({
      addTo: root,
      width: 140,
      height: 140,
      color: colors.road,
      stroke: strokes[2],
      fill: true,
      rotate: {
        x: TAU / 4,
      },
    });

    const overworld = new Group({
      addTo: road,
      translate: {
        z: (strokes[2] + strokes[1]) / 2,
      },
    });

    for (const [x, y] of [
      [55, 50],
      [2, 50],
      [-45, 50],
      [-40, -50],
      [65, -40],
    ]) {
      new Shape({
        addTo: overworld,
        color: colors.grass,
        stroke: strokes[1],
        closed: false,
        path: [
          { x: -3, z: 3 },
          { x: 0, z: 0 },
          { x: 3, z: 3 },
        ],
        translate: {
          x,
          y,
        },
      });
    }

    crank.translate.z = z / 2;
    crank.translate.x = -3;
    crank.translate.y = -2;

    road.translate.z = z / 2;
    road.translate.y = 74;

    const { path } = car;

    for (let i = 0; i < path.length; i++) {
      let pathThickness = [];
      const p1 = path[i];
      const p2 = path[(i + 1) % path.length];

      const p1Bezier = Object.hasOwn(p1, "bezier");
      const p2Bezier = Object.hasOwn(p2, "bezier");

      const { x: x1, y: y1 } = p1Bezier ? p1.bezier[2] : p1;

      if (p2Bezier) {
        const { x: xc1, y: yc1 } = p2.bezier[0];
        const { x: xc2, y: yc2 } = p2.bezier[1];
        const { x: x2, y: y2 } = p2.bezier[2];

        pathThickness = [
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
      } else {
        const { x: x2, y: y2 } = p2;

        pathThickness = [
          { x: x1, y: y1, z: 0 },
          { x: x1, y: y1, z },
          { x: x2, y: y2, z },
          { x: x2, y: y2, z: 0 },
        ];
      }

      new Shape({
        addTo: car,
        color: car.color,
        stroke: car.stroke,
        fill: true,
        path: pathThickness,
      });
    }

    const element = /** @type {HTMLCanvasElement} */ (
      widget.querySelector("canvas")
    );
    const context = /** @type { CanvasRenderingContext2D }*/ (
      element.getContext("2d")
    );
    const { width, height } = element;
    const zoom = 3;

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

    root.translate.y = -25;
    root.rotate.x = 0;
    root.rotate.y = -0.2;

    root.updateGraph();
    render();

    const spins = 4;
    const { x, y } = root.rotate;
    const cycles = [300, 600];

    /** @type number */
    let frame;
    let ticker = 0;
    let [cycle] = cycles;

    let state = "wait";

    const button = /** @type {HTMLButtonElement} */ (
      widget.querySelector("button")
    );
    button.removeAttribute("disabled");

    const roll = () => {
      ticker++;
      if (ticker > cycle) {
        ticker = 0;
        state = "wait";
        button.removeAttribute("disabled");
        cancelAnimationFrame(frame);
      } else {
        const ease = easeInOut(ticker / cycle, 3);
        const loop = Math.sin(ease * Math.PI);

        crank.rotate.y = ease * TAU * -1 * spins;
        car.translate.x = loop * 5;
        overworld.translate.x = loop * 10 * -1;
        root.rotate.x = x - loop * 0.2;
        root.rotate.y = y + loop * 0.4;

        root.updateGraph();
        render();

        frame = requestAnimationFrame(roll);
      }
    };

    const spin = () => {
      ticker++;

      if (ticker > cycle) {
        ticker = 0;
        cycle = cycles[1];
        state = "roll";
        frame = requestAnimationFrame(roll);
      } else {
        crank.rotate.y = easeInOut(ticker / cycle) * TAU * spins;
        root.updateGraph();
        render();

        frame = requestAnimationFrame(spin);
      }
    };

    const handleStart = () => {
      if (state !== "wait") return;

      state = "spin";
      cycle = cycles[0];
      frame = requestAnimationFrame(spin);
      button.setAttribute("disabled", "true");
    };

    button.addEventListener("click", handleStart);

    return () => {
      button.removeEventListener("click", handleStart);
      cancelAnimationFrame(frame);
    };
  });
</script>

<div bind:this={widget}>
  <button disabled>
    <span>Spin</span>
    <svg width="1em" height="1em" viewBox="-12 -12 24 24">
      <g stroke-linecap="round" stroke-linejoin="round">
        <ellipse
          transform="scale(1 0.8)"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          pathLength="1"
          stroke-dasharray="0.8 0.2"
          stroke-dashoffset="0.55"
          rx="10"
          ry="8"
        />
        <path
          transform="translate(0 6.4)"
          fill="currentColor"
          stroke="currentColor"
          d="M 0 0 3 -3 2 -4 -2 0 2 4 3 3 Z"
        />
      </g>
    </svg>
  </button>
  <canvas
    style="display: block; inline-size: 100%; max-inline-size: 550px;"
    width="550"
    height="400"
  ></canvas>
</div>

<style>
  div {
    max-inline-size: 550px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  button {
    --angle: 0deg;
    --border-inline-size: 0.3rem;
    font-weight: 700;
    font-size: 1rem;
    font-family: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 1e5px;
    color: hsl(350 20% 23%);
    border: var(--border-inline-size, 0.3rem) solid transparent;
    background:
      linear-gradient(to right, hsl(177 100% 96%), hsl(177 100% 96%))
        padding-box,
      linear-gradient(var(--angle, 0deg), hsl(340 100% 90%), hsl(348 100% 84%))
        border-box;
    transition-property: --angle, scale;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  button:focus {
    outline: var(--border-inline-size, 0.3rem) solid hsl(348 100% 84%);
    outline-offset: var(--border-inline-size, 0.3rem);
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  button:not(:disabled):hover {
    scale: 1.1;
    --angle: -20deg;
  }

  button:disabled {
    scale: 0.9;
    --angle: 180deg;
  }
</style>
