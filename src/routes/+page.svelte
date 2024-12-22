<script>
  import site from "$lib/site";
  import SnowFall from "./SnowFall.svelte";
</script>

<svelte:head>
  <title>{site.title}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<SnowFall color="oklch(55% 0.02 270)" background="oklch(21% 0.05 260)" />

<main>
  <h1>Hi there</h1>
  <p>'tis the season to be redesinin</p>
</main>

<style>
  ::selection {
    color: oklch(97% 0.012 280);
    background: oklch(45% 0.03 250);
  }

  main {
    color: oklch(97% 0.012 280);
    /* background: oklch(21% 0.05 260); */
    padding: 1rem;
    min-block-size: 100svb;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    animation: fade-in-bloom 2s 1s both ease-out;
  }

  main > * {
    color: inherit;
  }

  h1 {
    font-size: clamp(4.2915rem, 3.345rem + 4.7326vi, 7.0128rem);
    line-height: 1.1;
    font-family: var(--font-display);
  }

  p {
    font-size: clamp(1.4063rem, 1.3158rem + 0.4522vi, 1.6663rem);
    font-weight: 700;
    font-style: italic;
  }

  @keyframes fade-in-bloom {
    0% {
      opacity: 0;
      filter: brightness(1) blur(20px);
    }
    10% {
      opacity: 1;
      filter: brightness(2) blur(10px);
    }
    100% {
      opacity: 1;
      filter: brightness(1) blur(0);
    }
  }
</style>
