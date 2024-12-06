<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Anchor, Shape, Cone, Ellipse, Box, TAU } = pkg;

  import { degreesToRadians } from "./utils.js";

  /** @type {{ x: number, y: number, z: number }}*/
  let { x = 0, y = 0, z = 0 } = $props();

  /** @type {HTMLCanvasElement} */
  let element;
  /** @type {HTMLFormElement} */
  let form;

  onMount(() => {
    const colors = [
      "hsl(0 0% 95%)",
      "hsl(0 0% 50%)",
      "hsl(0 0% 30%)",
      "hsl(0 0% 20%)",
    ];

    const root = new Anchor();

    new Shape({
      addTo: root,
      color: colors[0],
      stroke: 0,
      fill: true,
      path: [
        { x: -19, y: 0 },
        {
          bezier: [
            { x: -19, y: -16.5 },
            { x: -19, y: -16.5 },
            { x: 0, y: -16.5 },
          ],
        },
        {
          bezier: [
            { x: 19, y: -16.5 },
            { x: 19, y: -16.5 },
            { x: 19, y: 0 },
          ],
        },
        {
          bezier: [
            { x: 19, y: 16.5 },
            { x: 19, y: 16.5 },
            { x: 0, y: 16.5 },
          ],
        },
        {
          bezier: [
            { x: -19, y: 16.5 },
            { x: -19, y: 16.5 },
            { x: -19, y: 0 },
          ],
        },
      ],
      translate: {
        z: -50,
      },
    });

    const rotations = new Anchor({
      addTo: root,
    });

    const rotation = new Ellipse({
      color: colors[3],
      stroke: 0.3,
      diameter: 5,
      quarters: 2,
    });

    new Cone({
      addTo: rotation,
      color: colors[3],
      stroke: 0.3,
      diameter: 1,
      length: 0.8,
      translate: {
        y: (rotation.diameter / 2) * -1,
      },
      rotate: {
        x: TAU / 4,
        y: TAU / 4,
      },
    });

    const xAxis = new Anchor({
      addTo: rotations,
      translate: {
        x: -11,
      },
      rotate: {
        x: 0,
      },
    });

    const xLetter = new Shape({
      addTo: xAxis,
      color: colors[3],
      stroke: 0.5,
      path: [
        { x: -0.6, y: -0.6 },
        { x: 0.6, y: 0.6 },
      ],
      translate: {
        y: 5,
      },
    });

    xLetter.copy({
      rotate: {
        z: TAU / 4,
      },
    });

    rotation.copyGraph({
      addTo: xAxis,
      rotate: {
        x: (TAU / 4) * -1,
        y: TAU / 4,
      },
    });

    const yAxis = new Anchor({
      addTo: rotations,
      rotate: {
        x: 0,
        y: 0,
      },
    });

    const yLetter = new Shape({
      addTo: yAxis,
      color: colors[3],
      stroke: 0.5,
      path: [
        { x: -0.4, y: -0.8 },
        { x: -0.1, y: -0.1 },
      ],
      translate: {
        y: 5,
      },
    });

    new Shape({
      addTo: yLetter,
      color: colors[3],
      stroke: 0.4,
      closed: false,
      path: [
        { x: 0.4, y: -0.8 },
        { x: 0, y: 0 },
        {
          bezier: [
            { x: 0, y: 0.1 },
            { x: -0.25, y: 0.5 },
            { x: -0.4, y: 0.6 },
          ],
        },
      ],
    });

    rotation.copyGraph({
      addTo: yAxis,
      rotate: {
        x: (TAU / 4) * -1,
      },
    });

    const zAxis = new Anchor({
      addTo: rotations,
      translate: {
        x: 11,
      },
      rotate: {
        x: 0,
        y: 0,
        z: 0,
      },
    });

    new Shape({
      addTo: zAxis,
      color: colors[3],
      stroke: 0.5,
      closed: false,
      path: [
        { x: -0.6, y: -0.6 },
        { x: 0.6, y: -0.6 },
        { x: -0.6, y: 0.6 },
        { x: 0.6, y: 0.6 },
      ],
      translate: {
        y: 5,
      },
    });

    rotation.copyGraph({
      addTo: zAxis,
      rotate: {
        x: TAU / 2,
      },
    });

    const box = new Box({
      addTo: root,
      color: colors[3],
      topFace: colors[2],
      bottomFace: colors[2],
      rightFace: colors[1],
      leftFace: colors[1],
      stroke: 0,
      width: 10,
      height: 10,
      depth: 2,
    });

    const context = /** @type { CanvasRenderingContext2D }*/ (
      element.getContext("2d")
    );
    const { width, height } = element;
    const zoom = 11;

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

    rotations.translate.y = -7.75;
    box.translate.y = 7.25;

    const updateRotate = ({ x = 0, y = 0, z = 0 }) => {
      xAxis.rotate = { x };

      yAxis.rotate = {
        x,
        y,
      };

      zAxis.rotate = {
        x,
        y,
        z,
      };

      box.rotate = {
        x,
        y,
        z,
      };
    };

    updateRotate({
      x: degreesToRadians(x),
      y: degreesToRadians(y),
      z: degreesToRadians(z),
    });
    root.updateGraph();
    render();

    const handleInput = () => {
      const x = degreesToRadians(parseFloat(form.x.value));
      const y = degreesToRadians(parseFloat(form.y.value));
      const z = degreesToRadians(parseFloat(form.z.value));

      updateRotate({ x, y, z });

      root.updateGraph();
      render();
    };

    form.addEventListener("input", handleInput);

    return () => {
      form.removeEventListener("input", handleInput);
    };
  });
</script>

<div>
  <canvas
    bind:this={element}
    style="display: block; inline-size: 100%; max-inline-size: 420px;"
    width="420"
    height="370"
  ></canvas>
  <form
    onsubmit={(event) => {
      event.preventDefault();
    }}
    bind:this={form}
  >
    <p>Rotate between <code>0</code> and <code>360</code> degrees</p>
    <label>
      <span>x</span>
      <input id="x" type="range" min="0" max="360" value={x} step="4" />
    </label>
    <label>
      <span>y</span>
      <input id="y" type="range" min="0" max="360" value={y} step="4" />
    </label>
    <label>
      <span>z</span>
      <input id="z" type="range" min="0" max="360" value={z} step="4" />
    </label>
  </form>
</div>

<style>
  div {
    display: block;
    max-inline-size: 420px;
    margin-inline: auto;
  }

  div > * + * {
    margin-block-start: 0.75rem;
  }

  form > * + * {
    margin-block-start: 0.5rem;
  }

  label {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }

  label span {
    font-weight: 700;
  }

  label > input {
    flex-grow: 1;
  }

  code {
    font-size: inherit;
    font-weight: 700;
    background: none;
  }
</style>
