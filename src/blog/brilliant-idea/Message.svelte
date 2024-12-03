<script>
  import { onMount } from "svelte";

  /** @type { SVGSVGElement }*/
  let element;
  let animate = false;

  onMount(() => {
    /**
     * @param { IntersectionObserverEntry[] } entries
     */
    const observation = (entries) => {
      if (entries[0].isIntersecting) {
        animate = true;
      } else {
        animate = false;
      }
    };

    const observer = new IntersectionObserver(observation);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  });
</script>

<svg
  bind:this={element}
  class:animate
  style="display: block;"
  viewBox="-235 -73 470 172"
>
  <title>A heartfelt message</title>
  <text
    id="message-text"
    class="offset"
    style="text-transform:uppercase"
    font-family="serif"
    font-size="80"
    text-anchor="middle"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-dasharray="0 5"
    stroke-dashoffset="2.5"
    stroke-linecap="round"
  >
    <tspan>Merry</tspan>
    <tspan x="0" y="80">Christmas</tspan>
  </text>
  <use
    pointer-events="none"
    class="fade"
    style="color: hsl(44 93% 57%);"
    href="#message-text"
  />
</svg>

<style>
  .fade {
    animation: fade 12s infinite linear paused;
  }

  .offset {
    animation: offset 3s step-start infinite paused;
  }

  svg.animate .fade,
  svg.animate .offset {
    animation-play-state: running;
  }

  @keyframes fade {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
    }
    40%,
    60% {
      opacity: 1;
    }
  }

  @keyframes offset {
    50% {
      stroke-dashoffset: 0px;
    }
  }
</style>
