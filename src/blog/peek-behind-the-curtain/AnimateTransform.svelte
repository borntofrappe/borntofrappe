<script>
  import { onMount } from "svelte";

  /** @type {{ repeatEvent: boolean}}*/
  let { repeatEvent = true } = $props();
  /** @type { SVGSVGElement }*/
  let svg;
  let animate = $state(false);

  onMount(() => {
    if (repeatEvent === false) return;
    svg
      .querySelector("animateTransform")
      ?.addEventListener("repeatEvent", () => {
        const baseLightness = Math.random() > 0.75 ? 5 : 85;
        const lightness = baseLightness + Math.floor(Math.random() * 15);
        const color = `hsl(0, 0%, ${lightness}%)`;
        svg.style.color = color;
      });
  });

  const handleAnimation = (begin = false) => {
    if (svg === null) return;

    const animateTransform = /** @type SVGAnimateElement */ (
      svg.querySelector("animateTransform")
    );
    if (begin) {
      animateTransform.beginElement();
    } else {
      animateTransform.endElement();
    }
  };

  $effect(() => {
    handleAnimation(animate);
  });
</script>

<div>
  <label>
    <input bind:checked={animate} type="checkbox" /> Toggle animation
  </label>

  <svg bind:this={svg} viewBox="0 0 100 60">
    <g transform="translate(50 32.5)">
      <g transform="translate(-100 0)">
        <animateTransform
          attributeName="transform"
          id="translate"
          type="translate"
          values="-100 0; 100 0"
          dur="7s"
          begin="indefinite"
          repeatCount="indefinite"
        />
        <g
          fill="none"
          stroke="#27241D"
          stroke-width="3.5"
          stroke-linecap="round"
        >
          <path d="M -12 3 l -3.5 5.5" />
          <path d="M -7.5 5.5 l -3.5 6" />
          <path d="M 8.5 5.5 l 3.5 5" />
          <path d="M 11.5 3.5 l 4 4" />
        </g>
        <g>
          <g fill="#27241D">
            <circle r="9" />
            <circle r="9" cx="4.5" cy="4.5" />
            <circle r="9" cx="-4.5" cy="4.5" />
            <circle r="9" cx="-4.5" cy="-4.5" />
            <circle r="9" cx="4.5" cy="-5" />
            <circle r="9" cx="10" />
            <circle r="9" cx="-10" cy="1" />
          </g>
          <g fill="currentColor">
            <circle r="8" />
            <circle r="8" cx="4.5" cy="4.5" />
            <circle r="8" cx="-4.5" cy="4.5" />
            <circle r="8" cx="-4.5" cy="-4.5" />
            <circle r="8" cx="4.5" cy="-5" />
            <circle r="8" cx="10" />
            <circle r="8" cx="-10" cy="1" />
          </g>
        </g>
        <g transform="translate(8 -5) rotate(-10)">
          <ellipse
            fill="#FACDCD"
            stroke="#27241D"
            stroke-width="0.75"
            rx="7"
            ry="8.5"
          />
          <g stroke="#27241D" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M 0 5.5 v 1 q 0.75 0.75 1.5 0 m -1.5 0 q -0.75 0.75 -1.5 0"
              fill="none"
              stroke-width="0.75"
            />
            <path
              d="M -1 4.5 c 0.5 -0.5 1.5 -0.5 2 0 -0.5 0.75 -1.5 0.75 -2 0"
              fill="#27241D"
              stroke-width="1"
            />
          </g>

          <g fill="#27241D">
            <circle r="1.25" cx="-2.75" cy="2" />
            <circle fill="#27241D" r="1.25" cx="2.75" cy="2" />
          </g>
          <g>
            <g fill="#27241D">
              <circle r="4.75" cx="-5" cy="-2" />
              <circle r="4.75" cx="-2.5" cy="-5.5" />
              <circle r="4.75" cx="2.5" cy="-5.5" />
              <circle r="4.75" cy="-1.75" />
              <circle r="4.75" cx="5" cy="-2" />
            </g>
            <g fill="currentColor">
              <circle r="4" cx="-5" cy="-2" />
              <circle fill="black" opacity="0.025" r="4" cx="-5" cy="-2" />
              <circle r="4" cx="-2.5" cy="-5.5" />
              <circle fill="black" opacity="0.025" r="4" cx="-2.5" cy="-5.5" />
              <circle r="4" cx="2.5" cy="-5.5" />
              <circle fill="black" opacity="0.025" r="4" cx="2.5" cy="-5.5" />
              <circle r="4" cy="-1.75" />
              <circle fill="black" opacity="0.025" r="4" cy="-1.75" />
              <circle r="4" cx="5" cy="-2" />
              <circle fill="black" opacity="0.025" r="4" cx="5" cy="-2" />
            </g>
          </g>
        </g>
      </g>
    </g>

    <rect
      width="100"
      height="60"
      fill="none"
      stroke="#27241D"
      stroke-width="1.5"
    />
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
    color: hsl(0, 0%, 99%);
  }
</style>
