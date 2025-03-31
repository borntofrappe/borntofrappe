<script>
  import { alphabet } from "./data";

  const fontSize = 15;
  const width = 500;
  const height = 500;
  const margin = {
    top: fontSize / 2,
    right: fontSize * 2,
    bottom: 0,
    left: fontSize,
  };
  const n = alphabet.reduce(
    (acc, curr) => (curr.code.length > acc ? curr.code.length : acc),
    0
  );
  const stepX = width / n;

  const generations = [
    [
      {
        letter: "",
        code: "",
        x: stepX,
        y: height / 2,
        x1: 0,
        y1: 0,
        x2: stepX,
        y2: height / 2,
      },
    ],
  ];

  for (let i = 0; i < n; i++) {
    const parents = generations[generations.length - 1];
    /**
     * @type Array<{letter: string, code: string}>
     */
    let generation = [];
    for (const parent of parents) {
      const children = [
        ...alphabet.filter((d) => d.code.slice(0, -1) === parent.code),
        { letter: "", code: "" },
        { letter: "", code: "" },
      ]
        .slice(0, 2)
        .sort((_, b) => (b.code.slice(-1) === "." ? 1 : -1));
      generation = [...generation, ...children];
    }
    generations.push(
      generation.map(({ letter, code }, j, { length }) => {
        const stepY = height / (length + 1);
        const x = stepX + stepX * i;
        const y = stepY + stepY * j;
        const x1 = x - stepX + fontSize;
        const stepYPrevious = height / (Math.floor(length / 2) + 1);
        const y1 = stepYPrevious + stepYPrevious * Math.floor(j / 2);
        const x2 = x - fontSize * 2.5;
        const y2 = j % 2 === 0 ? y + stepY * 0.1 : y - stepY * 0.1;
        return {
          letter,
          code,
          x,
          y,
          x1,
          y1,
          x2,
          y2,
        };
      })
    );
  }
</script>

<svg
  style="display: block;"
  viewBox="{margin.left * -1} {margin.top * -1} {width +
    (margin.left + margin.right)} {height + (margin.top + margin.bottom)}"
>
  <defs>
    <marker
      id="code-marker"
      viewBox="-1 -1 2 2"
      orient="auto"
      markerWidth="9"
      markerHeight="8"
    >
      <path fill="var(--color-sub, currentColor)" d="M -1 -1 1 0 -1 1" />
    </marker>
    <symbol id="code-" viewBox="-0.5 -0.5 3 1">
      <path
        stroke="var(--color-main, currentColor)"
        stroke-width="1"
        d="M -0.5 0 2.5 0"
      />
    </symbol>
    <symbol id="code." viewBox="-1.5 -0.5 3 1">
      <path
        stroke="var(--color-main, currentColor)"
        stroke-linecap="round"
        stroke-width="1"
        d="M 0 0 Z"
      />
    </symbol>
  </defs>

  <g transform="translate(0 0)">
    {#each generations
      .flat()
      .filter((d) => d.letter !== "") as { letter, code, x, y, x1, y1, x2, y2 }}
      <line
        marker-end="url(#code-marker)"
        stroke="var(--color-sub, currentColor)"
        stroke-width="1"
        {x1}
        {y1}
        {x2}
        {y2}
      />
      <g transform="translate({x} {y})">
        <use
          href="#code{code[code.length - 1]}"
          x={-fontSize * 1.5}
          y={-fontSize / 2}
          width={fontSize * 0.8}
          height={fontSize}
        />
        <text
          font-family="serif"
          fill="var(--color-main, currentColor)"
          font-size={fontSize}
          y={fontSize * 0.375}
          text-anchor="middle">{letter}</text
        >
      </g>
    {/each}
  </g>
</svg>

<style>
  svg {
    --_color: var(--color-text, hsl(0 0% 30%));
    --_background: var(--color-background, hsl(0 0% 98%));
    --_border: var(--color-border, hsl(0 0% 85%));
    display: block;
    color: var(--_color);
    color: light-dark(hsl(210 9% 31%), hsl(210 14% 89%));
    background: var(--_background);
    border: var(--border-size, 1px) solid var(--_border);
    --color-main: currentColor;
    --color-sub: oklch(from currentColor l c h / 0.5);
  }
</style>
