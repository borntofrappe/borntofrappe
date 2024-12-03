<script>
  import { onMount } from "svelte";

  /** @typedef { 'diamond' | 'heart' | 'club' | 'flower' } Seed */

  /** @type Seed[] */
  const seeds = ["diamond", "heart", "club", "flower"];
  const delayPerCard = 0.17;
  const dur = 0.22;

  /** @type {{ cards: Seed[], id: string }} */
  let {
    cards = Array(7)
      .fill("")
      .map((_) => seeds[Math.floor(Math.random() * seeds.length)]),
    id = `deck${Math.random().toString().slice(-3)}`,
  } = $props();

  let width = $derived(cards.length + 2);

  /** @type {Array<{x: number, begin: string, seed: Seed, id: string }>} */
  const deck = cards.map((seed, i, { length }) => {
    const x = i + 1;
    const delay = delayPerCard * (length - 1 - i);
    const begin = `${id}.begin + ${delay}s`;

    return {
      x,
      begin,
      seed,
      id: `${id}card${i}`,
    };
  });

  /** @type {SVGSVGElement} */
  let svg;
  let hasDealt = $state(false);

  onMount(() => {
    const set = /** @type SVGSetElement */ (svg.querySelector(`set#${id}`));
    if (set === null) return;

    set.addEventListener("beginEvent", () => {
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

      const set = /** @type SVGSetElement */ (svg.querySelector(`set#${id}`));
      set.beginElement();

      const uses = /** @type NodeListOf<SVGUseElement> */ (
        svg.querySelectorAll(".deck use")
      );
      uses.forEach((use) => {
        use.querySelector("animate")?.addEventListener("endEvent", () => {
          use.querySelector("set")?.beginElement();
        });
      });
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
    {#each deck as { x, begin, id, seed }}
      <use style="cursor: pointer" href="#deck-card-back" width="1" height="1">
        <animate
          {begin}
          attributeName="x"
          values="0; {x}"
          {dur}
          fill="freeze"
          calcMode="spline"
          keySplines="0.1 0 0.75 1;"
          restart="never"
        />
        <set
          {id}
          begin="click"
          attributeType="CSS"
          attributeName="cursor"
          to="initial"
          restart="never"
        />
        <set attributeName="href" to="#deck-card-{seed}" begin="{id}.begin" />
      </use>
    {/each}
  </g>

  <use style="cursor: pointer" href="#deck-card-back" width="1" height="1">
    <set {id} begin="click" attributeName="display" to="none" />
  </use>
</svg>

<style>
  svg {
    display: block;
  }

  svg:focus:not(:focus-visible) {
    outline: none;
  }
</style>
