<script>
  import site from "$lib/site.js";
  import Marks from "./Marks.svelte";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /** @typedef { "st" | "nd" | "rd" | "th" } Cardinal */
  /** @type Object.<number, Cardinal> */
  const cardinalKeys = {
    1: "st",
    2: "nd",
    3: "rd",
  };

  const date = new Date();
  let n = $derived(date.getDate());
  let dateString = $derived.by(() => {
    const [unit, deca] = n
      .toString()
      .split("")
      .reverse()
      .map((d) => parseInt(d, 10));

    /** @type { Cardinal } */
    let dateSuffix = "th";
    if (deca !== 1 && unit in cardinalKeys) {
      dateSuffix = cardinalKeys[unit];
    }

    return `${n}${dateSuffix} of ${months[date.getMonth()]}`;
  });
</script>

<svelte:head>
  <title>{dateString} | {site.title}</title>
  <meta
    name="description"
    content="What day is today? Here's a direct answer to an often puzzling question."
  />
  <link rel="icon" href="/icons/today.svg" type="image/svg+xml" />
</svelte:head>

<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
  <defs>
    <filter id="filter-chalk">
      <feTurbulence
        type="turbulence"
        baseFrequency="0.6"
        numOctaves="3"
        result="turbulence"
      />
      <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="8" />
    </filter>
    <filter id="filter-noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.7"
        numOctaves="10"
        stitchTiles="stitch"
      />
    </filter>
  </defs>
</svg>

<div>
  <main class="[ visually-hidden ]">
    <h1>What day is today?</h1>
    <p>{dateString}</p>
  </main>
  <p aria-hidden="true">{dateString}</p>
  <Marks {n} />
</div>

<style>
  div {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-block-size: 100svb;
    color: hsl(0 0% 92%);
    background: hsl(0 0% 17%);
    padding: var(--step-space-200);
    position: relative;
  }

  div ::selection {
    color: hsl(0 0% 92%);
    background: hsl(0 0% 17%);
  }

  div::before {
    box-sizing: border-box;
    content: "";
    position: absolute;
    inset: 0;
    background: hsl(0 0% 100%);
    opacity: 0.35;
    filter: url(#filter-noise);
  }

  div > :global(svg) {
    display: block;
    inline-size: 100vmin;
    block-size: auto;
    max-block-size: 16rem;
  }

  div > :global(*) {
    filter: url(#filter-chalk);
  }

  p {
    font-size: clamp(4.0311rem, 3.36rem + 3.3555vw, 5.9605rem);
    font-weight: 700;
    line-height: 1.2;
  }
</style>
