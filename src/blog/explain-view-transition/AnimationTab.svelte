<script>
  let t = $state(0);

  /**
   * @param {number} x
   */
  const easeOutSine = (x) => Math.sin((x * Math.PI) / 2);
  /**
   * @param {number} x
   */
  const easeInSine = (x) => 1 - Math.cos((x * Math.PI) / 2);
</script>

<div>
  <label>
    <span>Animate view</span>
    <input type="range" min="0" max="1" bind:value={t} step="0.05" />
  </label>
  <svg style="display: block;" viewBox="0 0 80 40">
    <svg x="5" y="5" width="10" height="30" viewBox="-5 -15 10 30">
      <g
        fill="currentColor"
        font-family="monospace"
        font-size="10"
        font-weight="700"
        text-anchor="middle"
      >
        <text
          transform="translate(0 {(1 - easeOutSine(t)) * 12 * -1}) scale({0.2 +
            easeOutSine(t) * 0.8})"
          y="3.8">1</text
        >
        <text
          transform="translate(0 {easeInSine(t) * 12}) scale({1 -
            easeInSine(t) * 0.8})"
          y="3.8">0</text
        >
      </g>
    </svg>

    <svg x="20" y="5" width="60" height="30" viewBox="-5 -20 60 37">
      <g
        transform="translate(20 0)"
        style="color: var(--accent-time, currentColor)"
      >
        <path
          transform="translate({t * 34} 0)"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="0.3"
          d="M 0 16 0 -16.5 -1.5 -18 0 -19.5 1.5 -18 0 -16.5"
        />
      </g>
      <g
        transform="translate(37 -3)"
        style="color: var(--accent-out, currentColor);"
        fill="currentColor"
      >
        <path opacity="0.2" d="M -17 0 C -12.92 0 -3.74 0 17 -10 L 17 0" />
        <path stroke="currentColor" stroke-width="0.3" d="M -17 0 17 0" />
        <circle cx="-17" r="0.8" />
        <circle cx="17" r="0.8" />
      </g>
      <g
        transform="translate(37 13)"
        style="color: var(--accent-in, currentColor);"
        fill="currentColor"
      >
        <path opacity="0.2" d="M -17 0 -17 -10 C -12.92 -10 -3.74 -10 17 0" />
        <path stroke="currentColor" stroke-width="0.3" d="M -17 0 17 0" />
        <circle cx="-17" r="0.8" />
        <circle cx="17" r="0.8" />
      </g>
      <g
        fill="currentColor"
        font-family="monospace"
        font-weight="700"
        font-size="4"
      >
        <text y="-6">old</text>
        <text y="10">new</text>

        <text transform="translate(37 -6)" text-anchor="middle" textLength="22"
          >slide-out</text
        >
        <text transform="translate(37 10)" text-anchor="middle" textLength="22"
          >slide-in</text
        >
      </g>
    </svg>
  </svg>
</div>

<style>
  div {
    box-sizing: border-box;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    max-inline-size: 40rem;
    margin-inline: auto;
    color: hsl(0 0% 12%);
    background: hsl(0 0% 100%);
    --_accent-color: hsl(3 71% 41%);
  }

  div > * + * {
    margin-block-start: 0.5rem;
  }

  label {
    font-weight: 700;
  }

  label > input {
    margin-block-start: 0.5rem;
  }

  input {
    inline-size: 100%;
    accent-color: var(--_accent-color);
  }

  svg {
    --accent-out: hsl(187 100% 42%);
    --accent-in: hsl(14 100% 57%);
    --accent-time: var(--_accent-color);
  }

  label,
  svg text {
    font-weight: 400;
  }

  @media (prefers-color-scheme: dark) {
    div {
      color: hsl(0 0% 89%);
      background: hsl(0 0% 12%);
      --_accent-color: hsl(3 70% 83%);
    }

    label,
    svg text {
      font-weight: 700;
    }
  }
</style>
