<script>
  import site from "$lib/site";
  import Header from "./Header.svelte";
  import { formatDate } from "$lib/utils";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<svelte:head>
  <title>{site.title}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<Header title="borntofrappe" />

<main>
  {#if data.page === 1}
    <blockquote>
      <p>Welcome!</p>
      <p>
        This is, or rather was, a happy playground for a software developer, one
        <b>Gabriele Corti</b> from northern Italy.
      </p>
      <p>
        There are <em>a few</em> articles on software, but let us be honest, despite
        a couple of musings experimenting with other languages and inspiring tech,
        the time was ripe to archive the project and let it rest.
      </p>
      <p>A testament to a stack deeply enjoyed.</p>
      <p>Evidence of the insanity and daring hand-writing SVG.</p>
      <cite>Gabriele Corti, Autumn 2025</cite>
    </blockquote>
  {/if}

  <div>
    {#each data.blog as { slug, title, date, description }}
      <article>
        <h2><a class="link-underline" href={slug}>{title}</a></h2>
        <time datetime={date}>{formatDate(date)}</time>
        <p>{description}</p>
      </article>
    {/each}

    <nav>
      {#if data.page > 1}
        <a class="link-underline" href="/?page={data.page - 1}"
          >Newer articles</a
        >
      {/if}

      {#if data.page < data.pages}
        <a class="link-underline" href="/?page={data.page + 1}"
          >Older articles</a
        >
      {/if}
    </nav>
  </div>
</main>

<style>
  main {
    padding: var(--space-m) var(--space-s);
    max-inline-size: var(--measure-l);
    margin-inline: auto;
  }

  main {
    > * + * {
      margin-block-start: var(--space-xs);
    }

    div {
      margin-block-start: var(--space-l);
    }
  }

  blockquote {
    max-inline-size: var(--measure-m);
    margin-inline: auto;
    border-radius: var(--space-xs);
    background: var(--surface-1);
    padding: var(--space-m) var(--space-s);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    > cite {
      align-self: end;
    }
    > cite::before {
      content: "— ";
    }
  }

  div > * + * {
    margin-block-start: var(--space-m);
  }

  div > nav {
    margin-block-start: var(--space-xl);
  }

  div article > * + * {
    display: block;
    margin-block-start: var(--space-2xs);
  }

  div article > time {
    font-size: var(--step--1);
    font-style: italic;
  }

  div nav {
    display: flex;
    gap: var(--space-s);
    justify-content: space-between;

    & > :only-child {
      margin-inline-start: auto;
    }
  }
</style>
