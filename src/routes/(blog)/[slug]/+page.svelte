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

  main > :global(p > code) {
    color: var(--text-1);
    background: var(--surface-1);
    display: inline-block;
    padding: 1px var(--space-2xs);
    border-radius: var(--space-2xs);
  }

  main > :global(pre) {
    tab-size: 2;
    line-height: 1.5;
    border-radius: var(--space-xs);
    padding: var(--space-s) var(--space-m);
  }

  main > :global(pre[data-language]) {
    padding-block-start: calc(var(--space-s) + 1em);
    position: relative;
  }

  main > :global(pre[data-language]::before) {
    position: absolute;
    inset-inline-end: var(--space-m);
    inset-block-start: var(--space-2xs);
    content: attr(data-language);
    font-size: 0.95em;
    color: currentColor;
    color: oklch(from currentColor calc(l * 0.7) c h);
  }
</style>
