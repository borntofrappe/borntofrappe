<script>
  import site from "$lib/site";
  import Ray from "./mignon/Ray.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>{site.title}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<main>
  <h1>{site.title}</h1>
  <p>— the sun will rise up, tomorrow</p>
  <figure>
    <Ray />
  </figure>
</main>

<div>
  <Footer illustration="heart" />
</div>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-s);
    color: hsl(38 13% 17%);
    background: hsl(40 23% 97%);
    min-block-size: 100svb;
    z-index: 1;
		position: relative;
  }

  main figure {
    inline-size: 100vmin;
    max-inline-size: 24rem;
  }

  div {
    position: sticky;
    inset-block-end: 0;
  }
</style>
