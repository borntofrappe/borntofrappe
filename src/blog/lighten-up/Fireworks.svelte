<script>
  import { onMount } from "svelte";
  import pkg from "zdog";
  const { Anchor, Shape } = pkg;

  /** @type {HTMLCanvasElement} */
  let element;
  onMount(() => {
    const context = /** @type { CanvasRenderingContext2D }*/ (
      element.getContext("2d")
    );
    const { width, height } = element;
    const zoom = 5;

    const w = width / zoom;
    const h = height / zoom;
    const x = w / 2;
    const y = h / 2;

    const columns = 10;
    const rows = 10;
    const gx = w / columns;
    const gy = h / rows;

    const radius = w / 4;
    const number = 16;

    const PI = Math.PI;
    const TAU = PI * 2;
    const points = Array(number)
      .fill("")
      .map((_, i, { length }) => {
        const theta = PI * -1 + (TAU / length) * i;
        const points = Array(number)
          .fill("")
          .map((_, j, { length }) => {
            const a = PI * -1 + (TAU / length) * j;
            const x = radius * Math.sin(theta) * Math.cos(a);
            const y = radius * Math.sin(theta) * Math.sin(a);
            const z = radius * Math.cos(theta);

            return { x, y, z };
          });
        return points;
      })
      .flat();

    const colors = {
      sky: "hsl(211 41% 17%)",
      lights: "hsl(240 2% 92%)",
      firework: ["hsl(42 92% 67%)", "hsl(174 93% 77%)", "hsl(327 85% 79%)"],
    };

    const strokes = [0.4, 0.8];

    const root = new Anchor();

    const background = new Shape({
      addTo: root,
      color: colors.sky,
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
        z: radius * -1,
      },
    });

    const lights = new Anchor({
      addTo: root,
      translate: {
        z: radius * 2,
      },
      scale: 0.8,
    });

    const planets = new Anchor({
      addTo: lights,
    });

    const stars = new Anchor({
      addTo: lights,
    });

    const planet = new Shape({
      color: colors.lights,
    });

    const star = new Shape({
      color: colors.lights,
      stroke: 0,
      fill: true,
      path: [
        { x: 0, y: -1 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: -1, y: 0 },
      ],
    });

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if (Math.random() > 0.3) {
          planet.copy({
            addTo: planets,
            stroke: Math.random(),
            translate: {
              x: x * -1 + gx / 2 + gx * i + Math.random() * gx * 2 - gx,
              y: y * -1 + gy / 2 + gy * j + Math.random() * gy * 2 - gy,
            },
          });
        } else if (Math.random() > 0.5) {
          star.copy({
            addTo: stars,
            scale: Math.random(),
            translate: {
              x: x * -1 + gx / 2 + gx * i + Math.random() * gx * 2 - gx,
              y: y * -1 + gy / 2 + gy * j + Math.random() * gy * 2 - gy,
            },
          });
        }
      }
    }

    const firework = new Anchor({ addTo: root });
    const particles = new Anchor({ addTo: firework });
    const trails = new Anchor({ addTo: particles });

    for (let i = 0; i < points.length; i++) {
      const { x, y, z } = points[i];
      if (i % 3 === 0) {
        new Shape({
          addTo: trails,
          color: colors.firework[0],
          stroke: strokes[0],
          path: [
            {
              x: x * 0.7,
              y: y * 0.7,
              z: z * 0.7,
            },
            {
              x: x * 0.95,
              y: y * 0.95,
              z: z * 0.95,
            },
          ],
        });
      }

      new Shape({
        addTo: particles,
        color: colors.firework[0],
        stroke: strokes[1],
        translate: {
          x: x,
          y: y,
          z: z,
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

    firework.rotate.x = 0.8 + Math.random() * 0.4;
    firework.rotate.y = Math.random() * TAU;

    root.updateGraph();
    render();

    /**
     * @param {number} x
     */
    const easeOutQuint = (x) => 1 - Math.pow(1 - x, 5);

    const scales = [
      ...Array(4).fill(1),
      ...Array(40)
        .fill("")
        .map(
          (_, i, { length }) => 1 + Math.sin((Math.PI / length) * i) * 0.015
        ),
    ];

    const rx = (x - radius) * 0.5;
    const ry = (y - radius) * 0.5;
    const rz = radius * 2;

    let dx = 1;
    let dy = 1;

    background.translate.z = radius * -1;
    particles.scale = 0;
    trails.scale = 0;

    /** @type number */
    let frame;
    let ticker = 0;
    const cycle = 200;

    const animate = () => {
      ticker += 1;

      if (ticker >= cycle) {
        const color =
          colors.firework[Math.floor(Math.random() * colors.firework.length)];
        for (const child of [
          ...particles.children.slice(1),
          ...trails.children,
        ]) {
          child.color = color;
        }

        dx = Math.random() > 0.5 ? 1 : -1;
        dy = Math.random() > 0.5 ? 1 : -1;

        firework.translate.x = Math.floor(Math.random() * (rx * 2)) - rx;
        firework.translate.y = Math.floor(Math.random() * (ry * 2)) - ry;

        firework.scale = 0.7 + Math.floor(Math.random() * 4) / 10;

        firework.rotate.x = 0.8 + Math.random() * 0.4;
        firework.rotate.y = Math.random() * TAU;

        ticker = ticker % cycle;
      }

      const ease = easeOutQuint(ticker / cycle);

      firework.rotate.x = (firework.rotate.x + 0.001 * dx) % TAU;
      firework.rotate.y = (firework.rotate.y + 0.001 * dy) % TAU;
      particles.scale = ease;
      trails.scale = ease;

      background.translate.z = rz * -1 + (rz + radius) ** ease;

      stars.scale = scales[Math.floor(ease * scales.length)];

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
    observer.observe(element);

    return () => {
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
