<script>
  /** @type {{ children: import('svelte').Snippet }} */
  let { children } = $props();
</script>

<div>
  {@render children()}
</div>

<style>
  div :global(:is(.link, a:not([class]))) {
    --_color-primary: var(--color-primary, hotpink);
    color: inherit;
    text-decoration: none;
    background: linear-gradient(
        to bottom,
        var(--_color-primary),
        var(--_color-primary)
      ),
      linear-gradient(to bottom, currentColor, currentColor);
    background-size:
      0% 0.2ex,
      100% 0.2ex;
    background-repeat: no-repeat;
    background-position: 0% 100%;
    transition: background-size 0.2s;

    &:hover {
      background-size: 100% 0.2ex;
    }

    &:not(:hover) {
      background-position:
        100% 100%,
        0% 100%;
    }

    &:focus {
      background: none;
    }
  }
</style>
