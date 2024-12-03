<script>
  /** @type {{ x: number, y: number,width: number,height: number,patternWidth: number,patternHeight: number,commands: string, accentColor: string }}*/
  let {
    x = 0,
    y = 0,
    width = 10,
    height = 10,
    patternWidth = 1,
    patternHeight = 1,
    commands = "M 2 2 h 6 v 6 h -6 z",
    accentColor = "gold",
  } = $props();

  let viewBox = $derived(`${x} ${y} ${width} ${height}`);

  let value = $state(0);
  let steps = $derived(commands.match(/[a-zA-Z]([^a-zA-Z]+)?/g) || []);
  let d = $derived(steps.slice(0, value).join(""));
</script>

<div>
  <label>
    Drag the handle to draw the <code>&lt;path&gt;</code> element in {steps.length}
    steps.

    <input type="range" min={0} max={steps.length} step={1} bind:value />
  </label>

  <p>
    <code
      >d="<span style:border-block-end="0.2rem solid {accentColor}">{d}</span
      >"</code
    >
  </p>

  <svg {viewBox}>
    <defs>
      <pattern
        id="commands-pattern-grid"
        viewBox="0 0 1 1"
        width={patternWidth}
        height={patternHeight}
        patternUnits="userSpaceOnUse"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-width={Math.min(patternWidth, patternHeight) / 30}
        >
          <rect width="1" height="1" />
        </g>
      </pattern>

      <marker id="marker-dot" viewBox="-1 -1 2 2">
        <circle fill={accentColor} r="1" />
      </marker>
    </defs>
    <rect fill="url(#commands-pattern-grid)" {x} {y} {width} {height} />

    <g fill="none" stroke="currentColor">
      <path d={commands} stroke-width={Math.min(width, height) / 60} />
      <path
        stroke-width={Math.min(width, height) / 50}
        stroke={accentColor}
        {d}
        marker-start="url(#marker-dot)"
        marker-mid="url(#marker-dot)"
        marker-end="url(#marker-dot)"
      />
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  label {
    display: block;
  }

  label input {
    margin-block-start: 0.5rem;
    display: block;
    inline-size: 100%;
  }

  svg {
    display: block;
  }
</style>
