<script>
  let value = $state(50);
  let transition = $derived(value === 100);
</script>

<div>
  <label>
    <span>Drag the handle to send the message.</span>
    <input type="range" bind:value min="0" max="100" step="1" />
  </label>

  <svg class:transition style="display: block;" viewBox="0 0 380 280">
    <defs>
      <symbol
        id="source-order-sparkle"
        viewBox="-5 -5 10 10"
        x="-9"
        y="-9"
        width="18"
        height="18"
      >
        <path
          fill="currentColor"
          d="M -5 0 A 5 5 0 0 0 0 -5 A 5 5 0 0 0 5 0 A 5 5 0 0 0 0 5 A 5 5 0 0 0 -5 0 Z"
        />
      </symbol>
      <symbol
        id="source-order-almond"
        viewBox="-6 -4 12 8"
        x="-12"
        y="-8"
        width="24"
        height="16"
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          d="M -5 0 C -3.5 -2 -2 -3 0 -3 C 2 -3 3.5 -2 5 0 C 3.5 2 2 3 0 3 C -2 3 -3.5 2 -5 0 Z"
        />
      </symbol>
    </defs>

    <g style="color: hsl(48 95% 76%);">
      <use
        transform="translate(40 110) scale(1.2) rotate(40)"
        href="#source-order-almond"
      />
      <use
        transform="translate(320 85) scale(0.9) rotate(-35)"
        href="#source-order-almond"
      />
      <use
        transform="translate(310 180) rotate(20)"
        href="#source-order-almond"
      />
      <use transform="translate(120 20)" href="#source-order-sparkle" />
      <use
        transform="translate(320 115) scale(0.9)"
        href="#source-order-sparkle"
      />
      <g fill="currentColor">
        <circle transform="translate(55 140) scale(0.7)" r="7" />
        <circle transform="translate(140 220) scale(0.7)" r="7" />
        <circle transform="translate(170 25) scale(0.8)" r="7" />
        <circle transform="translate(270 200) scale(0.7)" r="7" />
        <circle transform="translate(290 40) scale(0.6)" r="7" />
      </g>
    </g>
    <g style="color: hsl(36 77% 49%);" fill="currentColor">
      <circle transform="translate(60 55) scale(0.7)" r="7" />
      <circle transform="translate(95 190) scale(0.8)" r="7" />
      <circle transform="translate(270 30) scale(0.4)" r="7" />
      <circle transform="translate(320 140) scale(0.7)" r="7" />
    </g>

    <g transform="translate(190 265)">
      <path
        fill="hsl(15 86% 30%)"
        d="M -7.5 0 L -7.5 -120 L 7.5 -120 L 7.5 0 L -7.5 0 Z"
      />

      <path
        transform="translate(-60 0) scale(0.85)"
        style="color: hsl(22 82% 39%);"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        d="M 0 0 A 27 27 0 0 1 40 -30 30 30 0 0 1 70 -20 20 20 0 0 1 90 -10 20 20 0 0 1 110 0 L 0 0 Z"
      />
      <path
        transform="translate(-20 0)"
        style="color: hsl(29 80% 44%);"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        d="M 0 0 A 27 27 0 0 1 40 -30 30 30 0 0 1 70 -20 20 20 0 0 1 90 -10 20 20 0 0 1 110 0 L 0 0 Z"
      />

      <path
        transform="translate(0 -120)"
        fill="hsl(48 95% 76%)"
        d="M 0 0 L 65 0 A 5 5 0 0 0 65 -10 L -80 -10 A 5 5 0 0 0 -80 0 L 0 0"
      />
      <g transform="translate(0 -130)">
        <path
          fill="hsl(15 86% 30%)"
          d="M 0 0 L 0 -40 A 30 30 0 0 0 -30 -70 A 30 30 0 0 0 -60 -40 L -60 0"
        />

        <g transform="translate(-90 -25)">
          <g transform="translate({value} 0)">
            <g fill="hsl(0 0% 99%)">
              <path
                fill="hsl(36 77% 49%)"
                d="M -40 -20 A 5 5 0 0 1 -35 -25 L 35 -25 A 5 5 0 0 1 40 -20 L 40 20 A 5 5 0 0 1 35 25 L -35 25 A 5 5 0 0 1 -40 20 L -40 -20 Z"
              />
              <path
                fill="hsl(29 80% 44%)"
                d="M -40 20 L 0 2.5 40 20 A 5 5 0 0 1 35 25 L -35 25 A 5 5 0 0 1 -40 20 Z"
              />
              <path
                fill="hsl(42 87% 55%)"
                d="M -40 -16 L -40 -20 A 5 5 0 0 1 -35 -25 L 35 -25 A 5 5 0 0 1 40 -20 L 40 -16 L 0 7.5 L -40 -16 Z"
              />
            </g>
          </g>
        </g>

        <path
          fill="hsl(22 82% 39%)"
          d="M 0 0 L 0 -40 A 30 30 0 0 0 -30 -70 L 30 -70 A 30 30 0 0 1 60 -40 L 60 0"
        />

        <g transform="translate(20 -55)">
          <g class="rotate" transform="rotate(90)">
            <path
              fill="hsl(48 95% 76%)"
              d="M 4 -50 L 20 -50 A 5 5 0 0 1 25 -45 L 25 -35 A 5 5 0 0 1 20 -30 L 4 -30 Z"
            />
            <path
              fill="hsl(15 86% 30%)"
              d="M 4 0 A 4 4 0 0 1 -4 0 L -4 -50 A 4 4 0 0 1 4 -50 L 4 0"
            />
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

  label input {
    margin-block-start: 0.5rem;
    display: block;
    inline-size: 100%;
  }

  svg .rotate {
    transition: transform 0.25s cubic-bezier(0.34, 1.36, 0.5, 1);
    transform: rotate(90deg);
  }

  svg.transition .rotate {
    transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: rotate(0deg);
  }
</style>
