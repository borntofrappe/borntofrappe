<script>
  /** @type {SVGAnimateElement} */
  let animate;
  let checked = $state(false);

  /** @type {(start:boolean) => void} */
  const handleAnimation = (start) => {
    if (animate === null) return;

    if (start) {
      animate.beginElement();
    } else {
      animate.endElement();
    }
  };

  $effect(() => {
    handleAnimation(checked);
  });
</script>

<div>
  <label>
    <input type="checkbox" bind:checked />
    <span>Toggle animation</span>
  </label>

  <svg viewBox="0 0 30 25">
    <g
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M 2.5 4.5 a 2 2 0 0 0 0 -4 2 2 0 0 0 0 4 v 20" />
      <g transform="translate(2.5 4.5)">
        <g transform="translate(-0.5 7.5)">
          <path
            d="M 0 0 q 2 0.5 4 0 m 1.5 -4 c 6 2 14 -2 20 0 q 2 0 -2 3 2 1 3 3 c -14 -0.5 -14 2 -21 1 q 4 -3.5 0 -7 -4 4 0 7 m 4.5 -5 a 1 1 0 0 0 0 2 1 1 0 0 0 0 -2 m 3 -1 q 1 3.5 0 5.5 m 2 -6 q 1 3.5 0.5 5.5 h 0.5 a 1.5 1.5 0 0 0 0 -3 1.5 1.5 0 0 0 0 -3 h 2 a 1.5 1.5 0 0 1 0 3 h -1 h 1 a 1.5 1.5 0 0 1 0 3 m 0 -6 h 2 a 1.5 1.5 0 0 1 0 3 h -1 h 1 a 1.5 1.5 0 0 1 0 3"
          >
            <animate
              bind:this={animate}
              attributeName="d"
              dur="2s"
              values="
						M 0 0 q 2 0.5 4 0 m 1.5 -4 c 6 2 14 -2 20 0 q 2 0 -2 3 2 1 3 3 c -14 -0.5 -14 2 -21 1 q 4 -3.5 0 -7 -4 4 0 7 m 4.5 -5 a 1 1 0 0 0 0 2 1 1 0 0 0 0 -2 m 3 -1 q 1 3.5 0 5.5 m 2 -6 q 1 3.5 0.5 5.5 h 0.5 a 1.5 1.5 0 0 0 0 -3 1.5 1.5 0 0 0 0 -3 h 2 a 1.5 1.5 0 0 1 0 3 h -1 h 1 a 1.5 1.5 0 0 1 0 3 m 0 -6 h 2 a 1.5 1.5 0 0 1 0 3 h -1 h 1 a 1.5 1.5 0 0 1 0 3; 
						M 0 0 q 3 0 4.5 -1 m 0.5 -4 c 6 -3 14 0 20 -1 q 2 0 -2 3.5 0 1 3 2.5 c -14 0.5 -10 -2 -20 2 q 3 -3.5 -1 -7 -3 4 1 7 m 4.5 -6.5 a 1 1 0 0 0 0 2 1 1 0 0 0 0 -2 m 3.5 -1.5 q 1.5 2 0 5.5 m 2 -5.5 q 1 2 0 5.5 h 1 a 1.3 1.3 0 0 0 0 -2.6 1.25 1.25 0 0 0 0 -2.5 h 2 a 1.3 1.3 0 0 1 0 2.6 h -1 h 0.5 a 1.3 1.3 0 0 1 0 2.7 m 0 -5.4 h 2 a 1.3 1.3 0 0 1 0 2.8 h -1.5 h 1.25 a 1.4 1.4 0 0 1 0 2.9; 
						M 0 0 q 2 0.5 4 0 m 1.5 -4 c 6 2 14 -2 20 0 q 2 0 -2 3 2 1 3 3 c -14 -0.5 -14 2 -21 1 q 4 -3.5 0 -7 -4 4 0 7 m 4.5 -5 a 1 1 0 0 0 0 2 1 1 0 0 0 0 -2 m 3 -1 q 1 3.5 0 5.5 m 2 -6 q 1 3.5 0.5 5.5 h 0.5 a 1.5 1.5 0 0 0 0 -3 1.5 1.5 0 0 0 0 -3 h 2 a 1.5 1.5 0 0 1 0 3 h -1 h 1 a 1.5 1.5 0 0 1 0 3 m 0 -6 h 2 a 1.5 1.5 0 0 1 0 3 h -1 h 1 a 1.5 1.5 0 0 1 0 3
						"
              begin="indefinite"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
              fill="freeze"
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
