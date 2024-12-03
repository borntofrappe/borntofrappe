<script>
  /** @type {{columns: number, rows: number}}*/
  let { columns = 7, rows = 7 } = $props();

  const repeatCount = 3;
  const dur = 1.5;
  const delayPerDistance = 0.15;

  const wave = Array(rows)
    .fill("")
    .map((_, row) =>
      Array(columns)
        .fill("")
        .map((__, column) => {
          const x = (column - row) / 2;
          const y = (column + row) / 2 / 2;
          const delay = (column + row) * delayPerDistance;
          const begin = `wave.begin + ${delay}s`;
          return {
            x,
            y,
            begin,
          };
        })
    )
    .flat();
</script>

<svg
  style="display: block; --c0: hsl(209 61% 16%); --c1: hsl(211 39% 23%); --c2: hsl(209 34% 30%);"
  viewBox="{-rows / 2} {-0.5 - 1} {rows / 2 + columns / 2} {0.5 +
    columns / 2 / 2 +
    rows / 2 / 2 +
    1}"
>
  <g style="cursor: pointer;">
    <set id="wave" begin="click" />
    {#each wave as { x, y, begin }}
      <g transform="translate({x} {y}) scale(0.83)">
        <path
          fill="var(--c2, hsl(0 0% 30%))"
          d="M -0.5 0.25 0 0.5 0.5 0.25 0.5 -0.25 0 -0.5 -0.5 -0.25"
        >
          <animate
            attributeName="d"
            values="M -0.5 0.25 0 0.5 0.5 0.25 0.5 -0.25 0 -0.5 -0.5 -0.25; M -0.5 0.25 0 0.5 0.5 0.25 0.5 -1.25 0 -1.5 -0.5 -1.25; M -0.5 0.25 0 0.5 0.5 0.25 0.5 -0.25 0 -0.5 -0.5 -0.25;"
            {dur}
            {begin}
            {repeatCount}
            calcMode="spline"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
            restart="whenNotActive"
          />
        </path>
        <path
          fill="var(--c1, hsl(0 0% 20%))"
          d="M 0 0.5 0.5 0.25 0.5 -0.25 0 0"
        >
          <animate
            attributeName="d"
            values="M 0 0.5 0.5 0.25 0.5 -0.25 0 0; M 0 0.5 0.5 0.25 0.5 -1.25 0 -1; M 0 0.5 0.5 0.25 0.5 -0.25 0 0;"
            {dur}
            {begin}
            {repeatCount}
            calcMode="spline"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
            restart="whenNotActive"
          />
        </path>
        <path
          fill="var(--c0, hsl(0 0% 15%))"
          d="M -0.5 0.25 0 0.5 0 0 -0.5 -0.25"
        >
          <animate
            attributeName="d"
            values="M -0.5 0.25 0 0.5 0 0 -0.5 -0.25; M -0.5 0.25 0 0.5 0 -1 -0.5 -1.25; M -0.5 0.25 0 0.5 0 0 -0.5 -0.25;"
            {dur}
            {begin}
            {repeatCount}
            calcMode="spline"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
            restart="whenNotActive"
          />
        </path>
      </g>
    {/each}
  </g>
</svg>
