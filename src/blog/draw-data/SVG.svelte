<script>
  /** @type {{ data?: number[] }}*/
  let { data = [2, 3, 4, 5, 4, 6, 2] } = $props();
  let width = $derived(data.length);
  let height = $derived(Math.ceil(Math.max(...data)) + 1);
</script>

<svg style="display: block;" viewBox="0 0 {width} {height}">
  <g stroke="currentColor" stroke-width="0.06">
    <line x1="0" x2={width} y1={height} y2={height} />
    <line x1="0" x2="0" y1="0" y2={height} />
  </g>
  <g fill="currentColor">
    {#each data as value, i}
      <circle cx={0.5 + i} cy={height - value} fill="currentColor" r="0.1" />
      <text
        x={0.5 + i}
        y={height - value - 0.3}
        font-size="0.35"
        text-anchor="middle"
        fill="currentColor"
        font-family="monospace"
        >{value}
      </text>
    {/each}
    <text x="0.2" y="0.6" font-size="0.4" font-family="monospace">Data</text>
  </g>
</svg>
