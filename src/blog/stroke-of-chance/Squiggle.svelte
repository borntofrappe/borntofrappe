<script>
  import { onMount } from "svelte";

  const n = 10;
  const dur = n / 10;

  const ids = Array(n)
    .fill("")
    .map((_, i) => `squiggle-filter-${i}`);
  const values = ids.map((id) => `url(#${id})`).join(";");

  /** @type { SVGSVGElement }*/
  let svg;

  onMount(() => {
    /**
     * @param { IntersectionObserverEntry[] } entries
     */
    const observation = (entries) => {
      if (entries[0].isIntersecting) {
        svg.querySelector("animate")?.beginElement();
      } else {
        svg.querySelector("animate")?.endElement();
      }
    };

    const observer = new IntersectionObserver(observation);

    /**
     * @param {MediaQueryListEvent} event
     */
    const listener = (event) => {
      if (event.matches) {
        svg.querySelector("animate")?.endElement();
        observer.unobserve(svg);
      } else {
        observer.observe(svg);
      }
    };

    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

    if (!reducedMotion.matches) {
      observer.observe(svg);
    }

    reducedMotion.addEventListener("change", listener);

    return () => {
      reducedMotion.removeEventListener("change", listener);
      observer.unobserve(svg);
    };
  });
</script>

<svg bind:this={svg} style="display: block;" viewBox="0 0 210 170">
  <defs>
    <symbol id="squiggle-singer" viewBox="0 0 60 100">
      <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25">
        <path
          fill="hsl(0 0% 99%)"
          stroke="hsl(0 0% 25%)"
          d="M 37 53 C 39 52 40 55 41 56 C 44 63 44 70 43 73 C 41 76 39 75 38 72 C 38 70 37 58 35 58 C 37 58 38 70 38 72 C 39 76 39 82 38 90 C 38 95 34 97 33 97 C 31 97 29 94 32 91 C 32 89 32 82 30 78 C 32 82 32 89 32 91 C 30 94 29 96 26 96 C 24 96 22 94 25 91 C 26 87 21.5 82 21 76 C 20 72 20 60 22 56 C 20 60 20 72 21 76 C 20 76 16 76 17 70 C 18 62 21 57 23 53"
        />
        <path
          fill="hsl(0 0% 25%)"
          stroke="hsl(0 0% 25%)"
          d="M 29 60 Q 31 58 32 57.5 L 32 63 C 30 62 28 58 26 58 L 26 63.5 Q 27.5 62 29 60"
        />
        <circle
          fill="hsl(0 0% 99%)"
          stroke="hsl(0 0% 25%)"
          cx="30"
          cy="30"
          r="24"
        />
        <ellipse fill="hsl(0 0% 25%)" cx="14" cy="27" rx="3.5" ry="4.5" />
        <ellipse fill="hsl(0 0% 25%)" cx="37" cy="27" rx="4" ry="5" />
        <path
          fill="none"
          stroke="hsl(0 0% 25%)"
          d="M 15 35 C 10 35 10 42 15 42 C 18 42 18 39 23 39 S 30 42 35 39"
        />
      </g>
    </symbol>
    {#each ids as id, i}
      <filter {id}>
        <feTurbulence baseFrequency="0.01" numOctaves="2" seed={i} />
        <feDisplacementMap in="SourceGraphic" scale="2" />
      </filter>
    {/each}
  </defs>
  <g filter="url(#{ids[Math.floor(Math.random() * ids.length)]})">
    <use href="#squiggle-singer" width="60" height="100" />
    <use href="#squiggle-singer" x="75" y="25" width="60" height="100" />
    <use href="#squiggle-singer" x="150" y="50" width="60" height="100" />

    <text
      transform="translate(10 130) rotate(18)"
      rotate="-18"
      fill="hsl(0 0% 99%)"
      stroke="hsl(0 0% 25%)"
      paint-order="stroke"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="3"
      letter-spacing="1"
      font-family="sans-serif"
      font-size="24"
      font-weight="700"
    >
      Glee Club
    </text>

    <animate
      begin="indefinite"
      attributeName="filter"
      {values}
      {dur}
      repeatCount="indefinite"
      fill="freeze"
    />
  </g>
</svg>
