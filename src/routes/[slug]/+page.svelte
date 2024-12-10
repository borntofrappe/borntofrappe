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
    max-inline-size: 70ch;
    padding-inline: 1rem;
    line-height: 1.5;
  }

  main :global(:is(h1, h2, h3)) {
    line-height: 1.1;
  }

  main > :global(* + *) {
    margin-block-start: var(--flow-space, 1em);
  }
</style>
