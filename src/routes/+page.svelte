<script>
  import site from "$lib/site";
  import Ray from "./mignon/Ray.svelte";
</script>

<svelte:head>
  <title>{site.title}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<main>
  <h1>{site.title}</h1>
  <p>— a bright day is coming</p>
  <figure>
    <Ray />
  </figure>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: hsl(38 13% 17%);
    background: hsl(40 23% 97%);
    min-block-size: 100svb;
    justify-content: center;
    align-items: center;
  }
  figure {
    inline-size: 100vmin;
    max-inline-size: 32rem;
  }
</style>
