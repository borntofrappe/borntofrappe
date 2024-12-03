<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { quadIn } from "svelte/easing";

  let canAnimate = $state(false);
  /** @type SVGAnimateTransformElement */
  let animateTransform;

  onMount(() => {
    canAnimate = true;
    animateTransform.addEventListener("endEvent", handleEnd);

    return () => animateTransform.removeEventListener("endEvent", handleEnd);
  });

  const handleEnd = () => {
    canAnimate = true;
  };

  const handleClick = () => {
    if (!canAnimate) return;

    canAnimate = false;
    animateTransform.beginElement();
  };
</script>

<div>
  <svg viewBox="-50 -50 100 100">
    <title>An arrow slightly off course</title>
    <defs>
      <circle id="flieth-circle" r="50" />
      <clipPath id="flieth-clip-circle">
        <use href="#flieth-circle" />
      </clipPath>
    </defs>

    <g clip-path="url(#flieth-clip-circle)">
      <rect fill="#5691b7" x="-50" y="-50" width="100" height="100" />
      <g transform="translate(0 0)">
        <animateTransform
          bind:this={animateTransform}
          begin="indefinite"
          attributeName="transform"
          type="translate"
          to="-100 0"
          dur="4s"
        />
        <g fill="#b7d7f5">
          <g id="flieth-clouds">
            <path
              transform="translate(0 -25)"
              d="M 0 0 h 37 a 5 5 0 0 0 -5 -5 10 10 0 0 0 -16 0 10 10 0 0 0 -16 5"
            />
            <path
              transform="translate(40 25) scale(-1 1)"
              d="M 0 0 a 5 5 0 0 1 5 -5 6 6 0 0 1 10 -1 6 6 0 0 1 6 6"
            />
            <path
              transform="translate(-50 -10)"
              d="M 0 0 a 5 5 0 0 1 5 -5 6 6 0 0 1 10 -1 6 6 0 0 1 6 6"
            />
            <path
              transform="translate(0 40) scale(-1 1)"
              d="M 0 0 h 37 a 5 5 0 0 0 -5 -5 10 10 0 0 0 -16 0 10 10 0 0 0 -16 5"
            />
          </g>
          <use x="100" href="#flieth-clouds" />
        </g>
      </g>
      <g>
        <g fill="#fefefe">
          <path d="M -10 0 l -2.5 -3 -6 0 2.5 3 -2.5 -3 -3 0 2.5 3" />
          <path
            transform="scale(1 -1)"
            d="M -10 0 l -2.5 -3 -6 0 2.5 3 -2.5 -3 -3 0 2.5 3"
          />
        </g>
        <path stroke="#bf6b4a" fill="none" d="M 22 0 h -44" />
        <path
          fill="#1a1311"
          stroke="#1a1311"
          d="M 19 0 l 2.5 -3 6 3 -6 3 -2.5 -3"
        />
      </g>
    </g>
  </svg>

  {#if canAnimate}
    <button
      in:fly={{ delay: 500 }}
      out:fly={{ x: -20, duration: 175, easing: quadIn }}
      onclick={handleClick}
    >
      Flieth
    </button>
  {/if}
</div>

<style>
  svg {
    display: block;
  }

  div {
    position: relative;
  }

  button {
    cursor: pointer;
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fefefe;
    background: #1a1311;
    border: none;
    border-radius: 0.25rem;
    padding: 0.2rem 0.75rem;
  }
</style>
