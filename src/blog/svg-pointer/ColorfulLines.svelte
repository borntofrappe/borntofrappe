<script>
  const colors = [
    "hsl(172 100% 46%)",
    "hsl(261 54% 72%)",
    "hsl(10 76% 74%)",
    "hsl(67 78% 61%)",
  ];

  let color = $state(colors[0]);
  /** @typedef {Array<number>} Points */
  /** @type Points */
  let points = $state([]);
  /** @type Array<{color: string, points: Points}> */
  let lines = $state([]);

  /** @type { 'wait' | 'draw' }*/
  let mode = "wait";

  const handleStart = () => {
    mode = "draw";
  };

  const handleEnd = () => {
    mode = "wait";

    if (points.length > 0) {
      lines = [
        ...lines,
        {
          color,
          points: [...points],
        },
      ];
      color = colors[(colors.indexOf(color) + +1) % colors.length];
      points = [];
    }
  };

  /**
   * @param { PointerEvent } event
   */
  const handlePoint = (event) => {
    if (mode !== "draw") return;
    const element = /** @type { SVGSVGElement }*/ (event.target);
    const { clientX, clientY } = event;
    const point = new DOMPoint(clientX, clientY);
    const { x, y } = point.matrixTransform(element.getScreenCTM()?.inverse());
    points = [...points, x, y];
  };
</script>

<svg
  onpointerdown={handleStart}
  onpointerup={handleEnd}
  onpointerleave={handleEnd}
  onpointermove={handlePoint}
  ontouchmove={(event) => {
    event.preventDefault();
  }}
  style="display: block;"
  viewBox="-50 -50 100 100"
>
  <defs>
    <rect
      id="colorful-lines-background"
      x="-50"
      y="-50"
      width="100"
      height="100"
    />
    <path
      id="colorful-lines-room"
      d="M 10 40 -10 40 A 2.5 2.5 0 0 1 -12.5 37.5 L -12.5 32.5 A 2.5 2.5 0 0 0 -15 30 L -25 30 -35 20 -35 -30 -25 -40 25 -40 35 -30 35 20 25 30 15 30 A 2.5 2.5 0 0 0 12.5 32.5 L 12.5 37.5 A 2.5 2.5 0 0 1 10 40 Z"
    />
    <path
      id="colorful-lines-floor"
      d="M 10 40 -10 40 A 2.5 2.5 0 0 1 -12.5 37.5 L -12.5 32.5 A 2.5 2.5 0 0 0 -15 30 L -25 30 -35 20 -35 -5 -25 -15 25 -15 35 -5 35 20 25 30 15 30 A 2.5 2.5 0 0 0 12.5 32.5 L 12.5 37.5 A 2.5 2.5 0 0 1 10 40 Z"
    />
    <path
      id="colorful-lines-peg"
      d="M -2 8 -2 0 A 2.05 2.05 0 0 1 2 0 L 2 8 A 2.1 2.1 0 0 1 -2 8 Z M -2 0 A 2.1 2.1 0 0 0 2 0 M -0.75 3 -0.75 4 M 0.75 4 0.75 5 M -0.5 5.5 -0.5 6.5 M 0.5 7.5 Z"
    />
    <g id="colorful-lines-bed">
      <use x="-15" y="1" href="#colorful-lines-peg" />
      <use x="2" y="4" href="#colorful-lines-peg" />
      <use x="15" y="2" href="#colorful-lines-peg" />
      <path
        d="M -13 5 -11.5 5.5 M -13 8.5 -11.5 9 M -10 3 A 2 2 0 0 0 -11.5 5 L -11.5 10.5 Q -9.5 11 -8 10 Q -6 11 -4 11 Q -2 12 0 12 M 4 7.5 Q 5 8 6 7 Q 6.5 7 8 6.5 Q 9 6.5 10 6 Q 11 6 13 5 M 4 11 13 8.5 M 13 2 2 0 Q -2 -0.5 -4 0.5 A 2 2 0 0 0 -6 -1.5 L -9 -0.5 A 2 2 0 0 0 -11 2 A 2 2 0 0 0 -8 3 L -6 2.5 A 2 2 0 0 0 -4 0.5 M -11 2 -13 3 M -6 -1.5 -6 -1.5 A 2.2 2.2 0 0 1 -2 -1.5 L -2 -0.5 M -2 -1.5 A 4 4 0 0 1 -6 -1.5"
      />
    </g>

    <filter id="colorful-lines-filter">
      <feTurbulence baseFrequency=".03" numOctaves="3" />
      <feDisplacementMap in="SourceGraphic" scale="2" />
    </filter>

    <filter
      id="colorful-lines-filter-brush"
      x="-0.2"
      y="-0.2"
      width="1.4"
      height="1.4"
    >
      <feTurbulence baseFrequency=".03" numOctaves="3" />
      <feDisplacementMap in="SourceGraphic" scale="3" />
    </filter>

    <pattern
      id="colorful-lines-pattern"
      viewBox="-1 -1 2 2"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)"
      width="2"
      height="2"
    >
      <circle fill="hsl(40 9% 66%)" r="0.4" />
    </pattern>

    <mask id="colorful-lines-mask-room">
      <use fill="white" href="#colorful-lines-background" />
      <use
        filter="url(#colorful-lines-filter)"
        fill="black"
        stroke="black"
        stroke-width="2"
        href="#colorful-lines-room"
      />
    </mask>

    <mask id="colorful-lines-mask-floor">
      <use fill="white" href="#colorful-lines-background" />
      <g filter="url(#colorful-lines-filter)">
        <use fill="black" stroke="black" href="#colorful-lines-floor" />
        <use
          fill="none"
          stroke="black"
          stroke-width="2"
          href="#colorful-lines-room"
        />
      </g>
    </mask>

    <mask id="colorful-lines-mask-brush">
      <use fill="grey" href="#colorful-lines-background" />
      <use
        filter="url(#colorful-lines-filter)"
        fill="white"
        stroke="white"
        stroke-width="2"
        href="#colorful-lines-room"
      />
    </mask>
  </defs>
  <g style="pointer-events: none;">
    <use fill="hsl(40 69% 95%)" href="#colorful-lines-background" />
    <g filter="url(#colorful-lines-filter)">
      <use fill="hsl(263 3% 47%)" href="#colorful-lines-room" />
      <use fill="hsl(40 69% 95%)" href="#colorful-lines-floor" />
    </g>

    <g
      mask="url(#colorful-lines-mask-brush)"
      filter="url(#colorful-lines-filter-brush)"
      fill="none"
      stroke-width="8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path opacity="0" d="M -50 -50 50 -50 50 50 -50 50 Z" />
      {#each lines as { color, points }}
        <polyline stroke={color} points={points.join(" ")} />
      {/each}
      <polyline stroke={color} points={points.join(" ")} />
    </g>

    <g
      filter="url(#colorful-lines-filter)"
      fill="none"
      stroke="hsl(222 74% 5%)"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <use href="#colorful-lines-floor" />
      <use stroke-width="2" href="#colorful-lines-room" />
      <use href="#colorful-lines-bed" />
    </g>

    <use
      mask="url(#colorful-lines-mask-room)"
      fill="url(#colorful-lines-pattern)"
      href="#colorful-lines-background"
    />
    <use
      mask="url(#colorful-lines-mask-floor)"
      fill="url(#colorful-lines-pattern)"
      href="#colorful-lines-background"
    />
  </g>
</svg>
