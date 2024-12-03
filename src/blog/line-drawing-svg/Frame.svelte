<div class="center-column">
  <div class="canvas">
    <canvas width="350" height="300"></canvas>
  </div>
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
</style>
