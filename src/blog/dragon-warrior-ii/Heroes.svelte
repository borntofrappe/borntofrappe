<script>
  import { animate } from "./utils.js";

  /** @type {{ blockSize: string }}*/
  let { blockSize = "64px" } = $props();
  const heroes = ["prince", "gary", "beth"];
</script>

<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
  <defs>
    <symbol id="prince-0" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
      <path
        stroke="#000000"
        d="M5 0h6M5 1h1M10 1h1M2 2h3M11 2h2M1 3h1M3 3h2M7 3h2M11 3h2M1 4h1M3 4h1M5 4h1M10 4h2M13 4h1M1 5h1M3 5h1M13 5h1M1 6h1M3 6h1M6 6h1M9 6h1M13 6h1M1 7h1M3 7h1M6 7h1M9 7h1M13 7h1M0 8h2M3 8h3M10 8h6M0 9h1M4 9h1M6 9h4M15 9h1M0 10h5M9 10h1M15 10h1M2 11h3M8 11h3M14 11h2M4 12h4M10 12h5M4 13h1M10 13h4M4 14h5M13 14h1M4 15h1M9 15h4"
      />
      <path
        stroke="#306082"
        d="M6 1h4M7 2h2M4 4h1M6 4h4M4 5h1M11 5h1M4 6h1M11 6h2M4 7h1M11 7h2M5 9h1M11 9h1M13 9h1M5 10h1M8 10h1M10 10h1M14 10h1M5 11h3M11 11h1M13 11h1M5 13h5M9 14h4"
      />
      <path
        stroke="#eec39a"
        d="M5 2h2M9 2h2M2 3h1M5 3h2M9 3h2M2 4h1M12 4h1M2 5h1M5 5h6M12 5h1M2 6h1M5 6h1M7 6h2M10 6h1M2 7h1M5 7h1 M7 7h2M10 7h1M2 8h1M6 8h4M1 9h3M10 9h1M12 9h1M14 9h1M6 10h2M11 10h3M12 11h1M8 12h2M5 15h4"
      />
    </symbol>
    <symbol id="prince-1" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
      <path
        stroke="#000000"
        d="M5 0h6M2 1h1M5 1h1M10 1h1M1 2h1M3 2h2M11 2h2M1 3h1M3 3h1M7 3h2M11 3h2M1 4h1M3 4h1M5 4h1M10 4h2M13 4h1M1 5h1M3 5h1M13 5h1M1 6h1M3 6h1M6 6h1M9 6h1M13 6h1M0 7h2M3 7h2M6 7h1M9 7h1M13 7h1M0 8h1M4 8h2M10 8h3M0 9h5M6 9h10M1 10h3M9 10h1M15 10h1M2 11h8M15 11h1M4 12h1M6 12h2M9 12h2M14 12h2M4 13h1M10 13h5M4 14h5M10 14h4M5 15h3M12 15h1"
      />
      <path
        stroke="#306082"
        d="M6 1h4M7 2h2M4 3h1M4 4h1M6 4h4M4 5h1M11 5h1M4 6h1M11 6h2M11 7h2M5 9h1M4 10h2M8 10h1M11 10h1M13 10h1M10 11h1M14 11h1M5 12h1M11 12h1M13 12h1M5 13h5M9 14h1"
      />
      <path
        stroke="#eec39a"
        d="M2 2h1M5 2h2M9 2h2M2 3h1M5 3h2M9 3h2M2 4h1M12 4h1M2 5h1M5 5h6M12 5h1M2 6h1M5 6h1M7 6h2M10 6h1M2 7h1M5 7h1M7 7h2M10 7h1M1 8h3M6 8h4M6 10h2M10 10h1M12 10h1M14 10h1M11 11h3M8 12h1M12 12h1M8 15h4"
      />
    </symbol>
    <symbol id="gary-0" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
      <path
        stroke="#000000"
        d="M3 0h4M11 0h4M2 1h1M5 1h1M7 1h4M12 1h1M15 1h1M3 2h1M6 2h2M10 2h2M14 2h1M1 3h3M5 3h1M8 3h2M12 3h1M15 3h1M1 4h1M3 4h1M5 4h3M10 4h3M14 4h1M1 5h1M3 5h3M12 5h2M1 6h1M3 6h3M7 6h1M10 6h1M12 6h2M1 7h1M3 7h3M7 7h1M10 7h1M12 7h2M1 8h1M3 8h1M5 8h2M11 8h2M0 9h6M7 9h4M12 9h3M1 10h1M4 10h2M11 10h1M15 10h1M2 11h1M4 11h1M11 11h1M13 11h1M15 11h1M2 12h3M8 12h2M11 12h1M15 12h1M4 13h1M12 13h3M4 14h4M12 14h1M4 15h1M7 15h6"
      />
      <path
        stroke="#eec39a"
        d="M3 1h2M6 1h1M11 1h1M13 1h2M4 2h2M12 2h2M4 3h1M6 3h2M10 3h2M13 3h2M4 4h1M13 4h1M7 5h4M6 6h1M8 6h2M11 6h1M6 7h1M8 7h2M11 7h1M4 8h1M7 8h4M6 9h1M11 9h1M2 10h2M6 10h2M10 10h1M3 11h1M7 11h3M7 12h1M10 12h1M6 13h1M8 13h2M11 13h1M8 14h2M5 15h2"
      />
      <path
        stroke="#6abe30"
        d="M8 2h2M2 4h1M8 4h2M2 5h1M6 5h1M11 5h1M2 6h1M2 7h1M2 8h1M8 10h2M13 10h1M5 11h2M10 11h1M12 11h1M14 11h1M5 12h2M13 12h1M5 13h1M7 13h1M10 13h1M10 14h2"
      />
      <path stroke="#ffffff" d="M12 10h1M14 10h1M12 12h1M14 12h1" />
    </symbol>
    <symbol id="gary-1" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
      <path
        stroke="#000000"
        d="M3 0h4M11 0h4M2 1h1M5 1h1M7 1h4M12 1h1M15 1h1M1 2h1M3 2h1M6 2h2M10 2h2M14 2h1M1 3h1M3 3h1M5 3h1M8 3h2M12 3h1M15 3h1M1 4h1M3 4h1M5 4h3M10 4h3M14 4h1M1 5h1M3 5h3M12 5h2M1 6h1M3 6h3M7 6h1M10 6h1M12 6h2M1 7h1M3 7h3M7 7h1M10 7h1M12 7h2M0 8h4M5 8h2M11 8h2M1 9h1M4 9h2M7 9h4M12 9h1M2 10h1M4 10h2M12 10h3M2 11h3M11 11h1M15 11h1M4 12h1M8 12h2M11 12h1M13 12h1M15 12h1M4 13h1M11 13h1M15 13h1M4 14h2M9 14h6M4 15h6M12 15h1"
      />
      <path
        stroke="#eec39a"
        d="M3 1h2M6 1h1M11 1h1M13 1h2M4 2h2M12 2h2M4 3h1M6 3h2M10 3h2M13 3h2M4 4h1M13 4h1M7 5h4M6 6h1M8 6h2M11 6h1M6 7h1M8 7h2M11 7h1M4 8h1M7 8h4M2 9h2M6 9h1M3 10h1M6 10h3M10 10h2M7 11h4M7 12h1M10 12h1M8 13h2M8 14h1M10 15h2"
      />
      <path
        stroke="#6abe30"
        d="M2 2h1M8 2h2M2 3h1M2 4h1M8 4h2M2 5h1M6 5h1M11 5h1M2 6h1M2 7h1M11 9h1M9 10h1M5 11h2M13 11h1M5 12h2M12 12h1M14 12h1M5 13h3M10 13h1M13 13h1M6 14h2"
      />
      <path stroke="#ffffff" d="M12 11h1M14 11h1M12 13h1M14 13h1" />
    </symbol>
    <symbol id="beth-0" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
      <path
        stroke="#000000"
        d="M5 0h6M4 1h1M11 1h1M3 2h1M12 2h1M2 3h2M12 3h1M1 4h1M3 4h1M13 4h1M2 5h1M5 5h6M13 5h1M2 6h1M4 6h1M6 6h1M9 6h1M11 6h1M13 6h1M2 7h1M4 7h1M6 7h1M9 7h1M11 7h1M13 7h1M2 8h1M4 8h1M11 8h2M14 8h1M1 9h3M5 9h6M12 9h1M15 9h1M0 10h1M2 10h2M12 10h2M15 10h1M0 11h1M2 11h10M13 11h2M1 12h1M4 12h1M8 12h1M12 12h1M14 12h1M1 13h1M4 13h1M12 13h1M14 13h1M1 14h3M13 14h2M1 15h1M4 15h3M14 15h1"
      />
      <path
        stroke="#ac3232"
        d="M5 1h6M4 2h2M7 2h2M10 2h2M4 3h3M9 3h3M2 4h1M4 4h9M3 5h2M11 5h2M3 6h1M12 6h1M3 7h1M12 7h1M3 8h1M5 8h1M10 8h1M4 9h1M11 9h1M4 10h8M12 11h1M7 12h1M13 12h1M2 13h1M8 13h1"
      />
      <path
        stroke="#ffffff"
        d="M6 2h1M9 2h1M7 3h2M5 6h1M7 6h2M10 6h1M5 7h1M7 7h2M10 7h1M6 8h4M13 8h1M13 9h2M1 10h1M14 10h1M1 11h1M2 12h2M5 12h2M9 12h3M3 13h1M5 13h3M9 13h3M13 13h1M4 14h9M2 15h2M7 15h7"
      />
    </symbol>
    <symbol id="beth-1" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
      <path
        stroke="#000000"
        d="M5 0h6M4 1h1M11 1h1M2 2h2M12 2h1M1 3h1M3 3h1M12 3h1M2 4h1M13 4h1M2 5h1M5 5h6M13 5h1M2 6h1M4 6h1M6 6h1M9 6h1M11 6h1M13 6h1M2 7h1M4 7h1M6 7h1M9 7h1M11 7h1M13 7h1M1 8h4M11 8h1M13 8h1M0 9h1M2 9h2M5 9h6M12 9h1M14 9h1M0 10h1M4 10h1M12 10h1M15 10h1M1 11h1M4 11h8M15 11h1M1 12h4M8 12h1M13 12h1M3 13h1M13 13h2M3 14h1M9 14h3M14 14h1M3 15h6M12 15h2"
      />
      <path
        stroke="#ac3232"
        d="M5 1h6M4 2h2M7 2h2M10 2h2M2 3h1M4 3h3M9 3h3M3 4h10M3 5h2M11 5h2M3 6h1M12 6h1M3 7h1M12 7h1M5 8h1M10 8h1M12 8h1M4 9h1M11 9h1M2 10h2M5 10h7M2 11h1M13 11h1M14 12h1M7 13h2M13 14h1M9 15h3"
      />
      <path
        stroke="#ffffff"
        d="M6 2h1M9 2h1M7 3h2M5 6h1M7 6h2M10 6h1M5 7h1M7 7h2M10 7h1M6 8h4M1 9h1M13 9h1M1 10h1M13 10h2M3 11h1M12 11h1M14 11h1M5 12h3M9 12h4M4 13h3M9 13h4M4 14h5M12 14h1"
      />
    </symbol>
  </defs>
</svg>

<svg
  use:animate
  style:block-size={blockSize}
  style:inline-size="auto"
  viewBox="0 0 {heroes.length} 1"
>
  {#each heroes as hero, x}
    <use {x} href="#{hero}-0" width="1" height="1">
      <animate
        attributeName="href"
        dur="0.5s"
        values="#{hero}-1; #{hero}-0"
        calcMode="discrete"
        repeatCount="indefinite"
        begin="indefinite"
      />
    </use>
  {/each}
</svg>

<style>
  svg {
    display: block;
  }
</style>
