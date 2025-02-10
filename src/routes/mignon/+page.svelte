<script>
  import site from "$lib/site.js";
  import Ray from "./Ray.svelte";
  import Serena from "./Serena.svelte";
  import Claire from "./Claire.svelte";
  import Mayo from "./Mayo.svelte";
  import Brianna from "./Brianna.svelte";

  const Mascots = [Ray, Serena, Claire, Mayo, Brianna];
  const Mascot =
    Mascots[Math.floor(((new Date().getDate() - 1) / 31) * Mascots.length)];
</script>

<svelte:head>
  <title>Mignon | {site.title}</title>
  <meta
    name="description"
    content="Cheer up with a mascot filled with whimsy and charm."
  />
  <link rel="icon" href="/icons/mignon.svg" type="image/svg+xml" />
</svelte:head>

<main>
  <figure>
    <Mascot />
  </figure>
</main>

<style>
  main {
    display: flex;
    color: hsl(38 13% 17%);
    background: hsl(40 23% 97%);
    min-block-size: 100svb;
    figure {
      margin: auto;
    }
  }
  figure {
    inline-size: 100vmin;
    max-inline-size: 32rem;
  }
</style>
