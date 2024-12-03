<script>
  import { onMount } from "svelte";

  const delayPerCard = 0.2;
  const dur = 0.2;

  /** @type {{ copies: number, id: string }} */
  let { copies = 4, id = `animate${Math.random().toString().slice(-3)}` } =
    $props();
  let width = $derived(copies * 2);
  /** @type {Array<{x: number, begin: string, id: string }>} */
  let deck = $derived(
    Array(copies)
      .fill("")
      .map((_, i, { length }) => {
        const x = i + 1;
        const delay = delayPerCard * (length - 1 - i);
        const begin = i === length - 1 ? "click" : `${id}.begin + ${delay}s`;

        return {
          x,
          begin,
          id: i === length - 1 ? id : `${id}card${i}`,
        };
      })
  );

  /** @type { SVGSVGElement }*/
  let svg;
  let hasDealt = $state(false);

  onMount(() => {
    const animate = /** @type SVGAnimateElement */ (
      svg.querySelector(`animate#${id}`)
    );
    animate.addEventListener("beginEvent", () => {
      hasDealt = true;
    });
  });

  /**
   * @param { KeyboardEvent } event
   */
  const handleKeydown = (event) => {
    if (hasDealt) return;
    if (event.key === "Enter") {
      event.preventDefault();
      const target = /** @type SVGSVGElement */ (event.target);
      target.blur();

      const animate = /** @type SVGAnimateElement */ (
        svg.querySelector(`animate#${id}`)
      );
      animate.beginElement();
    }
  };
</script>

<svg
  style="display: block;"
  viewBox="0 0 {width} 1"
  bind:this={svg}
  tabindex={hasDealt ? -1 : 0}
  role="button"
  aria-label="Press 'Enter' to deal a few cards with SMIL animation."
  onkeydown={handleKeydown}
>
  <set />
  <g class="deck">
    {#each deck as { x, begin, id }}
      <use href="#deck-card-back" width="1" height="1">
        <animate {id} {begin} attributeName="x" to={x} {dur} fill="freeze" />
      </use>
    {/each}
  </g>
</svg>

<style>
  svg {
    display: block;
  }

  svg:focus:not(:focus-visible) {
    outline: none;
  }
</style>
