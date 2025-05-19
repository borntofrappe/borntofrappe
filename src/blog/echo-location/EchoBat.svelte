<script>
  import { elasticOut, backOut } from "svelte/easing";

  /** @type { number | undefined }*/
  let number = $state();
  const max = 9;

  const onclick = () => {
    let n;
    do {
      n = Math.floor(Math.random() * (max + 1));
    } while (n === number);
    number = n;
  };

  /**
   * @param { Element } node
   * @param { { duration?: number }} options
   */
  function tadaa(node, { duration = 1000 }) {
    const direction = Math.random() > 0.5 ? 1 : -1;
    return {
      duration,
      css: (/** @type {number} */ t) => {
        return `transform: scale(${backOut(t)}) rotate(${Math.sin(elasticOut(t) * Math.PI) * 10 * direction}deg);`;
      },
    };
  }
</script>

<div>
  <svg style="display: block;" viewBox="-200 -150 400 270">
    <defs>
      <linearGradient id="gradient-body" x1="0" y1="0" x2="0" y2="1">
        <stop stop-color="hsl(256 58% 53%)" offset="0" />
        <stop stop-color="hsl(258 63% 57%)" offset="1" />
      </linearGradient>
      <linearGradient id="gradient-wings" x1="0" y1="0" x2="0" y2="1">
        <stop stop-color="hsl(263 50% 50%)" offset="0" />
        <stop stop-color="hsl(256 58% 53%)" offset="1" />
      </linearGradient>
    </defs>
    <g class="translate">
      <g stroke-width="10" stroke-linecap="round" stroke-linejoin="round">
        <g fill="url(#gradient-wings)" stroke="url(#gradient-wings)">
          <g class="rotate">
            <path
              transform="rotate(5)"
              d="M 8 3 C 41 -7 56 -41 71 -72 112 -76 150 -80 177 -88 152 -56 143 -28 144 -2 116 6 95 22 83 55 52 60 25 74 16 98 16 55 12 19 8 3"
            />
          </g>
          <g transform="scale(-1 1)">
            <g class="rotate">
              <path
                transform="rotate(5)"
                d="M 8 3 C 41 -7 56 -41 71 -72 112 -76 150 -80 177 -88 152 -56 143 -28 144 -2 116 6 95 22 83 55 52 60 25 74 16 98 16 55 12 19 8 3"
              />
            </g>
          </g>
        </g>
        <g fill="url(#gradient-body)" stroke="url(#gradient-body)">
          <path
            class="translate"
            d="M -0 -9 C -30 -8 -38 20 -38 51 -38 96 -17 107 0 107 17 107 38 96 38 51 38 20 30 -8 0 -9"
          />
          <path
            d="M -0 32 C 28 31 40 20 41 -12 41 -46 37 -62 36 -64  28 -54 24 -44 18 -34 -2 -36 -2 -36 -18 -34 -24 -44 -28 -54 -36 -64 -37 -62 -41 -46 -41 -12 -40 20 -28 31 -0 32"
          />
        </g>
        <path
          class="translate"
          transform="translate(0 5)"
          fill="hsl(42 100% 60%)"
          stroke="hsl(42 100% 60%)"
          d="M -7 4 C -5 0 -3 -3 0 -3 3 -2 5 0 7 4 Z"
        />
      </g>
      <g class="translate">
        <g transform="translate(12 -9)">
          <ellipse fill="hsl(0 0% 11%)" rx="5" ry="4.5" />
        </g>
        <g transform="translate(-12 -9)">
          <ellipse fill="hsl(0 0% 11%)" rx="5" ry="4.5" />
        </g>
      </g>
    </g>
    <g
      transform="translate(0 -80)"
      text-anchor="middle"
      font-size="80"
      fill="hsl(42 100% 60%)"
      stroke="hsl(0 0% 11%)"
      stroke-width="8"
      stroke-linejoin="round"
      stroke-linecap="round"
      paint-order="stroke"
      font-family="monospace"
    >
      {#key number}
        <g in:tadaa={{ duration: 500 }}>
          <text role="alert">
            {number}
          </text>
        </g>
      {/key}
    </g>
  </svg>

  <button {onclick} aria-label="Get a new random number up to {max}">
    Echo number
  </button>
</div>

<style>
  div {
    max-inline-size: 26rem;
    margin-inline: auto;

    & > * + * {
      margin-block-start: 0.5rem;
    }

    & > button {
      display: block;
      margin-inline: auto;
    }

    & > svg {
      width: 100%;
      height: 100%;
    }

    & svg .translate,
    & svg .rotate {
      transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    & svg .translate {
      transition-property: translate;
    }

    & svg .rotate {
      transition-property: rotate;
    }

    &:hover svg .rotate {
      rotate: -1deg;
    }

    &:has(button:active) svg .translate {
      translate: 0 -3px;
    }

    &:has(button:active) svg .rotate {
      rotate: 5deg;
    }
  }

  button {
    cursor: pointer;
    font-size: 1em;
    color: hsl(0 0% 99%);
    background: hsl(263 50% 50%);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    position: relative;
    z-index: 0;

    &::before {
      position: absolute;
      inset: 0;
      background: inherit;
      content: "";
      z-index: -1;
      border-radius: inherit;
    }

    &:hover::before {
      animation: pulse 2s ease-out;
    }

    &:active {
      translate: 0 1px;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.8;
      scale: 0.9 1;
    }
    100% {
      opacity: 0;
      scale: 1.25 1.6;
    }
  }
</style>
