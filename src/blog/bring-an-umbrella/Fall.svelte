<script>
  let { patternId = "pattern-drop-10" } = $props();

  let animate = $state(false);
</script>

<div>
  <label>
    <input type="checkbox" bind:checked={animate} />
    <span>Toggle animation</span>
  </label>

  <svg class:animate viewBox="0 0 100 100">
    <defs>
      <pattern
        id="fall-pattern-drop"
        viewBox="0 0 10 10"
        width="0.1"
        height="0.1"
      >
        <g transform="translate(3 2.5)">
          <path
            fill="#52a2bd"
            d="M 2 0 c 1 1 2 2 2 3 c 0 2 -2 2 -2 2 c 0 0 -2 0 -2 -2 c 0 -1 1 -2 2 -3"
          />
        </g>
      </pattern>
      <pattern
        id="fall-pattern-drop-10"
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
    </defs>
    <rect fill="url(#fall-{patternId})" y="-10" width="100" height="110" />
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
  }

  rect {
    animation: fall 0.5s linear infinite;
    animation-play-state: paused;
  }

  svg.animate rect {
    animation-play-state: running;
  }

  @keyframes fall {
    to {
      transform: translateY(10px);
    }
  }
</style>
