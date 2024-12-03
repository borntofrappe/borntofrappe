<script>
  let fill = $state(false);
</script>

<div>
  <label>
    <input bind:checked={fill} type="checkbox" />
    <span>Fill the canvas</span>
    <svg width="1em" height="1em" viewBox="-50 -50 100 100">
      <circle fill="hsl(49 99% 57%)" r="50" />
      <path
        fill="hsl(42 100% 55%)"
        d="M 0 -50 A 50 50 0 0 0 0 50 A 55 55 0 0 1 0 -50"
      />
      <g stroke-linecap="round" stroke-linejoin="round">
        <g fill="hsl(33 97% 47%)" stroke="hsl(33 97% 47%)" stroke-width="3">
          <path
            id="smile-eyebrow"
            transform="translate(-23 -32) rotate(155)"
            d="M -10 0 A 18 18 0 0 0 10 0 A 40 40 0 0 1 -10 0"
          />
          <use transform="scale(-1 1)" href="#smile-eyebrow" />
        </g>
        <g stroke-width="4">
          <g transform="translate(-21 -13)">
            <circle fill="hsl(16 94% 27%)" stroke="hsl(16 94% 27%)" r="7" />
            <g class="scale" transform="scale(0)">
              <path
                transform="translate(-2 -6) rotate(-15)"
                fill="hsl(0 93% 65%)"
                stroke="hsl(0 93% 65%)"
                d="M 0 13 C -14.11 19.41 -14.11 19.41 -12.37 4.01 C -22.83 -7.42 -22.83 -7.42 -7.65 -10.52 C -0.01 -24 -0.01 -24 7.64 -10.52 C 22.82 -7.42 22.82 -7.42 12.36 4.01 C 14.1 19.41 14.1 19.41 0 13"
              />
            </g>
          </g>
          <g transform="scale(-1 1) translate(-21 -13)">
            <circle fill="hsl(16 94% 27%)" stroke="hsl(16 94% 27%)" r="7" />
            <g class="scale" transform="scale(0)">
              <path
                transform="translate(-2 -6) rotate(-15)"
                fill="hsl(0 93% 65%)"
                stroke="hsl(0 93% 65%)"
                d="M 0 13 C -14.11 19.41 -14.11 19.41 -12.37 4.01 C -22.83 -7.42 -22.83 -7.42 -7.65 -10.52 C -0.01 -24 -0.01 -24 7.64 -10.52 C 22.82 -7.42 22.82 -7.42 12.36 4.01 C 14.1 19.41 14.1 19.41 0 13"
              />
            </g>
          </g>
          <path
            transform="translate(0 14)"
            fill="hsl(16 94% 27%)"
            stroke="hsl(16 94% 27%)"
            d="M -17.5 0 A 17 17 0 0 0 17.5 0 A 75 75 0 0 1 -17.5 0"
          />
        </g>
      </g>
    </svg>
  </label>

  <svg class:fill style="display: block;" viewBox="-10 -10 120 90">
    <defs>
      <linearGradient
        id="user-space-on-use-gradient"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="hsl(58 100% 61%)" offset="0" />
        <stop stop-color="hsl(44 99% 59%)" offset="0.25" />
        <stop stop-color="hsl(7 78% 68%)" offset="0.75" />
        <stop stop-color="hsl(303 56% 53%)" offset="1" />
      </linearGradient>
    </defs>
    <rect fill="hsl(0 0% 90%)" x="-10" y="-10" width="120" height="90" />
    <rect
      class="fade"
      opacity="0"
      fill="url(#user-space-on-use-gradient)"
      width="100"
      height="70"
    />
    <g fill="url(#user-space-on-use-gradient)">
      <circle cx="22" cy="22" r="17" />
      <path
        transform="translate(-1 -1)"
        stroke="url(#user-space-on-use-gradient)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 45 65 65 35 85 65 Z M 65 65 80 45 95 65 Z"
      />
    </g>
  </svg>
</div>

<style>
  div {
    max-inline-size: 30rem;
    margin-inline: auto;
  }

  div > * + * {
    margin-block-start: 0.5rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input {
    inline-size: 1em;
    block-size: 1em;
    accent-color: hsl(0 93% 65%);
  }

  label > svg {
    inline-size: 2em;
    block-size: 2em;
  }

  input ~ svg .scale {
    transform: scale(0);
    transition-property: scale, transform;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
  }

  input:checked ~ svg .scale {
    transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    scale: 1.1;
    transform: scale(1);
  }

  div > svg .fade {
    transition: opacity 0.25s 0.1s cubic-bezier(0.37, 0, 0.63, 1);
    opacity: 0;
  }

  div > svg.fill .fade {
    opacity: 1;
  }
</style>
