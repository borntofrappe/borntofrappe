<script>
  import { onMount } from "svelte";

  const n = 500;
  const m = 100;
  const t = { x: 10, y: 5 };
  const noise = 4;
  const d = new Date(2023, 4, 11);
  const p = 15;

  const points = Array(n)
    .fill("")
    .reduce(
      (acc, _, i) => {
        const y0 = acc[acc.length - 1];
        const y1 = y0 + Math.random() * noise - noise / 2;
        const x = i + 1;
        const y = Math.max(0, Math.min(y1, m));
        return [...acc, x, y];
      },
      [0, Math.floor(Math.random() * (m / 2)) + m / 4]
    );

  /**
   * @param { number } d
   */
  const f = (d) => (d < 10 ? `0${d}` : d.toString());

  /**
   * @param { Date } date
   */
  let format = (date) => `${f(date.getDate())}/${f(date.getMonth() + 1)}`;
  if ("DateTimeFormat" in Intl) {
    format = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
  }

  const ticks = {
    x: Array(t.x)
      .fill("")
      .map((_, i, { length }) => {
        const x = n - Math.floor((n / (length - 1)) * i);
        const date = new Date(d.getTime() - (n - x) * 24 * 60 * 60 * 1000);
        const t = format(date);

        return {
          t,
          x,
        };
      }),
    y: Array(t.y)
      .fill("")
      .map((_, i, { length }) => {
        const y = m - Math.floor((m / (length - 1)) * i);
        return {
          y,
        };
      }),
  };

  const v = m;

  /** @type { SVGSVGElement }*/
  let svg;
  /** @type { number }*/
  let w;
  /** @type { number }*/
  let h;
  /** @type { null | number }*/
  let x0 = $state(null);
  let x = $state(0);

  onMount(() => {
    handleSize();
  });

  let isPointerDown = $state(false);

  /**
   * @param { MouseEvent } event
   */
  const handleStart = (event) => {
    const { offsetX } = event;
    x0 = (offsetX / w) * v;

    isPointerDown = true;
  };

  const handleEnd = () => {
    x0 = null;

    isPointerDown = false;
  };

  /**
   * @param { MouseEvent } event
   */
  const handleMove = (event) => {
    event.preventDefault();
    if (!isPointerDown || x0 === null) return;

    const { offsetX } = event;
    const x1 = (offsetX / w) * v;

    x = Math.max(0, Math.min(n - v, x + x0 - x1));

    x0 = x1;
  };

  const handleSize = () => {
    const { width, height } = svg.getBoundingClientRect();
    w = width;
    h = height;
  };
</script>

<svelte:window onresize={handleSize} />

<svg
  bind:this={svg}
  onpointerdown={handleStart}
  onpointerup={handleEnd}
  onpointerleave={handleEnd}
  onpointermove={handleMove}
  onmousemove={(event) => {
    event.preventDefault();
  }}
  ontouchmove={(event) => {
    event.preventDefault();
  }}
  role="presentation"
  style:cursor={isPointerDown ? "grabbing" : "grab"}
  style="display: block;"
  viewBox="{x} 0 {v + p * 2} {m + p * 2}"
>
  <defs>
    <linearGradient id="range-gradient-accent" x1="0" x2="0" y1="0" y2="1">
      <stop
        stop-opacity="0.6"
        stop-color="var(--accent, hsl(187 50% 29%))"
        offset="0"
      />
      <stop
        stop-opacity="0"
        stop-color="var(--accent, hsl(187 50% 29%))"
        offset="1"
      />
    </linearGradient>
  </defs>
  <g transform="translate({p} {p})">
    <g>
      <g
        transform="translate(0 {m})"
        font-size="8"
        font-family="sans-serif"
        fill="currentColor"
        text-anchor="middle"
      >
        {#each ticks.x as { t, x }}
          <text {x} y="10">{t}</text>
        {/each}
      </g>
      <g
        fill="none"
        stroke="currentColor"
        stroke-width="0.1"
        stroke-dasharray="1 3"
        stroke-linejoin="round"
        stroke-linecap="round"
      >
        {#each ticks.y as { y }}
          <path d="M 0 {y} h {n}" />
        {/each}
      </g>
    </g>

    <path
      fill="url(#range-gradient-accent)"
      stroke="none"
      d="M {points} {n} {m} 0 {m}"
    />
    <path fill="none" stroke="var(--accent, hsl(187 50% 29%))" d="M {points}" />
  </g>

  <rect opacity="0" width={v + p * 2} height={m + p * 2} />
</svg>

<style>
  svg {
    display: block;
    --accent: hsl(42 87% 55%);
  }
</style>
