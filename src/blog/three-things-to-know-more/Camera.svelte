<script>
  const width = 12;
  const height = 10;
  let fieldOfView = $state(75);
  let farClippingPlane = $state(5);
  let cameraZ = $state(3);
  let x = $derived(
    Math.tan((fieldOfView / 2 / 180) * Math.PI) * farClippingPlane
  );
</script>

<article>
  <svg viewBox="0 0 {width} {height}">
    <rect fill="var(--color-surface-1, hsl(0 0% 98%))" {width} {height} />
    <path
      transform="translate({width / 2} {height / 2 + cameraZ}) scale(1 -1)"
      d="M 0 0 {x} {farClippingPlane} {x * -1} {farClippingPlane}"
      fill="var(--color-surface-2, hsl(0 0% 95%))"
    />
    <g
      fill="none"
      stroke="var(--color-text-2, hsl(0 0% 31%))"
      stroke-width="0.01"
      opacity="0.3"
    >
      <path
        d={Array(width - 1)
          .fill("")
          .map((_, i) => `M ${i + 1} 0 V ${height}`)
          .join(" ")}
      />
      <path
        d={Array(height - 1)
          .fill("")
          .map((_, i) => `M 0 ${i + 1} H ${width}`)
          .join(" ")}
      />
    </g>
    <g
      fill="var(--color-text-1, hl(0 0% 24%))"
      font-family="monospace"
      font-size="0.8"
    >
      <text x={width / 2 + 0.05} y="0.6">-z</text>
      <text x={width / 2 + 0.05} y={height - 0.2}>+z</text>
      <text x="0" y={height / 2 + 0.7}>-x</text>
      <text text-anchor="end" x={width} y={height / 2 + 0.7}>+x</text>
    </g>
    <g
      fill="none"
      stroke="var(--color-text-2, hsl(0 0% 31%))"
      stroke-width="0.0175"
    >
      <path d="M {width / 2} 0 V {height} M 0 {height / 2} H {width}" />
    </g>
    <g transform="translate({width / 2} {height / 2})">
      <rect
        fill="var(--color-text-1, hsl(0 0% 24%))"
        x="-1"
        y="-0.5"
        width="2"
        height="1"
      />
      <g
        transform="translate(0 {cameraZ})"
        fill="var(--color-surface-2, hsl(0 0% 95%))"
        stroke="var(--color-text-1, hsl(0 0% 24%))"
        stroke-width="0.02"
      >
        <path
          d="M -0.1 0.2 -0.25 0 0.25 0 0.1 0.2 M -0.1 0 A 0.1 0.1 0 0 1 0.1 0"
        />
        <rect x="-0.35" y="0.2" width="0.7" height="0.7" />
      </g>
    </g>
  </svg>

  <div>
    <label>
      <span>Field of view </span>
      <output><code>{fieldOfView}</code></output>
      <input
        style:accent-color="hotpink"
        type="range"
        min="30"
        max="90"
        bind:value={fieldOfView}
        step="5"
      />
    </label>

    <label>
      <span>Far clipping plane</span>
      <output><code>{farClippingPlane}</code></output>
      <input
        style:accent-color="lime"
        type="range"
        min="1"
        max="8"
        bind:value={farClippingPlane}
      />
    </label>

    <label>
      <span>Camera z</span>
      <output><code>{cameraZ}</code></output>
      <input
        style:accent-color="cyan"
        type="range"
        min="0"
        max="4"
        bind:value={cameraZ}
      />
    </label>
  </div>
</article>

<style>
  article {
    --color-text-1: light-dark(hsl(210 10% 23%), hsl(210 14% 89%));
    --color-text-2: light-dark(hsl(210 9% 31%), hsl(210 11% 71%));
    --color-surface-1: light-dark(hsl(210 17% 98%), hsl(210 11% 15%));
    --color-surface-2: light-dark(hsl(210 17% 95%), hsl(210 10% 23%));
    color: var(--color-text-1);
    background: var(--color-surface-1);
    padding: 2rem;

    & > * + * {
      margin-block-start: 1rem;
    }

    code {
      background: var(--color-surface-2);
    }
  }

  div {
    font-family: monospace;
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 0.5rem;

    & label {
      display: contents;
    }

    & output {
      justify-self: end;
    }

    & input {
      inline-size: 100%;
    }
  }
</style>
