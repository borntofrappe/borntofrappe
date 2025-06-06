<script>
  import { onMount } from "svelte";

  /** @type {HTMLCanvasElement} */
  let canvas;
  const colors = {
    light: "hsl(0 0% 95%)",
    dark: "hsl(0 0% 23%)",
  };

  onMount(() => {
    const context = /** @type { CanvasRenderingContext2D }*/ (
      canvas.getContext("2d")
    );
    const { width, height } = canvas;

    const TAU = Math.PI * 2;
    const r = Math.min(width, height) / 70;

    let state = "wait";
    /** @type Array<{x: number, y: number }> */
    let dots = [];

    const draw = () => {
      context.fillStyle = colors.light;
      context.fillRect(0, 0, width, height);

      context.fillStyle = colors.dark;
      for (const { x, y } of dots) {
        context.beginPath();
        context.arc(x, y, r, 0, TAU);
        context.fill();
      }
    };

    const handleStart = () => {
      state = "draw";
    };

    const handleEnd = () => {
      state = "wait";
    };

    /**
     * @param { PointerEvent } event
     */
    const handleMove = (event) => {
      if (state !== "draw") return;

      const { offsetX, offsetY } = event;
      dots = [...dots, { x: offsetX, y: offsetY }];

      draw();
    };

    /**
     * @param { TouchEvent } event
     */
    const handleTouch = (event) => {
      event.preventDefault();
    };

    draw();

    canvas.addEventListener("pointerdown", handleStart);
    canvas.addEventListener("pointerup", handleEnd);
    canvas.addEventListener("pointerleave", handleEnd);
    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("touchmove", handleTouch);

    return () => {
      canvas.removeEventListener("pointerdown", handleStart);
      canvas.removeEventListener("pointerup", handleEnd);
      canvas.removeEventListener("pointerleave", handleEnd);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("touchmove", handleTouch);
    };
  });
</script>

<div style:--_color-light={colors.light} style:--_color-dark={colors.dark}>
  <canvas bind:this={canvas} width="350" height="350"></canvas>
</div>

<style>
  div {
    inline-size: max-content;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div::after {
    content: "offset";
    color: var(--_color-light, hsl(0 0% 90%));
    background: var(--_color-dark, hsl(0 0% 20%));
    font-size: 1rem;
    font-style: italic;
    padding: 0.1rem 1rem;
    border: 1px solid transparent;
    background-clip: padding-box;
  }

  canvas {
    outline: 3px solid var(--_color-dark, hsl(0 0% 20%));
  }

  canvas:active {
    outline-width: 4px;
  }

  div:has(canvas:active)::after {
    border-color: var(--_color-dark, hsl(0 0% 20%));
  }
</style>
