<script>
  /** @type {{ code: string }}*/
  let {
    code = `<mi>C</mi>
<mo>=</mo>
<mn>2</mn>
<mi>&pi;</mi>
<mi>r</mi>`,
  } = $props();

  const panels = ["output", "input"];
  let panel = $state(panels[0]);

  const togglePanel = () => {
    panel = panel === panels[0] ? panels[1] : panels[0];
  };
</script>

<article>
  <header>
    <svg width="3.1em" height="0.7em" viewBox="-1.75 -1.75 15.5 3.5">
      <circle fill="hsl(3 100% 68%)" r="1.75" />
      <circle fill="hsl(41 99% 60%)" cx="5.75" r="1.75" />
      <circle fill="hsl(129 62% 49%)" cx="11.5" r="1.75" />
    </svg>
    <span>
      <svg width="1em" height="1em" viewBox="-2.375 -2.375 4.75 4.75">
        <g fill="none" stroke="currentColor">
          <rect
            stroke-width="0.75"
            x="-2"
            y="-2"
            width="4"
            height="4"
            rx="0.5"
          />
          <path
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M 0 -0.75 0 0.75 M -0.75 0 0.75 0"
          />
        </g>
      </svg>
      MathML
    </span>
  </header>
  <div data-panel={panel}>
    <pre><code>{code}</code></pre>
    <div>
      <math xmlns="http://www.w3.org/1998/Math/MathML">{@html code}</math>
    </div>
  </div>
  <button onclick={togglePanel} aria-pressed={panel === panels[1]}>
    <svg width="1em" height="1em" viewBox="-2.5 -2.5 5 5">
      <g fill="none" stroke="currentColor">
        <rect stroke-width="0.75" x="-2" y="-2" width="4" height="4" rx="0.5" />
        <path
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M -0.75 -0.75 0 0 -0.75 0.75"
        />
      </g>
    </svg>
    <span>Show code</span>
  </button>
</article>

<style>
  [data-panel] {
    position: relative;
  }

  [data-panel] > div {
    position: absolute;
    inset-inline-start: 50%;
    inset-block-start: 50%;
    translate: -50% -50%;
  }

  [data-panel="input"] > pre {
    visibility: visible;
    opacity: 1;
  }

  [data-panel="input"] > div {
    visibility: hidden;
    opacity: 0;
  }

  [data-panel="output"] > pre {
    visibility: hidden;
    opacity: 0;
  }

  [data-panel="output"] > div {
    visibility: visible;
    opacity: 1;
  }

  [data-panel="input"] > pre,
  [data-panel="output"] > div {
    transition: opacity 0.25s;
  }

  article {
    color: hsl(0 0% 94%);
    background: hsl(249 11% 12%);
    max-inline-size: 50ch;
    margin-inline: auto;
    border-radius: 1rem;
  }

  header {
    color: hsl(0 0% 94%);
    background: hsl(249 8% 17%);
    padding: 0.75rem 1rem;
    border-radius: inherit;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  header > svg {
    display: block;
    block-size: 1rem;
    inline-size: auto;
  }

  header > span {
    color: hsl(258 97% 74%);
    font-family: monospace;
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  header > span > svg {
    color: hsl(0 0% 94%);
  }

  [data-panel] {
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
  }

  pre {
    overflow-x: auto;
    margin: 0;
  }

  code {
    padding: 0;
    font-family: monospace;
    font-weight: 700;
    color: inherit;
    background: none;
  }

  button {
    cursor: pointer;
    font-family: monospace;
    font-size: 0.9rem;
    font-weight: 700;
    color: inherit;
    background: inherit;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: inherit;
    border-end-start-radius: 0;
    border-start-end-radius: 0;
    display: block;
    margin-inline-start: auto;
    transition-property: color, background;
    transition-duration: 0.25s;
  }

  button > svg {
    position: relative;
    inset-block-start: 0.1rem;
    inline-size: 1rem;
    block-size: 1rem;
  }

  button[aria-pressed="true"] {
    color: hsl(249 11% 12%);
    background: hsl(0 0% 94%);
  }

  button::focus-visible {
    outline: 2px solid hsl(0 0% 94%);
    outline-offset: 2px;
  }
</style>
