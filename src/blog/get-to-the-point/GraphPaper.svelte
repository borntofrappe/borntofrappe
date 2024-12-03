<script>
  import { onMount } from "svelte";

  /** @type { SVGSVGElement }*/
  let svg;
  /** @type { number }*/
  let w;
  /** @type { number }*/
  let h;

  let x = $state(0.1);
  let y = $state(0.1);

  onMount(() => {
    handleSize();
  });

  const handleSize = () => {
    const { width, height } = svg.getBoundingClientRect();
    w = width;
    h = height;
  };

  /**
   * @param { PointerEvent } event
   */
  const handleMove = (event) => {
    const { offsetX, offsetY } = event;
    x = offsetX / w;
    y = offsetY / h;
  };
</script>

<svelte:window onresize={handleSize} />

<svg
  bind:this={svg}
  viewBox="0 0 1 1"
  onpointermove={handleMove}
  ontouchmove={(event) => {
    event.preventDefault();
  }}
>
  <defs>
    <pattern
      id="graph-paper-pattern"
      viewBox="0 0 1 1"
      width="0.05"
      height="0.05"
    >
      <g fill="none" stroke="currentColor" stroke-width="0.0025">
        <rect width="1" height="1" />
      </g>
    </pattern>

    <marker
      id="graph-paper-marker"
      orient="auto"
      viewBox="0 0 0.6 1"
      refX="0.5"
      refY="0.5"
      markerWidth="12"
      markerHeight="12"
    >
      <g fill="currentColor">
        <path d="M 0 0 l 0.6 0.5 -0.6 0.5 0.35 -0.5z" />
      </g>
    </marker>
  </defs>

  <rect fill="url(#graph-paper-pattern)" width="1" height="1" />

  <g fill="none" stroke="currentColor">
    <g stroke-width="0.002" stroke-dasharray="0.01 0.012">
      <path d="M 0.5 0 v 1" />
      <path d="M 0 0.5 h 1" />
    </g>
  </g>

  <line
    stroke="currentColor"
    stroke-width="0.0075"
    marker-end="url(#graph-paper-marker)"
    x1="0.5"
    y1="0.5"
    x2={x}
    y2={y}
  />

  <g fill="currentColor">
    <circle cx="0.5" cy="0.5" r="0.01" />
  </g>
</svg>

<style>
  svg {
    display: block;
    outline: 1px solid currentColor;
  }
</style>
