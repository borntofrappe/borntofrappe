<script>
    import data from "./data.js";
  </script>
  
  <svg viewBox="-2.5 -24.087947845458984 202.7579345703125 31.522336959838867">
    <switch>
      {#each data as { systemLanguage, flag, dessert }}
        <g {systemLanguage}>
          <text font-size="20">
            <tspan font-size="10">{flag}</tspan>
            {dessert}
          </text>
        </g>
      {/each}
      <g>
        <text font-size="20">
          <tspan font-size="10">🇪🇺</tspan>
          Sweet Europe
        </text>
      </g>
    </switch>
  </svg>
  