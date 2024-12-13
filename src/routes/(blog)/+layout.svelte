<script>
  /** @type {{ children: import('svelte').Snippet }} */
  let { children } = $props();
</script>

<div>
  {@render children()}
</div>

<style>
  div :global(.heading),
  div :global(:is(h1, h2, h3):not([class])) {
    --_color-primary: var(--color-primary, hotpink);
    --_fill: var(--color-background, white);
    --_stroke: var(--color-body, black);

    font-family: var(--font-display);
    line-height: 1;
    letter-spacing: 0.1ch;
    color: var(--_fill);
    -webkit-text-stroke: 0.2em var(--_stroke);
    paint-order: stroke;

    &::selection {
      color: var(--_color-primary);
      background: none;
    }
  }

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
