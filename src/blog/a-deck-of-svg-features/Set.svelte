<script>
  import { onMount } from "svelte";

  /** @typedef { 'diamond' | 'heart' | 'club' | 'flower' } Seed */

  /** @type Seed[] */
  const seeds = ["diamond", "heart", "club", "flower"];

  /** @type {{ copies: number }} */
  let { copies = 4 } = $props();
  let width = $derived(copies * 2);

  /** @type {Array<{x: number, seed: Seed}>} */
  let deck = $derived(
    Array(copies)
      .fill("")
      .map((_, i) => {
        const x = i + 1;
        const seed = seeds[Math.floor(Math.random() * seeds.length)];
        return {
          x,
          seed,
        };
      })
  );

  /** @type {SVGSVGElement} */
  let svg;
  let hasRevealed = $state(false);

  onMount(() => {
    const set = /** @type SVGSetElement */ (svg.querySelector(`set`));

    set.addEventListener("beginEvent", () => {
      hasRevealed = true;
    });
  });

  /**
   * @param { KeyboardEvent } event
   */
  const handleKeydown = (event) => {
    if (hasRevealed) return;
    if (event.key === "Enter") {
      event.preventDefault();
      const target = /** @type SVGSVGElement */ (event.target);
      target.blur();

      const sets = /** @type NodeListOf<SVGSetElement> */ (
        svg.querySelectorAll("set")
      );
      sets.forEach((set) => {
        set.beginElement();
      });
    }
  };
</script>

<svg
  style="display: block;"
  viewBox="0 0 {width} 1"
  bind:this={svg}
  tabindex={hasRevealed ? -1 : 0}
  role="button"
  aria-label="Press 'Enter' to reveal a few cards."
  onkeydown={handleKeydown}
>
  <set />
  <g class="deck">
    {#each deck as { x, seed }}
      <use
        style="cursor: pointer"
        {x}
        href="#deck-card-back"
        width="1"
        height="1"
      >
        <set begin="click" attributeName="href" to="#deck-card-{seed}" />
        <set
          begin="click"
          attributeType="CSS"
          attributeName="cursor"
          to="initial"
        />
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
