<script>
  /** @type {{ padding: number, offset: boolean, reverse: boolean }}*/
  let { padding = 4, offset = false, reverse = false } = $props();

  const level = `xxxoo
xxxox
xxxox
xxoox
oooox
oooox
oxxox
oxxox`;

  const grid = level.split("\n").map((row) => row.split(""));
  const width = grid[0].length;
  const height = grid.length;

  /** @typedef {{x: number, y: number}} Coordinate */
  /** @type Array<Coordinate> */
  const coordinates = offset
    ? grid.reduce((acc, curr, i) => {
        return [
          ...acc,
          ...curr.reduce((a, c, j) => {
            const x = j / 2;
            const y = i / 2 - x / 2;
            return c === "o" ? [...a, { x, y }] : a;
          }, /** @type Array<Coordinate> */ ([])),
        ];
      }, /** @type Array<Coordinate> */ ([]))
    : grid.reduce((acc, curr, y) => {
        return [
          ...acc,
          ...curr.reduce((a, c, x) => {
            return c === "o" ? [...a, { x, y }] : a;
          }, /** @type Array<Coordinate> */ ([])),
        ];
      }, /** @type Array<Coordinate> */ ([]));
</script>

<svg
  style="display: block;"
  viewBox="{(padding / 2) * -1} {(padding / 2) * -1} {width + padding} {height +
    padding}"
>
  <defs>
    <g id="coordinates-cube">
      <path d="M 0 0.25 l 0.5 -0.25 0.5 0.25 0 0.5 -0.5 0.25 -0.5 -0.25" />
      <g fill="black">
        <path opacity="0.5" d="M 0 0.25 l 0.5 0.25 0 0.5 -0.5 -0.25" />
        <path opacity="0.25" d="M 0.5 0.5 l 0.5 -0.25 0 0.5 -0.5 0.25" />
      </g>
    </g>
  </defs>
  <g fill="currentColor">
    {#each reverse ? [...coordinates].reverse() : coordinates as { x, y }}
      <use {x} {y} href="#coordinates-cube" />
    {/each}
  </g>
</svg>
