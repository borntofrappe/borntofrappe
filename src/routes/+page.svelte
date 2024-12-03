<script>
  import SnowFall from "./SnowFall.svelte";
</script>

<svelte:head>
  <title>borntofrappe</title>
</svelte:head>

<SnowFall color="oklch(55% 0.02 270)" background="oklch(21% 0.05 260)" />

<main>
  <h1 class="font-display">Hi there</h1>
  <p>this website is under re-construction</p>
  <p>stay tuned for exciting new changes</p>
</main>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    color: oklch(97% 0.012 280);
    background: oklch(21% 0.05 260);
  }

  :global(::selection) {
    color: oklch(97% 0.012 280);
    background: oklch(21% 0.05 260);
    background: oklch(45% 0.03 250);
  }

  main {
    padding: 1rem;
    min-block-size: 100svb;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: clamp(4.0311rem, 3.36rem + 3.3555vw, 5.9605rem);
    line-height: 1;
    color: var(--fill, oklch(15% 0.05 260));
    -webkit-text-stroke: 0.2em var(--stroke, oklch(97% 0.012 280));
    paint-order: stroke;
  }

  h1::selection {
    color: oklch(84% 0.172 90);
    background: initial;
  }

  p {
    font-size: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
    font-weight: bold;
  }
</style>
