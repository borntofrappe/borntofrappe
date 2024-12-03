<script>
  import { onMount } from "svelte";

  /** @type {HTMLCanvasElement} */
  let canvas;
  const colors = {
    canvas: "hsl(37 23% 93%)",
    easel: "hsl(20 76% 84%)",
    paint: [
      "hsl(203 51% 68%)",
      "hsl(37 71% 69%)",
      "hsl(9 67% 65%)",
      "hsl(138 18% 67%)",
    ],
  };
  let [color] = colors.paint;

  onMount(() => {
    const context = /** @type { CanvasRenderingContext2D }*/ (
      canvas.getContext("2d")
    );
    const { width, height } = canvas;

    const TAU = Math.PI * 2;

    /** @type {number | null} */
    let frame;
    let state = "wait";
    /** @type Array<{x: number, y: number, r: number, color: string, dr: number }> */
    let paint = [];

    const size = Math.min(width, height);
    const [rmin, rmax] = [size / 30, size / 10];
    const getRadius = (min = 20, max = 40) =>
      min + Math.floor(Math.random() * (max - min));
    /**
     * @param {number} r
     * @param {number} rmax
     */
    const getDeltaRadius = (r, rmax) => r / rmax / (Math.random() * 0.5 + 1);

    /**
     * @param {{x: number, y: number }} param
     */
    const getPaintDrop = ({ x, y }) => {
      const r = getRadius(rmin, rmax);
      let dr = getDeltaRadius(r, rmax);
      return {
        x,
        y,
        r,
        dr,
        color,
      };
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = colors.canvas;
      context.fillRect(0, 0, width, height);

      for (const { x, y, r, color } of paint) {
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, r, 0, TAU);
        context.fill();
      }
    };

    /**
     * @param { PointerEvent } event
     */
    const handleStart = (event) => {
      if (state !== "wait") return;

      state = "draw";

      const { offsetX: x, offsetY: y } = event;
      paint = [...paint, getPaintDrop({ x, y })];
    };

    const handleEnd = () => {
      if (state !== "draw") return;

      state = "wait";
      color =
        colors.paint[(colors.paint.indexOf(color) + 1) % colors.paint.length];
    };

    /**
     * @param { PointerEvent } event
     */
    const handleMove = (event) => {
      if (state !== "draw") return;

      const { offsetX: x, offsetY: y } = event;
      paint = [...paint, getPaintDrop({ x, y })];
      draw();

      if (frame === null) {
        frame = requestAnimationFrame(clear);
      }
    };

    const clear = () => {
      for (let i = 0; i < paint.length; i++) {
        paint[i].r = Math.max(0, paint[i].r - paint[i].dr);
      }

      let clearCanvas = true;

      for (let i = paint.length - 1; i >= 0; i--) {
        if (paint[i].r === 0) {
          paint = [...paint.slice(0, i), ...paint.slice(i + 1)];
        } else {
          clearCanvas = false;
        }
      }

      draw();

      if (clearCanvas && frame) {
        cancelAnimationFrame(frame);
        frame = null;
      } else {
        frame = requestAnimationFrame(clear);
      }
    };

    /**
     * @param { TouchEvent } event
     */
    const handleTouch = (event) => {
      event.preventDefault();
    };

    draw();

    canvas.addEventListener("pointerdown", handleStart);
    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerup", handleEnd);
    canvas.addEventListener("pointerleave", handleEnd);
    canvas.addEventListener("touchmove", handleTouch);

    return () => {
      canvas.removeEventListener("pointerdown", handleStart);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerup", handleEnd);
      canvas.removeEventListener("pointerleave", handleEnd);
      canvas.removeEventListener("touchmove", handleTouch);

      if (frame) cancelAnimationFrame(frame);
    };
  });
</script>

<div style:--outline-size="15px" style:--outline-color={colors.easel}>
  <canvas bind:this={canvas} width="350" height="350"></canvas>
</div>

<style>
  div {
    --outline-color: currentColor;
    --outline-size: 1rem;
    inline-size: max-content;
    margin-inline: auto;
    padding: var(--outline-size);
    padding-block-end: calc(var(--outline-size) * 2);
    position: relative;
  }

  div::after {
    content: "";
    position: absolute;
    inline-size: 70%;
    block-size: var(--outline-size);
    inset-inline-start: 50%;
    inset-block-end: 0%;
    background: var(--outline-color);
    background-image: linear-gradient(
        hsl(0 0% 0% / 0.1),
        hsl(0 0% 0% / 0.02) 40%
      ),
      linear-gradient(var(--outline-color), var(--outline-color));
    translate: -50% 0%;
  }

  div > canvas {
    display: block;
    outline: var(--outline-size) solid var(--outline-color);
  }
</style>
