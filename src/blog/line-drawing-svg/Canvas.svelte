<script>
  import { onMount } from "svelte";
  import { preventDefault } from "svelte/legacy";

  let { handleOrigin = true, handleClear = true } = $props();

  /** @type {HTMLCanvasElement} */
  let canvas;
  /** @type {number} */
  let x;
  /** @type {number} */
  let y;
  let isDrawing = false;

  let t = 0;
  let l = 0;

  const width = 350;
  const height = 300;
  const strokeWidth = 4;
  const strokeStyle = "hsl(0, 0%, 28%)";

  onMount(() => {
    const context = /** @type { CanvasRenderingContext2D }*/ (
      canvas.getContext("2d")
    );
    context.lineWidth = strokeWidth;
    context.strokeStyle = strokeStyle;
  });

  /**
   * @param {{ offsetX: number, offsetY: number }} param
   */
  const handleStart = ({ offsetX, offsetY }) => {
    x = offsetX;
    y = offsetY;
    isDrawing = true;
  };

  const handleEnd = () => {
    isDrawing = false;
  };

  /**
   * @param {{ offsetX: number, offsetY: number }} param
   */
  const handleMove = ({ offsetX, offsetY }) => {
    if (!isDrawing) return;

    const context = /** @type { CanvasRenderingContext2D }*/ (
      canvas.getContext("2d")
    );
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(offsetX, offsetY);
    context.closePath();
    context.stroke();

    if (handleOrigin) {
      x = offsetX;
      y = offsetY;
    }
  };

  const handleReset = () => {
    const context = /** @type { CanvasRenderingContext2D }*/ (
      canvas.getContext("2d")
    );
    context.clearRect(0, 0, width, height);
  };
</script>

<div class="center-column">
  <div class="canvas">
    <canvas
      bind:this={canvas}
      {width}
      {height}
      onmousedown={handleStart}
      onmouseup={handleEnd}
      onmouseleave={handleEnd}
      onmousemove={handleMove}
      ontouchstart={(event) => {
        event.preventDefault();

        const { top, left } = canvas.getBoundingClientRect();
        t = top;
        l = left;

        const { clientX, clientY } = event.touches[0];
        handleStart({
          offsetX: clientX - l,
          offsetY: clientY - t,
        });
      }}
      ontouchend={(event) => {
        event.preventDefault();
        handleEnd();
      }}
      ontouchmove={(event) => {
        event.preventDefault();
        const { clientX, clientY } = event.touches[0];
        handleMove({
          offsetX: clientX - l,
          offsetY: clientY - t,
        });
      }}
    ></canvas>
  </div>

  {#if handleClear}
    <button onclick={handleReset}>Clear</button>
  {/if}
</div>

<style>
  .center-column {
    --color-stroke: hsl(0, 0%, 28%);
    --color-frame: hsl(26, 61%, 70%);
    --color-background: hsl(0, 0%, 96%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .canvas {
    background: var(--color-background, hsl(0, 0%, 96%));
    outline: 0.4rem solid var(--color-frame, hsl(26, 61%, 70%));
    position: relative;
    margin: 1.1rem 0 0.75rem;
  }

  .canvas::before,
  .canvas::after {
    content: "";
    position: absolute;
    transform: translateX(-50%);
    background: var(--color-frame, hsl(26, 61%, 70%));
  }

  .canvas::before {
    block-size: 1.1rem;
    inline-size: 4rem;
    inset-block-end: 100%;
    inset-inline-start: 50%;
    clip-path: polygon(0 100%, 20% 0%, 80% 0%, 100% 100%);
  }

  .canvas::after {
    block-size: 0.7rem;
    inline-size: 70%;
    inset-block-start: 100%;
    inset-inline-start: 50%;
  }

  button {
    font-family: inherit;
    display: block;
    border: none;
    color: var(--color-stroke, hsl(0, 0%, 28%));
    background: var(--color-background, hsl(0, 0%, 96%));
    font-weight: 700;
    padding: 0.2rem 0.5rem;
    letter-spacing: 0.5px;
    box-shadow: 0 1px 4px -2px var(--color-stroke, hsl(0, 0%, 28%));
    transition: transform 0.07s ease-in-out;
  }

  button:active {
    transform: scale(0.95);
  }
</style>
