<script>
  import { onMount } from "svelte";

  const color = "hsl(210 11% 15%)";
  const background = "hsl(210 14% 89%)";
  const colors = ["aquamarine", "cyan"];
  const id = `radial-gradient-${colors.join("-")}`;

  let cx = $state(0.5);
  let cy = $state(0.5);
  let rx = $state(1);
  let r = $derived(Math.abs(rx - cx));

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

    const dc = ((cx - x) ** 2 + (cy - y) ** 2) ** 0.5;
    const dr = ((rx - x) ** 2 + (cy - y) ** 2) ** 0.5;

    mode = dc < dr ? "start" : "end";
  };

  /**
   * @param { PointerEvent } event
   */
  const handlePointermove = (event) => {
    if (mode === "wait") return;

    const { x, y } = getCoordinates(event);
    if (mode === "start") {
      cx = x;
      rx = rx > cx ? cx + r : cx - r;
    } else if (mode === "end") {
      rx = x;
    }

    cy = y;
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
    } else if (keys[key] && mode !== "wait") {
      event.preventDefault();
      const { x, y } = keys[key];
      if (mode === "start") {
        cx += x;
        rx = rx > cx ? cx + r : cx - r;
      } else if (mode === "end") {
        rx += x;
      }
      cy += y;
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
    <radialGradient {id} {cx} {cy} {r}>
      <stop stop-color={colors[0]} offset="0" />
      <stop stop-color={colors[1]} offset="1" />
    </radialGradient>
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
    <circle {cx} {cy} {r} />
  </g>

  <g stroke={color}>
    <circle
      fill={colors[0]}
      stroke-width={mode === "start" ? 0.02 : 0.007}
      {cx}
      {cy}
      r="0.05"
    />
    <circle
      fill={colors[1]}
      stroke-width={mode === "end" ? 0.02 : 0.007}
      cx={rx}
      {cy}
      r="0.05"
    />
  </g>
</svg>

<!-- prettier-ignore -->
<pre><code>&lt;radialGradient r="<span>{formatCoordinate(r)}</span>" cx="<span>{formatCoordinate(cx)}</span>" cy="<span>{formatCoordinate(cy)}</span>" id="water-dip"&gt;
  <svg viewBox="-0.5 -0.5 1 1" width="1em" height="1em"><circle fill={colors[0]} r="0.5" /></svg> &lt;stop stop-color="{colors[0]}" offset="0" /&gt;
  <svg viewBox="-0.5 -0.5 1 1" width="1em" height="1em"><circle fill={colors[1]} r="0.5" /></svg> &lt;stop stop-color="{colors[1]}" offset="1" /&gt;
&lt;/radialGradient&gt;</code></pre>

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
