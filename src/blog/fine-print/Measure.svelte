<script>
  import { tick } from "svelte";

  /** @type { SVGSVGElement }*/
  let svg;

  const measure = 20;
  let text = $state(
    "Your scalable, monospace, vector text is now free to go on and on and on..."
  );

  let script = $derived(
    text.split(" ").reduce((acc, curr) => {
      if (acc[acc.length - 1].length >= measure) {
        acc.push(curr);
      } else {
        acc[acc.length - 1] += ` ${curr}`;
      }

      return acc;
    }, /** @type Array<string> */ ([""]))
  );

  $effect(() => {
    if (svg && text) {
      handleText();
    }
  });

  const handleText = async () => {
    await tick();

    const { x, y, width, height } = svg.getBBox();
    svg.setAttribute("viewBox", `${x} ${y} ${width} ${height}`);
  };
</script>

<div>
  <textarea bind:value={text}></textarea>

  <svg
    bind:this={svg}
    style="font-family: monospace; font-size: 16px; display: block;"
    viewBox="-1 -17 250 60"
  >
    <g fill="currentColor">
      {#each script as text, i}
        <text y={18 * i}>{text}</text>
      {/each}
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5em;
  }

  textarea {
    display: block;
    inline-size: 100%;
    min-block-size: 10ex;
    color: hsl(209, 61%, 16%);
    background: hsl(0, 0%, 100%);
    border: 0.25rem solid hsl(210, 16%, 82%);
    border-radius: 0.25rem;
    padding: 0.5rem;
    resize: none;
    outline: none;
  }

  textarea::selection {
    color: hsl(209, 61%, 16%);
    background: hsl(210, 42%, 96%);
  }
</style>
