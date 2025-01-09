<script>
  import site from "$lib/site";
  import TimePiece from "./TimePiece.svelte";
</script>

<svelte:head>
  <title>{site.title}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<main>
  <h1>Hi there</h1>
  <p>time's pressing for a brand new look</p>
  <figure>
    <TimePiece />
  </figure>
</main>

<style>
  main {
    padding: 1rem;
  }

  main > * + * {
    margin-block-start: 0.5rem;
  }

  figure {
    margin-block-start: 1.5rem;
    max-inline-size: 20rem;
  }

  figure :global(svg) {
    inline-size: 100%;
  }
</style>
