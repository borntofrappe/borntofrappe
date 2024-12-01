<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<h1>{data.title}</h1>

{@render data.content()}
