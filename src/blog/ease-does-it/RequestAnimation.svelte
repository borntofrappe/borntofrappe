<script>
  import { onMount } from "svelte";
  import { backInOut } from "svelte/easing";
  import pkg from "zdog";
  const { Anchor, Shape, Ellipse, easeInOut, TAU } = pkg;

  /** @type {HTMLDivElement} */
  let div;
  onMount(() => {
    const colors = ["hsl(210 10% 23%)", "hsl(210 9% 31%)", "hsl(210 17% 98%)"];

    const root = new Anchor();

    new Shape({
      addTo: root,
      color: colors[0],
      stroke: 0,
      fill: true,
      path: [
        { x: -40, y: 0 },
        {
          bezier: [
            { x: -40, y: -40 },
            { x: -40, y: -40 },
            { x: 0, y: -40 },
          ],
        },
        {
          bezier: [
            { x: 40, y: -40 },
            { x: 40, y: -40 },
            { x: 40, y: 0 },
          ],
        },
        {
          bezier: [
            { x: 40, y: 40 },
            { x: 40, y: 40 },
            { x: 0, y: 40 },
          ],
        },
        {
          bezier: [
            { x: -40, y: 40 },
            { x: -40, y: 40 },
            { x: -40, y: 0 },
          ],
        },
      ],
      translate: {
        z: -20,
      },
    });

    const linear = new Anchor({ addTo: root });
    const ease = new Anchor({ addTo: root });
    const easeThree = new Anchor({ addTo: root });
    const easeBack = new Anchor({ addTo: root });

    const dot = new Shape({
      stroke: 6,
    });

    const letters = {
      l: new Shape({
        closed: false,
        path: [
          { x: -0.75, y: -1.25 },
          { x: -0.75, y: 1.25 },
          { x: 0.75, y: 1.25 },
        ],
      }),
      "2": new Shape({
        closed: false,
        path: [
          { x: -0.75, y: -0.625 },
          {
            arc: [
              { x: -0.75, y: -1.25 },
              { x: -0.125, y: -1.25 },
            ],
          },
          { x: 0.125, y: -1.25 },
          {
            arc: [
              { x: 0.75, y: -1.25 },
              { x: 0.75, y: -0.625 },
            ],
          },
          { x: -0.75, y: 1.25 },
          { x: 0.75, y: 1.25 },
        ],
      }),
      "3": new Shape({
        closed: false,
        path: [
          { x: -0.625, y: -1.25 },
          { x: 0.125, y: -1.25 },
          {
            arc: [
              { x: 0.75, y: -1.25 },
              { x: 0.75, y: -0.625 },
            ],
          },
          {
            arc: [
              { x: 0.75, y: 0 },
              { x: 0.125, y: 0 },
            ],
          },
          { x: -0.125, y: 0 },
          { x: 0.125, y: 0 },
          {
            arc: [
              { x: 0.75, y: 0 },
              { x: 0.75, y: 0.625 },
            ],
          },
          {
            arc: [
              { x: 0.75, y: 1.25 },
              { x: 0.125, y: 1.25 },
            ],
          },
          { x: -0.625, y: 1.25 },
        ],
      }),
      b: new Shape({
        path: [
          { x: -0.75, y: -1.25 },
          { x: 0.125, y: -1.25 },
          {
            arc: [
              { x: 0.75, y: -1.25 },
              { x: 0.75, y: -0.625 },
            ],
          },
          {
            arc: [
              { x: 0.75, y: 0 },
              { x: 0.125, y: 0 },
            ],
          },
          {
            arc: [
              { x: 0.75, y: 0 },
              { x: 0.75, y: 0.625 },
            ],
          },
          {
            arc: [
              { x: 0.75, y: 1.25 },
              { x: 0.125, y: 1.25 },
            ],
          },
          { x: -0.75, y: 1.25 },
        ],
      }),
    };

    const centers = [
      {
        anchor: linear,
        x: 5,
        letter: letters["l"],
      },
      {
        anchor: ease,
        x: 14,
        letter: letters["2"],
      },
      {
        anchor: easeThree,
        x: 23,
        letter: letters["3"],
      },
      {
        anchor: easeBack,
        x: 32,
        letter: letters["b"],
      },
    ];

    for (const { anchor, x, letter } of centers) {
      const shape = dot.copy({
        addTo: anchor,
        color: colors[2],
        translate: {
          x,
        },
      });

      letter.copy({
        addTo: shape,
        color: colors[0],
        stroke: 0.8,
        translate: {
          z: 5,
        },
      });
    }

    const orbits = new Anchor({
      addTo: root,
      translate: {
        z: -10,
      },
    });

    for (const { x } of centers) {
      const diameter = x * 2;

      new Ellipse({
        addTo: orbits,
        color: colors[1],
        stroke: 0.2,
        diameter,
      });
    }

    const element = /** @type {HTMLCanvasElement} */ (
      div.querySelector("canvas")
    );
    const context = /** @type { CanvasRenderingContext2D }*/ (
      element.getContext("2d")
    );
    const { width, height } = element;
    const zoom = 5;

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

    let state = "wait";
    const button = /** @type { HTMLButtonElement }*/ (
      div.querySelector("button")
    );

    /** @type number */
    let frame;
    let ticker = 0;
    let cycle = 300;
    const increment = (1 / cycle) * TAU;

    const animate = () => {
      ticker = (ticker + 1) % cycle;

      linear.rotate.z = (linear.rotate.z + increment) % TAU;
      ease.rotate.z = easeInOut(ticker / cycle) * TAU;
      easeThree.rotate.z = easeInOut(ticker / cycle, 3) * TAU;
      easeBack.rotate.z = backInOut(ticker / cycle) * TAU;

      for (const { anchor } of centers) {
        anchor.children[0].rotate.z = anchor.rotate.z * -1;
      }

      root.updateGraph();
      render();

      frame = requestAnimationFrame(animate);
    };

    const play = () => {
      frame = requestAnimationFrame(animate);

      state = "animate";

      button.setAttribute("aria-pressed", "true");
      button.querySelector("use")?.setAttribute("href", "#icon-pause");

      observer.observe(div);
    };

    const pause = () => {
      cancelAnimationFrame(frame);

      state = "wait";

      button.setAttribute("aria-pressed", "false");
      button.querySelector("use")?.setAttribute("href", "#icon-play");

      observer.unobserve(div);
    };

    /**
     * @param { IntersectionObserverEntry[] } entries
     */
    const observation = (entries) => {
      if (!entries[0].isIntersecting && state === "animate") {
        pause();
      }
    };

    const observer = new IntersectionObserver(observation);

    const toggleAnimation = () => {
      if (state === "wait") {
        play();
      } else if (state === "animate") {
        pause();
      }
    };

    button.removeAttribute("disabled");
    button.addEventListener("click", toggleAnimation);

    return () => {
      cancelAnimationFrame(frame);
      button.removeEventListener("click", toggleAnimation);
      observer.unobserve(div);
    };
  });
</script>

<div bind:this={div}>
  <svg
    aria-hidden="true"
    style="position: absolute; inline-size: 0; block-size: 0;"
  >
    <symbol id="icon-play" viewBox="-10 -10 20 20">
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M -6.5 -8 7 0 -6.5 8 Z"
      />
    </symbol>
    <symbol id="icon-pause" viewBox="-10 -10 20 20">
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M -6.5 -8 -4 -8 -4 8 -6.5 8 Z M 6.5 -8 4 -8 4 8 6.5 8 Z"
      />
    </symbol>
  </svg>

  <canvas
    style="display: block; inline-size: 100%; max-inline-size: 400px;"
    width="400"
    height="400"
  ></canvas>
  <button disabled aria-pressed="false" aria-label="Toggle animation">
    <svg viewBox="0 0 1 1">
      <use href="#icon-play" />
    </svg>
  </button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    --_color: hsl(210 17% 95%);
    --_background: hsl(210 10% 23%);
    inline-size: 2.8rem;
    block-size: 2.8rem;
    padding: 0.9rem;
    color: var(--_color, hsl(210 17% 95%));
    background: var(--_background, hsl(210 10% 23%));
    border: none;
    border-radius: 1e5px;
  }

  button:disabled {
    opacity: 0.7;
  }

  button:focus {
    outline: 2px solid var(--_background, hsl(210 10% 23%));
    outline-offset: 2px;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  button > svg {
    display: block;
    inline-size: 100%;
    block-size: 100%;
  }
</style>
