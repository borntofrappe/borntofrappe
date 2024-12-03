<script>
  /** @typedef { 'jump' | 'flap' | 'lift' } Animation */
  /** @type {{ animations: Animation[] }} */
  let { animations = ["jump", "flap", "lift"] } = $props();
  let flutter = $state(false);

  let id = $state(`mayo-${animations.join("-")}`);
</script>

<div>
  <label>
    <input type="checkbox" bind:checked={flutter} />
    <span>Toggle animation</span>
  </label>

  <svg class:flutter viewBox="-60 -70 120 120">
    <defs>
      <path
        id="{id}-leg"
        d="M 0 0 l 0 7 7 7 -5.5 -3 -1.5 3 -1.5 -3 -5.5 3 7 -7"
      />
      <path
        id="{id}-wing"
        d="M 0 0 c 6 -5 14 -8 20 0 -5 5 -2 10 -12 10 -2 0 -8 0 -8 -10"
      />
    </defs>

    <g class:lift={animations.includes("lift")}>
      <g
        fill="#fd971b"
        stroke="#fd971b"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g transform="translate(0 17)">
          <use href="#{id}-leg" x="-12" />
          <use href="#{id}-leg" x="12" />
        </g>
      </g>

      <g class:jump={animations.includes("jump")}>
        <g
          fill="#f0d584"
          stroke="#f0d584"
          stroke-width="8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <g transform="translate(0 -10)">
            <g transform="translate(25 0)">
              <use
                class:flap={animations.includes("flap")}
                href="#{id}-wing"
                transform="rotate(90)"
              />
            </g>
            <g transform="scale(-1 1) translate(25 0)">
              <use
                class:flap={animations.includes("flap")}
                href="#{id}-wing"
                transform="rotate(90)"
              />
            </g>
          </g>
        </g>

        <ellipse rx="28" ry="25" fill="#f9f5d0" />

        <g transform="translate(0 -30)">
          <g transform="translate(0 -20)">
            <path
              d="M 0 0 c 5 0 11 -2 11 -5 0 5 2.5 5 5 3 0 5 -10 7 -16 2"
              fill="#f9f5d0"
              stroke="#f9f5d0"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
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

          <g transform="translate(0 8)">
            <g stroke-linecap="round" stroke-linejoin="round">
              <g fill="#fd971b" stroke="#fd971b" stroke-width="3">
                <path d="M -9 0 c 6 6 12 6 18 0 -7 -5 -11 -5 -18 0" />
              </g>
              <g fill="#fc531c" stroke="#fc531c" stroke-width="1">
                <path d="M -6 0 c 3 4 9 4 12 0 -4 1 -8 1 -12 0" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  label {
    display: block;
  }

  input {
    inline-size: 1em;
    block-size: 1em;
  }

  svg {
    display: block;
    --duration: 3.5s;
  }

  .blink,
  .jump,
  .flap,
  .lift {
    animation-duration: var(--duration, 4s);
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
    animation-play-state: paused;
  }

  .flutter .blink,
  .flutter .jump,
  .flutter .flap,
  .flutter .lift {
    animation-play-state: running;
  }

  .blink {
    animation-name: blink;
  }

  .jump {
    animation-name: jump;
  }

  .flap {
    animation-name: flap;
  }

  .lift {
    animation-name: lift;
  }

  @keyframes blink {
    30%,
    34% {
      transform: scaleY(0);
    }
    28%,
    32%,
    36% {
      transform: scaleY(1);
    }
  }

  @keyframes jump {
    0%,
    45% {
      transform: translateY(0px);
    }
    55% {
      transform: translateY(5px);
    }
    70%,
    90% {
      transform: translateY(-2px);
    }
    95% {
      transform: translateY(1px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes flap {
    0%,
    60% {
      transform: rotate(90deg);
    }

    65%,
    75%,
    85% {
      transform: rotate(0deg);
    }

    70%,
    80%,
    95%,
    100% {
      transform: rotate(90deg);
    }
  }

  @keyframes lift {
    0%,
    55% {
      transform: translateY(0px);
    }
    70%,
    90% {
      transform: translateY(-1px);
    }
    95% {
      transform: translateY(1px);
    }
    100% {
      transform: translateY(0px);
    }
  }
</style>
