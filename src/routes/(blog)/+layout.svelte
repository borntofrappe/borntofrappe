<script>
  import "$styles/blog/utils.css";
  import "$styles/blog/blocks.css";

  import Footer from "$lib/components/Footer.svelte";

  /** @type {{ children: import('svelte').Snippet }} */
  let { children } = $props();
</script>

<div class="body">
  {@render children()}
</div>
<div class="footer">
  <Footer />
</div>

<style>
  .body {
    --color: var(--gray-8);
    --background: var(--gray-0);

    --selection-color: var(--gray-9);
    --selection-background: var(--gray-4);
  }

  .body {
    color: var(--color);
    background: var(--background);
    min-block-size: 100svb;
    z-index: 1;
    position: relative;
  }

  .footer {
    position: sticky;
    inset-block-end: 0;
  }

  :global(html[data-time-of-day="morning"]) .body {
    --color: var(--gray-7);
    --background: var(--gray-1);

    --selection-color: var(--gray-8);
    --selection-background: var(--gray-4);
  }

  :global(html[data-time-of-day="day"]) .body {
    --color: var(--gray-8);
    --background: var(--gray-0);

    --selection-color: var(--gray-9);
    --selection-background: var(--gray-4);
  }

  :global(html[data-time-of-day="night"]) .body {
    --color: var(--gray-3);
    --background: var(--gray-9);

    --selection-color: var(--gray-8);
    --selection-background: var(--gray-5);

    color-scheme: dark;
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-time-of-day])) .body {
      --color: var(--gray-3);
      --background: var(--gray-9);

      --selection-color: var(--gray-8);
      --selection-background: var(--gray-5);

      color-scheme: dark;
    }
  }
</style>
