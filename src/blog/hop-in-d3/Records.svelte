<script>
  import { scaleLinear, scalePoint, range, max } from "d3";

  /** @typedef {{level: string, score: number}} Record */
  /** @type Record[] */
  const data = [
    { level: "3-4", score: 229550 },
    { level: "5-2", score: 380400 },
    { level: "5-4", score: 362800 },
    { level: "6-4", score: 431450 },
    { level: "7-2", score: 445400 },
    { level: "7-3", score: 492900 },
    { level: "7-3", score: 513200 },
    { level: "8-2", score: 521000 },
    { level: "8-3", score: 613700 },
    { level: "8-4", score: 638000 },
  ];

  const width = 100;
  const height = 60;

  const [top, right, bottom, left] = [8, 12, 6, 3];
  const [x, y] = [right, top].map((d) => d * -1);
  const w = width + right + left;
  const h = height + top + bottom;

  const xScale = scalePoint()
    .domain(range(data.length))
    .range([0, width])
    .padding(0.5);

  const yScale = scaleLinear()
    .domain([0, max(data, (/** @type { Record } */ d) => d.score)])
    .range([height, 0]);

  const step = xScale.step() * 0.8;
</script>

<svg style="display: block;" viewBox="{x} {y} {w} {h}">
  <!-- prettier-ignore -->
  <defs>
      <pattern id="records-pattern-block" width={bottom} height={bottom} patternUnits="userSpaceOnUse" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
        <path stroke="#d2550d" d="M0 0h1M10 0h1M15 0h1M1 1h8M11 1h4M1 2h8M11 2h4M1 3h8M11 3h4M1 4h8M12 4h3M1 5h8M10 5h1M15 5h1M1 6h8M1 7h8M11 7h4M1 8h8M11 8h4M1 9h8M11 9h4M2 10h6M10 10h5M4 11h4M10 11h5M1 12h1M9 12h6M1 13h3M9 13h6M1 14h6M9 14h5M0 15h1M7 15h1M15 15h1" />
        <path stroke="#f4c686" d="M1 0h8M11 0h4M0 1h1M10 1h1M0 2h1M10 2h1M0 3h1M10 3h1M0 4h1M10 4h1M0 5h1M0 6h1M10 6h5M0 7h1M10 7h1M0 8h1M10 8h1M0 9h1M10 9h1M9 10h1M0 11h2M9 11h1M0 12h1M2 12h2M8 12h1M0 13h1M4 13h3M8 13h1M0 14h1M8 14h1M8 15h1" />
        <path stroke="#130d0a" d="M9 0h1M9 1h1M15 1h1M9 2h1M15 2h1M9 3h1M15 3h1M9 4h1M11 4h1M15 4h1M9 5h1M11 5h4M9 6h1M15 6h1M9 7h1M15 7h1M9 8h1M15 8h1M9 9h1M15 9h1M0 10h2M8 10h1M15 10h1M2 11h2M8 11h1M15 11h1M4 12h4M15 12h1M7 13h1M15 13h1M7 14h1M14 14h2M1 15h6M9 15h6" />
      </pattern>
      <symbol preserveAspectRatio="xMidYMax" id="records-symbol-mario" viewBox="0 -0.5 12 15" shape-rendering="crispEdges">
        <path stroke="#f83600" d="M3 0h5M2 1h9M4 7h1M7 7h1M4 8h4M3 9h1M5 9h2M8 9h1M3 10h6M2 11h8M2 12h3M7 12h3" />
        <path stroke="#876a0e" d="M2 2h3M7 2h1M1 3h1M3 3h1M7 3h1M1 4h1M3 4h2M8 4h1M1 5h2M7 5h4M1 7h3M5 7h2M0 8h4M8 8h4M2 9h1M9 9h1M1 13h3M8 13h3M0 14h4M8 14h4" />
        <path stroke="#ff9e52" d="M5 2h2M8 2h1M2 3h1M4 3h3M8 3h3M2 4h1M5 4h3M9 4h3M3 5h4M3 6h7M0 9h2M4 9h1M7 9h1M10 9h2M0 10h3M9 10h3M0 11h2M10 11h2" />
      </symbol>
      <symbol id="records-symbol-pipe-top" viewBox="0 -0.5 36 16" shape-rendering="crispEdges">
        <path stroke="#130d0a" d="M0 0h36M0 1h1M35 1h1M0 2h1M35 2h1M0 3h1M35 3h1M0 4h1M35 4h1M0 5h1M35 5h1M0 6h1M35 6h1M0 7h1M35 7h1M0 8h1M35 8h1M0 9h1M35 9h1M0 10h1M35 10h1M0 11h1M35 11h1M0 12h1M35 12h1M0 13h1M35 13h1M0 14h36M2 15h32" />
        <path stroke="#86bb33" d="M1 1h34M6 2h6M1 3h3M6 3h6M29 3h1M31 3h1M33 3h2M1 4h3M6 4h6M30 4h1M32 4h3M1 5h3M6 5h6M29 5h1M31 5h1M33 5h2M1 6h3M6 6h6M30 6h1M32 6h3M1 7h3M6 7h6M29 7h1M31 7h1M33 7h2M1 8h3M6 8h6M30 8h1M32 8h3M1 9h3M6 9h6M29 9h1M31 9h1M33 9h2M1 10h3M6 10h6M30 10h1M32 10h3M1 11h3M6 11h6M29 11h1M31 11h1M33 11h2M1 12h3M6 12h6M30 12h1M32 12h3M1 13h3M6 13h6M29 13h1M31 13h1M33 13h2" />
        <path stroke="#2b8c00" d="M1 2h5M12 2h23M4 3h2M12 3h17M30 3h1M32 3h1M4 4h2M12 4h18M31 4h1M4 5h2M12 5h17M30 5h1M32 5h1M4 6h2M12 6h18M31 6h1M4 7h2M12 7h17M30 7h1M32 7h1M4 8h2M12 8h18M31 8h1M4 9h2M12 9h17M30 9h1M32 9h1M4 10h2M12 10h18M31 10h1M4 11h2M12 11h17M30 11h1M32 11h1M4 12h2M12 12h18M31 12h1M4 13h2M12 13h17M30 13h1M32 13h1" />
      </symbol>
      <use id="records-use-pipe-top" width={step} height={(step * 16) / 36} href="#records-symbol-pipe-top" />
      <pattern id="records-pattern-pipe" width={step} height={(step * 2) / 36} patternUnits="userSpaceOnUse" viewBox="0 -0.5 36 2" shape-rendering="crispEdges">
        <path stroke="#130d0a" d="M2 0h1M33 0h1M2 1h1M33 1h1" />
        <path stroke="#86bb33" d="M3 0h3M8 0h5M14 0h2M28 0h1M30 0h3M3 1h3M8 1h5M14 1h2M29 1h1M31 1h2" />
        <path stroke="#2b8c00" d="M6 0h2M13 0h1M16 0h12M29 0h1M6 1h2M13 1h1M16 1h13M30 1h1" />
      </pattern>
      <symbol id="records-symbol-9" viewBox="0 -0.5 8 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M1 0h5M0 1h2M5 1h2M0 2h2M5 2h2M1 3h6M5 4h2M4 5h2M1 6h4" />
      </symbol>
      <symbol id="records-symbol-8" viewBox="0 -0.5 8 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M1 0h5M0 1h2M5 1h2M0 2h2M5 2h2M1 3h5M0 4h2M5 4h2M0 5h2M5 5h2M1 6h5" />
      </symbol>
      <symbol id="records-symbol-7" viewBox="0 -0.5 8 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M0 0h7M0 1h2M5 1h2M4 2h2M3 3h2M2 4h2M2 5h2M2 6h2" />
      </symbol>
      <symbol id="records-symbol-6" viewBox="0 -0.5 8 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M2 0h4M1 1h2M0 2h2M0 3h6M0 4h2M5 4h2M0 5h2M5 5h2M1 6h5" />
      </symbol>
      <symbol id="records-symbol-5" viewBox="0 -0.5 8 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M0 0h6M0 1h2M0 2h6M5 3h2M5 4h2M0 5h2M5 5h2M1 6h5" />
      </symbol>
      <symbol id="records-symbol-4" viewBox="0 -0.5 8 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M3 0h3M2 1h4M1 2h2M4 2h2M0 3h2M4 3h2M0 4h7M4 5h2M4 6h2" />
      </symbol>
      <symbol id="records-symbol-3" viewBox="0 -0.5 8 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M1 0h6M4 1h2M3 2h2M2 3h4M5 4h2M0 5h2M5 5h2M1 6h5" />
      </symbol>
      <symbol id="records-symbol-2" viewBox="0 -0.5 8 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M1 0h5M0 1h2M5 1h2M4 2h3M2 3h4M1 4h4M0 5h3M0 6h7" />
      </symbol>
      <symbol id="records-symbol-1" viewBox="0 -0.5 8 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M2 0h2M1 1h3M2 2h2M2 3h2M2 4h2M2 5h2M0 6h6" />
      </symbol>
      <symbol id="records-symbol-0" viewBox="0 -0.5 8 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M2 0h3M1 1h1M4 1h2M0 2h2M5 2h2M0 3h2M5 3h2M0 4h2M5 4h2M1 5h2M5 5h1M2 6h3" />
      </symbol>
      <symbol id="records-symbol--" viewBox="-1 -0.5 10 7" shape-rendering="crispEdges">
        <path stroke="#e9fafe" d="M0 3h6M0 4h6" />
      </symbol>
    </defs>
  <rect fill="#5694fb" {x} {y} width={w} height={h} />
  {#each data.map( ({ score, level }) => ({ score, letters: level.split("") }) ) as { score, letters }, i}
    {@const charSize = (step - 2) / letters.length}
    <g transform="translate({xScale(i) - step / 2} {yScale(score)})">
      <rect
        fill="url(#records-pattern-pipe)"
        width={step}
        height={height - yScale(score)}
      />
      <use href="#records-use-pipe-top" />
      {#each letters as l, j}
        <use
          href="#records-symbol-{l}"
          x={charSize * j + 1}
          y={charSize * -1.5}
          width={charSize}
          height={charSize}
        />
      {/each}
    </g>
  {/each}

  <g transform="translate({x} {y + h - bottom})">
    <use
      href="#records-symbol-mario"
      width={bottom}
      x={left + 1}
      y={bottom * -1}
      height={bottom}
    />
    <rect fill="url(#records-pattern-block)" width={w} height={bottom} />
  </g>
</svg>
