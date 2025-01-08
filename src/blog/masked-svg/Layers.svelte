<script>
  import { onMount } from "svelte";

  import pkg from "zdog";
  const { Anchor, Ellipse, Rect, easeInOut } = pkg;

  /** @type HTMLDivElement */
  let element;
  onMount(() => {
    const width = 96;
    const height = 91;
    const padding = 0;
    const stroke = 0;
    const depth = 20;

    const black = "hsl(0 0% 0%)";
    const white = "hsl(0 0% 100%)";

    const root = new Anchor({
      rotate: {
        y: Math.PI / 1.9,
        x: -0.8,
      },
      translate: {
        x: padding - width / 2,
        y: padding - height / 2,
      },
    });

    new Ellipse({
      addTo: root,
      stroke,
      diameter: 2 * 27.75,
      fill: true,
      color: white,
      translate: {
        x: 68.25,
        y: 27.75,
        z: depth * -6,
      },
    });

    new Ellipse({
      addTo: root,
      stroke,
      diameter: 2 * 7.75,
      fill: true,
      color: black,
      translate: {
        x: 68.25,
        y: 27.75,
        z: depth * -5,
      },
    });

    new Ellipse({
      addTo: root,
      stroke,
      diameter: 2 * 27.75,
      fill: true,
      color: white,
      translate: {
        x: 68.25,
        y: 63.25,
        z: depth * -4,
      },
    });

    new Ellipse({
      addTo: root,
      stroke,
      diameter: 2 * 7.75,
      fill: true,
      color: black,
      translate: {
        x: 68.25,
        y: 63.25,
        z: depth * -3,
      },
    });

    new Rect({
      addTo: root,
      stroke,
      width: 68.25,
      height: 20,
      fill: true,
      color: white,
      translate: {
        x: 65.25 / 2,
        y: 20 / 2,
        z: depth * -2,
      },
    });

    new Rect({
      addTo: root,
      stroke,
      width: 68.25,
      height: 15.5,
      fill: true,
      color: black,
      translate: {
        x: 68.25 / 2,
        y: 20 + 15.5 / 2,
        z: depth * -1,
      },
    });

    new Rect({
      addTo: root,
      stroke,
      width: 68.25,
      height: 20,
      fill: true,
      color: white,
      translate: {
        x: 68.25 / 2,
        y: 71 + 20 / 2,
      },
    });

    new Rect({
      addTo: root,
      stroke,
      width: 68.25,
      height: 15.5,
      fill: true,
      color: black,
      translate: {
        x: 68.25 / 2,
        y: 55.5 + 15.5 / 2,
        z: depth,
      },
    });

    new Ellipse({
      addTo: root,
      stroke,
      diameter: 2 * 53.6895,
      fill: true,
      color: black,
      translate: {
        x: 7.75,
        y: 45.5,
        z: depth * 2,
      },
    });

    new Ellipse({
      addTo: root,
      stroke,
      diameter: 2 * 45.5,
      fill: true,
      color: white,
      translate: {
        x: 7.75,
        y: 45.5,
        z: depth * 3,
      },
    });

    new Ellipse({
      addTo: root,
      stroke,
      diameter: 2 * 25.5,
      fill: true,
      color: black,
      translate: {
        x: 7.75,
        y: 45.5,
        z: depth * 4,
      },
    });

    new Rect({
      addTo: root,
      stroke,
      width: 7.75,
      height: 91,
      fill: true,
      color: white,
      translate: {
        x: 7.75 / 2,
        y: 45.5,
        z: depth * 5,
      },
    });

    new Rect({
      addTo: root,
      stroke,
      width: 7.75,
      height: 51,
      fill: true,
      color: black,
      translate: {
        x: 7.75 / 2,
        y: 45.5,
        z: depth * 6,
      },
    });

    const scale = 5;
    const canvas = document.createElement("canvas");
    canvas.width = (width + padding * 2) * scale;
    canvas.height = (height + padding * 2) * scale;

    const { width: w, height: h } = canvas;
    let z = 1;

    const context = /** @type { CanvasRenderingContext2D }*/ (
      canvas.getContext("2d")
    );

    const render = () => {
      context.clearRect(0, 0, w, h);
      context.save();
      context.translate(w / 2, h / 2);
      context.scale(z, z);
      root.renderGraphCanvas(context);
      context.restore();
    };

    root.updateGraph();
    render();

    const controls = document.createElement("div");
    controls.classList.add("controls");
    controls.innerHTML = `
<label>
    <span>Overlap shapes</span>
    <input type="range" min="0" max="1" step="0.025" value="0" />
</label>
<label>
  <span>Draw background</span>
  <input type="checkbox" checked />
</label>
`;

    const el = document.createElement("input");
    el.addEventListener("input", function () {
      this;
    });

    canvas.style.background = black;
    element.appendChild(canvas);
    element.appendChild(controls);

    const range = /** @type { HTMLInputElement } */ (
      element.querySelector('input[type="range"]')
    );
    const checkbox = /** @type { HTMLInputElement } */ (
      element.querySelector('input[type="checkbox"]')
    );

    const rx = root.rotate.x;
    const ry = root.rotate.y;
    let t = 0;
    const threshold = 200;
    /** @type {number} */
    let frame;

    /**
     * @param { number } t
     */
    const update = (t) => {
      const e = easeInOut(t);
      root.rotate.y = ry * (1 - e);
      root.rotate.x = rx * (1 - e);
      z = 1 + (scale - 1) * e;
      root.updateGraph();
      render();
    };

    const animate = () => {
      t += 1;
      const value = t / threshold;
      range.value = value.toString();
      if (t >= threshold) {
        cancelAnimationFrame(frame);
      } else {
        update(value);
        frame = requestAnimationFrame(animate);
      }
    };

    /**
     * @this {HTMLInputElement}
     */
    function updateProgress() {
      const value = +this.value;
      update(value);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    }

    /**
     * @this {HTMLInputElement}
     */
    function toggleBackground() {
      canvas.style.background = this.checked ? black : "";
    }

    range.addEventListener("input", updateProgress);
    checkbox.addEventListener("input", toggleBackground);

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
      range.removeEventListener("input", updateProgress);
      checkbox.removeEventListener("input", toggleBackground);
    };
  });
</script>

<svelte:head>
  <title>Play</title>
</svelte:head>

<div bind:this={element}></div>

<style>
  div {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  div :global(canvas) {
    display: block;
    inline-size: 100%;
  }

  div :global(.controls) {
    color: hsl(210 16% 93%);
    background: hsl(216 16% 6%);
    accent-color: currentColor;
    padding: 1rem 1.5rem;
    inline-size: 100%;
    border-radius: 0.5rem;
  }

  div :global(.controls > *) {
    display: block;
  }

  div :global(.controls > * + *) {
    margin-block-start: 1.5rem;
  }

  div :global(label span) {
    font-weight: 700;
    font-family: inherit;
  }

  div :global(label input[type="range"]) {
    display: block;
    margin-block-start: 0.25rem;
    inline-size: 100%;
  }

  div :global(label input[type="checkbox"]) {
    inline-size: 1em;
    block-size: 1em;
  }
</style>
