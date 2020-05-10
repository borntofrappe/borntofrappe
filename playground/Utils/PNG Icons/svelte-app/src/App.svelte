<script>
  import Canvas from "./Canvas.svelte";

  let size = 200;
  let color = "rgb(10, 12, 16)";
  $: download = `icon-${size}`;

  let href;
</script>

<style>
  :global(body) {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2;
    margin: 1rem 0;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  input {
    font-size: 1.25rem;
    font-size: inherit;
    margin-left: 0.5rem;
    font-family: inherit;
    padding: 0.2rem 0.5rem;
    border: 2px solid currentColor;
    background: hsl(0, 0%, 100%);
  }

  a {
    font-size: 1.5rem;
    display: block;
  }
</style>

<form on:submit|preventDefault>
  <label>
    Size
    <input type="number" bind:value="{size}" />
  </label>
  <label>
    Color
    <input type="color" bind:value="{color}" />
  </label>
</form>

<Canvas on:draw="{(e) => href = e.detail}" {size} {color} />

{#if href}
<a {href} {download}>Download <strong>{download}</strong></a>
{/if}
