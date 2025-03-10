<script>
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";

  let animate = $state(false);

  /** @type { SVGSVGElement } */
  let svg;
  /** @type { number } */
  let l;
  /** @type { number } */
  let w;

  const move = spring(0, {
    stiffness: 0.1,
    damping: 0.3,
  });

  const follow = spring(0, {
    stiffness: 0.2,
    damping: 0.4,
  });

  onMount(() => {
    handleSize();

    /**
     * @param { IntersectionObserverEntry[] } entries
     */
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        animate = true;
      } else {
        animate = false;
      }
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(svg);

    return () => {
      observer.unobserve(svg);
    };
  });

  const handleSize = () => {
    const { width } = svg.getBoundingClientRect();
    w = width;
  };

  /**
   *
   * @param {number} offset
   */
  const handleOffset = (offset) => {
    const x = offset / w - 0.5;
    move.set(x * 60);
    follow.set(x * 60);
  };

  /**
   *
   * @param {MouseEvent} event
   */
  const handleMouseMove = (event) => {
    handleOffset(event.offsetX);
  };

  /**
   *
   * @param {TouchEvent} event
   */
  const handleTouchStart = (event) => {
    event.preventDefault();
    const { left } = svg.getBoundingClientRect();
    l = left;
  };

  /**
   *
   * @param {TouchEvent} event
   */
  const handleTouchMove = (event) => {
    event.preventDefault();
    const { clientX: x } = event.touches[0];

    handleOffset(x - l);
  };
</script>

<svg
  bind:this={svg}
  viewBox="0 0 100 100"
  class:animate
  onmousemove={handleMouseMove}
  ontouchstart={handleTouchStart}
  ontouchmove={handleTouchMove}
  role="presentation"
>
  <defs>
    <mask id="keep-dry-mask">
      <rect fill="white" width="100" height="100" />
      <g fill="black">
        <g transform="translate({$follow} 0)">
          <path
            d="M 50 45 a 20 20 0 0 1 20 20 v 35 h -40 v -35 a 20 20 0 0 1 20 -20"
          />
        </g>
      </g>
    </mask>
    <pattern
      id="keep-dry-pattern-drop"
      viewBox="0 0 10 10"
      patternUnits="userSpaceOnUse"
      width="10"
      height="10"
    >
      <g transform="translate(3 2.5)">
        <path
          fill="#52a2bd"
          d="M 2 0 c 1 1 2 2 2 3 c 0 2 -2 2 -2 2 c 0 0 -2 0 -2 -2 c 0 -1 1 -2 2 -3"
        />
      </g>
    </pattern>
    <pattern
      id="keep-dry-pattern-polka-dot"
      viewBox="0 0 2 2"
      patternUnits="userSpaceOnUse"
      width="5"
      height="5"
    >
      <rect fill="#fed245" width="2" height="2" />
      <circle fill="#fe7c71" cx="1" cy="1" r="0.5" />
    </pattern>
    <pattern
      id="keep-dry-pattern-polka-dot-light"
      viewBox="0 0 2 2"
      patternUnits="userSpaceOnUse"
      width="5"
      height="5"
    >
      <rect fill="#feec6e" width="2" height="2" />
      <circle fill="#ffa8a6" cx="1" cy="1" r="0.5" />
    </pattern>
    <symbol id="keep-dry-snail" viewBox="-1 -4 15 15">
      <g stroke-linejoin="round" stroke-linecap="round">
        <g stroke="#aaa45c">
          <g fill="none" stroke-width="0.4">
            <path d="M 1 1 q -0.5 2.5 1 4" />
            <path d="M 3.5 1 q -1 2 -0.25 4" />
          </g>
          <path
            fill="#aaa45c"
            stroke-width="1.2"
            d="M 1 5 c 0.2 -1.25 2.25 -1 3 0 c 1 1 1 3 3 3 c 2 0 2 1 5 2 c -1 0.5 -2 0.5 -3 0 s -2 -0.5 -3 0 c -2 1 -6 0 -5 -5"
          />
        </g>

        <path
          fill="none"
          stroke="#9e9857"
          stroke-width="0.4"
          d="M 1.25 6 c 0.5 0.25 1.5 0.25 2 0"
        />
        <circle fill="#aaa45c" r="1" cx="1" cy="1" />
        <circle fill="#9e9857" r="0.35" cx="1" cy="1" />
        <circle fill="#aaa45c" r="1" cx="3.5" cy="1" />
        <circle fill="#9e9857" r="0.35" cx="3.5" cy="1" />

        <path
          fill="#c77c56"
          stroke="#c77c56"
          stroke-width="1.2"
          d="M 5 6 a 4 4 0 0 1 8 0 3 3 0 0 1 -6 0 c -0 2 -2 2 -2 0"
        />
        <path
          fill="none"
          stroke="#945437"
          stroke-width="0.5"
          d="M 6 6 a 3 3 0 0 1 6 0 2 2 0 0 1 -4 0 1 1 0 0 1 2 0"
        />
      </g>
    </symbol>
  </defs>

  <g mask="url(#keep-dry-mask)">
    <rect
      class="rain"
      fill="url(#keep-dry-pattern-drop)"
      y="-10"
      width="100"
      height="110"
    />
  </g>

  <g fill="#dceff6">
    <ellipse rx="30" ry="20" />
    <ellipse cx="35" rx="24" ry="15" />
    <ellipse cx="65" rx="24" ry="15" />
    <ellipse cx="100" rx="30" ry="20" />
  </g>

  <g transform="translate({$follow} 0)">
    <g stroke-linecap="round" stroke-linejoin="round">
      <g fill="none">
        <g stroke="#52606D">
          <path stroke-width="1" d="M 50 40 v -1" />
          <path stroke-width="1.5" d="M 50 60 v 20 a 3 3 0 0 1 -6 0" />
        </g>
        <path
          stroke="#fe5f5c"
          stroke-width="2"
          stroke-linecap="square"
          d="M 50 76 v 4 a 3 3 0 0 1 -6 0"
        />
      </g>
      <path
        fill="url(#keep-dry-pattern-polka-dot)"
        d="M 50 40 a 20 20 0 0 1 20 20 10 10 0 0 0 -10 2 20 20 0 0 0 -20 0 10 10 0 0 0 -10 -2 20 20 0 0 1 20 -20"
      />
      <path
        fill="url(#keep-dry-pattern-polka-dot-light)"
        d="M 50 40 a 20 20 0 0 1 10 22 20 20 0 0 0 -20 0 20 20 0 0 1 10 -22"
      />
      <ellipse fill="#52606D" cx="50" cy="40" rx="2" ry="0.5" />
    </g>
  </g>

  <g transform="translate({$move} 0)">
    <use
      transform="translate(50 100)"
      href="#keep-dry-snail"
      x="3"
      y="-14"
      width="14"
      height="14"
    />
  </g>
</svg>

<style>
  svg {
    margin-block-start: 400svb;
    display: block;
  }

  .rain {
    animation: fall 0.5s linear infinite;
    animation-play-state: paused;
  }

  svg.animate .rain {
    animation-play-state: running;
  }

  @keyframes fall {
    to {
      transform: translateY(10px);
    }
  }
</style>
