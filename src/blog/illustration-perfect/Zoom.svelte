<script>
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { backOut as easing } from "svelte/easing";
  import pkg from "zdog";
  const { Illustration, Anchor, Group, Shape, Rect, Ellipse, Hemisphere, TAU } =
    pkg;

  /** @type {HTMLCanvasElement} */
  let element;
  /** @type {any} */
  let illustration = null;

  let i = $state(0);
  const zooms = [1, 2, 5];
  const zoom = tweened(zooms[0], {
    easing,
    duration: 300,
  });

  onMount(() => {
    const { width, height } = element;

    const background = {
      colors: [
        "#008cb9",
        "#008fbe",
        "#0093c2",
        "#0096c6",
        "#0099ca",
        "#009cce",
        "#00a0d3",
        "#00a3d7",
        "#00a6db",
        "#00aadf",
        "#00ade4",
        "#00b0e8",
      ],
      width: width * 1.8,
      height: height * 1.8,
      translate: { y: 0 },
      copies:
        /** @type Array<{color: string, y: number, width: number, height: number}> */ ([]),
    };

    const colorHeight = background.height / background.colors.length;

    background.translate = {
      y: (background.height / 2) * -1,
    };

    background.copies = background.colors.map((color, i) => {
      const y = i * colorHeight;
      const width = background.width;
      const height = colorHeight;

      return {
        color,
        y,
        width,
        height,
      };
    });

    const scene = {
      balloon: {
        colors: ["#fe79ae", "#f8f7e8"],
        translate: {
          x: 10,
          y: -10,
        },
      },
      birds: {
        color: "#1f6a96",
        translate: {
          x: -55,
          y: -55,
        },
        copies: [
          { x: 15, y: -5, z: 5, scale: 0.4 },
          { x: 5, y: 10, z: -5, scale: 0.5 },
          { x: 0, y: -10, z: 5, scale: 0.7 },
          { x: -15, y: 0, z: -5, scale: 0.6 },
        ],
      },
    };

    illustration = new Illustration({
      element,
      zoom: $zoom,
    });

    const anchorBackground = new Anchor({
      addTo: illustration,
      translate: {
        y: background.translate.y,
        z: -200,
      },
    });

    const anchorBalloon = new Anchor({
      addTo: illustration,
    });

    const anchorBirds = new Anchor({
      addTo: illustration,
      translate: scene.birds.translate,
    });

    for (const { color, y, width, height } of background.copies) {
      new Rect({
        addTo: anchorBackground,
        color,
        fill: true,
        width: width,
        height: height,
        translate: {
          y,
        },
      });
    }

    const balloon = new Anchor({
      addTo: anchorBalloon,
      translate: scene.balloon.translate,
      rotate: {
        x: -0.1,
        z: -0.1,
      },
    });

    const load = new Group({
      addTo: balloon,
    });

    new Ellipse({
      addTo: load,
      color: "#54381d",
      stroke: 2,
      diameter: 12,
      translate: {
        y: 16.5,
      },
      rotate: {
        x: TAU / 4,
      },
    });

    for (const path of [
      [
        { x: 0, y: 0, z: 5 },
        { x: 0, y: 6, z: 8 },
      ],
      [
        { x: 6, y: 0, z: 0 },
        { x: 8, y: 6, z: 0 },
      ],
      [
        { x: 0, y: 0, z: -5 },
        { x: 0, y: 6, z: -8 },
      ],
      [
        { x: -6, y: 0, z: 0 },
        { x: -8, y: 6, z: 0 },
      ],
    ]) {
      new Shape({
        addTo: load,
        color: "#54381d",
        stroke: 1,
        path,
        translate: {
          y: 16.5,
        },
      });
    }

    new Hemisphere({
      addTo: load,
      color: "#7d5f36",
      stroke: 2,
      diameter: 16,
      translate: {
        y: 25,
      },
      rotate: {
        x: (TAU / 4) * -1,
      },
    });

    new Ellipse({
      addTo: load,
      color: "#54381d",
      stroke: 2,
      diameter: 18,
      translate: {
        y: 24,
      },
      rotate: {
        x: TAU / 4,
      },
    });

    const n = 10;
    const r = 16;
    const y = 16;

    const points = Array(n)
      .fill("")
      .map((_, i, { length }) => {
        const angle = (((360 / length) * i) / 180) * Math.PI;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        const color = scene.balloon.colors[i % 2];
        return {
          x,
          y,
          color,
        };
      });

    const shapes = points.map(({ x: x1, y: y1 }, i, arr) => {
      const { x: x2, y: y2, color } = arr[(i + 1) % arr.length];
      const paths = [
        [
          { x: 0, y, z: 0 },
          {
            arc: [
              { x: x1, y, z: y1 },
              { x: x1, y: 0, z: y1 },
            ],
          },
          { x: x2, y: 0, z: y2 },
          {
            arc: [
              { x: x2, y: y, z: y2 },
              { x: 0, y, z: 0 },
            ],
          },
        ],
        [
          { x: 0, y: -y, z: 0 },
          {
            arc: [
              { x: x1, y: -y, z: y1 },
              { x: x1, y: 0, z: y1 },
            ],
          },
          { x: x2, y: 0, z: y2 },
          {
            arc: [
              { x: x2, y: -y, z: y2 },
              { x: 0, y: -y, z: 0 },
            ],
          },
        ],
      ];

      return {
        color,
        paths,
      };
    });

    for (const { color, paths } of shapes) {
      for (const path of paths) {
        new Shape({
          addTo: balloon,
          color,
          stroke: 0,
          fill: true,
          path,
        });
      }
    }

    const bird = new Shape({
      color: scene.birds.color,
      stroke: 1,
      fill: true,
      path: [
        { x: 0, y: 0 },
        {
          bezier: [
            { x: 2, y: -4 },
            { x: 10, y: -8 },
            { x: 12, y: -8 },
          ],
        },
        {
          bezier: [
            { x: 10, y: -12 },
            { x: 2, y: -10 },
            { x: 0, y: -6 },
          ],
        },
        {
          bezier: [
            { x: -2, y: -10 },
            { x: -10, y: -12 },
            { x: -12, y: -8 },
          ],
        },
        {
          bezier: [
            { x: -10, y: -8 },
            { x: -2, y: -4 },
            { x: 0, y: 0 },
          ],
        },
      ],
    });

    for (const { x, y, z, scale } of scene.birds.copies) {
      bird.copy({
        addTo: anchorBirds,
        translate: {
          x,
          y,
          z,
        },
        scale,
      });
    }

    illustration.updateRenderGraph();

    /** @type number */
    let frame;
    let direction = -1;
    const angle = 0.5;

    const animate = () => {
      anchorBalloon.rotate.y = (anchorBalloon.rotate.y + 0.01) % TAU;
      anchorBirds.rotate.y =
        anchorBirds.rotate.y +
        (0.0005 + 0.0005 * (1 - Math.abs(anchorBirds.rotate.y) / angle)) *
          direction;

      if (anchorBirds.rotate.y >= angle) {
        anchorBirds.rotate.y = angle;
        direction *= -1;
      } else if (anchorBirds.rotate.y <= -angle) {
        anchorBirds.rotate.y = -angle;
        direction *= -1;
      }

      illustration.updateRenderGraph();

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
      observer.unobserve(element);
      cancelAnimationFrame(frame);
    };
  });

  /**
   * @param { number } zoom
   */
  const handleZoom = (zoom) => {
    if (illustration === null) return;

    illustration.zoom = zoom;
    illustration.updateRenderGraph();
  };

  $effect(() => {
    zoom.set(zooms[i]);
  });

  $effect(() => {
    handleZoom($zoom);
  });
</script>

<div>
  <button
    onclick={() => {
      i = (i + 1) % zooms.length;
    }}
  >
    Update <code>zoom</code> from <code>{zooms[i]}</code>
  </button>

  <canvas
    bind:this={element}
    style="display: block; inline-size: 100%; max-inline-size: 350px;"
    width="350"
    height="350"
  ></canvas>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    display: block;
    padding: 0.5rem 0.75rem;
    font-family: inherit;
    color: inherit;
    background: none;
    border: 0.2rem solid currentColor;
  }

  button:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  button > code {
    font-weight: 700;
  }
</style>
