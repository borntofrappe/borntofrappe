<script>
  let animate = $state(false);
  /** @type { SVGPathElement }*/
  let path;

  $effect(() => {
    if (path) {
      if (animate) {
        path.querySelector("animate")?.beginElement();
      } else {
        path.querySelector("animate")?.endElement();
      }
    }
  });
</script>

<div>
  <label>
    <input type="checkbox" bind:checked={animate} />
    Toggle animation
  </label>

  <svg class:animate viewBox="-44 -25 88 88">
    <g fill="none" stroke="currentColor" stroke-width="0.5">
      <path d="M 0 -5 v 5 M 0 25 v 5" />
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g stroke-width="4">
        <g transform="translate(0 -20)">
          <path
            transform="translate(-4 5) rotate(-45) scale(0.8)"
            d="M 0 0 c -10 0 -0 -10 0 -10 0 0 10 10 0 10"
          />
          <path
            transform="translate(4 4) rotate(30) scale(0.8)"
            d="M 0 0 c -10 0 -0 -10 0 -10 0 0 10 10 0 10"
          />
          <path d="M 0 0 c 8 0 16 15 0 15 -14 -1 -6 -15 0 -15" />
        </g>
        <path d="M 0 0 c 10 0 15 25 0 25 -15 0 -10 -25 0 -25" />
      </g>
      <g stroke-width="5">
        <g transform="translate(0 30)">
          <path
            bind:this={path}
            d="M 0 0 c -4 5 -3 12 0 15 c 5 5 10 15 -4 15 c 2 -5 5 -10 0 -15 c -4 -5 -4 -10 4 -15"
          >
            <animate
              attributeName="d"
              dur="2s"
              begin="indefinite"
              repeatCount="indefinite"
              fill="freeze"
              values="
                        M 0 0 c -4 5 -3 12 0 15 c 5 5 10 15 -4 15 c 2 -5 5 -10 0 -15 c -4 -5 -4 -10 4 -15;
                        M 0 0 c 4 5 3 12 0 15 c -5 5 -10 15 4 15 c -2 -5 -5 -10 0 -15 c 4 -5 4 -10 -4 -15;
                        M 0 0 c -4 5 -3 12 0 15 c 5 5 10 15 -4 15 c 2 -5 5 -10 0 -15 c -4 -5 -4 -10 4 -15;
                        "
            />
          </path>
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
  }
</style>
