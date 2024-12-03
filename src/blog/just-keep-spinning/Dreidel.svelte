<script>
  import { onMount } from "svelte";
  import { backInOut } from "svelte/easing";
  import pkg from "zdog";
  const { Anchor, Group, Shape, Cylinder, TAU } = pkg;

  /** @type {HTMLDivElement} */
  let widget;
  onMount(() => {
    const element = /** @type {HTMLCanvasElement} */ (
      widget.querySelector("canvas")
    );
    const context = /** @type { CanvasRenderingContext2D }*/ (
      element.getContext("2d")
    );
    const { width, height } = element;
    const zoom = 5;

    const stroke = 0.5;

    const colors = {
      text: "hsl(0 0% 100%)",
      background: "hsl(39 27% 54%)",
      wave: "hsl(28 100% 10%)",
      dreidel: ["hsl(28 61% 24%)", "hsl(28 58% 26%)", "hsl(28 44% 30%)"],
    };

    const root = new Anchor();

    const x = width / 2 / zoom;
    const y = height / 2 / zoom;

    new Shape({
      addTo: root,
      color: colors.background,
      stroke: 0,
      fill: true,
      path: [
        { x: 0, y },
        {
          bezier: [
            { x, y },
            { x, y },
            { x, y: 0 },
          ],
        },
        {
          bezier: [
            { x, y: y * -1 },
            { x, y: y * -1 },
            { x: 0, y: y * -1 },
          ],
        },
        {
          bezier: [
            { x: x * -1, y: y * -1 },
            { x: x * -1, y: y * -1 },
            { x: x * -1, y: 0 },
          ],
        },
        {
          bezier: [
            { x: x * -1, y },
            { x: x * -1, y },
            { x: 0, y },
          ],
        },
      ],
      translate: {
        z: -50,
      },
    });

    const tilt = new Anchor({
      addTo: root,
    });

    const origin = new Anchor({
      addTo: tilt,
    });

    const dreidel = new Anchor({
      addTo: origin,
    });

    new Cylinder({
      addTo: dreidel,
      color: colors.dreidel[0],
      stroke,
      diameter: 6,
      length: 12,
      translate: {
        y: (12 / 2) * -1,
      },
      rotate: {
        x: TAU / 4,
      },
    });

    new Shape({
      addTo: dreidel,
      color: colors.dreidel[2],
      stroke,
      fill: true,
      path: [
        { x: 10, z: -10 },
        { x: 10, z: 10 },
        { x: -10, z: 10 },
        { x: -10, z: -10 },
      ],
    });

    const face = new Shape({
      color: colors.dreidel[1],
      stroke,
      fill: true,
      path: [
        { x: -10, y: 0, z: 10 },
        { x: 10, y: 0, z: 10 },
        { x: 10, y: 15, z: 10 },
        {
          arc: [
            { x: 10, y: 20, z: 10 },
            { x: 0, y: 20, z: 10 },
          ],
        },
        {
          arc: [
            { x: -10, y: 20, z: 10 },
            { x: -10, y: 15, z: 10 },
          ],
        },
      ],
    });

    const bottom = new Shape({
      color: colors.dreidel[0],
      stroke,
      fill: true,
      path: [
        { x: 10, y: 15, z: 10 },
        {
          arc: [
            { x: 10, y: 20, z: 10 },
            { x: 0, y: 20, z: 10 },
          ],
        },
        {
          arc: [
            { x: -10, y: 20, z: 10 },
            { x: -10, y: 15, z: 10 },
          ],
        },
        {
          arc: [
            { x: -10, y: 30, z: 10 },
            { x: 0, y: 30, z: 0 },
          ],
        },
        {
          arc: [
            { x: 10, y: 30, z: 10 },
            { x: 10, y: 15, z: 10 },
          ],
        },
      ],
    });

    const z = new Shape({
      path: [
        { x: -3.5, y: -3.5 },
        { x: 3.5, y: -3.5 },
        { x: -3.5, y: 3.5 },
        { x: 3.5, y: 3.5 },
      ],
      closed: false,
    });

    const d = new Shape({
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
    });

    const o = new Shape({
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
    });

    const g = new Shape({
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
    });

    const letters = [z, d, o, g];

    const { color: colorFace } = face;
    const { color: colorBottom } = bottom;

    const [hFace, sFace, lFace] = colorFace.match(/\d+/g);
    const [hBottom, sBottom, lBottom] = colorBottom.match(/\d+/g);

    for (let i = 0; i < 4; i++) {
      const y = (TAU / 4) * i * -1;

      const group = new Group({
        addTo: dreidel,
        rotate: {
          y,
        },
      });

      const colorFace = `hsl(${hFace} ${sFace}% ${parseInt(lFace, 10) - i * 3}%)`;

      const colorBottom = `hsl(${hBottom} ${sBottom}% ${parseInt(lBottom, 10) - i * 3}%)`;

      face.copy({
        addTo: group,
        color: colorFace,
      });

      bottom.copy({
        addTo: group,
        color: colorBottom,
      });

      letters[i].copyGraph({
        addTo: group,
        color: colors.text,
        stroke: 2.5,
        translate: {
          y: 9,
          z: 10,
        },
      });
    }

    tilt.translate.y = -9;
    tilt.rotate.y = 0.4;
    origin.rotate.x = -0.1;
    origin.rotate.z = -0.3;
    dreidel.rotate.x = origin.rotate.x * -1;
    dreidel.rotate.z = origin.rotate.z * -1;

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

    root.updateGraph();
    render();

    /** @type number */
    let frame;
    let ticker = 0;
    const cycle = 400;
    let angle = 0;
    let angleSpin = TAU;

    const radius = 25;
    const points = Array(30)
      .fill("")
      .map((_, i, { length }) => {
        const a = (TAU / 4 / length) * i;
        const x = Math.cos(a) * radius;
        const z = Math.sin(a) * radius;
        return { x, z };
      });

    const paths = [
      ...Array(50).fill([{}]),
      ...Array(points.length)
        .fill("")
        .map((_, i) => points.slice(0, i + 1)),
      ...Array(points.length - 1)
        .fill("")
        .map((_, i, { length }) => [...points].reverse().slice(0, length - i)),
      ...Array(30).fill([{}]),
    ];

    const length = paths.length;

    const wave = new Anchor({
      addTo: origin,
      translate: {
        y: 10,
      },
    });

    new Shape({
      addTo: wave,
      color: colors.wave,
      closed: false,
    });

    const animate = () => {
      ticker++;
      if (ticker >= cycle) {
        origin.rotate.y =
          backInOut(ticker / cycle) * ((angle + angleSpin) % TAU);
        wave.rotate.y = origin.rotate.y;

        root.updateGraph();
        render();

        angle = origin.rotate.y;
        ticker = ticker % cycle;

        state = "wait";
        button.setAttribute("data-state", state);

        cancelAnimationFrame(frame);
      } else {
        const t = ticker / cycle;

        origin.rotate.y = angle + backInOut(t) * angleSpin;
        wave.rotate.y = origin.rotate.y;

        wave.removeChild(wave.children[0]);
        new Shape({
          addTo: wave,
          color: colors.wave,
          closed: false,
          path: paths[Math.floor(t * length)],
        });

        root.updateGraph();
        render();
        frame = requestAnimationFrame(animate);
      }
    };

    const randomAngle = () => (Math.floor(Math.random() * 4) * TAU) / 4;

    const handleSpin = () => {
      if (state !== "wait") return;

      state = "spin";
      button.setAttribute("data-state", state);

      angleSpin = angle + randomAngle() + TAU * 2;
      frame = requestAnimationFrame(animate);
    };

    let state = "wait";
    const button = /** @type {HTMLButtonElement} */ (
      widget.querySelector("button")
    );
    button.removeAttribute("disabled");
    button.setAttribute("data-state", state);

    button.addEventListener("click", handleSpin);

    return () => {
      button.removeEventListener("click", handleSpin);
      cancelAnimationFrame(frame);
    };
  });
</script>

<div bind:this={widget}>
  <canvas
    style="display: block; inline-size: 100%; max-inline-size: 400px;"
    width="400"
    height="400"
  ></canvas>
  <button disabled data-state="spin">Spin</button>
</div>

<style>
  div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }

  button {
    padding: 0.5rem 1rem;
    font: inherit;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    color: hsl(0 0% 100%);
    background: hsl(28 61% 24%);
    border-radius: 0.5rem;
    --offset: 4px;
    filter: drop-shadow(0 var(--offset, 4px) hsl(28 100% 10%));
    transition-property: translate, filter;
    transition-duration: 0.3s;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
  }

  button:disabled {
    opacity: 0.7;
  }

  button[data-state="spin"] {
    translate: 0 var(--offset, 4px);
    filter: drop-shadow(0 0 hsl(28 100% 10%));
  }

  button:focus {
    outline: 4px solid hsl(28 100% 10%);
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  button::before {
    content: "";
    position: absolute;
    inset-inline-start: 50%;
    inset-block-end: 100%;
    translate: -50% 0%;
    inline-size: 0.5rem;
    block-size: 0.5rem;
    background: inherit;
  }

  button::after {
    content: "";
    position: absolute;
    inset-inline-start: 50%;
    inset-block-start: 100%;
    translate: -50% 0%;
    inline-size: 1.5rem;
    block-size: 0.4rem;
    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
    background: inherit;
  }
</style>
