<script>
  export let status;
  export let error;
</script>

<main>
  <h1>{status}</h1>
  {#if status === 404}
    <p>Page not found</p>
  {:else}
    <pre>{error.stack}</pre>
  {/if}
</main>