<script>
  export let status;
  export let error;
</script>

<main>
  <h1>{status}</h1>
  <pre>{error.stack}</pre>
</main>