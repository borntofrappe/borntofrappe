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
  <g fill="currentColor">
    <circle cx={x} cy={y} r="0.025" />
  </g>
</svg>

<style>
  svg {
    display: block;
    outline: 1px solid currentColor;
  }
</style>
