<script>
  import { onMount } from "svelte";
  import { Spring } from "svelte/motion";

  const startAngle = 90;
  const angle = new Spring(startAngle, {
    stiffness: 0.1,
    damping: 0.25,
  });

  const scale = new Spring(0.8, {
    stiffness: 0.1,
    damping: 0.2,
  });

  const bounce = new Spring(1, {
    stiffness: 0.1,
    damping: 0.2,
  });

  /** @type { SVGSVGElement }*/
  let svg;
  /** @type { number }*/
  let h;

  onMount(() => {
    handleSize();
  });

  const handleSize = () => {
    const { height } = svg.getBoundingClientRect();
    h = height;
  };

  /**
   * @param { PointerEvent } event
   */
  const handleMove = (event) => {
    const y = 1 - event.offsetY / h;
    scale.target = 0.8 + y * 0.2;
    angle.target = startAngle - y * startAngle;
  };

  const handleStart = () => {
    bounce.target = 1.1;
  };

  const handleEnd = () => {
    bounce.target = 1;
  };

  const handleReset = () => {
    scale.target = 1;
    angle.target = startAngle
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
  viewBox="-60 -70 120 120"
  role="presentation"
>
  <defs>
    <path id="l" d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7" />
    <path
      id="w"
      d="M 0 0 c 6 -5 14 -8 20 0 -5 5 -2 10 -12 10 -2 0 -8 0 -8 -10"
    />
  </defs>

  <g transform="scale({bounce.current})">
    <g
      fill="#fd971b"
      stroke="#fd971b"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g transform="translate(12 17)">
        <g transform="rotate({angle.current / 2})">
          <g transform="rotate({(startAngle * -1) / 2})">
            <use href="#l" />
          </g>
        </g>
      </g>
      <g transform="scale(-1 1) translate(12 17)">
        <g transform="rotate({angle.current / 2})">
          <g transform="rotate({(startAngle * -1) / 2})">
            <use href="#l" />
          </g>
        </g>
      </g>
    </g>

    <g
      fill="#f0d584"
      stroke="#f0d584"
      stroke-width="8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g transform="translate(0 -10)">
        <g transform="translate(25 0)">
          <use href="#w" transform="rotate({angle.current})" />
        </g>
        <g transform="scale(-1 1) translate(25 0)">
          <use href="#w" transform="rotate({angle.current})" />
        </g>
      </g>
    </g>

    <ellipse rx="28" ry="25" fill="#f9f5d0" />

    <g transform="translate(0 -30)">
      <g transform="translate(0 -20)">
        <g transform="scale({scale.current})">
          <path
            d="M 0 0 c 5 0 11 -2 11 -5 0 5 2.5 5 5 3 0 5 -10 7 -16 2"
            fill="#f9f5d0"
            stroke="#f9f5d0"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>

      <path
        d="M -20 0 c -18 24 58 24 40 0 a 20 20 0 0 0 -40 0"
        fill="#f9f5d0"
        stroke="#f9f5d0"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g fill="#542b19">
        <g transform="translate(12 0)">
          <circle class="blink" r="2.75" />
        </g>
        <g transform="translate(-12 0)">
          <circle class="blink" r="2.75" />
        </g>
      </g>

      <g transform="translate(0 10)">
        <g stroke-linecap="round" stroke-linejoin="round">
          <g fill="#fd971b" stroke="#fd971b" stroke-width="3">
            <path d="M -9 -2 c 6 6 12 6 18 0 c -7 -5 -11 -5 -18 0" />
          </g>
          <g fill="#fc531c" stroke="#fc531c" stroke-width="1">
            <g transform="scale({scale.current})">
              <path d="M -6 -2 c 3 4 9 4 12 0 c -4 1 -8 1 -12 0" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>
