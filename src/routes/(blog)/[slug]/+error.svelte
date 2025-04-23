<script>
  import { page } from "$app/state";
  import site from "$lib/site";
  import Brianna from "$lib/components/mignon/Brianna.svelte";
</script>

<svelte:head>
  <title>Error {page.status} | {site.title}</title>
  <meta name="description" content={page?.error?.message} />
</svelte:head>

<div>
  <main>
    <h1
      class="stroke-text"
      style="--stroke: hsl(209 61% 16%); --fill: hsl(212 33% 89%)"
    >
      {page.status} - Page not found
    </h1>
    <p>
      Unfortunately, we don't have a page which matches your search. You might
      have followed a broken link, but you might have also looked for a page
      that is no longer there. Without trying to rhyme, this is quite rare, but
      you are more than right to complain.
    </p>

    <p>
      If you have a GitHub account you can
      <a
        class="link-underline"
        href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{page.status}&body={page
          ?.error?.message}&labels=bug">file an issue</a
      >.
    </p>
    <p>
      If you need a place that is definitely supposed to be there, you can try <a
        class="link-underline"
        href="/">the home page</a
      >.
    </p>
  </main>
  <figure>
    <Brianna />
  </figure>
</div>

<style>
  div {
    color: hsl(209 61% 16%);
    background: hsl(210 36% 96%);
    min-block-size: 100svb;
    padding: var(--space-s) var(--space-m);
    padding-block-end: 0;
  }

  div ::selection {
    color: hsl(211 39% 23%);
    background: hsl(210 31% 80%);
  }

  div > * + * {
    margin-block-start: var(--space-m);
  }

  main {
    max-inline-size: var(--measure-m);
    margin-inline: auto;
  }

  main > * + * {
    margin-block-start: 1em;
  }

  figure {
    max-inline-size: var(--measure-s);
    margin-inline: auto;
  }
</style>
