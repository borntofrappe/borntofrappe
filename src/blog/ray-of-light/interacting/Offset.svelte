<script>
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";

  const angles = Array(24)
    .fill("")
    .map((_, i, { length }) => (360 / length) * i);

  const scale = spring(1, {
    stiffness: 0.1,
    damping: 0.2,
  });

  const offset = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.1,
      damping: 0.25,
    }
  );

  /** @type { SVGSVGElement } */
  let svg;
  /** @type { number } */
  let w;
  /** @type { number } */
  let h;

  onMount(() => {
    handleSize();
  });

  const handleSize = () => {
    const { width, height } = svg.getBoundingClientRect();
    w = width;
    h = height;
  };

  const handleStart = () => {
    scale.set(1.1);
  };

  const handleEnd = () => {
    scale.set(1);
  };

  /**
   * @param {{ offsetX: number, offsetY: number }} param
   */
  const handleMove = ({ offsetX, offsetY }) => {
    const x = (offsetX / w - 0.5) * 5;
    const y = (offsetY / h - 0.5) * 5;

    offset.set({ x, y });
  };
</script>

<svelte:window onresize={handleSize} />

<svg
  bind:this={svg}
  onmousedown={handleStart}
  onmouseup={handleEnd}
  onmouseleave={handleEnd}
  onmousemove={handleMove}
  role="presentation"
  style="display: block;"
  viewBox="-55 -55 110 110"
>
  <g transform="scale({$scale})">
    <g transform="translate({$offset.x} {$offset.y})">
      <g fill="none" stroke="#ffdb47" stroke-width="3" stroke-linecap="round">
        {#each angles as angle}
          <path transform="rotate({angle})" d="M 35 0 h 7" />
        {/each}
      </g>

      <circle r="28" fill="#ffdb47" />

      <g fill="#ff877a">
        <g transform="translate(0 5)">
          <circle r="4" cx="-9" />
          <circle r="4" cx="9" />
        </g>
        <g transform="translate(0 6)">
          <g
            stroke="#ff877a"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          >
            <path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
          </g>
        </g>
      </g>

      <g fill="#38311e" stroke="#ffdb47" stroke-width="1">
        <circle r="2" cx="-5" />
        <circle r="2" cx="5" />
      </g>
    </g>
  </g>
</svg>
