<script>
  import "../app.css";
  import TimePiece from "./TimePiece.svelte";
</script>

<svelte:head>
  <title>borntofrappe</title>
</svelte:head>

<main>
  <h1 class="font-display">Hi there</h1>

  <p>this website is under re-construction</p>
  <p>stay tuned for exciting new changes</p>

  <figure>
    <TimePiece />
  </figure>
</main>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
  }

  main {
    max-inline-size: 46ch;
    padding: 1rem;
  }

  main > * + * {
    margin-block-start: 0.5rem;
  }

  main > figure {
    margin-block-start: 2rem;
  }

  h1 {
    font-size: 2.75rem;
    line-height: 1;
  }

  figure {
    max-inline-size: 33ch;
  }
</style>
