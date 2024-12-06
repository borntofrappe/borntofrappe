<script>
  /** @type {{ title: string, color: string, solution: string[] }}*/
  let {
    title = "Shiba Inu",
    color = "currentColor",
    solution = [
      `
xxoxx
xooxx
oooxx
xxooo
oooxo
`,
      `
xxxxx
xooxx
oooxo
xxooo
xxxxx
`,
      `
xxoxx
xooxx
oooxx
xxooo
oooxo
`,
    ],
  } = $props();

  /** @type {{ coordinates: Array<{x: number, y: number }>, x: number, y: number, width: number, height: number }} */
  let { coordinates, x, y, width, height } = $derived.by(() => {
    const coordinates = solution.reduce((accumulator, current, z) => {
      return [
        ...current
          .trim()
          .split("\n")
          .map((row) => row.split(""))
          .reduce((acc, curr, i) => {
            return [
              ...acc,
              ...curr.reduce((a, c, j) => {
                const x = j / 2 + z / 2;
                const y = i / 2 - x / 2 + z / 2;
                return c === "o" ? [...a, { x, y }] : a;
              }, /** @type Array<{x: number, y: number }> */ ([])),
            ];
          }, /** @type Array<{x: number, y: number }> */ ([])),
        ...accumulator,
      ];
    }, /** @type Array<{x: number, y: number }> */ ([]));

    const xs = coordinates.map(({ x }) => x).sort((a, b) => a - b);
    const x0 = xs[0];
    const x1 = xs[xs.length - 1];

    const ys = coordinates.map(({ y }) => y).sort((a, b) => a - b);
    const y0 = ys[0];
    const y1 = ys[ys.length - 1];

    return {
      coordinates,
      x: x0,
      y: y0,
      width: x1 - x0 + 1,
      height: y1 - y0 + 1,
    };
  });
</script>

<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
  <defs>
    <g id="cube">
      <path d="M 0 0.25 l 0.5 -0.25 0.5 0.25 0 0.5 -0.5 0.25 -0.5 -0.25" />
      <g fill="black">
        <path opacity="0.5" d="M 0 0.25 l 0.5 0.25 0 0.5 -0.5 -0.25" />
        <path opacity="0.25" d="M 0.5 0.5 l 0.5 -0.25 0 0.5 -0.5 0.25" />
      </g>
    </g>
  </defs>
</svg>

<svg role="img" style:color viewBox="{x} {y} {width} {height}">
  <title>{title}</title>
  <g fill="currentColor">
    {#each [...coordinates].reverse() as { x, y }}
      <use {x} {y} href="#cube" />
    {/each}
  </g>
</svg>

<style>
  svg {
    display: block;
  }

  svg use:hover {
    filter: brightness(1.5);
  }
</style>
