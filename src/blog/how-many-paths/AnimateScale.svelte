<script>
  let animate = $state(false);
</script>

<div>
  <label>
    <input type="checkbox" bind:checked={animate} />
    Toggle animation
  </label>

  <svg class:animate viewBox="-20 -5 40 40">
    <g
      fill="currentColor"
      stroke="currentColor"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M 0 0 c -4 5 -3 12 0 15 c 5 5 10 15 -4 15 c 2 -5 5 -10 0 -15 c -4 -5 -4 -10 4 -15"
      />
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
  }

  path {
    animation: float 2s infinite paused;
    transform: scale(1, 1);
  }
  .animate path {
    animation-play-state: running;
  }

  @keyframes float {
    50% {
      transform: scale(-1, 1);
    }
  }
</style>
