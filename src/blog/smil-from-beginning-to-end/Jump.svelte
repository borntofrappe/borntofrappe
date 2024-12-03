<script>
  import { onMount } from "svelte";

  /** @type {{ repeatCount: number }}*/
  let { repeatCount = 0 } = $props();

  let id = $derived(`jump${repeatCount}`);

  /** @type { SVGAnimateElement }*/
  let animate;
  let disabled = $state(false);

  onMount(() => {
    animate.addEventListener("endEvent", () => {
      disabled = false;
    });
  });

  const handleAnimation = () => {
    if (disabled) return;

    disabled = true;
    animate.beginElement();
  };
</script>

<div>
  <button {disabled} onclick={handleAnimation}>Animate</button>

  <svg viewBox="0 0 80 50">
    <defs>
      <pattern
        id="jump-pattern-check"
        viewBox="0 0 2 2"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <rect width="2" height="2" fill="hsl(0, 0%, 86%)" />
        <g fill="hsl(0, 0%, 84%)">
          <rect width="1" height="1" />
          <rect x="1" y="1" width="1" height="1" />
        </g>
      </pattern>
      <symbol id="jump-hero" viewBox="-5.4 -5.4 10.8 10.8">
        <g
          stroke="hsl(0, 0%, 20%)"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect
            fill="hsl(0, 0%, 97%)"
            x="-5"
            y="-5"
            width="10"
            height="10"
            rx="1"
          />
          <path d="M -2 -2.5 v 2 M 2 -2.5 v 2 M -1.5 2 q 1.5 1 3 0" />
        </g>
      </symbol>
    </defs>

    <rect width="80" height="50" fill="url(#jump-pattern-check)" />

    <g transform="translate(40 37.75)">
      <g>
        <animateTransform
          begin="{id}.begin"
          attributeName="transform"
          type="translate"
          values="0 0; 0 -10; 0 0;"
          dur="0.7s"
          calcMode="spline"
          keySplines="0.25 0 0.25 1; 0.55 0 0.25 1;"
        />
        <use href="#jump-hero" x="-4" y="-8" width="8" height="8" />
      </g>
    </g>

    <g transform="translate(0 30)">
      <g fill="none" stroke="hsl(0, 0%, 20%)" stroke-linecap="round">
        <path stroke-width="0.25" d="M 0 7.75 l 80 0" />
        <path stroke-width="0.5" d="M 0 0 c 20 10 60 10 80 0">
          <animate
            bind:this={animate}
            {id}
            {repeatCount}
            begin="indefinite;"
            restart="whenNotActive"
            attributeName="d"
            dur="1s"
            values="M 0 0 c 20 10 60 10 80 0; M 0 0 c 20 -10 60 -10 80 0; M 0 0 c 20 10 60 10 80 0;"
          />
        </path>
      </g>
    </g>

    <g transform="translate(40 37.75)">
      <g>
        <animateTransform
          begin="{id}.begin"
          attributeName="transform"
          type="translate"
          values="0 0; 0 -10; 0 0;"
          dur="0.7s"
          calcMode="spline"
          keySplines="0.25 0 0.25 1; 0.55 0 0.25 1;"
        />
        <use href="#jump-hero" x="-4" y="-8" width="8" height="8">
          <animate
            begin="{id}.begin"
            attributeName="opacity"
            values="1; 0; 1"
            dur="1s"
            calcMode="discrete"
            keyTimes="0; 0.5; 1"
          />
        </use>
      </g>
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  button {
    display: block;
    margin-inline: auto;
    color: hsl(0, 0%, 92%);
    background: hsl(0, 0%, 10%);
    border: none;
    border-radius: 2rem;
    font-weight: 700;
    padding: 0.25rem 0.75rem;
    transition:
      opacity 0.15s cubic-bezier(0.37, 0, 0.63, 1),
      transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
  }

  button:disabled {
    opacity: 0.7;
    transform: scale(0.95);
  }

  svg {
    display: block;
  }
</style>
