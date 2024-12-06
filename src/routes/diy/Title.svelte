<script>
  /** @type {{ fontSize?: number, fill?: string, stroke?: string, children?: import('svelte').Snippet }}*/
  const {
    fontSize = 7,
    fill = "hsl(206 33% 96%)",
    stroke = "hsl(209 61% 16%)",
    children,
  } = $props();

  const strokeWidth = fontSize * 0.2;
  const letterSpacing = fontSize * 0.1;
</script>

<g
  font-family="sans-serif"
  font-weight="700"
  font-size={fontSize}
  {fill}
  {stroke}
  stroke-width={strokeWidth}
  letter-spacing={letterSpacing}
  paint-order="stroke"
  stroke-linejoin="round"
  stroke-linecap="round"
>
  <text x="50%" y="50%" dy=".3em" text-anchor="middle">
    {#if children}
      {@render children()}
    {:else}
      Hello world
    {/if}
  </text>
</g>
