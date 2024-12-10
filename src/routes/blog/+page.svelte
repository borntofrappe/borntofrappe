<script>
  import { formatDate } from "$lib/utils";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<div class="layout">
  <main>
    <h1>Blog</h1>

    {#each data.blog as article}
      <article>
        <h2><a href={article.slug}>{article.title}</a></h2>
        <p>{formatDate(article.date)}</p>
        <p>{article.description}</p>
      </article>
    {/each}
  </main>

  <nav>
    {#if data.page > 1}
      <a href="/blog?page={data.page - 1}">Newer articles</a>
    {/if}

    {#if data.page < data.pages}
      <a href="/blog?page={data.page + 1}">Older articles</a>
    {/if}
  </nav>
</div>

<style>
  .layout {
    max-inline-size: 70ch;
    padding-inline: 1rem;
  }

  main > * + * {
    margin-block-start: 1.5rem;
  }

  main > article:first-of-type {
    margin-block-start: 2rem;
  }

  article > * + * {
    margin-block-start: 0.5rem;
  }

  article {
    line-height: 1.5;
  }

  article h2 {
    line-height: 1.1;
  }

  nav {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  nav > :only-child {
    margin-inline-start: auto;
  }
</style>
