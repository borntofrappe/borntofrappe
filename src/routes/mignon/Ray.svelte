<script>
  import { onMount } from "svelte";
  import { Spring } from "svelte/motion";

  const rays = Array(24)
    .fill("")
    .map((_, i, { length }) => {
      const angle = (360 / length) * i;
      const x = i % 2 === 0 ? 7 : 6;

      return {
        angle,
        x,
      };
    });

  const scale = new Spring(1, {
    stiffness: 0.1,
    damping: 0.2,
  });

  const offset = new Spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.1,
      damping: 0.25,
    }
  );

  /** @type { SVGSVGElement }*/
  let svg;
  /** @type { number }*/
  let w;
  /** @type { number }*/
  let h;
  const m = 20;

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
    const x = (offsetX / w - 0.5) * m;
    const y = (offsetY / h - 0.5) * m;

    offset.target = { x, y };
  };

  const handleStart = () => {
    scale.target = 1.1;
  };

  const handleEnd = () => {
    scale.target = 1;
  };

  const handleReset = () => {
    scale.target = 1;
    offset.target = { x: 0, y: 0 };
  };
</script>

<svelte:window on:resize={handleSize} />

<svg
  bind:this={svg}
  onpointermove={handleMove}
  onpointerdown={handleStart}
  onpointerup={handleEnd}
  onpointerleave={handleReset}
  style="display: block;"
  viewBox="-55 -55 110 110"
  role="presentation"
>
  <g transform="scale({scale.current})">
    <g transform="translate({offset.current.x * 0.2} {offset.current.y * 0.2})">
      <g fill="none" stroke="#ffdb47" stroke-width="3" stroke-linecap="round">
        {#each rays as { angle, x }}
          <path transform="rotate({angle})" d="M 35 0 h {x}" />
        {/each}
      </g>
    </g>

    <g transform="translate({offset.current.x * 0.3} {offset.current.y * 0.3})">
      <circle r="28" fill="#ffdb47" />
    </g>

    <g transform="translate({offset.current.x} {offset.current.y})">
      <g fill="#ff877a">
        <g transform="translate(0 5)">
          <circle r="4" cx="-9" />
          <circle r="4" cx="9" />
        </g>
        <g transform="translate(0 6)">
          <g transform="scale({scale.current ** 2})">
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
      </g>
    </g>

    <g transform="translate({offset.current.x * 1.1} {offset.current.y * 1.1})">
      <g fill="#38311e" stroke="#ffdb47" stroke-width="1">
        <g transform="translate(-5 0)">
          <circle class="blink" r="2" />
        </g>
        <g transform="translate(5 0)">
          <circle class="blink" r="2" />
        </g>
      </g>
    </g>
  </g>
</svg>
