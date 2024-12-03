<script>
  import { onMount } from "svelte";

  /** @type {SVGSVGElement} */
  let element;
  onMount(() => {
    /**
     * @param { IntersectionObserverEntry[] } entries
     */
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    const options = {
      threshold: 0.4,
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  });
</script>

<svg
  bind:this={element}
  class:active={false}
  style="display: block;"
  viewBox="-31.25 -27.500001907348633 60 64.5"
>
  <title>A duck</title>
  <g stroke-linecap="round" stroke-linejoin="round">
    <g fill="none" stroke="hsl(12 96% 55%)" stroke-width="4">
      <path transform="translate(-7.5 30)" d="M 0 0 0 5 -2.5 5 5 5" />
      <path transform="translate(2.5 30)" d="M 0 0 0 5 -2.5 5 5 5" />
    </g>
    <g stroke-width="2.5">
      <path
        fill="hsl(306 83% 26%)"
        stroke="hsl(306 83% 26%)"
        d="M 0 0 L 0 -15 A 11.25 11.25 0 0 1 22.5 -15 L 22.5 10 A 12.5 12.5 0 0 1 10 22.5 A 7.5 7.5 0 0 1 -5 22.5 L -15 22.5 A 15 15 0 0 1 -30 7.5 A 7.5 7.5 0 0 1 -22.5 0 Z"
      />
      <path
        fill="hsl(0 0% 99%)"
        stroke="hsl(306 83% 26%)"
        d="M 0 0 L 0 -15 A 11.25 11.25 0 0 1 22.5 -15 L 22.5 10 A 12.5 12.5 0 0 1 10 22.5 L 0 22.5 A 7.5 7.5 0 0 1 -15 22.5 A 15 15 0 0 1 -30 7.5 A 7.5 7.5 0 0 1 -22.5 0 Z"
      />
      <path
        transform="translate(0 6.25)"
        fill="hsl(313 100% 50%)"
        stroke="hsl(313 100% 50%)"
        d="M 0 0 A 5 5 0 0 1 0 10 L -7.5 10 A 7.5 7.5 0 0 1 -15 2.5 A 2.5 2.5 0 0 1 -12.5 0 Z"
      />
    </g>
    <g fill="none" stroke-width="5">
      <g class="translate" style="--offset: 7.5px">
        <g transform="translate(11.25 -17.5)">
          <g stroke="hsl(306 83% 26%)">
            <path d="M 2.5 0 Z" />
            <path d="M -2.5 0 Z" />
          </g>
          <path
            class="translate"
            style="--offset: 3.5px"
            stroke="hsl(12 96% 55%)"
            d="M -3.75 4 3.75 4"
          />
        </g>
      </g>
    </g>
  </g>
</svg>

<style>
  .translate {
    transition: transform 0.8s cubic-bezier(0.83, 0, 0.17, 1);
    transform: translate(var(--offset), 0px);
  }

  svg.active .translate {
    transform: translate(0px, 0px);
  }
</style>
