<script>
  import { page } from "$app/state";
  import site from "$lib/site";
  import Serena from "$lib/components/mignon/Serena.svelte";
</script>

<svelte:head>
  <title>Error {page.status} | {site.title}</title>
  <meta name="description" content={page?.error?.message} />
  <link rel="icon" href="icons/error.svg" type="image/svg+xml" />
</svelte:head>

<div>
  <main>
    <h1
      class="stroke-text"
      style="--stroke: hsl(209 61% 16%); --fill: hsl(212 33% 89%)"
    >
      Ouch
    </h1>
    <p>
      Something quite unexpected has happened. Here's a possibly helpful message
      for context:
    </p>

    <pre class="code-fence" data-language="sh"><code
        >{page?.error?.message}</code
      ></pre>

    <p>
      In all likelihood we have made a huge mistake on our end, but if you spot
      something you think we can fix, feel free to file an issue
      <a
        class="link-underline"
        href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{page.status}&body={page
          ?.error?.message}&labels=bug">on GitHub</a
      >.
    </p>
    <p>
      When all is lost we like to think that home is always a good place to
      start. With that in mind you can try to go back to <a
        class="link-underline"
        href="/">the home page</a
      >.
    </p>
  </main>
  <figure>
    <Serena />
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
