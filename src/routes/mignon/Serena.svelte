<script>
  import { onMount } from "svelte";
  import { Tween, Spring } from "svelte/motion";
  import { elasticOut as easing } from "svelte/easing";

  /** @type { SVGSVGElement }*/
  let svg;
  /** @type { number }*/
  let w;

  let start = $state(false);

  onMount(() => {
    handleSize();
  });

  const handleSize = () => {
    const { width } = svg.getBoundingClientRect();
    w = width;
  };

  const scale = new Spring(0, {
    stiffness: 0.2,
    damping: 0.5,
  });

  const bounce = new Tween(1, {
    duration: 1000,
    easing,
  });

  const translate = new Spring(0, {
    stiffness: 0.1,
    damping: 0.8,
  });

  const rotate = new Spring(0, {
    stiffness: 0.1,
    damping: 0.2,
  });

  const skewX = new Spring(0, {
    stiffness: 0.2,
    damping: 0.2,
  });

  const handleStart = () => {
    scale.target = 1;
    bounce.target = 1.1;
    start = true;
  };

  const handleEnd = () => {
    scale.target = 0;
    bounce.target = 1;
    start = false;
  };

  /**
   * @param { PointerEvent } event
   */
  const handleMove = (event) => {
    const x = event.offsetX / w - 0.5;
    rotate.target = x * 30;
    translate.target = x * 30;
    skewX.target = x * 10 * -1;
  };
</script>

<svelte:window on:resize={handleSize} />

<svg
  viewBox="-55 -30 110 100"
  class:start
  bind:this={svg}
  onpointermove={handleMove}
  onpointerdown={handleStart}
  onpointerup={handleEnd}
	style="display: block;"
  role="presentation"
>
  <defs>
    <pattern
      id="p"
      viewBox="-8 -8 16 16"
      width="10"
      height="10"
      patternUnits="userSpaceOnUse"
    >
      <g transform="scale({bounce.current ** 3})">
        <g transform="scale({scale.current})">
          <path
            fill="#35cce9"
            d="M 0 -3.5 q 2 2 2 4 a 2 2 0 0 1 -4 0 q 0 -2 2 -4"
          />
        </g>
      </g>
    </pattern>
    <circle id="c" r="11" />
    <mask id="m">
      <use href="#c" fill="white" />
      <g transform="rotate({rotate.current})">
        <use href="#c" y="-2" fill="black" />
      </g>
    </mask>
    <g id="cc">
      <use href="#c" />
      <use href="#c" fill="black" mask="url(#m)" opacity="0.1" />
    </g>
  </defs>

  <g transform="translate({translate.current} 0)">
    <g transform="skewX({skewX.current})">
      <rect x="-30" width="60" height="70" fill="url(#p)" />
    </g>

    <g transform="scale({bounce.current})">
      <g fill="#ebf3f5">
        <use href="#c" />
        <use href="#c" transform="translate(-12.5 -5)" />
        <use href="#c" transform="translate(12.5 -5)" />
        <use href="#c" transform="translate(0 -10)" />
        <use href="#cc" transform="translate(-20 0) rotate(20)" />
        <use href="#cc" transform="translate(20 0) rotate(-20)" />
        <use href="#cc" transform="translate(-15 10) rotate(10)" />
        <use href="#cc" transform="translate(15 10) rotate(-10)" />
        <use href="#cc" transform="translate(0 15)" />
      </g>

      <g fill="#f9a3c6">
        <g transform="translate(10 0)">
          <g transform="rotate({rotate.current ** 0.5})">
            <g transform="translate(0 2.5)">
              <g transform="scale({scale.current})">
                <ellipse rx="2.5" ry="1.4" />
              </g>
            </g>
          </g>
        </g>
        <g transform="translate(-10 0)">
          <g transform="rotate({rotate.current ** 0.5})">
            <g transform="translate(0 2.5)">
              <g transform="scale({scale.current})">
                <ellipse rx="2.5" ry="1.4" />
              </g>
            </g>
          </g>
        </g>
      </g>

      <g fill="#acacfa">
        <g transform="translate(10 -2.5)">
          <g transform="scale({bounce.current})">
            <circle class="blink" r="2.5" />
          </g>
        </g>
        <g transform="translate(-10 -2.5)">
          <g transform="scale({bounce.current})">
            <circle class="blink" r="2.5" />
          </g>
        </g>
      </g>

      <g
        fill="#acacfa"
        stroke="#acacfa"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g transform="translate(0 8)">
          <path d="M -2 0 h 4" />
          <g transform="scale({bounce.current})">
            <g transform="scale({scale.current})">
              <path d="M -2 0 v 2 a 2 2 0 0 0 4 0 v -2z" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>

<style>
  svg rect {
    animation: translate 1s linear infinite;
    animation-play-state: paused;
  }

  svg.start rect {
    animation-play-state: running;
  }

  @keyframes translate {
    to {
      transform: translateY(10px);
    }
  }
</style>
