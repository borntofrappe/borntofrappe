<script>
  import site from "$lib/site";
  import Header from "./Header.svelte";
  import Update from "./Update.svelte";
  import { formatDate } from "$lib/utils";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<svelte:head>
  <title>{site.title}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<main>
  <Header title="borntofrappe" />

  <div class="content">
    {#if data.page === 1}
      <div class="update">
        <Update />
      </div>
    {/if}

    <div class="blog">
      {#each data.blog as { slug, title, date, description }}
        <article>
          <h2><a class="link-underline" href={slug}>{title}</a></h2>
          <time datetime={date}>{formatDate(date)}</time>
          <p>{description}</p>
        </article>
      {/each}

      <nav>
        {#if data.page > 1}
          <a
            class="link-underline"
            data-direction="start"
            href="/?page={data.page - 1}">Newer articles</a
          >
        {/if}

        {#if data.page < data.pages}
          <a class="link-underline" href="/?page={data.page + 1}"
            >Older articles</a
          >
        {/if}
      </nav>
    </div>
  </div>
</main>

<style>
  .content {
    padding: var(--space-m) var(--space-s);
    max-inline-size: var(--measure-l);
    margin-inline: auto;
  }

  .content {
    > * + * {
      margin-block-start: var(--space-m);
    }
    .update + * {
      margin-block-start: var(--space-xl);
    }
  }

  .blog > * + * {
    margin-block-start: var(--space-m);
  }

  .blog > nav {
    margin-block-start: var(--space-xl);
  }

  .blog article > * + * {
    display: block;
    margin-block-start: var(--space-2xs);
  }

  .blog article > time {
    font-size: var(--step--1);
    font-style: italic;
  }

  .blog nav {
    display: flex;
    gap: var(--space-xl);
    justify-content: center;
  }
</style>
