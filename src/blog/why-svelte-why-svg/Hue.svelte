<script>
  /** @type {{ n: number, s: number, l: number }}*/
  let { n = 5, s = 78, l = 68 } = $props();

  let stops = $derived(
    Array(n)
      .fill("")
      .map((_, i, { length }) => {
        const hue = (360 / (length - 1)) * i;
        const color = `hsl(${hue}, ${s}%, ${l}%)`;

        const offset = (1 / (length - 1)) * i;

        return {
          hue,
          color,
          offset,
        };
      })
  );
</script>

<svg viewBox="-0.2 0 {n + 0.4} 0.5">
  <defs>
    <linearGradient id="gradient-hue">
      {#each stops as { color, offset }}
        <stop stop-color={color} {offset} />
      {/each}
    </linearGradient>
  </defs>
  <text>Hue</text>
  <g transform="translate(0 0.15)">
    <g
      font-size="0.16"
      fill="currentColor"
      font-weight="700"
      font-family="inherit"
      text-anchor="middle"
      dominant-baseline="hanging"
    >
      {#each stops as { hue, color, offset }}
        <g transform="translate({offset * n} 0)">
          <text y="0.2">{hue}</text>
          <line y1="0.1" stroke="currentColor" stroke-width="0.013" />
          <circle cy="0.13" r="0.05" fill={color} />
        </g>
      {/each}
    </g>
  </g>
  <rect
    width={n}
    height="0.15"
    fill="url(#gradient-hue)"
    stroke="url(#gradient-hue)"
    stroke-width="0.013"
  />
</svg>

<style>
  svg {
    display: block;
  }
</style>
