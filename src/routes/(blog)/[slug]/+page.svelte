<script>
  import site from "$lib/site";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.title} | {site.title}</title>
  <meta name="description" content={data.description} />
</svelte:head>

<main>
  <h1 class="[ heading ]">{data.title}</h1>

  {@render data.content()}
</main>

<style>
  main > :global(p) {
    max-inline-size: 70ch;
  }

  main > :global(blockquote) {
    max-inline-size: 50ch;
  }

  main > :global(:is(h1, h2, h3)) {
    --measure--1: 30ch;
  }

  main > :global(* + *) {
    margin-block-start: var(--flow-space, 1em);
  }

  main > :global(:is(h1, h2, h3, blockquote, pre)) {
    --flow-space: 1.1em;
  }

  main > :global(:is(div, figure, table)) {
    --flow-space: 1.5em;
  }

  main > :global(:is(h1, h2, h3) + *) {
    --flow-space: 0.6em;
  }

  main > :global(:is(ul, ol)) {
    padding-inline-start: 1em;
  }
</style>
