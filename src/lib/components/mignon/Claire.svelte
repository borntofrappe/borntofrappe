<script>
  import { onMount } from "svelte";
  import { Spring } from "svelte/motion";

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
  const m = 10;

  onMount(() => {
    handleSize();
  });

  const handleSize = () => {
    const { width, height } = svg.getBoundingClientRect();
    w = width;
    h = height;
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

  /**
   * @param { PointerEvent } event
   */
  const handleMove = (event) => {
    const { offsetX, offsetY } = event;
    const x = (offsetX / w - 0.5) * m;
    const y = (offsetY / h - 0.5) * m;

    offset.target = { x, y };
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
  <defs>
    <symbol id="star-symbol" viewBox="-4.5 -4.5 9 9">
      <g stroke-width="1" stroke-linejoin="round" stroke-linecap="round">
        <path
          d="M -4 0 l 2.5 1.5 1.5 2.5 1.5 -2.5 2.5 -1.5 -2.5 -1.5 -1.5 -2.5 -1.5 2.5z"
        />
      </g>
    </symbol>
    <use id="star" href="#star-symbol" x="-4" y="-4" width="8" height="8" />

    <g id="eyelash">
      <g fill="none" stroke-linejoin="round" stroke-linecap="round">
        <path stroke-width="1.5" d="M -4 0 a 4 4 0 0 0 8 0" />
        <g stroke-width="1">
          <path d="M 0 4 v 2" />
          <path transform="rotate(60)" d="M 0 4 v 2" />
          <path transform="rotate(-60)" d="M 0 4 v 2" />
          <path transform="rotate(-30)" d="M 0 4 v 2" />
          <path transform="rotate(30)" d="M 0 4 v 2" />
        </g>
      </g>
    </g>

    <circle id="moon" r="28" />
    <clipPath id="moon-clip" class="translate">
      <use href="#moon" />
    </clipPath>
  </defs>

  <g transform="scale({scale.current})">
    <g fill="#d1bfae">
      <g
        transform="translate({offset.current.x * 0.1} {offset.current.y * 0.1})"
      >
        <circle cx="-48" cy="-46" r="1" />
        <circle cx="-40" cy="-38" r="1.1" />
        <circle cx="-43" cy="-42" r="0.9" />
        <circle cx="-38" cy="-46" r="1.8" />
        <circle cx="-34" cy="-40" r="1.2" />
        <circle cx="39" cy="-42" r="0.9" />
        <circle cx="35" cy="-38" r="1" />
        <circle cx="34" cy="-45" r="0.75" />
        <circle cx="42" cy="44" r="0.75" />
        <circle cx="-33" cy="35" r="1" />
      </g>
      <g
        transform="translate({offset.current.x * 0.3} {offset.current.y * 0.3})"
      >
        <g stroke="#d1bfae">
          <use transform="translate(35 -38)" href="#star" />
          <use transform="translate(-38 28) scale(0.8)" href="#star" />
          <use transform="translate(29 38) scale(0.7)" href="#star" />
          <use transform="translate(35 45) scale(0.5)" href="#star" />
          <use transform="translate(38 35) scale(0.6)" href="#star" />
        </g>
      </g>
    </g>

    <g
      transform="translate({offset.current.x * 0.75} {offset.current.y * 0.75})"
    >
      <g>
        <use href="#moon" fill="#d1bfae" />
        <g fill="#a49191">
          <circle r="1.75" cx="19.75" cy="14" />
          <circle r="1.5" cx="16.5" cy="18.5" />
          <circle r="1" cx="13.25" cy="21.5" />
        </g>
        <g transform="translate({offset.current.x} {offset.current.y})">
          <g stroke="#a49191">
            <g transform="translate(0 -4)">
              <use href="#eyelash" x="-10" />
              <use href="#eyelash" x="10" />
            </g>
          </g>
          <g fill="#a49191">
            <g transform="translate(0 10)">
              <g transform="scale({scale.current ** 1.5})">
                <g
                  stroke="#a49191"
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
      </g>

      <g clip-path="url(#moon-clip)">
        <use href="#moon" fill="#e3d3ba" />
        <g fill="#d1bfae">
          <circle r="1.75" cx="19.75" cy="14" />
          <circle r="1.5" cx="16.5" cy="18.5" />
          <circle r="1" cx="13.25" cy="21.5" />
        </g>
        <g transform="translate({offset.current.x} {offset.current.y})">
          <g fill="#d1bfae">
            <g transform="translate(0 -3)">
              <g transform="translate(-10 0)">
                <circle class="blink" r="4.5" />
              </g>
              <g transform="translate(10 0)">
                <circle class="blink" r="4.5" />
              </g>
            </g>
            <g transform="translate(0 10)">
              <g transform="scale(1.25)">
                <g transform="scale({scale.current ** 2})">
                  <g
                    stroke="#d1bfae"
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
        </g>
      </g>
    </g>
  </g>
</svg>

<style>
  .translate {
    transform: translate(100px, -45px);
    animation: translate 35s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }

  @keyframes translate {
    0%,
    12.5% {
      transform: translate(100px, -45px);
    }

    37.5%,
    62.5% {
      transform: translate(0px, 0px);
    }

    87.5%,
    100% {
      transform: translate(-100px, 40px);
    }
  }
</style>
