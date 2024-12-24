<script>
  import "$styles/reset.css";
  import "$styles/global.css";
  import "$styles/utils.css";
  import "$styles/blocks.css";

  /** @type {{ children: import('svelte').Snippet }} */
  let { children } = $props();
</script>

{@render children()}
