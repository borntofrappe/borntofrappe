<script>
  import Self from "./Piece.svelte";
  /** @type {{ strokeWidth?: number, generation?: number }}*/
  let { strokeWidth = 1, generation = 0 } = $props();
</script>

<g stroke-width={strokeWidth}>
  <path
    class="line"
    data-generation={generation}
    pathLength="1"
    d="M 0 0 v -10"
  />
  {#if strokeWidth > 0}
    <g transform="translate(0 -10)">
      <g transform="rotate(25)">
        <Self generation={generation + 1} strokeWidth={strokeWidth - 0.3}
        ></Self>
      </g>

      <g transform="rotate(-25)">
        <Self generation={generation + 1} strokeWidth={strokeWidth - 0.3}
        ></Self>
      </g>
    </g>
  {/if}
</g>
