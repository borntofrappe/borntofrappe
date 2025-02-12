<script>
  import site from "$lib/site";
  import Header from "../Header.svelte";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.title} | {site.title}</title>
  <meta name="description" content={data.description} />
</svelte:head>

<main>
  <Header title={data.title} />

  <div>
    {@render data.content()}
  </div>
</main>

<style>
  div {
    padding: var(--space-m) var(--space-s);
    max-inline-size: 70ch;
    margin-inline: auto;
  }

  div > :global(blockquote) {
    max-inline-size: 50ch;
  }

  div > :global(:is(h2, h3, h4)) {
    --measure--1: 30ch;
  }

  div > :global(* + *) {
    margin-block-start: var(--flow-space, 1em);
  }

  div > :global(:is(h2, h3, h4, blockquote, pre)) {
    --flow-space: 1.1em;
  }

  div > :global(:is(div, figure, table)) {
    --flow-space: 1.5em;
  }

  div > :global(:is(h2, h3, h4) + *) {
    --flow-space: 0.6em;
  }

  div > :global(:is(ul, ol)) {
    padding-inline-start: 1em;
  }
</style>
