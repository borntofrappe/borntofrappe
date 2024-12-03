<script>
  let reveal = $state(false);
</script>

<div>
  <label>
    <input bind:checked={reveal} type="checkbox" />
    <svg width="3em" height="1em" viewBox="-0.5 -0.5 15.5 5">
      <defs>
        <path
          id="stop-opacity-sunglasses"
          d="M 0 2 A 2 2 0 0 1 2 0 L 14.5 0 14.5 1.5 A 2.5 2.5 0 0 1 9.5 1.5 L 9.5 0 7.5 0 L 7.5 1.5 A 2.5 2.5 0 0 1 2.5 1.5 L 2.5 0 2 0 A 2 2 0 0 0 0 2"
        />
      </defs>
      <use href="#stop-opacity-sunglasses" fill="currentColor" opacity="0.5" />
      <use
        href="#stop-opacity-sunglasses"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span>See through</span>
  </label>

  <svg class:reveal style="display: block;" viewBox="-0.5 -0.5 1 1">
    <defs>
      <radialGradient id="stop-opacity-gradient">
        <stop stop-color="yellow" offset="0.5" />
        <stop stop-color="orange" offset="1" />
      </radialGradient>
      <radialGradient id="stop-opacity-gradient-sun">
        <stop stop-color="yellow" offset="0.4" />
        <stop stop-color="orange" offset="1" />
      </radialGradient>
    </defs>
    <path
      fill="url(#stop-opacity-gradient-sun) orange"
      d=" M 0 0.24 C -0.08 0.28 -0.08 0.28 -0.12 0.2 C -0.22 0.21 -0.22 0.21 -0.21 0.11 C -0.29 0.07 -0.29 0.07 -0.24 0 C -0.29 -0.08 -0.29 -0.08 -0.21 -0.13 C -0.22 -0.22 -0.22 -0.22 -0.13 -0.21 C -0.08 -0.29 -0.08 -0.29 -0.01 -0.24 C 0.07 -0.29 0.07 -0.29 0.12 -0.21 C 0.21 -0.22 0.21 -0.22 0.2 -0.13 C 0.28 -0.08 0.28 -0.08 0.24 -0.01 C 0.28 0.07 0.28 0.07 0.2 0.11 C 0.21 0.21 0.21 0.21 0.11 0.2 C 0.07 0.28 0.07 0.28 0 0.24"
    />
    <circle r="0.2" fill="yellow" />
    <g transform="translate(0 -0.01)" fill="darkslategrey">
      <circle r="0.02" cx="-0.07" />
      <circle r="0.02" cx="0.07" />
    </g>
    <g transform="translate(0 0.05)" fill="tomato">
      <circle r="0.03" cx="-0.1" />
      <circle r="0.03" cx="0.1" />
    </g>
    <path
      transform="translate(0 0.05)"
      fill="darkslategrey"
      d="M -0.04 0 A 0.02 0.02 0 0 0 0.04 0"
    />
    <circle r="0.5" fill="url(#stop-opacity-gradient)" width="1" height="1" />
  </svg>
</div>

<style>
  div {
    max-inline-size: 20rem;
    margin-inline: auto;
  }

  div > * + * {
    margin-block-start: 0.5rem;
  }

  svg #stop-opacity-gradient stop:nth-of-type(1) {
    stop-opacity: 1;
    transition: stop-opacity 0.4s cubic-bezier(0.37, 0, 0.63, 1);
  }

  svg.reveal #stop-opacity-gradient stop:nth-of-type(1) {
    stop-opacity: 0;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  input {
    inline-size: 1.25em;
    block-size: 1.25em;
    color: inherit;
    accent-color: currentColor;
  }
</style>
