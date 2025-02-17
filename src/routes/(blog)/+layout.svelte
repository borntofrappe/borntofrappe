<script>
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
    color-scheme: light;

    --text: var(--gray-8);
    --surface: var(--gray-0);
    --text-1: var(--gray-9);
    --surface-1: var(--gray-3);
    --text-selection: var(--gray-9);
    --surface-selection: var(--gray-4);
  }

  :global(html[data-time-of-day="morning"]) .body {
    --text: var(--gray-7);
    --surface: var(--gray-1);
    --text-1: var(--gray-9);
    --surface-1: var(--gray-2);
    --text-selection: var(--gray-8);
    --surface-selection: var(--gray-4);
  }

  :global(html[data-time-of-day="day"]) .body {
    --text: var(--gray-8);
    --surface: var(--gray-0);
    --text-1: var(--gray-9);
    --surface-1: var(--gray-3);
    --text-selection: var(--gray-9);
    --surface-selection: var(--gray-4);
  }

  :global(html[data-time-of-day="night"]) .body {
    color-scheme: dark;

    --text: var(--gray-4);
    --surface: var(--gray-9);
    --text-1: var(--gray-3);
    --surface-1: var(--gray-10);
    --text-selection: var(--gray-8);
    --surface-selection: var(--gray-5);
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-time-of-day])) .body {
      color-scheme: dark;

      --text: var(--gray-4);
      --surface: var(--gray-9);
      --text-1: var(--gray-3);
      --surface-1: var(--gray-10);
      --text-selection: var(--gray-8);
      --surface-selection: var(--gray-5);
    }
  }

  .body {
    color: var(--text);
    background: var(--surface);
    min-block-size: 100svb;
    z-index: 1;
    position: relative;
  }

  .footer {
    position: sticky;
    inset-block-end: 0;
  }

  .body :global(::selection) {
    color: var(--text-selection);
    background: var(--surface-selection);
  }

  .body :global(.center-frame) {
    display: block;
    max-inline-size: var(--frame-size, 22rem);
    margin-inline: auto;
  }

  .body :global(.center-frame[data-size="small"]) {
    --frame-size: 16rem;
  }

  .body :global(.center-frame[data-size="medium"]) {
    --frame-size: 36rem;
  }

  .body :global(.center-frame[data-size="large"]) {
    --frame-size: 44rem;
  }

  .body :global(.side-frames) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space, 1rem);
    justify-content: var(--justify, center);
    align-items: var(--align, center);
  }

  .body :global(.side-frames > *) {
    display: block;
    max-inline-size: var(--frame-size, 22rem);
    inline-size: 100%;
  }

  .body :global(hr:not([class])) {
    color: inherit;
    block-size: 2em;
    border: none;
    background: currentColor;
    background: oklch(from currentColor l c h / 0.5);
    -webkit-mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-841.46 -35.72 1682.91 78.21"><path fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="M 0 19 C -21.17 29.12 -21.17 29.12 -18.08 5.87 C -34.24 -11.13 -34.24 -11.13 -11.17 -15.38 C -0.01 -36 -0.01 -36 11.16 -15.38 C 34.23 -11.13 34.23 -11.13 18.07 5.87 C 21.16 29.12 21.16 29.12 0 19" /><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" d="M -839 0 -60 0 M 60 0 839 0" /></svg>');
    mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-841.46 -35.72 1682.91 78.21"><path fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="M 0 19 C -21.17 29.12 -21.17 29.12 -18.08 5.87 C -34.24 -11.13 -34.24 -11.13 -11.17 -15.38 C -0.01 -36 -0.01 -36 11.16 -15.38 C 34.23 -11.13 34.23 -11.13 18.07 5.87 C 21.16 29.12 21.16 29.12 0 19" /><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.5" d="M -839 0 -60 0 M 60 0 839 0" /></svg>');
    -webkit-mask-position: 50% 50%;
    mask-position: 50% 50%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  .body :global(p:not([class]) > code) {
    color: var(--text-1);
    background: var(--surface-1);
    display: inline-block;
    padding: 1px var(--space-2xs);
    border-radius: var(--space-2xs);
  }

  .body :global(table:not([class])) {
    color: var(--text-1);
    background: var(--surface-1);
    border: none;
    table-layout: fixed;
    inline-size: 100%;
    border-collapse: collapse;
  }

  .body :global(table:not([class]) thead th) {
    background: var(--surface-1);
    background: oklch(from var(--surface-1) calc(l * 0.91) c h);
    font-weight: 400;
    text-transform: capitalize;
    padding: var(--space-2xs);
  }

  .body :global(table:not([class]) tbody td) {
    padding: var(--space-2xs) var(--space-s);
  }

  .body :global(table:not([class]) tbody tr:nth-of-type(odd) td) {
    background: oklch(from var(--surface-1) calc(l * 0.96) c h);
  }
</style>
