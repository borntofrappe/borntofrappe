<script>
  import Self from "./Branch.svelte";

  /** @type {{ strokeWidth?: number, length?: number, generation?: number }}*/
  let { strokeWidth = 1.2, length = 10, generation = 0 } = $props();
</script>

<g stroke-width={strokeWidth}>
  <path
    class="line"
    pathLength="1"
    data-generation={generation}
    d="M 0 0 v -{length}"
  />
  {#if strokeWidth > 0}
    <g transform="translate(0 -{length})">
      <g transform="rotate({Math.random() * 5})">
        <Self
          strokeWidth={strokeWidth - 0.3}
          length={length - 2}
          generation={generation + 1}
        />
      </g>
      <g transform="rotate(25)">
        <Self strokeWidth={strokeWidth - 0.3} generation={generation + 1}
        ></Self>
      </g>

      <g transform="rotate(-25)">
        <Self strokeWidth={strokeWidth - 0.3} generation={generation + 1}
        ></Self>
      </g>
    </g>
  {:else}
    <g transform="translate(0 -{length})">
      <use class="blossom" data-generation={generation} href="#blossom" />
    </g>
  {/if}
</g>
