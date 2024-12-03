<script>
  import { tick } from "svelte";

  /** @type { SVGSVGElement }*/
  let svg;

  const measure = 20;
  let text = $state(
    "Did you know the colors of a double rainbow are reversed between arcs? The more you know :)"
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
    svg.setAttribute("viewBox", `${x - 1} ${y - 1} ${width + 2} ${height + 2}`);
  };
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div>
  <textarea bind:value={text}></textarea>
  <svg
    bind:this={svg}
    style="font-family: 'Cherry Bomb One', cursive; letter-spacing: 1px; font-size: 16px; display: block;"
    viewBox="-1 -17 200 80"
  >
    <defs>
      <linearGradient id="rainbow-print-gradient">
        <stop stop-color="hsl(0, 75%, 67%)" offset="0" />
        <stop
          stop-color="hsl(51.42857142857143, 75%, 61.297093396292745%)"
          offset="0.166"
        />
        <stop
          stop-color="hsl(102.85714285714286, 75%, 65.8704694055762%)"
          offset="0.333"
        />
        <stop
          stop-color="hsl(154.28571428571428, 75%, 63.33243719813106%)"
          offset="0.5"
        />
        <stop
          stop-color="hsl(205.71428571428572, 75%, 63.33243719813106%)"
          offset="0.666"
        />
        <stop
          stop-color="hsl(257.14285714285717, 75%, 65.8704694055762%)"
          offset="0.833"
        />
        <stop
          stop-color="hsl(308.57142857142856, 75%, 61.297093396292745%)"
          offset="1"
        />
      </linearGradient>
    </defs>
    <g
      fill="none"
      stroke="url(#rainbow-print-gradient)"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
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
