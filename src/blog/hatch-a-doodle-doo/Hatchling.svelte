<script>
  import { onMount } from "svelte";
  import { circOut, backInOut as easing } from "svelte/easing";
  import pkg from "zdog";
  const { Anchor, Shape, Hemisphere } = pkg;

  /** @type {HTMLDivElement} */
  let widget;
  onMount(() => {
    const PI = Math.PI;
    const TAU = PI * 2;

    const colors = {
      body: "hsl(39 97% 65%)",
      wings: "hsl(35 96% 60%)",
      eyes: "hsl(221 54% 22%)",
      details: "hsl(22 89% 52%)",
    };

    const egg = {
      colors: ["hsl(29 83% 82%)", "hsl(30 85% 87%)"],
      radius: 10,
      height: 15,
      stroke: 3,
      particles: [20, 10],
    };

    const root = new Anchor();

    new Hemisphere({
      addTo: root,
      color: egg.colors[0],
      backface: egg.colors[1],
      diameter: egg.radius * 2,
      stroke: egg.stroke,
      rotate: {
        x: (TAU / 4) * -1,
      },
    });

    const base = new Anchor({ addTo: root });

    const body = new Shape({
      addTo: base,
      color: colors.body,
      stroke: 11,
      translate: {
        y: -6,
      },
    });

    const appendages = new Anchor({
      addTo: body,
    });

    const wings = new Anchor({
      addTo: body,
    });

    const wing = new Shape({
      color: colors.wings,
      stroke: 2,
      fill: true,
      path: [
        { x: 0, y: 0, z: 0 },
        { x: 1, y: -0.75, z: -1 },
        {
          arc: [
            { x: 1, y: 2, z: 0 },
            { x: -0.75, y: 2.5, z: 0 },
          ],
        },
        {
          bezier: [
            { x: -0.5, y: 1, z: 0 },
            { x: 0, y: 1, z: 0 },
            { x: 0, y: 0, z: 2 },
          ],
        },
      ],
    });

    for (const { translate, scale } of [
      {
        translate: 5,
        scale: 1,
      },
      {
        translate: -5,
        scale: -1,
      },
    ]) {
      wing.copy({
        addTo: wings,
        translate: {
          x: translate,
          y: 0.5,
          z: -0.5,
        },
        scale: {
          x: scale,
        },
      });
    }

    new Shape({
      addTo: body,
      color: colors.details,
      fill: true,
      stroke: 1.5,
      path: [
        { y: 0, z: -1 },
        {
          bezier: [
            { y: -1, z: 0 },
            { y: -1, z: 0 },
            { y: 0, z: 1 },
          ],
        },
      ],
      translate: {
        y: -5,
      },
    });

    const eye = new Shape({
      color: colors.eyes,
      stroke: 1.25,
    });

    for (const x of [1.5, -1.5]) {
      eye.copy({
        addTo: appendages,
        translate: {
          x,
          y: -2,
          z: 4,
        },
      });
    }

    new Shape({
      addTo: appendages,
      color: colors.details,
      fill: true,
      stroke: 0.5,
      path: [
        { x: 1, y: 0, z: 0 },
        { x: 0, y: -1, z: 0 },
        { x: -1, y: 0, z: 0 },
        { x: 0, y: 0.5, z: 0.5 },
      ],
      translate: {
        z: 5,
      },
    });

    const leg = new Shape({
      stroke: 1,
      color: colors.details,
      path: [{ y: 0 }, { y: -0.5 }],
    });

    const claw = new Shape({
      stroke: 1,
      color: colors.details,
      path: [{ z: 0 }, { z: 2.5 }],
    });

    for (const y of [-0.7, 0, 0.7]) {
      claw.copy({
        addTo: leg,
        rotate: {
          y,
        },
      });
    }

    for (const { x, y } of [
      { x: 1.5, y: -0.3 },
      { x: -1.5, y: 0.3 },
    ]) {
      leg.copyGraph({
        addTo: appendages,
        translate: {
          x,
          y: 6,
        },
        rotate: {
          y,
        },
      });
    }

    const fauxEgg = new Anchor({
      addTo: root,
    });

    const { height: offset, radius, stroke, particles: copies } = egg;

    const quarters = new Anchor({
      addTo: fauxEgg,
      translate: {
        y: offset * -1,
      },
    });

    const quarter = new Shape({
      color: egg.colors[0],
      stroke,
      fill: true,
      path: [
        { x: 0, y: 0 },
        {
          arc: [
            { x: radius, y: 0 },
            { x: radius, y: offset },
          ],
        },
        {
          arc: [
            { x: radius, y: offset, z: radius },
            { x: 0, y: offset, z: radius },
          ],
        },
        {
          arc: [
            { x: 0, y: 0, z: radius },
            { x: 0, y: 0, z: 0 },
          ],
        },
      ],
    });

    for (const y of [0, TAU / 4]) {
      quarter.copy({
        addTo: quarters,
        rotate: {
          y,
        },
      });
    }

    const particles = new Anchor({
      addTo: fauxEgg,
      translate: {
        y: offset * -1,
      },
    });

    const particle = new Shape({
      color: egg.colors[0],
      stroke,
    });

    const yi = offset / copies[1];
    for (let i = 0; i <= copies[0]; i++) {
      const a = (PI / copies[0]) * i;
      const x1 = Math.cos(a) * radius;
      const z1 = Math.sin(a) * radius;
      const xi = x1 / copies[1];
      const zi = z1 / copies[1];
      for (let j = 0; j <= copies[1]; j++) {
        const x = circOut((xi * j) / x1) * x1;
        const z = circOut((zi * j) / z1) * z1;
        const y = yi * j;

        particle.copy({
          addTo: particles,
          translate: {
            x,
            y,
            z,
          },
        });
      }
    }

    const canvas = /** @type {HTMLCanvasElement} */ (
      widget.querySelector("canvas")
    );
    const context = /** @type { CanvasRenderingContext2D }*/ (
      canvas.getContext("2d")
    );
    const { width, height } = canvas;
    const zoom = 8;

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

    body.rotate.y = -0.2;
    root.rotate.x = -0.3;
    root.translate.y = offset / 2;

    root.updateGraph();
    render();

    const cycles = [20, 30];
    const delay = 1500;

    /** @type number */
    let frame;
    /** @type number */
    let timeout;
    let state = "wait";
    let shakes = 3;
    let ticker = 0;
    let [cycle] = cycles;

    const shake = () => {
      ticker++;
      const t = ticker / cycle;

      root.rotate.z = Math.sin(t * TAU) * 0.1;

      root.updateGraph();
      render();

      if (ticker >= cycle) {
        ticker = 0;
        cancelAnimationFrame(frame);
        state = "wait";
        shakes--;
      } else {
        frame = requestAnimationFrame(shake);
      }
    };

    const hatch = () => {
      ticker++;
      const t = ticker / cycle;
      const c = circOut(t);

      fauxEgg.scale = 1 + c * 0.5;
      fauxEgg.translate.y = c * 5 * -1;
      for (const particle of particles.children) {
        particle.stroke = (1 - c) * stroke;
      }

      base.translate.y = Math.sin(t * PI) * 5 * -1;

      root.updateGraph();
      render();

      if (ticker >= cycle) {
        ticker = 0;
        cycle = cycles[1];
        frame = requestAnimationFrame(celebrate);
        state = "celebrate";
      } else {
        frame = requestAnimationFrame(hatch);
      }
    };

    const celebrate = () => {
      ticker++;
      const l = Math.sin(easing(ticker / cycle) * PI);

      base.translate.y = l * 2 * -1;
      appendages.translate.y = l * 0.6 * -1;
      for (const wing of wings.children) {
        wing.rotate.x = l * 0.8;
      }

      root.updateGraph();
      render();

      if (ticker >= cycle) {
        ticker = 0;
        cancelAnimationFrame(frame);
        timeout = setTimeout(() => {
          frame = requestAnimationFrame(celebrate);
        }, delay);
      } else {
        frame = requestAnimationFrame(celebrate);
      }
    };

    const handleClick = () => {
      if (state !== "wait") return;

      if (shakes === 0) {
        button.setAttribute("disabled", "");
        state = "hatch";

        for (const quarter of quarters.children) {
          quarter.visible = false;
        }
        frame = requestAnimationFrame(hatch);
      } else {
        state = "shake";
        frame = requestAnimationFrame(shake);
      }
    };

    const button = /** @type { HTMLButtonElement } */ (
      widget.querySelector("button")
    );
    button.removeAttribute("disabled");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  });
</script>

<div bind:this={widget}>
  <canvas
    style="display: block; inline-size: 100%; max-inline-size: 300px;"
    width="300"
    height="320"
  ></canvas>
  <button disabled>Shake</button>
</div>

<style>
  div {
    --_color-light: hsl(120 8% 97%);
    --_color-dark: hsl(224 54% 23%);
    color: var(--_color-dark, hsl(0 0% 20%));
    background: var(--_color-light, hsl(0 0% 95%));
    max-inline-size: max-content;
    margin-inline: auto;
    padding: 1rem;
    border-radius: 1e5px 1e5px 0.5e5px 0.5e5px;
    text-align: center;
  }

  div > * + * {
    margin-block-start: 0.5rem;
  }

  button {
    color: var(--_color-light, hsl(0 0% 95%));
    background: var(--_color-dark, hsl(0 0% 20%));
    font-family: inherit;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    transition: scale 0.1s ease-in-out;
  }

  button:focus {
    outline: 2px solid var(--_color-dark, hsl(0 0% 20%));
    outline-offset: 2px;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  button:active {
    scale: 0.9;
  }

  button:disabled {
    transition: scale 0.09s;
    scale: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    button:hover {
      animation: shake 0.1s 2 ease-in-out;
    }
  }

  @keyframes shake {
    25% {
      translate: 2px 0;
    }
    75% {
      translate: -2px 0;
    }
  }
</style>
