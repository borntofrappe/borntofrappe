<script>
  const colors = [
    "#eb6a6a",
    "#ebd86a",
    "#8eeb6a",
    "#6aebb3",
    "#6ab3eb",
    "#8e6aeb",
    "#eb6ad8",
  ];

  let color = $state(colors[0]);
</script>

<div class="layout">
  <div class="controls">
    {#each colors as fill}
      <button
        onclick={() => {
          color = fill;
        }}
      >
        {fill}
        <svg width="1em" height="1em" viewBox="-0.55 -0.55 1.1 1.1">
          <circle stroke="currentColor" stroke-width="0.1" {fill} r="0.5" />
        </svg>
      </button>
    {/each}
  </div>

  <svg viewBox="-25 -25 50 50">
    <defs>
      <circle id="colors-c" r="11" />
      <mask id="colors-mask">
        <use href="#colors-c" fill="white" />
        <use href="#colors-c" y="-2" fill="black" />
      </mask>

      <g id="colors-cc">
        <use href="#colors-c" />
        <use
          href="#colors-c"
          mask="url(#colors-mask)"
          fill="black"
          opacity="0.1"
        />
      </g>
    </defs>
    <g fill={color}>
      <use href="#colors-cc" />
    </g>
  </svg>
</div>

<style>
  .layout > * + * {
    margin-block-start: 0.5rem;
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    color: hsl(0, 0%, 92%);
    background: hsl(0, 0%, 10%);
    border: none;
    border-radius: 2rem;
    font-weight: 700;
    padding: 0.25rem 1rem;
    transition: transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
  }

  button:active {
    transform: scale(0.95);
  }

  svg {
    display: block;
  }
</style>
