<script>
  import { onMount } from "svelte";
  import { backOut } from "svelte/easing";

  import pkg from "zdog";
  const { Anchor, Shape, Ellipse } = pkg;

  /** @type {HTMLDivElement} */
  let widget;
  onMount(() => {
    const stroke = 0.05;

    const colors = {
      joystick: "hsl(210 46% 85%)",
      "d-pad": "hsl(180 0% 52%)",
      buttons: [
        "hsl(38 90% 49%)",
        "hsl(12 100% 49%)",
        "hsl(78 95% 43%)",
        "hsl(200 84% 53%)",
      ],
      "rest-pad": "hsl(210 31% 79%)",
    };

    const root = new Anchor();

    const joystick = new Shape({
      addTo: root,
      color: colors.joystick,
      stroke,
      fill: true,
      path: [
        { x: 0, y: 0 },
        { x: -6.5, y: 0 },
        {
          arc: [
            { x: -11.5, y: 0 },
            { x: -11.5, y: 5 },
          ],
        },
        { x: -11.5, y: 12 },
        {
          arc: [
            { x: -11.5, y: 17 },
            { x: -6.5, y: 17 },
          ],
        },
        {
          arc: [
            { x: -1.5, y: 17 },
            { x: -1.5, y: 12 },
          ],
        },
        { x: 1.5, y: 12 },
        {
          arc: [
            { x: 1.5, y: 17 },
            { x: 6.5, y: 17 },
          ],
        },
        {
          arc: [
            { x: 11.5, y: 17 },
            { x: 11.5, y: 12 },
          ],
        },
        { x: 11.5, y: 5 },
        {
          arc: [
            { x: 11.5, y: 0 },
            { x: 6.5, y: 0 },
          ],
        },
      ],
    });

    const details = new Anchor({
      addTo: root,
    });

    const dPad = new Shape({
      addTo: details,
      color: colors["d-pad"],
      stroke,
      fill: true,
      path: [
        { x: 0, y: -1 },
        {
          arc: [
            { x: -1, y: -1 },
            { x: -1, y: 0 },
          ],
        },
        { x: -1, y: 1 },
        { x: -2, y: 1 },
        {
          arc: [
            { x: -3, y: 1 },
            { x: -3, y: 2 },
          ],
        },
        {
          arc: [
            { x: -3, y: 3 },
            { x: -2, y: 3 },
          ],
        },
        { x: -1, y: 3 },
        { x: -1, y: 4 },
        {
          arc: [
            { x: -1, y: 5 },
            { x: 0, y: 5 },
          ],
        },
        {
          arc: [
            { x: 1, y: 5 },
            { x: 1, y: 4 },
          ],
        },
        { x: 1, y: 3 },
        { x: 2, y: 3 },
        {
          arc: [
            { x: 3, y: 3 },
            { x: 3, y: 2 },
          ],
        },
        {
          arc: [
            { x: 3, y: 1 },
            { x: 2, y: 1 },
          ],
        },
        { x: 1, y: 1 },
        { x: 1, y: 0 },
        {
          arc: [
            { x: 1, y: -1 },
            { x: 0, y: -1 },
          ],
        },
      ],
      translate: {
        x: -6,
        y: 4,
      },
    });

    const button = new Shape({
      stroke,
      fill: true,
      path: [
        { x: 0, y: -1 },
        {
          arc: [
            { x: 1, y: -1 },
            { x: 1, y: 0 },
          ],
        },
        {
          arc: [
            { x: 1, y: 1 },

            { x: 0, y: 1 },
          ],
        },
        {
          arc: [
            { x: -1, y: 1 },

            { x: -1, y: 0 },
          ],
        },
        {
          arc: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
          ],
        },
      ],
    });

    const buttons = new Anchor({
      addTo: details,
      translate: {
        x: 6,
        y: 4,
      },
    });

    [
      [0, 0],
      [2, 2],
      [0, 4],
      [-2, 2],
    ].forEach(([x, y], i) => {
      button.copy({
        addTo: buttons,
        color: colors.buttons[i],
        translate: {
          x,
          y,
        },
      });
    });

    const restPad = new Ellipse({
      color: colors["rest-pad"],
      stroke,
      fill: true,
      diameter: 4,
    });

    [-1, 1].forEach((direction) => {
      restPad.copy({
        addTo: joystick,
        translate: {
          x: 6.5 * direction,
          y: 13,
        },
      });
    });

    details.translate.y = 1.5;
    details.translate.z = 3.5;

    for (const { shape, depth } of [
      {
        shape: joystick,
        depth: 3,
      },
      { shape: dPad, depth: 1 },
      ...buttons.children.map((/** @type {any} */ button) => ({
        shape: button,
        depth: 1,
      })),
    ]) {
      const { color, fill, stroke, path } = shape;
      const z = depth * -1;
      const [h, s, l] = color.match(/\d+/g);
      const shadow = `hsl(${h} ${s}% ${l * 0.7}%)`;

      for (let i = 0; i < path.length; i++) {
        const p1 = path[i];
        const p2 = path[(i + 1) % path.length];

        const p1Arc = Object.hasOwn(p1, "arc");
        const p2Arc = Object.hasOwn(p2, "arc");

        let pathShadow = [];

        if (p2Arc) {
          const { x: x1, y: y1 } = p1Arc ? p1.arc[1] : p1;
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
          const { x: x1, y: y1 } = p1Arc ? p1.arc[1] : p1;
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
          color: shadow,
          stroke,
          fill,
          path: pathShadow,
        });
      }
    }

    const element = /** @type {HTMLCanvasElement} */ (
      widget.querySelector("canvas")
    );
    const context = /** @type { CanvasRenderingContext2D }*/ (
      element.getContext("2d")
    );
    const { width, height } = element;
    const zoom = 13;

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

    root.translate.y = -6;
    root.rotate.x = 0.7;

    root.updateGraph();
    render();

    const input = /** @type HTMLInputElement */ (
      widget.querySelector('input[type="range"]')
    );
    const angle = 0.3;
    let state = "wait";
    /** @type number */
    let frame;
    let offset = 0;
    let ticker = 0;
    let cycle = 40;
    /**
     * @param { number } offset
     */
    const getCycle = (offset) => 10 + 30 * Math.abs(offset);

    /**
     * @param { number } value
     */
    const update = (value) => {
      root.rotate.y = angle * value;
      root.rotate.z = root.rotate.y * -1;
      root.rotate.x = 0.7 + Math.abs(value) * 0.1;

      root.updateGraph();
      render();
    };

    const reset = () => {
      ticker++;
      if (ticker >= cycle) {
        ticker = 0;
        input.value = "0";
        update(0);

        state = "wait";
        cancelAnimationFrame(frame);
      } else {
        const value = (1 - backOut(ticker / cycle)) * offset;
        input.value = value.toString();
        update(value);

        frame = requestAnimationFrame(reset);
      }
    };

    function handleInput() {
      if (state === "reset") {
        state = "wait";
        cancelAnimationFrame(frame);

        ticker = 0;
      }

      const value = parseFloat(input.value);
      update(value);
    }

    function handleReset() {
      if (state === "reset") return;

      const value = parseFloat(input.value);

      if (value === 0) return;

      offset = value;
      cycle = getCycle(offset);

      state = "reset";
      frame = requestAnimationFrame(reset);
    }

    input.removeAttribute("disabled");
    input.addEventListener("input", handleInput);
    input.addEventListener("pointerup", handleReset);
    input.addEventListener("blur", handleReset);

    return () => {
      input.removeEventListener("input", handleInput);
      input.removeEventListener("pointerup", handleReset);
      input.removeEventListener("blur", handleReset);

      cancelAnimationFrame(frame);
    };
  });
</script>

<div bind:this={widget}>
  <canvas
    style="display: block; inline-size: 100%; max-inline-size: 400px;"
    width="400"
    height="300"
  >
  </canvas>
  <label>
    <span>Wiggle joystick</span>
    <input disabled type="range" value="0" min="-1" max="1" step="0.01" />
  </label>
</div>

<style>
  div {
    display: inline-block;
  }

  label,
  input {
    display: block;
  }

  label > input {
    margin-block-start: 0.5rem;
  }

  input {
    accent-color: hsl(180 0% 52%);
    inline-size: 100%;
  }
</style>
