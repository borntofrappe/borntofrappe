<script>
  import { onMount } from "svelte";
  import { preventDefault } from "svelte/legacy";
  import { spring } from "svelte/motion";

  const angle = spring(0, {
    stiffness: 0.1,
    damping: 0.25,
  });

  /** @type { SVGSVGElement } */
  let svg;
  /** @type { number } */
  let w;
  /** @type { number } */
  let h;
  /** @type { number } */
  let l;
  /** @type { number } */
  let t;

  onMount(() => {
    handleSize();
  });

  const handleSize = () => {
    const { width, height } = svg.getBoundingClientRect();
    w = width;
    h = height;
  };

  /**
   * @param {{offsetX: number, offsetY: number}} offset
   */
  const handleMove = (offset) => {
    const { offsetX, offsetY } = offset;
    const x = offsetX / w - 0.5;
    const y = offsetY / h - 0.5;

    if (y > 0) return;

    const theta = Math.atan2(y, x);
    const degrees = (theta * 180) / Math.PI + 90;

    angle.set(degrees);
  };
</script>

<svelte:window onresize={handleSize} />

<svg
  viewBox="-50 -50 100 100"
  bind:this={svg}
  onmousemove={(event) => {
    const { offsetX, offsetY } = event;
    handleMove({ offsetX, offsetY });
  }}
  ontouchstart={(event) => {
    event.preventDefault();
    const { left, top } = svg.getBoundingClientRect();
    l = left;
    t = top;
  }}
  ontouchmove={(event) => {
    event.preventDefault();
    const { clientX: x, clientY: y } = event.touches[0];

    const offsetX = x - l;
    const offsetY = y - t;
    handleMove({
      offsetX,
      offsetY,
    });
  }}
  role="presentation"
>
  <defs>
    <marker id="brianna-m" viewBox="-1 -1 2 2">
      <circle r="1" fill="#38311e" />
    </marker>
  </defs>
  <g transform="rotate({$angle})">
    <g transform="translate(0 -20)">
      <g
        fill="none"
        stroke="#38311e"
        stroke-width="1.5"
        marker-end="url(#brianna-m)"
      >
        <path d="M 0 0 l 12 -14" />
        <path d="M 0 0 l -12 -14" />
      </g>
      <circle fill="#38311e" r="14" />
    </g>

    <g>
      <circle fill="#ff6c6c" r="25" />
      <g fill="#38311e">
        <g id="brianna-dots">
          <circle cx="4" cy="-18" r="2" />
          <circle cx="8" cy="-8" r="4" />
          <circle cx="18" cy="-1" r="3" />
          <circle cx="6" cy="5" r="3" />
          <circle cx="14" cy="12" r="2" />
          <circle cx="4" cy="18" r="2" />
        </g>
        <use href="#brianna-dots" transform="scale(-1 1)" />
      </g>
    </g>
  </g>
</svg>

<style>
  svg {
    display: block;
  }
</style>
