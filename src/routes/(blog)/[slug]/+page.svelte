<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<main>
  <h1>{data.title}</h1>

  {@render data.content()}
</main>

<style>
  main {
    max-inline-size: var(--measure-0);
    padding: var(--space-s);
  }

  main :global(blockquote) {
    max-inline-size: var(--measure--1);
  }

  main :global(:is(h1, h2, h3)) {
    max-inline-size: var(--measure--2);
  }

  main > :global(* + *) {
    margin-block-start: var(--flow-space, 1em);
  }

  main :global(:is(h1, h2, h3, blockquote)) {
    --flow-space: 1.25em;
  }

  main :global(:is(h1, h2, h3) + *) {
    --flow-space: 0.6em;
  }

  main :global(ul),
  main :global(ol) {
    padding-inline-start: 1em;
  }
</style>
