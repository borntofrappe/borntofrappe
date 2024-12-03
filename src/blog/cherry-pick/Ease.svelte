<script>
  /**
   * @param { number } t
   */
  const sineInOut = (t) => -0.5 * (Math.cos(Math.PI * t) - 1);

  /** @type {{ ease: function }}*/
  let { ease = sineInOut } = $props();

  const size = 100;
  const n = 100;
  const points = Array(n)
    .fill("")
    .map((_, i, { length }) => {
      const t = i / (length - 1);
      return [t * size, size - ease(t) * size].join(" ");
    })
    .join(" ");

  const padding = 24;
  const outline = 10;
  const x = (padding + outline) * -1;
  const y = (padding + outline) * -1;
  const width = size + (padding + outline) * 2;
  const height = size + (padding + outline) * 2 + 10;
</script>

<svg style="display: block;" viewBox="{x} {y} {width} {height}">
  <defs>
    <pattern
      id="ease-pattern"
      viewBox="-0.1 -0.1 100.2 100.2"
      width="0.25"
      height="0.25"
    >
      <rect
        fill="none"
        stroke="hsl(0 0% 71%)"
        stroke-width="0.2"
        width="100"
        height="100"
      />
    </pattern>
    <filter id="ease-filter">
      <feTurbulence baseFrequency="0.8 0.03" />
      <feComposite in2="SourceGraphic" operator="in" />
      <feBlend in2="SourceGraphic" mode="overlay" />
    </filter>
  </defs>
  <g transform="translate({x} {y})">
    <rect fill="hsl(0 0% 100%)" {width} {height} />
    <rect
      filter="url(#ease-filter)"
      fill="none"
      stroke="hsl(240 4% 95%)"
      stroke-width={outline}
      x={outline / 2}
      y={outline / 2}
      width={width - outline}
      height={height - outline}
    />
  </g>
  <rect fill="url(#ease-pattern)" width={size} height={size} />
  <rect
    fill="none"
    stroke="hsl(0 0% 71%)"
    stroke-width="0.05"
    width={size}
    height={size}
  />
  <polyline fill="none" stroke="hsl(226 89% 58%)" stroke-width="0.8" {points} />
  <text
    fill="hsl(217 16% 36%)"
    font-family="monospace"
    font-weight="700"
    letter-spacing="0.1"
    font-size="8"
    x={size / 2}
    y={size + 20}
    text-anchor="middle">{ease.name}</text
  >
</svg>
