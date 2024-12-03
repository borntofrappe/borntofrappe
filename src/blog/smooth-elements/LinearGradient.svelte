<script>
  import { onMount } from "svelte";

  const color = "hsl(210 11% 15%)";
  const background = "hsl(210 14% 89%)";
  const colors = ["aquamarine", "cyan"];
  const id = `linear-gradient-${colors.join("-")}`;

  let x1 = $state(0);
  let y1 = $state(0);
  let x2 = $state(1);
  let y2 = $state(0);

  /** @type { SVGElement }*/
  let svg;
  let w = 0;
  let h = 0;
  const viewBox = {
    x: -0.2,
    y: -0.15,
    width: 1.4,
    height: 1.3,
  };

  /** @typedef {{x: number, y: number}} Coordinate */
  /** @typedef {'ArrowUp' | 'ArrowRight' | 'ArrowDown' | 'ArrowLeft'} Key */

  /** @type {Object.<Key, Coordinate>} */
  const keys = {
    ArrowUp: {
      x: 0,
      y: -0.01,
    },
    ArrowRight: {
      x: 0.01,
      y: 0,
    },
    ArrowDown: {
      x: 0,
      y: 0.01,
    },
    ArrowLeft: {
      x: -0.01,
      y: 0,
    },
  };

  /** @type { 'wait' | 'start' | 'end' }*/
  let mode = $state("wait");

  const handleSize = () => {
    if (svg === null) return;

    const { width, height } = svg.getBoundingClientRect();
    w = width;
    h = height;
  };

  /**
   * @param {{ offsetX: number, offsetY: number}} param
   */
  const getCoordinates = ({ offsetX, offsetY }) => {
    const x = (offsetX / w) * viewBox.width + viewBox.x;
    const y = (offsetY / h) * viewBox.height + viewBox.y;

    return { x, y };
  };

  /**
   * @param { number } d
   */
  const formatCoordinate = (d) => d.toFixed(2);

  /**
   * @param { PointerEvent } event
   */
  const handlePointerdown = (event) => {
    const { x, y } = getCoordinates(event);

    const d1 = ((x1 - x) ** 2 + (y1 - y) ** 2) ** 0.5;
    const d2 = ((x2 - x) ** 2 + (y2 - y) ** 2) ** 0.5;

    mode = d1 < d2 ? "start" : "end";
  };

  /**
   * @param { PointerEvent } event
   */
  const handlePointermove = (event) => {
    if (mode === "wait") return;

    const { x, y } = getCoordinates(event);
    if (mode === "start") {
      x1 = x;
      y1 = y;
    } else if (mode === "end") {
      x2 = x;
      y2 = y;
    }
  };

  const handlePointerend = () => {
    mode = "wait";
  };

  /**
   * @param { KeyboardEvent } event
   */
  const handleKeydown = (event) => {
    const { key } = event;
    if (key === " ") {
      event.preventDefault();
      mode = mode === "start" ? "end" : "start";
    } else if (keys[key]) {
      event.preventDefault();
      const { x, y } = keys[key];
      if (mode === "start") {
        x1 += x;
        y1 += y;
      } else if (mode === "end") {
        x2 += x;
        y2 += y;
      }
    }
  };

  const handleBlur = () => {
    mode = "wait";
  };

  onMount(() => {
    handleSize();
  });
</script>

<svelte:window onresize={handleSize} />

<svg
  bind:this={svg}
  style="display: block; cursor: pointer;"
  viewBox="{viewBox.x} {viewBox.y} {viewBox.width} {viewBox.height}"
  onpointerdown={handlePointerdown}
  onpointermove={handlePointermove}
  onpointerup={handlePointerend}
  onpointerleave={handlePointerend}
  ontouchmove={(event) => {
    event.preventDefault();
  }}
  aria-label="Press the space bar to toggle between the stop colors. Use the arrow keys to update the position of the matching control points."
  role="menu"
  tabindex="0"
  onkeydown={handleKeydown}
  onblur={handleBlur}
>
  <defs>
    <linearGradient {id} {x1} {y1} {x2} {y2}>
      <stop stop-color={colors[0]} offset="0" />
      <stop stop-color={colors[1]} offset="1" />
    </linearGradient>
  </defs>
  <rect
    fill={background}
    x={viewBox.x}
    y={viewBox.y}
    width={viewBox.width}
    height={viewBox.height}
  />
  <rect fill="url(#{id})" width="1" height="1" />

  <g fill="none" stroke={color} stroke-width="0.007">
    <line {x1} {y1} {x2} {y2} />
  </g>
  <g stroke={color}>
    <circle
      fill={colors[0]}
      stroke-width={mode === "start" ? 0.02 : 0.007}
      cx={x1}
      cy={y1}
      r="0.05"
    />
    <circle
      fill={colors[1]}
      stroke-width={mode === "end" ? 0.02 : 0.007}
      cx={x2}
      cy={y2}
      r="0.05"
    />
  </g>
</svg>

<!-- prettier-ignore -->
<pre><code>&lt;linearGradient x1="<span>{formatCoordinate(x1)}</span>" y1="<span>{formatCoordinate(y1)}</span>" x2="<span>{formatCoordinate(x2)}</span>" y2="<span>{formatCoordinate(x2)}</span>" id="water-wave"&gt;
  <svg viewBox="-0.5 -0.5 1 1" width="1em" height="1em"><circle fill={colors[0]} r="0.5" /></svg> &lt;stop stop-color="{colors[0]}" offset="0" /&gt;
  <svg viewBox="-0.5 -0.5 1 1" width="1em" height="1em"><circle fill={colors[1]} r="0.5" /></svg> &lt;stop stop-color="{colors[1]}" offset="1" /&gt;
&lt;/linearGradient&gt;</code></pre>

<style>
  svg:focus:not(:focus-visible) {
    outline: none;
  }

  code {
    font-size: 1em;
  }

  code > span {
    font-weight: 700;
  }

  code > svg {
    vertical-align: -0.1em;
    vertical-align: -0.1lh;
  }

  pre {
    overflow-x: auto;
  }
</style>
