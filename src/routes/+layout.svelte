<script>
  import "$styles/reset.css";
  import "$styles/global.css";
  import "$styles/utils.css";

  /** @type {{ children: import('svelte').Snippet }} */
  let { children } = $props();
</script>

{@render children()}
