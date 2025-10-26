<script>
  import Theme from "./Theme.svelte";

  /** @type {{ title?: string }}*/
  const { title = "Hello world" } = $props();
</script>

<header>
  <h1 class="stroke-text">{title}</h1>

  <Theme />
</header>

<style>
  header {
    --theme-color: #f1f5f8;
    --theme-foreground: #639aef;
    --theme-background: #73d2e6;
  }

  :global(html[data-time-of-day="morning"]) header {
    --theme-foreground: #838ac5;
    --theme-background: #9cb2ce;
  }

  :global(html[data-time-of-day="day"]) header {
    --theme-foreground: #639aef;
    --theme-background: #73d2e6;
  }

  :global(html[data-time-of-day="night"]) header {
    --theme-foreground: #7369b5;
    --theme-background: #838ace;
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-time-of-day])) header {
      --theme-foreground: #7369b5;
      --theme-background: #838ace;
    }
  }

  header {
    color: var(--theme-color);
    background: var(--theme-background);
    text-align: center;
    padding: var(--space-m) var(--space-s);
    padding-block-end: 0;
  }

  header :global(> *) {
    max-inline-size: var(--measure-s);
    margin-inline: auto;
  }

  h1.stroke-text {
    --fill: var(--theme-color);
    --stroke: var(--theme-foreground);
  }

  header h1 {
    position: relative;
  }
</style>
