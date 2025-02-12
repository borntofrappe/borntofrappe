<script>
  import site from "$lib/site.js";
  /** @typedef {import('$lib/components/tangram/shapes.js').Key} Key */

  import Tangram from "$lib/components/tangram/Tangram.svelte";
  import shapes from "$lib/components/tangram/shapes.js";

  const keys = /** @type {Array<Key>}*/ (Object.keys(shapes));

  let tangram = $state(true);
  let key = $state(keys[0]);

  const handleToggle = () => {
    tangram = !tangram;
    if (!tangram) {
      /** @type { Key } */
      let newKey;
      do {
        newKey = keys[Math.floor(Math.random() * keys.length)];
      } while (newKey === key);

      key = newKey;
    }
  };
</script>

<svelte:head>
  <title>Tangram | {site.title}</title>
  <meta
    name="description"
    content="Shuffle the pieces of a tangram puzzle to create interesting visuals."
  />
  <link rel="icon" href="/icons/tangram.svg" type="image/svg+xml" />
</svelte:head>

<main>
  <div class="[ visually-hidden ]">
    <h1>Tangram</h1>
    <p>Shuffle the pieces of a tangram puzzle to create interesting visuals.</p>
  </div>
  <label class:tangram>
    <span class="[ visually-hidden ]">
      {tangram
        ? "Move the pieces to create a new shape."
        : "Move the pieces back together."}
    </span>
    <input checked={tangram} onchange={handleToggle} type="checkbox" />
    <Tangram {key} padding={5} />
  </label>
</main>

<style>
  main {
    min-block-size: 100svb;
    display: grid;
    place-items: center;
    color: hsl(210 16% 82%);
    background: hsl(210 24% 16%);
  }

  main ::selection {
    color: hsl(210 16% 82%);
    background: hsl(209 34% 30%);
  }

  label {
    --size: 99vmin;
    --max-size: 52rem;
    display: block;
    background: none;
    border: none;
    block-size: var(--size);
    inline-size: var(--size);
    max-block-size: var(--max-size);
    max-inline-size: var(--max-size);
    aspect-ratio: 1/1;
    position: relative;
  }

  label input {
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    block-size: 100%;
    inline-size: 100%;
    opacity: 0;
  }

  label > :global(svg path) {
    transition: transform 0.75s cubic-bezier(0.49, 0.11, 0.1, 1.32);
  }

  label.tangram > :global(svg path:nth-of-type(1)) {
    transform: translate(0px, 0px) rotate(0deg) !important;
  }

  label.tangram > :global(svg path:nth-of-type(2)) {
    transform: translate(0px, 0px) rotate(0deg) !important;
  }

  label.tangram > :global(svg path:nth-of-type(3)) {
    transform: translate(3px, 1px) rotate(0deg) !important;
  }

  label.tangram > :global(svg path:nth-of-type(4)) {
    transform: translate(1px, 3px) rotate(0deg) !important;
  }

  label.tangram > :global(svg path:nth-of-type(5)) {
    transform: translate(2px, 4px) rotate(0deg) !important;
  }

  label.tangram > :global(svg path:nth-of-type(6)) {
    transform: translate(2px, 2px) rotate(0deg) !important;
  }

  label.tangram > :global(svg path:nth-of-type(7)) {
    transform: translate(0px, 4px) rotate(0deg) !important;
  }
</style>
