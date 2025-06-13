<script>
  import site from "$lib/site";
  import Ray from "$lib/components/mignon/Ray.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>{site.title}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<main>
  <div>
    <h1 class="stroke-text">{site.title}</h1>
    <p>Name's Gabriele Corti, and I write you from northern Italy.</p>
    <p>
      I take an immensurable amount of pleasure out of materializing an idea
      with code.
    </p>
    <p>
      In this website, this is with Svelte and SVG. And I hope to be able to
      prove it soon.
    </p>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: hsl(38 13% 17%);
    background: hsl(40 23% 97%);
    min-block-size: 100svb;
  }

  div {
    max-inline-size: 60ch;

    & > * + * {
      margin-block-start: 1em;
    }
  }
</style>
